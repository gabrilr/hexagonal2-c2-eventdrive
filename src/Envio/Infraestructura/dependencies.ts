import { AddRegistroController } from "./controller/addRegistroController";
import { AddRegistroCasoUso } from "../Aplicacion/addRegistroCasoUso";
import { NotificacionRegistroCasoUso } from "../Aplicacion/service/NotificacionNewRegistro";
import { SqlRepositorio } from "./SqlRepositorio";
import { MessageServiceSocket } from "./serviceMessage/MessageServiceSocket";
import { NotificationNewRegistro } from "./serviceRabbitMQ/NotificationAddRegistro";

export const sqlRepositorio = new SqlRepositorio();
export const notificationNewRegistro = new NotificationNewRegistro();
export const messageServiceSocket = new MessageServiceSocket();

export const notificacionRegistroCasoUso = new NotificacionRegistroCasoUso(notificationNewRegistro);
export const addRegistroCasoUso = new AddRegistroCasoUso(
    sqlRepositorio,
    notificacionRegistroCasoUso,
    messageServiceSocket
)
export const addRegistroController = new AddRegistroController(addRegistroCasoUso);



