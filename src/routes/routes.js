const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
const eventController = require("../controllers/eventController")
const auth = require("../middleware/middleWare")


//Test Api
router.get('test-me', function(req,res){
    res.send("hello from get api")
})

// CreateUser 
router.post('/register', userController.registerUser)                                     
// loginUser
router.post('/login', userController.loginUser)                                            
// logout user
router.get("/logout",auth.authentication,userController.userLogout)   
// update password                      
router.put("/newPassword/:userId",auth.authentication,userController.updatePassword)    
// reset password    
router.get("/resetPasswrod/:userId",auth.authentication,userController.getPassword)         
// create events
router.post('/events', eventController.eventController)                                   
// get userid with events
router.get('/events/:userId',auth.authentication, eventController.eventController)            
// get events with query params
router.get('/eventsByQuery',auth.authentication,eventController.eventController)              
 // update events with event id 

router.put('/events/:eventId',auth.authentication, eventController.eventController)      





module.exports = router