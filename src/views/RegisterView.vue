<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div
      class="card shadow-card rounded-0 border-2 border-dark | bg-light-gray | px-12 py-70"
      style="max-width: 873px"
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
            <h5 class="card-title mb-9 lh-sm">註冊</h5>
            <form @submit.prevent="" class="mb-4">
              <div class="mb-4">
                <label for="name" class="form-label d-none"></label>
                <input
                  type="name"
                  class="form-control rounded-0 border-2 border-dark mb-1"
                  id="name"
                  placeholder="暱稱"
                />
                <div class="invalid-feedback text-start">暱稱至少 2 個字元以上</div>
              </div>
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <input
                  type="email"
                  class="form-control rounded-0 border-2 border-dark"
                  id="email"
                  placeholder="Email"
                />
                <div class="invalid-feedback text-start">帳號已被註冊，請替換新的 Email！</div>
              </div>
              <div class="mb-8">
                <label for="password" class="form-label d-none"></label>
                <input
                  type="password"
                  class="form-control rounded-0 border-2 border-dark"
                  id="password"
                  placeholder="Password"
                />
                <div class="invalid-feedback text-start">密碼需至少 8 碼以上，並中英混合</div>
              </div>
              <button type="submit" class="btn btn-secondary border border-2 text-white w-100">
                註冊
              </button>
            </form>
            <div class="text-center">
              <router-link to="/login" class="link-dark font-monospace">登入</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
