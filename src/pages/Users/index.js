import React from 'react';
import { Table } from 'antd';
import { t } from 'i18next';
import UsersWrapper from './styles';
import PrivateLayout from '../../layout/PrivateLayout';
import AdminTable from '../../containers/Admin/Table';

const { Column } = Table;

export default function Users() {
  return (
    <PrivateLayout title={t('users.title')}>
      <UsersWrapper>
        <AdminTable resource="users" isActionCol>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Phone" dataIndex="phone" key="phone" />
          <Column title="Website" dataIndex="website" key="website" />
        </AdminTable>
      </UsersWrapper>
    </PrivateLayout>
  );
}
