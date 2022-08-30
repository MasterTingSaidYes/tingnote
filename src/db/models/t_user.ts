import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_userAttributes {
  id: number;
  username: string;
  phone: string;
  balance: number;
  created_at?: Date;
  headphone: string;
  level: number;
  parent_id: number;
  verify_bank: number;
  share_code: string;
  exp: number;
  freeze: number;
  password: string;
}

export type t_userPk = "id";
export type t_userId = t_user[t_userPk];
export type t_userOptionalAttributes = "id" | "created_at" | "verify_bank" | "password";
export type t_userCreationAttributes = Optional<t_userAttributes, t_userOptionalAttributes>;

export class t_user extends Model<t_userAttributes, t_userCreationAttributes> implements t_userAttributes {
  id!: number;
  username!: string;
  phone!: string;
  balance!: number;
  created_at?: Date;
  headphone!: string;
  level!: number;
  parent_id!: number;
  verify_bank!: number;
  share_code!: string;
  exp!: number;
  freeze!: number;
  password!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_user {
    return t_user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    headphone: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    verify_bank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    share_code: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    exp: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    freeze: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 't_user',
    timestamps: true,
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
