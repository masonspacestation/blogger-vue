<script setup>
import { Blog } from "../models/Blog.js";
import { blogsService } from "../services/BlogsService.js";
import Pop from "../utils/Pop.js";
import { Modal } from "bootstrap";


defineProps({ blog: Blog })

async function setActiveBlog(blogId) {
  try {
    console.log('Setting active blog', blogId);
    await blogsService.setActiveBlog(blogId)

  }
  catch (error) {
    Pop.toast('Could not set active blog.', 'error');
  }
}
</script>


<template>
  <div class="card">
    <div class="row">
      <div class="col-6 p-0">
        <img class="card-image" :src="blog.imgUrl" alt="">
      </div>
      <div class="col-6 py-3">
        <h2 class="fs-4">{{ blog.title }}</h2>
        <h4 class="fs-6">{{ blog.creator.name }}</h4>


        <button @click="setActiveBlog(blog.id)" type="button" class="btn btn-primary w-50 float-end me-3"
          data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-dismiss="modal">
          Read Blog
        </button>
      </div>
      <!-- <button @click="setActiveBlog(blog.id)" class="btn btn-primary">Read</button> -->
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