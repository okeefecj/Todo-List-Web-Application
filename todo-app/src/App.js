import React, { Component } from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from './components/learning-examples/ThirdComponent'
// import FourthComponent from './components/learning-examples/FourthComponent'
import TodoApp from './components/todo/TodoApp.jsx'
import './App.css';
import './bootstrap.css'
 
class App extends Component {
  render(){
    return(
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    )
    
  }
}


// class LearningComponent extends Component{
//   render(){
//     return(
//     <div className="LearningComponent">
//       Learning Component
//       <FirstComponent />
//       <SecondComponent />
//       <ThirdComponent />
//       <FourthComponent />
//     </div>
//     )
//   }
// }

export default App