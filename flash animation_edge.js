/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>'        },
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
                            id: 'FLASH_6',
                            type: 'image',
                            rect: ['21.6%', '19.4%', '59.5%', '78.7%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FLASH%206.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['1.8%', '3.8%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​door step delivery with flash express</p>",
                            font: ['abel, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['43.3%', '28.4%', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​24/7</p>",
                            align: "left",
                            font: ['abel, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '211px', 'auto', 'auto'],
                            sizeRange: ['','550px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1887,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "left",
                            1258,
                            629,
                            "swing",
                            "${Text}",
                            '101.27%',
                            '1.82%'
                        ],
                        [
                            "eid16",
                            "top",
                            1887,
                            0,
                            "swing",
                            "${Text2}",
                            '28.44%',
                            '28.44%'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            314,
                            "swing",
                            "${FLASH_6}",
                            '21.64%',
                            '23.45%'
                        ],
                        [
                            "eid21",
                            "left",
                            314,
                            628,
                            "swing",
                            "${FLASH_6}",
                            '23.45%',
                            '23.64%'
                        ],
                        [
                            "eid22",
                            "top",
                            1887,
                            0,
                            "linear",
                            "${Text}",
                            '3.94%',
                            '3.94%'
                        ],
                        [
                            "eid8",
                            "left",
                            629,
                            629,
                            "swing",
                            "${Text2}",
                            '-11.27%',
                            '43.27%'
                        ],
                        [
                            "eid12",
                            "left",
                            1887,
                            0,
                            "swing",
                            "${Text2}",
                            '43.27%',
                            '43.27%'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            314,
                            "swing",
                            "${FLASH_6}",
                            '207.11%',
                            '59.24%'
                        ],
                        [
                            "eid19",
                            "top",
                            314,
                            628,
                            "swing",
                            "${FLASH_6}",
                            '59.24%',
                            '19.43%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("flash%20animation_edgeActions.js");
})("EDGE-28153149");
