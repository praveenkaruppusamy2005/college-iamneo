import React, { Component } from 'react';

class Day5Pah1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    console.log('Constructor called!');
  }

  componentWillMount() {
    console.log('Component Will MOUNT!');
  }

  componentDidMount() {
    console.log('Component Did MOUNT!');
    setTimeout(() => {
      this.setState({ data: 'Hello, World!' });
    }, 1000);
  }

  componentWillReceiveProps(newProps) {
    console.log('Component Will Receive Props!', newProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Component Will UNMOUNT!');
  }

  render() {
    return (
      <div>
        <h1>{this.state.data ? this.state.data : 'Loading...'}</h1>
      </div>
    );
  }
}

export default Day5Pah1;
