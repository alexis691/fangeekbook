import { Sequelize, Model } from 'sequelize';
import { iStaffAttributes, iStaffInstances } from '../src/interfaces/iStaff';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Staff extends Model<iStaffAttributes, iStaffInstances> implements iStaffAttributes {
    id!: number;
    staffType!: number;
    name!: string;
    birthDate!: Date;
    gender!: boolean;
    bio!: string;
    status!: boolean;

    static associate(models: any) {
      Staff.belongsTo(models.StaffType, {foreignKey: {name: 'staff_type', allowNull: false}})
    }
  }
  Staff.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    staffType: {
      type: DataTypes.INTEGER,
      field: 'staff_type',
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Staff',
    freezeTableName: true,
    tableName: 'staff',
    underscored: true
  });
  return Staff;
};
