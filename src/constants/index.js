import Auth from '../modules/Auth';

const URL_BASE = " https://theexplorerio-backend.herokuapp.com/v1/";
export const URL_LOGIN = URL_BASE+"user/login";
export const URL_LOGOUT = URL_BASE+"user/logout";
export const URL_REGISTER = URL_BASE+"user/register";

export const HEADER = { "Content-Type": "application/json" };
export const BEARER_HEADER = { "Authorization": "Bearer "+Auth.getToken() };