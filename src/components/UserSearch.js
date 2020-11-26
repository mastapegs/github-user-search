import React from 'react'
import {
  CircularProgress,
} from '@material-ui/core'
import RenderUserData from './RenderUserData'

const UserSearch = ({ userDataIsLoading, userDataFromQuery, }) => {
  return (
    <>
      {userDataIsLoading && <CircularProgress />}
      <RenderUserData data={userDataFromQuery} />
    </>
  )
}

export default UserSearch