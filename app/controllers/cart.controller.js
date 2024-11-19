const ApiError = require('../api-error')
const Cart = require('../models/Cart');

exports.create = async(req,res,next) =>{
    try{
        const d = new Date();
    d.setDate(d.getDate() + 7);
    await Cart.create({
        userId: req.body.userId,
        items: req.body.items,
        duedate: d
    })
    .then((data)=>res.status(200).json(data))
    .catch((error)=> {
        return next(new ApiError(500,`${error.message}`));
    })
    }
    catch(error){
        console.log(error)
    }
}
exports.update = async (req,res,next) =>{
    try {
        await Cart.findOneAndUpdate({
            _id: req.params.id
        }, req.body);
        return res.send({ message: "Cart was updated successfully" });
    } catch (error) {
        return next(new ApiError(500, `Error updating user with id=${req.params.id}`));
    }

}

exports.findOne = async (req,res,next)=>{
    try{
        const { userId } = req.query; 
    const items = await Cart.find({ userId: userId }); 
    res.json(items);
    }
    catch(error){
        console.log(error);
    }
}

exports.findAll = async(req,res,next)=>{
    try{
        await Cart.find({})
            .then(data=>res.status(200).json(data))
    }
    catch(error){
        console.log(error)
    }
}

exports.getByPage= async(req,res,next) =>{
    try{
        const {page} = req.query
        Cart.find({})
            .skip((page-1)*5).limit(5)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    }
    catch(error){
        console.log(error)
    }
}

exports.getOne = async(req,res,next) =>{
    try{
        const document = await Cart.findById(req.params.id);
        if(!document){
            return next(new ApiError(404,"Cart not found!"));
        }
        return res.send(document);
    }
    catch (error){ 
        return next(new ApiError(500,`Error retrieving Cart with id=${req.params.id}`));
    }
}

exports.delete = async (req,res,next) =>{
    try{
        await Cart.findOneAndDelete({userId:req.params.id})
        return res.send({message:"Cart was deleted successfully"});
    }
    catch(error){
        return next(new ApiError(500,"An error occured while deleting cart"))
    }
}

exports.deleteId = async (req,res,next) =>{
    try{
        await Cart.deleteOne({_id:req.params.id})
        return res.send({message:"Cart was deleted successfully"});
    }
    catch(error){
        return next(new ApiError(500,"An error occured while deleting cart"))
    }
}