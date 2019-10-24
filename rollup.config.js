export default [
    // browser-friendly UMD build
    {
        input: 'dist/index.js',
        output: {
            name: 'ng.tooltip',
            file: "dist/bundles/tooltip.umd.js",
            sourceMap: false,
            format: 'umd',
            globals: {
                '@angular/core': 'ng.core'
            }
        }
    }
]