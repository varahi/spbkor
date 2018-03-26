lib.topMenu >
lib.topMenu = HMENU
#lib.topMenu.special = list
#lib.topMenu.special.value = 1,4,5,6,7,8,9
lib.topMenu.maxItems = 6
lib.topMenu  {
  1 = TMENU
  1 {
    wrap = <nav class="topmenu"><ul>|</ul></nav><div class="special-link-home"><a href="home/vision.html">Версия для слабовидящих</a></div>
    expAll = 1
    NO.allWrap.insertData = 1
    NO.allWrap = <li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
    NO.ATagTitle.field = description // title

    ACT < .NO
    ACT = 1
    ACT.allWrap = <li class="first active">|</li>|*|<li class="active">|</li>|*|<li class="last active">|</li>
    #ACT.ATagParams = class="active"
  }
}

[globalVar = TSFE:id = 8]
lib.sportMenu >
lib.sportMenu = HMENU
lib.sportMenu.special = directory
lib.sportMenu.special.value = 8
lib.sportMenu  {
  1 = TMENU
  1 {
    #wrap = <div class="blue-line"><h3>{$page.menu.sports}</h3></div><nav class="sports-menu"><ul>|</ul></nav>
    wrap = <nav class="sports-menu"><ul>|</ul></nav>
    NO.allWrap.insertData = 1
    NO.allWrap (
      <li>|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||
      <li>|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||
      <li>|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||
      <li>|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||
      <li>|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||
      <li>|</li>||<li>|</li>||<li>|</li>||<li class="last">|</li>||
    ) 
    NO.ATagTitle.field = description // title    
    NO.stdWrap.override.cObject = FILES
    NO.stdWrap.override.cObject {
      references {
      table = pages
      uid.field = uid
      fieldName = media
      width = 133c
    }
      renderObj = COA
      renderObj {
        10 = IMAGE
        10 {
          file.import.data = file:current:publicUrl
          altText.data = file:current:alternative
          titleText.data = file:current:title
        } 
        20 = TEXT
        20 {
          field = title
          wrap = <div>|</div>
          #typolink.parameter.field = uid
        }
      }
    }
  }
}
[global]


lib.leftmenu >
lib.leftmenu = COA
lib.leftmenu {
    10 = HMENU
    10.includeNotInMenu = 0
    10.special = directory
    10.special.value = 40
    10 {
        wrap = <nav class="left-side-menu">|</nav>
        #entryLevel = 0
        1 = TMENU
        1 {
            expAll = 1
            wrap = |
            target = _top
            NO {
              allWrap.insertData = 1
              doNotLinkIt = 0
              allWrap = <div class="side-menu">|</div>
            }
            
            IFSUB = 1
            IFSUB {
              allWrap.insertData = 1
              doNotLinkIt = 1
              allWrap = <div class="toggle-menu toggle-menu-{field:uid} menu-{field:uid}">|</div>
            }
            ACTIFSUB = 1
            ACTIFSUB < .IFSUB
            ACTIFSUB {
              allWrap = <div class="toggle-menu side-menu-active toggle-menu-{field:uid} menu-{field:uid}">|</div>
            }
                          
            ACT < .NO
            ACT = 1
            ACT {
              allWrap.insertData = 1  
              allWrap = <div class="side-menu side-menu-active">|</div>       
            }
        }
        2 = TMENU
        2 {
            expAll = 0
            stdWrap.dataWrap = <ul class="dmenu dmenu-{field:uid}">|</ul>
            target = _top
            NO {
                allWrap = <li>|</li>
            }
            ACT < .NO
            ACT = 1
            ACT.allWrap = <li class="active">|</li>
        }
        3 = TMENU
        3 {
            expAll = 0
            wrap = <ul>|</ul>
            target = _top
            NO {
                wrapItemAndSub = <li>|</li>
            }
            ACT < .NO
            ACT = 1
            CUR < .NO
            CUR = 1
            CUR {
                wrapItemAndSub = <li class="active">|</li>
            }
        }       
    }
}

/*
lib.rightmenu >
lib.rightmenu = COA
lib.rightmenu {
    10 = HMENU
    10.includeNotInMenu = 0
    10.special = directory
    10.special.value = {$rightmenu.Pid}
    10 {
        wrap = <div class="sport-departament">{$page.menu.sportDepartamentTitle}</div><nav class="left-side-menu right-menu">|</nav>
        #entryLevel = 0
        1 = TMENU
        1 {
            expAll = 1
            wrap = |
            target = _top
            NO {
              allWrap.insertData = 1
              doNotLinkIt = 0
              allWrap = <div class="side-menu">|</div>
            }
            
            IFSUB = 1
            IFSUB {
              allWrap.insertData = 1
              doNotLinkIt = 1
              allWrap = <div class="toggle-menu toggle-menu-{field:uid} menu-{field:uid}">|</div>
            }
            ACTIFSUB = 1
            ACTIFSUB < .IFSUB
            ACTIFSUB {
              allWrap = <div class="toggle-menu side-menu-active toggle-menu-{field:uid} menu-{field:uid}">|</div>
            }
                          
            ACT < .NO
            ACT = 1
            ACT {
              allWrap.insertData = 1  
              allWrap = <div class="side-menu side-menu-active">|</div>       
            }
        }
        2 = TMENU
        2 {
            expAll = 0
            stdWrap.dataWrap = <ul class="dmenu dmenu-{field:uid}">|</ul>
            target = _top
            NO {
                allWrap = <li>|</li>
            }
            ACT < .NO
            ACT = 1
            ACT.allWrap = <li class="active">|</li>
        }
        3 = TMENU
        3 {
            expAll = 0
            wrap = <ul>|</ul>
            target = _top
            NO {
                wrapItemAndSub = <li>|</li>
            }
            ACT < .NO
            ACT = 1
            CUR < .NO
            CUR = 1
            CUR {
                wrapItemAndSub = <li class="active">|</li>
            }
        }       
    }
}
*/


  lib.rightmenu > 
  lib.rightmenu = COA
  lib.rightmenu {
    20 = TEXT
    20 {
      data = leveltitle : -1
      insertData = 1
      #typolink.parameter.data = leveluid : -3
      wrap = <div class="sport-departament">|</div>
    } 
  30 = HMENU
  30.entryLevel = 3
  30.wrap = <nav class="left-side-menu right-menu">|</nav>
  30.1 = TMENU
  30.1 {
    noBlur = 1
    NO = 1
    NO.stdWrap.field = nav_title
    NO.stdWrap.ifEmpty.field = title
    NO.stdWrap.htmlSpecialChars = 1
    NO.ATagTitle.field = subtitle // title
    NO.allWrap = <div class="side-menu">|</div>
    ACT = 1 
    ACT < .NO 
    ACT.allWrap = <div class="side-menu side-menu-active">|</div> 
  }
} 

[treeLevel = 4]
  lib.rightmenu > 
  lib.rightmenu = COA
  lib.rightmenu {
    20 = TEXT
    20 {
      data = leveltitle : -2
      insertData = 1
      #typolink.parameter.data = leveluid : -3
      wrap = <div class="sport-departament">|</div>
    } 
  30 = HMENU
  30.entryLevel = 3
  30.wrap = <nav class="left-side-menu right-menu">|</nav>
  30.1 = TMENU
  30.1 {
    noBlur = 1
    NO = 1
    NO.stdWrap.field = nav_title
    NO.stdWrap.ifEmpty.field = title
    NO.stdWrap.htmlSpecialChars = 1
    NO.ATagTitle.field = subtitle // title
    NO.allWrap = <div class="side-menu">|</div>
    ACT = 1 
    ACT < .NO 
    ACT.allWrap = <div class="side-menu side-menu-active">|</div> 
  }
} 
[global]   

[treeLevel = 5]
  lib.rightmenu > 
  lib.rightmenu = COA
  lib.rightmenu {
    20 = TEXT
    20 {
      data = leveltitle : -3
      insertData = 1
      #typolink.parameter.data = leveluid : -3
      wrap = <div class="sport-departament">|</div>
    } 
  30 = HMENU
  30.entryLevel = 3
  30.wrap = <nav class="left-side-menu right-menu">|</nav>
  30.1 = TMENU
  30.1 {
    noBlur = 1
    NO = 1
    NO.stdWrap.field = nav_title
    NO.stdWrap.ifEmpty.field = title
    NO.stdWrap.htmlSpecialChars = 1
    NO.ATagTitle.field = subtitle // title
    NO.allWrap = <div class="side-menu">|</div>
    ACT = 1 
    ACT < .NO 
    ACT.allWrap = <div class="side-menu side-menu-active">|</div> 
  }
} 
[global]  


################
# Breadcrump
################
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <div class="breadcrumb"><ul>|</ul></div>
  10 = HMENU
  10.includeNotInMenu = 1
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 1
        }
      }
    }
  }
  
[treeLevel = 5]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <div class="breadcrumb"><ul>|</ul></div>
  10 = HMENU
  10.includeNotInMenu = 1
  10 {
    special = rootline
    special.range =  1 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 1
        }
      }
    }
  }
[global]  

#[globalVar = GP:tx_news_pi1|action=detail]
[globalVar = TSFE:id = 19]||[globalVar = TSFE:id = 34]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <div class="breadcrumb"><ul>|</ul></div>
  10 = HMENU
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 0
              }
            }
          }

  # Add news title if on single view
    20 = RECORDS
    20 {
      if.isTrue.data = GP:tx_news_pi1|news
        dontCheckPid = 1
        tables = tx_news_domain_model_news
        source.data = GP:tx_news_pi1|news
        source.intval = 1
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news {
          field = title
          htmlSpecialChars = 1
        }
      wrap =  <li>|</li>
      }
  }
[global]

#[globalVar = TSFE:id = 84]
[globalVar = GP:tx_spbkorstuff_spbkorstuff|stuff > 0]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <div class="breadcrumb"><ul>|</ul></div>
  10 = HMENU
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 0
              }
            }
          }

    20 = RECORDS
    20 {
      if.isTrue.data = GP:tx_spbkorstuff_spbkorstuff|stuff
        dontCheckPid = 1
        tables = tx_spbkorstuff_domain_model_stuff
        source.data = GP:tx_spbkorstuff_spbkorstuff|stuff
        source.intval = 1
        conf.tx_spbkorstuff_domain_model_stuff = TEXT
        conf.tx_spbkorstuff_domain_model_stuff {
          field = last_name
          htmlSpecialChars = 1
        }
      wrap = <li>|
      }
    25 = TEXT
    25.value = &nbsp;  
    30 = RECORDS
    30 {
      if.isTrue.data = GP:tx_spbkorstuff_spbkorstuff|stuff
        dontCheckPid = 1
        tables = tx_spbkorstuff_domain_model_stuff
        source.data = GP:tx_spbkorstuff_spbkorstuff|stuff
        source.intval = 1
        conf.tx_spbkorstuff_domain_model_stuff = TEXT
        conf.tx_spbkorstuff_domain_model_stuff {
          field = name
          htmlSpecialChars = 1
        }
      wrap = |</li>
      }      
      
  }
[global]

[globalVar = GP:tx_spbkorvideo_spbkorvideo|action=show]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <div class="breadcrumb"><ul>|</ul></div>
  10 = HMENU
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 0
              }
            }
          }

    20 = RECORDS
    20 {
      if.isTrue.data = GP:tx_spbkorvideo_spbkorvideo|item
        dontCheckPid = 1
        tables = tx_spbkorvideo_domain_model_item
        source.data = GP:tx_spbkorvideo_spbkorvideo|item
        source.intval = 1
        conf.tx_spbkorvideo_domain_model_item = TEXT
        conf.tx_spbkorvideo_domain_model_item {
          field = title
          htmlSpecialChars = 1
        }
      wrap = <li>|</li>
      }      
  }
[global]


[globalVar = TSFE:id = 2]
  lib.breadcrumb >
[global]

lib.normalLink = TEXT 
lib.normalLink { 
  value = Обычная версия сайта
  #typolink.parameter.data = page:uid
  #typolink.additionalParams.insertData=1
  #typolink.additionalParams=&type=0
  
  stdWrap.typolink.parameter = 1
  stdWrap.wrap = |  
}
lib.normalLink >
