<script setup>
import { onMounted, computed } from "vue";
import { blogsService } from "../services/BlogsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import BlogCard from "../components/BlogCard.vue";

const blogs = computed(() => AppState.blogs)

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
  <div class="container">
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>

</template>


<style lang="scss" scoped></style>