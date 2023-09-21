import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ac2b747e6e304ff88407c34a502dd402",
    }
})