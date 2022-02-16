import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            showMainNav:  false,
            showPageTitle:false,
        },
    })
};

export default createStore;
