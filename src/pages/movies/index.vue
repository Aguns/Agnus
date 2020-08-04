<template>
   <div class="home-content level">
        <div class="level-item">
            <div class="has-text-centered">
                <h1 class="title is-spaced">
                    <span class="has-text-primary">Naru</span>
                    <span class="has-text-danger">Terds</span>
                </h1>
                <div class="subtitle">Welcome to Naruterds, check out one of the episodes below</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  layout: "netflix",

  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.home-content {
    height: 100%;
    padding: 50px;
}

h1 {
    font-variant: small-caps;
}
</style>

