import React from 'react';
import { IoAccessibilitySharp } from 'react-icons/io5';
const Login = () => {
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

                    <form>
                      <div class="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <div class="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="password"
                          autoComplete="off"
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
