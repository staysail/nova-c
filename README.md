# C Syntax for Nova

**C** provides syntax highlighting and autocompletion for **C** making use of Tree-Sitter.

This supports the C11 variant of the language.

![Screenshot](./images/extension/C.png)
This is just the basics, and for full functionality should
be paired with the clangd language server.


## Building

If you want to build this, you will need the tree-sitter-c
repository, and will need to build the parser using the
supplied Makefile.

(Copy the Makefile into the tree-sitter-c directory, then
do `make`.  The resulting .dylib file is what you need to
have in the the `Syntaxes` directory.  The Makefile is the
standard Makefile supplied by Panic.)

## Future Directions

It would be good to add folding and symbolication.
This is merely a first pass.
