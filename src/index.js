import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail name={"Sam"} time={"10:00PM"} content={"Nice blog post."} image={faker.image.image()} />
            <CommentDetail name={"XOXO"} time={"11:00PM"} content={"bad blog post."} image={faker.image.image()} />
            <CommentDetail name={"Sean"} time={"12:00PM"} content={"good blog post."} image={faker.image.image()} />
            <CommentDetail name={"Sean"} time={"12:00PM"} content={"good blog post."} image={faker.image.image()} />
            <CommentDetail name={"Sean"} time={"12:00PM"} content={"good blog post."} image={faker.image.image()} />
            <CommentDetail name={"Sean"} time={"12:00PM"} content={"good blog post."} image={faker.image.image()} />
            <CommentDetail name={"Sean"} time={"12:00PM"} content={"good blog post."} image={faker.image.image()} />
            <CommentDetail name={"Sean"} time={"12:00PM"} content={"good blog post."} image={faker.image.image()} />

        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root'));