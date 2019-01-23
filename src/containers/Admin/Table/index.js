import React, { Component, Children, cloneElement } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { t } from 'i18next';
import { Table, Divider, Icon, Popconfirm, Button } from 'antd';
import { isNumber } from 'lodash';
import { fetchListResourceAction, deleteResourceByIdAction } from '../../../redux/admin/actions';
import { getListresource } from '../../../redux/admin/selectors';
import AdminTableWrapper from './styles';

const { Column } = Table;

class AdminTable extends Component {
  componentDidMount() {
    this.props.fetchListResource();
  }

  render() {
    const {
      children,
      listResource,
      isFetching,
      isActionCol,
      resource,
      deleteResourceById,
    } = this.props;
    return (
      <AdminTableWrapper>
        <div className="action-div">
          <Link to={`/${resource}/create`}>
            <Button type="primary">{t('form.btn.add')}</Button>
          </Link>
        </div>
        <Table
          dataSource={listResource}
          loading={isFetching}
          rowKey="id"
          // onRow={(record, rowIndex) => {
          //   return {
          //     onClick: event => {
          //       console.log(record);
          //     }, // mouse leave row
          //   };
          // }}
        >
          {Children.map(children, child => {
            const childProps = {
              defaultSortOrder: 'descend',
              sorter: (a, b) => {
                if (!a[child.props.dataIndex] || !b[child.props.dataIndex]) return false;
                if (isNumber(a[child.props.dataIndex]) && isNumber(b[child.props.dataIndex])) {
                  return a[child.props.dataIndex] - b[child.props.dataIndex];
                }
                return (
                  a[child.props.dataIndex].toString().length -
                  b[child.props.dataIndex].toString().length
                );
              },
              ...child.props,
            };
            return cloneElement(child, childProps);
          })}
          {isActionCol && (
            <Column
              key="action"
              align="center"
              render={(text, record) => (
                <span>
                  <Link to={`/${resource}/${record.id}`}>
                    <Icon type="form" />
                  </Link>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="Are you sure delete this?"
                    onConfirm={() => deleteResourceById(record.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Icon type="delete" />
                  </Popconfirm>
                </span>
              )}
            />
          )}
        </Table>
      </AdminTableWrapper>
    );
  }
}

AdminTable.propTypes = {
  children: PropTypes.array,
  // eslint-disable-next-line
  resource: PropTypes.string.isRequired,
  fetchListResource: PropTypes.func,
  listResource: PropTypes.array,
  isFetching: PropTypes.bool,
  isActionCol: PropTypes.bool,
  deleteResourceById: PropTypes.func,
};

export default connect(
  (state, ownProps) => ({
    listResource: getListresource(state, ownProps),
    isFetching: state.admin.resources[ownProps.resource]
      ? state.admin.resources[ownProps.resource].isFetching
      : false,
  }),
  (dispatch, ownProps) => ({
    fetchListResource: (query = {}) => {
      dispatch(fetchListResourceAction(ownProps.resource, query));
    },
    deleteResourceById: id => {
      dispatch(deleteResourceByIdAction(ownProps.resource, id));
    },
  })
)(AdminTable);
