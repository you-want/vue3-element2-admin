<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <SwitchDark class="dark" />

      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">Admin</h2>
        </div>
        <LoginForm />
      </div>

      <!-- <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_right.svg" alt="login" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
