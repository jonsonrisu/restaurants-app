
module.exports = (sequelize, Sequelize) => {
    const Services = sequelize.define("services", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.STRING
        },
    });
    return Services;
};