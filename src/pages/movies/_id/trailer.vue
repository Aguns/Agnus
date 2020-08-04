<template>
  <div class="trailer-body" style="background: #1e1d1d">
    <div class="has-text-centered">
      <div class="columns">
        <div class="column vertical-align">
          <iframe
            allowfullscreen
            frameborder="0"
            height="376"
            :src="trailerUrlPath"
            style="width: 100%; min-width: 536px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { movies } from "@/api/netflix/movies";
export default {
  layout: "netflix",
  data() {
    return {
      trailerUrlPath: movies[this.$route.params.id].trailerPath,
    };
  },
};
</script>
  