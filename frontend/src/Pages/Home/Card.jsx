import React from 'react'
import '../Home/Card.css'
const Card = () => {
  return (
    <div>
        <div className='card-head'>
            <img className='card-img' src='https://images.unsplash.com/photo-1605086998852-18371cfd9b2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
            <p className='p_name'>Contour De Force Eyes And Face</p>
           
            <p>2 shades</p>
            
            <h1 className='price-m'>₹849</h1>

            <div className='makup_button'>
            <div className='white-list'><i className="fa-regular fa-heart"></i></div>
             <button className='main_cart'>ADD TO CART</button>
             <br/>
      </div>
      </div>
    </div>
  )
}

export default Card