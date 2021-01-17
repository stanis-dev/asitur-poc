export const state = () => ({
  openWindows: [],
  activeWindow: null
})

export const mutations = {
  pushNewWindow(state) {
    const newWindow = {
      title: `Expediente N: ${Date.now()}`,
      id: Date.now(),
      state: 'max'
    }

    state.openWindows.push(newWindow)
    state.activeWindow = newWindow.id
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

    state.openWindows.push(state.openWindows.splice(windowIndex, 1)[0])
    state.activeWindow = id
  },

  minimizeWindow(state, id) {
    state.openWindows.map((window) =>
      window.id === id ? (window.state = 'min') : 0
    )
  },

  maximizeWindow(state, id) {
    state.openWindows.map((window) =>
      window.id === id ? (window.state = 'max') : 0
    )
  }
}

export const actions = {
  //
}
