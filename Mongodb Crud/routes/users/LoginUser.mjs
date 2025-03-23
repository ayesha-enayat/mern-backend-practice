import User from '../../models/user/index.mjs';
import bcrypt from 'bcrypt';
import 'dotenv/config'
import jwt from 'jsonwebtoken';

const loginUser = async (req, res) => {
    try {
        const { useremail, userpassword } = req.body;
        const user = await User.findOne({ useremail });
        if (user) {
            const matchPassword = await bcrypt.compare(userpassword, user.userpassword);
            if (matchPassword) {
                var token = jwt.sign({email:user.useremail}, process.env.JWT_SECRET);
                res.status(200).send({ message: 'User logged in successfully', user,token });
            } else {
                res.status(401).send({ status: 401, message: "Incorrect Password" })
            }
        } else {
            res.status(404).send({ status: 404, message: "User not found" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: 500, "err": err.message })
    }
}

export default loginUser;