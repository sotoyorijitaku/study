// 4.2.5 制限付きポリモーフィズム
// バイナリツリー
// 1. 通常のTreeNode
// 2. 子ノードを持たないTreeNodeである、LeafNode
// 3. 子ノードを持つTreeNodeである、InnerNode

type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true;
};

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]; // タプル だった
};

let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", children: [b, a] };
let al = mapNode(a, (_) => _.toUpperCase()); // TreeNode
let bl = mapNode(b, (_) => _.toUpperCase()); // LeafNode
let cl = mapNode(c, (_) => _.toUpperCase()); // InnerNode

function mapNode<T extends TreeNode>(a: T, f: (value: string) => string) {
  return {
    ...a,
    value: f(a.value),
  };
}
