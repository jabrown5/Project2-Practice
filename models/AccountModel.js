
var db = require('./db'); // pulling in db.js
/* We set up our ORM (bookshelf.js) and pass it our database (knex.js) */
var bookshelf = require('bookshelf')(db);

// Model correlates to a row in the DB
// Collections correlate to tables in a DB
// Bookshelf uses both of these terms
var AccountModel = bookshelf.Model.extend({
    tableName: 'users_accounts'
});

module.exports = AccountModel ;


