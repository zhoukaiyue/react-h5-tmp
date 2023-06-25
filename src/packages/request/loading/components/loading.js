import './loading.scss';

class Loading {
    constructor() {
        this.element = null;
    }

    createLoading() {
        const indicatorWrapper = document.createElement('div');
        indicatorWrapper.classList.add('request-indicator-wrapper');

        const spinnerWrapper = document.createElement('div');
        spinnerWrapper.classList.add('request-indicator-spin');

        const spinner = document.createElement('div');
        spinner.classList.add('request-spinner-snake');
        spinner.style.borderTopColor = 'rgb(204, 204, 204)';
        spinner.style.borderLeftColor = 'rgb(204, 204, 204)';
        spinner.style.borderBottomColor = 'rgb(204, 204, 204)';
        spinnerWrapper.appendChild(spinner);

        const text = document.createElement('span');
        text.classList.add('request-indicator-text');
        text.textContent = '加载中...';

        indicatorWrapper.appendChild(spinnerWrapper);
        indicatorWrapper.appendChild(text);

        const indicator = document.createElement('div');
        indicator.classList.add('request-indicator');
        indicator.style.display = 'none';
        indicator.appendChild(indicatorWrapper);

        const mask = document.createElement('div');
        mask.classList.add('request-indicator-mask');

        indicator.appendChild(mask);

        this.element = indicator;
        document.body.appendChild(this.element);
    }

    showLoading() {
        if (!this.element) {
            this.createLoading();
        }
        this.element.style.display = 'block';
    }

    hideLoading() {
        if (this.element) {
            this.element.style.display = 'none';
        }
    }

    static open() {
        Loading.instance.showLoading();
    }

    static close() {
        Loading.instance.hideLoading();
    }
}

Loading.instance = new Loading();

export default Loading;
