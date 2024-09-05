// src/components/Alert.js
import { Component } from 'react';
import './Alert.scss';

class Alert extends Component {
  getClassName = () => {
    return `Alert ${this.props.type}`;
  };

  render() {
    return (
      <div className={this.getClassName()}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.type = 'InfoAlert';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.type = 'ErrorAlert';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.type = 'WarningAlert';
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
