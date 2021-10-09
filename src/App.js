import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieNowPlaying from './pages/MovieNowPlaying';
import MovieTopRating from './pages/MovieTopRating';
import TV from './pages/TV';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie/now_playing' component={MovieNowPlaying} />
        <Route path='/movie/top_rating' component={MovieTopRating} />
        <Route path='/movie' component={Movie} />
        <Route path='/tv' component={TV} />
      </Switch>
    </Router>
  );
}

export default App;
