# Special Page
special = PAGE 
special {
	typeNum = 97
	config {
  	#no_cache = 1
    #disableAllHeaderCode = 1	
	}
}

#special.stylesheet = {$template_path}/Resources/Public/Styles/special.css
special.10 = FLUIDTEMPLATE
special.10 {     
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

special.10.file.stdWrap.cObject = CASE
special.10.file.stdWrap.cObject {
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

special.includeCSS {
	file_css1 = {$template_path}/Resources/Public/fonts/styles.css
	file_css2 = typo3conf/ext/spbkorslider/Resources/Public/Css/slider.css
	file_css3 = typo3conf/ext/spbkorstuff/Resources/Public/Css/stuff.css
	#file_css4 = typo3conf/ext/spbkorbanners/Resources/Public/Css/banners.css
	file_css10 = {$template_path}/Resources/Public/Styles/special.css
	file_css100 = {$template_path}/Resources/Public/Styles/s-elements.css
}
special.includeJS {
	#file_js1 = typo3conf/ext/spbkorslider/Resources/Public/Javascript/jquery.cycle2.min.js
	#file_js2 = typo3conf/ext/spbkorbanners/Resources/Public/Javascript/jquery.jcarousel.min.js
	#file_js3 = typo3conf/ext/spbkorbanners/Resources/Public/Javascript/jcarousel.basic.js
	file_js4 = fileadmin/spbcor/templates/Resources/Public/Javascript/jquery.cookie.js
  file_js5 = fileadmin/spbcor/templates/Resources/Public/Javascript/jquery.textresizer.js
	file_js10 = fileadmin/spbcor/templates/Resources/Public/Javascript/main.js
	file_js11 = fileadmin/spbcor/templates/Resources/Public/Javascript/special.js
}

#[globalVar = GP:type=97]
#  <INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/spbcor/templates/Resources/Private/Typoscript/special_navigation.ts">
#[global]

/*
special.footerData.20 >
special.footerData.20 = TEXT
special.footerData.20.value ( 
    <script>
        $(document).ready(function () {
            $("#text-resizer-controls li a").textresizer({
                target: "#content"
            });
        });
    </script>
)
*/
/*
 PRINTVIEW = TEXT 
 PRINTVIEW { 
     value = Druckansicht
     typolink.parameter.data = page:uid
     typolink.additionalParams.insertData=1
     typolink.additionalParams =&type=98
 
 }

*/