<template>
  <div class="desktop-main">
    <div class="overlap-wrapper">
      <div class="overlap">
        <img class="background" alt="Background" :src="background" />

        <div class="logo" />

        <div class="header-buttons">
          <button class="btn-header">OUR STORY</button>
          <button class="btn-header">SUSTAINABILITY</button>
          <button class="btn-header">COMMUNITY</button>
        </div>

        <button class="header-main-CTA">
          <div class="text-wrapper-3">LOGIN</div>
        </button>

        <div class="hero-section-heading">
          lorem ipsum
          <br />
          lorem ipsum
        </div>

        <p class="hero-section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id
          posuere est phasellus cursus ultrices. Porttitor sed integer
          malesuada nibh mattis. Neque, metus lorem ut pretium enim. Quam enim
          libero aliquam congue lacus.
        </p>

        <button class="hero-section-CTA">login</button>

        <div class="hero-section-arrow">
          <div class="overlap-group">
            <button class="arrow"></button>
          </div>
        </div>

        <div class="rectangles">
          <div class="overlap-2">
            <div class="group">
              <div class="div-wrapper">
                <div class="text-wrapper-4">OUR STORY</div>
              </div>
            </div>

            <div class="text-wrapper-5">TBD</div>

            <img class="TBD-image" alt="Tbd image" :src="TBDImage" />

            <div class="overlap-group-wrapper">
              <div class="RESOURCES-wrapper">
                <div class="RESOURCES">SUSTAINABILITY</div>
              </div>
            </div>

            <div class="EVENTS">SUSTAINABILITY</div>

            <div class="group-2">
              <div class="overlap-3">
                <div class="text-wrapper-6">COMMUNITY</div>
              </div>
            </div>

            <div class="text-wrapper-7">COMMUNITY</div>

            <img
              class="explore-image"
              alt="Explore image"
              :src="exploreImage"
            />

            <div class="group-3">
              <div class="overlap-4">
                <div class="text-wrapper-8">YOUR PROFILE</div>
              </div>
            </div>

            <div class="text-wrapper-9">PROFILE</div>
          </div>
        </div>

        <button class="sdg-img" alt="Click to go to SDG 11's goals" @click="gotoSDG" />
      </div>
    </div>
  </div>
</template>

<script>
import TBDImage from "@/assets/tbd_image.png";
import background from "@/assets/background.png";
import group12 from "@/assets/sustainable_cities_logo.png";
import arrow from "@/assets/arrow.png";

export default {
  name: "DesktopMain",
  data() {
    return {
      TBDImage,
      background,
      group12,
      arrow,
    };
  },

  methods: {
    gotoSDG() {
      window.open("https://sdgs.un.org/goals/goal11", "_blank");
    },
  },
};
</script>

<style>
.desktop-main {
  font-family: "Bebas Neue-Regular", Helvetica;
}

.desktop-main .overlap-wrapper {
  height: 1080px;
  overflow: hidden;
  width: 1920px;
}

.desktop-main .overlap {
  height: 1080px;
  position: relative;
  width: 3215px;
}

.desktop-main .background {
  height: 1080px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1920px;
}

.desktop-main .logo {
  border: 4px solid;
  border-color: #dddddd;
  height: 60px;
  left: 80px;
  position: absolute;
  top: 60px;
  width: 60px;
}

.desktop-main .header-buttons {
  height: 48px;
  left: 1097px;
  position: absolute;
  top: 66px;
  width: 526px;
  display: flex;
  flex-direction: row;
}

.desktop-main .btn-header {
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  background: none;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}

.desktop-main .text-wrapper {
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 48px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.desktop-main .div {
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  left: 167px;
  letter-spacing: 0;
  line-height: 48px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.desktop-main .text-wrapper-2 {
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  left: 388px;
  letter-spacing: 0;
  line-height: 48px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.desktop-main .header-main-CTA {
  all: unset;
  align-items: center;
  border: 4px solid;
  border-color: #dddddd;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  left: 1661px;
  padding: 6px 16px;
  position: absolute;
  top: 56px;
}

.desktop-main .text-wrapper-3 {
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 48px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.desktop-main .hero-section-heading {
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 168px;
  font-weight: 400;
  left: 200px;
  letter-spacing: 0;
  line-height: 160px;
  position: absolute;
  top: 199px;
}

.desktop-main .hero-section-text {
  color: #dddddd;
  font-family: "Oswald-Light", Helvetica;
  font-size: 24px;
  font-weight: 300;
  left: 507px;
  letter-spacing: 0;
  line-height: 28.8px;
  position: absolute;
  top: 559px;
  width: 400px;
}

.desktop-main .hero-section-CTA {
  all: unset;
  box-sizing: border-box;
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 48px;
  font-weight: 400;
  left: 507px;
  letter-spacing: 0;
  line-height: 48px;
  position: absolute;
  top: 764px;
  white-space: nowrap;
}

.desktop-main .hero-section-arrow {
  height: 150px;
  left: 607px;
  position: absolute;
  top: 712px;
  width: 136px;
}

.desktop-main .overlap-group {
  height: 33px;
  position: relative;
  top: 58px;
  width: 64px;
}

.desktop-main .arrow {
  background: no-repeat center url('@/assets/arrow.png');
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}

.desktop-main .line {
  height: 4px;
  left: 0;
  position: absolute;
  top: 15px;
  width: 64px;
}

.desktop-main .ellipse {
  height: 18px;
  left: 48px;
  position: absolute;
  top: 0;
  width: 13px;
}

.desktop-main .img {
  height: 18px;
  left: 48px;
  position: absolute;
  top: 15px;
  width: 13px;
}

.desktop-main .rectangles {
  height: 864px;
  left: 1044px;
  position: absolute;
  top: 216px;
  width: 2171px;
}

.desktop-main .overlap-2 {
  height: 864px;
  position: relative;
  width: 2163px;
}

.desktop-main .group {
  height: 720px;
  left: 0;
  position: absolute;
  top: 144px;
  width: 242px;
}

.desktop-main .div-wrapper {
  background-color: #c85c5c;
  height: 720px;
  position: relative;
  width: 240px;
}

.desktop-main .text-wrapper-4 {
  color: #303030;
  font-family: "Oswald-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: -10px;
  letter-spacing: 0;
  line-height: 24.0px;
  position: absolute;
  top: 105px;
  transform: rotate(90.00deg);
  white-space: nowrap;
}

.desktop-main .text-wrapper-5 {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 109px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 304px;
  white-space: nowrap;
}

.desktop-main .TBD-image {
  height: 160px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 704px;
  width: 240px;
}

.desktop-main .overlap-group-wrapper {
  height: 760px;
  left: 240px;
  position: absolute;
  top: 104px;
  width: 226px;
}

.desktop-main .RESOURCES-wrapper {
  background-color: #f9975d;
  height: 760px;
  position: relative;
  width: 224px;
}

.desktop-main .RESOURCES {
  color: #303030;
  font-family: "Oswald-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: -27px;
  letter-spacing: 0;
  line-height: 24.0px;
  position: absolute;
  top: 162px;
  transform: rotate(90.00deg);
  white-space: nowrap;
}

.desktop-main .EVENTS {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 322px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 296px;
  white-space: nowrap;
}

.desktop-main .group-2 {
  height: 800px;
  left: 464px;
  position: absolute;
  top: 64px;
  width: 218px;
}

.desktop-main .overlap-3 {
  background-color: #fbd148;
  height: 800px;
  position: relative;
  width: 216px;
}

.desktop-main .text-wrapper-6 {
  color: #303030;
  font-family: "Oswald-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: -13px;
  letter-spacing: 0;
  line-height: 24.0px;
  position: absolute;
  top: 188px;
  transform: rotate(90.00deg);
  white-space: nowrap;
}

.desktop-main .text-wrapper-7 {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 530px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 296px;
  white-space: nowrap;
}

.desktop-main .explore-image {
  height: 156px;
  left: 464px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 216px;
}

.desktop-main .group-3 {
  height: 760px;
  left: 680px;
  position: absolute;
  top: 104px;
  width: 198px;
}

.desktop-main .overlap-4 {
  background-color: #b2ea70;
  height: 760px;
  position: relative;
  width: 196px;
}

.desktop-main .text-wrapper-8 {
  color: #303030;
  font-family: "Oswald-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: -20px;
  letter-spacing: 0;
  line-height: 24.0px;
  position: absolute;
  top: 155px;
  transform: rotate(90.00deg);
  white-space: nowrap;
}

.desktop-main .text-wrapper-9 {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 728px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 296px;
  white-space: nowrap;
}

.desktop-main .sdg-img {
  height: 60px;
  left: 80px;
  position: absolute;
  top: 940px;
  width: 230px;
  background: no-repeat center url('@/assets/sustainable_cities_logo.png');
  border: none;
}
</style>
