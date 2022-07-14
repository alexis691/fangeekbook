import { Sequelize, Model } from 'sequelize';
import { iFilmSeasonAttributes, iFilmSeasonInstances } from '../src/interfaces/iFilmSeason';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class FilmSeason extends Model<iFilmSeasonAttributes, iFilmSeasonInstances> implements iFilmSeasonAttributes {
    id!: number;
    filmId!: number;
    name!: string;
    description!: string;
    firstEmision!: Date;
    lastEmision!: Date;
    image!: string;
    

    static associate(models: any) {
      FilmSeason.belongsTo(models.Film, {foreignKey: {name: 'film_id', allowNull: false}})

      FilmSeason.hasMany(models.FilmSeasonEpisode, {foreignKey: {name: 'film_season_id', allowNull: false}})
    }
  }
  FilmSeason.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filmId: {
      type: DataTypes.INTEGER,
      field: 'film_id',
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },   
    firstEmision: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    lastEmision: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'FilmSeason',
    freezeTableName: true,
    tableName: 'film_season',
    underscored: true
  });
  return FilmSeason;
};
