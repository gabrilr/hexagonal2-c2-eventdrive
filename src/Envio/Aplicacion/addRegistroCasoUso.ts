import { Registro } from "../Dominio/registro";
import { RegistroRepositorio } from "../Dominio/RegistroRepositorio";
import { NotificacionRegistroCasoUso } from "./service/NotificacionNewRegistro";
import { MessageServiceSocket } from "../Infraestructura/serviceMessage/MessageServiceSocket";

export class AddRegistroCasoUso{
    constructor(
        readonly registroRepositorio:RegistroRepositorio, 
        readonly notificacionRegistroCasoUso:NotificacionRegistroCasoUso,
        readonly messageServiceSocket:MessageServiceSocket
    ){}

    async run(noTarjeta:string):Promise<Registro | null>{
        try {
            console.log("log en el useCase", noTarjeta);
            
            const registro:any = await this.registroRepositorio.crearRegistro(
                noTarjeta
            ); 
            if(registro){
                this.notificacionRegistroCasoUso.run(registro);
                this.messageServiceSocket.enviarMensaje(registro);
            }
            return registro;
        } catch (error) {
            console.log("Error en addRegistroCasoUso", error);
            return null;
        }
    }
}