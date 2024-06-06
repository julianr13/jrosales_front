 
import { Campos } from "./campos";

export interface Formularios {
    idFormulario: number;
    nombreFormulario: string;
    fechaCreacion: string;
    fechaModificacion: string | null;
    estadoFormulario: number;
    detalles: Campos[];
}
