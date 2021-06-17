import axios from "axios"

export default class WorkStyleService {
    getAll(){
        return axios.get("http://localhost:8080/api/workingStyles/getall")
    }
}