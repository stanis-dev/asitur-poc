<template>
    <div>
        <label>
            <input 
            type="radio"
            class="compact-style"
            :value="label"
            :disabled="disabled"
            :name="name"
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>