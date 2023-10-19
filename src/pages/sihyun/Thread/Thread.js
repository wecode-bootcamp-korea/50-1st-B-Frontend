import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Thread = () => {
  const [thread, setThread] = useState([]);

  useEffect(() => {
    // fetch('http://10.58.52.161:8000/allthreads', {
    fetch('http://10.58.52.85:8000/viewAllPost', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setThread(data.data);
      });
  }, []);

  return (
    <>
      <div>
        {thread.map(item => {
          return (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.user_id}</p>
              <p>{item.created_at}</p>
              <p>{item.content}</p>
              <button>
                <Link to="/modify">수정하기</Link>
              </button>
            </div>
          );
        })}
      </div>
      <button>
        <Link to="/write">글쓰기</Link>
      </button>
    </>
  );
};

export default Thread;
