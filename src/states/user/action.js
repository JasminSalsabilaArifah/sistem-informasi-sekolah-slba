import axios from 'axios';

const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
  };

function receiveUsersActionCreator(users) {
    return {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users,
      },
    };
}

function asyncRegisterUser({ name, username, password }) {
    return async () => {
        try {
            await axios.post('http://localhost:1962/register', { name, username, password })
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    ActionType,
    receiveUsersActionCreator,
    asyncRegisterUser,
}