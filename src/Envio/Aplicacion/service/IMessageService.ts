import { Registro } from "../../Dominio/registro";

export interface IMessageService{
    enviarMensaje(registro:Registro):string;
}