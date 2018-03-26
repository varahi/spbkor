config {
  doctype = html5
  xmlprologue = none
  metaCharset = utf8
  renderCharset = utf-8
  admPanel = 0
  spamProtectEmailAddresses = 0
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
  baseURL = http://{$domain}/
  #absRefPrefix = http://{$domain}/
  sys_language_mode = content_fallback
  pageTitleFirst = 1
  removeDefaultJS = 1
# Deafult language
  sys_language_uid = 0
  language = ru
  locale_all = ru_RU.UTF-8
  htmlTag_langKey  = ru
  sys_language_uid = 0
  linkVars = L,type,cHash
  uniqueLinkVars = 1
  prefixLocalAnchors = all
  #prefixLocalAnchors = 0
}

page.config.headerComment (
  Devcompany http://devcompany.ru/
  Dmitry Vasiliev dmitry@typo3.ru.net
  ___________________________________
)

page.meta {
  revisit             = 1
  revisit-after       = 7 days
  imagetoolbar        = no
  keywords.field      = keywords
  keywords.ifEmpty    = {$page.meta.keywords}
  description.field   = description
  description.ifEmpty = {$page.meta.description}  
  #abstract.field      = abstract
  #abstract.ifEmpty    = {$page.meta.abstract}  
  #page-topic.field    = title
  #page-topic.ifEmpty  = {$page.meta.topic} 
  local_all           = ru_RU
  language            = ru
  #author              = {$page.meta.autor}  
  robots              = index,follow
  #robots               = noindex,nofollow
  #viewport             = width=device-width, initial-scale=1.0
  #MSSmartTagsPreventParsing = true
}

tt_content.stdWrap.innerWrap.cObject {
  25 = TEXT
  25.value = <div class="contacts">|</div>
  26 = TEXT
  26.value = <div class="img-border">|</div>
  27 = TEXT
  27.value = <div class="person">|</div>    
  28 = TEXT
  28.value = <div class="img-border-1px">|</div>
}

lib.stdheader.10.setCurrent.htmlSpecialChars = 0 

plugin.tx_indexedsearch {
  #templateFile = {$template_path}/Resources/Private/Templates/Ext/indexed_search/template.html
  show {
    rules = 0
    advancedSearchLink = 0
  }
  blind {
    freeIndexUid = 0
  }
}
plugin.tx_indexedsearch.search.rootPidList=1
page.config.index_enable = 1
page.config.index_externals = 0


// Page configs
page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
  file = {$template_path}/Resources/Private/Templates/Page/Index.html
  partialRootPath = {$template_path}/Resources/Private/Partials/
  layoutRootPath = {$template_path}/Resources/Private/Layouts/
  variables {
    content < styles.content.get
    
    content_right < styles.content.get
    content_right.select.where = colPos = 1
    
    content_left < styles.content.get
    content_left.select.where = colPos = 2   
    
    content_border < styles.content.get
    content_border.select.where = colPos = 3      
  }
}

page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
  key.data = levelfield:-1, backend_layout_next_level, slide
  key.override.field = backend_layout
  
  default = TEXT
  default.value = {$template_path}/Resources/Private/Templates/Page/Index.html
  
  # Main page
  1 = TEXT
  1.value  = {$template_path}/Resources/Private/Templates/Page/Index.html 
  
  # Alt Page with right column
  2 = TEXT
  2.value  = {$template_path}/Resources/Private/Templates/Page/Inner.html            
}

#tt_content.image.20.caption.1.stdWrap.typolink.parameter.data = file:current:link
#tt_content.image.20.default.caption.1.stdWrap.typolink.parameter.data = file:current:link

# Adds link to image caption, if there is one
tt_content.image.20.caption.1.typolink.parameter.field = image_link
tt_content.image.20.caption.1.typolink.parameter.listNum.stdWrap.data = register:IMAGE_NUM_CURRENT

tt_content.image.20.caption.1.stdWrap {
	typolink = 1
	typolink.parameter.field = image_link
	typolink.parameter.listNum.stdWrap.data = register:IMAGE_NUM_CURRENT
}

tt_content.image.20.caption.1.stdWrap.typolink < tt_content.image.20.1.imageLinkWrap.typolink
