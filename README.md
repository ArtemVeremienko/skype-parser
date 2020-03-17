# skype-parser
My solution to the tag parsing problem

## TL;DR
Clone this repository and put inside your `media` folder and `messages.json` file, from skype export archive ([How to export?](https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history)). Open `index.html` and select your `messages.json`.

## Description
I downloaded viewer for my export history from [official site](https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history) aka Skype-parser.
But he has some problem with link (`<a>` in html). Instead html tags `<` and `>` there are entity
  
```html
&lt;a href="http://assistant-traders.ru/insajd-ot-marketmejkera-332-optsionnye-urovni-cme-group-na-03-05-2019/"&gt;http://assistant-traders.ru/insajd-ot-marketmejkera-332-optsionnye-urovni-cme-group-na-03-05-2019/&lt;/a&gt;
```
  
![DevTools](https://image.prntscr.com/image/WRK-u-_-Qkqs3kTwt9g0qw.png)

Visit [Source](https://skype.uservoice.com/forums/914527-welcome-to-skype-ideas/suggestions/37590583-skype-parser-issue-viewer-for-export-history) if you want vote for this solution :+1: .


It's important that the `index.html` file is at the same level as the `media` folder.
