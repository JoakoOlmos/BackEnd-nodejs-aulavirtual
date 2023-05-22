const pool = require('../config/database');

function getUsers (){
    pool.query ('SELECT * FROM users',(err,result) => {
        if (err){
          console.log ('Hubo un error.')
        }else {
            console.log (result.rows) 
          return result.rows;
        }
      });
}
module.exports = getUsers;