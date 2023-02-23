const { Schema, model } = require('mongoose');

const Tutorial = Schema(
    {
        title: String,
        description: String,
        published: Boolean
    },
    { timestamps: true }
);

Tutorial.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('tutorial', Tutorial);