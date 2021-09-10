# pview

A script for [Pantheon 2](https://github.com/redhataccess/pantheon) styled AsciiDoc previews.
Use in addition to `asciidoctor` for previewing your files.

```
npm i -g @techwriter/pview

pview <adoc-filename>

```


Note: `pview` does not inspect your files for validity. Files that are invalid for [Pantheon 2](https://github.com/redhataccess/pantheon) convert without errors. Use this script to validate table and source code layout, see [pantheon-cmd](https://github.com/redhataccess/pantheon-cmd) for a convertor that checks for Pantheon 2 correctness.


**Prerequisites**

Before installing this, make sure your system is capable of running HAML templates:

```
gem install --user tilt
gem install --user coderay
gem install --user haml
```

Optionally, install concurrent-ruby.

You can create pantheon html from anywhere on your system, using any valid asciidoctor options:

```
pview <asciidoctor-options>

```

For example:

```
pview -a data-uri -a allow-uri-read my-document.adoc

```
produces an HTML document with embedded images.



Note that this creates a HTML file that you probably want to delete after previewing.
