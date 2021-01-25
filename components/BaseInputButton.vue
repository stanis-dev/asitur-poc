<template>
    <div>
            <input 
            type="button"
            :value="value"
            :style="{ width: `${width}px` }"
            >
    </div>
</template>

<script>
    export default {
        props : {
            value: {
                type: String
            },
            width:{
                type: Number
            }
        }
    }
</script>
<style lang="scss" scoped>
    div{
        font-size: 14px;
        border-style: outset;
    }
</style>