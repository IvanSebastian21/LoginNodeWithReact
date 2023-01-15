import { useState } from 'react'
import GetUserById from './GetUserById'
import SearchUserById from './SearchUserById'

function PatchUser() {
  const [userID, setUserID] = useState('')

  return (
    <>
      <SearchUserById callback={(cb) => setUserID(cb)} />
      <GetUserById userId={userID} />
    </>
  )
}

export default PatchUser