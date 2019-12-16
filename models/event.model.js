const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EventSchema = Schema(
    {
        name : {type: String, require: true, max: 100},
        price : {type: String, require: true}
    }
);

module.exports = mongoose.model("Event", EventSchema);