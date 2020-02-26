import React, { Component } from 'react';
// import Result from "./result";

class Form extends Component{

    render() {
      return (
        <form onSubmit={this.props.convertDigrees}>
          <input type="text" name="temperature"/>
          <button>Send</button>
        </form>
      );
    }

  }
  
  export default Form;