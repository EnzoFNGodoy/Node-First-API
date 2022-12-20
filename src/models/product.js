'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'O título é obrigatório.'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório.'],
        trim: true,
        index: true,
        unique: [true, 'Já existe um slug cadastrado com esse valor.']
    },
    description: {
        type: String,
        required: [true, 'A descrição é obrigatória.'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'O preço é obrigatório.']
    },
    active: {
        type: Boolean,
        required: [true, 'O status é obrigatório.'],
        default: true
    },
    tags: [{
        type: String,
        required: [true, 'A tag é obrigatória.']
    }]
});

module.exports = mongoose.model('Product', schema);