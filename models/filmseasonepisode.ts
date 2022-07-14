import { Sequelize, Model } from 'sequelize';
import { iFilmSeasonEpisodeAttributes, iFilmSeasonEpisodeInstances } from '../src/interfaces/iFilmSeasonEpisode';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class FilmSeasonEpisode extends Model<iFilmSeasonEpisodeAttributes, iFilmSeasonEpisodeInstances> implements iFilmSeasonEpisodeAttributes {
    id!: number;
    filmSeasonId!: number;
    name!: string;
    description!: string;
    runtime!: String;
    releaseDate!: Date;

    static associate(models: any) {
      FilmSeasonEpisode.belongsTo(models.FilmSeason, {foreignKey: {name: 'film_season_id', allowNull: false}})
    }
  }
  FilmSeasonEpisode.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    filmSeasonId: {
      type: DataTypes.INTEGER,
      field: 'film_season_id',
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    runtime: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FilmSeasonEpisode',
    freezeTableName: true,
    tableName: 'film_season_episode',
    underscored: true
  });
  return FilmSeasonEpisode;
};
