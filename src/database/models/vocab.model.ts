import mongoose from "mongoose";

const vocabSchema = new mongoose.Schema({
    word: {type: String, required:true},
    definition: {type: String, required:true},
})

// Safety check (prevents re-compilation errors) || Core functionality (creates the model)
const Vocab = mongoose.models.Vocab || mongoose.model("Vocab", vocabSchema);

export default Vocab;