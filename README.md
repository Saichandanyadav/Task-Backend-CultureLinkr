# To-Do Application Backend

## Overview

This is the backend for a simple To-Do application built using Node.js, Express, and MongoDB. The application allows users to manage tasks by adding, editing, deleting, and marking them as complete or incomplete.

## Features

- **Add new tasks** to the database
- **Edit existing tasks**
- **Delete tasks**
- **Mark tasks as complete or incomplete**
- **RESTful API endpoints for task management**

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing tasks
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **Postman**: Tool for testing API endpoints

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Saichandanyadav/Task-Backend-CultureLinkr.git
   cd <repository-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your MongoDB connection string:
   ```plaintext
   MONGO_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

4. **Connect to MongoDB**:
   Ensure you have a MongoDB database set up. You can use MongoDB Atlas or a local MongoDB instance.

## Usage

1. **Start the server**:
   ```bash
   npm start
   ```

2. **API Endpoints**:
   - **GET** `/api/tasks` - Retrieve all tasks
   - **POST** `/api/tasks` - Add a new task
   - **PUT** `/api/tasks/:id` - Edit an existing task (replace `:id` with task ID)
   - **DELETE** `/api/tasks/:id` - Delete a task (replace `:id` with task ID)

### Sample Requests

**Add a new task**:
```json
{
  "title": "Buy groceries"
}
```

**Edit a task**:
```json
{
  "title": "Buy groceries and cook dinner",
  "completed": true
}
```

**Delete a task**:  
Use the task ID in the URL, e.g., `/api/tasks/603d2f4c5e5f1a4e3f8b4567`.

## Testing with Postman

You can use Postman to test the API endpoints. Set the appropriate HTTP method and URL, and add headers and body as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to this project!

## Author

Your Name  
[Your LinkedIn Profile](https://www.linkedin.com/in/your-profile)  
[Your GitHub Profile](https://github.com/your-profile)

```

### Customization
- **Replace `<repository-url>`** and `<repository-name>` with your actual repository details.
- **Add your name and links** to your LinkedIn and GitHub profiles in the Author section.


