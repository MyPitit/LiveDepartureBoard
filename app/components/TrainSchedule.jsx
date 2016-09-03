var Redux = require('redux');
var ldb = require('json!../api/ldb.json');

export var configure = (state = ldb) => {
    var reducer = () => {
        return state;
    };
    var store = Redux.createStore(reducer, state);
    return store;
}
