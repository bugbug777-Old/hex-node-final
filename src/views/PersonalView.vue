<template>
  <div class="box-shift border border-2 border-dark text-center font-monospace bg-white py-5 mb-8">
    <h2 class="fs-5">修改個人資料</h2>
  </div>
  <!-- Tabs -->
  <ul class="nav nav-tabs border-bottom-0 ps-3" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link tab-normal active"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="true"
      >
        暱稱修改
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link tab-normal"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        重設密碼
      </button>
    </li>
  </ul>
  <!-- Content -->
  <div class="tab-content | card border border-2 border-dark p-8" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div class="d-flex flex-column align-items-center mb-3">
        <img class="mb-4" src="@/assets/img/user_default.png" alt="預設大頭貼" />
        <input class="btn rounded-0 btn-dark text-white py-1" type="button" value="上傳大頭照" />
      </div>
      <div class="card-body p-0 mx-auto" style="width: 63%">
        <div class="mb-4">
          <label for="name" class="form-label mb-1">暱稱</label>
          <input
            type="text"
            class="form-control rounded-0 border-2 border-dark"
            id="name"
            placeholder="請輸入暱稱"
            value="邊緣小傑"
          />
        </div>
        <div class="mb-8">
          <h6 class="mb-2">性別</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="male"
              value="male"
              checked
            />
            <label class="form-check-label" for="male">男性</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="female"
              value="female"
            />
            <label class="form-check-label" for="female">女性</label>
          </div>
        </div>
        <div class="invalid-feedback text-center fs-7 mt-0 mb-4">
          1.圖片寬高比必需為 1:1，請重新輸入<br /> 2. 解析度寬度至少 300像素以上，請重新輸入
        </div>
        <input
          class="btn border border-2 border-dark btn-warning btn-hover-primary
          shadow-btn d-block w-100"
          type="button"
          value="送出更新"
        />
      </div>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia quibusdam rerum.
      Molestias commodi iure magnam asperiores ex. Consequatur quos optio exercitationem non ut
      similique ullam, quas omnis iusto possimus.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-normal {
  border: 2px solid #000400;
  border-bottom: none;
  background-color: #fff;
  color: #000400;
}
</style>
