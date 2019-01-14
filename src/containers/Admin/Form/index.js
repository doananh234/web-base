import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

class FormAdmin extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return <Form onSubmit={this.handleSubmit}>{this.props.render(getFieldDecorator)}</Form>;
  }
}

FormAdmin.propTypes = {
  form: PropTypes.object,
  render: PropTypes.func,
};

export default Form.create()(FormAdmin);
