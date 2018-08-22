
const URL = 'api/v1/users';
function getUsers(success) {
  return fetch(URL, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
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
function updateUser(id,data={first_name:"Daniel",last_name:"Francoeur"}) {

    return fetch(`${URL}/${id}`, {
        method: "PUT", //
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

function parseJSON(response) {
  return response.json();
}

const Client = { getUsers,updateUser};
export default Client;
