import auth from "../firebase/firebaseClient";

const sendRequest = async (route, method, data = {}) => {
  const idToken = await auth.currentUser.getIdToken();
  const headers = { idToken };
  route = `/api/${route}`;

  let request;
  if (method === "GET") {
    request = await fetch(route, { headers });
  } else if (method === "POST" || method === "PUT") {
    request = await fetch(route, {
      method,
      headers,
      body: JSON.stringify(data),
    });
  } else {
    console.log("Invalid Method");
  }
  
  return await request.json();
}

export default sendRequest;