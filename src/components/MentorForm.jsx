import React from 'react';
import { Router } from 'react-router-dom';

function MentorForm(props){
  let _name = null
  let _position = null
  let _company = null
  let _gender = null
  let _genderPref = null
  let _yearsInTech = null
  let _specialty = null
  let _priorities = null

  function mentor(event){
    event.preventDefault();
    props.createMentor({
      name: _name.value,
      position: _position.value,
      company: _company.value,
      gender: _gender.value,
      genderPref: _genderPref.value,
      yearsInTech: _yearsInTech.value,
      specialty: _specialty.value,
      priorities: _priorities.value,
    });

    _name.value = '';
    _position.value = '';
    _company.value = '';
    _gender.value = '';
    _genderPref.value = '';
    _yearsInTech.value = '';
    _specialty.value = '';
    _priorities.value = '';
    }

  let post = {

    height: '70px',
    width: '380px',
    border: '1px solid lightgrey',
    marginLeft: '425px',
    backgroundColor: 'lightblue',
    paddingRight: '20px',
  }


  let happening = {
    border: '2px solid #4287f5',
    color: '#4287f5',
    marginTop: '15px',
    height: '30px',
    width: '280px',
    float: 'right',
    paddingTop: '8px',
    paddingLeft: '10px',
    backgroundColor: 'white',
  }

  let maroon = {
    height: '29px',
    width: '29px',
    border: '1px solid darkred',
    backgroundColor: 'darkred',
    marginTop: '20px',
    marginLeft: '40px',
  }

  return (
    <div onSubmit={mentee}>
    <div className='form'>
    <form>
    <input
    type='text'
    id='name'
    placeholder='First and Last Name'
    ref={(input) => {_name = input}}/>
    <input
    type='text'
    id='position'
    placeholder='Position Title'
    ref={(input) => {_position = input}}/>
    <input
    type='text'
    id='company'
    placeholder='Company or School Name'
    ref={(input) => {_company = input}}/>
    <input
    type='text'
    id='gender'
    placeholder='Gender'
    ref={(input) => {_gender = input}}/>
    <input
    type='text'
    id='genderPref'
    placeholder='Mentor Gender Preference'
    ref={(input) => {_genderPref = input}}/>
    <input
    type='text'
    id='yearsInTech'
    placeholder='Years in Tech'
    ref={(input) => {_yearsInTech = input}}/>
    <input
    type='text'
    id='specialty'
    placeholder='Specialty'
    ref={(input) => {_specialty = input}}/>
    <input
    type='text'
    id='priorities'
    placeholder='Priorities'
    ref={(input) => {_priorities = input}}/>
    <div className='button'>
    <input type="submit" value="Add" />
    </div>
    </form>
    </div>
    </div>
  );
}
export default MentorForm;
