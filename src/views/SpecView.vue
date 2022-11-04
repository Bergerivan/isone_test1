<template>
    <div class="container p-3">
        <RouterLink to="/" class="btn btn-primary">&lt; Back</RouterLink>
        <hr>
        <SpecForm :data="spec"/>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import SpecForm from "@/components/SpecForm.vue";

const store = inject('store')
const route = useRoute();

const spec = store.specs.find(s=>s.id===route.params.id)
</script>

<style>

</style>
