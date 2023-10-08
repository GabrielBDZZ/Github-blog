import { useEffect, useState } from 'react'
import {
  ProfileAbout,
  ProfileContainer,
  ProfileDesc,
  ProfileName,
  ProfilePic,
  ProfileSocial,
} from './styles'
import { Buildings, GithubLogo, Users } from '@phosphor-icons/react'
import axios from 'axios'

interface UserData {
  name: string
  bio: string
  avatar_url: string
  login: string
  followers: string
  company: string
  url: string
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
        <ProfileName>{userData ? userData.name : 'Carregando...'}</ProfileName>
        <ProfileDesc>{userData ? userData.bio : 'Carregando...'}</ProfileDesc>
        <ProfileSocial
          target="_blank"
          href={userData ? userData.url : 'Carregando...'}
        >
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
      </ProfileAbout>
    </ProfileContainer>
  )
}
