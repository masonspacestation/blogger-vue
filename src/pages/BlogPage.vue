<script setup>
import { onMounted } from "vue";
import { blogsService } from "../services/BlogsService.js";
import Pop from "../utils/Pop.js";


onMounted(() => {
  getBlogs()
})

async function getBlogs() {
  try {
    await blogsService.getBlogs()
  }
  catch (error) {
    Pop.toast('Could not get blogs', 'error');
  }
}
</script>


<template>
  <h1>Blog page</h1>

</template>


<style lang="scss" scoped></style>