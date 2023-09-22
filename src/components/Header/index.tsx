import { HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/Logo.svg"
import effect1 from "../../assets/effect1.svg"
import effect2 from "../../assets/effect2.svg"

export function Header  () {
    return (
        <HeaderContainer>
            <img src={effect1} alt="" />
            <HeaderContent>
                <img src={logo} alt="" />
            </HeaderContent>
            <img src={effect2} alt="" />
        </HeaderContainer>
    )
}