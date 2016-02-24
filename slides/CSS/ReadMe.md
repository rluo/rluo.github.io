#Reveal
Border on slides **.reveal .slides**; talk points use **aside.notes**
	
#Blocks
Theorem style **div.thm**

Quotes **blcokquote**
	
# Images
Static images with borders **img**
	
fragment images with no borders **img.fragment**

Images without border	**img.noborder**


# Citation and Notes 
Notes, small fonts **note**
	
citation 	**cite**


# Layout
Two columns classes **.twocol**
	
Three column class 	**.threecol** 
	

# Textstyle
highlight **highlight**
	
emphasis 	**emph**
	
small 	**small**
	
medium **medium**
	
sup and sub as well

# Image and Text
Use *inline-block* and *vertical-align:middle* to put text and images size by size

Or use *div* >  *span* where div has 

	div {
    display: table;
	}

and img and span have 

	img {
	    vertical-align: middle;
	    display: table-cell;
	}
	span {
	    vertical-align: middle;
	    display: table-cell;
	}

# Space
Vertical space use *br* and horizontal space use

	<span style="display:inline-block; width: 30px;"></span>
	
