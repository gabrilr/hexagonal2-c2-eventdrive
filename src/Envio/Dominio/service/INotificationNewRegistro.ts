import { Registro } from "../registro";

export default interface INotificationNewRegistro{
    enviarNotificacion(registro:Registro):Promise<boolean>;
}