import axios from "axios";

const api = axios.create({
  baseURL: "https://pix-pursuit-be.onrender.com/api",
});

export function getUsers() {
  return api.get("/users").then((response) => {
    return response.data.users;
  });
}

export function getUsersByUsername(username) {
  return api.get(`/users/${username}`).then((response) => {
    return response.data.user;
  });
}

export function loginUser(body) {
  return api.post("/users/login", body).then((response) => {
    return response.data.user;
  });
}

export function postUser(body) {
  return api.post("/users", body).then((response) => {
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

export async function postPursuit(
  body,
  location,
  radiusCoords,
  fileName,
  host
) {
  const data = {
    ...body,
    host_ID: host,
    targetLat: location.latitude,
    targetLong: location.longitude,
    image: `${fileName}`,
    randomLat: radiusCoords.latitude,
    randomLong: radiusCoords.longitude,
  };
  return api.post("/pursuits", data).then((response) => {
    return response.data.pursuit;
  });
}

export function getPursuitCompletedByUsers(pursuit_id) {
  return api.get(`/pursuitsCompletedByUsers/${pursuit_id}`).then((response) => {
    return response.data.users;
  });
}

export function getPursuitbyPursuitID(pursuit_id) {
  return api.get(`/pursuits/${pursuit_id}`).then((response) => {
    return response.data.pursuit;
  });
}

export function getHostedPutsuitByHostId(user_id) {
  return api.get(`/pursuits/host/${user_id}`).then((response) => {
    return response.data.pursuit;
  });
}

export function postPursuitsCompletedByUsers(user_id, pursuit_id) {
  const body = { user_id: user_id, pursuit_id: pursuit_id };
  return api.post("/pursuitsCompletedByUsers", body).then((res) => {
    return res.data.points;
  });
}

export function patchUsersPoints(user_id, inc_points) {
  const body = { inc_points: inc_points };
  return api.patch(`users/points/${user_id}`, body).then((res) => {
    return res.data.user;
  });
}

export function getPursuitImage(pursuit_id) {
  return api.get(`/pursuits/${pursuit_id}/image`).then((response) => {
    return response.data.image;
  });
}

export function getCompletedPursuits(user_id) {
  return api
    .get(`/pursuitsCompletedByUsers/users/${user_id}`)
    .then((response) => {
      return response.data.pursuits;
    });
}

export function patchPursuit(pursuit_id) {
  return api.patch(`/pursuits/${pursuit_id}`, { active: false }).then((res) => {
    return res.data.pursuit;
  });
}
