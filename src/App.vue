<script setup>
import Header from './components/common/Header.vue'
import Home from './components/pages/Home.vue'
import Login from './components/pages/Login.vue';
import Register from './components/pages/Register.vue';
import UserProfile from './components/pages/UserProfile.vue';
</script>

<template>
<div >
  <!-- <Header /> -->
  <!-- <Home/> -->
  <!-- <Login/> -->
  <!-- <Register/> -->
  <!-- <UserProfile/> -->
  <router-view></router-view>
</div>
  
</template>

<style scoped></style>
