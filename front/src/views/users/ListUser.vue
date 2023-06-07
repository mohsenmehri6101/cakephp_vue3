<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <div class="text-center py-10" v-if="loading">
            <v-progress-circular indeterminate :size="105"></v-progress-circular>
          </div>
          <v-list>
            <v-list-subheader>users</v-list-subheader>
            <template v-for="({name,family,email,/*id,password,created,modify*/}, index) in users" :key="index">
              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar color="grey-darken-1">
                    <v-img
                        :width="200"
                        aspect-ratio="16/9"
                        :src="avatarsFake[getRandomInt(0,3)]"
                    />
                  </v-avatar>
                </template>
                <v-list-item-title>{{ `${name} ${family}` }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ email }}
                </v-list-item-subtitle>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true,
    avatarsFake: [
      '../public/avatars/1.jpg',
      '../public/avatars/2.jpg',
      '../public/avatars/3.jpg',
      '../public/avatars/4.jpg',
    ],
    users: [],
  }),
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      let headers = {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        // 'Authorization':`Bearer ${window.token}`
      };
      window.axios.get('/users/', {headers}).then((result) => {
            this.users = result?.data?.users;
            this.loading = false;
          }
      ).catch((error) => {
            console.log('error', error)
            this.loading = false;
          }
      )
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    },
  },
}
</script>
