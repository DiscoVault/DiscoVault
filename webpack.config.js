const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/main/main.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js'],
            plugins: [new TsconfigPathsPlugin()]
        },
        output: {
            path: path.resolve(__dirname, 'dist/main'),
            filename: 'main.js'
        }
    },
    {
        mode: 'development',
        entry: './src/renderer/index.tsx',
        target: 'electron-renderer',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource'
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            plugins: [new TsconfigPathsPlugin()]
        },
        output: {
            path: path.resolve(__dirname, 'dist/renderer'),
            filename: 'renderer.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'splash.html'),
                filename: 'splash.html'
            })
        ]
    }
];