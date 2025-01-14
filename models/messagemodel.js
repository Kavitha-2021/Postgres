const { Model } = require('objection');
const knex = require('../dbConfig/knex')

Model.knex(knex)

class Message extends Model {
    static get tableName() {
        return 'messages';
    }

    static get relationMappings() {
        const User = require('./usermodel')
        return {
            writer: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'messages.user_id',
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = Message;