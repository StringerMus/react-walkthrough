// import logo from './logo.svg';
// import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

// function App() {
//   return (
//     <div className="App">
//       <FunctionalGreetingWithProps greeting="Nice ta meet ya" name="Mike" age="32"/>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component"/>
    </div>
  );
}

export default App;