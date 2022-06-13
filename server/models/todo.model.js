const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min:3,
        max:15
    },
    description: {
        type: String,
        required: true,
        min: 3, 
        max: 50
    }
});

module.exports = mongoose.model("Todo", listSchema);

//bydefault mongoose will save "Todo" as "todos" in database.