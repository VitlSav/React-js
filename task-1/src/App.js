import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./components/form";
import Info from "./components/info";
import Result from "./components/result";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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


// ReactDOM.render(
//   <App />,
//   document.getElementById('todos-example')
// );

