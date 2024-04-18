<script setup>
import { Blog } from "../models/Blog.js";


defineProps({ blog: Blog })

</script>


<template>
  <div class="card">
    <div class="row">
      <div class="col-6 p-0">
        <img class="card-image" :src="blog.imgUrl" alt="">
      </div>
      <div class="col-6 d-flex justify-content-center align-items-center">
        <h4>{{ blog.title }}</h4>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card-image {
  width: 100%;
  height: 20vh;
  object-fit: cover;
  object-position: center;
}
</style>