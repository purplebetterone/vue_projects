const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', async (req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//add Posts
router.post('/',async (req, res) =>{
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text:req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//delete Posts
router.delete('/:id', async(req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
});

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://andrew:qiyamat67@ds147228.mlab.com:47228/traversry_vue_tutorial_1', {
        useNewUrlParser:true
    });

    return client.db('traversry_vue_tutorial_1').collection('posts');
}


module.exports = router;