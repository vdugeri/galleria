<template>
  <div class="admin">
    <SideNav />
  </div>
</template>

<script>
import SideNav from "@/components/Admin/SideNav";
export default {
  components: {
    SideNav
  }
};
</script>

<style lang="scss">
.admin {
  display: flex;
  justify-content: space-between;
  width: 100vw;
}
</style>
