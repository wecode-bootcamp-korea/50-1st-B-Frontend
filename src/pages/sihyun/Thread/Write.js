import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleWrite = () => {
    const token = localStorage.getItem('token');
    // fetch('http://10.58.52.161:8000/threads/addpost',
    fetch('http://10.58.52.85:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        token: token,
      },
      body: JSON.stringify({
        content: text,
      }),
    })
      .then(res => res.json())
      .then(() => navigate('/thread'));
  };
  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <button onClick={handleWrite}>글쓰기</button>
    </>
  );
};

export default Write;
