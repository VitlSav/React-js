import React, { Component } from 'react';
import Result from "./result";

class Form extends Component{
    render() {
      return (
        <div>
            <Result items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-todo">
                Enter the temperature:
              </label>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button>
                Send #{this.state.items.length + 1}
              </button>
            </form>
        </div>
      );
    }

    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }

  }
  
  export default Form;