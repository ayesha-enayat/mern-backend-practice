import User from '../../models/user/index.mjs';

const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        //find ( match query )
        // const users = await User.find({
        //     username:"ayeshaenayat"
        // });
        res.status(200).send({status:200,"userdata":users})
    }
    catch (err) {
        res.status(500).send({status:500,"err":err.message})
    }
}

export default getUsers;