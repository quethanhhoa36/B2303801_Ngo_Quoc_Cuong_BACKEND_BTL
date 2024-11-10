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

}

exports.findOne = async (req,res,next)=>{
    try{
        const document =await Cart.find({userId: req.body.userId})
        return res.json(document);
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
    catch(erorr){
        console.log(error)
    }
}