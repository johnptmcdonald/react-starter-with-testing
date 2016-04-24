var React = require('react')

var ReactRouter = require('react-router')
var Route = ReactRouter.Route
var Router = ReactRouter.Router
var IndexRoute = ReactRouter.IndexRoute
var Link = ReactRouter.Link

var browserHistory = ReactRouter.browserHistory

var MainContainer = require('../containers/MainContainer')
var HomeContainer = require('../containers/HomeContainer')

var routes = (

	<Router history={browserHistory}>
		<Route path='/' component={MainContainer}>

			<IndexRoute component={HomeContainer} />


		</Route>
	</Router>
)

module.exports = routes

