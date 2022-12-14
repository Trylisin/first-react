import React, { Component } from "react";
import Form from "./Form";
// import React, { Component } from 'react'
import './index.css';
import Table from "./Table";

class App extends React.Component{

    state = {
        characters: []
    }

    removeCharacter = (index) => {
    
        const { characters } = this.state
      
        this.setState({
            characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }
    
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    render(){

        const { characters } = this.state
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table 
                    charactersData={characters} 
                    removeCharacter={this.removeCharacter} 
                />
                <h3>Add New</h3>
                <Form handleSubmit= { this.handleSubmit }/>
            </div>
        )
    }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Chris1993",
//     };
//     this.update = this.update.bind(this);
//   }
//   update = () => {
//     this.setState({ name: "Hello Chris1993!" });
//   };
//   render() {

//     console.log(this.state);
//     const {test} = this.state
//     console.log(test);
//     return (
//       <div>
//         <button onClick={this.update}>update</button>
//         <hr/>
//         <h2>{ test }</h2>
//       </div>
//     );
//   }
// }

// class App extends Component{
//     render() {
//         return (
//             <div claossName="App">
//                 <h1> One More stype of react</h1>
//             </div>
//         )
//     }
// }

export default App