/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>',
            'advent-pro, sans-serif': '<script src=\"http://use.edgefonts.net/advent-pro:n2,n5,n7,n4,n1,n6,n3:all.js\"></script>',
            'aladin, sans-serif': '<script src=\"http://use.edgefonts.net/aladin:n4:all.js\"></script>',
            'iceberg, sans-serif': '<script src=\"http://use.edgefonts.net/iceberg:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'imac_icon',
                            type: 'image',
                            rect: ['656px', '140px', '201px', '162px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imac%20icon.png",'0px','0px']
                        },
                        {
                            id: 'mac_icon',
                            type: 'image',
                            rect: ['694px', '124px', '201px', '211px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mac%20icon.png",'0px','0px']
                        },
                        {
                            id: 'IPadminiWhite',
                            type: 'image',
                            rect: ['438px', '180px', '66px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"IPadminiWhite.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['37px', '317px', '487px', '58px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​DONT LEAVE WITHOUGHT CHECKING THE WAREHOUSE</p><p style=\"margin: 0px; text-align: right;\">UNBELIAVABLE PRICES ALLERT !!!!!!!! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>",
                            align: "center",
                            font: ['advent-pro, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['276', '278', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​</p>",
                            align: "center",
                            font: ['advent-pro, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['282', '278', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​</p>",
                            align: "center",
                            font: ['advent-pro, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'tech-lug',
                            type: 'image',
                            rect: ['43px', '145px', '100px', '98px', 'auto', 'auto'],
                            clip: 'rect(98px 100.3149642944336px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"tech-lug.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2884.0306736763,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "left",
                            445,
                            1486,
                            "swing",
                            "${mac_icon}",
                            '694px',
                            '201px'
                        ],
                        [
                            "eid8",
                            "left",
                            750,
                            1695,
                            "swing",
                            "${IPadminiWhite}",
                            '761px',
                            '438px'
                        ],
                        [
                            "eid27",
                            "top",
                            1867,
                            1017,
                            "swing",
                            "${Text2}",
                            '409px',
                            '317px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            1106,
                            "linear",
                            "${imac_icon}",
                            '656px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "clip",
                            1000,
                            377,
                            "swing",
                            "${tech-lug}",
                            [90,100.31496429443,98,0],
                            [0,100.3149642944336,98,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid25",
                            "clip",
                            2034,
                            0,
                            "swing",
                            "${tech-lug}",
                            [0,100.3149642944336,98,0],
                            [0,100.3149642944336,98,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            1106,
                            "linear",
                            "${imac_icon}",
                            '140px',
                            '132px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("apple%20icons_edgeActions.js");
})("EDGE-4659190");
