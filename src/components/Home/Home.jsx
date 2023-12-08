import React from 'react'
import './Home.css'
import img from '../../assets/images/4.png'

const Home = () => {
  return (
    <div className='Header-1'>
        <div className="column">
          <div className='title'>
                  I'm  Bibin Pon George <br/>
                  Front-End Developer & Designer
              </div>
              <p className='content'>
                    Multitalented and highly motivated individual with excellent knowledge in design and development.
              </p>  
          </div>
        <div className='column'>
          <img src={img} alt="hello" />
        </div>
           
    </div>
  )
}

export default Home
