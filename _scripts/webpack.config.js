const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const projectRoot = path.join(__dirname, '../');
const buildDirectory = path.join(projectRoot, 'frontend');
const distDirectory = path.join(projectRoot, 'build');

module.exports = {
    performance: {
        hints: false
    },
    devServer: {
        host: '0.0.0.0',
        port: 3467,
        index: 'index.html',
        historyApiFallback: true
    },
    entry: {
        main: [
            path.join(buildDirectory, 'index.js'),
            path.join(buildDirectory, 'scss/style.scss')
        ]
    },
    output: {
        path: distDirectory,
        filename: 'dist/[name].[fullhash:6].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    failOnError: true,
                    failOnWarning: false
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            require.resolve('@babel/preset-env'),
                            require.resolve('@babel/preset-react')
                        ],
                        plugins: [
                            [require.resolve('@babel/plugin-transform-react-jsx'), {pragma: 'h'}]
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?url=false',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CopyPlugin({
            patterns: [
                {from: 'public/manifest.json'},
                {from: 'public/sitemap.xml'},
                {from: 'public/robots.txt'},
                {from: 'public/images/*.*', to: 'images/[name][ext]'},
                {from: 'public/images/icon/*.*', to: 'images/icon/[name][ext]'}
            ]
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: 'dist/[name].[fullhash:6].css'
        })
    ]
};
