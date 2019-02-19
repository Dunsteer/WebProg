function Node(){
	this.next=null;
	this.value=null;
}

function LinkedList(){
	this.head=null;
	this.tail= null;
	var that=this;

	this.insert= function(value)
	{
		if(that.head==null)
		{
			var node= new Node();
			node.value= value;
			that.head= node;
			that.tail = that.head;
		}

		else{
			var tmp = that.head;
			while(tmp.next!=null)
				tmp=tmp.next;
			var node = new Node();
			node.value = value;
			tmp.next = node;
			that.tail = node;
			that.tail.next=null;
		}
	}

	this.print= function(){
		var tmp = that.head;
		while(tmp!=null){
			console.log(tmp.value);
			tmp = tmp.next;
		}
	}

	this.returnPrev= function(node){
		var tmp = node;
		while(tmp.next!= that.tail)
			tmp=tmp.next;
		return tmp;
	}

	this.reverseList= function(){

		var tmp = that.head;
		that.head=that.tail;
		var prev = this.returnPrev(tmp);
		that.tail.next = prev;
		that.tail = prev;
		that.tail.next = null;
		while(prev != tmp){
		prev = this.returnPrev(tmp);
		that.tail.next = prev;
		that.tail = prev;
		that.tail.next = null;
		}


		that.tail.next = tmp;
		that.tail = tmp;
		that.tail.next = null;


	}

}

var list = new LinkedList();
list.insert(5);
list.insert(2);
list.insert(52);
list.insert(11);
list.insert(68);
list.reverseList();
list.print();
