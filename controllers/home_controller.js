module.exports.home=function(req,res){
    return res.end('<h1>Express is up for MySpace </h1>');
};

module.exports.logout=function(req,res){
    return res.end('<h1>Successfully Logged out!</h1>');
}