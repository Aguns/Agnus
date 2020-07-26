<template>
  <form>
    <v-text-field
      v-model="model.code"
      label="Code"
    ></v-text-field>
    <v-text-field
      v-model="model.desc"
      label="Name"
      
    ></v-text-field>
    <v-text-field
      v-model="model.desc"
      label="Description"
      
    ></v-text-field>
    <v-select
      v-model="model.type"
      :items="Types"
      label="Type"
      
    ></v-select>
    <v-select
      v-model="model.status"
      :items="Status"
      label="Status"
      
    ></v-select>

    <v-btn class="mr-4" >submit</v-btn>
    <v-btn>clear</v-btn>
  </form>
</template>
<script>
import { getBookingById } from "@/api/hospitality/booking";

export default {
  layout: 'dashboard',
  data: () => ({
    model:{},
    Status:["Reservado","Disponivel","Limpeza"],
    Types:["Simples","Duplo","Suite"]
  }),
  created() {
    this.model = getBookingById(this.$route.params.booking);
  }
};
</script>