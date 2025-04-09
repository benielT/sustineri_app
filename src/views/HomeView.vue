<template>
  <div class="desktop-main">
    <div class="overlap-wrapper">
      <div class="overlap">
        <img class="background" alt="Background" :src="background" />

        <div class="logo" />
        <Navbar />
        
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

            <div @mouseover="hoverOnT = true" @mouseleave="hoverOnT = false" class="our-story-wrapper-anim" :class="{ 'expand-rect': hoverOnT, 'collapse-rect': !hoverOnT && hoverOnS || hoverOnC || hoverOnP }">
              <div  class="our-story-wrapper" @click="goToAbout">
                <div class="our-story-text">OUR STORY</div>
                <div class="tbd-text">STORY</div>
                <img class="TBD-image" :class="{ 'TBD-image-expand': hoverOnT }" alt="Tbd image" :src="TBDImage" />
              </div>
            </div>

            <div @mouseover="hoverOnS = true" @mouseleave="hoverOnS = false" class="sustainability-wrapper-anim" :class="{ 'expand-rect-s': hoverOnS, 's-to-left': !hoverOnS && hoverOnT, 's-to-right': !hoverOnS && hoverOnC || hoverOnP }">
              <div class="sustainability-wrapper">
                <div class="sustainability-text">SUSTAINABILITY</div>
              </div>
              <div class="sustainability-text-2">SUSTAINABILITY</div>
            </div>


            <div @mouseover="hoverOnC = true" @mouseleave="hoverOnC = false" class="community-wrapper-anim" :class="{ 'expand-rect-c': hoverOnC, 'c-to-left': !hoverOnC && hoverOnT || hoverOnS, 'c-to-right': !hoverOnC && hoverOnP }">
              <div class="community-wrapper" @click="goToCommunity">
                <div class="community-text">COMMUNITY</div>
                <div class="community-text-2">COMMUNITY</div>
              </div>
            </div>


            <!-- <img
              class="explore-image"
              alt="Explore image"
              :src="exploreImage"
            /> -->

            <div @mouseover="hoverOnP = true" @mouseleave="hoverOnP = false" class="your-profile-wrapper-anim" :class="{ 'expand-rect-p': hoverOnP, 'p-to-left': !hoverOnP && hoverOnT || hoverOnC || hoverOnS }">
              <div class="your-profile-wrapper">
                <div class="your-profile-text">YOUR PROFILE</div>
                <div class="your-profile-text-2">PROFILE</div>
              </div>
            </div>

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
import Navbar from "@/components/navbar.vue";

export default {
  name: "Main",
    components: {
        Navbar,
    },
  data() {
    return {
      TBDImage,
      background,
      group12,
      arrow,
      hoverOnT: false,
      hoverOnS: false,
      hoverOnC: false,
      hoverOnP: false,
      sizeT: 242,
      sizeS: 242,
      sizeC: 242,
      sizeP: 242
    };
  },

  watch: {
    hoverOnT() {
      if (this.hoverOnT) {
        this.sizeT = 500;
      }
    }
  },

  methods: {
    gotoSDG() {
      window.open("https://sdgs.un.org/goals/goal11", "_blank");
    }
  },
};
</script>

<style>
.desktop-main {
  font-family: "Bebas Neue-Regular", Helvetica;
}

.desktop-main .overlap-wrapper {
  overflow: hidden;
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

.desktop-main .our-story-wrapper-anim {
  height: 720px;
  left: 0;
  position: absolute;
  top: 144px;
  width: 242px;
}

.desktop-main .our-story-wrapper {
  background-color: #c85c5c;
  height: 720px;
  position: relative;
  width: 100%;
}

.desktop-main .collapse-rect {
  width: 50px !important;
  transition: width 0.5s ease;
}

.desktop-main .expand-rect {
  width: 680px !important;
  transition: width 0.5s ease;
}

.desktop-main .expand-rect-s {
  width: 700px !important;
  transition: width 0.5s ease, left 0.5s ease;
  left: 50px !important;
}

.desktop-main .expand-rect-c {
  width: 700px !important;
  transition: width 0.5s ease, left 0.5s ease;
  left: 120px !important;
}

.desktop-main .expand-rect-p {
  width: 700px !important;
  transition: width 0.5s ease, left 0.5s ease;
  left: 170px !important;
}

.desktop-main .s-to-left {
  transition: width 0.5s ease, left 0.5s ease;
  left: 680px !important;
  width: 70px !important;
}

.desktop-main .s-to-right {
  transition: width 0.5s ease, left 0.5s ease;
  left: 50px !important;
  width: 70px !important;
}

.desktop-main .c-to-left {
  transition: width 0.5s ease, left 0.5s ease;
  left: 750px !important;
  width: 70px !important;
}

.desktop-main .c-to-right {
  transition: width 0.5s ease, left 0.5s ease;
  left: 100px !important;
  width: 70px !important;
}

.desktop-main .p-to-left {
  transition: width 0.5s ease, left 0.5s ease;
  left: 820px !important;
  width: 70px !important;
}

.desktop-main .our-story-text {
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

.desktop-main .tbd-text {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 109px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 150px;
  white-space: nowrap;
}

.desktop-main .TBD-image {
  width: 100%;
  height: 25%;
  left: 0;
  object-fit: cover;
  position: absolute;
  bottom: 0;
}

.desktop-main .TBD-image-expand {
  height: 35%;
  transition: height 0.5s ease;
}

.desktop-main .sustainability-wrapper-anim {
  height: 760px;
  left: 240px;
  position: absolute;
  top: 104px;
  width: 226px;
}

.desktop-main .sustainability-wrapper {
  background-color: #f9975d;
  height: 760px;
  position: relative;
  width: 100%;
}

.desktop-main .sustainability-text {
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

.desktop-main .sustainability-text-2 {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 100px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 190px;
  white-space: nowrap;
}

.desktop-main .community-wrapper-anim {
  height: 800px;
  left: 464px;
  position: absolute;
  top: 64px;
  width: 218px;
}

.desktop-main .community-wrapper {
  background-color: #fbd148;
  height: 800px;
  position: relative;
  width: 100%;
}

.desktop-main .community-text {
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

.desktop-main .community-text-2 {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 60px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 230px;
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

.desktop-main .your-profile-wrapper-anim {
  height: 760px;
  left: 680px;
  position: absolute;
  top: 104px;
  width: 198px;
}

.desktop-main .your-profile-wrapper {
  background-color: #b2ea70;
  height: 760px;
  position: relative;
  width: 100%;
}

.desktop-main .your-profile-text {
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

.desktop-main .your-profile-text-2 {
  color: #303030;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 432px;
  font-weight: 400;
  left: 40px;
  letter-spacing: -17.28px;
  line-height: 188px;
  position: absolute;
  top: 180px;
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
