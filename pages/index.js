import { Row, Col, List, PageHeader } from "antd";
import Head from "next/head";
import Header from "../Components/Header";
import React, { useState, useEffect } from 'react';
import { CalendarOutlined, FireOutlined } from "@ant-design/icons"
import "../styles/Pages/index.css";
import Author from "../Components/Author";
import FriendLink from "../Components/FriendLink";
import Footer from "../Components/Footer";
import axios from "axios";
import Link from "next/link";

const Home = (list) => {
  const [myList, setmyList] = useState(list.data);
  useEffect(() => {
    console.log(list);
  })
  return (
    <React.Fragment>
      <Head>
        <title>Lofipure's Blog</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<h3>Blog List</h3>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item.add_time}</span>
                  <span><FireOutlined />{item.view_count}</span>
                </div>
                <div className="list-context">{item.introduce}</div>
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
Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios("http://localhost:4044/default/getArticleList").then((res) => {
      resolve(res.data)
    })
  })
  return await promise;
}
export default Home;