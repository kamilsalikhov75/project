import './Films.css';

import { Film } from '../Film/Film';
import { films } from '../../mocks/films';

function Films() {
  return (
    <div className="films__block">
      {films.map((item, id, arr) => {
        return (
          <Film
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            vote_average={item.vote_average}
          />
        );
      })}
    </div>
  );
}

export { Films };
