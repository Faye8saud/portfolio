import { useState } from 'react'
import './styles.css'
import {motion} from 'framer-motion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownDivider } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  const [count, setCount] = useState(0)

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const mobileMenu = (
    <i class="fa-solid fa-bars"></i>
  )
  return (
    <>

      <section className={`hero ${isChecked ? 'checked' : ''}`}>

        <nav className={isChecked ? 'checked' : ''}>
        <div className='navigation'>
      <DropdownButton id="dropdown-basic-button" title={mobileMenu}>
      <Dropdown.Item href="#about">about</Dropdown.Item>
      <Dropdown.Item href="#projects">projects</Dropdown.Item>
      <Dropdown.Item href="#contact">Contact</Dropdown.Item>
    </DropdownButton>
       </div>

          <div  className='logo' >
       <a href="#home"> <h2>F</h2> </a> 
        </div>
        <div className='links'>
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">Contact</a>
        </div>

  
<motion.label layout className="switch">
  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
  <span class="slider round"></span>
</motion.label>
        </nav>

        <div id='home' className={`main-text ${isChecked ? 'checked' : ''}`}>
          <h2> I'm <span>Fay,</span>  </h2>
          <motion.h1
         layout
        whileInView={{opacity:1}}
        initial={{ x: -100,opacity:0 }} // Initial position (off-screen to the left)
        animate={{ x: 0 }}     // Final position (on-screen)
        transition={{ type: "spring", stiffness: 100, damping: 10 }} // Animation transition
          className='heading'>a Web developer</motion.h1>
          <h3 id='h3'>if you want a stand out website, you need a stand out developer</h3>
        </div>
        <motion.a
    whileHover={{ scale: 1.1 , rotate:1.5}}
    whileTap={{ scale: 1.1 , rotate:1.5}} id='main-btn' href="#contact">Contact me</motion.a>
      </section>
      <section  id="about" className={`about  ${isChecked ? 'checked' : ''}`}>
       <div className='card'>
        <div  id="about" className='about-section'>
        <div className='card-img'>
          <img src='../src/assets/resources/laptop-removebg-preview.png' alt="" />
        </div>
        <div className='card-text'>
        <h3 id='web'>About me</h3>
        <p>i graduated college with a software engineering degree,i'm a passionate web developer intersted in making aesthetically pleasing and useful websites, i enjoy design and coding more than anything .... </p>
       </div>
       </div>
       <h3 id='t'> topics im familiar with... </h3>
        <div className='skills-container'>
          <div className='skill'>
            <img src="../src/assets/resources/Subject.png" alt="frontend" />
            <h3>Frontend development</h3>
            <p>  I specialize in crafting immersive user experiences through clean and responsive web design. With expertise in <span>HTML, CSS, and JavaScript</span>  frameworks like <span>React</span>  </p>
          </div>
          <div className='skill'>
            <img src="../src/assets/resources/ui.png" alt="frontend" />
            <h3> UI/UX design</h3>
            <p> with a passion for user-centric solutions, I excel in crafting visually appealing interfaces using <span>Figma.</span>  From wireframing to prototyping</p>
          </div>
          <div className='skill'>
            <img src="../src/assets/resources/backend.png" alt="frontend" />
            <h3>API Interaction</h3>
            <p>With a strong foundation in API Interaction, I specialize in leveraging the power of <span>REST APIs: CRUD Operations, Status Codes, Authentication</span>  to build robust, scalable, and secure web applications.</p>
          </div>

        </div>
       </div>

    
      
      </section>
      <section className={`p  ${isChecked ? 'checked' : ''}`}>
      <h2 id='title'>Projects i worked on </h2>
  
       <div id="projects" className='projects'>
        

          <div className='project-card right'>
            <img src="../src/assets/resources/sq.jpeg" alt="project image" />
            <div  className='text'>
              <h3>crowdspark website</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, voluptatum accusantium ea similique blanditiis repellendus odit, nesciunt, architecto esse cumque soluta vel excepturi</p>
              <a href="https://faye8saud.github.io/movie-mania-website/"> visit demo <i class="fa-solid fa-arrow-right-to-bracket"></i> </a>
            </div>
          </div>

          <div className='project-card left'>
          <img src="../src/assets/resources/sq.jpeg" alt="project image" />
            <div className='text'>
              <h3>crowdspark website</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, voluptatum accusantium ea similique blanditiis repellendus odit, nesciunt, architecto esse cumque soluta vel excepturi</p>
              <a href="https://faye8saud.github.io/movie-mania-website/"> visit demo <i class="fa-solid fa-arrow-right-to-bracket"></i> </a>
            </div>
          </div>
          <div className='project-card right'>
          <img src="../src/assets/resources/sq.jpeg" alt="project image" />
            <div className='text'>
              <h3>crowdspark website</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, voluptatum accusantium ea similique blanditiis repellendus odit, nesciunt, architecto esse cumque soluta vel excepturi</p>
              <a href="https://faye8saud.github.io/movie-mania-website/"> visit demo <i class="fa-solid fa-arrow-right-to-bracket"></i> </a>
            </div>
          </div>

       </div>
       </section>

      <section id='contact' className={`contact ${isChecked ? 'checked' : ''}`}>
    <h2>Contact me through my accounts</h2>
    <div  className='container'>
    <div className='links'>
    <a href="https://twitter.com/deramanksa?s=21&t=KYtBjAPO1CRMUI3ufHUk8A"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://www.instagram.com/deraman.sa?igsh=NTc4MTIwNjQ2YQ=="><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div className='email'>
    <i class="fa-solid fa-envelope"></i>
    <p>Fayii8866@gmail.com</p>
        </div>
          
        </div>
      </section>
      <footer className={isChecked ? 'checked' : ''}>
       <p> All rigths reserved @faye8saud</p> 
      </footer>
    </>
  )
}

export default App
