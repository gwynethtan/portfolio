import Footer from "../components/Footer";
import ClickSpark from '../components/ClickSpark';
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

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
        <Header 
          title="Projects"
          quotes={[
            "Turning concepts into code, and visions into visuals",
            "Creativity is intelligence having fun",
            "Projects are the bridge between thinking and doing"
          ]}
        />           
        <ProjectCard/>
        <Footer />
      </ClickSpark>

    </>
  );
}