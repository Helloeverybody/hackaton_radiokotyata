import React, {Component} from 'react';
import {render} from "react-dom";
import './list-style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
      activeServiceId: null,
        allServices: [],
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

  handleClick(id){
    this.state = {
      activeServiceId: id,
    }
  }

  render() {
    return (
      <ul>
        {this.state.data.map(contact => {
            let service = <Service id={contact.id}
                     name={contact.name}
                     ref={contact.refer}
                     onClick={() => this.handleClick(contact.id)}/>
            this.state.allServices.push(service);
          return (service);
        })}
      </ul>
    );
  }
}

class Service extends Component {
    constructor(props) {
        super(props);
        this.id = props.id
        this.name = props.name
        this.refer = props.refer
        this.onClick = props.onClick
    }
    render() {
        return <li key={this.id}>
                  <button className="service" onClick={this.onClick}>
                    {this.name} {this.refer}
                  </button>
                </li>
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);