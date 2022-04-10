<template>
  <Navbar />
  <div class="container pt-12" style="max-width: 869px">
    <div class="d-flex justify-content-between">
      <div style="width: 61%">Content Wall</div>
      <div style="width: 35%">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import Sidebar from '@/components/SidebarComponent.vue';

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
