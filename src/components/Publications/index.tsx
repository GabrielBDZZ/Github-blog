import { Post } from '../Post'
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContent>
    </PublicationsContent>
  )
}
