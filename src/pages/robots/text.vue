<template>
<section>
    <v-text-field label="Search" v-model="search"></v-text-field>

    <v-btn primary @click="seachText">Ok</v-btn>
</section>
</template>

<script>
import {
    robots
} from "@/services/robots/index.js"

export default {
    components: {

    },
    data() {
        return {
            search: ""
        };
    },
    computed: {},
    methods: {
        async seachText() {
            const content = {};

            content.searchTerm = this.search;

            robots.text(content);
        }
    },
    fetchOnServer: false
}
</script>
