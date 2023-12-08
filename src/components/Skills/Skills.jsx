import React from 'react'
import './Skills.css';

const Skills = () => {
  return (
    <>
  
        <h2 className='s1'>SKILLS</h2>
        <div className='skill-title'>
            <p className='skill-title-content'>The skills ,tools and technologies </p>
            <p className='skill-title-content'>I am really good at:</p>
        </div>
        <div className='skills'>
            <div className='skill1'>    
            <i class="fa-brands fa-js icon"></i>
                <h2 className='ui'>JavaScript</h2>  
            </div>
            <div className="skill1">
          
            <i class="fa-brands fa-react icon"></i>
                <h2 className='ui'>React</h2>             
            </div>
            <div className="skill1">
            <i class="fa-brands fa-figma icon"></i>
                <h2 className='ui'>Figma</h2>            
            </div>
            <div className='skill1'>    
            <i class="fa-brands fa-bootstrap icon"></i>
                <h2 className='ui'>Bootstrap</h2> 
            </div>
          
      
    </div>
    </>
  )
}

export default Skills
