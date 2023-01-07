import { API } from './../../config';
import { SIGNUP, SignupAction, signupSuccess, signupFail, SIGNIN, SigninAction, signinSuccess, signinFail } from './../actions/auth.action';
import { put, takeEvery } from "redux-saga/effects"
import axios from "axios"

function* handleSignup(action: SignupAction) {
    try {
        yield axios.post(`${API}/signup`, action.payload)
        yield put(signupSuccess())
    } catch (error: any) {
        yield put(signupFail(error.response.data.error))
    }
}

function* handleSignin(action: SigninAction) {
    try {
        let response = yield axios.post(`${API}/signin`, action.payload)
        localStorage.setItem('jwt', JSON.stringify(response.data))
        yield put(signinSuccess())
    } catch (error: any) {
        yield put(signinFail(error.response.data.error))
    }
}

export default function* authSaga() {
    // 注册
    yield takeEvery(SIGNUP, handleSignup)
    // 登录
    yield takeEvery(SIGNIN, handleSignin)
}