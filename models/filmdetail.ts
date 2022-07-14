import { Sequelize, Model } from 'sequelize';
import { iFilmDetailAttributes, iFilmDetailInstances } from '../src/interfaces/iFilmDetail';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class FilmDetail extends Model<iFilmDetailAttributes, iFilmDetailInstances> implements iFilmDetailAttributes {
    id!: number;
    filmId!: number;
    totalSeasons!: number;
    totalEpisodes!: number;
    endDate!: Date;

    static associate(models: any) {
      FilmDetail.belongsTo(models.Film, {foreignKey: {name: 'film_id', allowNull: false}})
    }
  }
  FilmDetail.init({
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
    totalSeasons: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalEpisodes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'FilmDetail',
    freezeTableName: true,
    tableName: 'film_detail',
    underscored: true
  });
  return FilmDetail;
};
