import React, { useEffect, useState } from 'react';

const UserThread = () => {
  /* 수정/삭제 등 특정 스레드에 접근해야 하는 기능들을 구현하기 전, 
    백엔드분이 마침 해당 api를 만들어두셨길래 필터링 연습삼아 만든 페이지입니다.*/
  const [text, setText] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://10.58.52.85:8000/viewuserPost', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        token: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setText(data.data);
      });
  }, []);
  return (
    <>
      <div>
        {text.map(item => {
          return (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.user_id}</p>
              <p>{item.created_at}</p>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserThread;
