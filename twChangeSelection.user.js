// ==UserScript==
// @name            twChangeSelection
// @namespace       http://furyu.hatenablog.com/
// @author          furyu
// @version         0.1.0.1
// @include         http://twitter.com/*
// @include         https://twitter.com/*
// @description     Change selection of tweet on Twitter
// ==/UserScript==
/*
The MIT License (MIT)
Copyright (c) 2016 furyu <furyutei@gmail.com>
https://github.com/furyutei/twChangeSelection
*/

( function ( w, d ) {

'use strcit';

if ( w !== w.parent ) {
    return;
}


function main( w, d ) {
    var $ = w.jQuery;
    
    if ( ! $ ) {
        var self_function = arguments.callee;
        
        setTimeout( function () {
            self_function( w, d );
        }, 100 );
        return;
    }
    
    var NAME_SCRIPT = 'twChangeSelection';
    
    if ( w[ NAME_SCRIPT + '_touched' ] ) {
        return;
    }
    w[ NAME_SCRIPT + '_touched' ] = true;
    
    
    function set_selection_event( stream_item_tweet ) {
        var jq_stream_item_tweet = $( stream_item_tweet );
        
        function on_event( event ) {
            if ( $( '.selected-stream-item' ).size() <= 0 ) {
                $( d ).trigger( 'uiSelectTopTweet' );
            }
            jq_stream_item_tweet.trigger( 'uiSelectItem', { setFocus : true } );
        } // end of on_event()
        
        
        function on_event_with_key( event ) {
            if ( ! event.ctrlKey ) {
                return;
            }
            on_event( event );
        } // end of on_event_with_key()
        
        
        jq_stream_item_tweet.off( 'click.' + NAME_SCRIPT );
        jq_stream_item_tweet.off( 'mousemove.' + NAME_SCRIPT );
        jq_stream_item_tweet.off( 'mouseover.' + NAME_SCRIPT );
        
        jq_stream_item_tweet.on( 'click.' + NAME_SCRIPT, on_event );
        jq_stream_item_tweet.on( 'mousemove.' + NAME_SCRIPT, on_event_with_key );
        jq_stream_item_tweet.on( 'mouseover.' + NAME_SCRIPT, on_event_with_key );
    } // end of set_event()
    
    
    new MutationObserver( function ( records ) {
        records.forEach( function ( record ) {
            Array.prototype.slice.call( record.addedNodes ).forEach( function ( addedNode ) {
                if ( addedNode.nodeType != 1 ) {
                    return;
                }
                if ( addedNode.classList.contains( 'js-stream-item' ) ) {
                    set_selection_event( addedNode );
                }
                else {
                    var ancestor = $( addedNode ).parents( '.js-stream-item' );
                    
                    if ( 0 < ancestor.size() ) {
                        set_selection_event( ancestor );
                    }
                }
            } );
        } );
    } ).observe( document, { childList : true, subtree : true } );
    
    $( '.js-stream-item' ).each( function () {
        set_selection_event( this );
    } );
    
} // end of main()


if ( typeof w.jQuery == 'function' ) {
    main( w, d );
}
else {
    var container = d.documentElement,
        nonce_script = d.querySelector( 'script[nonce]' ),
        nonce = ( nonce_script ) ? nonce_script.getAttribute( 'nonce' ) : null,
        script = d.createElement('script');
    
    if ( nonce ) {
        script.setAttribute( 'nonce', nonce );
    }
    script.textContent = '(' + main.toString() + ')( window, document );';
    container.appendChild( script );
}

} )( window, document );

// ■ end of file
