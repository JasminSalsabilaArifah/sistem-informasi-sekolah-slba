const ActionType = {
    RECEIVE_CAROUSEL: 'RECEIVE_CAROUSEL',
  };

function receiveCarousels(carousels) {
    return {
        type: ActionType.RECEIVE_CAROUSEL,
        payload: {
          carousels,
        },
    };
}

export { 
    ActionType,
    receiveCarousels,
}