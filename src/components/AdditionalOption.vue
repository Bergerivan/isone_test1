<template>
    <div>
        <button type="button" class="btn btn-primary" @click="state.show = true">+ New configuration option</button>
        <teleport to="body">
            <div v-if="state.show" class="modal-bg-component w-100 h-100 position-absolute"></div>
            <div v-if="state.show" class="modal-component modal fade show">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Additional option</h5>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label>Name</label>
                                    <input v-model="state.name" type="text" class="form-control">
                                </div>
                                <div class="form-group mt-3">
                                    <label>Value</label>
                                    <input v-model="state.value" type="text" class="form-control">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button @click="onAdd" class="btn btn-primary">Add</button>
                            <button @click="state.show = false" class="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import {reactive} from 'vue'

const props = defineProps(['onAdd'])

const initState = {
    name: '',
    value: '',
    show: false
};

const state = reactive({...initState})

const onAdd = () => {
    props.onAdd({
        name: state.name,
        value: state.value,
    });
    state.show = initState.show;
    state.name = initState.name;
    state.value = initState.value;
};
</script>

<style scoped>
.modal-component {
    display: initial;
}

.modal-bg-component {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(204, 204, 204, 0.5);
}
</style>