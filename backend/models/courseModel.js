import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        courseAuthor:{
            type: String,
            required: true,
        },
        courseYear:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Course = mongoose.model('Cat',{name: courseSchema});