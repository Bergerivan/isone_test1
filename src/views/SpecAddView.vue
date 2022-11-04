<template>
    <div class="container p-3">
        <RouterLink to="/" class="btn btn-primary">&lt; Back</RouterLink>
        <hr>
        <SpecForm />
    </div>
</template>

<script setup>
import { inject } from 'vue'
import SpecForm from "@/components/SpecForm.vue";

const store = inject('store')
</script>

<style>

</style>
