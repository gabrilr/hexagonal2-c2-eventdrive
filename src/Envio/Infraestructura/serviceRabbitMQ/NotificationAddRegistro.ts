import amqplib from 'amqplib';
import { Registro } from '../../Dominio/registro';
import INotificationNewRegistro from '../../Dominio/service/INotificationNewRegistro';

export class NotificationNewRegistro implements INotificationNewRegistro{
    private url:any;
    private exch: any;

    constructor(){
        this.url=process.env.AMQP_URL_EC2;
        this.exch=process.env.EXCHANGE_EC2;
    }

    async enviarNotificacion(registro: Registro): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const ch = await conn.createChannel();
        const status = await ch.publish(this.exch, "envio", Buffer.from("Tarjeta aceptada"));
        return status;     
    }
} 