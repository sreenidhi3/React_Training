import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from './types/users.types'
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './services/users.services';
import { fetchAction, setIsLoadingAction, setUsersListAction } from './actions/users.action';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from '@tanstack/react-query'

function App() {
  const dispatch = useDispatch();
  // const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const state = useSelector((state: RootState) => state.userReducer);
  
    // console.log("state,", data)
  return (
    <div className="App">
      <div>
      {/* <button onClick={()=>dispatch(fetchUsersAction())}>Fetch Users</button> */}
      <button onClick={()=>{ 
        dispatch(dispatch(setIsLoadingAction(!isLoading)));
        dispatch(fetchAction())}}
      >
        Fetch Users
      </button>
       <p>{state.isLoading && "Loading..."}</p>
      {/* <p>{error ? "Error" : ""}</p> */}
        <div>
          {state.users && state.users.slice(0,5).map(user=><p key={user.id}>{user.login}</p>)}
        </div>
      </div>
    </div>
  );
}

export default App;
