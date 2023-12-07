import React from 'react'
import mocmob from '../../assets/images/mockup-mobile.png'
import mocweb from '../../assets/images/mockup-web.png'
import './Projects.css';

const Projects = () => {
  return (
      <div className='project'>
        <div className='pro-title'>
            <p className='pro-title-content'>Work</p>
            <p className='pro-content'>Things I've built so far  </p>
        </div>
        <div className='pro'>
          <div className="column1">
                <img src={mocmob} alt="hello" /> 
                <p className='col-title'>MY FOOD Mobile App</p>
                <p className='col-title'>Tool used : Figma</p>
                
          </div>
          <div className='column1'>      
          
                <img src={mocweb} alt="hello" /> 
                <p className='col-title'>MY FOOD Website</p>
                <p className='col-title'>Tool used : Figma</p>  
          </div>
        </div>
       
        
</div>
  )
}

export default Projects
