const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../backend/models/user');
const secretKey = 'my_secret_key_2023$#@!';
const getOneUser=require('./controller');
function generateToken(user) {
    const expire = 60 * 60 * 24;
    return jwt.sign({ user }, secretKey, { expiresIn: expire });
}

const signUpUser = async (req, res) => {
    const { username, email, image,password,role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            username,
            email,
            image,
            password: hashedPassword,
            role
        };
            // await User.create(newUser);
        const token = generateToken({ user: newUser });

        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        console.error('Error during user signup:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const id = req.params.id;
//         const user = await controller.getOneUser({ where: { email: email ,id:id} });

//         if (user) {
//             const isPasswordValid = await bcrypt.compare(password, user.Password);
//             if (isPasswordValid) {
//                 const token = generateToken({ user });
//                 return res.status(200).json({ message: 'Login successful', token,user });
//             } else {
//                 return res.status(401).json({ error: 'Invalid password' });
//             }
//         } else {
//             return res.status(404).json({ error: 'User not found' });
//         }
//     } catch (err) {
//         console.error('Internal error during login:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };
const login=async(req,res)=>{
    const{email,password}= req.body
    try{
        getOneUser(email)
        .then(async(res)=>{
            if(!res){
                try{
                    const check=await bcrypt.compare(password,res.password)
                    if(check){
                        const token =jwt.sign({email:email},secretKey)
                        res.status(200).json({ message: 'Login successful', token })
                    }
                    else{
                        return res.status(401).json({ error: 'Invalid password' })
                    }
                }
                catch(err){
                    res.status(500).json(err)
            }
            
            }else {
                res.status(404).json({ error: 'User not found' });
            }
        })
    }
    catch(err){
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = { signUpUser, login };
