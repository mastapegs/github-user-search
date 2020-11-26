import React from "react"
import { useLazyQuery } from '@apollo/client'
import {
  CircularProgress,
} from '@material-ui/core'
import UserInput from '../components/UserInput'
import UserSearch from '../components/UserSearch'
import { USER_SEARCH } from '../queries'

const Home = () => {
  const [getUsers, { data: userDataFromQuery, loading: userDataLoading }] = useLazyQuery(USER_SEARCH)
  return (
    <>
      <UserInput {...{ getUsers }} />
      {(() => {
        if (userDataLoading) return <CircularProgress />
        else if (userDataFromQuery?.search) return <UserSearch data={userDataFromQuery?.search} />
      })()}
    </>
  )
}

export default Home