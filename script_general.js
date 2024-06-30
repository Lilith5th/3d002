(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"definitions": [{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","zoomEnabled":true,"surfaceSelectionEnabled":false,"aaEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer"},{"initialPosition":{"yaw":-48.13,"class":"PanoramaCameraPosition","pitch":0.33},"automaticZoomSpeed":10,"initialSequence":"this.sequence_60F3B1F2_6A85_298D_41CA_983E75AE10BE","class":"PanoramaCamera","hoverFactor":0,"id":"panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_camera"},{"items":[{"camera":"this.panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_camera","class":"PanoramaPlayListItem","media":"this.panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"backgroundColorRatios":[],"shadowVerticalLength":0,"headerVerticalAlign":"middle","data":{"name":"Window4036"},"closeButtonBackgroundOpacity":0,"shadow":true,"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"width":400,"closeButtonRollOverBackgroundColorRatios":[0],"backgroundOpacity":1,"closeButtonPressedBackgroundOpacity":0,"id":"window_7B1E7708_6A8B_2A9C_41DA_86EF5600B896","paddingTop":0,"shadowColor":"#000000","horizontalAlign":"center","showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonPaddingRight":0,"paddingLeft":0,"paddingBottom":0,"modal":true,"closeButtonPaddingTop":0,"headerBackgroundColorRatios":[0,0.1,1],"closeButtonIconHeight":12,"footerBackgroundOpacity":1,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonRollOverBorderColor":"#000000","closeButtonPaddingBottom":0,"veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"veilColorRatios":[0,1],"paddingRight":0,"bodyPaddingRight":5,"verticalAlign":"middle","height":600,"toolTipHorizontalAlign":"center","veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"contentOpaque":false,"scrollBarWidth":10,"closeButtonIconColor":"#000000","backgroundColor":[],"layout":"vertical","closeButtonBackgroundColorRatios":[],"headerPaddingRight":10,"closeButtonPressedBorderColor":"#000000","shadowOpacity":0.5,"titlePaddingRight":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"minHeight":20,"backgroundColorDirection":"vertical","minWidth":20,"closeButtonPressedBorderSize":0,"closeButtonPressedIconColor":"#FFFFFF","closeButtonBorderSize":0,"closeButtonRollOverBackgroundOpacity":0,"bodyPaddingLeft":5,"shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"titlePaddingTop":5,"scrollBarMargin":2,"closeButtonBackgroundColor":[],"veilOpacity":0.4,"propagateClick":false,"overflow":"scroll","shadowBlurRadius":6,"children":["this.htmlText_7B06F704_6A8B_2A94_41B4_B40EBEFD6114"],"closeButtonRollOverIconColor":"#FFFFFF","bodyPaddingTop":5,"titleFontColor":"#000000","footerBackgroundColorDirection":"vertical","shadowSpread":1,"titleFontSize":"1.29vmin","closeButtonRollOverBorderSize":0,"titleFontFamily":"Arial","titlePaddingBottom":5,"bodyPaddingBottom":5,"headerPaddingLeft":10,"closeButtonBorderRadius":11,"closeButtonPressedBackgroundColor":["#3A1D1F"],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"headerBackgroundOpacity":1,"scrollBarOpacity":0.5,"closeButtonPressedBackgroundColorRatios":[0],"titlePaddingLeft":5,"titleHorizontalAlign":"left","veilColorDirection":"horizontal","closeButtonIconWidth":12,"footerHeight":5,"headerBackgroundColorDirection":"vertical","veilColor":["#000000","#000000"],"closeButtonRollOverBackgroundColor":["#C13535"],"closeButtonPressedIconLineWidth":2,"scrollBarColor":"#000000","headerPaddingTop":10,"closeButtonBorderColor":"#000000","scrollBarVisible":"rollOver","borderRadius":5,"headerPaddingBottom":10,"closeButtonPaddingLeft":0,"bodyBackgroundOpacity":1,"footerBackgroundColorRatios":[0,0.9,1],"class":"Window","closeButtonIconLineWidth":2,"gap":10,"bodyBackgroundColorDirection":"vertical","borderSize":0,"closeButtonRollOverIconLineWidth":2},{"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","shadow":false,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"subtitlesTextShadowVerticalLength":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer","paddingTop":0,"playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"paddingBottom":0,"playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","playbackBarOpacity":1,"toolTipTextShadowColor":"#000000","progressRight":0,"playbackBarHeadShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","paddingRight":0,"playbackBarHeadShadow":true,"progressOpacity":1,"translationTransitionDuration":1000,"progressBarBorderColor":"#000000","transitionMode":"blending","toolTipHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"progressBackgroundColorDirection":"vertical","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontSize":"3vmin","toolTipShadowVerticalLength":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBackgroundOpacity":1,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","minHeight":50,"toolTipPaddingRight":6,"progressHeight":10,"minWidth":100,"playbackBarProgressBorderRadius":0,"subtitlesTextDecoration":"none","toolTipFontStyle":"normal","subtitlesTextShadowBlurRadius":0,"height":"100%","toolTipShadowSpread":0,"subtitlesOpacity":1,"progressBarBorderRadius":0,"subtitlesPaddingBottom":5,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":3,"surfaceReticleColor":"#FFFFFF","propagateClick":false,"playbackBarHeadOpacity":1,"firstTransitionDuration":0,"toolTipPaddingBottom":4,"progressBorderRadius":0,"progressBarBorderSize":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","vrPointerSelectionTime":2000,"subtitlesBorderSize":0,"progressBorderSize":0,"playbackBarHeadShadowColor":"#000000","progressLeft":0,"toolTipShadowColor":"#333333","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","subtitlesPaddingRight":5,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"subtitlesShadow":false,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"playbackBarProgressOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"class":"ViewerArea","subtitlesPaddingTop":5,"playbackBarBottom":5,"subtitlesEnabled":true,"borderSize":0,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0},{"frames":[{"cube":{"class":"ImageResource","levels":[{"width":33792,"colCount":66,"url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_0/{face}/0/{row}_{column}.jpg","rowCount":11,"height":5632,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":18432,"colCount":36,"url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_0/{face}/1/{row}_{column}.jpg","rowCount":6,"height":3072,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":9216,"colCount":18,"url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_0/{face}/2/{row}_{column}.jpg","rowCount":3,"height":1536,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":6144,"colCount":12,"url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_0/{face}/3/{row}_{column}.jpg","rowCount":2,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"width":3072,"colCount":6,"url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_0/{face}/4/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"},{"width":12288,"colCount":6,"url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_0/{face}/vr2gen/0.jpg","rowCount":1,"height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_t.jpg"}],"thumbnailUrl":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_t.jpg","hfovMin":"120%","overlays":["this.overlay_644A0A3B_6A85_5AF2_41C8_E5149C3A348B"],"partial":false,"pitch":0,"id":"panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE","label":trans('panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE.label'),"hfovMax":130,"class":"Panorama","hfov":360,"data":{"label":"white_panorama03-topaz-sharpen-denoise-enhance-2x"},"vfov":180},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_60F3B1F2_6A85_298D_41CA_983E75AE10BE"},{"shadow":false,"width":"100%","backgroundOpacity":0,"id":"htmlText_7B06F704_6A8B_2A94_41B4_B40EBEFD6114","paddingTop":10,"propagateClick":false,"paddingLeft":10,"paddingBottom":10,"paddingRight":10,"scrollBarOpacity":0.5,"height":"100%","toolTipHorizontalAlign":"center","scrollBarWidth":10,"html":trans('htmlText_7B06F704_6A8B_2A94_41B4_B40EBEFD6114.html'),"scrollBarColor":"#000000","scrollBarVisible":"always","borderRadius":0,"scrollBarHorizontalMargin":-3,"class":"HTMLText","borderSize":0,"minHeight":0,"data":{"name":"HTMLText4037"},"minWidth":0},{"areas":["this.HotspotPanoramaOverlayArea_64718A74_6A85_5B74_41D1_FCDC584762B1"],"maps":[],"data":{"label":"Polygon"},"useHandCursor":true,"rollOverDisplay":true,"items":[{"distance":50,"yaw":0,"vfov":90,"class":"HotspotPanoramaOverlayImage","pitch":0,"hfov":90,"image":{"class":"ImageResource","levels":[{"height":2048,"width":2048,"class":"ImageResourceLevel","url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_HS_76eaqc3t_0.png"}]}},{"hfov":90,"yaw":90,"class":"HotspotPanoramaOverlayImage","distance":50,"image":{"class":"ImageResource","levels":[{"height":2048,"width":2048,"class":"ImageResourceLevel","url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_HS_76eaqc3t_1.png"}]},"pitch":0},{"hfov":90,"yaw":-90,"class":"HotspotPanoramaOverlayImage","distance":50,"image":{"class":"ImageResource","levels":[{"height":2048,"width":2048,"class":"ImageResourceLevel","url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_HS_76eaqc3t_3.png"}]},"pitch":0},{"hfov":90,"yaw":0,"class":"HotspotPanoramaOverlayImage","distance":50,"image":{"class":"ImageResource","levels":[{"height":2048,"width":2048,"class":"ImageResourceLevel","url":"media/panorama_6115FD5F_6A85_5EB4_41BE_041FE76566CE_HS_76eaqc3t_5.png"}]},"pitch":-90}],"class":"HotspotPanoramaOverlay","id":"overlay_644A0A3B_6A85_5AF2_41C8_E5149C3A348B"},{"click":"this.showWindow(this.window_7B1E7708_6A8B_2A9C_41DA_86EF5600B896, null, false)","mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_64718A74_6A85_5B74_41D1_FCDC584762B1"}],"data":{"name":"Player520","defaultLocale":"en","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1},"locales":{"en":"locale/en.txt"}},"shadow":false,"mediaActivationMode":"window","vrPolyfillScale":0.75,"width":"100%","backgroundOpacity":1,"id":"rootPlayer","paddingTop":0,"scrollBarMargin":2,"horizontalAlign":"left","propagateClick":false,"mouseWheelEnabled":true,"paddingLeft":0,"paddingBottom":0,"defaultVRPointer":"laser","overflow":"hidden","scripts":{"getMediaByTags":TDV.Tour.Script.getMediaByTags,"translate":TDV.Tour.Script.translate,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"initQuiz":TDV.Tour.Script.initQuiz,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaByName":TDV.Tour.Script.getMediaByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"initAnalytics":TDV.Tour.Script.initAnalytics,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showWindow":TDV.Tour.Script.showWindow,"clone":TDV.Tour.Script.clone,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlays":TDV.Tour.Script.getOverlays,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"historyGoBack":TDV.Tour.Script.historyGoBack,"cloneCamera":TDV.Tour.Script.cloneCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"getKey":TDV.Tour.Script.getKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPixels":TDV.Tour.Script.getPixels,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setLocale":TDV.Tour.Script.setLocale,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"existsKey":TDV.Tour.Script.existsKey,"setValue":TDV.Tour.Script.setValue,"mixObject":TDV.Tour.Script.mixObject,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"registerKey":TDV.Tour.Script.registerKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName},"mobileMipmappingEnabled":false,"paddingRight":0,"children":["this.MainViewer"],"verticalAlign":"top","scrollBarOpacity":0.5,"contentOpaque":false,"toolTipHorizontalAlign":"center","height":"100%","scrollBarWidth":10,"layout":"absolute","backgroundColor":["#FFFFFF"],"backgroundPreloadEnabled":true,"scrollBarColor":"#000000","borderRadius":0,"class":"Player","scrollBarVisible":"rollOver","start":"this.init()","downloadEnabled":false,"borderSize":0,"desktopMipmappingEnabled":false,"minHeight":20,"gap":10,"backgroundColorDirection":"vertical","minWidth":20};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sun Jun 30 2024