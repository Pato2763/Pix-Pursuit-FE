import axios from "axios";

const api = axios.create({
  baseURL: "https://pix-pursuit-be.onrender.com/api",
});

export function getUsers() {
  return api.get("/users").then((response) => {
    return response.data.users;
  });
}

export function loginUser(body) {
  return api.post("/users/login", body).then((response) => {
    return response.data.user;
  });
}

export function getPursuits(lat, long) {
  return api.get("/pursuits", { params: { lat, long } }).then((response) => {
    return response.data.pursuits;
  });
}

export function patchUsersCurrentPursuit(user_id, pursuit_id) {
  return api
    .patch(`/usersToCurrentPursuit/${user_id}`, { newPursuit: pursuit_id })
    .then((response) => {
      return response.data.currentPursuit;
    });
}

<<<<<<< HEAD
export async function postPursuit(body, location, radiusCoords, fileName) {
  const newBody = {
    ...body,
    targetLat: location.latitude,
    targetLong: location.longitude,
    image: `https://pix-pursuit.s3.eu-north-1.amazonaws.com/${fileName}`,
    randomLat: radiusCoords.latitude,
    randomLong: radiusCoords.longitude,
  };
  return api.post("/pursuits", newBody).then((response) => {
=======
export function getPursuitCompletedByUsers(pursuit_id) {
  return api.get(`/pursuitsCompletedByUsers/${pursuit_id}`).then((response) => {
    return response.data.users;
  });
}

export function getPursuitbyPursuitID(pursuit_id) {
  return api.get(`pursuits/${pursuit_id}`).then((response) => {
>>>>>>> 0947359a918e621303357ab703f1613a13848194
    return response.data.pursuit;
  });
}
