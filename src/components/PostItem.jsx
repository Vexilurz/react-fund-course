import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. JavaScript</strong>
                <div>
                    JavaScript is a programming language
                </div>
            </div>
            <div className="post_btns">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;