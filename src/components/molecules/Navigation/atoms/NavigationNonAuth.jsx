import React from 'react';
import { Link } from 'gatsby';
import {
  LANDING,
  HOME,
  ACCOUNT,
  FAQ,
  SIGN_IN,
  SIGN_UP,

} from '../../../../constants/routes';
import SignOutButton from './SignOutButton';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

import Logo from '../../../../assets/full-logo-noBG-x512.png';
//const NavigationNonAuth = () => (
class NavigationNonAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false,
      title: '',
      items: '',
      openFromRight: '',
    };
  }
  render() {
    return (
<div className="navbar">
        <div className="navbar__inner">
          <div className="navbar__left">
            <div className="navbar__logo">
              <Link to={LANDING}>
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar__links">
              {/*   <div className="navbar__link">
            <Link to={LANDING}>Landing</Link>
          </div> */}
              <div className="navbar__link">
                <Link to={SIGN_IN}>Sign In</Link>
              </div>
              <div className="navbar__link">
                <Link to={SIGN_UP}>Sign Up</Link>
              </div>
              <div className="navbar__link">
                <Link to={FAQ}>FAQ</Link>
              </div>

            </div>
          </div>

         {/* <div className="navbar__user">
            <div className="navbar__item">
              <SignOutButton />
            </div>
        </div>*/}
        </div>

        <div className="navbar__sidenav">
          <div className="navbar__left">
            <div className="navbar__logo">
              <Link to={HOME}>
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </div>

          <div
            style={{
              width: '40px',
            }}
          >
            {' '}
            <MenuIcon
              style={{
                width: '40px',
                height: 'auto',
              }}
              onClick={() => this.setState({ showNav: true })}
            />
          </div>
        </div>

        <SideNav
          openFromRight={true}
          title={
            <div>
              <Link>
               {/* <img src={Logo} width="100%" alt="" /> */}
               </Link>
            </div>
          }
          titleStyle={{
            background: 'transparent',
            margin: 'auto',
          /*  padding: '15px 0 0 25px',
            width: '200px',
            */
          }}
          items={[
            <div className="navbar__sidenav__sidelinks">
              <Link
                rel="preload"
                className="nav-link"
                to={SIGN_IN}>Sign In</Link>
            </div>,
            <div className="navbar__sidenav__sidelinks">
              <Link rel="preload" className="nav-link" to={SIGN_UP}>Sign Up</Link>
            </div>,
            <div className="navbar__sidenav__sidelinks">
              <Link rel="preload" className="nav-link" to={FAQ}>
                FAQ
              </Link>
            </div>,

          ]}
          itemStyle={{
            background: 'inherit',
            color: '#fff',
            textAlign: 'center',
            listStyleType: 'none',
            fontSize: '1.3rem',
            padding: '20px 0',
            fontWeight: '500',
            letterSpacing: '2px',
          }}
          navStyle={{
            width: '70%',
            /*background: '#0d4879',*/ background:
              'rgba(13,72,121,0.92)',
          }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </div>
    );
  }
}

export default NavigationNonAuth;
