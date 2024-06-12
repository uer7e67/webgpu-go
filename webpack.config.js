
const path = require('path');

module.exports = {
    // 设置模式为开发
    mode: 'development',
    // 指定入口文件
    entry: './index.ts',
    // 配置输出
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    module: {
        // 规则
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    // 插件配置
    plugins: [],
    // 其他配置（如加载器、分割文件等）
    resolve: {
        extensions: [".ts"]
    }
};