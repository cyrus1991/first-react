import React from 'react';

class Product extends React.Component {
 render() {
   return (
         <li className="list-group-item d-flex justify-content-between lh-condensed">
           <div>
             <h6 className="my-0">{ this.props.data.name }</h6>
             <small className="text-muted">Release: { this.props.data.release }</small>
           </div>
           <div className="d-flex flex-column">
             <span className="text-muted d-flex justify-content-center align-items-baseline">
               <button className="btn btn-sm btn-light" >-</button>
               <button className="btn btn-sm btn-light">+</button>
             </span>
             <span className= "badge" >{ this.props.data.amount }</span>
           </div>
         </li>
   );
 }
}
export default Product;