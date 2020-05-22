import React from "react"
import SideNav from "react-simple-sidenav"
import { Link, navigateTo } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LogoWshadowDarkVertSm } from "../images/index"

import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button"

//import navmobileStyles from "./navmobile.module.css"
import { MenuIcon } from "../images/index"

class NavMobile extends React.Component {
  constructor() {
    super()

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    }
  }
  render() {
    return (
      <Container
        fluid
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Row className="mobileNavRow">
          <Col />

          <Col
            xs={6}
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              textAlign: 'center'
            }}
          >
            <Link to="/" rel="preload">
              <img
                src={LogoWshadowDarkVertSm}
                alt="Logo"
                className="mobileLogo"
              />
            </Link>
            <p
              style={{
                textAlign: "center",
                margin: "0 auto",
                padding: "0 5px 0 0",
                fontWeight: "bold",
              }}
            >
              Lic# 1036112
            </p>
          </Col>
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mobilespace"></div>
            <div
              className="navbar-toggle mobileNav"
              onClick={() => this.setState({ showNav: true })}
            >
              {" "}
              {/*<div className={navmobileStyles.menu}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" /> 
          </div>*/}
              <img src={MenuIcon} alt="" className="menuIcon" />
            </div>
          </Col>
        </Row>
        <SideNav
          openFromRight={true}
          title={
            <div>
              <Link>
                <img src={LogoWshadowDarkVertSm} width="100%" alt="" />
              </Link>
            </div>
          }
          titleStyle={{
            background: "inherit",
            color: "#black",
            width: "200px",
            margin: "auto",
          }}
          items={[
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/">
              Home
            </Link>
            </Nav.Item>,
                        <Nav.Item>
            <Link rel="preload" className="nav-link" to="/services/roofrepairs">
              Roof Repairs
            </Link>
            </Nav.Item>,
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/services">
              Commercial
            </Link>
            </Nav.Item>,
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/services">
              Residential
            </Link>
            </Nav.Item>,
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/about">
              About Us
            </Link>
            </Nav.Item>,
            <Nav.Item>
            <a
              className="nav-link"
              href="https://referrals.zenithroofingservices.com"
            >
              Referrals
            </a>
            </Nav.Item>,
            <Nav.Item>
            <Button className="QuoteNav" onClick={() => navigateTo("/contact")}>
              Contact Us
            </Button>
            </Nav.Item>,
          ]}
          itemStyle={{
            background: "inherit",
            color: "#fff",
            fontSize: "inherit",
            padding: "0",
            textAlign: "center",
          }}
          navStyle={{ width: "75%" }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </Container>
    )
  }
}

export default NavMobile
