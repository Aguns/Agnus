<template>
  <div class="panel-body">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </div>
</template>

<script>
import { getRoomsById, RoomSchema } from "@/api/hospitality/rooms";

export default {
  layout: "dashboard",
  data: () => ({
    model: {},
    schema: {},
    formOptions: {
      validateAfterLoad: true,
      validateAfterChanged: true,
      validateAsync: true,
    },
  }),
  created() {

    this.model = getRoomsById(this.$route.params.id);
    
    this.schema = RoomSchema;

    console.log(this.model);
    console.log(this.schema);
  },
};
</script>