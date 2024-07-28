import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Course } from "./models/courseModel.js";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('We balling fr')
});

app.post('/courses', async(request,response) => {
    try{
        if(
            !request.body.title ||
            !request.body.courseAuthor ||
            !request.body.courseYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, courseAuthor, courseYear',
            });
        }
        const newCourse = {
            title: request.body.title,
            courseAuthor: request.body.courseAuthor,
            courseYear: request.body.courseYear,
        };

        const course = await Course.create(newCourse);

        return response.status(201).send(course);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

app.get('/books', async(request, response) =>{
    try {
        const courses = await Course.find({});

        return response.status(200).json({
            count: courses.length,
            data: courses
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

app.get('/books/:id', async(request, response) =>{
    try {

        const { id } = request.params;

        const course = await Course.findById({id});

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the database');
        
        app.listen(PORT, () => {
            console.log('App is listening to port: ${PORT}');
        });
    })
    .catch((error) => {
        console.log(error);
    });
