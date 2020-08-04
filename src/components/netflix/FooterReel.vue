<template>
  <section class="hero is-primary is-medium">
    <div class="hero-foot">
      <div class="columns is-mobile">
        <div v-for="movie in movies" :key="movie.id" class="column">
          <nuxt-link :to="`/movies/${movie.id}`">
            <img :src="movie.smallImgSrc" class="desktop" />
            <p class="mobile">{{ movie.subtitle }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {movies} from "@/api/netflix/movies";

export default {
  data: () => ({
    movies: movies,
  }),
};
</script>

