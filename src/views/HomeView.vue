<template>
    <div class="container p-3">
        <div v-for="spec in store.specs" :key="spec.id" class="card mb-3" >
            <div class="card-header" @click="activeId=activeId===spec.id?'':spec.id" role="button">{{spec.name}}</div>
            <div class="card-body collapse" :class="spec.id === activeId ? 'show' : ''">
                <table class="table table-bordered">
                    <tr v-for="item in Object.keys(spec).filter(i=>!['id', 'name'].includes(i))">
                        <td>{{item}}</td>
                        <td>{{spec[item]}}</td>
                    </tr>
                </table>
                <RouterLink :to="{name: 'spec', params: { id: spec.id }}" class="btn btn-primary">edit</RouterLink>
            </div>
        </div>

        <RouterLink :to="{name: 'spec-add'}" class="btn btn-primary">+ Make new specification</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ref } from 'vue'

const store = inject('store')
const activeId = ref('')
</script>

<style>

</style>
