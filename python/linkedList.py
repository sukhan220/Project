class Node:
    def __init__(self,value):
        self.value= value
        self.next= None
        self.previous =None

class lList:
    def __init__(self):
        self.head=None
    
    def printList(self):
        temp= self.head
        while(temp):
            print(temp.value)
            temp=temp.next
    

lL = lList()
lL.head = Node(10)
node2= Node(20)
node4=Node(40)
node3= Node(30)

# lL.head.next=node2
# node2.next=node4
# node4.next=node3


if __name__== "__main__":
    lL.printList()