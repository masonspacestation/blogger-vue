<script setup>
import { onMounted, computed } from "vue";

import { AppState } from "../AppState.js";


const blogs = computed(() => AppState.blogs)

onMounted(() => {

})


</script>


<template>
  <div class="container">
    <section class="row">

    </section>
  </div>

</template>


<style lang="scss" scoped></style>