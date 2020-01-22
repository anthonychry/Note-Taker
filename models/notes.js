module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    return Note;
}