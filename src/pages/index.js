import React, { useState } from "react"
import { useLazyQuery } from '@apollo/client'
import UserInput from '../components/UserInput'
import UserSearch from '../components/UserSearch'
import { USER_SEARCH } from '../queries'

const Home = () => {
  const [getUsers, { data: userDataFromQuery, loading: userDataIsLoading, fetchMore }] = useLazyQuery(USER_SEARCH)
  const [savedUserInput, setSavedUserInput] = useState(null)
  return (
    <>
      <UserInput {...{ getUsers, setSavedUserInput }} />
      <UserSearch {...{ userDataIsLoading, userDataFromQuery, fetchMore, savedUserInput }} />
    </>
  )
}

export default Home