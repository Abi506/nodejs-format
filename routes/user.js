const express=require('express')

const router=express.Router();

const {handleDeleteUserById,handleGetUserById,handleUpdateUserById,handleGetAllUsers,handleCreateuser}=require('../controllers/user')

router.route("/").post(handleCreateuser).get(handleGetAllUsers)
router.route("/:id").get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

module.exports=router