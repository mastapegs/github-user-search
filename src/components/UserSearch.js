import React from 'react'
import {
  CircularProgress,
} from '@material-ui/core'
import RenderUserData from './RenderUserData'

const UserSearch = ({ userDataIsLoading, userDataFromQuery, fetchMore, savedUserInput }) => {
  return (
    <>
      {userDataIsLoading && <CircularProgress />}
      <RenderUserData UserSearchData={userDataFromQuery} fetchMore={fetchMore} savedUserInput={savedUserInput} />
    </>
  )
}

export default UserSearch