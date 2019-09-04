let UserServices = require('../services/UserServices')

module.exports = {
    getUserList() {
        return UserServices.module.getUserList();
    },
    createuser(req, res) {
        return UserServices.module.createUser(req, res);
    }
};
