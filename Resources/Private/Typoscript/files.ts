//
//	Project:	
//	Version:	1.0.0
//	Date:
//	Auhor:		
// 
// Done with SweeTS - delicious TypoScript development. 
// http://typo3.area42.de
//

# *****************
# CType: uploads
# *****************
tt_content.uploads = COA
tt_content.uploads {
  wrap = <div class="file-list">|</div>
	10 = < lib.stdheader

	20 = FILES
	20 {
		# get from file references:
		references {
			table = tt_content
			fieldName = media
		}

		collections.field = file_collections

		# get from path (backwards compatibility, contains strings like "fileadmin/user_uploads/")
		folders.field = select_key

		# render the files
		renderObj = COA
		renderObj {
			10 = IMAGE
			10 {
				file.import.data = file:current:originalUid // file:current:uid
				file.width = 17
				file.height =23
				file.transparentBackground = 1
				stdWrap {
					if.value = 1
					if.isGreaterThan.field = layout

					typolink {
						parameter.data = file:current:originalUid // file:current:uid
						parameter.wrap = file:|
						target < lib.parseTarget
						target =
						target.override = {$styles.content.uploads.target}
						removePrependedNumbers = 1

						/*
						jumpurl = {$styles.content.uploads.jumpurl}
						jumpurl {
							secure = {$styles.content.uploads.jumpurl_secure}
							secure.mimeTypes = {$styles.content.uploads.jumpurl_secure_mimeTypes}
						}
						*/
					}
				}
			}

			# icon
			15 = IMAGE
			15 {
				#file.import = typo3/gfx/fileicons/
        file.import = fileadmin/spbcor/templates/Resources/Public/fileicons/
				file.import.data = file:current:extension
				file.import.case = lower
				file.import.wrap = |.gif
				file.transparentBackground = 1
        file.width = 17
        file.height = 23
				stdWrap {
					if {
						value = 0
						isGreaterThan.field = layout

						# only show the icon if we don't have a thumbnail:
						isFalse.cObject = IMG_RESOURCE
						isFalse.cObject.file < tt_content.uploads.20.renderObj.10.file
						isFalse.cObject.stdWrap.if < tt_content.uploads.20.renderObj.10.stdWrap.if
					}

					typolink < tt_content.uploads.20.renderObj.10.stdWrap.typolink
				}
			}

			# filename
			20 = TEXT
			20 {
				#data = file:current:name
				data = file:current:description
				htmlSpecialChars = 1
				required = 1

				replacement {
					# equivalent to former useSpacesInLinkText = 0; remove using > to disable it
					10 {
 						search = _
 						replace.char = 32
					}

					# equivalent to former stripFileExtensionFromLinkText = 0; move "_20" to "20" to enable it. Disabled by default.
					_20 {
						search = /(.*)(\..*)/
						replace = \1
						useRegExp = 1
					}
				}

				typolink < tt_content.uploads.20.renderObj.10.stdWrap.typolink

				wrap = <span class="csc-uploads-fileName">|</span>
			}

			# description
			/*
			30 = TEXT
			30 {
				data = file:current:description
				htmlSpecialChars = 1
				wrap = <span class="csc-uploads-description">|</span>

				required = 1
			}
			*/
			30 >

			# file size
			40 = TEXT
			40 {
				if.isTrue.field = filelink_size
				data = file:current:size
				wrap = <span class="csc-uploads-fileSize">(|)</span>
				bytes = 1
				bytes.labels = {$styles.content.uploads.filesizeBytesLabels}
			}

			# wrap of each listed file with odd/even class
			wrap.cObject = COA
			wrap.cObject {
				10 = LOAD_REGISTER
				10 {
					oddEvenClass = li-odd li-first |*| li-even || li-odd
					elementClass = csc-uploads-element csc-uploads-element-{register:fileExtension}
					elementClass.insertData = 1
				}

				20 = TEXT
				20 {
					value = <p class="file {register:oddEvenClass} {register:elementClass}">|</p>
					insertData = 1
				}
				30 = RESTORE_REGISTER
			}
		}

		# wrap around whole content element with <ul> and editIcons
		stdWrap {
			editIcons = tt_content: media, layout [table_bgColor|table_border|table_cellspacing|table_cellpadding], filelink_size
			editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.filelist
			prefixComment = 2 | File list:
			dataWrap = |
		}
	}
}
