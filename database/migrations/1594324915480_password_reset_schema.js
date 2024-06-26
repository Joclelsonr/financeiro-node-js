'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasswordResetSchema extends Schema {
  up () {
    this.create('password_reset', (table) => {
      table.increments()
      table.string('email')
      table.string('token')
      table.timestamps()
    })
  }

  down () {
    this.drop('password_reset')
  }
}

module.exports = PasswordResetSchema
