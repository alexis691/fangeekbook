import { Sequelize, Model } from 'sequelize';
import { iCelebrityAttributes, iCelebrityInstances } from '../src/interfaces/Icelebrity';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Celebrity extends Model<iCelebrityAttributes, iCelebrityInstances> implements iCelebrityAttributes {
    id!: number;
    birthCountry!: number;
    fullName!: string;
    nickName!: string;
    birthPlace!: string;
    bio!: string;
    gender!: boolean;
    status!: boolean;

    static associate(models: any) {
      Celebrity.belongsTo(models.Country, {foreignKey: {name: 'birth_country', allowNull: false}})
    }
  }
  Celebrity.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    birthCountry: {
      type: DataTypes.INTEGER,
      field: 'birth_country',
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
    birthPlace: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Celebrity',
    freezeTableName: true,
    tableName: 'celebrity',
    underscored: true
  });
  return Celebrity;
};
