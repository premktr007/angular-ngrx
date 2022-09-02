import { createAction, props } from "@ngrx/store";
import { User } from "../user.model";

const LOGIN_START = '[auth page] login start';
const LOGIN_SUCCESS = '[auth page] login success';
export const loginStart = createAction(LOGIN_START, props<{email: string, password: string}>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{user: User, redirect: boolean}>());

const SIGNUP_START = '[auth page] signup start';
const SIGNUP_SUCCESS = '[auth page] signup success';
export const signupStart = createAction(SIGNUP_START, props<{email: string, password: string}>());
export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{user: User, redirect: boolean}>());

const AUTO_LOGIN = '[auth page] auto login';
const AUTH_LOGOUT = '[auth page] auto logout';
export const autoLogin = createAction(AUTO_LOGIN);
export const autoLogout = createAction(AUTH_LOGOUT);