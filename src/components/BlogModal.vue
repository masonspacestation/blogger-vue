<script setup>
import { computed } from "vue";
import { Blog } from "../models/Blog.js";
import { AppState } from "../AppState.js";
import { Modal } from "bootstrap";


// defineProps({ blog: Blog })
const blog = computed(() => AppState.activeBlog)

function closeModal() {
  Modal.getOrCreateInstance('#staticBackdrop').hide()
}


</script>


<template>
  <!-- Scrollable modal -->
  <!-- <div class="modal-dialog modal-dialog-scrollable">
  ...
</div> -->

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div v-if="blog" class="modal-body">
          <div class="row">
            <!-- <img :src="blog.imgUrl" alt="" class="cover-img"> -->
          </div>
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.body }}</p>
          <RouterLink @click="closeModal()" :to="{ name: 'Profile', params: { profileId: blog.creatorId } }"
            class="profile-link">
            <img :src="blog.creator.picture" alt="">
            <h3 class="fs-4">{{ blog.creator.name }}</h3>
          </RouterLink>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  height: 15dvh;
  object-fit: cover;
  object-position: center;
}

.profile-link {
  img {
    width: 35px;
    aspect-ratio: 1/1;
    border-radius: 50em;
    object-fit: cover;
    object-position: center;
  }
}
</style>