const VueJalali = {
    install(Vue, options) {
        Vue.date = function () {

        }

        Vue.prototype.$myMethod = function (methodOptions) {
        }
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueJalali)
}

export default VueJalali;