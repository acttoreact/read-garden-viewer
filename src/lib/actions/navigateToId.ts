import type { ActionDispatcher, NavigateToId } from '../../model';

import navigate from '../../utils/navigateToId';

/**
 * Navigates to specific id (works for id or data-id)
 * Currently, it only works in flow layout
 * @param context.state Viewer state
 * @param context.action Viewer action
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/require-await
const navigateToId: ActionDispatcher<NavigateToId> = async ({ action }) => navigate(action.id);

export default navigateToId;
