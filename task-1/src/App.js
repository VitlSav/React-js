import React from 'react';
import Form from "./components/form";
import Info from "./components/info";
import Result from "./components/result";

class App extends React.Component{
  render() {
    return (
      <div>
        <Info />
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
