import Features from "./sections/Features.jsx"
import Header from "./sections/Header.jsx"
import Hero from "./sections/Hero.jsx"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
    </main>
  )
}

export default App