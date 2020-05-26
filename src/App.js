import React from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
// import './App.css';

import uuid from 'uuid'

function App() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'>To do input</h3>
        <ToDoInput></ToDoInput>
    <ToDoList></ToDoList>
        </div>
      </div>
    </div>
    
    </>
    
  );
}

export default App;
