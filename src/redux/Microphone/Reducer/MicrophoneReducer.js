import { setSelfMic } from "../Actions/ActionTypes"

const initialState = {
    selfMic: false
}

const MicrophoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case setSelfMic:
            return {
                ...state,
                selfMic: action.payload
            }
        default:
            return state
    }
}

export default MicrophoneReducer