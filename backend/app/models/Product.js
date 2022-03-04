module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "categories",
                key: "id"
            },
            onDelete: "CASCADE"
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.STRING
        },
        mrp:{
            type: Sequelize.DOUBLE
        },
        salePrice:{
            type: Sequelize.DOUBLE
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    return Product;
};



