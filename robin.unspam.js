// ==UserScript==
// @name         Robin Hide Spam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Try to take over the world!
// @include      https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function hidespam(){
        var spamText = ["Autovoter","Robin-Grow","I automatically voted to grow","http","www.",".com",".net",".org", "Voting will end soon"];
        var chatMessages = $("#robinChatMessageList .robin-message");
        $(chatMessages).each(function(){
            var chatMessage = $(this).find(".robin-message--message");
            var chatMessageText = $(chatMessage).text();
            for (var i=0;i<spamText.length;i++){
                if (chatMessageText.indexOf(spamText[i]) > 0){
                    $(this).hide();
                }
            }
        });
    }
setInterval(hidespam, 5);
})();
