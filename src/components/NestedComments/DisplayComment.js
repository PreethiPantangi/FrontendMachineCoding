import React, { useState } from "react";

const DisplayComment = ({ comment, id, replies, setcomments}) => {

  const [shouldShowReplyBox, setShouldShowReplyBox] = useState(false);
  const [replyComment, setReplyComment] = useState('');

  const updateCommentReplies = (comment) => {
    if(comment.id === id) {
      let replyObj = {
        id: new Date().valueOf(),
        comment: replyComment, 
        replies: []
      };
      if(comment.replies) {
        comment.replies.push(replyObj)
      } else {
        comment['replies'] = replyObj;
      }
      setReplyComment('');
      return;
    }
    if(comment.replies) {
      let replies = comment.replies;
      replies.forEach(replyComment => {
        updateCommentReplies(replyComment);
      });
    }
  }

  const addReplyComment = () => {
    setReplyComment('');
    let comments = JSON.parse(localStorage.getItem('comments'));
    comments.forEach(comment => {
      updateCommentReplies(comment);
      setcomments(comments);
      setShouldShowReplyBox(!shouldShowReplyBox);
    });
    localStorage.setItem('comments', JSON.stringify(comments));
  }
  
  return (
    <div>
      <div className="m-4">
        <div className="bg-gray-300 h-14 overflow-auto p-4 hover:text-clip">
          {comment}
        </div>
        <p
          className="underline text-blue-400 cursor-pointer m-2"
          id={id}
          onClick={() => {
            setShouldShowReplyBox(!shouldShowReplyBox);
          }}
        >
          Reply
        </p>
        <div id={id} className={shouldShowReplyBox ? "block" : "hidden"}>
          <input
            type="text"
            placeholder="Reply..."
            className="p-3 border border-gray-400 w-2/3"
            id={"reply" + id}
            onChange={(e) => setReplyComment(e.target.value)}
            value={replyComment}
          />
          <button
            className="border border-solid bg-gray-300 p-3"
            id={"replayButton" + id}
            onClick={addReplyComment}
            >
            Reply
          </button>
        </div>
      </div>
      {replies && replies.length > 0 && (
        <div className="ml-7">
          {replies.map((reply) => (
            <DisplayComment
              comment={reply.comment}
              id={reply.id}
              key={reply.id}
              replies={reply.replies ? reply.replies : []}
              setcomments = {setcomments}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayComment;
