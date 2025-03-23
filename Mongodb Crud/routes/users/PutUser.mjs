import User from '../../models/user/index.mjs';

const putUser= async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findByIdAndUpdate(id,req.body);
        res.status(200).send({status:200,message:"user updated"})
    }
    catch(err){
        res.status(500).send({status:500,err:err.message})
    }
}


export default putUser;