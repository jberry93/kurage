import * as path from 'path';
import {
    Configuration,
    HotModuleReplacementPlugin,
    HashedModuleIdsPlugin,
} from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
    mode: 'development',
    entry: {
        app: './src/app.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9876,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            cache: true,
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
            },
        }),
        new HashedModuleIdsPlugin(),
        new HotModuleReplacementPlugin(),
    ],
};

export default config;