
TCEFORM.tt_content.section_frame.removeItems = 1,5,6,10,11,12,20,21,66
TCEFORM.tt_content.section_frame.addItems.25 = Contacts
TCEFORM.tt_content.section_frame.addItems.26 = Image Border 5px
TCEFORM.tt_content.section_frame.addItems.27 = Person
TCEFORM.tt_content.section_frame.addItems.28 = Image Border 1px

#RTE.default.contentCSS = fileadmin/alpina-nerud.ru/templates/Resources/Public/Styles/rte.css
#RTE.classes {           
#    yellow-text {
#    name = Dark Yellow Text
#    value = color: #000000;
#   }    
#}


/*
TCEFORM.tt_content.header_layout {
    altLabels {
        1 = h1
        2 = h2
        3 = h3
        4 = h4
        5 = h5
    }
 
    addItems {
        10 = Заголовок пшеница (h4)
        20 = Цукрові буряки (h4)
        21 = Картопля (h4)
        22 = Кукурудза (h4)
        23 = Ріпак (h4)
        24 = Ячмінь (h4)
        25 = Гречка (h4)
    }
}
*/

RTE.default.proc.denyTags = font,dl,dt,dd,style
RTE.default {

#showButtons = *
showButtons (
        class, blockstylelabel, blockstyle, textstylelabel, textstyle,
        formatblock, bold, italic, subscript, superscript,
        orderedlist, unorderedlist, outdent, indent, textindicator,
        insertcharacter, link, table, findreplace, chMode, removeformat, undo, redo, about,
        toggleborders, tableproperties,
        rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit,
        columninsertbefore, columninsertafter, columndelete, columnsplit,
        cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge,
        fontstyle, formatblock, fontsize, bgcolor, textcolor, image
)
    enableWordClean = 1
    removeTrailingBR = 1
    removeComments = 1
    removeTags = center, o:p, sdfield, font, font-family, dt, dl, dd,style
    removeTagsAndContents = style,script


  proc.allowedClasses (
  external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail,
  align-left, align-center, align-right, align-justify,
	csc-frame-frame1, csc-frame-frame2,
  component-items, action-items,
  component-items-ordered, action-items-ordered,
  important, name-of-person, detail, indent-bot, bold, yellow-text,
  indent
  )
  
  buttons.blockstyle.tags.table.allowedClasses = csc-frame-frame1, csc-frame-frame2
  buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
  buttons.textstyle.tags.span.allowedClasses = important, name-of-person, detail, yellow-text 
  
	inlineStyle.ul (
		ul.component-items { color: #186900; list-style-type: circle; }
		ul.action-items { color: #8A0020; list-style-image: url(img/red_arrow_bullet.gif); }
	)
  inlineStyle.ol (
    ol.component-items-ordered { color: #10007B; list-style-type: lower-roman; }
    ol.action-items-ordered { color: #8A0020; list-style-type: lower-greek; }
    ol.indent-bot { color: #8A0020; list-style-image: url(img/red_arrow_bullet.gif); }
  )	
	inlineStyle.inline-text (
		span.important { color: #8A0020; }
		span.name-of-person { color: #10007B; }
		span.detail { color: #186900; }
    span.yellow-text { color: #186900; }
	)
	classesParagraph (
		align-left, align-center, align-right,
		csc-frame-frame1, csc-frame-frame2
	)
	classesTable = csc-frame-frame1, csc-frame-frame2
	classesTD = align-left, align-center, align-right
	classesLinks = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
	classesCharacter = important, name-of-person, detail, bold

		## Configuration of the anchor accessibility feature (htmlArea RTE only)
		## These classes should also be in the list of allowedClasses.
	classesAnchor = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
	classesAnchor.default {
		page = internal-link
		url = external-link-new-window
		file = download
		mail = mail
	}

  HTMLparser_rte {
    removeTags >
    removeTags = font,font-family,dl,dt,dd,style
    denyTags >
    denyTags = font,dl,dt,dd,style
    denyTags  < RTE.default.proc.denyTags
    keepNonMatchedTags = 1
  }
  HTMLparser_db {
    removeTags >
    removeTags = font,font-family,dl,dt,dd,style
    denyTags >
    denyTags = font,dl,dt,dd,style
    denyTags  < RTE.default.proc.denyTags
    keepNonMatchedTags = 1
  }
  
}

#options.pageTree.showPageIdWithTitle=1

// News Templates
tx_news.templateLayouts {
        1 = Последние новости на главной
        2 = Список новостей
}
 