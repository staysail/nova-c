# C Syntax for [Nova][1]

This extension provides syntax support for [**C**][2], making use of [Tree-sitter][3].
It should be lightning-quick, thanks to Tree-sitter.

> 🛑 _Don't install me! Install the [**C-Dragon**][4] extension instead!_ 🛑

This supports the latest official (2018) edition of the C language.

Editor features supported are syntax highlighting, folding, and basic indentation.

![](https://raw.githubusercontent.com/staysail/nova-c/main/screenshot.png)

## Deprecated

This extension has been superseded by the much more complete
[C-Dragon][4] extension. We recommend updating to
that version, and to uninstall this one.

It's highly unlikely that more improvements will be made to this
extension.

**C-Dragon** supports both C and C++ (and Object C is planned), has richer
Tree-sitter queries, and supports additional capabilities via the _clangd_ language server.
It presents a far more complete development experience.

[1]: https://nova.app "Nova website"
[2]: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2310.pdf "ISO C 2018"
[3]: https://tree-sitter.github.io "Tree-sitter website"
[4]: https://extensions.panic.com/extensions/tech.staysail/tech.staysail.ClangD/
