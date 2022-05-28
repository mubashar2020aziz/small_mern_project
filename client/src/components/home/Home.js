import React, { useEffect, useState } from 'react';
import './home.css';
const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  const userHomePage = async () => {
    try {
      const res = await fetch('/api/user/getdata', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  });
  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p>WELCOME</p>
          <h2>{userName}</h2>
          <h1>{show ? 'Happy to see you' : 'We Are The Mern Developer'}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
