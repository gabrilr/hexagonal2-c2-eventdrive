import { Request, Response } from "express";
import { AddRegistroCasoUso } from "../../Aplicacion/addRegistroCasoUso";

export class AddRegistroController{
    constructor(readonly addRegistroCasoUso:AddRegistroCasoUso){}

    async run(req:Request, res:Response){
        const data = req.body;
        console.log("log en el controller", data);

        try {
            const registro = await this.addRegistroCasoUso.run(
                data.noTarjeta
            );

            if(registro){
                res.status(201).send({
                    status:"success",
                    data:{
                        noTarjeta:registro?.noTarjeta
                    }
                });
            }else{
                res.status(204).send({
                    status:"error",
                    data:"Registro no agregado"
                })
            }
        } catch (error) {
            res.status(204).send({
                status:"error",
                data:"Ha ocurrido un error",
                message:error
            })
        }
        
    }
}