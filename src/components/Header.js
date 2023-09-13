import { styled } from "styled-components";
import DownloadButton from "./DownloadButton";
import { goToHomePage } from "../routes/Cordinator";
import { useNavigate } from "react-router-dom";
import muscleCar from "../assets/musclecarLogo.png"

const Header = () => {
    const navigate = useNavigate()

    return (
        <Main>
            <div style={{ cursor: "pointer" }} onClick={() => goToHomePage(navigate)}>
                <ImgLogo src={muscleCar} />
            </div>
            <DownloadButton />
        </Main>
    )
}
export default Header;

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImgLogo = styled.img`
    width: 25rem;
    margin: 10px;
    @media screen and (max-device-width: 480px) {
        width: 18rem;
  }
`