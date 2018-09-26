
const USER_URL = 'api/v1/users';
const INVESTMENT_URL = 'api/v1/investments';
const OFFERINGS_URL = 'api/v1/offerings';
function getUsers(success) {
  return fetch(USER_URL, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function createInvestment(data){
  return fetch(INVESTMENT_URL,{
    method:"POST",
    headers:{
      "Content-Type":"application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  }).then(checkStatus)
  .then(parseJSON)
}

function getInvestments(success){
  return fetch(INVESTMENT_URL,{
    accept:'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(success)
}

function addUser(data){
  return fetch(USER_URL,{
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  }).then(checkStatus)
    .then(parseJSON)
}

function getOfferings(success){
  return fetch(OFFERINGS_URL,{
    accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  .then(success)
}

function updateUser(id,data) {

  return fetch(`${USER_URL}/${id}`, {
    method: "PUT", //
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(response => response.json()); // parses response to JSON
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = {
  createInvestment,
  getUsers,
  updateUser,
  addUser,
  getOfferings,
  getInvestments,
  };
export default Client;
