import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    preco: { type: Number },
}, { versionKey: false });

// Aqui abaixo estou passando a collection e o schema que eu criei acima
const produto = mongoose.model('produtos', produtoSchema);

export default produto;