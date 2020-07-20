<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-flex lg12 sm12 xs12>
        <v-card>
          <v-card-title>
            {{list.title}}
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Pesquisar"
              single-line
              hide-details
            ></v-text-field>
            <v-icon @click="gotoRoute('create')" large color="primary">mdi-plus-circle-outline</v-icon>
          </v-card-title>

          <v-card-text class="pa-0">
            <v-data-table
              :headers="list.headers"
              :items="list.records"
              :search="search"
              single-select
              :items-per-page="20"
              :item-key="list.ItemKey"
              class="elevation-0"
              :loading="list.loading"
              :loading-text="list.loadingRecordsText"
            >
              <template v-slot:item.inactive="{ item }">
                <!--v-chip
            small
            :color="item.inactive ? 'error' : 'success'"
            dark
                >{{ item.inactive ? 'inactivo': 'activo' }}</v-chip-->
                <v-icon small v-if="!item.inactive" color="success">mdi-check</v-icon>
                <v-icon small v-else color="error">mdi-close</v-icon>
              </template>

              <template v-slot:item.active="{ item }">
                <v-icon small v-if="item.active" color="success">mdi-check</v-icon>
              </template>

              <template v-slot:item.anual="{ item }">
                <v-icon small v-if="item.anual" color="success">mdi-check</v-icon>
              </template>

              <template v-if="$route.path =='/admin/branches'" v-slot:item.view="{ item }">
                <v-icon color="primary" small @click="showWarehouseDialog(item)">mdi-eye</v-icon>
              </template>

              <template
                v-if="$route.path =='/admin/warehouses'"
                v-slot:item.viewLoaciton="{ item }"
              >
                <v-icon color="primary" small @click="vewDetails(item)">mdi-eye</v-icon>
              </template>

              <template v-slot:item.action="{ item }">
                <v-icon
                  v-if="$route.path =='/admin/users'"
                  color="warning"
                  small
                  class="mr-2"
                  @click="gotoRoute(item.email)"
                >mdi-pencil</v-icon>
                <v-icon
                  v-else
                  color="warning"
                  small
                  class="mr-2"
                  @click="gotoRoute(item.code)"
                >mdi-pencil</v-icon>
                <v-icon color="error" small @click="deleteItem(item)">mdi-delete</v-icon>
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

export default {
  layout: "dashboard",
  middleware: ["custom-auth"],
  
  data() {
    return {
      menu: false,
      list: {
        title: "Localizaçoes",
        headers: [
          { text: "Localização", value: "code" },
          { text: "Armazém", value: "warehouseId" },
          { text: "Descrição", value: "description" },
          { text: "Activo", value: "active" },
          { text: "Anual", value: "anual" },
          { text: "", value: "action", sortable: false }
        ],

        records: [],
        itemKey: "code",
        loading: false
      }
    };
  },

  methods: {
    async initData() {
      this.list.loading = true
      this.list.records = await this.$store.dispatch("getDataAsync", "locations");
      this.list.loading = false
    }
  },

  created() {
    this.initData();
  }
  
};
</script>
