const User = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: { type: DataTypes.STRING(20) },
      name: { type: DataTypes.STRING(20) },
      pw: { type: DataTypes.STRING(20) },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};

module.exports = User;
