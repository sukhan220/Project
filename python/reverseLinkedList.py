#create a node class
# which two property
#1 Value
#2 Address(next, previous node)
#previous Node for double linked list

class Node:
    def __init__(self,value):
        self.value= value
        self.next = None

# create a class for linked list
class linkedList:
    def __init__(self):
        self.head = None

    def printList(self):
        currentNode = self.head
        while currentNode:
            print(currentNode.value)
            currentNode = currentNode.next
    
    def reverseList(self):
        previous = None
        current = self.head
        while(current):
            next=current.next
            current.next=previous
            previous = current
            current=next
        self.head = previous
    
    def reverseNthList(self,m,n):
        startNode = self.head
        count = 1
        while(count<m):
            tempNode= startNode
            startNode=startNode.next
            print(startNode.value)
            count = count +1

        previous = startNode
        current = startNode
        startNode = startNode.next
        index = m
        while(index<n):
            nextNode=current.next
            current.next=previous
            previous = current
            current=nextNode
            index = index+1
        tempNode = previous
        previous.next = startNode

        return

if __name__=="__main__":
    node1 = Node(2)
    node2= Node(3)
    node3 = Node(4)
    node4= Node(5)
    lL = linkedList()
    lL.head = Node(1)
    lL.head.next = node1
    node1.next =node2
    node2.next =node3
    node3.next = node4
    lL.reverseNthList(2,4)
    lL.printList()