import React from 'react';
import { Router } from 'react-router-dom';

function MenteeForm(props){
  let _name = null
  let _brand = null
  let _price = 0
  let _abv = 0

  function postKeg(event){
    event.preventDefault();
    props.createKeg({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      abv: _abv.value,
      remainingPints: [124]
    });

    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
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
    <div onSubmit={postKeg}>
    <div className='form'>
    <form>
    <input
    type='text'
    id='name'
    placeholder='Beer Name'
    ref={(input) => {_name = input}}/>
    <input
    type='text'
    id='brand'
    placeholder='Brewery Name'
    ref={(input) => {_brand = input}}/>
    <input
    type='text'
    id='price'
    placeholder='Price Per Keg'
    ref={(input) => {_price = input}}/>
    <input
    type='text'
    id='abv'
    placeholder='ABV'
    ref={(input) => {_abv = input}}/>
    <div className='button'>
    <input type="submit" value="Add" />
    </div>
    </form>
    </div>
    </div>
  );
}
export default MenteeForm;
