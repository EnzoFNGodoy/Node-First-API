`use strict`;

const mongoose = require(`mongoose`);
const Product = mongoose.model(`Product`);

exports.get = (req, res, next) => {
    Product
        .find({
            active: true
        }, `title price slug`)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400)(e)
        })
};

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true
        }, `title description price slug tags`)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400)(e)
        })
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    Product
        .findById(id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400)(e)
        })
};

exports.getByTag = (req, res, next) => {
    const tag = req.params.tag;
    Product
        .find({
            tags: tag,
            active: true
        }, `title description price slug tags`)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400)(e)
        })
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save().then(x => {
        res.status(201).send({
            message: "Produto cadastrado com sucesso."
        });
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao cadastrar o produto. ",
            data: e
        });
    });
};

exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            }
        }).then(x => {
            res.status(200).send({
                message: "Produto atualizado com sucesso"
            });
        }).catch(e => {
            res.status(400).send({
                message: "Falha ao atualizar o produto",
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    Product
        .findByIdAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: "Produto removido com sucesso"
            });
        }).catch(e => {
            res.status(400).send({
                message: "Falha ao remover o produto",
                data: e
            });
        });
};