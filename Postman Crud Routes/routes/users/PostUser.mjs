import React from 'react'

const PostUser = (req,res) => {
console.log("req",req.body);
res.send({status:200})

}

export default PostUser;
