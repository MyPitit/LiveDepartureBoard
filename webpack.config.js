module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            TrainSchedule: 'app/components/TrainSchedule.jsx',
            Announcement: 'app/components/Announcement.jsx',
            StationTime: 'app/components/StationTime.jsx',
            StationOnTime: 'app/components/StationOnTime.jsx',
            StationImage: 'app/components/StationImage.jsx',
            Station: 'app/components/Station.jsx',
            StationPlatform: 'app/components/StationPlatform.jsx'
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
