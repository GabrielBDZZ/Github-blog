import {
  ArrowArcLeft,
  Calendar,
  ChatCircleDots,
  GithubLogo,
  LinkSimple,
} from '@phosphor-icons/react'
import {
  DataContent,
  Header,
  PostContainer,
  PostData,
  PostTextContent,
  PostTitle,
} from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { formatRelativeDate } from '../../utils/formatter'

interface PostData {
  title: string
  html_url: string
  user: {
    login: string
  }
  created_at: string
  comments: string
  body: string
}

interface RouteParams {
  id: string
  [key: string]: string | undefined
}

export function Post() {
  const { id } = useParams<RouteParams>()
  const [postData, setPostData] = useState<PostData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/GabrielBDZZ/Github-blog/issues/${id}`,
        )
        setPostData(response.data)
      } catch (error) {
        console.error('Erro ao buscar os dados da postagem', error)
      }
    }

    fetchData()
  }, [id])

  return (
    <>
      <PostContainer>
        <Header>
          <a href="/" rel="noreferrer">
            <ArrowArcLeft size={12} /> VOLTAR
          </a>
          <a
            href={postData ? postData.html_url : 'Carregando...'}
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB <LinkSimple size={12} />
          </a>
        </Header>
        <PostTitle>{postData ? postData.title : 'Carregando...'}</PostTitle>
        <DataContent>
          <PostData>
            <GithubLogo size={18} weight="fill" />
            {postData ? postData.user.login : 'Carregando...'}
          </PostData>
          <PostData>
            <Calendar size={18} weight="fill" />
            {postData
              ? formatRelativeDate(postData.created_at)
              : 'Carregando...'}
          </PostData>
          <PostData>
            <ChatCircleDots size={18} weight="fill" />
            {postData ? postData.comments : 'Carregando...'} Comentários
          </PostData>
        </DataContent>
      </PostContainer>
      <PostTextContent>
        <p>{postData ? postData.body : 'Carregando...'}</p>
      </PostTextContent>
    </>
  )
}
