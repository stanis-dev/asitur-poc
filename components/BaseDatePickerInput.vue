<template>
  <div>
    <label for="start">F. ocurr</label>
    <input type="date"   
      class="compact-style"
      value="2018-07-22"
      min="2018-01-01"
      max="2031-12-31"
      :style="{ maxWidth: `${width}px` }"
      >
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number
    }
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
}
</script>

<style lang="scss">

</style>