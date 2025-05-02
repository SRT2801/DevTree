import colors from "colors";
import server from "./server";

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(colors.bgGreen.underline.bold(`Server running on port ${PORT}`));
});
