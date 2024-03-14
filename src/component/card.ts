import { Component } from './component';
import { MoviesAndSeries } from './list-series';

export class Card extends Component {
  moviesOrSeries: MoviesAndSeries;
  delete: (moviesAndSeries: MoviesAndSeries) => void;
  constructor(
    selector: string,
    moviesAndSeries: MoviesAndSeries,
    deleteCard: (moviesSeries: MoviesAndSeries) => void
  ) {
    super(selector);
    this.moviesOrSeries = moviesSeries;
    this.delete = deleteCard;
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();
    const deleteButton = this.element.querySelector('.delete-button');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        this.delete(this.moviesOrSeries);
        this.element.remove();
      });
    }
  }

  dataMoviesAndSeries = (moviesAndSeries: any) => `
    <li>
    <img src="${moviesAndSeries.poster}" width="200px" alt="images" />
    <strong> ${moviesAndSeries.name} </strong>
    Creator: ${moviesAndSeries.creator}
    Year: ${moviesAndSeries.year}
    Watched: ${moviesAndSeries.watched}
    Score: ${moviesAndSeries.score}
    Emmies: ${moviesAndSeries.emmies}
    
    `;

  createTemplate() {
    const item = this.moviesAndSeries;
    return `
      <li>${this.dataMoviesAndSeries(item)}
        <button class='delete-button' ">Delete</button></li>
      </li>
    `;
  }
}
