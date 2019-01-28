import React from 'react';
import { Table } from 'antd';
import { t } from 'i18next';
import DashboardWrapper from './styles';
import PageTitle from '../../components/PageTitle';
import AdminTable from '../../containers/Admin/Table';

const { Column } = Table;

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <PageTitle>{t('dashboard.title')}</PageTitle>
      <div className="mainContent">
        <AdminTable resource="users">
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Phone" dataIndex="phone" key="phone" />
          <Column title="Website" dataIndex="website" key="website" />
        </AdminTable>
      </div>
    </DashboardWrapper>
  );
}
