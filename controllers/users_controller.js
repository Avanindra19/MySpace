const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const User=require('../models/user');

module.exports.profile=function(req,res){
   return res.render('user_profile',{
    title:"User Profile"
});
};

module.exports.SignUp=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_SignUp',{
        title:"Sign Up Page"
    });
};

module.exports.SignIn=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_SignIn',{
        title:"Sign In Page"
    });
};

// get the sign-up data
module.exports.create=function(req,res){
    // check whether pwd and confifrm pwd are equal or not 
    if(req.body.pwd!=req.body.pwd_con){
        console.log('password is not matching try again!')
        return res.redirect('back');
    }

    //check whether the user email id is unique
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in signing up");
            return;
        }
        if (!user){
            //create user if user not present 
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while signing up',err);
                    return
                };
                return res.redirect('/users/sign-in');
            });    
        }else{
            console.log('user already present');
            return res.redirect('back');
        }

    });
};

//sign in and create a session for a user
module.exports.createSession=function(req,res){
    return res.redirect('/');
};

module.exports.destroySession=function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}


// module.exports.friends=function(req,res){
//     return res.end('<h1>Friend List</h1>');
// };