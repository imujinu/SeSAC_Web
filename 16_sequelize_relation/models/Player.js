const PlayerModel = (sequelize, Datatypes) => {
  const game = sequelize.define(
    "player",
    // fk 설정은 models/index.js에서 설정
    {
      player_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Datatypes.STRING(63),
        allowNull: false,
      },
      age: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return game;
};

module.exports = PlayerModel;
