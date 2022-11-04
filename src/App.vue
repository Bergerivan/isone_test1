<template>
    <RouterView/>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import {provide, reactive} from "vue"
import type {Specification} from "@/interfaces/Specification"
import {Color} from "@/interfaces/Color"
import {data as defaultSpecs} from "./data";
import {Engine} from "@/interfaces/Engine";
import {WheelSize} from "@/interfaces/WheelSize";
import {Material} from "@/interfaces/Material";

provide('store', reactive({
    specs: <Specification[]>defaultSpecs,

    engines: <Engine[]>[Engine.Engine1,Engine.Engine2,Engine.Engine3,Engine.Engine4,Engine.Engine5],
    interiorMaterials: <Material[]>[Material.Velour, Material.Leather, Material.Wood, Material.Suede, Material.Vinyl, Material.Wool],
    colors: <Color[]>[Color.White, Color.Black, Color.Blue, Color.Red, Color.Green],
    wheelSizes: <WheelSize[]>[WheelSize.Size10,WheelSize.Size12,WheelSize.Size14,WheelSize.Size16,WheelSize.Size18,WheelSize.Size20,WheelSize.Size22,WheelSize.Size24,WheelSize.Size26],

    formStructure: [
        { name: 'name', title: 'Name', type: String },
        { name: 'engine', title: 'Engine', type: 'Engine' },
        { name: 'interiorMaterials', title: 'Interior materials', type: 'Material' },
        { name: 'color', title: 'Color', type: 'Color' },
        { name: 'wheelSizes', title: 'Wheel size', type: 'WheelSize' },
        { name: 'airSuspension', title: 'Air suspension', type: Boolean },
        { name: 'signatureOnHood', title: 'Signature on hood', type: String },
    ],
}))
</script>
