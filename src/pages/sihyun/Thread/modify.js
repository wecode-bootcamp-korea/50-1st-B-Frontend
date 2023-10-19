import React, { useEffect, useState } from 'react';

const Modify = () => {
  const [text, setText] = useState('');
  /* 기본적인 개념만 간단하게 적어둔 상황 */
  useEffect(
    fetch('')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setText(data);
      }),
    [],
  );

  const handleModify = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content: text,
      }),
    });
  };

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleModify}>수정하기</button>
    </>
  );
};

export default Modify;
