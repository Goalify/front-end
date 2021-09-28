import * as React from "react";
import Login from "../../../components/account_setup/Login"
import { mount, ReactWrapper } from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom'
import fetchMock from 'fetch-mock';
import { Provider } from "react-redux";
import "../../setupTests.js";
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login', () => {
    let wrapper: ReactWrapper;
    let store: MockStore;
    beforeEach(() => {
        store = mockStore({ user: null });
        wrapper = mount(<Router>
            <Provider store={store}>
                <Login />
            </Provider>
        </Router>);
    })
    it('logs in', () => {
        
        const username = wrapper.find('#username');
        const password = wrapper.find('#password');
        const submit = wrapper.find('#submit');

        username.simulate('change', { target: { value: 'test-username' } });
        password.simulate('change', { target: { value: 'test-password' } });
        const data = JSON.stringify({
            response: true,
            "_id": "someid",
            "username": "test-username",
            "email": "test@test-mail.com",
            "password": "test-encrypted-password",
            "__v": 0,
            "token": "test-token"
        });
        fetchMock.postOnce('http://localhost:4001/login', data);

        submit.simulate('click');
        
        console.log(store.getActions());
        expect(store.getState().user).toBe({
            id: "someid",
            username: "test-username",
            email: "test@test-mail.com",
            encPassword: "test-encrypted-password",
            token: "test-token"
        })
        console.log(store.getState());
    })
})