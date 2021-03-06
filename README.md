# ToDoList

A backend encorporated web application to save all your tasks.

* Created by - Kanchi Pardhi (Roll no. - 200001032)

## How To run on your Local system?

1. Install node.js server from <code>https://nodejs.org/en/download/</code> if you don,t have it on your system.

2. Clone this git repository, if you haven't done already.
   `git clone https://github.com/kanchi12P/ToDoList`

3. To install local npm dependencies run `npm install`.

4. Create database locally on mongoDB on your system or can host database on MongoDB Atlas. (database name - 'todo').

5. Start the server using `node .\app.js`.

6. Navigate your browser to <code> http://localhost:8000/ </code> to view the app.
 
## How can I try it?
The deployed application is here-<code> https://cryptic-ravine-98778.herokuapp.com/ </code>

## Technologies Used

* HTML
* CSS
* MongoDB
* Mongoose
* Node.js
* Express.js


## Features
The application have a user friendly interface with the following features -

1. It has user authentication system. Use can register using email address and password and then login using the same.

![Screenshot (2069)](https://user-images.githubusercontent.com/78892305/154084670-f9ac4cbd-dd80-4fa6-addc-612e3ea311ef.png)

![Screenshot (2070)](https://user-images.githubusercontent.com/78892305/154084675-ec1a4229-d70d-40fd-a458-8a2b66583abf.png)

2. It shows an error page when user enter wrong password, username or existing user try to register again.

![Screenshot (2072)](https://user-images.githubusercontent.com/78892305/154084678-760eef32-647a-44e6-a7b6-0900b4358c2a.png)

![Screenshot (2073)](https://user-images.githubusercontent.com/78892305/154084665-a0f55eca-c175-43c8-970f-86ca06142392.png)

3. User can add new items and delete the existing ones.

![Screenshot (2075)](https://user-images.githubusercontent.com/78892305/154084669-6ef8fb5b-5a75-44b9-9eb6-1f35147387f5.png)

4. Separate To Do List for each user is maintatined.
