import React from 'react'
import {
  CircularProgress,
} from '@material-ui/core'
import RenderUserData from './RenderUserData'
import FabNav from './FabNav'

const UserSearch = ({ userDataIsLoading, userDataFromQuery, getUsers, userInput }) => {
  return (
    <>
      {userDataIsLoading && <CircularProgress />}
      <RenderUserData UserSearchData={userDataFromQuery} />
      <FabNav UserSearchData={userDataFromQuery} {...{ getUsers, userInput, userDataIsLoading }} />
    </>
  )
}

export default UserSearch