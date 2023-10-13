import { useEffect, useState } from 'react'
import {
  ProfileAbout,
  ProfileContainer,
  ProfileDesc,
  ProfileName,
  ProfilePic,
  ProfileSocial,
  TitleContainer,
  GithubProfile,
} from './styles'
import { Buildings, GithubLogo, LinkSimple, Users } from '@phosphor-icons/react'
import axios from 'axios'

interface UserData {
  name: string
  bio: string
  avatar_url: string
  login: string
  followers: string
  company: string
  html_url: string
}

export function Profile() {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/GabrielBDZZ',
        )
        setUserData(response.data)
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário', error)
      }
    }

    fetchData()
  }, [])

  return (
    <ProfileContainer>
      <ProfilePic src={userData ? userData.avatar_url : 'Carregando...'} />
      <ProfileAbout>
        <TitleContainer>
          <ProfileName>
            {userData ? userData.name : 'Carregando...'}
          </ProfileName>
          <GithubProfile
            href={userData ? userData.html_url : 'Carregando...'}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <LinkSimple size={12} />
          </GithubProfile>
        </TitleContainer>
        <ProfileDesc>{userData ? userData.bio : 'Carregando...'}</ProfileDesc>
        <div>
          <ProfileSocial>
            <GithubLogo size={18} weight="fill" />
            {userData ? userData.login : 'Carregando...'}
          </ProfileSocial>
          <ProfileSocial>
            <Buildings size={18} weight="fill" />
            {userData ? userData.company : 'Carregando...'}
          </ProfileSocial>
          <ProfileSocial>
            <Users size={18} weight="fill" />
            {userData ? userData.followers : 'Carregando...'} Seguidores
          </ProfileSocial>
        </div>
      </ProfileAbout>
    </ProfileContainer>
  )
}
