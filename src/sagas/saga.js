import { delay } from "redux-saga";
import { takeEvery, put, fork, all, call } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC" });
}

export function* watchAgeUp() {
  yield takeEvery("AGE_UP", ageUpAsync);
}

function fetchImage() {
  return fetch("https://randomuser.me/api/");
}

function* workerSagaImage() {
  console.log("In saga");
  try {
    const response = yield call(fetchImage);
    const personResponse = yield response.json();

    yield put({ type: "RANDOM_IMAGE_SUCCESS", person: personResponse });
  } catch (error) {
    console.log("In error ");
    yield put({ type: "RANDOM_IMAGE_FAILURE", error });
  }
}

export function* watchImage() {
  console.log("Sage called for image");
  yield takeEvery("RANDOM_IMAGE", workerSagaImage);
}

export function* rootSaga() {
  yield all([call(watchAgeUp), call(watchImage)]);
}
