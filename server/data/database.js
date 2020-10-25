const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rickMorty', { useUnifiedTopology: true, useNewUrlParser: true }  ) ;
