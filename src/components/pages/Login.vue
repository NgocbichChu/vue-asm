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
            />
          </div>
          <div class="mb-3">
            <!-- <label for="exampleInputPassword1" class="form-label">Password</label> -->
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Mật khẩu"
            />
          </div>
          <div class="d-flex">
            <router-link to="/" type="button" class="btn btn-primary" style="width: 1000px">
              Đăng nhập
            </router-link>
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
        <a href="./Register.html" class="loginByFb ms-2"> Đăng kí ngay!! </a>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>