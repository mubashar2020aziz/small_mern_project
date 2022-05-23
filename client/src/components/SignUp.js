import React from 'react';

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-5 ">
          <div className="col-md-12 ">
            <div className="card">
              <h4
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
              <div className="card-body ">
                <div className="row ">
                  <div className="col-md-6">
                    <form>
                      <div class="mb-3">
                        <input
                          type="Name"
                          class="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
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
                          type="Email"
                          class="form-control"
                          id="Email"
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
                          type="Number"
                          class="form-control"
                          id="Number"
                          name="number"
                          placeholder="Mobile Number"
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
                          type="work"
                          class="form-control"
                          id="work"
                          name="work"
                          placeholder="Passion"
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
                          class="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
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
                          type="cpassword"
                          class="form-control"
                          id="cpassword"
                          name="cpassword"
                          placeholder="cPassword"
                          autoComplete="off"
                          style={{
                            border: 'none',
                            outLine: 'none',
                            borderBottom: '1px solid gray',
                          }}
                        />
                      </div>

                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>

                  <div className="col-md-6 my-md-0 my-2 ">
                    <img
                      src="assets/img/working image.png"
                      alt="logo"
                      className="img-fluid"
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
