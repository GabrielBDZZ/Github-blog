import { NavLinkContent, PostContent } from './styles'

export function Publication() {
  return (
    <NavLinkContent to="/post" title="Post">
      <PostContent>
        <div>
          <h1>JavaScript data types and data structures</h1>
          <span>Há 1 dia</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ratione, dolorum minima ad nesciunt autem corrupti accusantium!
        </p>
      </PostContent>
    </NavLinkContent>
  )
}
