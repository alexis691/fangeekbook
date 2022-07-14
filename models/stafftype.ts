import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class StaffType extends Model<iCatalogueAttributes, iCatalogueInstance> implements iCatalogueAttributes {
    id!: number;
    description!: string;
    status!: boolean;

    static associate(models: any) {
      StaffType.hasMany(models.Staff, {foreignKey: {name: 'staff_type', allowNull: false}})
    }
  }
  StaffType.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'StaffType',
    freezeTableName: true,
    tableName: 'staff_type',
    underscored: true
  });
  return StaffType;
};
