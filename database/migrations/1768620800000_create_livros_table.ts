import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'livros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('titulo').notNullable()
      table.string('autor').nullable()
      table.string('genero').nullable()
      table.integer('ano_publicacao').nullable()
      table.enum('status_leitura', ['lido', 'lendo', 'quero ler']).notNullable().defaultTo('quero ler')
      table.text('observacoes').nullable()
      
      
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE') 

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}