const path = require('path')

export default {
    root: path.resolve(__dirname, 'src'),
    base: "./",
    build: {
        outDir: "../dist",
        assetsInlineLimit: 0,
        manifest: true,
        minify: false,
        rollupOptions: {
            output: {
                // 去掉入口文件的哈希
                entryFileNames: `assets/[name].js`,
                // 保留动态导入文件的原始文件名
                chunkFileNames: 'assets/[name].js',
                // 去掉静态资源文件的哈希
                assetFileNames: `assets/[name].[ext]`,

            },
        },
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        host: true,
        cors: true,
        fs: {
            strict: false,
        }
    }
}

