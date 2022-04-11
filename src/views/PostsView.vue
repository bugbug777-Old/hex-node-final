<template>
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
          <img src="@/assets/img/user.png" alt="headshot" class="icons me-4" />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">邊緣小杰</a>
            <time datetime="2022-1-10 12:00" class="d-block text-pale-gray fs-8 lh-16"
              >2022/1/10 12:00</time
            >
          </h5>
        </div>
        <p class="card-text mb-4">
          外面看起來就超冷....<br />
          我決定回被窩繼續睡....&gt;.&lt;
        </p>
        <img src="@/assets/img/image@2x.png" alt="snow" class="card-img mb-4" />
        <!-- 按讚 -->
        <div class="d-flex align-items-center mb-4">
          <i class="pointer bi bi-hand-thumbs-up text-primary me-2"></i>
          <span class="font-baloo">12</span>
        </div>
        <!-- 留言 -->
        <div class="d-flex mb-5">
          <img src="@/assets/img/user.png" alt="headshot" class="icons-sm me-2" />
          <div class="input-group">
            <input
              type="text"
              class="form-control rounded-0 border-2 border-dark border-end-0 px-4 py-3"
              placeholder="留言..."
              aria-label="留言"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-primary btn-hover-warning rounded-0 border-2 border-dark px-12 py-3"
              type="button"
              id="button-addon2"
            >
              留言
            </button>
          </div>
        </div>
        <ul>
          <li class="card border-0 bg-light-gray mb-4">
            <div class="card-body">
              <div class="d-flex mb-1">
                <img
                  src="@/assets/img/user5.png"
                  alt="headshot"
                  class="icons-sm rounded-circle border border-2 border-dark me-3"
                />
                <h5 class="card-title mb-0">
                  <a class="d-block link-dark link-hover fs-6 lh-base" href="#">希琳</a>
                  <time datetime="2022-1-11 10:00" class="d-block text-pale-gray fs-8 lh-16"
                    >2022/1/11 10:00</time
                  >
                </h5>
              </div>
              <p class="card-text ms-13">真的～我已經準備冬眠了</p>
            </div>
          </li>
          <li class="card border-0 bg-light-gray mb-4">
            <div class="card-body">
              <div class="d-flex mb-1">
                <img
                  src="@/assets/img/user5-2.png"
                  alt="headshot"
                  class="icons-sm rounded-circle border border-2 border-dark me-3"
                />
                <h5 class="card-title mb-0">
                  <a class="d-block link-dark link-hover fs-6 lh-base" href="#">波吉</a>
                  <time datetime="2022-1-11 10:00" class="d-block text-pale-gray fs-8 lh-16"
                    >2022/1/11 10:00</time
                  >
                </h5>
              </div>
              <p class="card-text ms-13">會嗎？我沒穿衣服都不覺得冷</p>
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="card shadow-card-2 border-2 border-dark">
      <div class="card-body p-6 pb-2">
        <div class="d-flex mb-4">
          <img
            src="@/assets/img/user5.png"
            alt="headshot"
            class="icons rounded-circle border border-2 border-dark me-4"
          />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">米卡莎</a>
            <time datetime="2022-1-10 12:00" class="d-block text-pale-gray fs-8 lh-16"
              >2022/1/10 12:00</time
            >
          </h5>
        </div>
        <p class="card-text mb-4">搶到想要的 NFT 啦！ya~~</p>
        <img src="@/assets/img/image2@2x.png" alt="snow" class="card-img mb-4" />
        <!-- 按讚 -->
        <div class="d-flex align-items-center mb-4">
          <i class="pointer bi bi-hand-thumbs-up text-primary me-2"></i>
          <span class="font-baloo text-pale-gray">成為第一個按讚的朋友</span>
        </div>
        <!-- 留言 -->
        <div class="d-flex mb-5">
          <img src="@/assets/img/user.png" alt="headshot" class="icons-sm me-2" />
          <div class="input-group">
            <input
              type="text"
              class="form-control rounded-0 border-2 border-dark border-end-0 px-4 py-3"
              placeholder="留言..."
              aria-label="留言"
              aria-describedby="button-addon2"
              value="好羨慕ㄛ！！"
            />
            <button
              class="btn btn-primary btn-hover-warning rounded-0 border-2 border-dark px-12 py-3"
              type="button"
              id="button-addon2"
            >
              留言
            </button>
          </div>
        </div>
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
.pointer {
  cursor: pointer;
}
</style>
