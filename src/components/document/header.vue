<template>
  <v-flex>
    <v-row>
      <v-col>
        <v-autocomplete
          dense
          prepend-icon="mdi-text-box"
          color="primary"
          disabled
          v-model="documentType"
          :items="documentTypes"
          clearable
          label="Tipo de documento"
          :filter="filterCodeDesc"
          return-object
          v-validate="'required'"
          data-vv-name="formModel.documenttype"
          :error-messages="errors.collect('formModel.documenttype')"
          required
          item-text="description"
          item-value="code"
        ></v-autocomplete>
      </v-col>

      <v-col>
        <v-text-field
          dense
          prepend-icon="mdi-file-document-outline"
          v-model="formModel.referenceDoc"
          label="Número de requisição"
          :error-messages="errors.collect('docNumber')"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-menu
          ref="dateMenu"
          v-model="dateMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              dense
              v-model="formModel.date"
              label="Data"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="formModel.date" no-title @input="dateMenu = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-autocomplete
          dense
          class="body-1"
          v-model="formModel.entity"
          :items=" $route.query.doc !== 'DRGAS' ?  form.employees : form.product_suppliers"
          clearable
          :label=" $route.query.doc !== 'DRGAS' ? 'Selecione o funcionário' : 'Selecione o fornecedor'"
          prepend-icon="mdi-account-box"
          :filter="filterCodeName"
          :search-input.sync="searchEntity"
          return-object
          @input="changeEntity"
          v-validate="'required'"
          data-vv-name="formModel.entity"
          :error-messages="errors.collect('formModel.entity')"
          required
          :loading="form.loadingEntity"
          item-text="name"
          item-value="code"
          no-data-text="Nenhum registo foi encontrado"
          caption
        ></v-autocomplete>
      </v-col>
      <v-col v-show="$route.query.doc === 'DRGAS'
      && form.product_suppliers.length === 0">
        <v-btn color="warning" @click="dialog = !dialog" small>Criar</v-btn>

        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Novo fornecedor</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field dense v-model="supplier.code" label="Código"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="8">
                    <v-text-field dense v-model="supplier.Name" label="Nome"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="warning" @click="dialog = !dialog" small>Cancelar</v-btn>
              <v-btn
                color="primary"
                :loading="onCreatingSupplier"
                @click="createNewSupplier"
                small
              >Gravar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col v-if="$route.query.doc !== 'DRGAS'">
        <v-autocomplete
          dense
          
          v-model="formModel.businessArea"
          :items="form.businessArea"
          clearable
          label="Selecione a área de negócio"
          prepend-icon="mdi-cash-usd-outline"
          :filter="filterCodeDesc"
          return-object
          v-validate="'required'"
          data-vv-name="formModel.businessArea"
          :error-messages="errors.collect('formModel.businessArea')"
          required
          item-value="code"
          item-text="description"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-file-input dense show-size v-model="formModel.attachments" counter label="Anexo"></v-file-input>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>

export default {
  props: {
    formModel: {
      type: Object,
      default: () => ({
        title: '',
        pending_selected_items: [],
        documenttype: null,
        date: new Date().toISOString().substr(0, 10),
        docNumber: "",
        typeEntity: "U",
        entity: null,
        businessArea: null,
        Attachs: [],
        createdBy: "Guimarães Mahota",
        createdAt: new Date().toISOString(),
        isSavingDataAndClose: false,
        isSavingData: false,
        items: []
      })
    },
    form: {
      type: Object,
      default: () => ({
        title: "Documentos internos",
        documenttype: null,       
        requiredBussinessArea: true,
        loadingEntity: false,
        requiredExternalDocNumber: true,
        requiredAttachs: false,
        requiredProject: true,
        requiredNotes: true,
        isSelectedProduct: false,
        canAddProduct: true,
        employees: [],
        projects: [],
        businessArea: [],
        docTypes: [],
        products: [],
        unitys: [],
        rulesQuantity: {
          required: value => !!value || "Required.",
          loanMin: value => value >= 0 || "Quantidade não pode ser menor de 0",
          loanMax: value =>
            value <= 50000 || "Quantidade não pode ser menor de 50000"
        }
      })
    }
  },

  data: () => ({
    dialog: false,
    dateMenu: false,
    searchEntity: {},
    supplier: {},
    dialog: false,
    onCreatingSupplier: false
  }),

  beforeMount() {
    console.log(
      "The best way to predict your futere is to code bug",
      this.formModel.documenttype.code
    );
  },

  methods: {
    async getProducts(supplier, status, type) {
      return await this.$store.dispatch(
        "getDataAsync",
        `products/supplier/${supplier}?status=${status}&type=${type}`
      );
    },

    async changeEntity(item) {
      /*if(this.$route.query.doc === 'DRGAS') {
       this.formModel.items  = await this.getProducts(item.code, 12, '55');
      }*/
      if (this.$route.query.doc !== "DRGAS") {
        this.formModel.items = [];
        this.formModel.businessArea = null;

        if (!item) {
        } else {
          var buss = item.BusinessArea.filter(d => d.isPrincipal === true);

          if (buss.length > 0) {
            this.formModel.businessArea = buss[0].businessArea;
          }

          let entity = item.code;
          let typeArticle = this.formModel.documenttype.typeArticle;

          console.log("FORM MODEL IS: ", this.formModel.documenttype);

          //Get Pending items
          if (this.$route.query.doc === "DPPC") {
            let url = `stocks/pending?entity=${
              item.code
            }&productstatuses=${6}&doctype=${"EPPC"}`;

            this.form.loadingTableRecords = true;
            
            await this.$store.dispatch("getDataAsync", url).then(resp => {
              resp.forEach(element => {
                this.formModel.items.push(element);
              });
              this.form.loadingTableRecords = false;
            });
          } else if (this.formModel.documenttype.type == "E" && this.$route.query.tipo !== 'gases') {
            let previous_doc; 
            
            if(this.$route.query.doc === 'DE')
              previous_doc = 'SE';
            else if(this.$route.query.doc === 'DF')
              previous_doc = 'SF'

            let url = `stocks/pending?doctype=${previous_doc}&entity=${item.code}`;

            this.formModel.items = await this.$store.dispatch(
              "getDataAsync",
              url
            );
          }
        }
      }
    },

    async createNewSupplier() {
      this.onCreatingSupplier = true;

      await this.$store
        .dispatch("postDataAsync", {
          api_resourse: "products/suppliers",
          post_data: this.supplier
        })
        .then(result => {
          this.onCreatingSupplier = false;
          this.dialog = !this.dialog;
          this.$emit("search-entities", result.code);
          this.formModel.entity = result;
        })
        .catch(err => {});
    },

    filterCodeName(item, queryText, itemText) {
      if (!queryText) return "";

      const textOne = item.code.toLowerCase();
      const textTwo = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },

    filterCodeDesc(item, queryText, itemText) {
      if (!queryText) return "";

      const textOne = item.code.toLowerCase();
      const textTwo = item.description.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    }
  },
  computed: {
    location: () => window.location
  },

  watch: {
    searchEntity(value) {
      this.$emit("search-entities", value);
    }
  }
};
</script>
