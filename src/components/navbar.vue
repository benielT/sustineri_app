<template>
<nav class="navbar">
    <div class="header-buttons">
    <button class="btn-header" @click="goToAbout">OUR STORY</button>
    <button class="btn-header">SUSTAINABILITY</button>
    <button class="btn-header" @click="goToCommunity">COMMUNITY</button>
    </div>
    <button class="login-btn" @click="goToLogin">{{ isLoggedIn ? loggedInUser : 'LOGIN' }}</button>
</nav>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
    name: 'Navbar',
    data() {
        return {
            isLoggedIn: false,
            loggedInUser: ""
    };
    },
    setup() {
        const router = useRouter()

        const goToAbout = () => {
            router.push({ name: 'about' })
        }

        const goToCommunity = () => {
            router.push({ name: 'community' })
        }

        const goToLogin = () => {
            router.push({ name: 'login' })
        }
        return {
            goToAbout,
            goToCommunity,
            goToLogin,
        }
    }
}
</script>
<style scoped>

.navbar .header-buttons {
  height: 66px;
  left: 1097px;
  position: absolute;
  top: 58px;
  width: 526px;
  display: flex;
  flex-direction: row;
}     
.navbar .btn-header {
  color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  background: none;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  top: 56px;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}  
.navbar .btn-header:hover {
    border: 4px solid; 
    background-color: #e0a800;
}
.navbar .btn-header:active {
    background-color: #c68f00;
}
.navbar .btn-header:focus {
    outline: none;
}
.navbar .btn-header:focus-visible {
    outline: 2px solid #000;
}

.navbar .login-btn {
  background: none;
  align-items: center;
  border: 4px solid;
  border-color: #dddddd;
  font-family: "Bebas Neue-Regular", Helvetica;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  left: 1661px;
  padding: 6px 16px;
  position: absolute;
  top: 56px;
}

.navbar .login-btn:hover {
  background-color: #dddddd;
  color: #181818;
}

.navbar .login-btn:active {
  background-color: #dddddd;
  color: #181818;
  opacity: 0.8;
}

.navbar  .login-btn {
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
</style>
