import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  )
}
