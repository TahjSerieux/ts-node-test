const getPosts = (req, res) =>{
    // const userId = req.params.id
    // console.log(userId)
    console.log(req.params)
    console.log(req.query)
    res.status(200).json({mssg:'Successfully Called'})


}


module.exports = {getPosts}