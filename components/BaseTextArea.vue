<template>
    <div>
        <textarea  rows="4" cols="50" v-model="text" :style="{ width: `${width}px`, height :  `${height}px` }"></textarea>
    </div>
</template>

<script>
    export default {
        props:{
            rows:{
                type: Number
            },
            cols:{
                type: Number
            },
            text:{
                type: String
            },
            width:{
                type: Number
            },
            height:{
                type: Number
            }
        }
    }
</script>

<style lang="scss" scoped>
textarea{
  resize: none;
  background-color: white;
  border: inset;
  overflow: auto;
}
</style>