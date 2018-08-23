
const URL = 'api/v1/users';
function getUsers(success) {
  return fetch(URL, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function addUser(data){
  return fetch(URL,{
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  }).then(checkStatus)
    .then(parseJSON)
}

function updateUser(id,data) {

  return fetch(`${URL}/${id}`, {
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

const Client = { getUsers,updateUser,addUser};
export default Client;
