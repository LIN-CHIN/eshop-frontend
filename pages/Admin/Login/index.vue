<template>
  <div class="full-container d-flex flex-column justify-content-center ">
    <div class="container login-container">
      <div class="row login-header">
        <h3 class="col">
          後台登入
        </h3>
      </div>
      <div class="row">
        <label for="userNumber" class="col-sm col-form-label">帳號</label>
      </div>
      <div class="row">
        <div class="col-sm">
          <input id="userNumber" type="text" class="form-control">
        </div>
      </div>
      <div class="row">
        <label for="userPassword" class="col-sm col-form-label">密碼</label>
      </div>
      <div class="row">
        <div class="col-sm">
          <input id="userPassword" type="password" class="form-control">
        </div>
      </div>
      <div class="row login-btn-block">
        <div class="col-6" />
        <button class="btn btn-primary col-6">
          登入
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>
.login-container{
    border-radius: 3%;
    background-color: #eeeeee;
    width: auto;
    padding: 15px 25px 5px 25px;
}

.login-header{
    text-align: center;
}

.login-btn-block{
    margin: 5px 0 0 0;
}

.full-container
{
    height: 100vh;
    width: 100%;
    background-color: #8f8c8c;
}
</style>
