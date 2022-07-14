import { Sequelize, Model } from 'sequelize';
import { iCatalogueAttributes, iCatalogueInstance } from '../src/interfaces/iCatalogue';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class FilmRating extends Model<iCatalogueAttributes, iCatalogueInstance> implements iCatalogueAttributes {
    id!: number;
    description!: string;
    status!: boolean;

    static associate(models: any) {
      FilmRating.hasMany(models.Film, {foreignKey: {name: 'rating_id', allowNull: false}})
    }
  }
  FilmRating.init({
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
    modelName: 'FilmRating',
    freezeTableName: true,
    tableName: 'film_rating',
    underscored: true
  });
  return FilmRating;
};
