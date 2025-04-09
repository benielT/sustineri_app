<template>
    <div class="login">
      <div class="overlap">
        <div class="login-post">
          <div class="frame">
            <div class="overlap-group">
              <button class="login-button">
                <div class="login-button-text">Log in</div>
              </button>
            </div>
          </div>
          <div class="div">Log In</div>
          <div class="email-text">Email Address</div>
          <div class="email-frame">
            <input type="text" class="text-wrapper-3" placeholder="Enter your email here..."/>
          </div>
          <div class="text-wrapper-4">Password</div>
          <div class="password-frame">
            <input type="text" class="text-wrapper-3" placeholder="Enter your password here..."/>
          </div>
          <div class="frame-3">
            <div class="text-wrapper-5">Log in using Google</div>
          </div>
          <div class="frame-4">
            <div class="text-wrapper-5">Log in using Linkedin</div>
          </div>
          <p class="not-registered">
            <span class="span">Not registered? </span>
            <span class="text-wrapper-6">Register here</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "login",
  };
  </script>
  
  <style>
  

  .login {
    background-color: #ffffff;
    display: grid;
    height: 100vh; /* Height window (vh) */
   }
  
  .login .overlap {
    background-color: #dddddd;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
  }
  
  .login .login-post {
    background-color: #f6f6f6;
    height: 841px;
    left: 35vw;
    position: relative;
    top: 10vh;
    width: 579px;
  }
  
  .login .frame {
    border: 4px solid;
    border-color: #000000;
    height: 53px;
    left: 199px;
    position: absolute;
    top: 438px;
    width: 181px;
  }
  
  .login .overlap-group {
    height: 51px;
    position: relative;
    top: -2px;
    width: 177px;
  }
  
  .login .login-button {
    background-color: #fbd148;
    height: 44px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 172px;
  }
  
  .login .login-button-text {
    color: #000000;
    font-family: "Bebas Neue-Regular", Helvetica;
    font-size: 36px;
    font-weight: 400;
    height: 49px;
    left: 0;
    letter-spacing: 0;
    line-height: 48px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 177px;
  }
  
  .login .div {
    color: #000000;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 48px;
    font-weight: 400;
    height: 48px;
    left: 237px;
    letter-spacing: 0;
    line-height: 48px;
    position: absolute;
    top: 59px;
    white-space: nowrap;
  }
  
  .login .email-text {
    color: #000000;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 48px;
    left: 80px;
    letter-spacing: 0;
    line-height: 48px;
    position: absolute;
    top: 167px;
    white-space: nowrap;
  }
  
  .login .email-frame {
    align-items: center;
    background-color: #fbd1484c;
    border: 2px solid;
    border-color: #000000;
    display: flex;
    gap: 10px;
    justify-content: center;
    left: 79px;
    padding: 2px 2px 2px 2px;
    position: absolute;
    top: 215px;
    width: 422px;
  }
  
  .login .text-wrapper-3 {
    color: #2c2c2d;
    background-color: #fbd1484c;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin-top: -1.00px;
    position: relative;
    width: 422px;
  }
  
  .login .text-wrapper-4 {
    color: #000000;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 48px;
    left: 80px;
    letter-spacing: 0;
    line-height: 48px;
    position: absolute;
    top: 293px;
    white-space: nowrap;
  }
  
  .login .password-frame {
    align-items: center;
    background-color: #fbd1484c;
    border: 2px solid;
    border-color: #000000;
    display: flex;
    gap: 10px;
    justify-content: center;
    left: 79px;
    padding: 2px 2px 2px 2px;
    position: absolute;
    top: 341px;
    width: 422px;
  }
  
  .login .frame-3 {
    align-items: center;
    background-color: #f9975d;
    border: 2px solid;
    border-color: #000000;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 139px;
    padding: 0px 51.5px;
    position: absolute;
    top: 568px;
  }
  
  .login .text-wrapper-5 {
    color: #000000;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin-top: -1.00px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
  
  .login .frame-4 {
    align-items: center;
    background-color: #f9975d;
    border: 2px solid;
    border-color: #000000;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 139px;
    padding: 0px 44px;
    position: absolute;
    top: 636px;
  }
  
  .login .not-registered {
    color: #000000;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    height: 48px;
    left: 121px;
    letter-spacing: 0;
    line-height: 48px;
    position: absolute;
    text-align: center;
    top: 744px;
    white-space: nowrap;
  }
  
  .login .span {
    color: #000000;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
  }
  
  .login .text-wrapper-6 {
    text-decoration: underline;
  }
  </style>