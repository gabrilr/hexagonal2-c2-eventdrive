import { DataType, Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Registro",
    timestamps:false
})
class RegistroModel extends Model{
    @Column({
        type:DataType.STRING,
        primaryKey:true
    })
    public noTarjeta!:string;
}

export default RegistroModel;