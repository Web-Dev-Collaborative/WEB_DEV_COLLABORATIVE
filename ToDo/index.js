let $ = query => document.querySelectorAll( query )
let _ = query => document.querySelector( query )
let todos;
	
if ( localStorage.getItem( 'todos' ) ) {
	todos = JSON.parse( localStorage.getItem( 'todos' ) );
} else {
	todos = [];
}
	
let resetBtn = () => {
	if ( todos.length === 0 ) {
		_( '#reset' ).style.display = 'none';
	} else {
		_( '#reset' ).style.display = 'inline';
	}
}
	
let renderList = () => {
	resetBtn()
	let list = ''
	for ( let i = 0; i < todos.length; i++ ) {
		list += `
			<li class="collection-item">
				<div>
					${todos[i]}<a href="#!" class="delete secondary-content"><i class="material-icons">close</i></a>
				</div>
			</li>
		`
	}
	_( '#todos' ).innerHTML = list
	deleteList();
}
	
// Call this function at the starting of the app
renderList()
	
_( '#submit' ).addEventListener( 'click', () => {
	let todo = _( '#todo' )
	if ( todos.includes( todo.value ) || todo.value == '' ) {
		alert( "Invalid Item." )
	} else {
		todos.push( todo.value )
		store()
		renderList()
		todo.value = ''
	}
} )
	
_( '#reset' ).addEventListener( 'click', () => {
	todos = []
	store()
	renderList()
} )
	
function deleteList() {
	$( '.delete' ).forEach( item => {
		return item.addEventListener( 'click', () => {
			todos.splice( [ ...$( '.delete' ) ].indexOf( item ), 1 )
			store()
			renderList()
		} );
	} )
}
	
	
	
let store = () => localStorage.setItem( 'todos', JSON.stringify( todos ) )
