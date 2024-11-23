import {updateUser} from "./../Services/user.service.js"


export const updateUserController = async(req, res)=>{
    try {
        const user = await updateUser(req.params.id, req.body)
        console.log("usuario atualizado")
        res.status(200).json({user, message:"Usuario atualizado com sucesso!"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const getUserController = async(req, res)=>{
  res.status(200).json("GET works")
}

export const deleteUserController = async(req, res)=>{
    res.status(200).json("DELETE works")
  }