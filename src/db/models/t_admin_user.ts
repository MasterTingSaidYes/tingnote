import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_admin_userAttributes {
  id: string;
  account: string;
  password: string;
  create_time?: Date;
  avatar?: string;
  nick_name: string;
  role: number;
}

export type t_admin_userPk = "id";
export type t_admin_userId = t_admin_user[t_admin_userPk];
export type t_admin_userOptionalAttributes = "create_time" | "avatar" | "role";
export type t_admin_userCreationAttributes = Optional<t_admin_userAttributes, t_admin_userOptionalAttributes>;

export class t_admin_user extends Model<t_admin_userAttributes, t_admin_userCreationAttributes> implements t_admin_userAttributes {
  id!: string;
  account!: string;
  password!: string;
  create_time?: Date;
  avatar?: string;
  nick_name!: string;
  role!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_admin_user {
    return t_admin_user.init({
    id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    account: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "账号"
    },
    password: {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "密码"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "头像"
    },
    nick_name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "名称"
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      comment: "1 = 超级管理员 \r\n2 = 管理员\r\n4 = 普通用户 \r\n8 = 客服人员"
    }
  }, {
    sequelize,
    tableName: 't_admin_user',
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
