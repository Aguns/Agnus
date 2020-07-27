<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-flex lg12 sm12 xs12>
        <v-card>
          <v-card-title>
            Project's
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

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
              <template v-slot:item.progress="{ item }">
                <v-progress-linear :value="item.progress" height="5" :color="item.color"></v-progress-linear>
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
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import { Projects } from "@/api/crm/project";

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
        { text: "Year", value: "year" },
        { text: "Project", value: "code" },
        { text: "Summary", value: "summary" },
        { text: "Client", value: "client.name" },
        { text: "Proponent", value: "proponent.name" },
        { text: "Dead Line", value: "deadline" },
        { text: "Progress", value: "progress" },
        { text: "State", value: "state" },
        { text: "Status", value: "status" },
        { text: "Supervisor", value: "supervisor.name" },

        { text: "Actions", value: "action", sortable: false },
      ],
      items: Projects,
    };
  },
  methods: {
    detailsItem(value){
      this.$router.push('/project/'+value.code)
    },
    editItem(value){

    },
    deleteItem(value){

    }
  }
};
</script>
