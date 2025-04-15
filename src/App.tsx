import './App.css'
import Test3danimation from './components/3D_Animation';
import Navbar from './components/Navbar';
import Floating_Navbar from './components/Floating_Navbar';
import Projects from './components/Projects';
import Principles from './components/Principles';
import Testimonials from './components/Testimonials';
import ConnectUs from './components/ConnectUs';
import ProjectModal from './components/ProjectModal';
import { useState } from 'react';
import Introduction from './components/Introduction';
import ExperienceTestimonial from './components/Experience-timeline';

function App() {
  const [visible, setVisible] = useState(false);
  const [projectData, setProjectData] = useState({});
  
  return (
    <div className='relative'>
      <Navbar />
      <Test3danimation />
      <Introduction />
      <Floating_Navbar />
      <Projects visible={visible} setVisible={setVisible} setProjectData={setProjectData}/>
      <Principles />
      <ExperienceTestimonial />
      <Testimonials />
      <ConnectUs />
      <ProjectModal visible={visible} setVisible={setVisible} projectData={projectData}/>
    </div>
  )
}

export default App
