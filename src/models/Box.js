const mongoose = require('mongoose');

const Box = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        files:[ { type: mongoose.Schema.Types.ObjectId, ref: 'File'}]
    }, {
        timestamps: { createdAt: 'created_at', updateAt: 'update_at' }
    }
);

module.exports = mongoose.model('Box', Box);