import mongoose from "mongoose";

const vocabSchema = new mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
});

const Vocab = mongoose.models.Vocab || mongoose.model("Vocab", vocabSchema);

export default Vocab;
