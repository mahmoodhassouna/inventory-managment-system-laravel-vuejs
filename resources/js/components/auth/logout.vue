<template>
    <div>

    </div>
</template>
<script>

export default {
    created() {
        User.logout()
        this.$router.push({name:'/'})
    },

}
</script>
<style>

</style>
