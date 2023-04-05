var express = require("express");
var router = express.Router();

const { db } = require("../mongo");

// code below gets all items
router.get('/all', async function (req, res, next) {
    try {
        const item = await db().collection('items').find({}).toArray();
        res.json({
            success: true,
            item: item
        });
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            error: err.toString()
        })
    }
});

// code below gets one game according to the title being input in the params
router.get('/get-one/:itemTitleToGet', async function (req, res, next) {
    try {
        const itemTitle = req.params.itemTitleToGet

        const itemPost = await db().collection("items").findOne({
            title: itemTitle
        })
        res.json({
            success: true,
            post: itemPost
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            error: err.toString()
        })
    }
})

module.exports = router;