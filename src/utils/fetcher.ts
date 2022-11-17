import axios from "axios"

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

const fetcher = <T>(url: string) => axios.get<T>(url).then((res) => res.data)

export default fetcher
