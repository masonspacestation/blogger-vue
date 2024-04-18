<script setup>
import Pop from "../utils/Pop.js";
import { profilesService } from "../services/ProfilesService.js";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { blogsService } from "../services/BlogsService.js";
import BlogCard from "../components/BlogCard.vue";
import { Modal } from "bootstrap";


const route = useRoute()

const profile = computed(() => AppState.activeProfile)

const blogs = computed(() => AppState.profileBlogs)

onMounted(() => {
  getProfile()
  getProfileBlogs()
})

async function getProfile() {
  try {
    await profilesService.getProfile(route.params.profileId)
  }
  catch (error) {
    Pop.toast('Could not get profile', 'error');
  }
}

async function getProfileBlogs() {
  try {
    await blogsService.getProfileBlogs(route.params.profileId)
  }
  catch (error) {
    Pop.toast('Could not retrieve profile blogs.', 'error');
  }
}

</script>


<template>
  <section v-if="profile" class="container">
    <div class="row my-3">
      <div class="col-4">
        <img :src="profile.picture" alt="" class="profile-img">
      </div>
      <div class="col-8 p-4">
        <h2>{{ profile.name }}</h2>
        <p>{{ profile.bio }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-for="blog in blogs" :key="blog.id">
        <BlogCard :blog="blog" />

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  height: 15dvh;
  object-fit: cover;
  object-position: center;
}

.profile-img {
  width: 50%;
  aspect-ratio: 1/1;
  border-radius: 50em;
  object-fit: cover;
  object-position: center;
}
</style>