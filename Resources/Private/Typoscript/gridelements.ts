tt_content.gridelements_pi1.20.10.setup {
  # Feedback 1 column
  1 < lib.gridelements.defaultGridSetup
  1 {
    wrap = <div class="two-columns-66-33">|</div><div class="clear"></div>
    innerWrap = |
    columns {
      # colPos ID
      0 < .default
      0 {
        renderObj.10 {
          # set register values
          #maxImageWidth = 666
          #maxImageWidthInText = 333
        }
        wrap = <div class="left-column">|</div>
        innerWrap =  |
      }
      
       # colPos ID
      1 < .default
      1 {
        renderObj.10 {
          # set register values
          #maxImageWidth = 666
          #maxImageWidthInText = 333
        }
        wrap = <div class="right-column">|</div>
        innerWrap =  |
      }     
    } # end columns
  } # end grid 1

}
