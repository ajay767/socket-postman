import * as types from '@actions/user/types';

const initialState = {
  loading: false,
  error: '',
  name: '',
  profile: '',
  user_id: '',
  chat_id: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_USER_REQUEST: {
      console.log('user signup request 1');
      return { ...state, loading: true, error: '' };
    }
    case types.SETUP_USER: {
      const { name, profile, email } = action.data;
      return {
        ...state,
        loading: false,
        error: '',
        name,
        email,
        profile,
      };
    }
    case types.UPDATE_USER: {
      const { name, email, profile, chat_id, user_id } = action.data;

      return { ...state, name, email, profile, chat_id, user_id };
    }
    case types.SIGNUP_USER_RESPONSE: {
      const { name, profile, user_id, chat_id } = action.data;
      return {
        ...state,
        loading: false,
        error: '',
        name,
        profile,
        user_id,
        chat_id,
      };
    }
    case types.SIGNUP_USER_FAILED: {
      return { ...state, error: action.error, loading: false };
    }

    case types.LOGIN_USER_REQUEST: {
      return { ...state, error: '', loading: true };
    }

    case types.LOGIN_USER_RESPONSE: {
      const { name, profile, user_id, chat_id } = action.data;
      return {
        ...state,
        loading: false,
        error: '',
        name,
        profile,
        user_id,
        chat_id,
      };
    }

    case types.LOGIN_USER_FAILED: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
