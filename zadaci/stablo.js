function Node(){
	this.left=null;
	this.right=null;
	this.key;
}

function BinTree(){
	this.root=null;
	var that=this;
	this.insertNode= function(value){
		if(that.root==null){
			that.root=new Node();
			that.root.key=value;
		}

		else{
			var tmp = that.root;
			var previous=null;
			while(tmp!=null)
			{
				if(value<tmp.key){
					previous=tmp;
					tmp=tmp.left;
				}
				else{
					previous=tmp;
					tmp=tmp.right;
					}
			}
			tmp=new Node();
			tmp.key=value;
			if(previous.key>tmp.key)
				previous.left=tmp;
			else
				previous.right=tmp;


		}
	}

	this.print= function(node){
		console.log(node.key);
	}

	this.breadthTraversal= function(node){
		var queue= new Array();
		queue.push(node);
		while(queue.length>0){
			var tmp = queue.pop();
			this.print(tmp);
			if(tmp.left!=null)
			queue.push(tmp.left);
			if(tmp.right!=null)
			queue.push(tmp.right);
		}
	}

	this.findSecondGreatest= function(node){
		var array = new Array();
		
		if(!node.left && !node.right)
		{
			console.log("Jedini cvor u stablu je" +node.key);
		}
		else if(!node.right)
		{
			node = node.left;
			if(!node.right)
				console.log("Drugi najveci je "+ node.key);		
			else{
				while(node.right!=null)
					node=node.right;
				console.log("Drugi najveci je "+ node.key);	
			}

		}

		else{
			node= node.right;
			if(!node.right){
				console.log("Drugi najveci je :" + node.left.key);
			}
			else
			{
				var prev;
				while(node.right != null)
				{
					prev=node;
					node= node.right;
				}
				console.log("Drugi najveci je :" + prev.key);

			}
		}
		
	}


}

var tree= new BinTree();
tree.insertNode(5);
tree.insertNode(22);
tree.insertNode(23);
tree.insertNode(24);
tree.insertNode(9);
tree.insertNode(3);

tree.findSecondGreatest(tree.root);

