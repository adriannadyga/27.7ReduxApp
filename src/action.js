import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

export const addComment = (text) => {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4(),
        votes: 0
    }
}

export const thumbUpComment = (id) => {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}
