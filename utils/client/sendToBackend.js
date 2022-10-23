import auth from "../firebase/firebaseClient";

const sendRequest = async (route, method, data = {}) => {
  const idToken = await auth.currentUser.getIdToken();
  const headers = { idToken };
  route = `/api/${route}`;

  let result;
  if (method === "GET") {
    result = await fetch(route, { headers });
  } else if (method === "POST" || method === "PUT") {
    result = await fetch(route, {
      method,
      headers,
      body: JSON.stringify(data),
    });
  } else {
    console.log("Invalid Method");
  }
  return await result.json();
}

export default sendRequest;