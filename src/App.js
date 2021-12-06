import React from 'react';
import './App.css';
import { CATEGORIES } from './data'

const tasks = [
  {
    text: 'Buy rice',
    category: 'Food'
  },
  {
    text: 'Save a tenner',
    category: 'Money'
  },
  {
    text: 'Build a todo app',
    category: 'Code'
  },
  {
    text: 'Build todo API',
    category: 'Code'
  },
  {
    text: 'Get an ISA',
    category: 'Money'
  },
  {
    text: 'Cook rice',
    category: 'Food'
  },
  {
    text: 'Tidy house',
    category: 'Misc'
  }
]

class App extends React.Component {

  state = {
    ...tasks
  }



  render() {
    const categButtons = CATEGORIES.map((c, indx) => {
      return <button key={indx}>{c}</button>
    })
    return (
      <div className="App">
        <h2>My tasks</h2>
        <h5>Categories Filters</h5>
      <div className='categories'>
        {categButtons}
      </div>
      <div className='tasks'>
      <h5>Tasks</h5>
      </div>
      
       
        
      </div>
    );
  }
}


export default App;
