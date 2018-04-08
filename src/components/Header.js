import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">ExpenseTracker</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href="/report">
                    Reports
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Profile</MenuItem>
                    <MenuItem eventKey={3.2}>Settings</MenuItem>
                    <MenuItem eventKey={3.3}>Help</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey={3.4}>Feedback</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
};
