import {v4 as uuid} from "uuid";

let users = [];

export const getUsers = (req,res) => {
    
    const page = parseInt(req.query.page)|| 0;
    const limit =  parseInt(req.query.limit);
    console.log(typeof(limit));
    
     let books = []
     users.reverse();
     books = users.slice(page*limit,(page*limit)+limit);
   
     res.send(books);

    

}

export const createUser = (req,res) => {
    const user = req.body;

    users.push({...user , id:uuid()});
    res.send("added");
}

export const getUser = (req,res) => {
    const singleUser = users.filter((user) =>user.id === req.params.id);
    res.send(singleUser);
}

export const deleteUser = (req,res) => {
    users =  users.filter((user) =>user.id !== req.params.id);
    res.send("User deleted")
}

export const updateUser = (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.name = req.body.name;
    user.tagline = req.body.tagline;
    user.schedule = req.body.schedule;
    user.description = req.body.description;
    user.files = req.body.files;
    user.moderator = req.body.moderator;
    user.category = req.body.category;
    user.sub_category = req.body.sub_category;
    user.rigor_rank = req.body.rigor_rank;


   // user.contact = req.body.contact;
    res.send("done")
}


