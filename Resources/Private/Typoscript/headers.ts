// CSS Header
page.headerData.10 >
page.headerData.10 = TEXT
page.headerData.10.value ( 
  <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  <link rel="stylesheet" type="text/css" href="{$template_path}/Resources/Public/Styles/style.css">  
  <link rel="stylesheet" type="text/css" href="{$template_path}/Resources/Public/Styles/content.css">  
  <link rel="stylesheet" type="text/css" href="{$template_path}/Resources/Public/fonts/styles.css">  
)

page.headerData.20 >
page.headerData.20 = TEXT
page.headerData.20.value ( 
	<script src="{$template_path}/Resources/Public/Javascript/main.js" type="text/javascript"></script>	 
)

page.headerData.30 >
page.headerData.30 = TEXT
page.headerData.30.value ( 
	<!--[if IE]><link rel="stylesheet" type="text/css" href="{$template_path}/Resources/Public/Styles/ie.css"><![endif]-->	 
)

page.headerData.20 >
page.includeJSFooter.file11 = {$template_path}/Resources/Public/Javascript/main.js

// CSS Header
[PIDinRootline = 42]
page.headerData.100 >
page.headerData.100 = TEXT
page.headerData.100.value ( 
  <style type="text/css">
    ul.dmenu-65 {
      display: block;
    }
  </style>
)
[global]

[PIDinRootline = 8]
page.headerData.100 >
page.headerData.100 = TEXT
page.headerData.100.value ( 
  <style type="text/css">
    ul.dmenu-32 {
      display: block;
    }
  </style>
)
[global]

[browser = chrome]
page.headerData.11 >
page.headerData.11 = TEXT
page.headerData.11.value (   
  <link rel="stylesheet" type="text/css" href="{$template_path}/Resources/Public/Styles/chrome.css">   
)
[global]