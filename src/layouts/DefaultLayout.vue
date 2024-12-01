<template>
    <div class="main">
        <Header />
        <router-view />
    </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue'
</script>
<style>
.main{
    background-color: black;
    height: 100vh;
}
</style>