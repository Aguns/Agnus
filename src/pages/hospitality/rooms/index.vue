<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-subheader>Filtros</v-subheader>
      </v-col>
      <v-col>
        <v-select label="Room Type" multiple v-model="roomType" :items="RoomsType"></v-select>
      </v-col>
      <v-col>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisar" single-line></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-card>
        <v-card-title>Room's</v-card-title>

        <v-card-text class="pa-0">
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            single-select
            :items-per-page="20"
            item-key="code"
            class="elevation-0"
          >
            <template v-slot:item.equipment="{ item }">
            
            <span><b>Wifi</b> - {{item.equipment.wifi}}</span>
            <span><b>Bathtub</b> - {{item.equipment.bathtub}}</span>
            <span><b>Breakfast</b> - {{item.equipment.breakfast}} </span>
            <!--<v-row>
              <v-col>
                <v-checkbox label="wifi" color="indigo" v-model="item.equipment.wifi"></v-checkbox>
                <v-checkbox label="bathtub" color="indigo" v-model="item.equipment.bathtub"></v-checkbox>
                <vheckbox label="breakfast" color="indigo" v-model="item.equipment.breakfast"></v-checkbox>
              </v-col>
              </v-row>
            -->
            </template>

            <template v-slot:item.action="{ item }">
              <v-icon small @click="detailsItem(item)">mdi-eye</v-icon>
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>

          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { Rooms } from "@/api/hospitality/rooms";
export default {
  layout: "dashboard",
  data() {
    return {
      menu: false,
      bread_items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          text: "Link 1",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
        {
          text: "Link 2",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
      search: "",
      headers: [
        { text: "Id", value: "id" },
        { text: "Room", value: "name" },
        { text: "Price", value: "price" },
        { text: "Amount", value: "amount" },
        { text: "Equipment", value: "equipment" },
        { text: "Actions", value: "action", sortable: false },
      ],
      items: Rooms,
    };
  },
  methods: {
    detailsItem(value) {
      this.$router.push("/hospitality/rooms/" + value.id);
    },
    editItem(value) {},
    deleteItem(value) {},
  },
};
</script>