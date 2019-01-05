import * as types from "./actionTypes";

export function openPopup(message:string,messageLevel:string,messageTitile?:string) {
  const popup ={
      message:message,
      level:messageLevel,
      title:messageTitile
  }
  return {
    type: types.POPUP_OPEN,
    popup
  };
}

export function resetPopups() {
    const popup =null;
    return {
      type: types.POPUP_RESET,
      popup
    };
  }