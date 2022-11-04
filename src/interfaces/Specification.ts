import type {Engine} from "./Engine";
import type {Color} from "./Color";
import type {Material} from "./Material";
import type {WheelSize} from "./WheelSize";

export interface Specification {
    id: string;
    name: string;
    engine: Engine,
    color: Color,
    interiorMaterials: Material,
    wheelSizes: WheelSize,
    airSuspension: boolean;
    signatureOnHood: string;
}