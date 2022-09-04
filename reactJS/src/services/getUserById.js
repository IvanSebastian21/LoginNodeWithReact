const URL = `http://localhost:3001/connectionDB/getOneUser/`

export const getUserById = async (id) => {

  const url = `${URL}${id}`

  const data = await fetch(url).then(res => res.json()).catch(e => console.warn("error-->", e))

  return data}

export default getUserById