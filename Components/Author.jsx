import { Avatar, Divider } from "antd";
import "../styles/Components/author.css";
import { GithubOutlined } from "@ant-design/icons";
const Author = () => {
  return (
    <div className="author-div">
      <div>
        <Avatar
          size={100}
          src="https://s2.ax1x.com/2019/12/26/lAUkFg.jpg"
        ></Avatar>
      </div>
      <div className="author-introduction">
        Lofipure, Xust-student
        <Divider>社交账号</Divider>
        <Avatar
          size={28}
          className={"account"}
          icon={<GithubOutlined />}
        ></Avatar>
      </div>
    </div>
  );
};

export default Author;
