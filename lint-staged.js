const lintStaged = require('lint-staged');

(async function async() {
    try {
        const success = await lintStaged();

        console.log(success ? 'Linting was successful!' : 'Linting failed!');

    } catch (e) {
        console.error(e);

    }
} ());

