import { setSelfMic } from "../ActionTypes"

const toggleSelfMic = (data) => {
    return{
        type: setSelfMic,
        payload: data
    }
}

export default toggleSelfMic