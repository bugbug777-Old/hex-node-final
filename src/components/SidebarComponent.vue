<template>
  <div class="bg-white border border-2 border-dark px-6 py-8">
    <router-link
      to="/metawall/post"
      class="btn btn-primary btn-hover-warning shadow-btn border border-2 border-dark w-100 mb-6"
      >張貼動態</router-link
    >
    <ul class="menu">
      <li class="menu-item mb-5">
        <a class="menu-link" href="#">
          <img class="menu-icons border-0 me-4" src="@/assets/img/user.png" alt="headshot" />
          邊緣小杰
        </a>
      </li>
      <li class="menu-item mb-5">
        <router-link class="menu-link" to="/metawall/following">
          <i class="menu-icons bg-info bi bi-bell fs-5 me-4"></i>
          追蹤名單
        </router-link>
      </li>
      <li class="menu-item">
        <router-link class="menu-link" to="/metawall/likes">
          <i class="menu-icons bg-info bi bi-hand-thumbs-up fs-5 me-4"></i>
          我按讚的文章
        </router-link>
      </li>
    </ul>
  </div>
</template>
