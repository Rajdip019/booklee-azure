import connectionDB from "../../../database/connectionDB"
import Sellbook from "../../../database/models/sellbook"

connectionDB();

export default (req,res)=> {
  Sellbook.find().then(sellbooks=>{
    res.status(200).json(sellbooks)
  })
}

