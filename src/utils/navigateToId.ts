import { LayoutTypes, type State } from '../model';

import { getState } from '../lib/state';

const navigateToId = (id: string, state = getState()): Partial<State> => {
  if (state.layout === LayoutTypes.Flow) {
    const { positionById } = state;
    const position = positionById.get(id);
    if (position !== undefined) {
      return { animateToScroll: position };
    }
  }
  return {};
};

export default navigateToId;
