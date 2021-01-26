<template>
    <div>
        <label>
            <input 
            type="radio"
            class="compact-style"
            :value="label"
            :disabled="disabled"
            :name="name"
            :checked="checked"
            >
            {{label}}
        </label>
    </div>
</template>

<script>
export default {
    props : {
        label: {
            type: String,
        },
        name : {
            type: String,
        },
        disabled: {
            type: Boolean
        },
        value: {
            type: String
        },
        checked:{
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>

</style>