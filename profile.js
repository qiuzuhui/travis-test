var profile = {
    basePath: './',
    releaseDir: './build',
    releaseName: 'applications',
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
                location: "../../src"
        }
    ],
    layers: {
        'portal/layer': {// just for exclude
            include: [
                "demo/Demo",
            ]
        }
        

    }

};
