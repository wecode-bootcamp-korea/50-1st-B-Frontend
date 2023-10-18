import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleWrite = () => {
    fetch('http://10.58.52.161:8000/threads/addpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content: text,
      }),
    });
    setText('');
    navigate('/thread');
  };
  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <button onClick={handleWrite}>글쓰기</button>
    </>
  );
};

export default Write;
