import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import {
 Form, Icon, Input, Button, Checkbox,
} from 'antd';
import i18n from 'i18next';
import { loginAction } from '../../redux/auth/actions';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  };

  render() {
    const { form, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { getFieldDecorator } = form;
    return (
      <div>
        <div className="title">
          <span>{i18n.t('login.title')}</span>
        </div>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: i18n.t('input.username.validateMsg.required') }],
            })(
              <Input
                placeholder={i18n.t('input.username.placeholder')}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: i18n.t('input.password.validateMsg.required') }],
            })(
              <Input
                placeholder={i18n.t('input.password.placeholder')}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
              />,
            )}
          </FormItem>
          <div className="sub-action-div">
            <Checkbox>{i18n.t('login.rememberMe')}</Checkbox>
            <a className="login-form-forgot" href="/login">
              {i18n.t('login.forgotPassword')}
            </a>
          </div>
          <div className="action-div">
            <Button type="primary" htmlType="submit" className="login-form-button">
              {i18n.t('login.loginBtn')}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default withRouter(
  connect(
    state => {
      return {
        isAuthenticated: state.auth.isAuthenticated,
      };
    },
    dispatch => {
      return {
        login: params => {
          dispatch(loginAction(params));
        },
      };
    },
  )(Form.create()(Login)),
);