import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';


export const LoginPage = ( { startLogin } ) => {
    return (
     <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">boilerplate</h1>
      <p>react app.</p>
      <button className="loginBtn loginBtn--google" onClick={ startLogin }>Login with Google</button>
    </div>
  </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
 startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);