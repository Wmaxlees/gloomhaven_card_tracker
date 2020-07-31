import { css, html, LitElement, property, query } from 'lit-element';

class Card {

}

export class CardCarousel extends LitElement {

  @property({type: Object})
  public cards: Card[] = [];
}
