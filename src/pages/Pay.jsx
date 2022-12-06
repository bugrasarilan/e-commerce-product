import React from 'react'
import { Link } from 'react-router-dom'



function Pay() {
 
//3. sayfa
  return (
    <div className='productpages'>
      <div>
      <Link to="/"><button className='buttoncount' >Back to page </button></Link>
        <h1> <p>THANK YOU  </p>  </h1>
        <h1> <p>PAYMENT SUCCESSFUL  </p>  </h1>
      

      </div>
     

    </div>
  )
}

export default Pay