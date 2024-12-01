<template >
    <div>
        <div class="card border-dark container mt-5" style="width: 20%">
      <div class="d-flex justify-content-center">
        <form style="width: 90%">
          <h2 class="mb-5 d-flex justify-content-center mt-3">Login</h2>
          <div class="mb-3">
            <!-- <label for="exampleInputEmail1" class="form-label">Email address</label> -->
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nhập email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <!-- <label for="exampleInputPassword1" class="form-label">Password</label> -->
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Mật khẩu"
              v-model="password"
            />
          </div>
          <div class="d-flex">
            <!-- <router-link to="/home" type="button" class="btn btn-primary" style="width: 1000px">
              Đăng nhập
            </router-link> -->
            <button type="button" class="btn btn-primary" style="width: 1000px" @click.prevent="login">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <div class="d-flex align-items-center my-3">
        <hr class="flex-grow-1" />
        <span class="mx-3 fw-bold text-muted">HOẶC</span>
        <hr class="flex-grow-1" />
      </div>

      <div class="d-flex justify-content-center my-3">
        <a href="#" class="loginByFb">
          <i class="fa-brands fa-facebook" style="color: #329ef0"></i>
          Đăng nhập bằng Facebook
        </a>
      </div>

      <div class="d-flex justify-content-center my-3">
        <a href="#" class="text-decoration-none"> Quên mật khẩu? </a>
      </div>
    </div>

    <div class="card border-danger container mt-3" style="width: 20%">
      <div class="d-flex justify-content-center my-3">
        <span>Bạn chưa có tài khoản ư?</span>
        <router-link to="/register" class="loginByFb ms-2"> Đăng kí ngay!! </router-link>
      </div>
    </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const userData = JSON.parse(user);
    if (email.value === userData.email && password.value === userData.password) {
      // Đăng nhập thành công, chuyển đến trang chủ
      alert('Đăng nhập thanh cong');
      console.log(userData)
      router.push({
        name: 'home'});
    } else {
      // Sai thông tin đăng nhập, hiển thị lỗi
      alert('Sai thông tin đăng nhập');
    }
  } else {
    // Chưa có user trong localStorage, hiển thị lỗi
    alert('Chưa có tài khoản');
  }
};
</script>
<style lang="">
    
</style>