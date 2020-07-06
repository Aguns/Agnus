<template>
  <v-app id="login" class="primary">
    <v-layout row>
      <v-flex md6>
        <v-card tile>
          <v-img v-bind:src="bgImage" :height="window.height" :Width="window.width">
            <v-row align="end" class="fill-height">
              <!--
              <v-col align-self="start" class="pa-0" cols="12">
              
                <v-avatar class="profile" color="grey" size="164">
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
              
              </v-col>
              -->
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                    <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-content>
          <v-container fill-height fluid>
            <v-layout align-center justify-center row>
              <v-flex>
                <v-card>
                  <v-card-text>
                    <div class="layout column align-center">
                      <img v-bind:src="logo" alt="Agnus CRM" />
                      <p class="primary--text">Inicie a sessão com a sua conta</p>
                    </div>
                    <v-form>
                      <v-text-field
                        append-icon="person"
                        name="login"
                        label="Email"
                        placeholder="seu@email.com"
                        type="text"
                        v-model="model.email"
                      ></v-text-field>
                      <v-text-field
                        append-icon="lock"
                        name="password"
                        label="Senha"
                        id="password"
                        placeholder="senha"
                        type="password"
                        v-model="model.password"
                      ></v-text-field>

                      <span
                        style="cursor: pointer; color: #3366BB"
                        class="caption"
                        @click="requestPasswordReset"
                      >Esqueci a senha</span>
                      <p v-show="signInSuccess()">
                        <v-icon small color="warning" class="text-xs-center">warning</v-icon>
                        <span class="body-1 red--text" color="red">Email ou senha inválido!</span>
                      </p>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn block color="primary" small @click="login" :loading="loading">Autenticar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  layout: "default",
  data: () => ({
    loading: false,
    logo: require("@/static/logo.png"),
    bgImage: require("@/static/bg/bg1.png"),
    model: {
      email: "",
      password: ""
    },
    window: {
      width: 0,
      height: 0
    }
  }),

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    async login() {
      this.loading = true;

      await this.$store
        .dispatch("authenticateUser", {
          email: this.model.email,
          password: this.model.password
        })
        .then(() => {
          this.loading = false;
        })
        .catch(error => console.log(error));
    },

    requestPasswordReset() {
      this.$store.dispatch("requestPasswordReset");
      this.$router.push("/auth/forgetpassword");
    },

    signInSuccess() {
      return this.$store.getters.loginErrorMsg;
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
