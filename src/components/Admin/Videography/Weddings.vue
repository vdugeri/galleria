<template>
  <section class="main">
    <Sidebar />
    <h2>Weddings</h2>
  </section>
</template>

<script>
import Sidebar from "@/components/Shared/SideNav";
export default {
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
}
</style>
