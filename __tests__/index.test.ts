
import fs from 'fs';
import path from 'path';
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest.dontMock('fs');

describe("Initial index javascript tests ", () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        jest.resetModules();
    });


    it('should run return new text for #hello-test id', () => {

        require('../dist/scripts/index');

        let runMeFunction = document.body.querySelector<HTMLButtonElement>("#hello-test");

        expect(runMeFunction?.textContent).toEqual("Hello test");
    });
});