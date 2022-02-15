
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { redirect, render } = require("express/lib/response");

const app = express();
// app.use(express.static("public"));
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/todo", {useNewUrlParser: true});

const itemsSchema = {
  name: String,
  username: String,
  
};

const Item = mongoose.model("Item", itemsSchema);

const userSchema = ({
  email: String,
  password: String
});
const listSchema = {
  name: String,
  items: [itemsSchema]
};
const List = mongoose.model("List", listSchema);
const User = new mongoose.model("User", userSchema);

const item = new Item({
  name: "Welcome !!"
});

const defaultItems = [item];
const list1 = new List({
  name: "try",
  items: defaultItems
});
//list1.save();

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.post("/register", function(req, res){
  const username=req.body.username;
  User.findOne({email: username}, function(err, foundUser){
if(err){
  res.render("err",{error:"ERROR"});
}
if(!foundUser){
    const newUser =  new User({
    email: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err){
    if (err) {
      console.log(err);
    } else {
      res.render("login");
    }
  });
}else{
  res.render("err",{error:"This email ID is already registerd."});
}
});
});

app.post("/login", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email: username}, function(err, foundUser){
    if (err) {
      res.render("err",{error:"ERROR"});
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          session =true;
          List.findOne({name:username}, function(err, foundList){
            if (!err){
              if (!foundList){
                const list = new List({
                  name: username,
                  items: defaultItems
                });
                list.save();
               res.render("list", {listTitle: username, listItems: defaultItems});
              } else {
                
                console.log(foundList);
                res.render("list", {listTitle: foundList.name, listItems: foundList.items});
              }
          }else{
            res.render("err",{error:"ERROR"});
          }
          });
        }else{
          res.render("err",{error:"wrong password"});
        }
      }else{
        res.render("err",{error:"User not found"});
      }
    }
  });
});



app.post("/list", function(req, res){
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

    List.findOne({name: listName}, function(err, foundList){
      if(err){
        res.render("err",{error:"ERROR"});
      }else{
      foundList.items.push(item);
      foundList.save();
      res.render("list", {listTitle: foundList.name, listItems: foundList.items});
      }
    });
  

});

app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if (!err){
        List.findOne({name: listName}, function(err, foundList){
          res.render("list", {listTitle: foundList.name, listItems: foundList.items});
        });
      }else{
        res.render("err",{error:"ERROR"});
      }
    });
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function() {
  console.log(port);
  console.log("Server started");
});
