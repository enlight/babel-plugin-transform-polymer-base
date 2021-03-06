// Copyright (c) 2015 Vadim Macagon
// MIT License, see LICENSE file for full terms.
'use strict';
function default_1(_a) {
    var types = _a.types;
    var polymerBehaviorVisitor = {
        // `this.behavior.x` -> `this.x`
        MemberExpression: function (path) {
            var objectPath = path.get('object');
            if (objectPath.matchesPattern('this.behavior')) {
                objectPath.replaceWith(types.thisExpression());
            }
        },
        ClassExpression: function (path) {
            // this visitor should only visit the class expressions it's specifically told to visit
            // by the main visitor, so it shouldn't recurse into class expressions
            path.stop();
        }
    };
    function transformClass(path) {
        if (types.isCallExpression(path.node.superClass)) {
            var calleePath = path.get('superClass.callee');
            if (calleePath.matchesPattern('Polymer.BaseClass')) {
                path.get('superClass').remove();
                path.traverse(polymerBehaviorVisitor);
            }
        }
    }
    return {
        visitor: {
            // `class X extends Polymer.BaseClass()` -> `class X`
            ClassDeclaration: transformClass,
            // `let X = class extends Polymer.BaseClass()` -> `let X = class`
            ClassExpression: transformClass
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
module.exports = exports.default;
//# sourceMappingURL=index.js.map