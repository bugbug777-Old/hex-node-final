<template>
  <div class="card box-shift box-shift-rounded border border-2 border-dark bg-white mb-8">
    <div class="d-flex">
      <div style="max-width: 80px">
        <img src="@/assets/img/user5-4@2x.png" class="rounded-start bg-pink" alt="headshot" />
      </div>
      <div class="flex-grow-1">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column">
              <h2 class="fs-6">阿爾敏</h2>
              <p>987,987 人追蹤</p>
            </div>
            <button
              type="button"
              class="btn border border-2 border-dark btn-warning shadow-btn px-8 py-2"
            >追蹤</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 功能列 -->
  <div class="d-flex mb-4">
    <div class="dropdown me-3">
      <button
        class="btn btn-white dropdown-toggle rounded-0 border border-2 border-dark fs-6 px-4 py-3"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        最新貼文
      </button>
      <ul
        class="dropdown-menu rounded-0 border-2 border-dark text-center py-0 mt-2"
        aria-labelledby="dropdownMenuButton1"
      >
        <li class="border-bottom border-2 border-dark">
          <a class="dropdown-item" href="#">熱門貼文</a>
        </li>
        <li class="border-bottom border-2 border-dark">
          <a class="dropdown-item" href="#">最多讚</a>
        </li>
        <li><a class="dropdown-item" href="#">伊豆讚</a></li>
      </ul>
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control rounded-0 border-2 border-dark border-end-0 px-4 py-3"
        placeholder="搜尋貼文"
        aria-label="搜尋貼文"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-primary rounded-0 border-2 border-dark p-3"
        type="button"
        id="button-addon2"
      >
        <i class="bi bi-search"></i>
      </button>
    </div>
  </div>
  <!-- 動態牆 -->
  <ul>
    <li class="card shadow-card-2 border-2 border-dark mb-4">
      <div class="card-body p-6 pb-2">
        <div class="d-flex mb-4">
          <img
            src="@/assets/img/user5-4.png"
            alt="headshot"
            class="icons rounded-circle border border-2 border-dark me-4"
          />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">阿爾敏</a>
            <time datetime="2022-1-10 12:00" class="d-block text-pale-gray fs-8 lh-16"
              >2022/1/10 12:00</time
            >
          </h5>
        </div>
        <p class="card-text mb-4">
          今天找到一張大海的照片<br />
          太美拉～～～
        </p>
        <img src="@/assets/img/image2@2x.png" alt="snow" class="card-img mb-4" />
      </div>
    </li>
    <li class="card shadow-card-2 border-2 border-dark">
      <div class="card-body p-6 pb-2">
        <div class="d-flex mb-4">
          <img
            src="@/assets/img/user5-4.png"
            alt="headshot"
            class="icons rounded-circle border border-2 border-dark me-4"
          />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">阿爾敏</a>
            <time datetime="2022-1-10 12:00" class="d-block text-pale-gray fs-8 lh-16"
              >2022/1/10 12:00</time
            >
          </h5>
        </div>
        <p class="card-text mb-4">各位我有一個作戰計畫</p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.icons {
  width: 45px;
  height: 45px;
  &-sm {
    width: 40px;
    height: 40px;
  }
}
.link-hover:hover {
  color: #03438d;
  text-decoration: underline;
}
.bg-pink {
  background-color: #fc91a1;
}
</style>
