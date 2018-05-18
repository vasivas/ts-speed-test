const path = require( 'path' );

const SpeedTestWebpackPlugin = require( './SpeedTestWebpackPlugin' );

module.exports = ( {
    mode: 'development',
    target: 'web',
    context: path.resolve( __dirname, 'src' ),
    watch:true,
    entry: path.join( __dirname, 'src', 'index.ts' ),
    output: {
        filename: '[name].js',
        path: path.join( __dirname, 'dest' )
    },
    resolve:{
        extensions:['.ts']
    },
    module: {
        rules: [
            { loader: 'awesome-typescript-loader', exclude: [ /node_modules/ ] }
        ]
    },
    stats:'none',
    plugins:[
        new SpeedTestWebpackPlugin()
    ]
} );