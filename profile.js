var profile = {
    basePath: './',
    releaseDir: './build',
    releaseName: 'demo',
    action: 'release',
    cssOptimize: 'comments',
    mini: true,
    optimize: 'closure',
    layerOptimize: 'closure',
    stripConsole: 'normal',
    selectorEngine: 'acme',
    localeList: "en,de",
    insertAbsMids: false,
    useSourceMaps: false,
    optimizeOptions: {
        languageIn: 'ECMASCRIPT5'
    },
    packages: [
        {
                name: "demo",
                location: "./src"
        }
    ],
    layers: {
        'demo/layer': {// just for exclude
            include: [
                "demo/Demo",
            ]
        }
        

    }

};
