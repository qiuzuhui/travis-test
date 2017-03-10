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
            name: 'dijit',
            location: './bower_components/dijit'
        },
        {
            name: 'dojo',
            location: './bower_components/dojo'
        },
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
