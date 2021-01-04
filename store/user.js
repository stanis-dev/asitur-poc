export const state = () => ({
  user: null,
})

export const mutations = {
  login(state, userObj) {
    state.user = userObj
  },
}
