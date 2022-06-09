module.exports.profile=function(req,res){
   return res.render('user_profile',{
    title:"User Profile"
});
};

module.exports.friends=function(req,res){
    return res.end('<h1>Friend List</h1>');
};