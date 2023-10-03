import {
  ArrowArcLeft,
  Calendar,
  ChatCircleDots,
  GithubLogo,
  LinkSimple,
} from '@phosphor-icons/react'
import { PostContainer, PostData, PostTextContent, PostTitle } from './styles'

export function Post() {
  return (
    <>
      <PostContainer>
        <div>
          <a href="/" rel="noreferrer">
            <ArrowArcLeft size={12} /> VOLTAR
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            VER NO GITHUB <LinkSimple size={12} />
          </a>
        </div>
        <PostTitle>JavaScript data types and data structures</PostTitle>
        <PostData>
          <GithubLogo size={18} weight="fill" />
          gabrielbdzz
        </PostData>
        <PostData>
          <Calendar size={18} weight="fill" />
          Há 1 dia
        </PostData>
        <PostData>
          <ChatCircleDots size={18} weight="fill" />
          32 Comentários
        </PostData>
      </PostContainer>
      <PostTextContent>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sed
          voluptatibus ipsam. Obcaecati cupiditate officia ratione numquam
          quaerat quas qui eos repellat. Quia, ut nihil nemo illum reprehenderit
          blanditiis. Maiores.
        </p>
      </PostTextContent>
    </>
  )
}
