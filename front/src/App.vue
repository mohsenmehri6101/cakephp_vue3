<template>
  <v-app id="inspire">
    <v-navigation-drawer>
      <v-list>
        <v-list-item v-for="({ title,icon,to}, index) in links_auth" :key="index">
          <router-link :to="to">
            <span><i class="fas pr-5" :class="icon"></i></span>
            <span v-text="title"/>
          </router-link>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="({ title,icon,to}, index) in links_when_login" :key="index">
          <router-link :to="to">
            <span><i class="fas pr-5" :class="icon"></i></span>
            <span v-text="title"/>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  components: {},
  data: () => ({
        links_auth: [
          {icon: 'fa-sign-in-alt', title: 'login', componentName: 'login',to:'/login'},
          {icon: 'fa-sign-out-alt', title: 'logout', componentName: 'logout',to:'logout'},
        ],
        links_when_login: [
          {icon: 'fa-users', title: 'users-list', componentName: 'list-user',to:'/users'},
          {icon: 'fa-user-cog', title: 'users-store', componentName: 'created-user',to:'/users/create'},
          // {icon: 'fa-user-edit', title: 'user-edit', componentName: 'update-user'},
          // {icon: 'fa-user-slash', title: 'user-delete', componentName: 'create-user'},
        ],
      }
  ),
}
</script>
