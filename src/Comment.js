import React from 'react';
import './Comment.css';

const Comment = ({text, voteUp, voteDown, id, thumbUpComment, thumbDownComment}) =>
  <li>
    {text}<br></br>
    <button className="btn" onClick={() => thumbUpComment(id)}><img src="https://img.icons8.com/material-outlined/24/000000/thumb-up.png"/></button>
    <span className="like">Like: {voteUp}</span>
    <button className="btn btn-down" onClick={() => thumbDownComment(id)}><img src="https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"/></button>
    <span className="dislike">Dislike: {voteDown}</span> 
  </li>;
  
export default Comment;