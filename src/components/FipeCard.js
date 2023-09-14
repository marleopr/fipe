import styled from "styled-components"
import colors from "../constants/colors"
import TrackPrint from "./TrackPrint"

const FipeCard = ({ data }) => {
    return (
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <Card>
                <p><span className="request">Marca:</span> <span className="result">{data.Marca}</span> </p>
                <p><span className="request">Modelo:</span> <span className="result">{data.Modelo}</span></p>
                <p><span className="request">Ano:</span> <span className="result">{data.AnoModelo}</span></p>
                <p><span className="request">Combustível:</span> <span className="result">{data.Combustivel}</span></p>
                <p><span className="request">Valor:</span> <span className="result">{data.Valor}</span></p>
                <p><span className="request">Código Fipe:</span> <span className="result">{data.CodigoFipe}</span></p>
                <p><span className="request">Mês de referência:</span> <span className="result">{data.MesReferencia}</span></p>
            </Card>
            <div className="card__content">
            </div>
            <TrackPrint />
        </div>
    )
}
export default FipeCard
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* text-align: start; */
    align-items: start;
    margin: 10px;
    p{
        display: flex;
        flex-direction: row;
        text-align: start;
    }
    .request {
        width: 150px;
    }
    .result {
     margin-left: 5px;
     font-weight: bolder;
     color: ${colors.blue};
    }
    @media screen and (max-device-width: 480px) {
       p{
        font-size: 0.7rem;
       }
       .request {
        width: 100px;
    }
    }
    `