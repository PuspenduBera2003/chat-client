import { setSelfVideoStream } from "../Actions/ActionTypes"

const initialState = {
    selfVideoStream: null
}

const VideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case setSelfVideoStream:
            return {
                ...state,
                selfVideoStream: action.payload
            }
        default:
            return state
    }
}

export default VideoReducer