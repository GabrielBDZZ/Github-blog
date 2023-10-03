import { Publication } from '../Publication'
import { SearchBar } from '../SearchBar'
import {
  PostsContent,
  PublicationsContent,
  Pubs,
  Title,
  TitleContent,
} from './styles'

export function Publications() {
  return (
    <PublicationsContent>
      <TitleContent>
        <Title>Publicações</Title>
        <Pubs>6 Publicações</Pubs>
      </TitleContent>
      <SearchBar />
      <PostsContent>
        <Publication />
        <Publication />
        <Publication />
        <Publication />
        <Publication />
        <Publication />
      </PostsContent>
    </PublicationsContent>
  )
}
