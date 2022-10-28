# C Syntax for [Nova][Nova]

More information about the plugin can be found in the
`C.novaextension` directory.

## Building

If you want to build this, you will need the tree-sitter-c
repository, and will need to build the parser using the
supplied compile.sh and Makefile.

1. git clone https://github.com/tree-sitter/tree-sitter-c
2. ./compile.sh ./tree-sitter-c /Applications/Nova.app
3. cp build/*.dylib ./C.novaextension/Syntaxes

[Nova]: https://nova.app "Nova website"
[TreeSitter]: https://tree-sitter.github.io