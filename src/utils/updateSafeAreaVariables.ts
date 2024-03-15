import { getState } from '../lib/state';
import getMargins from './getMargins';
import setCSSProperty from './setCSSProperty';

const updateSafeAreaVariables = (state = getState()): void => {
  const readModeMargin = getMargins({
    containerWidth: state.containerWidth,
    config: state.config,
    readMode: true,
  });
  setCSSProperty('safe-area-read-top', `${readModeMargin.top}px`);
  setCSSProperty('safe-area-read-left', `${readModeMargin.left}px`);
  setCSSProperty('safe-area-read-right', `${readModeMargin.right}px`);
  setCSSProperty('safe-area-read-bottom', `${readModeMargin.bottom}px`);
  
  const uiModeMargin = getMargins({
    containerWidth: state.containerWidth,
    config: state.config,
    readMode: false,
  });
  setCSSProperty('safe-area-ui-top', `${uiModeMargin.top}px`);
  setCSSProperty('safe-area-ui-left', `${uiModeMargin.left}px`);
  setCSSProperty('safe-area-ui-right', `${uiModeMargin.right}px`);
  setCSSProperty('safe-area-ui-bottom', `${uiModeMargin.bottom}px`);
};

export default updateSafeAreaVariables;
