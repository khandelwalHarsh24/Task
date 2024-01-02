
### Task Manage API

   1) This is a Task Manager API that allows users to manage task.
   
   2) The application is built using Node.js, Express.js for creating a server and PostgreSQL for data storage.


### Database Schema

   ### Taskdata Table

   1) id (Primary Key,UUID): Unique Identifier for Task

   2) title (VARCHAR(255),NOT NULL): Task title given by user

   3) description (text) : Task description given by user

   4) status (VARCHAR, default Pending) : status check for completion of task


### API Endpoints

  ### Get All Task 

  1) Endpoint: api/v1/tasks
     Method: `GET`
     Response: 
        1. Status Code: 200 (OK)
        2. Body: List of tasks in JSON format

  ### Get Single Task
     
  1) Endpoint: api/v1/tasks/{id}
     Method: `GET`
     Response: 
        1. Status Code: 200 (OK)
        2. Body: Task details in JSON format

  ### Add Task

  1) Endpoint: api/v1/tasks
     Method: `POST`
     Request Body: JSON object representing the new task
     Response: 
        1. Status Code: 200 (OK)
        2. Body: Info about Task Created.

  ### Update Task

  1) Endpoint: api/v1/tasks/{id}
     Method: `PUT`
     Request Body: JSON object representing the updated task details.
     Response: 
        1. Status Code: 200 (OK)
        2. Body: Details of the updated task in JSON format.

  ### Delete Task

  1) Endpoint: api/v1/tasks/{id}
     Method: `DELETE`
     Response: 
        1. Status Code: 200 (OK)
        2. Body: Info about Task deleted.


### Database Connection

   1) For connecting postgresql in local computers , open the posgresql , enter the password and create a database and 
      in that database only, create a table.
   
   2) Replace values of `user,host,database,password,port` with the values provided in .env file 

   3) Also change the table name in queries folder with the table name provided by you.


