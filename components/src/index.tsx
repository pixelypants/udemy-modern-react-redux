import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Hudson"
          avatar={faker.image.avatar()}
          timeAgo="Just now"
          content="Nice blog!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Robert"
          avatar={faker.image.avatar()}
          timeAgo="1 hour ago"
          content="LoL, good work"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Graham"
          avatar={faker.image.avatar()}
          timeAgo="Yesterday 5:32PM"
          content="1+"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
