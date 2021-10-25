const Post = require("../../models/Post.Schema");



exports.getPost = async(req,res)=>{
    try {
    
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.size) || 9;
        const skip = (page - 1 ) * limit;
        const data = await Post.find({}).skip(skip).limit(limit);
        const total = await Post.countDocuments();
        const pages = Math.ceil(total / limit)
    

        res.status(200).json({message:"Done",data , pages,page,limit})
    } catch (error) {
        res.status(500).json({message:"error",error})
    }
};



