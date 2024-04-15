const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,validateListing, isOwner}=require("../middleware.js");
const listingController=require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage })




// index route
router.get("/", wrapAsync(listingController.index));
// new route
router.get("/new",isLoggedIn, listingController.renderNewForm);

// show route
router.get("/:id", wrapAsync(listingController.showListing)
);

// create route
router.post("/",isLoggedIn,validateListing,upload.single('listing[image]'), wrapAsync (listingController.createListing)
);
// router.post("/",upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
// })
// / edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm)
);

// update route
router.put("/:id",isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing)
);
// delete route

router.delete("/:id",isLoggedIn ,isOwner, wrapAsync(listingController.destroyListing)
);
// search route
router.post("/search",wrapAsync(listingController.searchCountry)
);


module.exports=router;