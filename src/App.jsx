import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Threads from "./components/Threads";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Services />
      <div style={{ width: '100%', height: '300px', position: 'relative' }}>
        <Threads
          amplitude={2}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
    </>
  );
}