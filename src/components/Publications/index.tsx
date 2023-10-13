import { useEffect, useState } from 'react'
import { Publication } from '../Publication'
import { SearchBar } from '../SearchBar'
import {
  PostsContent,
  PublicationsContent,
  Pubs,
  Title,
  TitleContent,
} from './styles'
import axios from 'axios'

interface PostProps {
  number: number
  title: string
  created_at: string
  body: string
}

export function Publications() {
  const [issues, setIssues] = useState<PostProps[]>([])
  const [issueCount, setIssueCount] = useState(0)
  const [filtredIssues, setFiltredIssues] = useState<PostProps[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/GabrielBDZZ/Github-blog/issues',
        )
        setIssues(response.data)
        setIssueCount(response.data.length)
      } catch (error) {
        console.error('Erro ao buscar os posts', error)
      }
    }

    fetchIssues()
  }, [])

  useEffect(() => {
    const filterIssues = () => {
      const filtered = issues.filter((issue) => {
        return issue.title
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      })
      setFiltredIssues(filtered)
    }
    filterIssues()
  }, [searchQuery, issues])

  return (
    <PublicationsContent>
      <TitleContent>
        <Title>Publicações</Title>
        <Pubs>{`${issueCount} Publicações`}</Pubs>
      </TitleContent>
      <SearchBar setSearchQuery={setSearchQuery} />
      <PostsContent>
        {filtredIssues.map((issue) => (
          <Publication key={issue.number} issue={issue} />
        ))}
      </PostsContent>
    </PublicationsContent>
  )
}
