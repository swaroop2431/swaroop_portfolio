import React from 'react'
import './Skills.css'
import UIDesgin from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and javaScript, as well as ReactJs and Microfrontend.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesgin} alt="UI-Design" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text. You can write your own content</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="Web-Design" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text. You can write your own content</p>
                </div>
            </div>            
            <div className="skillBar">
                <img src={AppDesign} alt="App-Design" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text. You can write your own content</p>
                </div>
            </div>        
        </div>
    </section>
  )
}

export default Skills
