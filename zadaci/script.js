function MaxHeap(capacity){
	this.heap= Array();
	this.capacity=capacity;
	this.pos=1;
	var that=this;
	this.insert = function(value){
		if(that.pos==capacity){
			alert("Heap is full...");
		}
				
		else{
			that.heap[that.pos++]=value;

			var child= that.pos-1;
			var parent= parseInt(child/2);

			while(that.heap[parent]<that.heap[child]){
				var tmp=that.heap[parent];
				that.heap[parent]=that.heap[child];
				that.heap[child]=tmp;

				child=parent;
				parent= parseInt(child/2);
			}
		}

		this.returnIndex= function(value){
			for(var i=1; i < that.heap.length;i++)
				if(that.heap[i]==value)
					return i;
			return null;
		}

		this.delete= function(value){
			var ind = that.returnIndex(value);
			console.log("index je"+ind);
			if(ind==null)
				return false;
			if(ind== (that.pos-1)){
				that.heap[ind]=null;
				that.pos--;
			}
			else{
				var tmp= that.heap[that.pos-1];
				that.heap[that.pos-1]=null;
				that.heap[ind]=tmp;

				var parent= ind;
				var child= 2*ind;
				while(that.heap[parent]<that.heap[child] || that.heap[parent]<that.heap[child+1]){
					var tmp1 = that.heap[parent];
					that.heap[parent]=that.heap[child];
					that.heap[child]=tmp1;

					child= parent;
					parent= parseInt(child/2);
				}
			}
		}

		this.print = function(){
			for(var i=1; i < that.pos;i++)
				console.log(that.heap[i]);
		}
	}
}


var heap = new MaxHeap(6);
heap.insert(2);
heap.insert(33);
heap.insert(1);
heap.insert(5);
heap.insert(44);

heap.delete(44);

heap.print();