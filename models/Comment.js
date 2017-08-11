module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        CommentText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Comment.associate = function (models) {
        Comment.belongsTo(models.User,
            {
                foreignKey:
                { allowNull: false }
            });
        Comment.belongsTo(models.Post,
            {
                foreignKey:
                { allowNull: false }
            });
    };

    return Comment;
};