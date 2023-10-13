import { useEffect, useState } from 'react'
import { NavLinkContent, PostContent, TitleContent } from './styles'
import axios from 'axios'
import { formatRelativeDate } from '../../utils/formatter'

interface PostProps {
  id: number
  title: string
  created_at: string
  body: string
}

interface PublicationProps {
  issue: PostProps
}

export function Publication({ issue }: PublicationProps) {
  const [postData, setPostData] = useState<PostProps | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/GabrielBDZZ/Github-blog/issues',
        )
        if (response.data.length > 0) {
          setPostData(response.data[0])
        } else {
          setPostData(null)
        }
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário', error)
      }
    }

    fetchData()
  }, [])

  return (
    <NavLinkContent to="/post" title="Post">
      <PostContent>
        {postData ? (
          <div>
            <TitleContent>
              <h1>{issue.title}</h1>
              <span>{formatRelativeDate(issue.created_at)} </span>
            </TitleContent>
            <p>{issue.body}</p>
          </div>
        ) : (
          <div>
            <h1>Carregando...</h1>
            <span>Carregando...</span>
            <p>Carregando...</p>
          </div>
        )}
      </PostContent>
    </NavLinkContent>
  )
}
