# /***************************
#  *    Default TS for
#  *    EXT chgallery
#  *    Georg Ringer
#  * http://www.cyberhouse.at/
#  ***************************/ 

# userFunction to replace spaces with %20 to avoid breaking lightboxes 
includeLibs.chgallery = EXT:chgallery/lib/replaceSpaces.php

plugin.tx_chgallery_pi1 {
  # general settings
  _DEFAULT_PI_VARS.single = 1
  
  fileTypes = jpg,gif,png
  #templateFile = EXT:chgallery/res/template.html
  #pathToCSS =  EXT:chgallery/res/gallery.css
  templateFile >
  pathToCSS >
  templateFile = {$template_path}/Resources/Private/Templates/Ext/tx_chgallery/template.html
  pathToCSS =  {$template_path}/Resources/Public/Styles/gallery.css
  ajaxScript = EXT:chgallery/res/js/ajax.js
  pathToMootools = EXT:chgallery/res/js/mootools.js
  pagebrowser = 18
  ajax = 0
  useAnchor = 1
  categoryOrder = path
  categoryOrderAscDesc = asc
  exif = 1
  ratings = 1
  ratings {
    # config of ratings to override default settings of the ext
  }


  #################
  #### SINGLE VIEW 
  #################
  single {
    pass = 1
  
    image {
      file.maxW = 554
    }

    download {
      labelStdWrap.field= tx_chgalleryTitle // tx_chgalleryFilename
      icon = 1
      icon_link = 1
      icon {
        noTrimWrap = | | |
      }
      size = 0
      size {
        noTrimWrap = | (| Bytes) |
        bytes = 1
        bytes.labels =  | Kb| Mb| Gb
      }
      jumpurl = 1
      jumpurl.secure = 1
    }
        
    exif_size {
      bytes = 1
      bytes.labels =  | Kb| Mb| Gb
    }
    exif_time {
      strftime= %d.%m.%Y  %H:%m
    }

  }


  #################
  #### CATEGORY VIEW 
  #################
  category {
    image {
      file.maxW >
      file.maxH >
      #file.maxW = 250
      #file.maxH = 167 
      file.width = 193c
      file.height = 129c
    }
    
    link {
      useCacheHash = 1
    }
    
    date {
      strftime = %d.%m.%Y  %H:%m
    }
    
  }

  #################
  #### GALLERY VIEW 
  #################
  gallery <.single
  gallery {
    excludeFirstImage = 0
    
    dir_description {
      required = 1  
      stdWrap.wrap = <br />|<br />
    }
    dir_title {
      required = 1
      stdWrap.wrap = <h1>|</h1>
    }
    description {
      ifEmpty = &nbsp;
    }
    image {
      file {
        #maxW = 139
        #maxH = 110     
      }
    }

    renderAllLinks = 0
    renderAllLinks {
      title.field= tx_chgalleryTitle
      
      parameter.override.cObject = IMG_RESOURCE
      parameter.override.cObject {
        file.import.field = tx_chgalleryImageLong
        file.maxW = 800
        file.maxH = 600
      }

      ATagParams = rel="lightbox"
      ATagParams.override = rel="lightbox[presentlb{field:uid}]"
      ATagParams.insertData = 1
    }
  }
  
  cooliris = 
  cooliris {
    link {
      useCacheHash = 1
      returnLast = url
      additionalParams = &type=9713
      prefix = 
    }
    showAllGalleriesInCategory = 0
    logo = 
    prefixUrl = 1
  }


  

  
}

## Set up page/type number:
export_chgallery >
export_chgallery = PAGE
export_chgallery {
  typeNum=9712
  config.disableAllHeaderCode = 1
  config.metaCharset = utf-8
  config.additionalHeaders = Content-Type:text/xml;charset=utf-8
  config.xhtml_cleaning = 0
  config.admPanel = 0
  config.sendNoCacheHeaders = 1
  config.no_cache = 1
  

  ## Inserting the USER cObject for XML rendering
  10 = CONTENT
  10 {
    table = tt_content
    select {
      pidInList = this   
      max = 1
      andWhere = list_type='chgallery_pi1'
    }

    renderObj = COA
    renderObj {
      10 < plugin.tx_chgallery_pi1
      10.userFunc = tx_chgallery_pi1->xmlFunc
    }
  }  
}

## Set up page/type number:
chgallerycooliris >
chgallerycooliris = PAGE
chgallerycooliris {
  typeNum=9713
  config.disableAllHeaderCode = 1
  config.metaCharset = utf-8
  config.additionalHeaders = Content-Type:text/xml;charset=utf-8
  config.xhtml_cleaning = 0
  config.admPanel = 0
  config.sendCacheHeaders = 1
  config.sendNoCacheHeaders = 1

  ## Inserting the USER cObject for XML rendering
  10 = RECORDS
  10 {
    tables = tt_content
    source.data = GP:tx_chgallery_pi1|ceid
    
    conf.tt_content < plugin.tx_chgallery_pi1
    conf.tt_content.userFunc = tx_chgallery_pi1->cooliris
  }  
}




# TS Code

plugin.tx_chgallery_pi1 {
        gallery.image {
                file {
                        #maxW = 139
                        #maxH = 110
                        width = 193c
                        height = 129c
                }

                imageLinkWrap  = 1
                imageLinkWrap {
                        enable = 1
                        typolink {
                                title.field= tx_chgalleryTitle

                                parameter.override.cObject = IMG_RESOURCE
                                parameter.override.cObject.file.import.data = TSFE:lastImageInfo|origFile
                                parameter.override.cObject.file.maxW = 800
                                parameter.override.cObject.file.maxH = 600

                                # used lightbox is pmkslimbox
                                ATagParams = class="magnificpopup"
                                #ATagParams.override = data-rel = "cbox3
                                ATagParams.insertData = 1


                        }
                }
        }
}
plugin.tx_chgallery_pi1.single.image < plugin.tx_chgallery_pi1.gallery.image
