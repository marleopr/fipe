import { useEffect, useState } from "react"
import RadioButtons from "../components/RadioButtons"
import axios from "axios"
import { API_PLACA } from "../constants/BASE_URL"

const SearchPlaca = () => {
    const [data, setData] = useState(null); // Inicialize como null para verificar se os dados foram carregados

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    API_PLACA,
                    {
                        placa: "IUK2694", // Substitua pela placa desejada
                    },
                    {
                        headers: {
                            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2NsdXN0ZXIuYXBpZ3JhdGlzLmNvbS9hcGkvdjIvbG9naW4iLCJpYXQiOjE2OTQxOTY3NDQsImV4cCI6MTcyNTczMjc0NCwibmJmIjoxNjk0MTk2NzQ0LCJqdGkiOiJZRmdYMWxUTDNPQnhENHhmIiwic3ViIjoiNTE4MyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.OVjb38IxRaiFXr5NNFhyB0nvxq_HLFI-Kz0Pp-uuCAQ",
                            SecretKey: "193b1f11-49ae-4a43-80bc-8b3349651632",
                            DeviceToken: "c3eaa522-5d6b-4964-9ca2-49e71c9b2dcd"
                        },
                    }
                );
                setData(response.data.response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Chame a função de busca quando o componente for montado
    }, []); // O segundo argumento vazio garante que isso seja executado apenas uma vez

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "100%", marginTop: '20px', boxSizing: 'border-box', textAlign: 'center' }}>
            <RadioButtons />
            <div style={{ marginTop: '50px' }}>
                {data ? (
                    // Renderize os dados aqui
                    <div>
                        <img style={{ width: "100px" }} src={data.logo} alt="logo" />
                        <h3>{data.placa} - {data.municipio} - {data.uf}</h3>
                        <h2>{data.extra.marca_modelo.modelo}</h2>
                        <h3>Ano/Modelo: {data.extra.ano_fabricacao}/{data.extra.ano_modelo}</h3>
                        <h3>Cor: {data.extra.cor_veiculo.cor}</h3>
                        <h3>Combustível: {data.extra.combustivel.combustivel}</h3>
                        <h3>Potência: {data.extra.potencia}CV</h3>
                        <h3>Categoria: {data.extra.tipo_veiculo.tipo_veiculo}</h3>
                        <h3>Segmento: {data.extra.marca_modelo.sub_segmento}</h3>
                        <h3>Nacionalidade: {data.extra.nacionalidade.nacionalidade}</h3>
                        <h3>{data.extra.quantidade_passageiro} lugares</h3>
                    </div>
                ) : (
                    // Mostre um indicador de carregamento enquanto os dados estão sendo buscados
                    <p>Buscando...</p>
                )}
            </div>
        </div>
    );
};
export default SearchPlaca
