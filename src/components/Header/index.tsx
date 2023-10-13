import { HeaderContainer, HeaderContent } from './styles'
import logo from '../../assets/Logo.svg'
import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const history = useNavigate()

  const handleClick = () => {
    history(`/`)
  }

  return (
    <HeaderContainer>
      <img src={effect1} alt="" />
      <HeaderContent>
        <img src={logo} alt="" onClick={handleClick} />
      </HeaderContent>
      <img src={effect2} alt="" />
    </HeaderContainer>
  )
}
