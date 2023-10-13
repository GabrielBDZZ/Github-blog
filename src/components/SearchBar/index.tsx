import { InputSearch } from './styles'

interface SearchBarProps {
  setSearchQuery: (query: string) => void
}

export function SearchBar({ setSearchQuery }: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <InputSearch placeholder="Buscar conteúdo" onChange={handleInputChange} />
  )
}
