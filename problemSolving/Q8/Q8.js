//Q8: linked list

class Node
{
	constructor()
	{
		this.data = 0;
		this.next = null;
	}
}

function reverse(x, k)
{
	
	var temp = x;
	var count = 1;
	while (count < k)
	{
		temp = temp.next;
		count++;
	}

	var joint_point = temp.next;
	temp.next = null; 

	var prev = null;
	var current = x;
	var next;
	while (current != null)
	{
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	x = prev;
	current = x;

	while (current.next != null)
    {
		current = current.next;
    }

	current.next = joint_point;
	return x;
}


function push( x, newData)
{
	var newNode = new Node();
	newNode.data = newData;
	newNode.next = (x);
	(x) = newNode;
	return x;
}

function printList( head)
{
	var temp = head;
	while (temp != null)
	{
		document.write(temp.data);
		temp = temp.next;
	}
}

var head = null;
head = push(head, 3);
head = push(head, 4);
head = push(head, 5);
head = push(head, 2);
head = push(head, 1);

var k = 2
head = reverse(head, k)

printList(head)
console.log(head)