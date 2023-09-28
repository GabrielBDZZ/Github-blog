import { SearchBar } from '../SearchBar'
import { PublicationsContent, Pubs, Title, TitleContent } from './styles'

export function Publications() {
  return (
    <PublicationsContent>
      <TitleContent>
        <Title>Publicações</Title>
        <Pubs>6 Publicações</Pubs>
      </TitleContent>
      <SearchBar />
    </PublicationsContent>
  )
}
