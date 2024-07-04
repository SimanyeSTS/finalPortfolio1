
<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">&copy;Copyright | Simanye Somdaka</p><span class="shadow">{{ cYear }}</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    },
}
</script>

<style scoped>
.container-fluid{
    background-color:#ff8c00;
}

</style>
