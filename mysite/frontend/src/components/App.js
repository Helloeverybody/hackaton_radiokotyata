import React, {Component} from 'react';
import {render} from "react-dom";
import './list-style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/service_create")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  handleClick(){

  }

  render() {
    return (
      <ul>
        {this.state.data.map(contact => {
          return (
            <Service id={contact.id}
                     name={contact.name}
                     ref={contact.ref}
                     onClick={() => {this.handleClick()}}/>
          );
        })}
      </ul>
    );
  }
}

function Service(props) {
    return (
        <button className="service" onClick={props.onClick}>
            <li key={props.id}>
              {props.name}: {props.ref}
            </li>
        </button>
    );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);