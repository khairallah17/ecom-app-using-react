import http from "./http-common";

export async function getAllCategories() {
    return await http.get("/categories")
}

export async function addCategorie(name) {
    return await http.post("categories", {name})
}