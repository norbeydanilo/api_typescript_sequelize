import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "todos",
})
export class Todos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  // (!) signo de exclamación se utiliza para la aserción de no nulidad. Esto le dice a TypeScript 
  // que esta propiedad siempre tendrá un valor y nunca será null o undefined

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
}
