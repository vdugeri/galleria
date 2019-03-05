<template>
  <div class="main">
    <Sidebar />
    <h2>Flyers</h2>
  </div>
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
