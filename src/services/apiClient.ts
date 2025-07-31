import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "cce61c77a8434292973040895c87c0f7"
}
});