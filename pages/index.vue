<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        elevation="2"
        class="d-flex justify-center align-center flex-column pa-6"
      >
        <v-template v-if="!user">
          <v-card-title>LOGIN, you lemming!</v-card-title>
          <v-badge bordered color="error" icon="mdi-lock" overlap>
            <v-btn large color="teal" @click="login">Yes, master</v-btn>
          </v-badge>
        </v-template>
        <v-card-title v-else
          >{{ user.givenName }}, a lemming working as
          {{ user.jobTitle }}!</v-card-title
        >
        <v-form></v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { UserAgentApplication } from 'msal'
import config from '@/services/graphConfig.js'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { getUserDetails } from '../services/graphService'
import { mapMutations } from 'vuex'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      UserAgentApplication: null,
      error: null,
      isAuthenticated: false,
      accounts: null,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  mounted() {
    this.UserAgentApplication = new UserAgentApplication({
      auth: {
        clientId: '86eb2405-9979-456e-b0f5-9c8b080cd194',
        redirectUri: 'http://localhost:3000',
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
      },
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
          prompt: 'select_account',
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
          account: account,
        })
        console.log('silent result' + silentResult)
        return silentResult.accessToken
      } catch (err) {
        if (this.isInteractionRequired(err)) {
          var interactiveResult = await this.UserAgentApplication.acquireTokenPopup(
            {
              scopes: scopes,
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
    },
  },
}
</script>
