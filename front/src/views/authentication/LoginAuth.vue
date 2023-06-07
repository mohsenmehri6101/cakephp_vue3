<template>
  <div class="mt-16 pt-4">
    <v-sheet width="500" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
            v-model="data.email"
            label="email"
        ></v-text-field>
        <v-text-field
            type="password"
            v-model="data.password"
            label="password"
        ></v-text-field>
        <v-btn type="button" block class="mt-2" @click="login">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import axios from 'axios';
import {baseUrl} from "../../../config";

export default {
  components: {},
  data: () => ({
    data: {
      email: null,
      password: null,
    }
  }),
  created() {
    // console.log('created run')
    window.axios = axios;
    window.axios.defaults.baseURL = baseUrl
  },
  methods: {
    login() {
      let headers = {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          // // "Access-Control-Allow-Methods": ['GET', 'POST'],
          "Content-Type": "application/json",
          'Accept': 'application/json',
        }
      };

      window.axios.get('/users/', headers)
          .then(response => console.log('get users rsponse', response, '\n', response?.data))
          .catch(response => console.log('response', response, response?.data));
      headers = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // // "Access-Control-Allow-Methods": ['GET', 'POST'],
          // "Content-Type": "application/json",
          'Accept': 'application/json',
        }
      };
      let url = '/users/login';
      let body = this.data;
      window.axios.post(url, body, headers)
          .then((result) => {
            console.log('result\t', result)
          })
          .catch((error) => {
            console.log('error:\t', error)
          });
    },
    // login() {
    //   // axios POST request
    //   const options = {
    //     url: 'https://localhost:8765/users',
    //     method: 'POST',
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       // "Access-Control-Allow-Methods": ['GET', 'POST'],
    //       // "Content-Type":	"application/json",
    //       'Accept': 'application/json',
    //     },
    //     data: this.data
    //   }
    //   axios(options)
    //       .then(response => {
    //         console.log(response);
    //       }).catch((error) => {
    //     console.log('error : ', error,error?.data,error?.message,error?.status)
    //   });
    // },
  },
}
</script>
