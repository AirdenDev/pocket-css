import {Router} from './router.js';

describe('Router', () => {
    test('should find path if exists', () => {
        const router = new Router();

        router.navigate('transform');
    })
});