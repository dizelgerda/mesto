export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._initialArray = items
    }

    addItem(element) { this._container.prepend(element); }

    renderItems() { this._initialArray.forEach((item) => this._renderer(item)); }
}