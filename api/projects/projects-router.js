// Write your "projects" router here!
const express = require("express");

const db = require("./projects-model")

const router = express.Router();

router.get("/", (req,res) => {
    db.get(req.query.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"Could not get project"})
    })
});

router.get("/:id", (req,res) => {
    db.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"Could not get id project"})
    })
})

router.post("/", (req,res) => {
    db.insert(req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Project was not created"})
    })
});

router.put("/:id", (req,res) => {
    db.update(req.params.id , req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message:"Project was not updated"})
    })
});

router.delete("/" , (req,res) => {
    db.delete(req.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Project was not deleted"})
    })
})

router.get("/:id/actions", (req,res) => {
    db.getProjectActions(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "Did not retrieve"})
    })
});

module.exports = router;