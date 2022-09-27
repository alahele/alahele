import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, CloudDownload, Person, PersonFill } from 'react-bootstrap-icons';
import { ROLE } from '../../api/role/Role';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import SearchBar from './SearchBar';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <div>
      <Navbar style={{ height: '60px' }} collapseOnSelect expand="lg" className="my-2 navbar navbar-expand-lg navbar-light">
        <Container>
          {(currentUser) ? ([
            <Navbar.Brand id={COMPONENT_IDS.NAVBAR_HOME_PAGE} as={NavLink} to="/home">
              <img width="100px" src="../images/alahele.png" alt="ala hele logo" />
            </Navbar.Brand>,
          ]) : ([
            <Navbar.Brand id={COMPONENT_IDS.NAVBAR_HOME_PAGE} as={NavLink} to="/">
              <img width="100px" src="../images/alahele.png" alt="ala hele logo" />
            </Navbar.Brand>,
          ])}
          <Navbar.Toggle className="nav" aria-controls={COMPONENT_IDS.NAVBAR_COLLAPSE} />
          <Navbar.Collapse id={COMPONENT_IDS.NAVBAR_COLLAPSE}>
            <Nav className="nav-fill me-auto ms-5 flex-grow-1 pe-3">
              {(currentUser) ? ([
                <Nav.Link id={COMPONENT_IDS.NAVBAR_BILL_LIST} href="/bill-list">Bills List</Nav.Link>,
                <Nav.Link id={COMPONENT_IDS.NAVBAR_TESTIMONY_LIST} href="/testimony-list">Testimony List</Nav.Link>,
                <Nav.Link id={COMPONENT_IDS.NAVBAR_HEARING_LIST} href="/hearing-list">Hearing List</Nav.Link>,
                <Nav.Link id={COMPONENT_IDS.NAVBAR_CREATE_TESTIMONY} href="/create-testimony">Create Testimony</Nav.Link>,
              ]) : ''}
              {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) ? ([
                <Nav.Link id={COMPONENT_IDS.NAVBAR_LIST_STUFF_ADMIN} as={NavLink} to="/admin" key="admin">Admin Option</Nav.Link>,
                <NavDropdown id={COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN} title="Admin Option 2: Dropdown" key="manage-dropdown">
                  <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN_DATABASE} key="manage-database" as={NavLink} to="/manage-database">
                    <CloudDownload />
                    {' '}
                    Admin Option 2: Dropdown
                  </NavDropdown.Item>
                  <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_UP} key="sign-up" as={NavLink} to="/signup">
                    <Person />
                    {' '}
                    Create User
                  </NavDropdown.Item>
                </NavDropdown>,
              ]) : ''}
              <SearchBar />
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
              <NavDropdown id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN} title="Login">
                <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_IN} as={NavLink} to="/signin"><PersonFill />Sign in</NavDropdown.Item>
              </NavDropdown>])}
          </Navbar.Collapse>
        </Container>
      </Navbar>,
    </div>
  );
};

export default NavBar;
