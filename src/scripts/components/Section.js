export default class Section {
    constructor({ renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    addItem(element) { this._container.prepend(element); }

    renderItems(initialArray) { for (let i = initialArray.length; i != 0; i--) this._renderer(initialArray[i - 1]); }
}