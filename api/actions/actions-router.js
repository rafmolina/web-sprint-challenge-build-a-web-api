// Write your "actions" router here!
const express = require("express");

const db = require("./actions-model");

const router = express.Router();

router.get("/", (req,res) => {
    db.get(req.id)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "error retrieving action"})
    })
});

router.get("/:id", (req,res) =>{
    db.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"errror retrieving id action"})
    })
});

router.post("/", (req,res) => {
    db.insert(req.action)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Action was not created"})
    })
});

router.put("/:id", (req,res) => {
    db.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"Action was not updated"})
    })
});

router.delete("/:id", (req,res) => {
    db.remove(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"Action was not deleted"})
    })
});

module.exports = router;