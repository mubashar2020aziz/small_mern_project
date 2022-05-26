import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    number: '',
    work: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, number, work, password, cpassword } = user;

    const res = await fetch('/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        number,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert('invalid registeration');
      console.log('invalid registeration');
    } else {
      window.alert('valid registeration');
      console.log('valid registeration');

      history('/login');
    }
  };
  return (
    <>
      <div className="container">
        <div className="row pt-5 d-flex justify-content-center">
          <div className="col-md-8 ">
            <div
              className="card shadow-lg rounded"
              style={{ border: 'none', outline: 'none' }}
            >
              <h4
                className="header"
                style={{
                  alignItems: 'center',
                  marginTop: '20px',
                  display: 'flex',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                SignUp
              </h4>
              <div className="card-body">
                <div className="row ">
                  <div className="col-md-6">
                    <form
                      className="register-form"
                      id="register-form"
                      method="POST"
                    >
                      <div className="mb-3">
                        <input
                          type="Name"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          autoComplete="off"
                          value={user.name}
                          onChange={handleInputs}
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                          value={user.email}
                          onChange={handleInputs}
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="Number"
                          className="form-control"
                          id="Number"
                          name="number"
                          placeholder="Mobile Number"
                          autoComplete="off"
                          value={user.number}
                          onChange={handleInputs}
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="work"
                          className="form-control"
                          id="work"
                          name="work"
                          placeholder="Passion"
                          autoComplete="off"
                          value={user.work}
                          onChange={handleInputs}
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
                          placeholder="Password"
                          autoComplete="off"
                          value={user.password}
                          onChange={handleInputs}
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="cpassword"
                          className="form-control"
                          id="cpassword"
                          name="cpassword"
                          placeholder="cPassword"
                          autoComplete="off"
                          value={user.cpassword}
                          onChange={handleInputs}
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        name="signup"
                        id="signup"
                        className="btn btn-primary"
                        value="register"
                        onClick={PostData}
                      >
                        Submit
                      </button>
                    </form>
                  </div>

                  <div className="col-md-6 my-md-0 my-2 ">
                    <img
                      src="assets/img/3.jpg"
                      alt="logo"
                      width="170px"
                      height="170px"
                    />
                  </div>

                  {/* finish card body */}
                </div>
              </div>
              {/* finish card */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
