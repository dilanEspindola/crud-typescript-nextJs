import { NextApiRequest, NextApiResponse } from "next"
// DB connection
import { dbConnnect } from "../../../utils/db"
// DB model
import Tasks from "../../../models/Tasks"
// interface
import { Task } from "../../../interfaces/task"

dbConnnect();

export default async function tasks(req: NextApiRequest, res: NextApiResponse)  {
    const { method, body } = req;
    switch(method) {
        case "GET":
            try {
                const tasks: Task[] = await Tasks.find()                
                return res.status(200).json(tasks);   
            } catch (error) {
                return res.status(400).json({message: error})
            }
            break;            
        
        case "POST":
            const { title, description } = body as Task
            try {
                const createTask = new Tasks<Task>({
                    title,
                    description
                })
                const saveTask = await createTask.save()
                return res.json({msg: 'task saved', saveTask})   
            } catch (error) {
                return res.status(400).json({message: error})
            }
            break;
    }
}