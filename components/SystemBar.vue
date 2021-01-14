<template>
  <v-system-bar color="#efebde" class="header" app>
    <v-row class="pl-4" v-if="userIsLoggedIn">
      <v-menu
        transition="slide-y-transition"
        bottom
        v-for="(item, i) in menuItems"
        :key="i"
      >
        <template v-slot:activator="{ on, attrs }">
          <a class="body-2 mr-4 text-decoration-none black--text" v-on="on">
            {{ item.text }}
          </a>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu bottom>
        <template v-slot:activator="{ on, attrs }">
          <a
            class="body-2 mr-4 text-decoration-none black--text"
            @click="logout"
          >
            Salir
          </a>
        </template>
      </v-menu>
    </v-row>
    <v-row v-else>
      <a
        class="pl-4 body-2 mr-4 text-decoration-none black--text"
        @click="login"
      >
        Log In
      </a>
    </v-row>
  </v-system-bar>
</template>

<script>
import { UserAgentApplication } from 'msal'
import config from '@/services/graphConfig.js'
import { getUserDetails } from '../services/graphService'

export default {
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ],
      menuItems: [
        { text: 'Buscadores' },
        { text: 'Colaboradores' },
        { text: 'Ventanas' },
        { text: 'Indexación' },
        { text: 'Facturación' },
        { text: 'Herramientas' },
        { text: 'Mantenimiento' }
      ],
      UserAgentApplication: null,
      error: null,
      isAuthenticated: false,
      accounts: null
    }
  },
  props: {
    userIsLoggedIn: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    this.UserAgentApplication = new UserAgentApplication({
      auth: {
        clientId: '86eb2405-9979-456e-b0f5-9c8b080cd194',
        /*  redirectUri: 'http://localhost:3000', */
        /* logout: 'http://localhost:3000' */
        logout: 'https://gentle-glacier-0227bed03.azurestaticapps.net',
        redirectUri: 'https://gentle-glacier-0227bed03.azurestaticapps.net'
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true
      }
    })
    const accounts = this.UserAgentApplication.getAllAccounts()

    if (accounts && accounts.length > 0) {
      this.getUserProfile()
    }
  },
  methods: {
    async login() {
      try {
        await this.UserAgentApplication.loginPopup({
          scopes: config.scopes,
          prompt: 'select_account'
        })

        await this.getUserProfile()
      } catch (err) {
        console.log('Logging Errored Out, Manage App to kick him out: ' + err)
      }
    },
    logout() {
      this.UserAgentApplication.logout()
    },
    async getAccessToken(scopes) {
      try {
        const account = this.UserAgentApplication.getAccount()
        console.log(account)
        if (!account) throw new Error('login_required')

        var silentResult = await this.UserAgentApplication.acquireTokenSilent({
          scopes: scopes,
          account: account
        })

        return silentResult.accessToken
      } catch (err) {
        if (this.isInteractionRequired(err)) {
          const interactiveResult = await this.UserAgentApplication.acquireTokenPopup(
            {
              scopes: scopes
            }
          )

          return interactiveResult.accessToken
        } else {
          throw err
        }
      }
    },
    async getUserProfile() {
      try {
        var accessToken = await this.getAccessToken(config.scopes)

        if (accessToken) {
          const user = await getUserDetails(accessToken)
          this.$store.commit('user/login', user)
          /* Manage state here to log the user in */
        }
      } catch (err) {
        console.log('Error getting user profile')
      }
    }
  }
}
</script>
