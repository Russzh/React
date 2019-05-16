import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {
  
  render(){
    return (
      <div className="item-add-form">
        <button className = 'btn btn-warning'
        onClick = {() => this.props.onItemAdded ("New Task")}>
        All Item</button>
      </div>
    );
  };
}
