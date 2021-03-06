exports.up = function(knex) {
 return knex.schema.createTable('posts', function(table){
   table.increments()
   table.integer('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable()
      .index();
   table.string('title')
   table.text('image')
   table.text('body')
   table.integer('votes')
   table.integer('comments');
   table.dateTime('created_at')
 })
}

exports.down = function(knex) {
 return knex.schema.dropTable('posts')
}
