module.exports = class SpeedTestWebpackPlugin {
    constructor () {
        this.apply=compiler=>{

            compiler.hooks.beforeCompile.tap( 'SpeedTestWebpackPlugin', () => {
                console.time( `ts  compile time:` );
            } );
            compiler.hooks.done.tap( 'SpeedTestWebpackPlugin', () => {
                console.timeEnd( `ts  compile time:` );
            } );
        }
    }
};