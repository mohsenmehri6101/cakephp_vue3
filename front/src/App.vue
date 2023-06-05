<template>
  <v-app id="inspire">
    <v-navigation-drawer>
      <v-list>
        <v-list-item
            v-for="({ title,icon,componentName }, index) in links_auth"
            :key="index"
            link
        >
          <router-link to="/users">

          </router-link>
          <template v-slot:prepend>
            <i class="fas pr-5" :class="icon"></i>
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
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  components: {
  },
  data: () => ({
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
}
</script>
