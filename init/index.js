const mongoose=require('mongoose')
const initData=require(".//data.js");
const listing=require('../models/listing');

const MONGO_URL="mongodb://127.0.0.1:27017/Wonderlust";

main()
.then(()=>{
    console.log("connect to DB")
})
.catch((err)=>{
    console.log(err)
})


async function main(){
    await mongoose.connect(MONGO_URL)
}

const initDB=async()=>{
    await listing.deleteMany({}); 
    initData.data = initData.data.map((obj)=>({...obj,owner: "660d6313d821ac9539a56b39"}))
    await listing.insertMany(initData.data)
    console.log("dats was initalized")
};
initDB();