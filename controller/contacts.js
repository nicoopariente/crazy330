const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db('nicolasproject').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
 
 if(ObjectId.isValid(req.params.id)){
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('nicolasproject')
    .collection('contacts')
    .find({ _id: userId });   
    
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      })
   
 } else {
  res.status(500).json('Some error occurred while finding the ID stated.');
}
  

};

const createSingle = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDb()
    .db('nicolasproject')
    .collection('contacts')
    .insertOne(contact);
    if (result.acknowledged) {
      res.status(201).json(result);
    } else {
      res.status(500).json(result.error || 'Some error occurred while creating the contact.');
    };
};


const updateSingle = async (req, res) => {
  if(ObjectId.isValid(req.params.id)){
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDb()
    .db('nicolasproject')
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);

    if (result.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(result.error || 'Some error occurred while updating the contact.');
    }}else {
      res.status(500).json('Some error occurred while finding the ID stated.');
    }
};

const deleteSingle = async (req, res) => {
  if(ObjectId.isValid(req.params.id)){
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('nicolasproject')
    .collection('contacts')
    .deleteOne({ _id: userId }, true);

    if (result.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(result.error || 'Some error occurred while removing the contact.');
    }}else {
      res.status(500).json('Some error occurred while finding the ID stated.');
    }
};

module.exports = { getAll, getSingle, createSingle, updateSingle, deleteSingle };