<template>
  <div>
      <div class="card border-dark container mt-5" style="width: 20%">
          <div class="d-flex justify-content-center">
              <form style="width: 90%">
                  <h2 class="mb-5 d-flex justify-content-center mt-5">Register</h2>
                  <div class="d-flex justify-content-center my-3">
                      <a href="#" class="loginByFb">
                          <i class="fa-brands fa-facebook" style="color: #329ef0"></i>
                          Đăng nhập bằng Facebook
                      </a>
                  </div>
                  <div class="d-flex align-items-center my-3">
                      <hr class="flex-grow-1" />
                      <span class="mx-3 fw-bold text-muted">HOẶC</span>
                      <hr class="flex-grow-1" />
                  </div>
                  <div class="mb-5">
                      <div class="mb-3">
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
                          <input
                              type="password"
                              class="form-control"
                              id="exampleInputPassword1"
                              placeholder="Mật khẩu"
                              v-model="password"
                          />
                      </div>
                      <div class="mb-3">
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputFullName"
                              placeholder="Tên đầy đủ"
                              v-model="fullName"
                          />
                      </div>
                      <div class="mb-3">
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputUserName"
                              placeholder="Tên người dùng"
                              v-model="userName"
                          />
                      </div>
                      <div class="d-flex">
                          <button
                              type="submit"
                              class="btn btn-primary"
                              style="width: 1000px"
                              @click.prevent="register"
                          >
                              Đăng kí</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="card border-danger container mt-3" style="width: 20%">
            <div class="d-flex justify-content-center my-3">
                <span>Bạn có tài khoản?</span>
                <router-link to="/" class="loginByFb ms-2"> Đăng nhập </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const fullName = ref('')
const userName = ref('')
const router = useRouter()

const register = () => {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const emailExists = users.some(user => user.email === email.value);

  if (emailExists) {
    alert("Email đã được sử dụng");
    return;
  }

  const user = {
    email: email.value,
    password: password.value,
    fullName: fullName.value,
    userName: userName.value
  };

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  alert("Đăng ký thành công!");
  router.push('/');
};
</script>

<style lang="">

</style>