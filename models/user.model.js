const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = Schema(
    {
        name : {type: String, require: true, max: 100},
        phone : {type: String, require: true, max: 10},
        email: {type: String, require: true},
        events: [{type: Schema.Types.ObjectId, require: false}]
    }
);

module.exports = mongoose.model("User", UserSchema);