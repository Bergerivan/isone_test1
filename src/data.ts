import type {Specification} from "@/interfaces/Specification";
import {Material} from "@/interfaces/Material";
import {Color} from "@/interfaces/Color";
import {Engine} from "@/interfaces/Engine";
import {WheelSize} from "@/interfaces/WheelSize";


export const data = <Specification[]>[
    {
        id: "bNbPdCZJuDs5WMH51y3MPF",
        name: 'Name 1',
        engine: Engine.Engine1,
        color: Color.White,
        interiorMaterials: Material.Leather,
        wheelSizes: WheelSize.Size20,
        airSuspension: true,
        signatureOnHood: 'Sign 1',
    },
    {
        id: "6afPngwYXm1HTGMRC1KRxu",
        name: 'Name 2',
        engine: Engine.Engine2,
        color: Color.Red,
        interiorMaterials: Material.Velour,
        wheelSizes: WheelSize.Size26,
        airSuspension: true,
        signatureOnHood: 'Sign 2'
    },
    {
        id: "aMHfDetaUFFFvdkbMFnsRe",
        name: 'Name 3',
        engine: Engine.Engine3,
        color: Color.Blue,
        interiorMaterials: Material.Wood,
        wheelSizes: WheelSize.Size16,
        airSuspension: true,
        signatureOnHood: 'Sign 3'
    },
]