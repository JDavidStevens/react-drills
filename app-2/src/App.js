import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(){
   super();

   this.state={
     names:[
       "Honda",
       "Husqvarna",
       "Kawasaki",
       "KTM",
       "Suzuki",
       "Yamaha"
     ]
   }
 }



  render() {
    let listOfNames= this.state.names.map((element,index)=>{
      return(
        <h2> key = {index}>{element}</h2>
      )
    })
    
    return (
      <div className="App">
      {listOfNames}
         
        
      </div>
    );
  }
}

export default App;
