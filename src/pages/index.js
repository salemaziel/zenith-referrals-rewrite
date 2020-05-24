import React from 'react';
import Layout from '../utils/layout';
import SignIn from '../components/scenes/Auth/scenes/SignIn/SignIn';

import TestB from '../components/reactnative/TestButton/testB';
import { CameraTest } from '../components/reactnative/camera/CameraTest'


const SignInPage = () => (
  <Layout hideNav>
    <SignIn />
    <br />
    <hr />
    <br />
    <div
      style={{
        width: '100%',
        height: '50vh',
        background: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        display: 'block',
        margin: 'auto',
        padding: '1rem',
      }}
    >
      <TestB />

      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'center',
          display: 'flex',
          margin: 'auto',
          padding: '1rem',
        }}
      >

        <CameraTest />

      </div>
    </div>
  </Layout>
);

export default SignInPage;
