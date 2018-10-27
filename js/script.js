var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		image: './images/potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		image: './images/lew.jpg'
	},
	{
		id: 3,
		title: 'Wilk z Wallstreet',
		desc: 'Film o wspomnieniach Jordana Belforta',
		image: './images/wilk.jpg'
	},
	{
		id: 4,
		title: 'Skazani na Shawshank',
		desc: 'Film o niesłusznie skazanym bankierze',
		image: './images/skazani.jpg'
	}
];



var Movie = React.createClass( {
	propTypes: {
		movie: React.PropTypes.object.isRequired, // mówi jakiego rodzaju będzie props (object, string itd)
	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id}, // tworzy element li wg klucza id z tablicy
				React.createElement(MovieTitle, {title: this.props.movie.title}), // dodaje element wg klasy MovieTitle, pobiera informacje z tablicy(title)
				React.createElement(MovieDescription, {desc: this.props.movie.desc}), //dodaje element wg klasy MovieDescription, pobiera informacje z tablicy(desc)
				React.createElement(GalleryItem, {image: this.props.movie.image}) // dodaje element wg klasy GalleryItem, pobiera informacje z tablicy(image)
				)
			);
	},
});

var GalleryItem = React.createClass( { //dodaje klase
	propTypes: {
		image: React.PropTypes.string.isRequired, // mówi o rodzaju propsu (string)
	},
		render: function() {
			return (
				React.createElement('img', {src: this.props.image}) //tworzy element o klasie img o propsach src, zawartosc src pobiera z tablicy (image)
				);
		},
});

var MovieTitle = React.createClass( {
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
		render: function() {
			return (
				React.createElement('h2', {}, this.props.title)
				);
		}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
		render: function() {
			return (
				React.createElement('p', {}, this.props.desc)
				);
		}
});

var MovieList = React.createClass({
	propTypes: {
		list: React.PropTypes.object.isRequired,
	},
		render: function() {
			return (
				React.createElement('li', {}, this.props.list.name)
				);
		}
});

var moviesElements = movies.map(function(movie) { //mapuje tablice movies, przybiera paramentr movie
  return React.createElement(Movie, {movie: movie, key: movie.id}); //tworzy klase movie na podstawie var Movie, parametr movie przyjmuje wartość tablicy movies (movie: React.PropTypes.object.isRequired), tworzy element na podstawie id z tablicy
});

var element = 
	React.createElement('div', {}, //tworzy element div
		React.createElement('h1', {}, 'Lista Filmów'), //tworzy nagłówek h1, nie przyjmuje wartości propsa, dodaje zawartość nagłowka
		React.createElement('ul', {}, moviesElements) // tworzy element ul, nie przyjmuje wartości propsa, dodaje zawartość ul wg elementu moviesElements
		);


ReactDOM.render(element, document.getElementById('app')); //porównuje react virtual DOM z DOM i nakłada zmiany