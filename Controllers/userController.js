

const User= require('../Models/userModel')

exports.register = async(req,res)=>{

    const {username,email,password} = req.body

  try {
    
    const existingUser = await User.findOne({email})
    if(existingUser){

      res.status(406).json("email already exist")
    }
    else{
        
        const result = new User({username,email,password})
        result.save()
        res.status(200).json(result)

    }
  } catch(error) {
    res.status(500).json("Register failed")
  }

    
}

exports.login= async(req,res)=>{

    const {username,email,password}=req.body

    const result = await User.findOne({email,password})

    try{
        if(result){

            res.status(200).json(result)
    
        }
        else{
    
            res.status(401).json("Invalid username or password")
        }
    }
    catch(err){
        res.status(500).json("login failed" +err)
    }
}