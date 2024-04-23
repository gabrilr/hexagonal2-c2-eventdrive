import { Registro } from "../../Dominio/registro";
import { NotificationNewRegistro } from "../../Infraestructura/serviceRabbitMQ/NotificationAddRegistro";

export class NotificacionRegistroCasoUso{
    constructor(readonly serviceNotification:NotificationNewRegistro){}

    async run(registro:Registro){
        await this.serviceNotification.enviarNotificacion(registro);
    }
}
