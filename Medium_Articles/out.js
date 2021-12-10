//-------------------------------------------
//-------------------------------------------

function merge( array1, array2 ) {
  let merged = [];

  while ( array1.length || array2.length ) {
    let ele1 = array1.length ? array1[ 0 ] : Infinity;
    let ele2 = array2.length ? array2[ 0 ] : Infinity;

    let next;
    if ( ele1 < ele2 ) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push( next );
  }

  return merged;
}


//---
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//-------------------------------------------

// commented

//-------------------------------------------
//-------------------------------------------



//-------------------------------------------
//-------------------------------------------

merge( [ 10, 13, 15, 25 ], [] ); // => [10, 13, 15, 25]


//-------------------------------------------
//-------------------------------------------

function mergeSort( array ) {
  if ( array.length <= 1 ) {
    return array;
  }
  //...some code here.
}

//If our base case pretains to an array of a very small size, then the design of our recursive case should make progress toward hitting this base scenario. In other words, we should recursively call `mergeSort` on smaller and smaller arrays. A logical way to do this is to take the input array and split it into left and right halves.


//-------------------------------------------
//-------------------------------------------



//-------------------------------------------
//-------------------------------------------

function mergeSort( array ) {
  if ( array.length <= 1 ) {
    return array;
  }

  let midIdx = Math.floor( array.length / 2 );
  let leftHalf = array.slice( 0, midIdx );
  let rightHalf = array.slice( midIdx );

  let sortedLeft = mergeSort( leftHalf );
  let sortedRight = mergeSort( rightHalf );

  return merge( sortedLeft, sortedRight );
}

//Wow. that's it. Notice how light the implementation of `mergeSort` is. Much of the heavy lifting (the actually comparisons) is done by the `merge` helper.


//-------------------------------------------
//-------------------------------------------

function merge( array1, array2 ) {
  let merged = [];

  while ( array1.length || array2.length ) {
    let ele1 = array1.length ? array1[ 0 ] : Infinity;
    let ele2 = array2.length ? array2[ 0 ] : Infinity;

    let next;
    if ( ele1 < ele2 ) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push( next );
  }

  return merged;
}



//-------------------------------------------
//-------------------------------------------



//-------------------------------------------
//-------------------------------------------

function partition( array, pivot ) {
  let left = [];
  let right = [];

  array.forEach( ( el ) => {
    if ( el < pivot ) {
      left.push( el );
    } else {
      right.push( el );
    }
  } );

  return [ left, right ];
}


//-------------------------------------------
//-------------------------------------------

function partition( array, pivot ) {
  let left = array.filter( ( el ) => el < pivot );
  let right = array.filter( ( el ) => el >= pivot );
  return [ left, right ];
}


//-------------------------------------------
//-------------------------------------------

function quickSort( array ) {
  if ( array.length <= 1 ) {
    return array;
  }
}


//-------------------------------------------
//-------------------------------------------

function quickSort( array ) {
  if ( array.length <= 1 ) {
    return array;
  }



  //-------------------------------------------
  //-------------------------------------------

  let pivot = array.shift();
  let left = array.filter( ( el ) => el < pivot );
  let right = array.filter( ( el ) => el >= pivot );
  //...some code here


  //-------------------------------------------
  //-------------------------------------------

  function quickSort( array ) {
    if ( array.length <= 1 ) {
      return array;
    }

    let pivot = array.shift();
    let left = array.filter( el => el < pivot );
    let right = array.filter( el => el >= pivot );

    let leftSorted = quickSort( left );
    let rightSorted = quickSort( right );
    //...some code here


    //-------------------------------------------
    //-------------------------------------------

    function quickSort( array ) {
      if ( array.length <= 1 ) {
        return array;
      }

      let pivot = array.shift();
      let left = array.filter( ( el ) => el < pivot );
      let right = array.filter( ( el ) => el >= pivot );

      let leftSorted = quickSort( left );
      let rightSorted = quickSort( right );

      return leftSorted.concat( [ pivot ] ).concat( rightSorted );
    }


    //-------------------------------------------
    //-------------------------------------------

    let one = [ "a", "b" ];
    let two = [ "d", "e", "f" ];
    let newArr = [ ...one, "c", ...two ];
    newArr; // =>  [ 'a', 'b', 'c', 'd', 'e', 'f' ]


    //-------------------------------------------
    //-------------------------------------------

    function quickSort( array ) {
      if ( array.length <= 1 ) {
        return array;
      }

      let pivot = array.shift();
      let left = array.filter( ( el ) => el < pivot );
      let right = array.filter( ( el ) => el >= pivot );

      let leftSorted = quickSort( left );
      let rightSorted = quickSort( right );

      return [ ...leftSorted, pivot, ...rightSorted ];
    }


    //-------------------------------------------
    //-------------------------------------------

    function quickSort( array ) {
      if ( array.length <= 1 ) {
        return array;
      }

      let pivot = array.shift();
      let left = array.filter( ( el ) => el < pivot );
      let right = array.filter( ( el ) => el >= pivot );

      let leftSorted = quickSort( left );
      let rightSorted = quickSort( right );

      return [ ...leftSorted, pivot, ...rightSorted ];
    }


    //-------------------------------------------
    //-------------------------------------------

    binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 12 ); // => true
    binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 24 ); // => false


    //-------------------------------------------
    //-------------------------------------------

    function binarySearch( array, target ) {
      if ( array.length === 0 ) {
        return false;
      }
      //...some code here
    }


    //-------------------------------------------
    //-------------------------------------------

    function binarySearch( array, target ) {
      if ( array.length === 0 ) {
        return false;
      }

      let midIdx = Math.floor( array.length / 2 );
      let leftHalf = array.slice( 0, midIdx );
      let rightHalf = array.slice( midIdx + 1 );
      //...some code here
    }


    //-------------------------------------------
    //-------------------------------------------

    function binarySearch( array, target ) {
      if ( array.length === 0 ) {
        return false;
      }

      let midIdx = Math.floor( array.length / 2 );
      let leftHalf = array.slice( 0, midIdx );
      let rightHalf = array.slice( midIdx + 1 );

      if ( target < array[ midIdx ] ) {
        return binarySearch( leftHalf, target );
      } else if ( target > array[ midIdx ] ) {
        return binarySearch( rightHalf, target );
      }
      //...some code here
    }


    //-------------------------------------------
    //-------------------------------------------

    function binarySearch( array, target ) {
      if ( array.length === 0 ) {
        return false;
      }

      let midIdx = Math.floor( array.length / 2 );
      let leftHalf = array.slice( 0, midIdx );
      let rightHalf = array.slice( midIdx + 1 );

      if ( target < array[ midIdx ] ) {
        return binarySearch( leftHalf, target );
      } else if ( target > array[ midIdx ] ) {
        return binarySearch( rightHalf, target );
      } else {
        return true;
      }
    }


    //-------------------------------------------
    //-------------------------------------------

    function binarySearch( array, target ) {
      if ( array.length === 0 ) {
        return false;
      }

      let midIdx = Math.floor( array.length / 2 );
      let leftHalf = array.slice( 0, midIdx );
      let rightHalf = array.slice( midIdx + 1 );

      if ( target < array[ midIdx ] ) {
        return binarySearch( leftHalf, target );
      } else if ( target > array[ midIdx ] ) {
        return binarySearch( rightHalf, target );
      } else {
        return true;
      }
    }


    //-------------------------------------------
    //-------------------------------------------

    function factorial( n ) {
      if ( n === 1 ) return 1;
      return n * factorial( n - 1 );
    }

    factorial( 6 ); // => 720, requires 6 calls
    factorial( 6 ); // => 720, requires 6 calls
    factorial( 5 ); // => 120, requires 5 calls
    factorial( 7 ); // => 5040, requires 7 calls


    //-------------------------------------------
    //-------------------------------------------

    function factorial( n ) {
      // if we have calculated factorial(n) previously, fetch the stored result in memo
      if ( n in memo ) return memo[ n ];
      if ( n === 1 ) return 1;

      // otherwise, we have not calculated factorial(n) previously, so calculate it now,
      // but store the result in case we need it again in the future
      memo[ n ] = n * factorial( n - 1 );
      return memo[ n ];
    }


    //-------------------------------------------
    //-------------------------------------------

    factorial( 6 ); // => 720, requires 6 calls
    factorial( 6 ); // => 720, requires 1 call
    factorial( 5 ); // => 120, requires 1 call
    factorial( 7 ); // => 5040, requires 2 calls

    memo; // => { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }


    //-------------------------------------------
    //-------------------------------------------

    function fib( n ) {
      if ( n === 1 || n === 2 ) return 1;
      return fib( n - 1 ) + fib( n - 2 );
    }


    //-------------------------------------------
    //-------------------------------------------

    function fastFib( n, memo = {} ) {
      if ( n in memo ) return memo[ n ];
      if ( n === 1 || n === 2 ) return 1;

      memo[ n ] = fastFib( n - 1, memo ) + fastFib( n - 2, memo );
      return memo[ n ];
    }


    //-------------------------------------------
    //-------------------------------------------

    // fib(0);      // => 0
    // fib(1);      // => 1
    // fib(2);      // => 1
    // fib(6);      // => 8
    // fib(7);      // => 13


    //-------------------------------------------
    //-------------------------------------------

    function tabulatedFib( n ) {
      // create a blank array of length `n`

      let table = new Array( n );

      // seed the first two values
      table[ 0 ] = 0;
      table[ 1 ] = 1;

      // complete the table by moving from left to right,
      // following the fibonacci pattern
      for ( let i = 2; i <= n; i++ ) {
        table[ i ] = table[ i - 1 ] + table[ i - 2 ];
      }

      return table[ n ];
    }


    //-------------------------------------------
    //-------------------------------------------

    function fib( n ) {
      if ( n === 0 ) return 0;
      if ( n === 1 ) return 1;

      let secondLast = 0;
      let last = 1;

      for ( let i = 2; i <= n; i++ ) {
        let temp = last;
        last = last + secondLast;
        secondLast = temp;
      }

      return last;
    }


    //-------------------------------------------
    //-------------------------------------------

    class Node {
      constructor( val ) {
        this.value = val;
        this.next = null;
      }
    }

    class Stack {
      constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
      }

      push( val ) {
        const newNode = new Node( val );
        if ( !this.top ) {
          this.top = newNode;
          this.bottom = newNode;
        } else {
          const temp = this.top;
          this.top = newNode;
          this.top.next = temp;
        }
        return ++this.length;
      }

      pop() {
        if ( !this.top ) {
          return null;
        }
        const temp = this.top;
        if ( this.top === this.bottom ) {
          this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return temp.value;
      }

      size() {
        return this.length;
      }
    }


    //-------------------------------------------
    //-------------------------------------------

    class Node {
      constructor( val ) {
        this.value = val;
        this.next = null;
      }
    }

    class Queue {
      constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
      }

      enqueue( val ) {
        const newNode = new Node( val );
        if ( !this.front ) {
          this.front = newNode;
          this.back = newNode;
        } else {
          this.back.next = newNode;
          this.back = newNode;
        }
        return ++this.length;
      }

      dequeue() {
        if ( !this.front ) {
          return null;
        }
        const temp = this.front;
        if ( this.front === this.back ) {
          this.back = null;
        }
        this.front = this.front.next;
        this.length--;
        return temp.value;
      }

      size() {
        return this.length;
      }
    }


    //-------------------------------------------
    //-------------------------------------------

    class TreeNode {
      constructor( val ) {
        this.val = val;
        this.left = null;
        this.right = null;
      }
    }

    Constructing a tree is a matter of creating the nodes and setting `left`
    and `right`
    however we please.For example:

      let a = new TreeNode( 'a' );
    let b = new TreeNode( 'b' );
    let c = new TreeNode( 'c' );
    let d = new TreeNode( 'd' );
    let e = new TreeNode( 'e' );
    let f = new TreeNode( 'f' );

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;


    //-------------------------------------------
    //-------------------------------------------

    function inOrderPrint( root ) {
      if ( root === null ) return;
      //...some code here
    }


    //-------------------------------------------
    //-------------------------------------------

    function inOrderPrint( root ) {
      if ( !root ) return;

      inOrderPrint( root.left );
      console.log( root.val );
      inOrderPrint( root.right );
    }

    Given our tree, `inOrderPrint`
    would print the values in the order: `d, b, e, a, c, f`

    In - Order has the pattern of left, self, right.This means:

      -a node can only be printed once it 's left subtree has been completely printed. -
    a node 's right subtree can only be printed once the node itself has been printed.

    # # Pre - Order

    Given the root of a tree, the steps
    for `preOrderPrint`
    are:

      -print root -
      print all nodes in the left subtree -
      print all nodes in the right subtree

    Translating this into code:


      //-------------------------------------------
      //-------------------------------------------



      //-------------------------------------------
      //-------------------------------------------

      function postOrderPrint( root ) {
        if ( !root ) return;

        postOrderPrint( root.left );
        postOrderPrint( root.right );
        console.log( root.val );
      }


    //-------------------------------------------
    //-------------------------------------------

    function inOrderPrint( root ) {
      if ( !root ) return;

      inOrderPrint( root.left );
      console.log( root.val );
      inOrderPrint( root.right );
    }


    //-------------------------------------------
    //-------------------------------------------

    class TreeNode {
      constructor( val ) {
        this.val = val;
        this.left = null;
        this.right = null;
      }
    }

    class BST {
      constructor() {
        this.root = null;
      }

      insert( val, root = this.root ) {
        if ( !this.root ) {
          this.root = new TreeNode( val );
          return;
        }

        if ( val < root.val ) {
          if ( !root.left ) {
            root.left = new TreeNode( val );
          } else {
            this.insert( val, root.left );
          }
        } else {
          if ( !root.right ) {
            root.right = new TreeNode( val );
          } else {
            this.insert( val, root.right );
          }
        }
      }
    }


    //-------------------------------------------
    //-------------------------------------------

    class BST {
      constructor() {
        // initialize the tree to be empty
        this.root = null;
      }

      insert( val, root = this.root ) {
        // if the tree is currently empty, then create the node as the 'absolute' root
        if ( !this.root ) {
          this.root = new TreeNode( val );
          return;
        }

        // otherwise, the tree is not empty, so...
        // if our val to insert is less than the root...
        if ( val < root.val ) {
          if ( !root.left ) { //...some code hereand the left child does not exist,
            root.left = new TreeNode( val ); //      then create the node as the left child
          } else { //...some code hereand the left child already exists,
            this.insert( val, root.left ); //      then recursively insert on the left subtree
          }

          // if our val to insert is greater than or equal to the root...
        } else {
          if ( !root.right ) { //  ...and the right child does not exist,
            root.right = new TreeNode( val ); //      then create the node as the right child
          } else { //  ...and the right child already exists,
            this.insert( val, root.right ); //      then recursively insert on the right subtree
          }
        }
      }
    }

    // We can call `insert`
    // to build up the `BST`
    // without worrying about breaking the search tree property.Let 's build two different trees:

    let tree1 = new BST();
    tree1.insert( 10 );
    tree1.insert( 5 );
    tree1.insert( 16 );
    tree1.insert( 1 );
    tree1.insert( 7 );
    tree1.insert( 16 );

    let tree2 = new BST();
    tree2.insert( 1 );
    tree2.insert( 5 );
    tree2.insert( 7 );
    tree2.insert( 10 );
    tree2.insert( 16 );
    tree2.insert( 16 );


    //-------------------------------------------
    //-------------------------------------------

    let tree = new BST();
    tree.insert( 10 );
    tree.insert( 5 );
    tree.insert( 16 );
    tree.insert( 1 );
    tree.insert( 7 );
    tree.insert( 16 );

    tree.search( 7 ); // => true
    tree.search( 16 ); // => true
    tree.search( 14 ); // => false


    //-------------------------------------------
    //-------------------------------------------

    class BST {
      //...some code here

      search( val, root = this.root ) {
        if ( !root ) return false;

        if ( val < root.val ) {
          return this.search( val, root.left );
        } else if ( val > root.val ) {
          return this.search( val, root.right );
        } else {
          return true;
        }
      }
    }

    // assuming our BST class from the previous section
    class BST {
      //...some code here

      // commented
      search( val, root = this.root ) {
        // if the tree is empty, then the target val is not in the tree, so return false
        if ( !root ) return false;

        // otherwise the tree is not empty, so...
        if ( val < root.val ) {
          // if the target is less than the root,
          //  then search the left subtree
          return this.search( val, root.left );
        } else if ( val > root.val ) {
          // if the target is greater than the root,
          //  then search the right subtree
          return this.search( val, root.right );
        } else {
          // otherwise, the target must be equal to the root
          // so return true since we found it!
          return true;
        }
      }
    }


    //-------------------------------------------
    //-------------------------------------------

    function depthFirst( root ) {
      let stack = [ root ];
      while ( stack.length ) {
        let node = stack.pop();
        console.log( node.val );
        if ( node.right ) stack.push( node.right );
        if ( node.left ) stack.push( node.left );
      }
    }


    //-------------------------------------------
    //-------------------------------------------



    //-------------------------------------------
    //-------------------------------------------

    function depthFirstRecur( root ) {
      if ( !root ) return;
      console.log( root.val );
      depthFirstRecur( root.left );
      depthFirstRecur( root.right );
    }


    //-------------------------------------------
    //-------------------------------------------

    function breadthFirst( root ) {
      let queue = [ root ];
      while ( queue.length ) {
        let node = queue.shift();

        console.log( node.val );

        if ( node.left ) queue.push( node.left );
        if ( node.right ) queue.push( node.right );
      }
    }


    //-------------------------------------------
    //-------------------------------------------



    //-------------------------------------------
    //-------------------------------------------

    class GraphNode {
      constructor( val ) {
        this.val = val;
        this.neighbors = [];
      }
    }

    let a = new GraphNode( "a" );
    let b = new GraphNode( "b" );
    let c = new GraphNode( "c" );
    let d = new GraphNode( "d" );
    let e = new GraphNode( "e" );
    let f = new GraphNode( "f" );
    a.neighbors = [ b, c, e ];
    c.neighbors = [ b, d ];
    e.neighbors = [ a ];
    f.neighbors = [ e ];


    //-------------------------------------------
    //-------------------------------------------

    class GraphNode {
      constructor( val ) {
        this.val = val;
        this.neighbors = [];
      }
    }

    let a = new GraphNode( "a" );
    let b = new GraphNode( "b" );
    let c = new GraphNode( "c" );
    let d = new GraphNode( "d" );
    let e = new GraphNode( "e" );
    let f = new GraphNode( "f" );
    a.neighbors = [ e, c, b ];
    c.neighbors = [ b, d ];
    e.neighbors = [ a ];
    f.neighbors = [ e ];


    //-------------------------------------------
    //-------------------------------------------

    function depthFirstRecur( node ) {
      console.log( node.val );

      node.neighbors.forEach( ( neighbor ) => {
        depthFirstRecur( neighbor );
      } );
    }


    //-------------------------------------------
    //-------------------------------------------

    function depthFirstRecur( node, visited = new Set() ) {
      // if this node has already been visited, then return early
      if ( visited.has( node.val ) ) return;

      // otherwise it hasn't yet been visited,
      // so print it's val and mark it as visited.
      console.log( node.val );
      visited.add( node.val );

      // then explore each of its neighbors
      node.neighbors.forEach( neighbor => {
        depthFirstRecur( neighbor, visited );
      } );
    }


    //-------------------------------------------
    //-------------------------------------------

    function depthFirstIter( node ) {
      let visited = new Set();
      let stack = [ node ];

      while ( stack.length ) {
        let node = stack.pop();

        // if this node has already been visited, then skip this node
        if ( visited.has( node.val ) ) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log( node.val );
        visited.add( node.val );

        // then add its neighbors to the stack to be explored
        stack.push( ...node.neighbors );
      }
    }


    //-------------------------------------------
    //-------------------------------------------

    let graph = {
      'a': [ 'b', 'c', 'e' ],
      'b': [],
      'c': [ 'b', 'd' ],
      'd': [],
      'e': [ 'a' ],
      'f': [ 'e' ]
    };


    //-------------------------------------------
    //-------------------------------------------

    function depthFirstRecur( node, graph, visited = new Set() ) {
      if ( visited.has( node ) ) return;

      console.log( node );
      visited.add( node );

      graph[ node ].forEach( ( neighbor ) => {
        depthFirstRecur( neighbor, graph, visited );
      } );
    }


    //-------------------------------------------
    //-------------------------------------------

    function depthFirst( graph ) {
      let visited = new Set();

      for ( let node in graph ) {
        _depthFirstRecur( node, graph, visited );
      }
    }


    //-------------------------------------------
    //-------------------------------------------
