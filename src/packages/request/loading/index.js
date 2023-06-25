import Loading from './components/loading.js';

// 计数
let COUNT = 0;

const laoding = {
    show() {
        if (COUNT === 0) {
            Loading.open();
        }
        COUNT++;
    },
    hide() {
        if (COUNT <= 0) return;
        COUNT--;
        if (COUNT === 0) Loading.close();
    }
};

export default laoding;
