var db = require('../utils/db');

class loginBb extends db{
    static getInstance()
    {
        if(!loginBb.instance)
        {
            loginBb.instance = new loginBb();
            return loginBb.instance;
        }
        else
        {
            return loginBb.instance;
        }
    }

    constructor()
    {
        super();
    }
}

global.loginBb = loginBb.getInstance();
module.exports = loginBb;
