import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue';
import { iImage } from '../src/interfaces/iImage';

export interface iDistributorAttributes extends iCatalogueAttributes, iImage {}
export interface iDistributorInstance extends iCatalogueInstance, iImage {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Distributor extends Model<iDistributorAttributes, iDistributorInstance> implements iDistributorAttributes {
    id!: number;
    description!: string;
    urlImage!: string;
    status!: boolean;

    static associate(models: any) {
      Distributor.hasMany(models.Film, {foreignKey: {name: 'distributor_id', allowNull: false}})
    }
  }
  Distributor.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    urlImage:{
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'url_image'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Distributor',
    freezeTableName: true,
    tableName: 'distributor',
    underscored: true
  });
  return Distributor;
};
