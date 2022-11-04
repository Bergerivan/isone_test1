<template>
    <form>
        <div v-for="key in Object.keys(newData)" class="form-group mb-3">
            <input v-if="key === 'id'" type="hidden" v-model="newData[key]">
            <div v-else>
                <label class="form-label">{{ store.formStructure.find(i=>i.name===key).title }}</label>
                <select v-if="store.formStructure.find(i=>i.name===key).type === 'Color'" v-model="newData[key]" class="form-control">
                    <option v-for="option in Color">{{ option }}</option>
                </select>
                <select v-else-if="store.formStructure.find(i=>i.name===key).type === 'Engine'" v-model="newData[key]" class="form-control">
                    <option v-for="option in Engine">{{ option }}</option>
                </select>
                <select v-else-if="store.formStructure.find(i=>i.name===key).type === 'Material'" v-model="newData[key]" class="form-control">
                    <option v-for="option in Material">{{ option }}</option>
                </select>
                <select v-else-if="store.formStructure.find(i=>i.name===key).type === 'WheelSize'" v-model="newData[key]" class="form-control">
                    <option v-for="option in WheelSize" :value="option">{{ option }}</option>
                </select>
                <input v-else-if="store.formStructure.find(i=>i.name===key).type === Boolean" type="checkbox" v-model="newData[key]" class="">
                <input v-else type="text" v-model="newData[key]" class="form-control">
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="onSubmit">Submit</button>
        </div>
    </form>
</template>

<script setup>
import {inject, reactive} from 'vue';
import {Color} from '@/interfaces/Color'
import {WheelSize} from '@/interfaces/WheelSize'
import {Material} from '@/interfaces/Material'
import {Engine} from '@/interfaces/Engine'
// @ts-ignore
import short from 'short-uuid';
import { useRouter } from 'vue-router'
const router = useRouter();

const store = inject('store')
const props = defineProps(['data'])
const newData = reactive({...props.data});

const onSubmit = () => {
    if (newData.id) {
        store.specs = [...store.specs.map(s=>{
            if (s.id===newData.id) {
                return {
                    ...s,
                    ...newData
                }
            }
            return s;
        })];
    } else {
        store.specs.push({
            id: short.generate(),
            ...newData
        })
    }
    router.push({ name: 'home' })
};
</script>

<style>

</style>
