lib.topMenu >
lib.topMenu = HMENU
#lib.topMenu.special = list
#lib.topMenu.special.value = 1,4,5,6,7,8,9
lib.topMenu.maxItems = 6
lib.topMenu.excludeUidList = 2
lib.topMenu  {
  1 = TMENU
  1 {
    wrap = <nav class="topmenu"><ul>|</ul></nav>
    expAll = 1
    NO.allWrap.insertData = 1
    NO.allWrap = <li class="first"><a href="index.php?id=2&type=97">Главная</a></li><li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
    NO.ATagTitle.field = description // title

    ACT < .NO
    ACT = 1
    ACT.allWrap = <li class="first"><a href="index.php?id=2&type=97">Главная</a></li><li class="first active">|</li>|*|<li class="active">|</li>|*|<li class="last active">|</li>
    #ACT.ATagParams = class="active"
  }
}

[globalVar = TSFE:id = 2]
lib.topMenu >
lib.topMenu = HMENU
#lib.topMenu.special = list
#lib.topMenu.special.value = 1,4,5,6,7,8,9
lib.topMenu.maxItems = 6
lib.topMenu.excludeUidList = 2
lib.topMenu  {
  1 = TMENU
  1 {
    wrap = <nav class="topmenu"><ul>|</ul></nav>
    expAll = 1
    NO.allWrap.insertData = 1
    NO.allWrap = <li class="first active"><a href="index.php?id=2&type=97">Главная</a></li><li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
    NO.ATagTitle.field = description // title

    ACT < .NO
    ACT = 1
    ACT.allWrap = <li class="first active"><a href="index.php?id=2&type=97">Главная</a></li><li class="first active">|</li>|*|<li class="active">|</li>|*|<li class="last active">|</li>
    #ACT.ATagParams = class="active"
  }
}
[global]
