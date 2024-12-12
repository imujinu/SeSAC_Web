const UserModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      userid: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      hash: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      salt: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};

module.exports = UserModel;
