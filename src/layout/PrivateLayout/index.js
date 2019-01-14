import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
 Layout, Menu, Icon, Dropdown, Avatar,
} from 'antd';
import { Link, Redirect } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import PrivateLayoutWrapper from './styles';

const {
 Header, Sider, Content, Footer,
} = Layout;
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
    return (
      <PrivateLayoutWrapper>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
};

export default connect(state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
})(PrivateLayout);
