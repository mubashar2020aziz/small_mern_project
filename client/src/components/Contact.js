import React from 'react';
import {
  BsFillCalculatorFill,
  BsFillBagDashFill,
  BsFillEjectFill,
} from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-5">
            <div
              className="card shadow-lg rounded"
              style={{ border: 'none', outline: 'none' }}
            >
              <div className="card-body ms-3">
                <BsFillCalculatorFill /> Phone
                <p>12345698</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div
              className="card shadow-lg rounded"
              style={{ border: 'none', outline: 'none' }}
            >
              <div className="card-body ms-3">
                <BsFillBagDashFill /> Email
                <p>mub22@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div
              className="card shadow-lg rounded"
              style={{ border: 'none', outline: 'none' }}
            >
              <div className="card-body ms-3">
                <BsFillEjectFill /> Address
                <p>Street No:2 H:201</p>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* second row */}
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <h5
                className="header"
                style={{
                  fontWeight: 'bold',
                  marginLeft: '50px',
                  marginTop: '20px',
                }}
              >
                Get In Touch
              </h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{
                        border: 'none',
                        outline: 'none',
                      }}
                    >
                      <div className="card-body">
                        <form>
                          <input
                            type="name"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            autoComplete="off"
                            style={{
                              border: 'none',
                              outline: 'none',
                              borderBottom: '1px solid gray',
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{ border: 'none', outline: 'none' }}
                    >
                      <div className="card-body ms-3 ">
                        <form>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            autoComplete="off"
                            style={{
                              border: 'none',
                              outline: 'none',
                              borderBottom: '1px solid gray',
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{
                        border: 'none',
                        outline: 'none',
                      }}
                    >
                      <div className="card-body">
                        <form>
                          <input
                            type="text"
                            class="form-control"
                            id="number"
                            name="number"
                            placeholder="Your Number"
                            autoComplete="off"
                            style={{
                              border: 'none',
                              outline: 'none',
                              borderBottom: '1px solid gray',
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* finsih card */}
                <div className="footer my-3">
                  <div className="col-md-12">
                    <div
                      className="card"
                      style={{ border: 'none', outline: 'none' }}
                    >
                      <div className="card-body">
                        <form>
                          <div class="mb-3">
                            <input
                              type="message"
                              class="form-control"
                              id="message"
                              name="message"
                              placeholder="Message"
                              style={{
                                height: '70px',
                                border: 'none',
                                outline: 'none',
                              }}
                            />
                          </div>
                          <button type="submit" class="btn btn-primary">
                            Send Message
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* finsh container */}
      </div>
    </>
  );
};

export default Contact;
