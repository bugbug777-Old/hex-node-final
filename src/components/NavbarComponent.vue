<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom border-2 border-dark py-3">
    <div class="container" style="max-width: 873px">
      <router-link class="navbar-brand font-paytone lh-14 text-dark py-0" to="/metawall"
        >MetaWall</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end align-items-center"
        id="navbarNavDarkDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <button
              type="button"
              @click="toggleDropdown"
              ref="dropdown"
              class="nav-link border-0 bg-white py-1"
              id="navbarDarkDropdownMenuLink"
              aria-expanded="false"
              style="line-height: 1.25"
            >
              <img class="icons me-1" src="@/assets/img/user.png" alt="headshot" />
              <span class="border-bottom border-2 border-dark fw-bold font-monospace text-dark pb-1"
                >Member</span
              >
            </button>
            <ul
              class="dropdown-menu rounded-0 border-2 border-dark text-center py-0 mt-2"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li class="border-bottom border-2 border-dark">
                <a class="dropdown-item" href="#">我的貼文牆</a>
              </li>
              <li class="border-bottom border-2 border-dark">
                <a class="dropdown-item" href="#">修改個人資料</a>
              </li>
              <li><a class="dropdown-item" href="#">登出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from 'bootstrap/js/dist/dropdown';

export default {
  data() {
    return {
      dropdown: '',
      isDroped: false,
    };
  },
  methods: {
    toggleDropdown() {
      if (!this.isDroped) {
        this.dropdown.show();
        this.isDroped = true;
      } else {
        this.dropdown.hide();
        this.isDroped = false;
      }
    },
  },
  mounted() {
    this.dropdown = new Dropdown(this.$refs.dropdown);
  },
};
</script>

<style lang="scss" scoped>
.icons {
  width: 30px;
  height: 30px;
}
</style>
