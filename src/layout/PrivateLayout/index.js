import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import { findLast } from 'lodash';
import { Link, Redirect } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import PrivateLayoutWrapper from './styles';

const { Header, Sider, Content, Footer } = Layout;
const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'Dashboard',
    icon: 'dashboard',
    url: '/',
  },
  {
    key: 'users',
    text: 'Users',
    icon: 'user',
    url: '/users',
  },
  {
    key: 'posts',
    text: 'Posts',
    icon: 'snippets',
    url: '/posts',
  },
];
const profileMenu = [
  {
    key: 'profile',
    text: 'Profile',
    url: '#',
  },
];

class PrivateLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { children, isAuthenticated, title } = this.props;
    if (!isAuthenticated) return <Redirect to="/login" />;

    console.log(window.location.pathname);
    const defaultSelectedKeys =
      findLast(sidebarMenu, menu => window.location.pathname.indexOf(menu.url) === 0) ||
      sidebarMenu[0];
    console.log(defaultSelectedKeys);
    return (
      <PrivateLayoutWrapper>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar">
            <div className="logo" />
            <Menu mode="inline" defaultSelectedKeys={[defaultSelectedKeys.key]}>
              {sidebarMenu.map(menu => (
                <Menu.Item key={menu.key}>
                  <Link to={menu.url}>
                    <Icon type={menu.icon} />
                    <span>{menu.text}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout
            style={{
              marginLeft: this.state.collapsed ? 80 : 200,
              transition: 'all 0.2s ease 0s',
              background: '#F4F6FC',
            }}
          >
            <Header className="header">
              <div>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </div>
              <div>
                <Dropdown
                  overlay={(
                    <Menu style={{ minWidth: '120px' }}>
                      {profileMenu.map(menu => (
                        <Menu.Item key={menu.key}>
                          <a href={menu.url}>{menu.text}</a>
                        </Menu.Item>
                      ))}
                      <Menu.Divider />
                      <Menu.Item key="logout">Logout</Menu.Item>
                    </Menu>
)}
                  trigger={['click']}
                >
                  <Avatar size="large" icon="user" />
                </Dropdown>
              </div>
            </Header>
            <Content
              style={{
                padding: '40px 20px',
              }}
            >
              {title && <PageTitle>{title}</PageTitle>}
              <div className="mainContent">{children}</div>
            </Content>
            <Footer className="footer">Ant - React Admin ©2018 Created by QuangHD</Footer>
          </Layout>
        </Layout>
      </PrivateLayoutWrapper>
    );
  }
}

PrivateLayout.propTypes = {
  children: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  title: PropTypes.string,
};

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
}))(PrivateLayout);
