import { Route, Routes } from "react-router"

import Header from "@/components/Header"
import About from "@/pages/About"
import Home from "@/pages/Home"
import ScrollToTop from "@/components/ScrollToTop"
import NotFound from "@/pages/NotFound"
import Post from "@/pages/Post"
import Projects from "@/pages/Projects"

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
