<template>
  <img :src="photo.src" alt="photo" />
</template>

<script>
export default {
  props: ["photo"]
};
</script>
