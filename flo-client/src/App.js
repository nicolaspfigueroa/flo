"use strict";
exports.__esModule = true;
var Router_1 = require("./Router");
// On this file you want to add shared behaviours or context providers to make them available to the whole app (redux provider, etc..)
function App() {
    return <Router_1["default"] />;
}
exports["default"] = App;
