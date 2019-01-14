import React from 'react';
import { Table } from 'antd';
import PostsWrapper from './styles';
import PrivateLayout from '../../layout/PrivateLayout';
import AdminTable from '../../containers/Admin/Table';

const { Column } = Table;

export default function Posts() {
  return (
    <PrivateLayout>
      <PostsWrapper>
        <AdminTable resource="posts">
          <Column title="UserId" dataIndex="userId" key="userId" />
          <Column title="Email" dataIndex="title" key="title" />
          <Column title="Phone" dataIndex="body" key="body" />
        </AdminTable>
      </PostsWrapper>
    </PrivateLayout>
  );
}
