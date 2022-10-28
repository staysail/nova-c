# C Syntax for [Nova][1]

**C** provides syntax highlighting and folding for [**C**][3] making use of [Tree-sitter][2].

This supports the latest official (2018) edition of the C language.

![](https://raw.githubusercontent.com/staysail/nova-c/main/screenshot.png)

This provides basic syntax coverage, including rich highlighting and folding
support for most common constructs in C.

It does not support symbolication for completions or indexing.  A better solution
for that is to the the [ClangD Language Server][4], which makes an excellent companion
for this extension.

## Future Directions

We might possibly add support for symbol identificaiton and indexing, which while
inferior to a full LSP client would allow this extension to work without any extra
privileges, and with no special configuration support requirements.

Better support for preprocessor folding would be nice.

Better support for C-specific highlighting would be good, but Nova first needs to
add richer captures for highlighting.  (This is a general problem for C family
languages.)  For example, we might like to be able to call out `#include` directives
more clearly, and separate standard ones from local ones.  Likewise, better support
for highlighting of types, such as primitive types in the language would be nice.
This extension currently does the best it can within the limitations of the captures
provided by Nova.

[1]: https://nova.app "Nova website"
[2]: https://tree-sitter.github.io "Tree-sitter website"
[3]: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2310.pdf "ISO C 2018"
[4]: https://extensions.panic.com/extensions/au.id.benbeshara/au.id.benbeshara.cplusplus/ "ClangD Language Server Extension for Nova"
