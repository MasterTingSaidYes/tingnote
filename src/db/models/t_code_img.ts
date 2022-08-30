import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_code_imgAttributes {
  key: string;
  code: string;
}

export type t_code_imgPk = "key" | "code";
export type t_code_imgId = t_code_img[t_code_imgPk];
export type t_code_imgCreationAttributes = t_code_imgAttributes;

export class t_code_img extends Model<t_code_imgAttributes, t_code_imgCreationAttributes> implements t_code_imgAttributes {
  key!: string;
  code!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_code_img {
    return t_code_img.init({
    key: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 't_code_img',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key" },
          { name: "code" },
        ]
      },
    ]
  });
  }
}
