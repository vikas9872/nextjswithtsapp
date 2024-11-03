'use client'
{/*To convert server component to the client component: 'use client'. This must be always on the top of the file*/}
import React from 'react'

const AddtoCart = () => {
  return (
    <div>
      <button onClick={()=>console.log("Clicked")} style={{color:"black"}}>Add to cart</button>
    </div>
  )
}

export default AddtoCart
