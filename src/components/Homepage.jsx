import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  const [showNav, setShowNav] = useState(false);
  const [accordionState, setAccordionState] = useState({
    Demo1: false,
    Demo2: false,
    Demo3: false,
  });

  const toggleNav = () => setShowNav(!showNav);

  const toggleAccordion = (id) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const closeAlertBox = (event) => {
    const alertBox = event.target.closest('.w3-container');
    if (alertBox) {
      alertBox.style.display = 'none';
    }
  };

  return (
    <>
      <div className="w3-theme-l5">
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <button
              className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
              onClick={toggleNav}
            >
              <i className="fa fa-bars"></i>
            </button>
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
              <i className="fa fa-home w3-margin-right"></i>Logo
            </NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News">
              <i className="fa fa-globe"></i>
            </NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings">
              <i className="fa fa-user"></i>
            </NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages">
              <i className="fa fa-envelope"></i>
            </NavLink>
            <div className="w3-dropdown-hover w3-hide-small">
              <button className="w3-button w3-padding-large" title="Notifications">
                <i className="fa fa-bell"></i>
                <span className="w3-badge w3-right w3-small w3-green">3</span>
              </button>
              <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
                <NavLink to="#" className="w3-bar-item w3-button">One new friend request</NavLink>
                <NavLink to="#" className="w3-bar-item w3-button">Sara Ali posted on your wall</NavLink>
                <NavLink to="#" className="w3-bar-item w3-button">Alyan likes your post</NavLink>
              </div>
            </div>
            <NavLink to="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
              <img src="avatar2.png" className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
            </NavLink>
          </div>
        </div>

        {/* Navbar on small screens */}
        {showNav && (
          <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">Link 1</NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">Link 2</NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">Link 3</NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">My Profile</NavLink>
          </div>
        )}

        {/* Page Container */}
        <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
          {/* The Grid */}
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center">
                    <img src="avatar3.png" className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" />
                  </p>
                  <hr />
                  <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Web Developer & Resume Designer </p>
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Pakistan,Rawalpindi</p>
                  <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> December 12, 2003</p>
                </div>
              </div>
              <br />

              {/* Accordion */}
              <div className="w3-card w3-round">
                <div className="w3-white">
                  <button onClick={() => toggleAccordion('Demo1')} className="w3-button w3-block w3-theme-l1 w3-left-align">
                    <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
                  </button>
                  {accordionState.Demo1 && (
                    <div id="Demo1" className="w3-container w3-show">
                      <p>Some text..</p>
                    </div>
                  )}
                  <button onClick={() => toggleAccordion('Demo2')} className="w3-button w3-block w3-theme-l1 w3-left-align">
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
                  </button>
                  {accordionState.Demo2 && (
                    <div id="Demo2" className="w3-container w3-show">
                      <p>Some other text..</p>
                    </div>
                  )}
                  <button onClick={() => toggleAccordion('Demo3')} className="w3-button w3-block w3-theme-l1 w3-left-align">
                    <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
                  </button>
                  {accordionState.Demo3 && (
                    <div id="Demo3" className="w3-container w3-show">
                      <div className="w3-row-padding">
                        <br />
                        <div className="w3-half">
                          <img src="lights.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Lights" />
                        </div>
                        <div className="w3-half">
                          <img src="nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
                        </div>
                        <div className="w3-half">
                          <img src="mountains.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Mountains" />
                        </div>
                        <div className="w3-half">
                          <img src="forest.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Forest" />
                        </div>
                        <div className="w3-half">
                          <img src="nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
                        </div>
                        <div className="w3-half">
                          <img src="snow.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Snow" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <br />

              {/* Interests */}
              <div className="w3-card w3-round w3-white w3-hide-small">
                <div className="w3-container">
                  <p>Interests</p>
                  <p>
                    <span className="w3-tag w3-small w3-theme-d5">News</span>
                    <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>
                    <span className="w3-tag w3-small w3-theme-d3">Cv and resume</span>
                    <span className="w3-tag w3-small w3-theme-d2">Web Development</span>
                    <span className="w3-tag w3-small w3-theme-d1">Friends</span>
                    <span className="w3-tag w3-small w3-theme-l2">Food</span>
                    <span className="w3-tag w3-small w3-theme-l3">Design</span>
                    <span className="w3-tag w3-small w3-theme-l4">labels</span>
                    <span className="w3-tag w3-small w3-theme-l5">Photos</span>
                  </p>
                </div>
              </div>
              <br />

              {/* Alert Box */}
              <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom">
                <span onClick={closeAlertBox} className="w3-button w3-theme-l3 w3-display-topright">
                  <i className="fa fa-remove"></i>
                </span>
                <p><strong>Hey!</strong></p>
                <p>People are looking at your profile. Find out who.</p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <h6 className="w3-opacity">Social Media</h6>
                      <p contentEditable="true" className="w3-border w3-padding">Status: Feeling Blue</p>
                      <button type="button" className="w3-button w3-theme">
                        <i className="fa fa-pencil"></i> &nbsp;Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img src="avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
                <span className="w3-right w3-opacity">1 min</span>
                <h4>M Bilal satti</h4><br />
                <hr className="w3-clear" />
                <p>Have you seen this?</p>
                <img src="nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <i className="fa fa-thumbs-up"></i> &nbsp;Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <i className="fa fa-comment"></i> &nbsp;Comment
                </button>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img src="Avatar8 .jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
                <span className="w3-right w3-opacity">16 min</span>
                <h4>Alyan</h4><br />
                <hr className="w3-clear" />
                <p>Just finished reading a great book!</p>
                <img src="th.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Book" />
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <i className="fa fa-thumbs-up"></i> &nbsp;Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <i className="fa fa-comment"></i> &nbsp;Comment
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="w3-col m2">
              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Upcoming Events:</p>
                  <img src="forest.jpg" alt="Forest" style={{ width: '100%' }} />
                  <p><strong>Holiday</strong></p>
                  <p>Monday 10:00 Am</p>
                  <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Friend Request</p>
                  <img src="avatar6.png" alt="Avatar" style={{ width: '50%' }} /><br />
                  <span>Sara Ali</span>
                  <div className="w3-row w3-opacity">
                    <div className="w3-half">
                      <button className="w3-button w3-block w3-green w3-section" title="Accept">
                        <i className="fa fa-check"></i>
                      </button>
                    </div>
                    <div className="w3-half">
                      <button className="w3-button w3-block w3-red w3-section" title="Decline">
                        <i className="fa fa-remove"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
                <p>ADS</p>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
                <p>ADS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage