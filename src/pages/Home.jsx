import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Threads from "../components/Threads";
import Achievements from "../components/Achievements";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import ClickSpark from '../components/ClickSpark';
import ProjectPreview from '../components/ProjectPreview'
  
export default function App() {
  return (
    <>

      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Hero />
        <Services />
        <div style={{ width: '100%', height: '300px', position: 'relative' }}>
          <Threads
            amplitude={1}
            distance={0.01}
            enableMouseInteraction={true}
          />
        </div>
        <Achievements />
        <Skills />
        <Footer />
      </ClickSpark>
    </>
  );
}