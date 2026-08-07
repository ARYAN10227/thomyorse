import jsonfile from "jsonfile";
import moment from "moment";

const path = "./data.json";
const date = moment().format();

const data = { date };

try {
  await jsonfile.writeFile(path, data);
  console.log("data.json written:", data);
} catch (err) {
  console.error("Write failed:", err);
}