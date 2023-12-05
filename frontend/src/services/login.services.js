import http from "./http-common"

export async function addUser(userData) {
    return await http.post("/user", userData);
}

export async function login(loginData) {
    return await http.post("/user/login", loginData)
}