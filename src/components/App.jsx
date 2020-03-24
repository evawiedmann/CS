import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MenteeForm from './MenteeForm';
import MentorForm from './MentorForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><KegList allKegs={this.state.allKegs}/>}/>
      <Route path='/NewKegForm' render={()=><NewKegForm createKeg={this.handleAddNewKeg} kegList={this.state.allKegs}/>}/>


      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
  }

  export default App;


//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
