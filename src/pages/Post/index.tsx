import {
  ArrowArcLeft,
  Calendar,
  ChatCircleDots,
  GithubLogo,
  LinkSimple,
} from '@phosphor-icons/react'
import { PostContainer, PostData, PostTextContent, PostTitle } from './styles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { formatRelativeDate } from '../../utils/formatter'

interface RouteParams {
  id: string
}

export function Post() {
  const { id } = useParams<RouteParams>()
  const [postData, setPostData] = useState<any>(null)

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
        <div>
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
        </div>
        <PostTitle>{postData ? postData.title : 'Carregando...'}</PostTitle>
        <PostData>
          <GithubLogo size={18} weight="fill" />
          {postData ? postData.user.login : 'Carregando...'}
        </PostData>
        <PostData>
          <Calendar size={18} weight="fill" />
          {postData ? formatRelativeDate(postData.created_at) : 'Carregando...'}
        </PostData>
        <PostData>
          <ChatCircleDots size={18} weight="fill" />
          {postData ? postData.comments : 'Carregando...'} Comentários
        </PostData>
      </PostContainer>
      <PostTextContent>
        <p>{postData ? postData.body : 'Carregando...'}</p>
      </PostTextContent>
    </>
  )
}
