import React from 'react'
import './Work.css'

const Work = () => {
  return (

    <div className='work-exp'>
        <div className='work-exp1'>
            <h2 className='work-title'>EXPERIENCE</h2>
            <p className='work-des'>Here is a quick summary of</p>
            <p className='work-des'>my most recent experiences</p>

        </div>
        <div className='work'>

            
            <div className="work-skill">           
                    <h2 className='ui-work'> Freelance Technical Trainer (python)</h2>
                    <p className='work-content'>July 2019 to till date</p>
            </div>
            <div className="work-skill">           
                    <h2 className='ui-work'> MY FOOD(Marketing and Branding) </h2>
                    <p className='work-content'>kanyakumari District,Aug 2020 to till date</p>
            </div>        

            <div className='work-skill'>                        
                    <h2 className='ui-work'>Assistant Professor</h2>
                    <p className='work-content'>Marthandam College of Engineering and 
Technology, Kanyakumari , Jan 2010 to June 2019 </p>

            </div>
         </div>
      
    </div>
  )
}

export default Work
