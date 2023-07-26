import React, { useEffect, useState } from "react";
import DisplayComment from './DisplayComment';

const NestedComments = () => {


  /**
   * Structure of the nested comments
   * {
    id: 1,
    comment: 'Hello everyone. This is a nested comments implementation.',
    replies: [
      {id: 2,
        comment: 'This is reply 1',
        replies: {
          id: 3, 
          comment: 'This is reply 1 for reply 1'
        }
      },
      {id: 3,
        comment: 'This is reply 2',
        replies: {
          id: 4, 
          comment: 'This is reply 1 for reply 2'
        }
      }
    ]
  },
  {
    id: 5,
    comment: "Happy New Year to everyone. What are your resolutions for this year?",
    replies: [
      {
        id: 6,
        comment: "This is reply 1 for comment 2"
      },
      {
        id: 7,
        comment: "This is reply 2 for comment 2"
      }
    ]
  }
   */

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const addComment = () => {
    let commentObj = {
      id: new Date().valueOf(),
      comment: comment,
      replies: []
    }
    if (comments.length > 0) {
      setComments([commentObj, ...comments]);
    } else {
      setComments([commentObj]);
    }
    let allComments = [];
    allComments = [commentObj, ...comments];
    localStorage.setItem('comments', JSON.stringify(allComments));
    setComment('');
  }

  useEffect(() => {
    let commentsFromStrg = JSON.parse(localStorage.getItem('comments'));
    if(commentsFromStrg) {
      setComments(commentsFromStrg);
    }
  },[]);

  return (
    <div>
      <p className="text-center mt-4 font-semibold">Nested Comments</p>
      <div className="m-4 text-center">
        <input
          type="text"
          placeholder="Comments..."
          className="p-3 border border-gray-400 w-2/3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button 
          className="border border-solid bg-gray-300 p-3"
          onClick={addComment}  
        >Comment</button>
      </div>
      <div className="m-4">
        {comments.map((comment) => (
          <DisplayComment 
          comment={comment.comment} 
          id={comment.id} 
          key={comment.id} 
          replies={comment.replies ? comment.replies : []}
          />
        ))}
      </div>
    </div>
  );
};


export default NestedComments;
