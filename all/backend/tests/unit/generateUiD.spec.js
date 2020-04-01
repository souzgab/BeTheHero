const generateUiD = require('../../src/utils/generateUiD')

describe('Generate Unique Id', () => {
    it('should generate an unique Id', () => {
        const id = generateUiD.generateUiD();
        expect(id).toHaveLength(8);
    })
})