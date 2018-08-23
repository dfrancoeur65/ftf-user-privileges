# README

<h1> FTF User Privileges</h1>
<p> App allows for a user:<p> 
  <ol>
    <li>to edit the roles for users</li>
    <li>to create a new user with pre-set roles</li>
   </ol>
<h3>This app contains an api-only rails app and a front-end client written in React.</h3>


<h4>To get started, clone the repo and run the following commands:</h4>

<p>
 <p>
<code>
  cd [cloned directory] //this is api-rails-app
</code>
</p>
<p>
<code>
  bundle install
</code>
</p>
<p>
<code>
cd user-privileges //this is the sub directory with the react app
  </code>
  </p>
  <p>
  <code>
npm install
</code>
</p>

<h4>now that you have everything installed, let's seed the db</h4>
<p>
  <code>
  cd [directory] 
  </code>
</p>
<p>
  <code>
   rails db:create
  </code>
</p>
<p>
  <code>
rails db:migrate
  </code>
</p>
<p>
  <code>
 rails db:seed //uses Faker gem to generate some user data
  </code>
</p>
 <h4>Now let's start it up</h4>

<p>
  Make sure you run this command from the top directory
  <code>
rail s -p 3000//it needs to be running on port 3000 
  </code>
</p>
<p>
  <code>
cd user-privileges
  </code>
</p>
  <code>
  npm start //it will default to 3001 and open web browser
  </code>       

navigate to http://localhost:3001 to see the front end react app

<p>This project makes use of the following: \n
  
(The REACT app is found in */user-privileges*)
Components:
  App
  UserList
  List
  UserForm
  Form
Reducers: 
  ColumnsReducer,
  usersReducer
Actions:
  addUser,
  updateUser,
  setInitialUser

Fetch for API Calls to rails api (see /user-privileges/src/components/Client.js)
Redux for managing state in the app 
Things you may want to cover:
</p>
