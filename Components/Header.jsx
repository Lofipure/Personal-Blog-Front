import React from "react";
import "../styles/Components/header.css";

import { Row, Col, Menu, Icon } from "antd";

const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Lofipure's Blog</span>
          <span className="header-txt">万年太久，只做朝夕。</span>
        </Col>

        <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item>
              <a href="/">首页</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/list">文章列表</a>
            </Menu.Item>
            <Menu.Item>关于作者</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
