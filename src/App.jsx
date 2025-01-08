import Home from './components/Home'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-montserrat bg-[#f1f1f1] text-zinc-900 min-h-screen'>
      <Navbar />
      <Home />
      <Marquee />
      <About />
      <Eyes />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;
