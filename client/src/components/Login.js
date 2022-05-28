import React, { useState, useContext } from 'react';
import { IoAccessibilitySharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useNavigate();
  const [emails, setEmails] = useState({
    email: '',
    password: '',
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setEmails({ ...emails, [name]: value });
  };

  const loginUser = async (e) => {
    const { email, password } = emails;

    e.preventDefault();
    const res = await fetch('/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/Json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert('invalid Login');
    } else {
      dispatch({ type: 'USER', payload: true });
      window.alert('Valid Login');

      history('/');
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '80px',
          }}
        >
          <div className="col-md-6">
            <div
              className="card shadow-lg rounded"
              style={{ border: 'none', outline: 'none' }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <p
                      className="left"
                      style={{ marginTop: '80px', cursor: 'pointer' }}
                    >
                      <IoAccessibilitySharp /> Login Pic
                    </p>
                    <p style={{ cursor: 'pointer' }}>Create An Account</p>
                  </div>
                  <div className="col-md-6">
                    <h4
                      className="header"
                      style={{
                        alignItems: 'center',
                        marginTop: '20px',
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                      }}
                    >
                      Sign In
                    </h4>

                    <form method="POST">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                          value={emails.email}
                          onChange={handleChange}
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="password"
                          autoComplete="off"
                          value={emails.password}
                          onChange={handleChange}
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        name="signin"
                        id="signin"
                        value="Log In"
                        className="btn btn-primary"
                        onClick={loginUser}
                      >
                        Login In
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
