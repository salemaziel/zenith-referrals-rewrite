import React, { Component } from 'react';
import SignUpFormBase from './molecules/SignUpFormBase';
import SignInGoogle from '../../molecules/SignInGoogle';
import SignInFacebook from '../../molecules/SignInFacebook';
import SignInTwitter from '../../molecules/SignInTwitter';
import SignUpLink from '../../scenes/SignUp/atoms/SignUpLink';
import SignInGithub from '../../molecules/SignInGithub';

class SignUp extends Component {
  render() {
    return (
      <div className="register">
        <div className="register__image" />
        <div className="register__content">
          <div className="register__content__inner">
            <div className="register__content__header">
              <img
                className="register__content__header__logo"
                src="https://res.cloudinary.com/dexdumfqy/image/upload/v1586498978/zenithroofing/logo/logo-vertical-dark-500x410_t74nkw.png"
                alt="logo"
              />
              <div className="register__content__header__title">
                Sign Up, Send Referrals, Get Rewarded.
              </div>
            </div>
            <div className="register__content__fields">
              <div className="register__content__form">
                <SignUpFormBase />
              </div>
              <div className="register__content__or">
                <span className="register__content__or__line" />
                <span className="register__content__or__text">
                  or
                </span>
                <span className="register__content__or__line" />
              </div>
              <div className="register__content__providers">
               {/* <div className="register__content__providers--left">*/}
                  <SignInGoogle />
               {/*   <SignInGithub />
                </div>
                <div className="register__content__providers--right">
                  <SignInTwitter />
                  <SignInFacebook />
                </div>*/}
               </div>
            </div>
            <div className="register__content__register">
              <SignUpLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
