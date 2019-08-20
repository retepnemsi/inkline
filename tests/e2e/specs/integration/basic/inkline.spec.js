import Vue from 'vue';
import Inkline from '@inkline/inkline';

describe('Integration', () => {
    describe('Basic', () => {
        describe('Inkline', () => {
            before((done) => {
                Vue.use(Inkline);
            });

            it('should have Inkline components defined', () => {
                console.log(Vue.components);
            });
        });
    });
});
