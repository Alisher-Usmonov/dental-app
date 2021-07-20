import React from "react";
import { Col } from "reactstrap";

function CommentCard({ commentTitle, comment, commenterImage, commenterName, commenterJob }) {
    return (
        <Col md="4">
            <div className="comment-content">
                <h3>{commentTitle}</h3>
                <p>{comment}</p>
            </div>
            <div className="commenter">
                <img src={commenterImage} alt="commenter" />
                <h4>{commenterName}</h4>
                <p>{commenterJob}</p>
            </div>
        </Col>
    )
}

export default CommentCard;