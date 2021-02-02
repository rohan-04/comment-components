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
                <CommentDetail
                    name="Sam"
                    time={"10:00PM"}
                    content={"Nice blog post."}
                    image={faker.image.image()} />
            </ApprovalCard>

            <CommentDetail
                name="Sam"
                time={"10:00PM"}
                content={"Nice blog post."}
                image={faker.image.image()} />

            <CommentDetail
                name={"XOXO"}
                time={"11:00PM"}
                content={"bad blog post."}
                image={faker.image.image()} />

            <CommentDetail
                name={"LOLO"}
                time={"1:00AM"}
                content={"Nice idea for blog post."}
                image={faker.image.image()} />

        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root'));