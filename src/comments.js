import {ADD_COMMENT} from './action';
import {THUMB_UP_COMMENT} from './action';
import {THUMB_DOWN_COMMENT} from './action';

function comments (state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [{
					id: action.id,
                    text: action.text,
					voteUp: 0,
					voteDown: 0
				},
				...state
			];
			
		case THUMB_UP_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
				return {...comment, voteUp: comment.voteUp + 1}
				}
			return comment;
			});

		case THUMB_DOWN_COMMENT:
			return state.map(comment => {
				if(comment.id === action.id) {
				return {...comment, voteDown: comment.voteDown - 1}
				}
			return comment;
			})
		default:
			return state;
	}
}

export default comments;