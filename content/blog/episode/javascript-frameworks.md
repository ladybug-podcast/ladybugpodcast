---
title: React, Vue, && Angular, OH MY!
date: "2019-10-13"
audio: https://pinecast.com/listen/c5f1451d-f587-4498-aa4e-ede696129492.mp3
slug: "javascript-frameworks"
description: "You've probably heard about some of the JavaScript frameworks that dominate the front end ecosystem. And this week's podcast we'll be discussing the pros and cons of JavaScript frameworks, go into detail about React, Vue, and Angular, and discuss tools and resources for how you can get started with these frameworks."
episode: "016"
length: "51:01"
draft: false
---

## Sponsors

Shout out to our sponsors for supporting the LadyBug Podcast!

<a class="image-link" target="_blank" href="https://logrocket.com/"><img src="../../assets/logrocket.svg" alt="LogRocket"></a>

How many times have you struggled to figure out an annoying bug in your app? Well struggle no more! Log Rocket lets you replay what users do on your site, helping you reproduce bugs and fix issues faster. You can see a perfect replay of what your users saw, inspect Redux actions and state at any point in time, view every network request and response, and even inspect console logs and JavaScript errors. Log Rocket lets you support your users without the tedious back and forth conversations. Plus it works with React, Angular, vanilla JavaScript, Redux, Ember, and Vue! Check out Log Rocket today to improve your debugging workflow.

## Show notes

**Difference between a library & a framework** - 1:04  
**Do we even need a framework?** - 4:37  
**Pros & cons of using frameworks** - 13:25  
**Popularity of different frameworks** - 16:54  
**React** - 25:31  
**Vue.js** - 34:14  
**Angular** - 39:34  
**Which framework is right for me?** - 44:23  
**Evolution & speed of frontend development** - 45:44  
**Learning these frameworks** - 47:31

## Resources

- [React](https://reactjs.org/)
- [Vue.js](https://vuejs.org/)
- [Angular](https://angular.io/)
- [Redux](https://redux.js.org/)
- [Learn JavaScript & jQuery](http://javascriptbook.com/)
- [Codecademy](https://www.codecademy.com/pro/membership?gclid=EAIaIQobChMIv9b45ZqZ5QIVTF8NCh3F4QjuEAAYASAAEgJ7MvD_BwE)
- [JS Frameworks Popularity](https://www.jetbrains.com/lp/devecosystem-2019/javascript/?gclid=EAIaIQobChMInPuOmJuZ5QIVkZ6fCh11UQ3YEAAYASAAEgLnF_D_BwE&gclsrc=aw.ds)
- [10 Best JavaScript frameworks to use in 2019](https://hackr.io/blog/10-best-javascript-frameworks-2019)
- [History of frontend frameworks](https://blog.logrocket.com/history-of-frontend-frameworks/)
- [Tyler McGinnis React Hooks Course](https://tylermcginnis.com/courses/react-hooks/)
- [Pure React by Dave Ceddia](https://daveceddia.com/pure-react/)
- [Introduction to Vue by Sarah Drasner](https://frontendmasters.com/workshops/vue/)
- [Evan You](https://twitter.com/youyuxi)
- [Wes Bos](https://wesbos.com/)

## Particpate in Hacktoberfest!

October means Hacktoberfest! We released two episodes ([Part 1](https://ladybug.dev/episode/hacktoberfest-part-1/) && [Part 2](https://ladybug.dev/episode/hacktoberfest-part-2/)) on Hacktoberfest last week and we're participating! If you see a bug on our website, feel free to open a PR with the fix, or check out some of the open/available issues [here](https://github.com/ladybug-podcast/ladybugpodcast/issues)! It's a great way to get your first open source contribution!

## Help us out

- <a target="_blank" href="https://podcasts.apple.com/us/podcast/ladybug-podcast/id1469229625">Leave us a review on Apple Podcasts</a>
- <a target="_blank" href="https://link.chtbl.com/ladybugpodcast">Subscribe to our podcast</a>

## Transcript

<div class="transcript">
Kelly  0:00  
react view and angular Omi, you've probably heard about some of the JavaScript frameworks that dominate the front end system. And this week's podcast will be discussing the pros and cons of JavaScript frameworks. go into detail about react, view and angular and discuss tools and resources for how you can get started with these frameworks. Let's begin. Welcome to the Ladybug podcast. I'm Kelly.

Emma 0:22  
I'm Ali. And I'm Emma. And we're debugging the tech industry. This week's episode is brought to you by lab rocket. How many times have you struggled to figure out an annoying bug in your app? Wow, struggle no more log rocket lets you replay what users do on your site, helping you reproduce bugs and fix issues faster, you can see a perfect replay of what your users saw. Inspect Redux actions and stay at any point in time you every network request and response, and even inspect console logs and JavaScript errors. Log rocket lets you support your users without the tedious back and forth conversations. Plus it works with react, Angular, plain JavaScript, Redux Ember and View, check out log rocket today to improve your debugging workflow.

Kelly 1:04  
Okay, so let's get started here. One of my favorite questions that I think I've asked Ali probably four times already is, what is the difference between a library and a framework? Because I can never remember?

Ali 1:15  
Yeah. So a library is generally a set of functions or methods that somebody else wrote that you are including in your own code in order to make it so that you're not reinventing the wheel or anything like that. So the library is pretty flexible. You're just importing stuff using other people's code. Whereas a framework generally, it changes how you structure your code. So something like Angular, which we'll talk about today, there's a specific file structure and way of writing your code that's very, very different than if you were not using Angular. So it's not just a bunch of functions and methods that you're adding into your code. It's dramatically changing how you're restructuring your code. The funding was front end frameworks is that there's a bunch of debate whether these things fall into frameworks or libraries, so Generally, it said that, like, React is just a library, not a framework, though, if you use something like create react app, I would argue argue it goes more into the framework side of things. And so I think that that is an interesting conversation to have. And definitely something that a lot of developers definitely nitpick about. Where as I, I don't know, part of me is like, yeah, semantics matter, these names matter. But then also, part of me is like, does it really matter if these things are libraries or frameworks, and they all kind of fit in the same grouping of what they do and like how they matter and change the way that you write your code. So maybe we just need a new name for the set of libraries or frameworks that allows you to write component based applications or whatever,

Emma 2:47  
that's really funny. It's like, anytime you post about react, being a framework, you get 1000 people like wrapped in the library act as not a framework. And I just like, it's just it cracks me up because I know I'm going to get those comments. Every time because like, technically they're true, but I would agree that maybe we should just change the word choice here, because there are tools that help you build applications. And there are a lot of similarities between them. I think I read something somewhere where that was saying like frameworks are opinionated about the way in which you write your applications versus libraries don't have that opinion. So I'll give you you know, a lot of powerful tools and functionality and whatnot.

Kelly 3:23  
I think at the end of the day, whether you call it a library or framework, and again, this comes from the person who can never remember the difference, whatever it's called, it doesn't affect my ability to use it. And I'm able to use it, whether I call it a flip a framework, or I call it a library.

Ali 3:38  
Totally. And I think like react, even though it's a library, it's so dramatically different than something like low dash or d3 or something like jQuery even. And so I think we do need some sort of name that groups all these things and it's become vernacular really like frameworks, but that's not technically correct. And so I think that's where the issue comes in is maybe we need Some new like

Emma 4:00  
terminal name for for the UCF

Kelly 4:03  
how we fell into the trap of calling HTML programming language.

Unknown Speaker 4:07  
We don't even want.

Kelly 4:09  
Kelly, it's my, it's my favorite thing to tell people.

Emma 4:13  
I only write CSS, we're gonna make Twitter

Ali 4:15  
really angry, right?

Kelly 4:18  
So we're here for

Emma 4:19  
so for the purpose of this conversation, I'm going to probably just stick to the word framework because it's easier, and it's less syllables that I have to spit out of my mouth. So but don't be offended. I'm not trying to exclude any libraries over here. So that kind of leads into the next question, which is why do we use frameworks? Do we even need frameworks for applications? And like, why do they help?

Ali 4:41  
So I think that that's a great question. I personally stand by that you do not need a framework, especially if you're building something small and lightweight, then framework doesn't necessarily help your workflow where the frameworks come in that they become really helpful as if you're building something large enterprise level with a lot of contributors. And that needs a structure that many people can understand to really helps your application become more developer friendly, especially as it grows. That being said, there are huge applications out there that a ton of people are using like Hacker News is one that I like to give Hacker News has like 40 lines of JavaScript, and it's all vanilla. So there are definitely big sites out there that are not using fine frameworks. So you do not need one but they can really help your applications be more developer friendly. I think

Kelly 5:33  
they can also just make programming fun. toasting my my most recent experience and learning view in the past month is just I've haven't had this much fun coding in a very long time. So do I really need to use view or do I really need to use react? Probably not. But I'm going to anyway just for an excuse to learn and just because it's fun.

Emma 5:57  
I felt like I was of the mentality of Sticking with vanilla JavaScript for, like almost anything personal that I did. And that was really prior to like understanding how to really use viewer react. So I would like I build my portfolio in vanilla JavaScript, anytime I had a coding take home challenge for my current job, I actually just use vanilla JavaScript, I didn't use a framework or library. But it's really interesting because this kind of goes into like the job interview process a little bit. But when you're doing like a take on challenge, for example, a lot of companies want to see you use a framework or library and your solutions, whether they tell you that or not. So I was interviewing for a job in Berlin. And they I asked them, you know, point blank, I was like, do I need to use a framework or library because I've been sticking with vanilla? And they said, No, like, do whatever you want. And I submitted it, and they obviously rejected my application. And I asked for a little bit of feedback, and they're like, well, we wanted you to use react. And I'm like, I personally am of the opinion of if your JavaScript skills are really strong and you understand these advanced or expert, expert level I wouldn't say expert level but more complex ideas such as closures and scope. And all of this. No pun intended that in my opinion transfers to a developer who's a little bit more flexible when it comes to working on different tech stocks. And so for me personally, I feel more comfortable understanding like vanilla or plain JavaScript concepts versus being an expert in reactor view, because for me, that transfers better. I'm not saying that's like that for everyone. You know, I envy people who are experts at reactor view, but I just I don't know if I'll ever get to that point.

Ali 7:30  
Yeah, I totally agree with that. And just to clarify for the audience, vanilla JavaScript, when we talk about that we mean JavaScript without one of these frameworks, libraries. So using vanilla Dom manipulations, things like document query selector document, get element by ID instead of using something like react right here front end. So that's what we mean by vanilla JavaScript. But I totally agree that learning those JavaScript fundamentals and showing those up before moving on to reactor view, which dramatically changed how you write your front end code. I think that That is something that I wish I had done better because I pretty much jumped right into react when I was learning JavaScript. I had been programming in other languages for a while, but was just learning JavaScript can moving straight into react. And also at the same time

Emma 8:15  
f6 was

Ali 8:16  
coming out. And so all these things were like amalgamating in my brain. And I was like, I don't know, what's part of JavaScript, which part of f6 was part of react. And so I really wish that I had been more solid on the JavaScript fundamentals before moving into react.

Kelly 8:30  
I completely agree. I learned jQuery before I learned vanilla JS. It really threw me off when I had to not use GK for projects. And I'm like, Oh, that's not gonna work. Oh, that's not gonna work. What is this dollar sign doing here? I should probably remove it.

Emma 8:44  
Yeah, I struggled with separation of concern. I was like, what what part of this is jQuery? What part of this is JavaScript I didn't fully understand. Because, like, I remember back in the day, they were almost taught like simultaneously or like together which was very confusing to me, and I used to be of them. mentality and this goes back to our learning how to code or, or teaching code and, and all of this, I used to be of the mentality that no you have, you should learn vanilla JavaScript or plain JavaScript prior to jumping into a framework or library, you know, because you have to understand these core concepts. And I, I was ready to die on that hill. And then, you know, through conversing with people on Twitter and whatnot, I quickly realized that everyone learns differently. And so while I sit here, and I say, I wish I had learned plain JavaScript concepts a lot more strongly as my foundation before moving on to view and react. That's not how everyone learns. I will say like, even if you choose to learn viewer react, or Angular, Ember, whatever framework or whatever you choose, you should also in tandem, kind of understand why these things work the way that they do with regards to, you know, scope and all of those core foundational pieces.

Ali 9:48  
Yeah, totally. Everybody's gonna learn differently. And that's totally valid. I just personally wish that

Emma 9:52  
Yeah, I had learned them

Ali 9:54  
separately a little bit. First, although when we were all learning, jQuery was probably a lot lot more necessary than it is now. Because a lot of these JavaScript things were built into the browser, after we probably started learning JavaScript. And so that's a totally different world for new developers now, too.

Kelly 10:12  
I think new developers have it so much easier. for so many reasons, just because not only I think things have been better documented at this point. But you have so many new starting points where, you know, if you're just learning JavaScript for from day one, you don't know what to use. There's so many guys out there that kind of walk you through here's a really great path to take to get to where you want to be. And I feel like that didn't exist. No, today,

Emma 10:40  
there were like no learning plans. But to be fair, like also when I was learning front end, which was not too long ago, I started learning print in 2013. And my first full time job, which is a another story, but I struggled a lot but but thinking back on it like I still had the privilege of having access to like the internet and like resources of people, I can go talk to you. And I heard this crazy story the other day of this, this guy who had taught himself how to code from depreciated books that were like, written on based on old ECMO script standards, and like, he'd have to go to the library and like, you know, read it there. And he would, they can write all of his notes and like, go back and teach. And while I struggled, like learning frameworks and libraries, and even just plain JavaScript, you know, in 2015, and while you know, developers getting into the industry today are in a much better place. Like I can't even imagine having to not having access to even the resources we had when we started.

Kelly 11:35  
That's exactly how I learned I learned from a book, did you? I did. My very first like learning HTML, I learned it from a book called HTML goodies. And I have a I think I still have the the JavaScript and jQuery book somewhere in my house. Oh, I love that book. Pictures. Yeah, even even now that's still a really great resource now that I've touched on a really long time with at least covers pretty

Emma 12:00  
Yeah, and the HTML and CSS was great too, because there's a lot of visual graphics inside. So we'll link those in the show notes.

Ali 12:06  
You have a lot of students using those. They're really awesome. I actually learned I did my first JavaScript tutorial on Code Academy, which is really funny back in like 2014. It's definitely evolved a ton since then. But still a resource that I recommend to this day.

Emma 12:23  
They're greatly they're great. I don't know if you've used them recently. But they first of all, it's actually not Code Academy, at least the URL isn't. And I feel like what is that the Dunning Kruger effect? Where like you think something is one way your whole life? And then you're like, what it what do you mean, it's not toast? You know, it's toast, Cheetos, or whatever. But I always thought was Code Academy and you type it in its Code Academy? Yeah. Anyway, that was a tangent. But my point is, I went back to them like recently within the last month or two and they've upped their game. I mean, they used to be like, just entry level like, you know, I that's how I learned Python back in 2013. Now, oh my gosh, it is so much better. A platform and they have learning paths now. And we'll link that too because I loved that site.

Ali 13:05  
Oh, my goodness I want here right now they have non technical life skills as a course as go through this. Yeah, from how to file income tax to removing different stains. Amazing. Okay. We're so far from ducking, right right now, but I need to take their adult in course, and it'll be fine. Awesome. Okay, so let's talk about the different pros and cons of using JavaScript frameworks. So some of the pros that we talked about were developer friendly. And yes, and it's like fun to write code in these front end frameworks. But also on top of that, it also helps when you're scaling these applications, so that people know where to look in different files for different components or different pieces of code. And it scales a little bit so you don't have to write as much repeated code as well. So that's generally the pros to it in addition, performance, so There is a difference first between perceived performance and actual performance. So perceived performance is if a person goes to your site and thinks that it's fast. And you can make people think that your website is faster than it is using funny animations and stuff like that people will think that your site is more performant than it actually is. And then there's actual real performance. And so these front end frameworks have different performance conclusion. So first off, you're looking at a JavaScript libraries, it's a lot of code. And so in some ways, that's going to be less performant, because you are adding all this additional code to your site. That being said, they have a lot of things built into them to make them more performant and allow you to

Unknown Speaker 14:45  
edit the

Ali 14:45  
page in a more speedy way than you would be able to using just vanilla JavaScript. So there's definitely a lot to think about there. Especially there are ways to expand off of that using things like server side rendering and That

Emma 15:00  
Just a quick note on performance, I had a great conversation with my coworker yesterday at lunch about the performance of our web applications. And I think, if you're and this goes back to our question of like, do you need to use a framework or library? Or should you, if you're building an enterprise application, or just an application that's consumable by people all over the world, we need to be mindful that not everyone is going to have the same access to like high speed internet, right. And if you're building an application that should be mobile friendly, it's going to be primarily on a mobile device. We shouldn't just account for like these, you know, brand new iPhones with, you know, the fancy processors inside, right, we need to be mindful of the fact that including a framework or library is going to have negative performance implications, especially if you're building this for people all over the world who don't have the same access. And so I just thought that was an interesting conversation and it gets into accessibility, right? We hear accessibility, we think of like screen readers and all of that, but it's really is your app accessible to people all over the world. And if you have negative performance, due to you know, important And using a large framework for a few lines of code that could easily be done in vanilla JavaScript, then you know, that's an opportunity cost there.

Ali 16:08  
Definitely, it's really important to think about that, especially the whole world. And so many users are in India and Indonesia and other countries that definitely have lower speeds than we do. And in addition, or we do in the United States. And then, in addition to that, people using smartphones that aren't at the same speed as the iPhones or Google, what are

Kelly 16:33  
the pixels? That's Yeah, yeah.

Ali 16:36  
So definitely just thinking about everybody's on a different device and thinking about the whole entire world, not just people who are in perfect situations as far as speed goes. Okay, cool. So we've been talking about all these frameworks kind of generally, but let's start talking about specific ones. Emma, you are talking about how popular different frameworks are?

Emma 16:57  
Sure. So I remember I'm going to tell a little tiny story. I remember my first JavaScript conference I ever attended. And this was sparked from a tweet that was sent out the other day. If I can find it, I will link it in the show notes. It was asking about you. Do you remember your first JavaScript conference? And I, I definitely remember my first JavaScript conference because I sat there. And I sat there like an idiot. I had no idea what they were talking about. I had just gone into web development. And I'm sitting there like, what is Ember? What is backbone? What is view? I don't even know if he was a thing at that point. And so I remember sitting there, like, What are all these frameworks that they're talking about? And like, I don't understand. And so you've probably heard of react. React is currently the most popular framework or library being used today. It's

Unknown Speaker 17:43  
quickly followed by,

Emma 17:44  
it's not quickly followed by but it's followed by Express, which is a framework for Node JS. And then underneath that is view view is catching up quite quite quickly. So 54% of developers are currently using react and in a 2019 JavaScript ecosystem server conducted by jet brains, and 39% are using view view is obviously a little bit more infant. But it's it's definitely catching up. You've probably also heard of Angular Angular has an interesting history that will go into in a little bit, then we've got React Native, which allows you to build, you know, mobile apps for iOS and Android using react, which is pretty deep. And then we move into some some other frameworks like electron at 16%, and whatnot. What's really interesting is, when we look at the timeline of these different frameworks and libraries, although react is currently the most popular, it's not the oldest. So if you look back starting in 2010 2011, that's when Angular JS was released, version 0.9. And that was around also the same time as other frameworks like backbone and knockout. Ember followed the next year with its first release. And then we start to see react a couple years after the first release of Angular JS. So reactive view came, you know, one after the other and in 2013, and then And we'll speak about this in a little bit. But then this angular framework was released in Angular is different than Angular JS. Very confusing. We'll discuss that later. But it's really interesting to see that, you know, the trends of the adoption of these different frameworks and libraries. Because, you know, React is by far the most popular, the most widely used and, and talked about, but it's one of the newest ones that's been released.

Kelly 19:25  
I wonder if that has anything to do with the fact that it's

Emma 19:27  
thanks to Facebook? I do think that, and we can talk about this a little bit more, but essentially, React is backed by Facebook, which essentially, you know, I think that was a big a big leap, right? versus you look at something like view, which is, again, still in its infancy. It was just released in 2014. And it's, I believe, it's open source, if I'm not mistaken, that's not being backed by a big company, whereas you got Angular. Angular JS is backed by Google and, you know, React is backed by Facebook view, is doing its own thing independently. So I wouldn't Yeah, I would guess the the association with Facebook, the backing by Facebook was for sure one of the reasons it took off.

Ali 20:05  
I think so too. I think another piece of it is the community that's popped up around it. I think that those are kind of self sustaining a lot of ways to. So let's talk a little bit more in depth about react because we're talking about it now. So it was released in 2013. by Facebook. have you all been using react for a while? I feel like Yes, yeah. While no.

Kelly 20:26  
This year.

Emma 20:27  
No, I I was like all aboard the view train. So here's my JavaScript framework history started in dojo didn't love it. I wouldn't recommend it probably because I didn't understand front end developments. So I started in dojo, then I learned to view and I built some sites with view really loved it. When I got to log me in for my job. Last February in 2018. They were like we're using react and so I had to like forget about you and learn react. And while I know I still love you somewhere deep down. I haven't used it a long time. And so I'm like all about react now.

Ali 20:59  
Yeah, so My history is starting with Angular JS back in the day and dealing with all the debugging fun with all that. And then we quickly moved over to react. So I've been using react since 2015. jQuery in there as well, important piece of web history and still still out there. So shout out to jQuery. And then from there moved to view for another project. So I've been using view for a decent amount of time as well, probably 2016 or so. And then, when I moved to teaching, I teach react. So definitely have to know it pretty well for that, and then also have taught Angular periodically as well. So that's a little bit of my history. Kelly, how are you?

Emma 21:44  
Sorry, I'm going to jump in just because I remember using Angular JS back in the day, and like the model view controller paradigm, like destroyed my brain, like I sat there and I was like, I don't how do I even use this computer? I don't understand it and I don't know about you, Ali, but like, I did not like Angular JS.

Ali 22:04  
Oh, I am totally on the same page. And the debugging for it was so hard it was before, like the dev tools came out that made debugging react and stuff so much better. And oh, my goodness, debugging Angular JS was the earliest thing I've ever dealt with, then the whole ecosystem at that point to was like, grind and web pack and you had to write your website, configure yourself and before create react app. Just those days of development. I don't miss whatsoever.

Emma 22:32  
That was a part of my career where I would just like copy pasta, like all this code, from the internet into my web pack config and just be like,

Kelly 22:38  
I think it works. That was literally my life. Yeah. Or like I had one previous project that worked just fine. So I'm like, I'm just going to keep on reusing this. And I don't know what any of it means, but apparently it works. I'm going to stick with it. But yeah, I also started with Angular JS A long time ago, and it completely intimidated me, just like I've explained. And so I didn't do anything. side of jQuery until last year. And of course, I've been in a very small box as far as what kind of things I've been building. Basically, since 2012. Most of my experience has been building WordPress sites for clients, and then building Shopify stores for clients. So, you know, I'm not kind of exposing myself to the various opportunities to learn other other frameworks just based on what I do for a living. So I started learning react earlier this year just for fun for my own personal site. And then I started learning view a month ago for a client project and I had to learn it very quickly, but I figured it out. So there's like a, I think, like an act, I don't know many years, like at least a six year period where I was just like, asleep on all the frameworks. I did not do a thing with any of them. I think

Ali 23:48  
that's awesome, though. I think that there's a lot to be said for that and staying stable with what works and just using what works instead of using the new shiny thing. I think looking at how you Young these things are is actually really fascinating for me. I was prepping for an interview on like the history of react and was looking at like when Redux came out and I realized that I was using Redux pretty much when it came out and that was just fascinating to me. I was like, Oh, I had assumed at that point that Redux was just around but nope, I was pretty much using it like couple months after it came out. And that's that's why I'll do me so

Kelly 24:27  
I Trailblazer

Ali 24:29  
I know that's wild had really bad shiny object syndrome. Very long time including writing apps before there was an English translation of the docs for some things I was using like Google Translate from Chinese for a framework at some point anyways,

Emma 24:45  
I think it's really fun when like you learn a new technology because I had to learn Redux to and I remember my mind turned into jello for us I like two months as I go what is it what it what is well, that's our exchanges are actually has has observable is which also like boggles my mind, but very nice. I was like, what does it bachelor what is a reducer, I don't understand. But then once you learn it and it clicks, you're like, I'm gonna use Redux and everything I'm going to build, you know, a single page application that has only static

Kelly 25:09  
data.

Emma 25:10  
And there's no reason to use Redux. But I'm going to use it anyway. Because, you know,

Kelly 25:14  
I just want to make one quick comments. Just to add in here for people listening who did not understand a lot of the words that images said, Don't worry, you're not alone. I don't need I don't know them either.

Ali 25:25  
Funny, I don't either. Okay. So getting back to react because we are just so tangent D this morning. So react has a couple paradigms within it that have really been pretty pivotal in the evolution of front end development. So the first one I would talk about is components. So instead of the traditional separation of concerns that you see it with app where you have a CSS file, a JavaScript file, an HTML file, instead, you're organizing your code by components. And that's a piece of your user interface. So we talked about how Facebook were released. react. And so you can think about reactions on Facebook posts. So it used to be that you just used to like something just a thumbs up. But then they moved it so that you can do a like, or a heart or a smiley face or anything like that. And so you can imagine if they had to change that like code on every single place that like is on their site, that would be a ton of overhead and a ton of Find and Replace and all that. And so instead, if you organize things by components, and that's by their place on the interface, so like button would be like a component in an interface. And so you organize it by that then you only have to update it in one place instead of all those places when you move forward with a new feature or update one that's already there.

Emma 26:52  
I like to think of components almost as like a rubber stamp where you create the stamp and then every time we need one, you can physically just stamp it like you would do if you were No stamping a bunch of paper. I don't know why you would do that. But that's how I like to think of them.

Kelly 27:05  
I love your spare time.

Emma 27:07  
I do. I'm a professional Stanford.

Unknown Speaker 27:10  
Stanford reacts components.

Emma 27:14  
What I find really interesting about react and this took me a very long time to comprehend is this concept of the virtual DOM. I it's still today, that kind of blows my mind. So it goes back to this concept of like, what is the DOM, right? And Emily, you can think of the DOM is an object based representation of your HTML document, as well as the interface to manipulating it. When we think about the virtual DOM, what's the benefit here, right, we want to solve the problem of like, needing to frequently update the dominant, more performant manner. And it's what's interesting is it's not an official specification, it's really just a new way that we can interact with our DOM. And so we can think of this almost as like a copy of the original Dom that we can manipulate an update without having used the DOM API is which makes us a lot more performant and optimize and so once we've made all the updates to the virtual DOM. At that point, we can say, Okay, well, these are the changes, we know we need to make between the virtual DOM and, you know, the actual Dom licious make those, and this like, revolutionize the way in which we build our applications, because oh my gosh, there's just so much more performant than, you know, having to change the DOM every single time. Totally, totally. And

Ali 28:22  
this also goes back to that idea of like perceived performance is that the way that react updates sites feels really fast and feels really smooth. And so that can make the site feel faster than it actually is, which is another interesting piece of all this. So I think component based architecture, virtual DOM, I think that those are the two big pieces of react that they're huge for react and huge for that piece of web development. But in addition, those concepts have kind of boiled out to the other frame frameworks that are out there as well and have just kind of revolutionized the way that we write code even outside of react. So I think that that's a really interesting piece of all this as well. And the other really huge pro of react is it's huge ecosystem. Like, I feel like so many people that I follow online or react people and talk about react all the time. And that's, I feel like why I talk about react less is because I just don't want to compete. Because there's so many, but it's got this massive ecosystem behind it. And that makes it really friendly to learn and also means that there are tons of libraries out there that you can use in order to extend your react applications.

Emma 29:39  
One thing that like really confused me about react for a long time until actually just like yesterday, was really the history of, of the evolution of reaction like how we went from using create class to class components to functional components now using hooks, and so very, very quickly, high level I'm going to share this because I think it's really beneficial. So we started in 2013 with react create class. So basically like all the info that you would need to describe a component, which is past is like an object property. And we did this because at the time, JavaScript didn't have a native built in class system. Well, in 2015, f6, released class declarations. And as a result, you know, we didn't need to use create class anymore. So in 2015, you know, literally 10 days later, React introduced a react component API, and that allows you to create react components for native JavaScript classes. What was frustrating about this, were a few things, you had to use the class constructor now inside of react components, you had initialize your state inside of this constructor, you had to invoke super with props, the first time you were sending your subclass because of the specification. And then, you know, we had to go in and auto bind all of our functions with this, my function equal this not my function, bind this, and that was pretty frustrating. And that introduced this idea of class builds, so that we could do like class my component extends react component. And so we went, you know, you haven't used create class now using react component. Now we get into class fields, and then just recently is where hooks have kind of come into play. And there are many benefits to hooks, you know, we don't need to go into all of them. One of the main benefits is they allow you to have local state and your components, they can be persisted across renderers. You can, you know, say like, my sidebar is open, my sidebar is dismissed, and it can persist across three renders. And instead of using, like lifecycle events for different react components, and you can use group by logic, so there that's like the very high level timeline of of how we got to where we are today with hooks that confused me for a very long time. I never understood why, like, I saw some people like not using this state equals object within a constructor, but they were just declaring it inside the class like that had confused me. And I want to give a shout out here to Tyler McGinnis his react hooks tutorial, because that's how I learned he walked through those those steps. So very cool.

Ali 31:58  
And one other piece of it that will forgot to mention with JSX. There. JSX is a syntax that allows you to write what looks like HTML in your JavaScript code. And that was not possible beforehand. And normally, with react, you're going to use Babel and Babel transpires your code into different versions. So if you're using these cutting edge JavaScript features that will transpire it back to ES five or whatever you need to use for browser compatibility. And it'll also translate that JSX code that looks like HTML into JavaScript that the browser can interpret. So that's another piece of what makes react so developer friendly. You don't need to use JSX. But pretty much every react app I've ever seen uses it. Okay. So we've talked a bunch about react. It's great. Let's talk about some other ones as well. So Kelly, you want to talk about view?

Kelly 32:51  
Before I talk about view? I do want to ask a clarifying question for people listening and also for myself. Can you explain the difference react and React Native.

Emma 33:01  
Yeah, React is used to build web applications and a browser versus React Native from what I understand is used to build mobile applications for both iOS and Android. Because iOS in general uses Objective C or swift to be built. And this can be really hard for for people who know, you know, who only work on front end browser in the front end browser to work on on mobile. And Android is built with Java, if I'm not mistaken. And so React Native allows you to build one application that can be served on both, if I have that correctly. And it's it's not the same exact syntax as react. It's quite similar. It seems like it's not too hard to pick up, but I'm pretty sure that's the difference.

Ali 33:43  
That sounds right to me. And then I think you can use it to make desktop apps now to or something. I don't know. mobile development is way outside of

Unknown Speaker 33:50  
my right.

Emma 33:53  
But I think the whole like I think it's React Native because it's used on like native for native applications on your devices.

Kelly 34:00  
Okay, it didn't like the the newest Mac OS update, like Catalina or something, make it so you can use it to build, like Mac apps as well. I'm not making that up.

Ali 34:11  
I think so something along those lines,

Kelly 34:13  
okay. I don't know, I don't I don't work in that space. So it's all gibberish to me. Okay, so let's talk about view. So view, as we covered before, it is not backed by a, you know, a popular organization like Facebook. It was created by Evan you who was an ex engineer from Google. And he created this back in 2014. And similar to react, it also uses the virtual DOM, which I think for me, I learned react before I learned few so I can didn't make the transition to learning view a little bit easier. And honestly, that I think is one of the biggest pros, I think it's a very easy to learn compared to the other frameworks out there. I feel like the learning curve is a lot lower. Did you have the same experience with that?

Ali 34:56  
I totally agree. I have thought about teaching view as an entrepreneur. react because I think that, in my opinion, learning react is if you're going to learn a framework right now, probably the one that to learn just from a job perspective, like think view is incredible to learn as well. But I think react is really important from a job perspective. And so I thought about teaching view is kind of an on ramp to react just because it introduces the idea of components and writing stuff that looks like HTML that isn't really HTML, if you write view in certain ways. And so I think that it definitely is easier to learn it's closer to just writing vanilla JavaScript than react is and the documentation is also incredible as well. And I think that that makes it on ramp easier as well.

Emma 35:41  
Just a couple of fun facts about that. So from what I can tell, Evan, you said that he he basically wanted to extract the parts he really liked about Angular and build something really lightweight. And another quick like fun fact is that if you haven't noticed this views releases are codenamed with anime names. Because I guess Evans really into anime and manga. So that's a fun fact.

Kelly 36:05  
That's a very fun fact. So one of the things I think that is also really great about view, know, also in line with react is the ecosystem. When I started talking on Twitter about, I'm now starting to learn view, I had so many people reach out to me and be like, use these resources. These are really great. ask me any questions that you have. And in you know, I've hit situ, you know, certain situations and trying to build out this, this PWA for a merchant, where I don't really have that much time to really sit down and learn it. And these people have been so quick to respond and answer my questions like, this is how you should code this stuff. And it's been it's been really helpful and I think the the ecosystem around view is wonderful.

Emma 36:49  
I do find the view community to be so wholesome and very welcoming. And it doesn't feel like there's any like competition to prove anything there. It just seems And I'm not really sure why that is. But I personally feel very welcome in that community.

Ali 37:05  
Yeah, agreed, agreed.

Kelly 37:07  
And I think also, it's kind of a pro and a con. It is newer, as we've discussed. And with learning something new orgs, using something that's a bit newer to space means that there's a little bit less documentation available, although the documentation for view is great. Like literally just like the new website for it is wonderful. But also, with a, you know, a newer framework, it's going to change over time, and things are going to become deprecate it and there are going to be some breaking changes. And that's, it's the nature of using a newer framework. So it will require a little bit of following along with the changes that have occurred over time.

Emma 37:46  
I feel like that goes to any framework or library there too, because if we look back on the history of react and Angular, let's not even talk about that yet. These things change rapidly, regardless of their maturity. And so I don't think That should be a detractor. I I would agree with what Alli was saying about the fact that and I hope I didn't like misunderstand this, or this but I personally feel like view is a little easier learning curve wise to get into then react react is, it can be a little bit more convoluted view is very simplistic, it seems quite user friendly. And if you're on the fence between the two and you have no like, pros to learning one over the other, let's say like your your job doesn't have one they're using I would I would personally recommend you.

Ali 38:34  
Yeah, I think that I agree with the learning curve aspect of that that view is a little bit less of a steep learning curve. So I think another thing with react that we didn't talk about is that it is highly based on the functional programming paradigm. So there's a lot of like immutability where you don't change existing data structures and a lot of other complications that come along with that where it's viewed as not have that like there. To directional data flow, whereas in react the data structures or the data flow is unidirectional. So you pass data from one component to another, but you don't pass it back to that original component. Whereas view the components can really talk to each other. I think that that data flow makes learning view a lot more accessible. That being said, My one thing for react is that, especially in the States, I see a lot more react jobs than view jobs. And so if you're looking for your first developer job, I would recommend learning react for that reason.

Emma 39:32  
I agree. That's awesome. So speaking of really great frameworks, I'm going to now segue into one that I'm not passionate about. And I hate that I say that because I think I just had a bad experience with it. I am going to be neutral on this topic, but that's Angular Angular. Okay, well, let's be clear. Here. We've got Angular JS, and we've got Angular, and they're technically two different frameworks, which is very confusing to me. But let's talk about that. So Angular two They asked was released in 2010. by Google, again, similar to react, it was backed by a large company. It's currently being used by many big companies like Forbes wicks. And you guessed it, Google. So today, it's called Angular. But prior to 2016, there was the suffix JS. They're not the same framework. And this is very confusing to me. It seems as though every new release of this framework kind of changes the paradigm vastly. And so, like, the Angular JS release is not even remotely the same framework as Angular, although I don't know Angular at all. So like, I'm not going to speak to those. But from what I can tell, there are some pros, it seems like it's pretty modular. They had there's a lot of out of the box functionality that you get like a router for validation HTTP client, you have a high level of control. And you can also just apparently, use HTML and CSS, you know, natively versus react. We talked briefly about JSX. And that being a little bit different, but again, Angular, lots of different releases. A little tricky to learn and each version differs vastly from previous versions.

Ali 41:04  
Yeah, I think there are huge benefits to using reactive view even just for a side project for developer friendliness, whereas Angular is not that way. Angular really comes in if you're building a massive enterprise application and need all the bells and whistles need it to be really, really structured. I think that's where, when you are really shines, whereas reacting view still shine for smaller projects as well. So we both used Angular JS back in the day, and it was really painful to debug and work with, at least in my opinion, and then Angular, when it was released, it mirrored react in a lot more ways. So it used this like component based architecture and all that that we're seeing with the other frameworks. And so that change is when it dropped the JS from its name and is now just Angular, but they change versions really fast. And they even have Material Design built into it now. So Oh, wow. It has everything coming. It Out of the box, you don't even have to install really anything to, to Angular. So it's definitely really interesting from a lot of perspectives. And it was the OG in a lot of ways. But I personally have a lot less fun writing Angular code and teaching it is really, really tough. Whereas reactive viewer,

Emma 42:20  
I would argue, though, that you can definitely build large scale enterprise applications with react if you use some of the other tooling that comes along with that, right. Like if you're, we're using react Redux here with TypeScript. And I don't know, I don't think we're using graphics at all. But that also plays nicely with it. Yeah, I would agree that maybe Angular is a bit more robust out of the box for enterprise apps, like there are things that you can do with react that also level that playing field. Oh, hundred

Ali 42:44  
percent. I 100%. Think react is excellent for massive applications. For sure. I'm more saying that Angular does not work well with small applications, but apparently it works well with bigger ones. And so I haven't had as many experiences Is that make Angular necessary? Whereas I've heard from people who work for like massive companies that Angular is better enough where English shines in that format? Not that it's like better than anything else in that format, but that it's not good or not great in a very small application, if that makes sense.

Kelly 43:17  
Yeah, I think it goes without saying that any of these frameworks have their have their place that you know, they really shine, depending on what it is your end goal is. And while we may not have maybe positive opinions of Angular have not had the experience to really sit down and learn it in a real life context. I know a lot of people absolutely love Angular. And that is definitely their framework of choice. So if it is something you're interested in learning, there's definitely plenty of their their resources out there for you to learn.

Ali 43:49  
Totally, totally. And their documentation is really good too now. So we've kind of touch about,

Emma 43:54  
you know, three of the biggest frameworks for libraries react for you and Angular, there are definitely some others that you You can check out and that are, you know, still pretty popular. So like you might have heard of ember backbones, spelt, I think that's how you say it right? That's how

Kelly 44:07  
you say it.

Unknown Speaker 44:08  
Yeah, I had to spell TLM.

Emma 44:10  
And hyper up. I mean, there are numerous many frameworks. I mentioned dojo I was using, like Dorinda, with knockout like there's a plethora, right? How do you know which one is right for you?

Ali 44:26  
So I think if you're working at a big company, I think the biggest question is, what are you using already? And is that working for you, if it's working for you, there's no need to change it. And you don't need to have shiny object syndrome and change to the hottest framework that's out there right now. If it's working for you stick with it because your developers are already on board to that, that's perfectly valid. That being said, if you are in a situation where your company isn't using anything yet or you are starting from zero My personal spin would be that like react has a huge ecosystem behind that at this point view does as well. And so then it comes down to what your developers know what level they're at, like junior developers, we talked about how view is easier to learn, usually. And so if your team is all juniors, like, maybe view would be the way to go. But then react has been around longer is a little bit more popular. So maybe it'd be easier to find react developers to work on your projects. So that's really important to think about all those different pieces of the puzzle there.

Emma 45:36  
Absolutely. And that's great. Yeah, I think that's it. That's a mic drop right there. I'm anything to add.

Ali 45:44  
Yeah, and I think another interesting thing is like people always talking about how the front end community is moving so fast, and there's new framework out each week. And as we've kind of been talking about today, it's not really that way anymore, like Angular, React and view have been dominating this conversation. For years at this point, and it hasn't really they have all evolved, like react has hooks now view is implementing hooks, all of that has evolved a little bit. That being said, it's the same frameworks that are in the same conversation. And it's not a huge move from one to the other. And so conversations about how there's new JavaScript framework each week, and it's all moving too fast. I rub me a little bit the wrong way, because I think that they're over dramatizing a problem that was definitely there, but is definitely subsided.

Kelly 46:30  
We're just we over dramatize everything. Yeah.

Emma 46:34  
But I also feel like maybe in the past that that was true, and people had the right to be kind of upset, not upset, but like nervous about that, because the amount of educational material took a lot longer to be released, when new iterations were were produced of these frameworks, right? But now we're in an era where there's so many people producing content, amazing content, that you know, something gets released. hooks got released and like all these big people started pushing out content like the same day or a few days after. So I think back in the day, I could understand that. Now I think we're in a different time.

Ali 47:10  
Yeah, totally agree with that. I think that it's really stabilized in a lot of ways. There's a great ecosystem, like 2015 2016. I think that was super true with Gulp and grant and web pack and parcel and all of those things moving and not knowing which framework would actually become dominant. But now I think that it's really stabilized in a lot of ways.

Kelly 47:31  
Agreed. So let's talk about learning one of these frameworks. And I know that each of us have some of our favorite tutorials for learning various libraries and frameworks. So Emma, what are some of your favorites

Emma 47:46  
so in terms of react, I even today, I've just been taking Thailand, we're going to sis react tutorials, because he's an incredible teacher. He teaches things I would not even think that I needed to know and he reinforces that information and way that like, you watch a video and then you read an associated blog posts, and then you do activities. And so having like different methods for learning really helps you absorb that information, so shout out to him and then also Dave Cydia has a pure react book I would highly recommend as well.

Unknown Speaker 48:16  
What about you alley? Awesome.

Ali 48:18  
So my go to is going to be the documentation. I like reading stuff and just trying to use those primary sources first, and I think reactive view both have really great documentation on their site. Angular does too at this point, as well. I also wrote my own reactive view tutorial, so you can read those some people like them, so hopefully they're helpful. So I don't know. I guess I'm doing a shameless self promotion here. But

Kelly 48:46  
yeah, some people like them, give yourself some credit, people. They're great tutorials. Kelly, how about you? So one of my favorite courses for learning view was Sarah drabness course on front end masters That was kind of my first foray into view before I jumped into working on this client project. And I found it to be incredibly helpful. And when I started learning react, I use the React for beginners tutorial from West boss. I thought that was a really great intro. And I thought the like the activities that you do as you're learning as you're going through the tutorial, were fun. So it kept me engaged as well. So those would be my two favorites. I want to thumbs up both of those because I took Sarah's you of course, I'm front of masters and I mean, it was only a couple hours, but I was able to build like an enterprise website based on that. So that was really great. And I would also thumbs up West boss has some really fun activities. I think a lot of West bosses tutorials are really great. Just the various courses, right his his Is it a beginner JavaScript course? I assume he has one. I know he has a JavaScript 30 course which is really great. Yeah, I need examples of how I can practice JavaScript. That is a really great one right there. Again, right framework but it uses No, no frame. worker library whatsoever is just vanilla JavaScript. So it's a good, it's a good

Emma 50:03  
practice. You can also take those and then use like build the same thing but using react or build the same thing using view. It's really interesting. Exactly. It's totally,

Kelly 50:11  
there's this

Ali 50:12  
site that's called to do MBC. And it does this for both front end and back end frameworks. But it builds the same To Do List app in like every single framework you can imagine. So you can see the different code for each one. I think that that's a really great resource to so I thought this episode was really educational for me, as well as hopefully the audience. So if you liked this episode, tweet about it. We select one Twitter each week to win Ladybug stickers. They're super cute. And if you know somebody who should be a guest on our podcast, visit our contact page on Ladybug Dev to submit a name on that site. We also have our transcripts and full show notes. So definitely check it out. We post new podcasts every Monday so make sure to subscribe to be notified and leave a review. We love seeing your thoughts. Thanks again to log rocket for sponsoring this episode.

</div>
