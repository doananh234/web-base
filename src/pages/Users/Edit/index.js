import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';
import UsersWrapper from './styles';
import PrivateLayout from '../../../layout/PrivateLayout';
import AdminForm from '../../../containers/Admin/Form';

const { Item } = Form;

export default function UsersEdit({ match }) {
  return (
    <PrivateLayout title="Edit User">
      <UsersWrapper>
        <AdminForm
          resource="users"
          id={match && match.params && match.params.id}
          render={getFieldDecorator => [
            <>
              {getFieldDecorator('id', {
                initialValue: '123',
              })(<Input type="hidden" />)}
            </>,
            <Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your name!' }],
              })(<Input placeholder="Name" />)}
            </Item>,
            <Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(<Input placeholder="Email" />)}
            </Item>,
            <Item>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone!' }],
              })(<Input placeholder="Phone" />)}
            </Item>,
            <Button type="primary" htmlType="submit">
              Edit
            </Button>,
          ]}
        />
      </UsersWrapper>
    </PrivateLayout>
  );
}

UsersEdit.propTypes = {
  match: PropTypes.object,
};
