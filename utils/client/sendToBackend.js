import auth from "../firebase/firebaseClient";

const sendRequest = async (route, method, data = {}) => {
  const idToken = await auth.currentUser.getIdToken();
  const headers = { idToken };
  route = `/api/${route}`;

  if (method === "GET") {
    const request = await (await fetch(route, { headers })).json();
    return request.data;
  } else if (method === "POST" || method === "PUT") {
    await fetch(route, {
      method,
      headers,
      body: JSON.stringify(data),
    });
  } else {
    console.log("Invalid Method");
  }
}

export default sendRequest;