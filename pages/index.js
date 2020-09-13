import { Row, Col, List, Tag } from "antd";
import Head from "next/head";
import Header from "../Components/Header";
import React, { useState, useEffect } from 'react';
import { CalendarOutlined, FireOutlined } from "@ant-design/icons"
import "../styles/Pages/index.css";
import Author from "../Components/Author";
import Footer from "../Components/Footer";
import axios from "axios";
import Link from "next/link";
import marked from "marked";
import highlightjs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const Home = (list) => {
  const [myList, setmyList] = useState(list.data);

  let tags = [];
  myList.forEach((item) => {
    tags.push(item.tags.split(","));
  });

  const render = new marked.Renderer();
  marked.setOptions({
    renderer: render,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: (code) => highlightjs.highlightAuto(code).value,
  });
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
            renderItem={(item, index) => {
              let html = marked(item.articleIntroduce);
              return (
                <List.Item>
                  <div className="list-title">
                    <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <span className="list-icon">
                    <span><CalendarOutlined />{item.addTime}</span>
                  </span>
                  <span className="list-tags">{
                    tags[index].map((ele, i) => {
                      return <Tag color="blue" key={i}>{ele}</Tag>
                    })
                  }</span>
                  <div className="list-context" dangerouslySetInnerHTML={{ __html: html }}></div>
                </List.Item>
              )
            }}
          ></List>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
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