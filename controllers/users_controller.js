const res = require("express/lib/response");

module.exports.profile=function(req,res){
   return res.render('user_profile',{
    title:"User Profile"
});
};

module.exports.SignUp=function(req,res){
    return res.render('user_SignUp',{
        title:"Sign Up Page"
    });
};

module.exports.SignIn=function(req,res){
    return res.render('user_SignIn',{
        title:"Sign In Page"
    });
};

// get the sign-up data
module.exports.create=function(req,res){
    //todo later
};

//sign in and create a session for a user
module.exports.createSession=function(req,res){
    //todo later
};


// module.exports.friends=function(req,res){
//     return res.end('<h1>Friend List</h1>');
// };