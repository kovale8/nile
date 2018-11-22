class Floatbox {

    static get classname() {
        return 'floatbox';
    }

    static get hiddenClass() {
        return `${Floatbox.classname}--hidden`;
    }

    constructor(targetClass) {
        this.element = document.querySelector(
            `.${Floatbox.classname}.${targetClass}`
        );
    }

    isVisible() {
        return this.element.classList.contains(Floatbox.hiddenClass);
    }

    setPosition(x, y) {
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }

    toggle() {
        this.element.classList.toggle(Floatbox.hiddenClass);
    }
}

export default Floatbox