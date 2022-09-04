const URL = "http://localhost:3001/connectionDB/addUser"

const addUser = ({ name, lastname }) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, lastname })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export default addUser