# skype-parser
My solution to the tag parsing problem

## TL;DR
1. Download last [release](https://github.com/ArtemVeremienko/skype-parser/releases)
2. Unzip archive in your directory
3. Put your data files: `messages.json` and `media` folder into your directory
4. Start index.html
5. Choose your `messages.json` file
6. Press Load
7. Enjoy 😊

## Description
I downloaded viewer for my export history from [official site](https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history) aka Skype-parser.
But he has some problem with link (`<a>` in html). Instead html tags `<` and `>` there are entity
  
```html
&lt;a href="http://assistant-traders.ru/insajd-ot-marketmejkera-332-optsionnye-urovni-cme-group-na-03-05-2019/"&gt;http://assistant-traders.ru/insajd-ot-marketmejkera-332-optsionnye-urovni-cme-group-na-03-05-2019/&lt;/a&gt;
```
  
![DevTools](https://image.prntscr.com/image/WRK-u-_-Qkqs3kTwt9g0qw.png)

Visit [Source](https://skype.uservoice.com/forums/914527-welcome-to-skype-ideas/suggestions/37590583-skype-parser-issue-viewer-for-export-history) if you want vote for this solution :+1: .


It's important that the `index.html` file is at the same level as the `media` folder.
