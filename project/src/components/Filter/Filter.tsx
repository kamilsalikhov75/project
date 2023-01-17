import './Filter.css';

import { Pagination } from '../Pagination/Pagination';

function Filter() {
  return (
    <div className="filter__block">
      <h3 className="filter__block-title">Фильтры:</h3>
      <button className="filter__button">Сбросить все фильтры</button>
      <div className="select__block">
        <label htmlFor="sortSelect">Сортировать по:</label>
        <select id="sortSelect" className="filter__select">
          <option value="Популярные по убыванию">Популярные по убыванию</option>
          <option value="Популярные по возразтанию">
            Популярные по возразтанию
          </option>
        </select>
      </div>
      <div className="select__block">
        <label htmlFor="yearSelect">Год релиза:</label>
        <select id="yearSelect" className="filter__select">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>

      <div className="checkboxes__block">
        <div className="checkbox__block">
          <input id="checkbox1" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox1">боевик</label>
        </div>
        <div className="checkbox__block">
          <input id="checkbox2" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox2">приключения</label>
        </div>
        <div className="checkbox__block">
          <input id="checkbox3" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox3">мультфильм</label>
        </div>
        <div className="checkbox__block">
          <input id="checkbox4" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox4">комедия</label>
        </div>
        <div className="checkbox__block">
          <input id="checkbox5" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox5">криминал</label>
        </div>
        <div className="checkbox__block">
          <input id="checkbox6" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox6">документальный</label>
        </div>
        <div className="checkbox__block">
          <input id="checkbox7" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox7">драма</label>
        </div>
        <div className="checkbox__block">
          <input id="checkbox8" type="checkbox" className="checkbox" />
          <label htmlFor="checkbox8">семейный</label>
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export { Filter };
