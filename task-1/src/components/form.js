import React, { Component } from 'react';

class Info extends Component{
    render() {
      return (
        <div>
            <form>
              <label>
                Temperature: 
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Send" />
            </form>
        </div>
      );
    }
  }
  
  export default Info;