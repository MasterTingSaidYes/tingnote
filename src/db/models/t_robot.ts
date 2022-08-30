import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_robotAttributes {
  id: number;
  name: string;
  min_money: number;
  desc: string;
  days: number;
  profit: number;
  price: number;
  status: number;
  level: number;
}

export type t_robotPk = "id";
export type t_robotId = t_robot[t_robotPk];
export type t_robotCreationAttributes = t_robotAttributes;

export class t_robot extends Model<t_robotAttributes, t_robotCreationAttributes> implements t_robotAttributes {
  id!: number;
  name!: string;
  min_money!: number;
  desc!: string;
  days!: number;
  profit!: number;
  price!: number;
  status!: number;
  level!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_robot {
    return t_robot.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    min_money: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profit: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 't_robot',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
