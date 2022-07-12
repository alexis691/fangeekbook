import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Language extends Model<iCatalogueAttributes, iCatalogueInstance> implements iCatalogueAttributes {
    id!: number;
    description!: string;
    status!: boolean;

    static associate(models: any) {
      // define association here
    }
  }
  Language.init({
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
    modelName: 'Language',
    freezeTableName: true,
    tableName: 'language',
    underscored: true
  });
  return Language;
};
