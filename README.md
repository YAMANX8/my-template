# THIS IS TEMPLATE
## REMEMBER
- do not forget to use 'clamp' for the variable things
- so, this is the best way to make the responsive typography ' font-size: clamp(min_size, prefered_size, max_size); '
- this is the best way to make the width of an element responsive ' width: min(min_width - padding, max_width); '
- to use the breakpoint util in sass folder you should use the ' @use ' at the top of the file, after that we should use ' @include "the name space followed by dot followed by mixin name"("here should goes the size selected") {"here should goes the content"} '
- like, @include u.breakpoint(large) {grid-template-columns: 2fr 1fr;}
- don't use pixles, just use em for breakpoints, and rem for other things