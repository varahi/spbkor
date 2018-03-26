lib.logo = COA
lib.logo {
  wrap = <div class="logo">|</div>
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/Images/logo.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 128
    file.height = 130
    stdWrap.typolink.parameter = 1
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
}

lib.gerb = COA
lib.gerb {
  wrap = <div class="gerb">|</div>
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/Images/gerb.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 122
    file.height = 131
    stdWrap.typolink.parameter = 1
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
}

lib.slogan = TEXT
lib.slogan {
  wrap = <div class="slogan">|</div>
  value = {$page.header.slogan}
}

lib.phone = TEXT
lib.phone {
  wrap = <div class="phone">|</div>
  value = {$page.header.phone}
}

lib.search = TEXT
lib.search.wrap = <div class="search">|</div>
lib.search.value (
        <form action="search/" method="post" class="search">
          <input name="tx_indexedsearch[sword]" type="text" class="txt" value="Поиск по сайту" size="21" onblur="if(this.value=='') this.value='Поиск по сайту';" onfocus="if(this.value=='Поиск по сайту') this.value='';" />
          <input name="tx_indexedsearch[_sections]" value="0" type="hidden" />
          <input name="tx_indexedsearch[pointer]" value="0" type="hidden" />
          <input name="tx_indexedsearch[ext]" value="0" type="hidden" />
          <input class="submit" type="image" value="Найти">
        </form>
)


lib.lastNews = USER
lib.lastNews {
  userFunc = tx_extbase_core_bootstrap->run
  extensionName = News
  pluginName = Pi1

  switchableControllerActions {
        News {
          1 = list
        }
  }
  settings < plugin.tx_news.settings
  settings {
  //categories = 49
    templateLayout = 1
    limit = 3
    detailPid = 34
    overrideFlexformSettingsIfEmpty := addToList(detailPid)
    startingpoint = 35
    cropMaxCharacters = 100
  }
}

lib.banners >
lib.banners = CONTENT
lib.banners {
	wrap = <div class="banners">|</div>
    table = tt_content
      select {
      pidInList = 38
      orderBy = sorting
      max = 1
    }
}

lib.footerBlock >
lib.footerBlock = CONTENT
lib.footerBlock {
	wrap = <div class="footer-block">|</div>
    table = tt_content
      select {
      pidInList = 102
      orderBy = sorting
      max = 1
    }
}

lib.vkGroup >
lib.vkGroup = CONTENT
lib.vkGroup {
  wrap = <div class="vk-group">|</div>
    table = tt_content
      select {
      pidInList = 88
      orderBy = sorting
      max = 1
    }
}


lib.loginLinks >
lib.loginLinks = COA
lib.loginLinks {
  wrap = <div class="login-links">|</div>
  10 = CONTENT
  10 {
    wrap = <span class="auth"><span id="login_btn"><a>{$page.header.login}</a></span></span><div class="form" id="auth_form_frame"><div class="close_btn"></div>|</div>
    table = tt_content
      select {
      pidInList = 104
      orderBy = sorting
      max = 1
    }    
  }
  20 = TEXT
  20 {
    value = {$page.header.registerTitle}
    stdWrap.typolink.parameter = {$page.header.registerLink}
    stdWrap.typolink.title = {$page.header.registerTitle} 
  }
}

[usergroup = *]
lib.loginLinks >
lib.loginLinks = COA
lib.loginLinks {
  wrap = <div class="login-links">|</div>
  5 = TEXT
  5.data = TSFE:fe_user|user|username
  5.wrap = <div class="logged-user">Вы вошли как :&nbsp;|</div>
  5.required = 1
  
  10 = TEXT
  10.value = {$page.header.profileText}
  10.stdWrap.typolink.parameter = {$page.header.profileLink}
  10.stdWrap.wrap = <span class="auth"><span id="login_btn">|</span></span>
  #11 = TEXT
  #11.value = /
  20 = TEXT
  20 {
    wrap = |
    value= Logout
    lang.ru = {$page.header.logout}
    typolink.parameter = 104
    #typolink.parameter.data = page:uid
    typolink.additionalParams.cObject = COA
    typolink.additionalParams.cObject {
      10 = TEXT
      10.value = &logintype=logout
      20 = TEXT
      20.data = GP : L
      20.wrap = &L=|
      20.required = 1
    }
  }
}
[global]
