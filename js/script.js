


var GalleryItem = React.createClass( {
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
		render: function() {
			return (
				React.createElement('img', {src: this.props.image})
				);
		},
});

var Movie = React.createClass( {
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement(GalleryItem, {image: this.props.movie.image})
				)
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

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {movie: movie, key: movie.id});
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista Filmów'),
		React.createElement('ul', {}, moviesElements)
		);


ReactDOM.render(element, document.getElementById('app'));