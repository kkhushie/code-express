const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const userModel = require('./models/user.model');
const roleModel = require('./models/role.model');
const courseModel = require('./models/course.model')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/codexpress');
        console.log("DB connected!");
    } catch (err) {
        console.log(err);
        console.log("Connection failed");
    }
};

connectDB();

app.get("/", (req, res) => {
    res.send("Hey Khushi from Server!");
});

app.get("/users", async (req, res) => {
    try {
        let users = await userModel.find().populate('role'); res.send(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
});

app.post("/register", async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        console.log("Received role:", role);  // Log the role from frontend

        const roleDocument = await roleModel.findOne({ roleId: role });

        if (!roleDocument) {
            return res.status(400).json({ message: 'Role not found' });
        }

        let user = await userModel.create({
            username,
            email,
            password,
            role: roleDocument._id,
        });
        await user.save()
        console.log("Registration Successfull !", user);
        res.status(201).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Registration failed" });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {

        let user = await userModel.findOne({ username})
        if(!user){
            return res.status(404).json({ message: "User not found!" });
        }
        if (user.password === password) {
            console.log(user);
        }
        res.redirect('/')
    }
    catch (err) {
        console.log(err);
    }

})

app.get("/courses", async (req, res) => {
    try {
        const courses = await courseModel.find()
        res.send(courses);
    }
    catch (err) {
        console.log(err);
        
    }
})

app.get("/courses/:id" ,async (req,res) =>{
    const id = req.params.id;
    const course = await courseModel.findById(id)
    res.send(course)
})

app.listen(port, () => {
    console.log("Server is running at ", port);
});
