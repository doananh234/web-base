import React from 'react';
import { Form, Button, Input } from 'antd';
import { t } from 'i18next';
import UsersWrapper from './styles';
import PageTitle from '../../../components/PageTitle';
import AdminForm from '../../../containers/Admin/Form';

const { Item } = Form;

export default function UsersCreate() {
  return (
    <UsersWrapper>
      <PageTitle>{t('users.title')}</PageTitle>
      <div className="mainContent">
        <AdminForm
          resource="users"
          render={getFieldDecorator => [
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
              Add
            </Button>,
          ]}
        />
      </div>
    </UsersWrapper>
  );
}
