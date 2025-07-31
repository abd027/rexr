import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "4fad378eb25943be94e24fcdae06a5b6"
}
});