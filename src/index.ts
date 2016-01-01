// Copyright (c) 2015 Vadim Macagon
// MIT License, see LICENSE file for full terms.

'use strict';

export default function ({ types }: { types: BabelTypes }) {
  const polymerBehaviorVisitor = {
    // `this.behavior.x` -> `this.x`
    MemberExpression(path: NodePath<BabelNodeMemberExpression>) {
      const objectPath = path.get('object');
      if (objectPath.matchesPattern('this.behavior')) {
        objectPath.replaceWith(types.thisExpression());
      }
    },
    ClassExpression(path: NodePath<BabelNodeClassExpression>) {
      // this visitor should only visit the class expressions it's specifically told to visit
      // by the main visitor, so it shouldn't recurse into class expressions
      path.stop();
    }
  };

  function transformClass(path: NodePath<BabelNodeClassDeclaration | BabelNodeClassExpression>): void {
    if (types.isCallExpression(path.node.superClass)) {
      const calleePath = path.get('superClass.callee');
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
  }
}

// Babel seems to expect `module.exports` to match the `default` export,
// at least that's how all the standard plugins appear to be written.
declare var module: any;
declare var exports: any;
module.exports = exports.default;
