import React, { useState } from "react"
import { useLazyQuery } from '@apollo/client'
import UserInput from '../components/UserInput'
import UserSearch from '../components/UserSearch'
import { USER_SEARCH } from '../queries'

const Home = () => {
  const [getUsers, { data: userDataFromQuery, loading: userDataIsLoading }] = useLazyQuery(USER_SEARCH)
  const [userInput, setUserInput] = useState('')
  return (
    <>
      <UserInput {...{ getUsers, userInput, setUserInput }} />
      <UserSearch {...{ userDataIsLoading, userDataFromQuery, getUsers, userInput }} />
    </>
  )
}

export default Home