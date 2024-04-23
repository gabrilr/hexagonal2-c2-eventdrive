import { Registro } from "./registro";

export interface RegistroRepositorio{
    crearRegistro(
        noTarjeta:string
    ):Promise<Registro | null>
}