import { setSelfVideoStream } from "../ActionTypes"

const updateSelfVideoStream = (data) => {
    return{
        type: setSelfVideoStream,
        payload: data
    }
}

export default updateSelfVideoStream