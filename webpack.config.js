const path = require('path') // 경로 쉽게 조작하도록 
const { webpack } = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    name : 'word-relay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게 하겠다. 
    resolve: {
        extensions: ['.js','.jsx'] // 확장자를 알아서 찾아줌 
    },

    entry : {
        app : ['./client',], // client에서 wordrelay를 불러오고 있어서 굳이 안적음 
    }, // 파일을 읽고
    
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 chrome versions'],
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ]
            }
        }]
    }, // 모듈을 적용한 후 
    plugins: [
        new RefreshWebpackPlugin(),
        new LoaderOptionsPlugin({ debug: true }), 
    ],
    output: {
        path : path.join(__dirname, 'dist'), // 현재 폴더 안에 디스트 안에 있는 파일들을 합쳐줌
        filename : 'app.js',
        publicPath: '/dist', // 가상 경로 
    }, // 출력
    devServer: {
        devMiddleware: { publicPath: '/dist' }, 
        static: { directory: path.resolve(__dirname) },
        //실제로 존재하는 정적파일들의 경로, index.html다른 곳에 위치하면 'src' 등 추가
        hot: true,
    },
}