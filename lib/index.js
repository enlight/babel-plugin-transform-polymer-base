// Copyright (c) 2015 Vadim Macagon
// MIT License, see LICENSE file for full terms.
'use strict';
function default_1(_a) {
    var types = _a.types;
    return {
        visitor: {
            // Remove `extends Polymer.BaseClass()` from an ES6 class expression
            ClassExpression: function (path) {
                if (types.isCallExpression(path.node.superClass)) {
                    var calleePath = path.get('superClass.callee');
                    if (calleePath.matchesPattern('Polymer.BaseClass')) {
                        path.get('superClass').remove();
                    }
                }
            }
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=index.js.map