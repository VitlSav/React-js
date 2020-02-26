import React, { Component } from 'react';

class Result extends Component{
  render() {
    return (
      <div>
        {this.props.res &&
          <p> {this.props.deg} degrees Celsius = {this.props.res} degrees Farenheit</p>
        }
      </div>
    );
  }
  }
  
  export default Result;