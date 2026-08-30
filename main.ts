import express from 'express';
import cors from 'cors';
import patientRouter from './router/users.js';

const app = express();


app.use(cors());
app.use(express.json());

//router for the patient route
app.use('/api/users', patientRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});