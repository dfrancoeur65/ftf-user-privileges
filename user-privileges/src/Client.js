function getUsers() {
  return fetch(`http://localhost:3001/api/v1/users`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(printResults);
}

printResults = (users) => {
  users.forEach(logObjects);
}

function logObjects(element, array){
  console.log(element.id)
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

const Client = { search };
export default Client;
