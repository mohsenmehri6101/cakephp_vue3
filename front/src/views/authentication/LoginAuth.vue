<template>
  <div class="mt-16 pt-4">
    <v-sheet width="500" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
            v-model="data.email"
            label="email"
            :disabled ="email_disable"
        ></v-text-field>
        <v-text-field
            type="password"
            v-model="data.password"
            label="password"
            :disabled ="password_disable"
        ></v-text-field>
        <v-btn type="button" block class="mt-2" @click="login">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    data: {
      email: null,
      password: null,
    },
    email_disable : false ,
    password_disable:false,
  }),
  created() {
  },
  methods: {
    login() {
      let headers = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // // "Access-Control-Allow-Methods": ['GET', 'POST'],
          // "Content-Type": "application/json",
          'Accept': 'application/json',
        }
      };
      let url = '/users/login';
      let body = {
        email: this.data.email,
        password: this.data.password
      };
      window.axios.post(url, body, headers)
          .then((result) => {
            let token = result?.token ?? null;
            if(token && token.value.length !== 0){
              window.token = token;
              this.data.password = null;
              this.data.email = null;
            }
          })
          .catch((error) => {
            console.log('error:\t', error)
          });
    }
  },
}
</script>
