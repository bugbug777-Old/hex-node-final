<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div
      class="card shadow-card rounded-0 border-2 border-dark | bg-light-gray | px-12 py-70"
      style="max-width: 869px"
    >
      <div class="row gx-12">
        <div class="col-md-6">
          <img
            src="@/assets/img/img.svg"
            class="img-fluid rounded-start h-100"
            alt="MetaWall 插圖"
          />
        </div>
        <div class="col-md-6">
          <div class="card-body text-center p-0">
            <h1 class="text-primary font-paytone fs-60 lh-14">MetaWall</h1>
            <h5 class="card-title mb-9 lh-sm">到元宇宙展開全新社交圈</h5>
            <form @submit.prevent="" class="mb-4">
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <input
                  type="email"
                  class="form-control rounded-0 border-2 border-dark"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-8">
                <label for="password" class="form-label d-none"></label>
                <input
                  type="password"
                  class="form-control rounded-0 border-2 border-dark"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div class="invalid-feedback mb-4">帳號或密碼錯誤，請重新輸入！</div>
              <button
                type="submit"
                class="btn btn-primary border border-2 border-dark shadow-btn w-100"
              >
                登入
              </button>
            </form>
            <div class="text-center">
              <router-link to="/register" class="link-dark font-monospace">註冊帳號</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
