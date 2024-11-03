import Link from 'next/link'
import ProductCard from './pwm002ClientandServerComponents/ProductCard'
// This is home page

export default function Home() {
  return (
    <main>
      <h1 style={{color:"black"}}>Hello world!!!</h1>
      <Link href="/pwm001ProjectStructure" style={{color:"black"}}>Go to page.tsx file which is in project structure</Link>
      <ProductCard/> 
      {/*
        At first it gives error as the event handlers cannot be added to the client props
        Note: Every component in the Next.js is the  server component 
      */} 
    </main>
  )
}
