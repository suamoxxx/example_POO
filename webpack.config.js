const path = require('path');

module.exports = {
            entry: '/public/script.js',
            output: {
                path:__dirname + '/public/',
                filename: 'bundle.js',

            },
            module: {
                    rules: [
                        {
                            test: /\.js$/, 
                            exclude: /node_modules/,
                            use: {
                                loader:  'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env']
                                }
                            }
                        },
                        
                        {
                            test: /\.css$/, 
                            use:  ['style-loader','css-loader']
                         },        
                         {
                            test: /\.(png|jpe?g|gif)$/i,
                            use: [{loader: 'url-loader'}]
                         }

                        
                   ]
            }
};