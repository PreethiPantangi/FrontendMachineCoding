import React, { useState } from "react";

const NestedComments = () => {

  let dummyComments = {
    1: {
      comment: "Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.Hello everyone. This is a nested comments implementation.",
      replies: {
        2: {
          comment: "Hi There",
          replies: {
            3: {
              comment: "This is reply 1",
            },
            4: {
              comment: "This is reply 2",
              replies: {
                5: {
                  comment: "This is reply 1 for 112"
                },
                6: {
                  comment: "This is reply 2 for 112"
                }
              }
            },
          },
        },
      },
    },
    7: {
      comment:
        "Happy New Year to everyone. What are your resolutions for this year?",
      replies: {
        8: {
          comment: "This is reply 1 for comment 2",
        },
        9: {
          comment: "This is reply 2 for comment 2",
        },
      },
    },
    10: {
      comment:
        "Hi guys. Planning on starting intermittent fasting. Any suggestions or resources?",
      replies: {},
    },
    11: {
      comment: "This is a simple comment",
    },
  };

  // const printComments = (replyComments) => {
  //     if(replyComments) {
  //       console.log(replyComments);
  //       for (const key in replyComments) {
  //         console.log(replyComments[key].comment);
  //         if (replyComments[key].replies) {
  //           printComments(replyComments[key].replies);
  //         }
  //       }
  //     }
  //   };

  // for (const key in dummyComments) {
  //   console.log('------------------ START ------------------');
  //   console.log(dummyComments[key]);
  //   console.log(dummyComments[key].comment);
  //   if(dummyComments[key].replies) {
  //     let comment = printComments(dummyComments[key].replies);
  //     console.log(comment);
  //   }
  //   console.log('------------------ END ------------------');
  // }

  return (
    <div>
      <p className="text-center mt-4 font-semibold">Nested Comments</p>
      <div className="m-4 text-center">
        <input
          type="text"
          placeholder="Comments..."
          className="p-3 border border-gray-400 w-2/3"
        />
        <button className="border border-solid bg-gray-300 p-3">Comment</button>
      </div>
      <div className="m-4">
        {Object.keys(dummyComments).map((commentId) => (
          <DisplayComment 
          comment={dummyComments[commentId].comment} 
          id={commentId} 
          key={commentId} 
          replies={dummyComments[commentId].replies ? dummyComments[commentId].replies : {}}
          />
        ))}
      </div>
    </div>
  );
};

const DisplayComment = ({comment, id, replies}) => {
  const [shouldShowReplyBox, setShouldShowReplyBox] = useState(false);
  return (
    <div>
      <div className="m-4">
        <div className="bg-[#f2f2f2] truncate p-4 hover:text-clip">{comment}</div>
        <p className="underline text-blue-400 cursor-pointer m-2" id={id} onClick={() => {setShouldShowReplyBox(!shouldShowReplyBox)}}>
          Reply
        </p>
        <div id={id} className={shouldShowReplyBox ? 'block' : 'hidden'}>
          <input
            type="text"
            placeholder="Reply..."
            className="p-3 border border-gray-400 w-2/3"
            id={'reply'+id}
          />
          <button className="border border-solid bg-gray-300 p-3" id={'replayButton'+id}>Reply</button>
        </div>
      </div>
      {replies && (
        <div className="ml-7">
          {Object.keys(replies).map((commentId) => (
            <DisplayComment 
            comment={replies[commentId].comment} 
            id={commentId} 
            key={commentId} 
            replies={replies[commentId].replies ? replies[commentId].replies : {}}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NestedComments;

