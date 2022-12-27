const User= require("../models/userModel");
const bcrypt = require ("bcrypt");

exports.registerUsers = async(req,res)=> {
    try{
        const checkemail = await User.findOne({email:req.body.email});
        if(checkemail){
            res.status(409).json({message: "User already exists"});

        }
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(salt,req.body.password);

        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            password: hashedPassword,
            country: req.body.country,
            city: req.body.city,
            address:req.body.address,
            phoneNumber:req.body.phoneNumber,
            zipCode:req.body.zipCode


        });
        res.status(201).json({message: "user created", data: newUser});
    }
    catch(err)
    {
        console.log(err);
    }
}