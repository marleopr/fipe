
import { useEffect, useState } from "react"
import axios from "axios"
import { API_TABELA } from "../constants/BASE_URL"
import { Select } from "@chakra-ui/react"
import colors from "../constants/colors"
import ButtonAll from "../components/ButtonAll"
import CarLoader from "../components/CarLoader"
import WheelLoader from "../components/WheelLoader"
import FipeCard from "../components/FipeCard"
import RadioTipos from "../components/RadioTipos"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components"

const SearchTabela = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [tipo, setTipo] = useState("")
    const [marca, setMarca] = useState([])
    const [selectedMarca, setSelectedMarca] = useState("")
    const [modelo, setModelo] = useState([])
    const [selectedModelo, setSelectedModelo] = useState("")
    const [ano, setAno] = useState([])
    const [selectedAno, setSelectedAno] = useState("")

    const handleFipe = async () => {
        setData(null)
        setLoading(true)
        try {
            const res = await axios.get(
                `${API_TABELA}/${tipo}/marcas/${selectedMarca}/modelos/${selectedModelo}/anos/${selectedAno}`
            )
            setLoading(false)
            setData(res.data)
            toast.success("Veículo encontrado!")
        } catch (error) {
            toast.error("Veículo não encontrado!")
            setLoading(false)
        }
    }

    useEffect(() => {
        setSelectedMarca("")
        setSelectedModelo("")
        setModelo([])
        setAno([])
        if (tipo) {

            async function fetchMarcas() {
                try {
                    const res = await axios.get(
                        `${API_TABELA}/${tipo}/marcas`
                    )
                    setMarca(res.data)
                } catch (error) {
                    console.error(error)
                }
            }
            fetchMarcas()
        }
    }, [tipo])

    const handleMarcaChange = async (event) => {
        setSelectedMarca(event.target.value)
        setSelectedModelo("")
        setSelectedAno("")
        try {
            const res = await axios.get(
                `${API_TABELA}/${tipo}/marcas/${event.target.value}/modelos`
            )
            setModelo(res.data.modelos)
        } catch (error) {
            console.error(error)
        }
    }

    const handleModeloChange = async (event) => {
        setSelectedModelo(event.target.value)
        setSelectedAno("")
        try {
            const res = await axios.get(
                `${API_TABELA}/${tipo}/marcas/${selectedMarca}/modelos/${event.target.value}/anos`
            )
            setAno(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const allSelecteds = () => {
        return tipo && selectedMarca && selectedModelo && selectedAno
    }

    const handleNovaBusca = () => {
        // Limpe os estados e os dados da busca anterior
        setTipo("");
        setMarca([]);
        setSelectedMarca("");
        setModelo([]);
        setSelectedModelo("");
        setAno([]);
        setSelectedAno("");
        setData(null);
    };

    return (
        <Main>
            <div style={{ width: '100%', marginBottom: '10px', textAlign: 'start', color: 'white' }}>
                <ToastContainer />
                <RadioTipos tipo={tipo} setTipo={setTipo} />
                <Select
                    bg='navy'
                    borderColor='navy'
                    color='white'
                    value={selectedMarca}
                    onChange={handleMarcaChange}
                >
                    <option hidden value='' style={{ color: colors.navy }}>Marca</option>
                    {marca.map((item) => (
                        <option key={item.codigo} value={item.codigo} style={{ color: colors.navy }}>{item.nome}</option>
                    ))}
                </Select>
                <Select
                    bg='navy'
                    borderColor='navy'
                    color='white'
                    value={selectedModelo}
                    onChange={handleModeloChange}
                >
                    <option hidden value='' style={{ color: colors.navy }}>Modelo</option>
                    {modelo.map((item) => (
                        <option key={item.codigo} value={item.codigo} style={{ color: colors.navy }}>{item.nome}</option>
                    ))}
                </Select>
                <Select
                    bg='navy'
                    borderColor='navy'
                    color='white'
                    value={selectedAno}
                    onChange={(event) => setSelectedAno(event.target.value)}
                >
                    <option hidden value='' style={{ color: colors.navy }}>Ano</option>
                    {ano.map((item) => (
                        <option key={item.codigo} value={item.codigo} style={{ color: colors.navy }}>{item.nome}</option>
                    ))}
                </Select>
            </div>
            {data && data.Marca ? (
                <ButtonAll onClick={handleNovaBusca} label="Nova Busca" width="15rem" height='50px' />
            ) : (
                <ButtonAll onClick={handleFipe} isDisabled={!allSelecteds()} label="Buscar" width="15rem" height='50px' />
            )}
            {loading ? (
                <CarLoader />
            ) : (
                data && data.Marca ? (
                    <FipeCard data={data} />
                ) : (
                    <WheelLoader />
                )
            )}
        </Main >
    )
}
export default SearchTabela
const Main = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
    `