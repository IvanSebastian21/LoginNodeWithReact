const URL = "http://localhost:3001/connectionDB/addUser"

const addUser = ({ name, lastname, email, rol, firmador }) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, lastname, email, rol, firmador })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export default addUser