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
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import axios from 'axios';
import {urlBackend} from "../../../config";

export default {
  components: {},
  data: () => ({
    data: {
      email: null,
      password: null,
    }
  }),
  methods: {
    login() {
      // axios POST request
      const options = {
        url: urlBackend + '/login',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: this.data
      }
      axios(options)
          .then(response => {
            console.log(response);
          }).catch((error) => {
        console.log('error : ', error)
      });
    },
  },
}
</script>
