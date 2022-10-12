import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Navbar, Nav, NavDropdown, Offcanvas, Container } from 'react-bootstrap';
import { BoxArrowRight, Person, PersonFill } from 'react-bootstrap-icons';
import { ROLE } from '../../api/role/Role';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar expand="xxxl" className="my-2 navbar navbar-light">
      <Container>
        {(currentUser) ? ([
          <Navbar.Toggle aria-controls={COMPONENT_IDS.NAVBAR_SIDEBAR} onClick={handleShow} />,
          <Navbar.Brand className="my-auto" id={COMPONENT_IDS.NAVBAR_HOME_PAGE} as={NavLink} to="/home">
            <img width="100px" src="../images/alahele.png" alt="ala hele logo" />
          </Navbar.Brand>,
        ]) : ([
          <Navbar.Brand className="my-auto" id={COMPONENT_IDS.NAVBAR_HOME_PAGE} as={NavLink} to="/">
            <img width="100px" src="../images/alahele.png" alt="ala hele logo" />
          </Navbar.Brand>,
        ])}
        <Nav className="nav-fill mx-3">
          {(currentUser) ? ([
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="my-auto" id={COMPONENT_IDS.NAVBAR_HOME_PAGE} as={NavLink} to="/home">
                  <img width="100px" src="../images/alahele.png" alt="ala hele logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Container className="my-3">
                  <h6>Dashboard</h6>
                  <Nav.Link id={COMPONENT_IDS.NAVBAR_MY_BILLS} href="/">My Bills</Nav.Link>
                  <Nav.Link id={COMPONENT_IDS.NAVBAR_MY_HEARINGS} href="/">My Hearings</Nav.Link>
                  <Nav.Link id={COMPONENT_IDS.NAVBAR_MY_TESTIMONIES} href="/">My testimonies</Nav.Link>
                </Container>
                <Container className="my-3">
                  <h6>Pages</h6>
                  <Nav.Link id={COMPONENT_IDS.NAVBAR_BILL_LIST} href="/bill-list">Bills</Nav.Link>
                  <Nav.Link id={COMPONENT_IDS.NAVBAR_TESTIMONY_LIST} href="/testimony-list">Testimonies</Nav.Link>
                  <Nav.Link id={COMPONENT_IDS.NAVBAR_HEARING_LIST} href="/hearing-list">Hearings</Nav.Link>
                  <Nav.Link id={COMPONENT_IDS.NAVBAR_CREATE_TESTIMONY} href="/create-testimony">Create Testimony</Nav.Link>
                </Container>
                <Container className="my-3">
                  <h6>Apps</h6>
                </Container>

              </Offcanvas.Body>
            </Offcanvas>,
          ]) : ''}

          {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) ? ([
            <NavDropdown id={COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN} title="Admin Options" key="manage-dropdown">
              <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_UP} key="sign-up" as={NavLink} to="/signup">
                <Person />
                {' '}
                Create a New User
              </NavDropdown.Item>
            </NavDropdown>,
          ]) : ''}
        </Nav>

        {(currentUser) ? ([
          <NavDropdown id={COMPONENT_IDS.NAVBAR_CURRENT_USER} title={currentUser}>
            <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_USER_PROFILE} as={NavLink} to="/user-profile">
              Profile
              <Person />
            </NavDropdown.Item>
            <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_SIGN_OUT} as={NavLink} to="/signout"><BoxArrowRight /> Sign out</NavDropdown.Item>
          </NavDropdown>,
        ]) : ([
          <Nav.Link id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_IN} as={NavLink} to="/signin"><PersonFill />Sign in</Nav.Link>,
        ])}
      </Container>
    </Navbar>

  );
};

export default NavBar;
