import {GithubIcon, Linkedin, LucideMusic, TwitterIcon} from 'lucide-react'
import './App.css'
import Test3danimation from './components/3D_Animation';
import CardCarousel from './components/ExperieneceCard';
import Navbar from './components/Navbar';
import Floating_Navbar from './components/Floating_Navbar';
import Projects from './components/Projects';
import Principles from './components/Principles';
import Testimonials from './components/Testimonials';
import ConnectUs from './components/ConnectUs';
import ProjectModal from './components/ProjectModal';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const [projectData, setProjectData] = useState({});
  
  return (
    <div className='relative'>
      <Navbar />
      <Test3danimation />
      <Floating_Navbar />
      <Projects visible={visible} setVisible={setVisible} setProjectData={setProjectData}/>
      <Principles />
      <CardCarousel/>
      <Testimonials />
      <ConnectUs />
      <ProjectModal visible={visible} setVisible={setVisible} projectData={projectData}/>
    </div>
  )
}

export default App
