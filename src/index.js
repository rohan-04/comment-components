import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            {/* component is pass as props to another component */}
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    name="Sam"
                    time={"10:00PM"}
                    content={"Nice blog post."}
                    image={faker.image.image()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    name="Cloud9"
                    time={"10:00PM"}
                    content={"Nice blog post."}
                    image={faker.image.image()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    name={"XOXO"}
                    time={"11:00PM"}
                    content={"bad blog post."}
                    image={faker.image.image()} />

            </ApprovalCard>

        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root'));