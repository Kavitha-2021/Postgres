const { Model } = require('objection');
const knex = require('../dbConfig/knex')

Model.knex(knex)

class User extends Model {
    static get tableName() {
        return 'users';
    } 

    static get relationMappings() {
        const Message = require('./messagemodel')
        return {
            messages: {
                relation: Model.HasManyRelation,
                modelClass: Message,
                join: {
                    from: 'users.id',
                    to: 'messages.user_id'
                }
            }
        }
    }
}

module.exports = User;