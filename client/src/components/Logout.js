import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useNavigate();
  const [userLogout, setUserLogout] = useState();
  const Logout = async () => {
    try {
      const res = await fetch('/api/user/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Contact-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await res.json();
      setUserLogout(data);
      if (res.status === 400 || !res) {
        window.alert('invalid login');
      } else {
        dispatch({ type: 'USER', payload: false });
        window.alert('valid login');
      }
    } catch (err) {
      console.log(err);
      history('/login');
    }
  };

  useEffect(() => {
    Logout();
  });

  return <h1>{userLogout}</h1>;
};
export default Logout;
