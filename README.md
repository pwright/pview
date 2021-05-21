# pview

A script for pantheon styled AsciiDoc previews.

Use in addition to `asciidoctor` for previewing your files.

Before installing this, make sure your system is capable of running HAML templates:


```
gem install --user tilt
gem install --user coderay
gem install --user haml
```

When you're ready to go, install `pview` using:

```
npm i -g @techwriter/pview
```

Now you can create pantheon html from anywhere on your system:

```
pview <adoc-filename>
```

Note that this creates a HTML file and a CSS file in the current directory that you probably want to delete after running.
