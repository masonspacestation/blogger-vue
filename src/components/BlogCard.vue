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
  <div class="card pe-3 mb-3">
    <div class="row">
      <div class="col-4 p-0">
        <img class="card-image rounded-start" :src="blog.imgUrl" alt="">
      </div>
      <div class="col-8 p-3 ">
        <small class="fs-6 d-inline-block w-50">{{ blog.creator.name }}</small>
        <small class="fs-6 fw-light d-inline-block w-50 text-end">{{ blog.createdAt.toDateString() }}</small>
        <h2 class="fs-4">{{ blog.title }}</h2>
        <p class="truncate">{{ blog.body }}</p>

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
  height: 25dvh;
  object-fit: cover;
  object-position: center;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>