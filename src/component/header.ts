import { Component } from './component';

export class Header extends Component {
  title: string;
  constructor(selector: string, title: string) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="header">
      <h1 class="header__title">${this.title}</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </nav>
    </header>
    `;
  }
}
