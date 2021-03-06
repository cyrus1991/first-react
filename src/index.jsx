import 'bootstrap';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

import Product from './Product.jsx';

class App extends React.Component {
	constructor(props) {
	   super(props);
	   this.state = JSON.parse( localStorage.getItem('react-cart') ) || {
	     data:
	     [
	       {
	         "id":0,
	         "name":"JavaScript: The Definitive Guide, 6th Edition",
	         "release": "September 2010",
	         "amount": 1,
	         "price":"2.99"
	       },
	       {
	         "id":1,
	         "name":"Ruby on Rails: Up and Running",
	         "release": "March 2007",
	         "amount": 1,
	         "price":"30.99"
	       }
	     ],
	   }
 }

 render() {
   return (
   		this.state.data.map((person, i) => <Product data= {person} />)
   );
 }
}



ReactDOM.render(<App/>, document.getElementById('root'));


