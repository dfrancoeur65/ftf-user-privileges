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
<code>
  cd [cloned directory] //this is api-rails-app
</code>
<p>
<code>
  bundle install
</code>
</p>
<code>
cd user-privileges \n //this is the sub directory with the react app
npm install
</code>
</p>


  now that you have everything installed, let's seed the db
  cd <<directory>> //make sure you have rails installed
  rails db:create
  
  rails db:migrate
  
  rails db:seed 
  
  Uses Faker gem to generate fake user data
  
  rail s -p 3000//it needs to be running on port 3000 
                //because this is where the client app is directing it's api requests
  
  cd user-privileges
  
  npm start //it will default to 3001 and open web browser
  
  //navigate to http://localhost:3001 to see the front end react app

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
