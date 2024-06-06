 
import { Formularios } from "./formularios";

export interface Campos {
    idCampos: number;
    nombreCampo: string;
    tipoDatoCampo: string;
    longitudCampo: number;
    ordenCampo: number;
    idFormulario: number;
    estadoCampo: number;
    fechaCreacion: string;
    fechaModificacion: string | null; 
}
