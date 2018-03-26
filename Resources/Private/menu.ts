################
# Top Menu 
################

lib.topmenu = HMENU
lib.topmenu.maxItems = 4
#lib.topmenu.includeNotInMenu = 1
lib.topmenu.1 = TMENU
lib.topmenu.1 {
  wrap = <ul>|</ul>
  noBlur = 1
  NO.allWrap = <li>|</li>
  NO.stdWrap.htmlSpecialChars = 1
  NO.ATagTitle.field = subtitle // title
  NO.ATagParams = 
  ACT = 1
  ACT.stdWrap.htmlSpecialChars = 1
  ACT.allWrap = <li>|</li>
  ACT.ATagParams = class="selected"
  ACT.ATagTitle.field = subtitle // title
}

lib.submenu = HMENU
lib.submenu.entryLevel = 1
lib.submenu.1 = TMENU
lib.submenu.1 {
  wrap = <ul>|</ul>
  noBlur = 1
  NO.allWrap = <li>|</li>
  NO.stdWrap.htmlSpecialChars = 1
  NO.ATagTitle.field = subtitle // title
  NO.ATagParams = 
  ACT = 1
  ACT.stdWrap.htmlSpecialChars = 1
  ACT.allWrap = <li>|</li>
  ACT.ATagParams = class="selected"
  ACT.ATagTitle.field = subtitle // title
}


################################# Footer menu #####################################
/*
lib.footer_menu = COA
lib.footer_menu {
	10 = TEXT
        10.htmlSpecialChars = 1
        10.wrap = <div class="company">|
	15 = COA
	15 {
		#1 = TEXT
		#1.value = {page:title}
		#1.stdWrap.insertData = 1
		stdWrap.typolink.parameter = 3
		stdWrap.typolink.wrap = <ul><h5>|</h5>
	}
        20 = HMENU
	20.special = directory
	20.special.value = 3
	#20.entryLevel = 1
	#20.wrap = |
        20 {
        	1 = TMENU
		1.noBlur = 1
            	1.NO = 1
            	1.NO.stdWrap.field = nav_title
             	1.NO.stdWrap.ifEmpty.field = title
              	1.NO.stdWrap.htmlSpecialChars = 1
	      	1.NO.ATagTitle.field = subtitle // title
              	1.NO.allWrap = <li>|</li>
	}
	30 = TEXT
        30.value =</ul></div>

	40 = TEXT
        40.htmlSpecialChars = 1
        40.wrap = <div class="production">|
	45 = COA
	45 {
		stdWrap.typolink.parameter = 4
		stdWrap.typolink.wrap = <ul><h5>|</h5>
	}
        50 = HMENU
	50.special = directory
	50.special.value = 4
	#50.entryLevel = 1
        #50.wrap = <ul>|
        50 {
        	1 = TMENU
		1.noBlur = 1
            	1.NO = 1
            	1.NO.stdWrap.field = nav_title
             	1.NO.stdWrap.ifEmpty.field = title
              	1.NO.stdWrap.htmlSpecialChars = 1
	      	1.NO.ATagTitle.field = subtitle // title
              	1.NO.allWrap = <li>|</li>
	}
	60 = TEXT
        60.value =</ul></div>

	70 = TEXT
        70.htmlSpecialChars = 1
        70.wrap = <div class="useful_info">|
	75 = COA
	75 {
		stdWrap.typolink.parameter = 5
		stdWrap.typolink.wrap = <ul><h5>|</h5>
	}
        80 = HMENU
	80.special = directory
	80.special.value = 5
	#80.entryLevel = 1
        #80.wrap = <ul>|
        80 {
        	1 = TMENU
		1.noBlur = 1
            	1.NO = 1
            	1.NO.stdWrap.field = nav_title
             	1.NO.stdWrap.ifEmpty.field = title
              	1.NO.stdWrap.htmlSpecialChars = 1
	      	1.NO.ATagTitle.field = subtitle // title
              	1.NO.allWrap = <li>|</li>
	}
	90 = TEXT
        90.value =</ul></div>

	100 = TEXT
        100.htmlSpecialChars = 1
        100.wrap = <div class="footer_contacts">|
	105 = COA
	105 {
		stdWrap.typolink.parameter = 6
		stdWrap.typolink.wrap = <ul><h5>|</h5>
	}
        110 = HMENU
	110.special = directory
	110.special.value = 6
	#110.entryLevel = 1
        #110.wrap = <ul>|
        110 {
        	1 = TMENU
		1.noBlur = 1
            	1.NO = 1
            	1.NO.stdWrap.field = nav_title
             	1.NO.stdWrap.ifEmpty.field = title
              	1.NO.stdWrap.htmlSpecialChars = 1
	      	1.NO.ATagTitle.field = subtitle // title
              	1.NO.allWrap = <li>|</li>
	}
	120 = TEXT
        120.value =</ul></div>
}
*/


lib.footer_menu = COA
lib.footer_menu {
// Company
  10 = TEXT
  10.htmlSpecialChars = 1
  10.wrap = <div class="company">|
  20 = COA
  20 {
    10 = HMENU
    10.special = list
    10.special.value = 3
    10 {
      1 = TMENU
      1.NO.allWrap = <ul><h5>|</h5>
      1.NO.doNotLinkIt = 1
   }
  }
  30 = HMENU
  30.maxItems = 6
  30.special = directory
  30.special.value = 3
  #30.entryLevel = 1
  #30.wrap = |
  30 {
    1 = TMENU
    1.noBlur = 1
    1.NO = 1
    1.NO.stdWrap.field = nav_title
    1.NO.stdWrap.ifEmpty.field = title
    1.NO.stdWrap.htmlSpecialChars = 1
    1.NO.ATagTitle.field = subtitle // title
    1.NO.allWrap = <li>|</li>
	}
  40 = TEXT
  40.value = </ul></div>    
  
//Production
  50 = TEXT
  50.htmlSpecialChars = 1
  50.wrap = <div class="production">|
  60 = COA
  60 {
    10 = HMENU
    10.special = list
    10.special.value = 4
    10 {
      1 = TMENU
      1.NO.allWrap = <ul><h5>|</h5>
      1.NO.doNotLinkIt = 1
   }
  }
  70 = HMENU
  70.maxItems = 6
  70.special = directory
  70.special.value = 4
  70 {
    1 = TMENU
    1.noBlur = 1
    1.NO = 1
    1.NO.stdWrap.field = nav_title
    1.NO.stdWrap.ifEmpty.field = title
    1.NO.stdWrap.htmlSpecialChars = 1
    1.NO.ATagTitle.field = subtitle // title
    1.NO.allWrap = <li>|</li>
	}
  80 = TEXT
  80.value = </ul></div>   
  
// Useful info
  90 = TEXT
  90.htmlSpecialChars = 1
  90.wrap = <div class="useful_info">|
  100 = COA
  100 {
    10 = HMENU
    10.special = list
    10.special.value = 5
    10 {
      1 = TMENU
      1.NO.allWrap = <ul><h5>|</h5>
      1.NO.doNotLinkIt = 1
   }
  }
  110 = HMENU
  110.maxItems = 6
  110.special = directory
  110.special.value = 5
  110 {
    1 = TMENU
    1.noBlur = 1
    1.NO = 1
    1.NO.stdWrap.field = nav_title
    1.NO.stdWrap.ifEmpty.field = title
    1.NO.stdWrap.htmlSpecialChars = 1
    1.NO.ATagTitle.field = subtitle // title
    1.NO.allWrap = <li>|</li>
	}
  120 = TEXT
  120.value = </ul></div>
  
// Contacts
  130 = TEXT
  130.htmlSpecialChars = 1
  130.wrap = <div class="footer_contacts">|
  140 = COA
  140 {
    10 = HMENU
    10.special = list
    10.special.value = 6
    10 {
      1 = TMENU
      1.NO.allWrap = <ul><h5>|</h5>
      1.NO.doNotLinkIt = 1
   }
  }
  150 = HMENU
  150.maxItems = 6
  150.special = directory
  150.special.value = 6
  150 {
    1 = TMENU
    1.noBlur = 1
    1.NO = 1
    1.NO.stdWrap.field = nav_title
    1.NO.stdWrap.ifEmpty.field = title
    1.NO.stdWrap.htmlSpecialChars = 1
    1.NO.ATagTitle.field = subtitle // title
    1.NO.allWrap = <li>|</li>
	}
  160 = TEXT
  160.value = </ul></div>     
    

}

################
# Lang Menu 
################

lib.lang = HMENU
lib.lang {     
      special = language
      special.value = 0,1
      special.normalWhenNoLanguage = 0
      1 = TMENU
      1 {
      noBlur = 1
      NO = 1
      NO {
        additionalParams.cObject = COA
        additionalParams.cObject {
          5 = TEXT
          5.wrap = &L=1
         
          10 = TEXT
          10.data = GP : tx_ttnews | backPid
          10.wrap = &tx_ttnews[backPid]=|
          10.required = 1
     
          20 = TEXT
          20.data = GP : tx_ttnews | tt_news
          20.wrap = &tx_ttnews[tt_news]=|
          20.required = 1
     
          30 = TEXT
          30.data = GP : cHash
          30.wrap = &cHash=|
          30.required = 1        
        }
      linkWrap = <li>|</li>
      stdWrap.override = UA||RU
      doNotLinkIt = 0
      #stdWrap.typolink.parameter.data = page:uid
      stdWrap.typolink.additionalParams = &L=0||&L=1
      stdWrap.typolink.addQueryString = 1
      stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
      stdWrap.typolink.addQueryString.method = GET 
      stdWrap.typolink.useCacheHash = 1
      stdWrap.typolink.no_cache = 0
    }
      # Active
      ACT = 0
      ACT <.NO
      ACT.linkWrap = <li class="lang-active">|</li>
      #ACT.ATagParams = class="cur"
      #USERDEF1 <.NO
      #USERDEF2 < .ACT
      }
    }


lib.rss_link = COA
lib.rss_link {
  5 = TEXT
  5.value = 
  10 = IMAGE
  10.file = fileadmin/templates/images/rss_logo.png
  10.file.width = 16
  10.stdWrap.typolink.parameter = {$rss.page.link}
  10.stdWrap.typolink.extTarget = _blank  
  10.wrap = |
}