// Because of how we're packaging, using the ActionLibrary.addActionsFromDir
// convenience method.

import ActionLibrary from 'rule-based-system/ActionLibrary';

import AddOne from './ADDONE';

const myActionLibrary = new ActionLibrary();
myActionLibrary.addAction('ADDONE', AddOne);

export default myActionLibrary;
