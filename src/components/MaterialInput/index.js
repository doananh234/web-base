import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

export class MaterialInput extends Component {
  state = {
    isfill: undefined,
  };

  componentDidMount() {}

  onFocus = e => {
    console.log(e.target.value);
    this.setState({ isfill: true });
  };

  onBlur = e => {
    console.log(e.target.value);
    if (e.target && e.target.value) this.setState({ isfill: true });
    else this.setState({ isfill: undefined });
  };

  render() {
    return (
      <Input
        {...this.props}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        isfill={this.state.isfill}
      />
    );
  }
}

export default MaterialInput;
