## Structure of the nested comments

```{
  id: 1,
  comment: 'Comment 1',
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
}```
