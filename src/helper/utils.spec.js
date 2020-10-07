import { objectIsEmpty, head, tail, transformObjectInArray } from './utils';

describe('Testing function utils', function() {
    it('should return a empty array', function() {
        const result = transformObjectInArray({});
        expect(result).toHaveLength(0);
    });

    it('should return a length 1 array', function() {
        const result = transformObjectInArray({ name: 'João' });
        expect(result).toHaveLength(1);
    });

    it('should return a undefined from array using head function', function() {
        const result = head(transformObjectInArray({}));
        expect(result).toEqual(undefined);
    });

    it('should return a "Ribeiro" from array using tail function', function() {
        const result = tail(transformObjectInArray({ name: 'João', surname: 'Ribeiro' }));
        expect(result).toEqual('Ribeiro');
    });

    it('should return true', function() {
        const result = objectIsEmpty({});
        expect(result).toBeTruthy();
    });
});
