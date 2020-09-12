import { Row, Col, List, Icon } from "antd";
import Head from "next/head";
import Header from "../Components/Header";
import React, { useState } from 'react';
import { CalendarOutlined, FireOutlined } from "@ant-design/icons"
import "../styles/Pages/index.css";
import Author from "../Components/Author";
import FriendLink from "../Components/FriendLink";
import Footer from "../Components/Footer";

const Home = () => {
  const [list, setList] = useState([
    { title: "One", context: "contextOne" },
    { title: "Two", context: "contenxtTwo" },
    { title: "Three", context: "contextThree" },
  ]);
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新博客</div>}
            itemLayout="vertical"
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><CalendarOutlined />2020-9-10</span>
                  <span><FireOutlined /> 321</span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <FriendLink />
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  )
}

export default Home;