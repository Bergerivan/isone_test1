<template>
    <form>
        <div v-for="key in store.formStructure" class="form-group mb-3">
            <label class="form-label">{{ key.title }}</label>
            <select v-if="key.type === 'Color'" v-model="newData[key.name]" class="form-control">
                <option v-for="option in Color">{{ option }}</option>
            </select>
            <select v-else-if="key.type === 'Engine'" v-model="newData[key.name]" class="form-control">
                <option v-for="option in Engine">{{ option }}</option>
            </select>
            <select v-else-if="key.type === 'Material'" v-model="newData[key.name]" class="form-control">
                <option v-for="option in Material">{{ option }}</option>
            </select>
            <select v-else-if="key.type === 'WheelSize'" v-model="newData[key.name]" class="form-control">
                <option v-for="option in WheelSize" :value="option">{{ option }}</option>
            </select>
            <input v-else-if="key.type === Boolean" type="checkbox" v-model="newData[key.name]" class="">
            <input v-else type="text" v-model="newData[key.name]" class="form-control">
        </div>
        <div v-for="extra in extraData" class="form-group mb-3">
            <label class="form-label">{{ extra.title }}</label>
            <input type="text" v-model="extra.value" class="form-control">
        </div>
        <div class="form-group mb-3">
            <AdditionalOption :onAdd="onAddNewOption"/>
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="onSubmit">Submit</button>
        </div>
    </form>
</template>

<script setup>
import {inject, reactive} from 'vue'
import {Color} from '@/interfaces/Color'
import {WheelSize} from '@/interfaces/WheelSize'
import {Material} from '@/interfaces/Material'
import {Engine} from '@/interfaces/Engine'
import short from 'short-uuid';
import {useRouter} from 'vue-router'
import AdditionalOption from "@/components/AdditionalOption.vue";

const router = useRouter()

const store = inject('store')
const props = defineProps(['data'])
const newData = reactive({...props.data})
const extraData = reactive({});

const getNewName = (name) => {
    const nameCount = Object.keys(newData).filter(k=>k.startsWith(name)).length;
    if (nameCount === 0) {
        return name;
    }
    return `${name}_${nameCount}`;
}

const onAddNewOption = ({name, value}) => {
    newData[getNewName(name)] = value;

    const fields = store.formStructure.map(f=>f.name);
    Object.keys(newData).filter(d => !fields.includes(d) && d !== 'id').map(f => {
        extraData[f] = {name: f, title: f, value: newData[f]}
    });
};

const onSubmit = () => {
    if (newData.id) {
        store.specs = [...store.specs.map(s=>{
            if (s.id===newData.id) {
                return {...s, ...newData}
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
}
</script>