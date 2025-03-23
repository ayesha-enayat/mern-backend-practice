import 'dotenv/config'
import jwt from 'jsonwebtoken';



const tokenVerification = (req, res, next) => {
    // console.log(req.headers.authorization);
    try {
        if (req.headers?.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            // console.log("Token", token);
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded", decoded);
            if (decoded) {
                next()
            }
            else {
                res.status(403).send({ status: 403, message: "Unauthorized" })
            }
        }
        else {
            res.status(403).send({ status: 403, message: "Token not provided" })
        }
    } catch (err) {
       res.send({err: err})
    }

}

export default tokenVerification;