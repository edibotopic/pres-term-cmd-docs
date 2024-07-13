# Ten Ways to Document Terminal Commands

Source of presentation for Canonical's Documentation Open Office Hours on the
challenges of documenting terminal commands and some different tools for doing so:

- [Video](https://youtu.be/LwJMtk3Fbsg?feature=shared)
- [Slides](https://edibotopic.github.io/pres-term-cmd-docs/)

## Contents

- [What are the ten ways?](#what-are-the-ten-ways)
- [Documentation tools referenced](#documentation-tools-referenced)
- [Tools mentioned in the chat](#tools-mentioned-in-the-chat)
- [Tools used to make the presentation](#tools-used-to-make-the-presentation)

## What are the ten ways?

The presentation broadly focuses on:

1. **In-line commands**: useful for short, terminal commands that are likely to be understood by the reader. Can allow for a conversational style and flow that mixes text and terminal commands, but can also get visually noisy and complicated.
2. **Code blocks**: shows sets of terminal commands on their own separate line. Documentation generators usually allow significant configuration of code blocks. They can be configured with copy buttons that enable a reader to copy runnable commands and paste them directly into their own terminal. Division into multiple blocks can be useful when the commands need to be accompanied by explanatory test — this is generally preferable to heavily commented code blocks and usually better than no explanation at all.
3. **Screenshots**: an image of a terminal as it appears on the documentation author's screen. Best practice in a team or organisation would be to have a consistent workflow for doing this; for example: set up Ubuntu in a VM, ensure a sufficiently large font size, run the necessary command(s), take screenshot(s), crop to terminal region of screen, compress file and upload. In other words: doing this consistently takes a lot of work and introduces a major maintenance issue. Using images also introduces accessibility issues. Appropriate `alt` text is needed for users of screen-readers, for example, and writing `alt` text for a long series of commands is a non-trivial challenge.
4. **Terminal image generators**: tools like Carbon are available that take as input a set of terminal commands and generate nice, high-resolution images in a terminal style. This could be a more efficient and consistent method for a team who intends to use images for documenting terminal commands.
5. **Auto-generated images**: terminal image generators are also available as CLI tools, which means that code blocks can be stored as plaintext and — potentially — generated as part of a CI pipeline.
6. **Screencasts**: video offers many possibilities for the presentation of technical material but documenting terminal commands is probably not one of them in most cases. A video tutorial is often more effective when a graphical user interface is being demonstrated. It's also an obvious choice if mixed media is being demonstrated (the user spawns a GUI from the terminal, generates an audio file from the GUI, plays the audio file, manipulates the audio file using the terminal...). If there is a charismatic person on your team, and/or someone who has a close relationship with the community, then video might be a way to showcase that personality. For terminal commands in general, however, video is likely overkill.
7. **Video as text**: if you do intend to use video then it's a good idea to look at some tools that offer improved accessibility and functionality. Typically, we cannot copy text from a video but with tools like Asciinema it is possible. Perhaps if you want to summarise a set of commands found in a long tutorial, or you want to reduce the space on the page occupied by terminal commands, this could be a good option. It's important, however, to signal to the reader that the text can be copied because not everyone will be familiar with the technology. One other consideration is that asciinema records what you do in a terminal session; you need to try to execute the commands efficiently and with minimal error, although it is possible to edit afterwards.
8. **Video as code**: Asciinema generates a video and accompanying source text/code. This means that it's possible to version control the source and make it a part of a CI pipeline. However, the source is not very human-readable, which makes it difficult to edit and review. Other tools like VHS offer a more human-readable syntax. It is even possible to avoid recording your terminal and just write the video in a text editor before generating it.
9. **Interactive CLI**: sometimes we forget that most of our documentation lives on a website. We have the full power of the browser at our disposal. It's possible to create a sandboxed environment — for example — in the form of a JavaScript-based terminal. Other, more powerful solutions exist based on WebAssembly and Docker. Documentation online for the Go programming language makes effective use of interactive terminals but perhaps that is a particularly fitting use-case.
10. **Bespoke code blocks**: in general, code blocks are probably the best way to show terminal commands in documentation. They need to be used effectively, however. If your code blocks have copy buttons then you need to consider what the user is going to copy and what they will do with the text in their clipboard. If they paste a combination of prompts, commands and output into their terminal this will only lead to errors and frustration. It's generally a good idea to separate commands from their outputs. An output block probably should not have a copy button (why would they be copied?). You probably should not include prompts and prompt symbols in code blocks _unless you ave a very good reason_. If prompts are included then make sure they are not copied when a user clicks **copy**. Tools like the Sphinx documentation generator have options for extensive customisation of code blocks.

## Documentation tools referenced

- [Carbon](https://carbon.now.sh/)
- [Carbon-now](https://github.com/mixn/carbon-now-cli)
- [Asciinema](https://asciinema.org/)
- [VHS](https://github.com/charmbracelet/vhs)
- [Freeze](https://github.com/charmbracelet/freeze)
- [Sphinx docs generator](https://www.sphinx-doc.org/en/master/)

## Tools mentioned in the chat

- [WebVM](https://webvm.io/)

## Tools used to make the presentation

- Slides: [reveal.js](https://revealjs.com/)
- Embedded terminal: [JQuery terminal](https://terminal.jcubic.pl/)
- Drawn yellow terminal animation: [inkscape](https://inkscape.org/) and [anime.js](https://animejs.com/)
- Git commit motion graphic: [Pikimov](https://pikimov.com/)
- Interactive 3D visualiser: [WriteHeight(https://edibotopic.github.io/write-height/)

## Other references

- [Blender 3D modelling software](https://www.blender.org/) 
- [Blender Guru's donut tutorial](https://www.youtube.com/watch?v=B0J27sf9N1Y) 
