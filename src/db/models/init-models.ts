import type { Sequelize } from "sequelize";
import { t_admin_user as _t_admin_user } from "./t_admin_user";
import type { t_admin_userAttributes, t_admin_userCreationAttributes } from "./t_admin_user";
import { t_code_img as _t_code_img } from "./t_code_img";
import type { t_code_imgAttributes, t_code_imgCreationAttributes } from "./t_code_img";
import { t_robot as _t_robot } from "./t_robot";
import type { t_robotAttributes, t_robotCreationAttributes } from "./t_robot";
import { t_test as _t_test } from "./t_test";
import type { t_testAttributes, t_testCreationAttributes } from "./t_test";
import { t_user as _t_user } from "./t_user";
import type { t_userAttributes, t_userCreationAttributes } from "./t_user";

export {
  _t_admin_user as t_admin_user,
  _t_code_img as t_code_img,
  _t_robot as t_robot,
  _t_test as t_test,
  _t_user as t_user,
};

export type {
  t_admin_userAttributes,
  t_admin_userCreationAttributes,
  t_code_imgAttributes,
  t_code_imgCreationAttributes,
  t_robotAttributes,
  t_robotCreationAttributes,
  t_testAttributes,
  t_testCreationAttributes,
  t_userAttributes,
  t_userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const t_admin_user = _t_admin_user.initModel(sequelize);
  const t_code_img = _t_code_img.initModel(sequelize);
  const t_robot = _t_robot.initModel(sequelize);
  const t_test = _t_test.initModel(sequelize);
  const t_user = _t_user.initModel(sequelize);


  return {
    t_admin_user: t_admin_user,
    t_code_img: t_code_img,
    t_robot: t_robot,
    t_test: t_test,
    t_user: t_user,
  };
}
