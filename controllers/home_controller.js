 module.exports.home=function(req,res){
     return res.render('home',{
         title:"Avanindra"
     });
 };

module.exports.logout=function(req,res){
    return res.end('<h1>Successfully Logged out!</h1>');
};