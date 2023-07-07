import React from 'react';

class Alert extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onClose();
    }, 5000);
  }

  render() {
    return (
      <div className="alert">
        {this.props.message}
      </div>
    );
  }
}

class Alert2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
      alertMessage: 'Seu alerta aqui!'
    };
    this.handleAlertClose = this.handleAlertClose.bind(this);
  }

  handleAlertClose() {
    this.setState({
      showAlert: false
    });
  }

  render() {
    return (
      <div>
        {this.state.showAlert &&
          <Alert message={this.state.alertMessage} onClose={this.handleAlertClose} />
        }
        <h1>Meu site</h1>
      </div>
    );
  }
}

export default Alert2;
