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
                            rect: ['119px', '41px', '327px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"FLASH%206.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['81px', '10px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​door step delivery with flash express</p>",
                            font: ['abel, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['-62px', '60px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​24/7</p>",
                            align: "left",
                            font: ['abel, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '211px', 'auto', 'auto'],
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
                            '557px',
                            '81px'
                        ],
                        [
                            "eid16",
                            "top",
                            1887,
                            0,
                            "swing",
                            "${Text2}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            314,
                            "swing",
                            "${FLASH_6}",
                            '119px',
                            '129px'
                        ],
                        [
                            "eid21",
                            "left",
                            314,
                            628,
                            "swing",
                            "${FLASH_6}",
                            '129px',
                            '130px'
                        ],
                        [
                            "eid15",
                            "top",
                            1887,
                            0,
                            "swing",
                            "${Text}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            314,
                            "swing",
                            "${FLASH_6}",
                            '437px',
                            '125px'
                        ],
                        [
                            "eid19",
                            "top",
                            314,
                            628,
                            "swing",
                            "${FLASH_6}",
                            '125px',
                            '41px'
                        ],
                        [
                            "eid8",
                            "left",
                            629,
                            629,
                            "swing",
                            "${Text2}",
                            '-62px',
                            '238px'
                        ],
                        [
                            "eid12",
                            "left",
                            1887,
                            0,
                            "swing",
                            "${Text2}",
                            '238px',
                            '238px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("flash%20animation_edgeActions.js");
})("EDGE-28153149");
