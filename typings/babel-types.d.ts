// Type definitions for babel-types v6.3.17
// Project: https://github.com/babel/babel/tree/master/packages/babel-types
// Adapted from https://github.com/babel/babel/blob/master/lib/types.js
// This is just a small subset of what's actually available.

declare class BabelNodeComment {
  value: string;
  start: number;
  end: number;
  loc: BabelNodeSourceLocation;
}

declare class BabelNodeBlockComment extends BabelNodeComment {
  type: "BlockComment";
}

declare class BabelNodeLineComment extends BabelNodeComment {
  type: "LineComment";
}

declare class BabelNodeSourceLocation {
  start: {
    line: number;
    column: number;
  };

  end: {
    line: number;
    column: number;
  };
}

declare class BabelNode {
  leadingComments: Array<BabelNodeComment>;
  innerComments: Array<BabelNodeComment>;
  trailingComments: Array<BabelNodeComment>;
  start: number;
  end: number;
  loc: BabelNodeSourceLocation;
}

declare class BabelNodeCallExpression extends BabelNode {
  type: "CallExpression";
  callee: BabelNodeExpression;
  arguments: Array<any>;
}

declare class BabelNodeIdentifier extends BabelNode {
  type: "Identifier";
  name: any;
  typeAnnotation: any;
}

declare class BabelNodeMemberExpression extends BabelNode {
  type: "MemberExpression";
  object: BabelNodeExpression;
  property: any;
  computed: boolean;
}

declare class BabelNodeClassBody extends BabelNode {
  type: "ClassBody";
  body: any;
}

declare class BabelNodeClassExpression extends BabelNode {
  type: "ClassExpression";
  id: BabelNodeIdentifier;
  body: BabelNodeClassBody;
  superClass: BabelNodeExpression;
  decorators: any;
  typeParameters: any;
  superTypeParameters: any;
}

declare class BabelNodeThisExpression extends BabelNode {
  type: "ThisExpression";
}

type BabelNodeExpression = BabelNodeCallExpression | BabelNodeMemberExpression | BabelNodeThisExpression;

declare interface BabelTypes {
  thisExpression(): BabelNodeThisExpression;

  isIdentifier(node: Object, opts?: Object): node is BabelNodeIdentifier;
  isMemberExpression(node: Object, opts?: Object): node is BabelNodeMemberExpression;
  isCallExpression(node: Object, opts?: Object): node is BabelNodeCallExpression;
}
