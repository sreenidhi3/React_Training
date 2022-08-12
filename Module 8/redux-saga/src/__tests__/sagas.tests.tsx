import { fetchUserActionType,setUsersListAction } from '../actions/users.action';
import {User, UsersResponseType} from '../types/users.types' 
import {watcherFetchUserSaga, workerFetchUserSaga} from '../sagas/users.sagas'
import { CallEffect, put, takeEvery } from 'redux-saga/effects';
import {actions} from "../actions/users.action"


describe("test watcher fetch user saga", ()=>{
    
})


describe("test worker fetch user saga", ()=>{
    const action:fetchUserActionType = {
        type: "FETCH_USERS"
    }
    let makeFetchRequestGenerator = workerFetchUserSaga(action);
    const callDescriptor = makeFetchRequestGenerator.next().value 
    // expect(callDescriptor).toMatchSnapshot()

    it("must call setUsersListAction", ()=>{
        const response:User[] =   [ 
            {login: "string",
            id: 2,
            node_id: "string",
            avatar_url:" string",
            gravatar_id: "string",
            url: "string",
            html_url: "string",
            followers_url: "string",
            following_url: "string",
            gists_url: "string",
            starred_url: "string",
            subscriptions_url: "string",
            organizations_url: "string",
            repos_url: "string",
            events_url: "string",
            received_events_url: "string",
            type: "User",
            site_admin: false
        }]
        

        const putDescriptor = makeFetchRequestGenerator.next(response).value;
        expect(putDescriptor).toEqual(put(setUsersListAction(response)))
        expect(makeFetchRequestGenerator.next().done).toBeTruthy();

    })
})

describe("test watcher fetch user saga ", ()=>{
    let watcherItr = watcherFetchUserSaga();
    beforeAll(()=>{
        watcherItr = watcherFetchUserSaga();
    })
    it("must call watchter saga after fetchRequest action detected", ()=>{
        const takeEveryDescriptor = watcherItr.next().value
        expect(takeEveryDescriptor).toEqual(takeEvery(actions.FETCH, workerFetchUserSaga))
    })
})