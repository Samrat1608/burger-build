import reducer from './auth';
import * as actionType from '../actions/actionTypes';

describe('auth reducer', () =>{
    it('should return the initial state', ()=>{
        expect(reducer(undefined,{})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/',
        });
    });

    it('should store the tokn upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/',
        },{
            type: actionType.AUTH_SUCCESS,
            idToken: 'sone-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'sone-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/',
        });
    });
});