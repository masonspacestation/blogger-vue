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

const newBlog = ref({
  title: '',
  body: '',
  imgUrl: '',
  tags: []
})

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
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Write New Post</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <form action="">
              <div class="mb-3 col-4">
                <label for="blog-title">Title</label>
                <input v-model="newBlog.title" class="form-control" type="text" id="blog-title" minlength="3" required
                  maxlength="25" />
              </div>
              <div class="mb-3 col-4">
                <label for="blog-image">Cover Image</label>
                <input v-model="newBlog.imgUrl" class="form-control" type="url" id="blog-image" required
                  maxlength="500">
              </div>
            </form>
          </div>
          <div class="row">
            <RouterLink @click="closeModal()" :to="{ name: 'Profile', params: { profileId: blog.creatorId } }">
            </RouterLink>
          </div>
          <p>{{ blog.body }}</p>


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
    margin-top: -15px;
    width: 45px;
    aspect-ratio: 1/1;
    border-radius: 50em;
    object-fit: cover;
    object-position: center;
  }
}
</style>