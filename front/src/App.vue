<template>
  <v-app id="inspire">
    <v-navigation-drawer>
      <v-list>
        <v-list-item
            v-for="({ title,icon,componentName }, index) in links_auth"
            :key="index"
            link
        >
          <template v-slot:prepend>
            <i class="fas pr-5" :class="icon"></i><!--            <v-icon>{{ icon }}</v-icon>-->
          </template>
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
            v-for="({ title,icon,componentName }, index) in links_when_login"
            :key="index"
            link
        >
          <template v-slot:prepend>
            <i class="fas pr-5" :class="icon"></i>
          </template>
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-list lines="two">
                <v-list-subheader>users</v-list-subheader>
                <template v-for="({id,name,family,email,password,created,modify}, index) in users" :key="index">
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
                    <v-list-item-title>{{ `${name} ${family}`}}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ email }}
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-divider
                      v-if="n !== 6"
                      :key="`divider-${n}`"
                      inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
// import Create from './views/users/Create'
// import Read from './views/users/Read'
// import List from './views/users/List'
// import Update from './views/users/Update'
// import Login from './views/authentication/Login'

export default {
  components: {
    // 'create-user': Create,
    // 'read-user': Read,
    // 'list-user': List,
    // 'update-user': Update,
    //  Login,
  },
  data: () => ({
        users: [
          {
            id: 'id',
            name: 'name',
            family: 'family',
            email: 'mohsen@gmail.com',
            password: 'password',
            created: 'created',
            modify: 'modify',
          }
        ],
        avatarsFake: [
          '../public/avatars/1.jpg',
          '../public/avatars/2.jpg',
          '../public/avatars/3.jpg',
          '../public/avatars/4.jpg',
        ],
        links_auth: [
          {icon: 'fa-sign-in-alt', title: 'login', componentName: 'login'},
          {icon: 'fa-sign-out-alt', title: 'logout', componentName: 'logout'},
        ],
        links_when_login: [
          {icon: 'fa-users', title: 'users-list', componentName: 'list-user'},
          {icon: 'fa-user-cog', title: 'users-store', componentName: 'created-user'},
          // {icon: 'fa-user-edit', title: 'user-edit', componentName: 'update-user'},
          // {icon: 'fa-user-slash', title: 'user-delete', componentName: 'create-user'},
        ],
      }
  ),
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    },
  },
}
</script>
