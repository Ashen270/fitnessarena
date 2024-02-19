import './App.css';
import Hero from './componets/Hero/Hero';
import Programs from './componets/Programs/Programs';
import Reasons from './componets/Reasons/Reasons';
import Plans from './componets/Plans/Plans';
import Testimonials from './componets/Testimonials/Testimonials';
import Join from './componets/Join/Join';

function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>

          
     </div>   
  );
}

export default App;
