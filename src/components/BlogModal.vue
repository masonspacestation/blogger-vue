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
      <div v-if="blog" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ blog.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <img :src="blog.imgUrl" alt="" class="cover-img">
          </div>
          <div class="row">
            <RouterLink @click="closeModal()" :to="{ name: 'Profile', params: { profileId: blog.creatorId } }"
              class="profile-link">
              <img :src="blog.creator.picture" alt="" class="ms-2 d-inline-block">
              <h3 class="fs-4">{{ blog.creator.name }}</h3>
            </RouterLink>
          </div>
          <p>{{ blog.body }}</p>


        </div>
        <div class="modal-footer">
          <small>Posted: {{ blog.createdAt.toDateString() }}</small>
          <br />
          <small>Updated: {{ blog.updatedAt.toDateString() }}</small>

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
    margin-top: -15px;
    width: 45px;
    aspect-ratio: 1/1;
    border-radius: 50em;
    object-fit: cover;
    object-position: center;
  }
}
</style>