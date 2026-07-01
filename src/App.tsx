import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { Separator } from "@/components/ui/separator"
import Currently from "@/components/Currently"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Separator />
        <Currently />
        <Separator />
      </main>
    </>
  )
}

export default App
