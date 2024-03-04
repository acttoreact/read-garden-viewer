import { State } from '../../model/state';
import { LayoutTypes } from '../../model/viewerSettings';
import { zoom, leftCorrector, topCorrector, scale } from './interpolationValues';

export interface MinAndMaxScroll {
  minScroll: number;
  maxScroll: number;
}

const getMinAndMaxScroll = (state: State, forceMargin: number | null = null): MinAndMaxScroll => {
  const margin =
    forceMargin ??
    (state.scrollMode === 'horizontal' ? window.innerWidth / 2 : window.innerHeight / 2);
  let minScroll = margin * -1;
  let maxScroll = margin;

  if (state.layout === LayoutTypes.Flow || state.layout === LayoutTypes.Fixed) {
    if (state.scrollMode === 'horizontal') {
      if (state.slugByPosition) {
        let max = 0;
        let i = 0;
        let endOfFirstPage = 0;
        const columns = state.layout === LayoutTypes.Flow ? state.columnsInViewport : 1;
        state.slugByPosition.forEach((value, key) => {
          if (endOfFirstPage === 0) {
            endOfFirstPage = key;
          }
          if (i++ % columns === 0) {
            max = key;
          }
        });

        minScroll = margin * -1 - max;
        if (state.layout === LayoutTypes.Fixed) {
          const targetScale = Math.abs(scale.target * zoom.target);
          const correctorFix = -leftCorrector.target / targetScale;
          maxScroll = correctorFix;
          let maxScrollableWidth = 0;
          const availableWidth = state.containerWidth - (state.margin.left + state.margin.right);
          const totalWidth = state.totalWidth * targetScale;
          if (availableWidth > totalWidth) {
            maxScrollableWidth = (state.totalWidth - availableWidth / targetScale) / 2;
            maxScroll = -1 * maxScrollableWidth;
          } else {
            maxScrollableWidth = Math.max(state.totalWidth - availableWidth / targetScale, 0);
          }
          minScroll = -1 * maxScrollableWidth + correctorFix;
        }
      }
    }
    if (state.scrollMode === 'vertical') {
      if (state.slugByPosition) {
        let max = 0;
        let i = 0;
        let endOfFirstPage = 0;
        const columns = state.layout === LayoutTypes.Flow ? state.columnsInViewport : 1;
        state.slugByPosition.forEach((value, key) => {
          if (endOfFirstPage === 0) {
            endOfFirstPage = key;
          }
          if (i++ % columns === 0) {
            max = key;
          }
        });

        minScroll = margin * -1 - max;
        if (state.layout === LayoutTypes.Fixed) {
          const targetScale = Math.abs(scale.target * zoom.target);
          const correctorFix = -topCorrector.target / targetScale;
          maxScroll = correctorFix;
          let maxScrollableHeight = 0;
          const availableHeight = state.containerHeight - (state.margin.top + state.margin.bottom);
          const totalHeight = state.totalHeight * targetScale;
          if (availableHeight > totalHeight) {
            maxScrollableHeight = (state.totalHeight - availableHeight / targetScale) / 2;
            maxScroll = -1 * maxScrollableHeight;
          } else {
            maxScrollableHeight = Math.max(state.totalHeight - availableHeight / targetScale, 0);
          }
          minScroll = -1 * maxScrollableHeight + correctorFix;
        }
      }
    }
    if (state.scrollMode === 'fixed') {
      const margins = state.readMode ? state.config.readModeMargin : state.config.uiModeMargin;
      const targetScale = Math.abs(scale.target * zoom.target);
      const availableWidth = state.containerWidth - (state.margin.left + state.margin.right);
      const totalWidth = state.maxWidth * targetScale;
      const test = (totalWidth * margins.left) / state.maxWidth / 2;
      const widthReduction = state.containerWidth * (1 - zoom.target);
      // Si cabe todo el contenido
      if (availableWidth > totalWidth) {
        minScroll = -margins.left * targetScale;
        maxScroll = (-1 * (state.maxWidth - availableWidth / targetScale)) / 2;
      } else {
        // Cuanto
        maxScroll = (availableWidth - state.maxWidth) / targetScale;
        minScroll = 0;
      }
      // minScroll = -1 * maxScrollableWidth;
      console.table({
        widthReduction,
        availableWidth,
        totalWidth,
        targetScale,
        maxWidth: state.maxWidth,
        maxScroll,
        minScroll,
        test,
      });

      // const realContentsWidth = state.maxWidth * scale.target * zoom.target;
      // const availableWidth = window.innerWidth - (state.margin.left + state.margin.right);
      // console.log({ contentsWidth, realContentsWidth, availableWidth });
      // maxScroll = state.margin.left;
      // minScroll = -state.margin.right;
    }
  }
  return { minScroll, maxScroll };
};

export const getMinAndMaxAltScroll = (state: State): MinAndMaxScroll => {
  if (state.layout === LayoutTypes.Fixed) {
    if (state.scrollMode === 'horizontal') {
      const targetScale = Math.abs(scale.target * zoom.target);
      const additional = (state.containerHeight / zoom.target - state.maxHeight) / 2;
      const correctorFix = -topCorrector.target / targetScale;
      if (additional >= 0) {
        return {
          maxScroll: correctorFix + additional,
          minScroll: correctorFix + additional,
        };
      }
      const maxScroll = correctorFix;
      const minScroll = additional * 2 + correctorFix;
      return {
        maxScroll,
        minScroll,
      };
    }
    if (state.scrollMode === 'vertical') {
      const targetScale = Math.abs(scale.target * zoom.target);
      const additional = (state.containerWidth / zoom.target - state.maxWidth) / 2;
      const correctorFix = -leftCorrector.target / targetScale;
      if (additional >= 0) {
        return {
          maxScroll: correctorFix + additional,
          minScroll: correctorFix + additional,
        };
      }
      const maxScroll = correctorFix;
      const minScroll = additional * 2 + correctorFix;
      return {
        maxScroll,
        minScroll,
      };
    }
    if (state.scrollMode === 'fixed') {
      return {
        maxScroll: state.margin.top,
        minScroll: -state.margin.bottom,
      };
    }
    // TODO: Fixed limits
  }
  return { minScroll: 0, maxScroll: 0 };
};

export default getMinAndMaxScroll;
