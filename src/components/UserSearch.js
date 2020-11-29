import React from 'react'
import {
  CircularProgress,
} from '@material-ui/core'
import RenderUserData from './RenderUserData'

const UserSearch = ({ userDataIsLoading, userDataFromQuery, getUsers, savedUserInput }) => {
  return (
    <>
      {userDataIsLoading && <CircularProgress />}
      <RenderUserData UserSearchData={userDataFromQuery} getUsers={getUsers} savedUserInput={savedUserInput} />
    </>
  )
}

export default UserSearch