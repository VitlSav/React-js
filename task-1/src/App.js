import React from 'react';
import Form from "./components/form";
import Info from "./components/info";
import Result from "./components/result";

class App extends React.Component{
  
state = {
  degr: undefined,
  res: undefined,
  error: undefined
}

  convertСelsii = async (e) => {
    e.preventDefault();
    const degree = e.target.elements.temperature.value;
    const farengeite = degree *9/5 + 32;
    
    this.setState({
      deg: degree,
      res: farengeite,
      error: ""
    });
  }

  render() {
    return (
      <div>
        <Info />
        <Form convertDigrees={this.convertСelsii} />
        <Result 
          deg={this.state.deg}
          res={this.state.res}
          error={this.state.error}
        />
      </div>
    );
  }
  

}

export default App;


