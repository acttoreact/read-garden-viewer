/* eslint-disable no-param-reassign */
import { DispatchAPIAction } from '../../model/apiInterface';
import { State } from '../../model/state';
import { LayoutTypes } from '../../model/viewerSettings';
import getMinAndMaxScroll, { MinAndMaxScroll } from './getMinAndMaxScroll';
import { InterpolationValue } from './interpolationValues';

const scrollInertiaAndLimits = (
  state: State,
  scroll: InterpolationValue,
  lastDelta: number,
  executeTransitions: () => void,
  dispatch: DispatchAPIAction,
  isAltScroll = false,
): void => {
  let min: number | null = null;
  let max: number | null = null;
  let minDistance: number | null = null;
  if (state.layout === LayoutTypes.Flow && state.scrollMode === 'horizontal') {
    const scrollingToTheRight = lastDelta < 0;
    const scrollingToTheLeft = lastDelta > 0;
    const scrollingToTheNearest = lastDelta === 0;
    const targetPosition = scroll.target * -1;
    let found = false;
    let target: number | null = null;
    let i = 0;
    state.labelByPosition.forEach((value, key) => {
      if (!found && i++ % state.columnsInViewport === 0) {
        if (min === null) {
          min = key;
        }
        max = key;
        if (scrollingToTheRight) {
          if (key > targetPosition) {
            found = true;
            target = key;
          }
        }
        if (scrollingToTheLeft) {
          if (key < targetPosition) {
            target = key;
          }
        }
        if (scrollingToTheNearest) {
          if (minDistance === null || minDistance > Math.abs(key - targetPosition)) {
            target = key;
            minDistance = Math.abs(key - targetPosition);
          }
        }
      }
    });
    if (target !== null) {
      scroll.target = target * -1;
    }
  } else if (state.layout === LayoutTypes.Flow) {
    max = state.totalHeight - window.innerHeight;
  } else {    
    let scrollLimits: MinAndMaxScroll;
    if (isAltScroll) {
      scrollLimits = {
        maxScroll: 100,
        minScroll: 0,
      };
    } else {
      scrollLimits = getMinAndMaxScroll(state, 100);
    }
    scroll.target += lastDelta * state.animationInertia;
    min = scrollLimits.maxScroll * -1;
    max = scrollLimits.minScroll * -1;
  }
  if (min !== null && scroll.target * -1 < min) {
    scroll.target = min * -1;
  }
  if (max !== null && scroll.target * -1 > max) {
    scroll.target = max * -1;
  }
  if (state.layout === LayoutTypes.Flow) {
    const scrollLimits = getMinAndMaxScroll(state, 100);
    if (scroll.current >= scrollLimits.maxScroll) {
      dispatch({ type: 'navigateToPreviousChapter' });
    } else if (scroll.current <= scrollLimits.minScroll) {
      dispatch({ type: 'navigateToNextChapter' });
    }
  }
  executeTransitions();
};
export default scrollInertiaAndLimits;
