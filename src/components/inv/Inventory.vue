<template>
  <v-flex>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      v-model="selected"
     :loading="loadingContent"
      class="elevation-1"
      :show-select="!isSelectedProduct"
      :search="search"
    >
      <template v-slot:item.businessArea="{ item }">
        {{
        getPrincipalBussinessArea(item)
        }}
      </template>

      <template v-slot:no-data>0 - Linhas com funcionário</template>
    </v-data-table>
  </v-flex>
</template>
<script>
import gasServices from "@/services/gasServices.js";

export default {
  data: () => ({
    type: "",
    search: "",
    menuArea: "",
    isLoading: false,
    loadingContent: false,
    items: [],
    selected: [],
    documentTypes: [],
    isSelectedProduct: true,
    headers: [
      { text: "Funcionário", value: "Entity.name" },
      { text: "Área de negócio", value: "BussinessArea.description" },
      { text: "Artigo", value: "product_id" },
      { text: "Descrição", value: "Product.description" },
      { text: "Unidade", value: "unit_id" },
      { text: "Qtd.", value: "quantity" },
      { text: "Estado", value: "status" }
    ]
  }),

  methods: {
    async initComponent(menuArea) {
      let currentQuery = this.$route.query.tipo;
      if (menuArea === "gases") {
        // project filter
        let value = "all"; //TODO : search form
        let url = `products/filters?type=55&code=${value}&project=${value}`;

        //Init headers
        this.headers = gasServices.getTableHeadersView('productView');

        this.loadingContent = true
        this.items = await this.$store.dispatch("getDataAsync", url);
        this.loadingContent = false
      } else {
        //TODO: Implement the appropriet logic here
        this.type = menuArea;
        this.loadingDocTypes = true
        this.documentTypes = await this.$store.dispatch(
          "getDataAsync",
          "documenttypes/" + this.type
        );

        this.loadingDocTypes = false

        let url = `products/entity/${"all"}/filters?hasstock=${1}&documentType=${
          this.documentTypes[0].typeArticle
        }`;

        this.loadingContent = true
        this.items = await this.$store.dispatch("getDataAsync", url);
        this.loadingContent = false
      }
    }
  },

  async created() {
    this.initComponent(this.$route.query.tipo);

    console.log('The inventory tab was created');
  },
};
</script>
