import * as path from 'path';
import {Configuration} from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const config: Configuration = {
    mode: 'production',
    entry: './app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
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
    ],
};

export default config;