 module.exports.home=function(req,res){
    //console.log(req.cookies);
    //res.cookie('user_id',25);
    return res.render('home',{
         title:"MySpace"
     });
 };

module.exports.logout=function(req,res){
    return res.end('<h1>Successfully Logged out!</h1>');
};