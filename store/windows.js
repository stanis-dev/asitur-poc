export const state = () => ({
  openWindows: []
})

export const mutations = {
  pushNewWindow(state) {
    const newWindow = {
      title: `Window ${state.openWindows.length}`,
      id: Date.now()
    }

    state.openWindows.push(newWindow)
  },

  deleteWindow(state, id) {
    const index = state.openWindows.findIndex((window) => window.id === id)
    if (index !== -1) {
      state.openWindows.splice(index, 1)
    }
  },

  moveWindowZindexToTop(state, id) {
    const windowIndex = state.openWindows.findIndex(
      (window) => window.id === id
    )

    /*  window.id === id
        ? 
        : 0 */

    state.openWindows.push(state.openWindows.splice(windowIndex, 1)[0])
  }
}

export const actions = {
  //
}
