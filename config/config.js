require('dotenv').config();
var dialectOptions = {
    useUTC: false,
        dateStrings: true,
        typeCast: function (field, next) {
        if (field.type === 'DATETIME') {
            return field.string()
        }
        return next()
    },
};

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV,
    "password": process.env.DB_PASSWORD_DEV,
    "database": process.env.DB_NAME_DEV,
    "host": process.env.DB_HOSTNAME_DEV,
    "port": process.env.DB_PORT_DEV,
    "urlbase": process.env.DB_URLBASE_DEV,
    "dialect": "mysql"
  }
};