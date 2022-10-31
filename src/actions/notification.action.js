import { getRndInteger } from '../util';

export const showSuccessNotification =
  (title = 'Thông báo', content, timeout = 1500) =>
  async (dispatch) => {
    const id = getRndInteger();
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: id,
        data: {
          type: 'success',
          title: title,
          content: content,
        },
      },
    });

    await setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
        payload: id,
      });
    }, 1500);
  };

export const showDangerNotification =
  (title = 'Thông báo', content) =>
  async (dispatch) => {
    const id = getRndInteger();
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: id,
        data: {
          type: 'danger',
          title: title,
          content: content,
        },
      },
    });

    await setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
        payload: id,
      });
    }, 1500);
  };
