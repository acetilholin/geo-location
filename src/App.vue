<template>
    <div id="app">
        <navbar></navbar>
        <router-view/>
    </div>
</template>


<script>
    import Navbar from '@/components/layout/Navbar'
    import Gmap from "./components/home/Gmap";

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

