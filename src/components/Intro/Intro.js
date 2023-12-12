import React from 'react';
import { Link } from 'react-scroll';
import './Intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import ResumePdf from '../../assets/swaroop.pdf';

function Intro() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumePdf;
    link.download = 'Tipparthi_Sai_Swaroop_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='intro'>
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Tipparthi Sai Swaroop</span><br/>Web Developer</span>
        <p className="introPara">I am a Web Developer with experience in creating <br /> visually appealing and user-friendly websites.</p>
        <Link><button className='btn' onClick={handleDownload}><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg'/>
    </section>
  );
}

export default Intro;

