const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');


dotenv.config();


connectDB().then(() => {
  console.log('✅ MongoDB Connected successfully with the backend.');
}).catch((error) => {
  console.error('❌ MongoDB Connection failed:', error.message);
});


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
