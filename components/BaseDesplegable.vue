<template>
    <div>
        <div class="subheader thin">
            <header>{{header1}}<button :class="{ 'green' : !active, 'red' : active}" @click="switchActive">.</button></header>
        </div>
        <div class="bordered-container">
            <div v-show="active">
                <div class="subheader thin">
                    <header>{{header2}}<button class="red" @click="switchActive">.</button></header>
                </div>
                <div class="bordered-container">
                    <div>
                        Contenido
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            header1 : {
                type : String
            },
            header2 : {
                type : String
            }
        },
        data() {
            return {
                active : false
            }
        },
        methods: {
            switchActive() {
                this.active = !this.active
            }
        }
    }
</script>

<style lang="scss" scoped>
button {
    border: 0;
    width:15px;
    height:20px;
}
.green {
    background-color:green;
}
.red {
    background-color:red;
}
</style>