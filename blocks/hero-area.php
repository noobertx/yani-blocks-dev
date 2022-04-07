<?php

function register_block_wprig_hero_area(){
    if (!function_exists('register_block_type')) {
		return;
	}

    
        //'
    // echo YANI_DIR_URL.'assets/blocks/hero/block.js';
    register_block_type('yani/hero', [
        // 'editor_script' => 'awp-myfirstblock-js',
        'editor_script' => YANI_DIR_URL.'assets/blocks/hero/block.js',
        'attributes' => [
            'uniqueId' => [
                        'type' => 'string',
                        'default' => '',
            ],
            'align' => [
                'type' => 'string',
                'default' => 'center'
            ],
            'bodyBg' => [
                'type' => 'object',
                'url' => '',
                'id' => '-1',
                'default' => (object)[
                    'openColor' => 1,
                    'type' => 'color',
                    'color' => 'f3f3f3',
                    'url' => '',
                    'id' => '-1',
                ],
                'style'=>[
                ]
            ],
            //typography: { type: 'object', default: {}, style: [{ selector: '{{WPRIG}} .wprig-block-videopopup span' }] },
            'headerTypography' => [
                'type' => 'object',
                'default' => (object)[
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} h2' 
                    ]
                ]
            ],
            'subheaderTypography' => [
                'type' => 'object',
                'default' => (object)[
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} p' 
                    ]
                ]
            ],
            'myRichHeading' => [
                'type' => 'string'
            ],
            'myRichText' => [
                'type' => 'string',
            ],
            'textAlignment' => [
                'type' => 'string',
            ],
            'toggle' => [
                'type' => 'boolean',
                'default' => true
            ],
            'favoriteAnimal' => [
                'type' => 'string',
                'default' => 'dogs'
            ],
            'favoriteColor' => [
                'type' => 'string',
                'default' => '#DDDDDD'
            ],            
            'textAlignment' => [
                'type' => 'string'
            ],
            'buttonGroup' => [
                'type' => 'boolean',
                'default' => false
            ],
            'recreateStyles' => [
                'type' => 'boolean',
                'default' => false
            ],
            'disableFullWidth' => [
                'type' => 'boolean',
                'default' => false,
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'disableFullWidth',
                                'relation' => '==',
                                'value' => true
                            ]
                        ]
                    ]
                ]
            ],
            'parentClientId' => [
                'type' => 'string',
                'default' => ''
            ],
            'buttonText' => [
                'type' => 'string',
                'default' => 'Start Now'
            ],
            'buttonWidthType' => [
                'type' => 'string',
                'default' => 'auto',
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'buttonWidthType',
                                'relation' => '==',
                                'value' => 'block'
                            ]
                        ],
                        'selector' => '{{WPRIG}} .btn' 
                    ]
                ]
            ],
            'fillTypes' => [
                'type' => 'string',
                'default' => 'fill'
            ],
            'url' => [
                'type' => 'object',
                'default' => [
                    'url' => "#"
                ]
            ],
            'buttonSize' => [
                'type' => 'string',
                'default' => 'large'
            ],
            'buttonTypography' => [
                'type' => 'object',
                'default' => [],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .btn' 
                    ]
                ]
            ],
            'buttonTypographyHover' => [
                'type' => 'object',
                'default' => [],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .btn:hover' 
                    ]
                ]
            ],
            
            'bgButtonColor' => [
                'type' => 'object',
                'default' => [
                    'type' => 'color',
                    'openColor' => 1,
                    'color' => '#333',
                    'gradient' => [
                        'color1'=> 'var(--wprig-color-2)',
                        'color2'=> 'var(--wprig-color-1)',
                        'direction'=> 0,
                        'start'=> 0,
                        'stop'=> 100,
                        'type'=> 'linear'
                    ]
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .btn' 
                    ]
                ]
            ],

            'bgButtonHoverColor' => [
                'type' => 'object',
                'default' => [
                    'type' => 'color',
                    'openColor' => 1,
                    'color' => '#333',
                    'gradient' => [
                        'color1'=> 'var(--wprig-color-2)',
                        'color2'=> 'var(--wprig-color-1)',
                        'direction'=> 0,
                        'start'=> 0,
                        'stop'=> 100,
                        'type'=> 'linear'
                    ]
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .btn:hover' 
                    ]
                ]
            ],
            'buttonBorder' => [
                'type' => 'object',
                'default' => [
                    'openBorder' => 1,
                    'widthType' => 'global',
                    'global' => [
                        'md' => 1
                    ],
                    'color' => 'var(--wprig-color-1)',
                    'type' => 'solid',
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-block-btn-anchor' 
                    ]
                ]
            ],
            'buttonHoverBorder' => [
                'type' => 'object',
                'default' => [
                    'openBorder' => 1,
                    'widthType' => 'global',
                    'global' => [
                        'md' => 1
                    ],
                    'color' => 'var(--wprig-color-1)',
                    'type' => 'solid',
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-block-btn-anchor:hover' 
                    ]
                ]
            ],
            'buttonBorderRadius' => [
                'type' => 'object',
                'default' => [
                    'openBorderRadius' => 1,
                    'radiusType' => 'global',
                    'global' => [
                        'md' => 1
                    ],
                    'unit' => 'px'
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-block-btn-anchor:hover' 
                    ]
                ]
            ],
            'buttonShadow' => [
                'type' => 'object',
                'default' => [],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-block-btn-anchor:hover' 
                    ]
                ]
            ],
            'buttonHoverShadow' => [
                'type' => 'object',
                'default' => [],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-block-btn-anchor:hover' 
                    ]
                ]
            ],
            'iconName' => [
                'type' => 'string',
                'default' => ''
            ],
            'iconPosition' => [
                'type' => 'string',
                'default' => 'left'
            ],
            'iconSize' => [
                'type' => 'object',
                'default' => [],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-block-btn-anchor{font-size:{{iconSize}}}' 
                    ]
                ]
            ],
            // 'iconGap' => [
            //     'type' => 'object',
            //     'default' => [
            //         'md' => 8,
            //         'unit' => 'px'
            //     ],
            //     'style' => [
            //         [
            //             'condition' =>[
            //                 ['key'=>'iconName','relation'=>'!=','value'=>''],
            //                 ['key'=>'iconPosition','relation'=>'==','value'=>'left']
            //             ],
            //             'selector' => '{{WPRIG}} .wprig-btn-icon { margin-right: {{iconGap}}; }' 
            //         ],
            //         [
            //             'condition' =>[
            //                 ['key'=>'iconName','relation'=>'!=','value'=>''],
            //                 ['key'=>'iconPosition','relation'=>'==','value'=>'right']
            //             ],
            //             'selector' => '{{WPRIG}} .wprig-btn-icon { margin-left: {{iconGap}}; }' 
            //         ]
            //     ]
            // ],
            // 'sourceOfCopiedStyle' => [
            //     'type' => 'boolean',
            //     'default' => false
            // ]
        ],        
        'render_callback' => 'render_block_wprig_hero_area'
    ]);
}

function render_block_wprig_hero_area($attr, $content){
    $html = "Hero Area Here";
    // print_r($attr['url']);
    //

    // return 'Hero Area Here';
    return '<div class= "wprig-block-'.$attr["uniqueId"].' yani-hero" style ="background-image:url()">
                <div class = "yani-hero-content" ><h2>'.$attr['myRichHeading'].'</h2>'.'<p>'.$attr['myRichText'].'</p><a href="'.$attr['url']['url'].'" class="btn  btn-'.$attr['buttonSize'].' btn-'.$attr['fillTypes'].'">'.$attr['buttonText'].'</a></div></div>';
}
add_action('init', 'register_block_wprig_hero_area', 100); // Is there a way to add it not on the init hook?
?>