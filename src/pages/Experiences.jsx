import ClickSpark from '../components/ClickSpark';
import Header from "../components/Header";
import VerticalTimelinePeriod from '../components/VerticalTimeline';
import Footer from "../components/Footer";

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
          title="Experience"
          quotes={[
            "Experience in connecting ideas to real people",
            "I build with curiosity and learn with purpose",
            "Every experience, good or bad, is a step forward"
          ]}
        />        
        <VerticalTimelinePeriod/>
        <Footer />
      </ClickSpark>

    </>
  );
}