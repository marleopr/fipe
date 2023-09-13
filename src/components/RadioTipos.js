import { FaCar, FaMotorcycle, FaTruck } from "react-icons/fa";

const RadioTipos = ({ tipo, setTipo }) => {
    const opcoes = [
        { value: 'carros', label: 'Carro', icon: <FaCar /> },
        { value: 'motos', label: 'Moto', icon: <FaMotorcycle /> },
        { value: 'caminhoes', label: 'Caminhão', icon: <FaTruck /> },
    ];

    const handleRadioChange = (event) => {
        setTipo(event.target.value);
    };
    return (
        <div className="container">
            <div className="radio-tile-group">
                {opcoes.map(opcao => (
                    <div className="input-container" key={opcao.value}>
                        <input
                            id={opcao.value}
                            className="radio-button"
                            type="radio"
                            name="radio"
                            value={opcao.value}
                            checked={tipo === opcao.value}
                            onChange={handleRadioChange}
                        />
                        <div className="radio-tile">
                            <div className={`icon ${opcao.value}-icon`}>
                                {opcao.icon}
                            </div>
                            <label htmlFor={opcao.value} className="radio-tile-label">{opcao.label}</label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RadioTipos
