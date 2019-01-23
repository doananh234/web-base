import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'antd';
import { isUndefined } from 'lodash';
import { submitFormResourceAction } from '../../../redux/admin/actions';
import { getFormValues } from '../../../redux/admin/selectors';

class FormAdmin extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submitFormResource(values);
      }
    });
  };

  getFieldDecoratorAdmin = (name, options = {}) => {
    const { form, defaultFormValues } = this.props;
    if (defaultFormValues && !isUndefined(defaultFormValues[name])) {
      return form.getFieldDecorator(name, {
        ...options,
        initialValue: defaultFormValues[name],
      });
    }
    return form.getFieldDecorator(name, options);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>{this.props.render(this.getFieldDecoratorAdmin)}</Form>
    );
  }
}

FormAdmin.propTypes = {
  form: PropTypes.object,
  render: PropTypes.func,
  submitFormResource: PropTypes.func,
  defaultFormValues: PropTypes.object,
};

export default connect(
  (state, ownProps) => ({
    defaultFormValues: getFormValues(state, ownProps),
  }),
  (dispatch, ownProps) => ({
    submitFormResource: values => {
      dispatch(submitFormResourceAction(ownProps.resource, values));
    },
  })
)(Form.create()(FormAdmin));
