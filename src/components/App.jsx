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
      mentorshipMasterList: []
      };

    this.addMentee = this.addMentee.bind(this);
    this.submitMentee = this.submitMentee.bind(this);
    this.addMentor = this.addMentor.bind(this);
    this.submitMentor = this.submitMentor.bind(this);
  }

  addMentee(event) {
    this.setState({value: event.target.value});
  }

  submitMentee(event) {
    alert('A mentee was submitted: ' + this.state.value);
    event.preventDefault();
  }

  addMentor(event) {
    this.setState({value: event.target.value});
  }

  submitMentor(event) {
    alert('A mentor was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><Splash startForm={this.begin}/>}/>
      <Route path='/MenteeForm' render={()=><MenteeForm createMentor={this.addMentor}/>}/>
      <Route path='/MentorForm' render={()=><MentorForm createMentee={this.addMentee}/>}/>
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
