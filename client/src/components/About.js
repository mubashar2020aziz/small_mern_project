import React from 'react';

const About = () => {
  return (
    <>
      <div className="container">
        <form method="">
          <div
            className="row d-flex justify-content-center"
            style={{ marginTop: '50px' }}
          >
            <div className="col-md-8">
              <div className="card shadow rounded">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="assets/img/3.jpg"
                        alt="profile-logo"
                        width="170px"
                        height="170px"
                        style={{ borderRadius: '10px' }}
                      />
                      <p style={{ marginBottom: '10px' }}>Web Developer</p>
                      <p style={{ marginBottom: '10px' }}>Graphic Designer</p>
                      <p style={{ marginBottom: '10px' }}>Digital Marketer</p>
                      <p style={{ marginBottom: '10px' }}>Video Editor</p>
                    </div>
                    <div className="col-md-5">
                      <h5>MUBASHAR AZIZ</h5>
                      <h6>Web Developer</h6>

                      <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            About
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            TimeLine
                          </button>
                        </li>
                      </ul>
                      <div class="tab-content " id="myTabContent">
                        <div
                          class="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <p
                            style={{
                              marginBottom: '10px',
                            }}
                          >
                            (User Id)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              123456987
                            </span>
                          </p>
                          <p style={{ marginBottom: '10px' }}>
                            (Name)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              Mubashar Aziz
                            </span>
                          </p>
                          <p style={{ marginBottom: '10px' }}>
                            (Email)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              mubasharaziz@gmail.com
                            </span>
                          </p>
                          <p style={{ marginBottom: '10px' }}>
                            (Phone)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              1234569
                            </span>
                          </p>
                          <p style={{ marginBottom: '10px' }}>
                            (Passion)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              Web Developer
                            </span>
                          </p>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <p style={{ marginBottom: '10px' }}>
                            (Skill)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              Web Developer
                            </span>
                          </p>

                          <p style={{ marginBottom: '10px' }}>
                            (Languages)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              English
                            </span>
                          </p>

                          <p style={{ marginBottom: '10px' }}>
                            (Sale)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              No:1
                            </span>
                          </p>

                          <p style={{ marginBottom: '10px' }}>
                            (Background)
                            <span
                              className="text-primary"
                              style={{ paddingLeft: '30px' }}
                            >
                              Strong:
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <button
                        className="btn btn-primary submit"
                        name="btnaddprofile"
                        value="edit-profile"
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
