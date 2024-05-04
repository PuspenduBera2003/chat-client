import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import ThemeReducer from "./Theme/Reducer/ThemeReducer";
import MicrophoneReducer from "./Microphone/Reducer/MicrophoneReducer";
import VideoReducer from "./Video/Reducers/VideoReducer";

const rootReducer = combineReducers({
  Theme: ThemeReducer,
  Mic: MicrophoneReducer,
  Vid: VideoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;