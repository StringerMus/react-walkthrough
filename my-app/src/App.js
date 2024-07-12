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
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component"/>
    </div>
  );
}

export default App;