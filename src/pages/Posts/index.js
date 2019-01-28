import React from 'react';
import { Table } from 'antd';
import { t } from 'i18next';
import PostsWrapper from './styles';
import PageTitle from '../../components/PageTitle';
import AdminTable from '../../containers/Admin/Table';

const { Column } = Table;

export default function Posts() {
  return (
    <PostsWrapper>
      <PageTitle>{t('posts.title')}</PageTitle>
      <div className="mainContent">
        <AdminTable resource="posts">
          <Column title="UserId" dataIndex="userId" key="userId" />
          <Column title="Email" dataIndex="title" key="title" />
          <Column title="Phone" dataIndex="body" key="body" />
        </AdminTable>
      </div>
    </PostsWrapper>
  );
}
