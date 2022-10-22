import requestWrapper from "../../../utils/middleware/wrapper";

const handler = (req, res) => {
  res.status(400).send("hi");
}

export default requestWrapper(handler, "GET");