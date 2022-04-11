<template>
  <div class="box-shift border border-2 border-dark text-center font-monospace bg-white py-5 mb-8">
    <h2 class="fs-5">追蹤名單</h2>
  </div>
  <ul>
    <li class="card shadow-card-2 border-2 border-dark mb-4">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <img src="@/assets/img/user5-2.png" alt="headshot" class="icons-sm rounded-circle me-3" />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">波吉</a>
            <p class="text-pale-gray fs-7 lh-14">您已追蹤 90 天！</p>
          </h5>
        </div>
        <p class="fs-7 lh-14">
          追蹤時間：<time datetime="2022-2-14 12:00">2022/2/14 12:00</time>
        </p>
      </div>
    </li>
    <li class="card shadow-card-2 border-2 border-dark mb-4">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <img src="@/assets/img/user5.png" alt="headshot" class="icons-sm rounded-circle me-3" />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">多魯米</a>
            <p class="text-pale-gray fs-7 lh-14">您已追蹤 90 天！</p>
          </h5>
        </div>
        <p class="fs-7 lh-14">
          追蹤時間：<time datetime="2022-2-14 12:00">2022/2/14 12:00</time>
        </p>
      </div>
    </li>
    <li class="card shadow-card-2 border-2 border-dark mb-4">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <img src="@/assets/img/user5-3.png" alt="headshot" class="icons-sm rounded-circle me-3" />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">波吉</a>
            <p class="text-pale-gray fs-7 lh-14">您已追蹤 90 天！</p>
          </h5>
        </div>
        <p class="fs-7 lh-14">
          追蹤時間：<time datetime="2022-2-14 12:00">2022/2/14 12:00</time>
        </p>
      </div>
    </li>
    <li class="card shadow-card-2 border-2 border-dark mb-4">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <img src="@/assets/img/user5-4.png" alt="headshot" class="icons-sm rounded-circle me-3" />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">波吉</a>
            <p class="text-pale-gray fs-7 lh-14">您已追蹤 90 天！</p>
          </h5>
        </div>
        <p class="fs-7 lh-14">
          追蹤時間：<time datetime="2022-2-14 12:00">2022/2/14 12:00</time>
        </p>
      </div>
    </li>
    <li class="card shadow-card-2 border-2 border-dark mb-4">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <img src="@/assets/img/user5-1.png" alt="headshot" class="icons-sm rounded-circle me-3" />
          <h5 class="card-title mb-0">
            <a class="d-block link-dark link-hover fs-6 lh-base" href="#">波吉</a>
            <p class="text-pale-gray fs-7 lh-14">您已追蹤 90 天！</p>
          </h5>
        </div>
        <p class="fs-7 lh-14">
          追蹤時間：<time datetime="2022-2-14 12:00">2022/2/14 12:00</time>
        </p>
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
</style>
