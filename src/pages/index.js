import React from "react"
import { useLazyQuery } from '@apollo/client'
import UserInput from '../components/UserInput'
import UserSearch from '../components/UserSearch'
import { USER_SEARCH } from '../queries'

const Home = () => {
  const [getUsers, { data: userDataFromQuery, loading: userDataIsLoading, fetchMore }] = useLazyQuery(USER_SEARCH)
  return (
    <>
      <UserInput {...{ getUsers }} />
      <UserSearch {...{ userDataIsLoading, userDataFromQuery, fetchMore }} />
    </>
  )
}

export default Home