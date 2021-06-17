import axios from "axios"
export default class JobAdvertService{

    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/findByIsActiveTrue")
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobadverts/add",values)
    }

    getAllByJobAdvertIsConfirmedFalse(){

        return axios.get("http://localhost:8080/api/jobadverts/getAllByJobAdvertIsConfirmedFalse")
    }

    changeConfirmFalseToTrue(jobAdvertId){

        return axios.post("http://localhost:8080/api/jobadverts/changeConfirmFalseToTrue?id="+jobAdvertId)
    }

    jobAdvertDelete(jobAdvertId){

        return axios.post("http://localhost:8080/api/jobadverts/delete?id="+jobAdvertId)
    }
}