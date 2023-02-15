const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup requerido"],
        minLength: [10, "Longitud de 10"]
    },

    punchline: {
        type: String,
        required: [true, "Setup is requerided"],
        minLength: [3, "Longitud de 3"]
    }},
    { timestamps: true }
)

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;