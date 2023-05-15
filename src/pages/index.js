import { Inter } from 'next/font/google'
import Content from './component/content'
import Navbar from './component/navbar';
import Footer from './component/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
     <Content/>
     <Footer/>
    </div>
  )
}
