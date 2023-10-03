import {
  ProfileAbout,
  ProfileContainer,
  ProfileDesc,
  ProfileName,
  ProfilePic,
  ProfileSocial,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { Buildings, GithubLogo, Users } from '@phosphor-icons/react'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePic src={Logo} />
      <ProfileAbout>
        <ProfileName>Gabriel Bondezan</ProfileName>
        <ProfileDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          dolorem consequuntur tempora reiciendis eveniet nesciunt iste quasi
          voluptatum!
        </ProfileDesc>
        <ProfileSocial target="_blank" href="https://github.com/GabrielBDZZ">
          <GithubLogo size={18} weight="fill" />
          gabrielbdzz
        </ProfileSocial>
        <ProfileSocial
          target="_blank"
          href="https://www.linkedin.com/in/gabriel-bondezan-amianti-44b54419b/"
        >
          <Buildings size={18} weight="fill" />
          Center Informática
        </ProfileSocial>
        <ProfileSocial>
          <Users size={18} weight="fill" />
          32 Seguidores
        </ProfileSocial>
      </ProfileAbout>
    </ProfileContainer>
  )
}
