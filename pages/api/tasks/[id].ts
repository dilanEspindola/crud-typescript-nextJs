import { NextApiRequest, NextApiResponse } from "next"
import Tasks from "../../../models/Tasks"
import { dbConnnect } from "../../../utils/db"
import { Task } from "../../../interfaces/task"

dbConnnect();


export default async function task(req: NextApiRequest, res: NextApiResponse) {    
    const { id } = req.query
    
    switch(req.method){
        case "GET":            
        try {
                const getTask = await Tasks.findById<Task>(id);
                if(!getTask) return res.status(404).json({msg: "Task does not exist"});                
                return res.status(200).json(getTask);
            } catch (error) {
                return res.status(500).json({msg: error})
            }
            break;
    }
}