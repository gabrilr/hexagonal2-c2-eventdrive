import { Registro } from "../Dominio/registro";
import { RegistroRepositorio } from "../Dominio/RegistroRepositorio";
import RegistroModel from "./Model/registro";

export class SqlRepositorio implements RegistroRepositorio{
    async crearRegistro(noTarjeta: string): Promise<Registro | null> {
        try {
            const registroCreado = await RegistroModel.create({noTarjeta});
            return new Registro(registroCreado.noTarjeta)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en AddAdmin", error);
            return null;
        }
    }
}