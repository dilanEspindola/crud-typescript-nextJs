import { Schema, model, models } from "mongoose"

interface TypesSchema {
    title: string,
    description: string
}

const taskSchema = new Schema<TypesSchema>({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false
})

export default models.Task || model("Task", taskSchema);