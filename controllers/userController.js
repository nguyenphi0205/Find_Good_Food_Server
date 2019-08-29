let UserServices = require('../services/UserServices')

module.exports = {
    getUserList() {
        return UserServices.module.getUserList();
    },
};
