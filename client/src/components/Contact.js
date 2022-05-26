import React, { useEffect, useState } from 'react';
import {
  BsFillCalculatorFill,
  BsFillBagDashFill,
  BsFillEjectFill,
} from 'react-icons/bs';

const Contact = () => {
  const [userData, setUserData] = useState({});
  const userContact = async () => {
    try {
      const res = await fetch('/api/user/getdata', {
        method: 'GET',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // credentials: 'include',
      });

      const data = await res.json();
      // console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.err);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  });
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
                <p>1234569</p>
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
        <form method="GET">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
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
                    <div className="col-md-3">
                      <div
                        className="card"
                        style={{
                          border: 'none',
                          outline: 'none',
                        }}
                      >
                        <div className="card-body">
                          <input
                            type="name"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            autoComplete="off"
                            value={userData.name}
                            style={{
                              border: 'none',
                              outline: 'none',
                              borderBottom: '1px solid gray',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="card"
                        style={{ border: 'none', outline: 'none' }}
                      >
                        <div className="card-body ms-3 ">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            autoComplete="off"
                            value={userData.email}
                            style={{
                              border: 'none',
                              outline: 'none',
                              borderBottom: '1px solid gray',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className="card"
                        style={{
                          border: 'none',
                          outline: 'none',
                        }}
                      >
                        <div className="card-body">
                          <input
                            type="text"
                            className="form-control"
                            id="number"
                            name="number"
                            placeholder="Your Number"
                            autoComplete="off"
                            value={userData.number}
                            style={{
                              border: 'none',
                              outline: 'none',
                              borderBottom: '1px solid gray',
                            }}
                          />
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
                          <form method="GET">
                            <div className="mb-3">
                              <input
                                type="message"
                                className="form-control"
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
                            <button type="submit" className="btn btn-primary">
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
        </form>
        {/* finsh container */}
      </div>
    </>
  );
};

export default Contact;
