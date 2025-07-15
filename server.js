import express from 'express';
import connectDB  from './config/database.js';
// import userRouter from './routes/user.route.js';
import employeeRouter from './routes/employee.routes.js';
import earthRouter from './routes/earth.route.js';
import userRouter from './routes/user.route.js';

const app = express();
connectDB()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

const PORT = 3000;

//this is the setup for the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

// app.get('/',(req,res)=>{
//   res.send('I am your 1st response from the server');
// })

// app.get('/about',(req,res)=>{
//   res.send('I am your 2nd response from the server');
// })

app.use(express.json());
app.use('/api/employee', employeeRouter);
app.use('/api', earthRouter);
app.use('/api', userRouter);
app.use('/api/auth', earthRouter);




// mongodb+srv://sandesh:sandesh@details.l5htl1p.mongodb.net/?retryWrites=true&w=majority&appName=details