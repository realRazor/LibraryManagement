"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY MANAGEMENT SYSTEM Project with Sequelize
------------------------------------------------------- */
const Book = require('../models/book.model');
module.exports = {
    list: async (req,res) => {
        const data = await Book.findAll();
        res.status(200).send({
            error : false,
            result : data
        })

    },
    create: async (req,res) => {
        
        const data = await Book.create(req.body);
        
        res.status(201).send({
            error : false,
            result : data.dataValues
        })
    },
    read: async (req,res) => {
        const id = req.params.id;
        const data = await Book.findByPk(id);

        res.status(200).send({
            error : false,
            result : data
        })
    },
    update: async (req,res) => {
        const sentData = req.body
        const query = {where : {id:req.params.id}}
        const data = Book.update(sentData,query);

        res.status(202).send({
            error : false,
            message : 'Updated',
            result : data,
            updatedData : await Book.findByPk(req.params.id)
        })
    },
    delete: async (req,res) => {
        // const query = {
        //     where : {id:req.params.id}
        // }
        const data = await Book.destroy({where : {id : req.params.id}});

        if(data > 0 ) {
            res.status(204).send({
                error : false,
                message : 'The deletion was performed successfully!'
            })
        }
        else{
            res.errorStatusCode = 404;
            throw new Error('Not Found')
        }
    }
}