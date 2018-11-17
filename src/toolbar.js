import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Container } from "mdbreact";


class NavbarPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <Container fluid>
      <Navbar color="default-color" light expand="md" style={{marginTop: "20px"}}>
      <NavbarBrand>
        <strong className="white-text">Navbar</strong>
      </NavbarBrand>
      <div className="spacer"></div>
      <NavbarToggler
        onClick={this.toggleCollapse("navbarCollapse3")}
      />
      <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
        <NavbarNav left>
          <NavItem active>
            Home
          </NavItem>
          <NavItem>
            Features
          </NavItem>
          <NavItem>
           Pricing
          </NavItem>
          <NavItem>
            <Dropdown>
              <DropdownToggle nav caret>
                <div className="d-none d-md-inline">Dropdown</div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#!">Action</DropdownItem>
                <DropdownItem href="#!">Another Action</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </NavbarNav>
        
      </Collapse>
    </Navbar>
  </Container>

    );
  }
}

export default NavbarPage;