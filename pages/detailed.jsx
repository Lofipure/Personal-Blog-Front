import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, PageHeader, Affix } from "antd";
import highlightjs from "highlight.js";
import marked from "marked";
import MarkNav from "markdown-navbar";
import axios from "axios";
import { withRouter } from "next/router";

import { CalendarOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import Header from "../Components/Header";
import Author from "../Components/Author";
import Footer from "../Components/Footer";

import "markdown-navbar/dist/navbar.css";
import "../styles/Pages/detailed.css";
import "highlight.js/styles/monokai-sublime.css";

const Detailed = (props) => {
  let articleContent = props.articleContent;
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
  let html = marked(articleContent);
  return (
    <React.Fragment>
      <Head>
        <title>Lofipure {props.title}</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div>
              <PageHeader
                subTitle={"返回首页"}
                backIcon={<ArrowLeftOutlined />}
                className={"site-page-header"}
                onBack={() => {
                  window.location.href = "/";
                }}
              />
            </div>
            <div>
              <div className="detailed-title">{props.title}</div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined /> {props.addTime}
                </span>
              </div>
              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={articleContent}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
};

Detailed.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios("http://127.0.0.1:4044/default/getArticleById?id=" + id).then(
      (res) => {
        let data = res.data.data[0];
        let content = data.articleContent;
        content = content.replace(/<doubleFlag>/g, '"');
        data.articleContent = content;
        resolve(data);
      }
    );
  });

  return await promise;
};

export default withRouter(Detailed);
