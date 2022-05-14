import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';;


function App() {

  const [work, setWork] = useState([
    {
      text: "Go to work",
      id: "g1"
    },
    {
      text: "Get milk",
      id: "g2"
    }
  ])

  const workSetHandler =  (givenWork) => {
    setWork((previousWorks) => {
      const updatedWork = [...previousWorks];
      updatedWork.unshift({text: givenWork, id: Math.random().toString()})
      console.log(updatedWork);
      return updatedWork;
    })
  }

  const deleteItemHandler = (workId) => {
    setWork((previousWorks)=>{
      const updatedWork = previousWorks.filter(preWork => preWork.id !== workId);
      console.log(updatedWork);
      return updatedWork;
    })
  }

  let content = <p> Nothing to do...wanna add something?</p>
  if(work.length > 0) {
    content = <List items={work} onDelete={deleteItemHandler}/>
  }

  return (
    <div className="App">
      <Form workSet = {workSetHandler}/>
      {content}
    </div>
  );
}

export default App;
