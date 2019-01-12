import ActionLibrary from 'rule-based-system/ActionLibrary';

import ConfigDrivenAction from './ConfigDrivenAction';

const myActionLibrary = new ActionLibrary();
myActionLibrary.addAction('ConfigDrivenAction', ConfigDrivenAction);

export default myActionLibrary;
