// Type definitions for babel-traverse v6.3.17
// Project: https://github.com/babel/babel/tree/master/packages/babel-traverse
// This is just a small subset of what's actually available.

interface NodePath<T> {
  node: T;

  get<T>(path: string): NodePath<T>;
  /**
   * Check if the node is a member expression matching the given pattern.
   *
   * For example, the pattern `Polymer.Base` will match the AST for `Polymer.Base` and the AST
   * for `Polymer['Base']`.
   */
  matchesPattern(pattern: string, partialMatch?: boolean): boolean;
  /** Remove the node from the AST. */
  remove(): void;
  replaceWith(node: BabelNode): void;
  traverse(visitor: any, state?: any): void;
  /** Stop traversing the AST with the current visitor. */
  stop(): void;
}
