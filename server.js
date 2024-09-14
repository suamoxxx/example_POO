const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.set('port', process.env.PORT || 3005)
const corsOptions = {
    origin: 'http://127.0.0.1:3005/*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.static('public'));
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')} `);
});