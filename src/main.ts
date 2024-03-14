import { Card } from './component/card';
import { Footer } from './component/footer';
import { Header } from './component/header';
import { List } from './component/list';
import { moviesAndSeries } from './component/list-series';
import './style.css';

const title = 'Movies And Series';

new Header('body', title);
new Footer('body');
new List('body');
moviesAndSeries.forEach((item) => {
  new Card('.movies-series', item);
});
