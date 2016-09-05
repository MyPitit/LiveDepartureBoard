var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            TrainSchedule: 'app/components/TrainSchedule.js',
            Announcement: 'app/components/Announcement.jsx',
            StationTime: 'app/components/StationTime.jsx',
            StationTimeDelayed: 'app/components/StationTimeDelayed.jsx',
            StationOnTime: 'app/components/StationOnTime.jsx',
            StationImage: 'app/components/StationImage.jsx',
            StationBetweenImage: 'app/components/StationBetweenImage.jsx',
            StationName: 'app/components/StationName.jsx',
            BuildJourney: 'app/components/BuildJourney.jsx',
            Station: 'app/components/Station.jsx',
            StationPlatform: 'app/components/StationPlatform.jsx',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
