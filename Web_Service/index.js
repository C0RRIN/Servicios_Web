const app = require('./app')
const port = 8000;

(async () => {

    console.log('Starting Server...');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })


})();
