import React from 'react'
import {
  CircularProgress,
} from '@material-ui/core'
import RenderUserData from './RenderUserData'

const UserSearch = ({ userDataIsLoading, userDataFromQuery, getUsers, userInput }) => {
  return (
    <>
      {userDataIsLoading && <CircularProgress />}
      <RenderUserData UserSearchData={userDataFromQuery} getUsers={getUsers} userInput={userInput} />
    </>
  )
}

export default UserSearch