import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue';
import { iImage } from '../src/interfaces/iImage';

export interface iDistribuitorAttributes extends iCatalogueAttributes, iImage {}
export interface iDistribuitorInstance extends iCatalogueInstance, iImage {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Distribuitor extends Model<iDistribuitorAttributes, iDistribuitorInstance> implements iDistribuitorAttributes {
    id!: number;
    description!: string;
    urlImage!: string;
    status!: boolean;

    static associate(models: any) {
      // define association here
    }
  }
  Distribuitor.init({
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
    modelName: 'Distribuitor',
    freezeTableName: true,
    tableName: 'distribuitor',
    underscored: true
  });
  return Distribuitor;
};
