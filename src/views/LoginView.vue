<template>
    <div class="body">
      <div class="overlap">
        <div class="login-post">
          <div class="frame">
            <div class="overlap-group">
              <div class="rectangle" />
              <div class="text-wrapper">Log in</div>
            </div>
          </div>
          <div class="div">Log In</div>
          <div class="text-wrapper-2">Email Address</div>
          <div class="div-wrapper">
            <p class="text-wrapper-3">Enter your email address here...</p>
          </div>
          <div class="text-wrapper-4">Password</div>
          <div class="frame-2">
            <div class="text-wrapper-3">Enter your password here...</div>
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
    name: "Body",
  };
  </script>
  
  <style>
  .body {
    background-color: #ffffff;
    height: 960px;
    width: 1440px;
  }
  
  .body .overlap {
    background-color: #dddddd;
    height: 960px;
  }
  
  .body .login-post {
    background-color: #f6f6f6;
    height: 841px;
    left: 430px;
    position: relative;
    top: 59px;
    width: 579px;
  }
  
  .body .frame {
    border: 4px solid;
    border-color: #000000;
    height: 53px;
    left: 199px;
    position: absolute;
    top: 438px;
    width: 181px;
  }
  
  .body .overlap-group {
    height: 51px;
    position: relative;
    top: -2px;
    width: 177px;
  }
  
  .body .rectangle {
    background-color: #fbd148;
    height: 49px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 177px;
  }
  
  .body .text-wrapper {
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
  
  .body .div {
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
  
  .body .text-wrapper-2 {
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
  
  .body .div-wrapper {
    align-items: center;
    background-color: #fbd1484c;
    border: 2px solid;
    border-color: #000000;
    display: flex;
    gap: 10px;
    justify-content: center;
    left: 79px;
    padding: 5px 100px 5px 0px;
    position: absolute;
    top: 215px;
    width: 422px;
  }
  
  .body .text-wrapper-3 {
    color: #88888d;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
    margin-top: -1.00px;
    position: relative;
    width: 280px;
  }
  
  .body .text-wrapper-4 {
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
  
  .body .frame-2 {
    align-items: center;
    background-color: #fbd1484c;
    border: 2px solid;
    border-color: #000000;
    display: flex;
    gap: 10px;
    justify-content: center;
    left: 79px;
    padding: 5px 100px 5px 0px;
    position: absolute;
    top: 341px;
    width: 422px;
  }
  
  .body .frame-3 {
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
  
  .body .text-wrapper-5 {
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
  
  .body .frame-4 {
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
  
  .body .not-registered {
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
  
  .body .span {
    color: #000000;
    font-family: "Oswald-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 48px;
  }
  
  .body .text-wrapper-6 {
    text-decoration: underline;
  }
  </style>