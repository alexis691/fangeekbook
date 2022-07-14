import { Sequelize, Model } from 'sequelize';
import { iUserAttributes, iUserInstances } from '../src/interfaces/iUser';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class User extends Model<iUserAttributes, iUserInstances> implements iUserAttributes {
    id!: number;
    userType!: number;
    fullName!: string;
    nickName!: string ;
    email!: string;
    picture!: string;
    hash!: string;
    salt!: string;
    status!: boolean;
    
    static associate(models: any) {
      User.belongsTo(models.UserType, {foreignKey: {name: 'user_type', allowNull: false}})
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userType: {
      type: DataTypes.INTEGER,
      field: 'user_type',
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nickName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    tableName: 'user',
    underscored: true
  });
  return User;
};
