class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def print_level_order(root):

    if not root:
        return
    if not root.right and not root.left:
        return str(root.val) + " "
    if not root.left and root.right:
        return " " + print_level_order(root.right)
    if root.left and not root.right:
        return " " + print_level_order(root.left)


root = Node(1, Node(2), Node(3, Node(4), Node(5)))
print(print_level_order(root))
# 1 2 3 4 5
