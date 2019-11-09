---
title: Debugging 101
date: "2019-11-12"
audio: https://pinecast.com/listen/4c0623a3-1287-4cff-9ba1-4ade89e5d35a.mp3
slug: "debugging"
description: "How often have you encountered a problem and struggled to figure out where to start? Or maybe you aren’t super familiar with the browser tools available to debug your JavaScript code. So today we’ve brought on a special guest, Rebecca Hill, to help us learn about the world of debugging."
episode: "020"
length: "27:44"
draft: false
---

## Sponsors

Shout out to our sponsors for supporting the LadyBug Podcast!

<a class="image-link" target="_blank" href="https://www.shopify.com/careers"><img src="../../assets/shopify.svg" alt="Shopify Careers"></a>

Are you a developer looking for your next challenge? Meet Shopify. We’re on a mission to make commerce better for everyone - but we do things a bit differently. We don’t tell people how to solve problems - we give them the tools, trust, and autonomy to build new solutions. We don’t work alone - we leverage the diverse perspectives across our teams in everything we do. And we don’t have all the answers - we’re big enough to tackle problems at scale but small enough that we haven’t figured them all out. If you’re a builder at heart who wants to solve highly technical problems. If you want to take all of your life experiences and apply them to a blank canvas. Or if you want access to really powerful tools - Shopify is the place for you. Visit <a target="_blank" href="https://www.shopify.com/careers">shopify.com/careers</a> today.

<a class="image-link" target="_blank" href="https://www.recurse.com/about"><img src="../../assets/RC_logo.svg" alt="Recurse Center" /></a>

When’s the last time you worked on that side project you’re always thinking about? How much progress could you make if you had three months to work and learn in a room full of smart, friendly, intellectually curious programmers?

If you’re thinking: “I could make a lot of progress!” you should check out the Recurse Center.

The Recurse Center is like a writer’s retreat, but for programmers: There are no classes or teachers. You direct your own learning and time, and can explore what interests you in a supportive community of 1600 programmers from all over the world.

Whether you’ve been programming for six months or 30 years, RC is for you. Maybe you want to recreate vintage computer art, make contributions to Rust, learn CS best practices or start developing a new programming language? Those are all things people have done at RC!

You can attend a retreat in Brooklyn for one, six, or 12 weeks. RC is free for everyone, and offers living expense grants of up to \$7,000 to people from underrepresented groups. They have an integrated recruiting agency, and offer career support whether you’re looking for your first programming job or want to find a senior role at a great company.

Learn more about RC and how to apply at: www.recurse.com

## Show notes

- **Who are you?** - 1:12
- **How did you learn so much about debugging?** - 2:00
- **Basic debugging steps** - 3:12
- **Is debugging language agnostic?** - 6:21
- **Why don't we teach debugging?** - 9:36
- **Different types of debugging** - 13:45
- **Common debugging mistakes** - 17:09
- **Testing** - 19:39
- **Browser features for debugging** - 20:50
- **Tips for new developers** - 22:40
- **Which browser is best for debugging?** - 24:55
- **Where can you learn more?** - 26:08

## Resources

- [Essential JavaScript debugging tools for the modern detective by Rebecca Hill](https://www.youtube.com/watch?v=TtsvMRxmfGA)
- [Rebecca Hill](https://twitter.com/rebekaka)
- [Mindset by Carol Dweck](https://www.amazon.de/Mindset-Updated-Changing-Fulfil-Potential/dp/147213995X/ref=asc_df_147213995X/?tag=googshopde-21&linkCode=df0&hvadid=309205882077&hvpos=1o1&hvnetw=g&hvrand=8764043268399286259&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9041877&hvtargid=pla-453595936974&psc=1&th=1&psc=1&tag=&ref=&adgrpid=60093767645&hvpone=&hvptwo=&hvadid=309205882077&hvpos=1o1&hvnetw=g&hvrand=8764043268399286259&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9041877&hvtargid=pla-453595936974)
- [Debugging in Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript)
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)
- [Debugging JavaScript in Firefox](https://www.jetbrains.com/help/webstorm/debugging-javascript-in-firefox.html)
- [Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Mozilla/Debugging/Debugging_JavaScript)
- [Chrome Developer](https://developer.chrome.com/home)
- [Umaar Dev Tips](https://umaar.com/dev-tips/)

## Help us out

- <a target="_blank" href="https://podcasts.apple.com/us/podcast/ladybug-podcast/id1469229625">Leave us a review on Apple Podcasts</a>
- <a target="_blank" href="https://link.chtbl.com/ladybugpodcast">Subscribe to our podcast</a>

## Nominate A Ladybug Podcast Guest!

Want to nominate yourself, or someone else, to be on the Ladybug Podcast? Fill out our [nomination form](https://forms.gle/SUK6Usk6EnnkTsjG8) to let us know!

## Transcript

<div class="transcript">

**Emma** [0:00]
How often have you encountered a problem and struggle to figure out where to start? Or maybe you aren't super familiar with the browser tools available to debug your JavaScript code. So today, we've brought on a special guest Rebecca Hill to help us learn about the world of debugging. So let's jump right in.

**Kelly** [0:17]  
Welcome to the Ladybug podcast. I'm Kelly.

**Ali** [0:19]  
I'm Ali.

**Emma** [0:20 ]
And I'm Emma. And we're debugging the tech industry.

**Kelly** [0:22]  
Are you a developer looking for your next challenge meet Shopify, they're on a mission to make commerce better for everyone. And they do things a bit differently. They don't tell you how to solve problems. They give you the tools, trust and autonomy to build new solutions. They don't want you to work alone, their structures so you can leverage the diverse perspectives across teams in everything you do. And they don't pretend to have all the answers. They're big enough for you to tackle problems at scale, but small enough for you to discover and solve new problems. If you're a builder at heart who wants to solve highly technical problems, and you want to take all of your life experiences and apply them to a blank canvas or if you want to access really powerful tools. Shopify is the place for you visit shopify.com slash careers today.

**Emma** [1:04]  
So Rebecca, welcome to the Ladybug podcast. We're really excited to have you here today. Can you tell us a little bit more about who you are and what you do?

**Rebecca Hill** [1:12]  
Yeah, thank you. I'm really excited to be here. So I have been working for the last three years in Amsterdam. I'm originally from New Zealand. But I currently work for a company called We Transfer where we, we work on a bunch of software, including the main tool, which is what I work on, which is where you can transfer files and send them to other people around the world. And I do that in a team of about eight people. And I'm the team lead for that team. And I also manage the engineers and that team. And yeah, other than that, I write mostly JavaScript, but HTML, CSS, and a little bit of Ruby sometimes as well.

**Kelly** [1:52]  
Awesome. So we obviously brought you onto this show for a reason. How did you learn so much about the debugging?

**Rebecca Hill** [2:00]  
Well, honestly, it came because I signed up to do a talk about debugging, and was like, Oh, I should probably learn a bit more. So I think I did a little bit of.net, like, quite a few years ago now. And, and Visual Studio has really great as a really great debugger. And when I was doing more JavaScript, I was sort of missing that. And I was like, I mean, I don't think this exists in JavaScript. I should really like, figure this out and learn more about it and actually use the debugger. And, and yeah, so I signed up to do a talk and I just researched the hell out of it. And yeah, that's where I'm at now.

**Emma** [2:38]  
I feel like that's where we all learn skills that way. Like I did the same, where I like sign up to give a GraphQL conference talk and I was like, Wait a second. I don't know anything about GraphQL

**Kelly** [2:49]  
Yeah, I guess when you're forced to be a subject matter expert on it. You probably should you know, learn a thing or two about it first. It's a pretty good move.

**Ali** [2:57]  
Yeah. Like conference Driven Development. Awesome. So when you're debugging your problem, what are the basic steps that you normally follow in order to find the bug and squash it?

**Rebecca Hill** [3:12]  
Yeah, I guess the absolute first step is reproducing it. And there's my favorite thing. And it's like, it's it's my favorite thing when you work with people who who get there. So we have like a customer support team. And they'll say, hey, this particular user has this problem. And I'm like, cool, I can't reproduce it. And they're like, okay, we'll figure it out. We figured it out. Thank goodness, because if you can't reproduce the bug, you're completely stuck. Really? Right. So that's the first thing and then the, it depends obviously, on the type of bug but I would usually try I'm not always good at this, but I try and write a test that that makes the bug appear whatever it is, and because then you can like focus on just fixing that particular failing test. You know, you're focused on the bug itself, you know, getting distracted by other things. And then also So you prevent the bug from actually appearing again, which is pretty useful. And then next steps, I guess the key is kind of trying to narrow down where the bug actually is occurring. So whether you're using the dev tools to do that, if it's a I mean, if it's a front end bug, obviously, or your sometimes, you know, sometimes you get lucky and you just read through the code and you see a spelling mistake. You know, it depends obviously, on the on the complexity of the bug, but narrowing it down and then trying to be really methodical about the changes that you make when you're exploring how to fix it. So that's the like, the biggest mistake I think people get into, especially when they're first kind of trying to learn how to debug is that they change a bunch of different things. And then they're not actually sure what it is they changed and what impacted the site or the app or whatever they're working on in the way that it is. And so, yeah, trying to be really logical about those steps. That's the The key to that really,

**Emma** [5:01]  
I feel like too not just going in and changing a bunch of things you don't necessarily understand. But like copy and pasting solutions that you think might work from the internet. I know we all like have gripes about this. But if you like copy and paste code from the internet that you don't fully understand, and it just like magically works, that's a very dangerous area to be in.

**Rebecca Hill** [5:19]  
Yeah,exactly.

**Kelly** [5:20]  
Like the favorite the favorite question. They're the two questions, why is it my code working? And also, why is my code working?

**Emma** [5:27]  
I'm a little more concerned about the why is it working part?

**Ali** [5:30]  
Yeah, yeah, I have so many students. So I teach people who are learning to code and so many of them will just go to stack overflow post with like, 20 answers and just copy and paste every single one in and so one of them works. It's like, please, no, no. It looks like debug this for real.

**Rebecca Hill** [5:48]  
No exactly. And like, even if one of them does work, that's great. But you're not actually learning anything, you know, and it's just going to come up again, and you're going to be stuck next time.

**Emma** [5:57]  
So I think that debugging is a gift in and of itself, because it's too problem solving skills. And I know Ali, something that you're really adamant about teaching is problem solving skills. But instead of looking at, at it as, okay, my, my code doesn't work. And, you know, I'm not good enough to figure out why look at is like a little opportunity or like a little mystery to figure out what's wrong and figure out what the best solution is. And this, I guess, kind of leads me into my next question, which is, in general, do you think debugging is language agnostic? Or does it really kind of depend on the coding language? I have an opinion on this, but I'm curious to see what you think.

**Rebecca Hill** [6:30]  
Yea h, for sure. Like the mindset and the process. And the and a lot of the tools that you use, in fact, can be used in any language for sure. I think, obviously, there are some specific techniques or some specific tools that maybe are specific to a framework, but generally, no, I think it's completely the same, same sort of concepts across languages and what what's your take?

**Emma** [6:56]  
Yeah, I think my take I don't I do agree. I think a lot of it Lot of the debugging process is understanding problem solving and being able to kind of take things down to the core problem and not getting overwhelmed by maybe how massive your code bases are the fact that you don't understand everything, isolate things, and try one route. And if it doesn't work, understand why it doesn't work and keep track of it. So you're not running around in circles. But I do think, obviously, some bugs that you read into our language specific or framework specific. And if you're struggling to understand the language, nuance or a framework paradigm, at that point, I would suggest maybe going and reading some documentation about how things work specific to that language. Because while there are some bugs that are, like language agnostic that can be dealt with problem solving, I think some of the bugs could also be triggered by a lack of understanding the language or framework you're working with.

**Rebecca Hill** [7:50]  
Yeah, definitely. I can't remember the number of times where I've found a bug in something and you know, frustrated, like worked on it for hours and then I'm like, oh, maybe I should just read the documentation on this function. And I see that, like, I was supposed to it set an extra parameter. And I completely forgot, you know, like, it's just, yeah, it's like, actually reading through the documentation sounds so simple, but so easy to forget.

**Emma** [8:14]  
I don't want to monopolize this conversation. But something I just thought about was, for anyone listening who really struggles with debugging. And so we'll get into this in the next question, but I still to this day struggle with debugging. And when I was starting out my coding journey, I would take the easy way out and just simply ask my co workers for the solution, and I wouldn't sit there and try to figure it out. And not this is wrong for two reasons. The first being you'll never learn how to learn. You'll never learn how to debug, or grow as a developer. And secondly, it'll burn bridges with your co workers if you're constantly bothering them to give you the solution. So this is an important skill to learn. But it's a very, very hard skill to learn and I'm gonna let Kelly take over and ask the next question.

**Kelly** [8:58]  
And like just adding on to that first So I mean, that's it's important that you do try first. But you know, if you have co workers they're available, try first then ask for help. But it's really helpful to be like, Hey, this is the problem I'm having. This is what I've tried to do. It didn't work. Can you help guide me to what might be a great solution? So, on that note, let's talk about why debugging isn't actually taught as a skill. Like I never actually officially learned. I've also taught self taught. So of course, nobody taught me anything. But you know, I never really learned how to properly debug so so why don't you Why do you think that we are, we aren't teaching debugging as a skill.

**Rebecca Hill** [9:36]  
Well, I think it's just it's one of those things. It's like it's a workflow thing, right? It's like something else that I also think my goodness, why are we not teaching this is just like some basic bash skills for front end is like, just basic, like navigating around the console and stuff and like, I think anything that's not the actual code that needs to be written is always kind of undervalued. And passed over and I wish we would spend more time on it because it actually makes us way more efficient program is. Yeah. So I think it's just that I think it's just like what you can get it done. Without knowing all the tools that are available to you, you can figure it out. But yeah, without spending the time to really focus on improving those skills, you're missing out on a lot of opportunities to make yourself a better programmer.

**Emma** [10:25]  
I want to delve into what you just said real quick, because I think that's important, which is like any non directly, non programming skills aren't taught as being as important. And I think that there's a lot to unpack there. And we've done an episode all about teaching. But I'm curious, like, why, like, it's a little bit tangential, but I think it's important. It's like, why don't we teach these things which are so important to development? Let's stick with like web development for a second because like, I think the backend also has its own issues. But in terms of web development, we work in the browser JavaScript is easily to bubble in the browser. Why isn't This taught is a skill that's, you know, necessary to learn. That's I don't get that.

**Kelly** [11:06]  
I'm kind of curious, Ali. I mean, you you teach code like, does this come up in conversations?.

**Ali** [11:12]  
So I teach both of these things. Maybe a little bit during this conversation, but my actual day one is usually teaching them the command line, and how to navigate that. And then debugging comes usually in JavaScript, usually teach just a little bit of the JavaScript specific tools like, you know, breakpoints, and chrome and all that. People have asked a little bit more about the VS code specific debugging tools now to which we talked about down the road. But I also make it to that each unit for the most part, they'll have a debugging lab, or at least I'm adding that back into the curriculum the next time I teach. So they essentially are getting given a broken app that instructors wrote and they have to fix those bugs in it. So it is something that I focused on teaching but it is Not something that I learned in computer science in college at all, and definitely something that I had to learn as I went. So I think part of its just timing and thinking that you have to pick up some things yourself, which I think is very valid that at some point, you have to take what you've learned and extend it and add to it. But at the same point, I think that debugging is really important tool to instill from the beginning.

**Kelly** [12:26]  
When's the last time you work on that side project? You're always thinking about how much progress could you make if you had three months to work and learn in a room full of smart, friendly, intellectually curious programmers. If you're thinking I can make a lot of progress, you should check out the Resource Center. The resource centers like a writer's retreat. But for programmers, there are no classes or teachers, you direct your own learning and time and it can explore what interests you in a supportive community of 1600 programmers from all over the world. Whether you've been programming for six months or 30 years recruit centers for you. Maybe you want to recreate vintage computer art, make contributions to rest. Learn computer science, best practice. or start developing a new programming language. Those are all things people have done at recur center, you can attend a retreat in Brooklyn for one, six or 12 weeks. Ricoh center is free for everyone and offers living expense grants of up to \$7,000. to people from underrepresented groups. They have an integrated recruiting agency and offer career support, whether you're looking for your first programming job, or you want to find a senior role at a great company, learn more about Resource Center and how to apply at WWW dot recurs. com I think it's really great that you know, we, you are adding it back into your curriculum, and you have been teaching this stuff. And you know, it goes to show that you didn't learn it when you were in college. But there's now actually importance being placed on debugging. So people are taking it seriously and recognize how important it is to know how to properly debug a problem.

**Emma** [13:45]  
I also, I want to just add to that, like we haven't fully like we all know what debugging is, but we haven't physically defined it yet, which I think is important because it'll lead to some interesting conclusions that maybe I didn't think of. So debugging is really important. of identifying and removing errors from your software hardware. And when I think of debugging, I physically think of like stepping through issues in Chrome. But it's really more than that. It's, again, the process of identifying or moving. And so that could just be walking through your code on pen and paper even and writing down what variables hold what values at what point in time or like what scope you're in. It could also be like tallies point, the VS code integrations for debugging, it could also be the browser. And so an important note that I kind of just came to this revelation because I've had my unconscious biases about debugging is that it's not just in the browser or in your ID or on pen and paper is all of these things.

**Rebecca Hill** [14:38]  
No, honestly, some of my best bugs have been fixed while I've been like, Okay, I'm just gonna go and walk downstairs and have a cup of coffee and something will come to me and I'll be like, Oh, yes, for sure. It's not about the tools that you use, although there's a massive important part of it. But yeah, and like the stack of paper that I have on my desk of diagrams where I've been like, Okay, this state goes to this thing. Yeah, it's a it's much more than just the tools for sure.

**Ali** [15:03]  
Totally, totally. And they're slightly different across languages. But for the most part, the ideas of breakpoints and all that kind of moved from language to language. So I'm going to quote you from one of your conference talks. The debugging isn't just about the tools you use. It's about your mindset and the process and how you actually work through the task. Can you delve into that a little bit more? I think it goes along well, with the conversation that we've been having.

**Rebecca Hill** [15:28]  
Yeah, for sure. I think like picking up on a couple of things that some of you have said already is like, one of the things that I talk about sometimes is around like the fixed and growth mindset, you know, like having a fixed mindset, meaning that you think that your skill level you know, has a cap and you are particularly, you know, you're at this level, and if you can't fix this bug, it means that that you will never be able to fix that bug and that's why you need help from somebody else. Whereas that growth mindset is all about Okay, I will figure this out. You know, maybe I need some support at some point. But like, I will figure this out one day, and being able to look at your bugs in a optimistic fashion. And like, knowing that you'll figure it out and knowing that in figuring out you will learn so much more, you learn so much more, I think from fixing broken code can he do from writing good code? So, yeah, I think that mindset is super important. And then also around the processes for sure. Like, what we were just talking about around like, okay, just sketching out on a piece of paper, like, what is the problem that I'm trying to solve here and really isolating where the bug is, even if it comes down to like, Okay, I'm going to just coming out this whole bunch of code here, make sure that this isn't the thing that's impacting the bug and and delving into, okay, it's not this line, but maybe, okay, here, maybe, maybe here and then and then eventually figuring out exactly where the problem lies. And that that side of things is just as important as the tools you use.

**Ali** [16:53]  
I love that Carol Dweck is one of my favorites. So love speaking about growth mindset whenever possible.

**Kelly** [17:00]  
So I also love what you said about you learned so much more about fixing bad code than then writing good code.

**Ali** [17:06]  
Because that's, that's so true. So true.

**Kelly** [17:09]  
So let's talk about in the terms of like new developers, what do you think are some common debugging mistakes that new developers make?

**Rebecca Hill** [17:16]  
Yeah, well, the thing that I say for sure, the most is, is changing things, is making multiple changes that impacts the code in different ways at the same time, so like, you make one change, and you're like, Okay, that didn't fix things. And so then you make another change. You're like, oh, that didn't fix things. Either. You make another change away. Okay, hold on. Was it? Was it this fix that I made that fixed it? Or was it the first fix in combination with third fix, you know, and people just get themselves into a big old mess. And so changing one thing at a time is like my biggest thing that I try and teach I've worked with a lot of intern and junior developers over the years as well and, and that's that's one thing and Then also, I completely agree with what you were saying before about how, when it comes to trying to debug a problem, the thing that I always sort of say for junior developers is like, spend at least an hour on the problem, try and figure it out yourself. But don't spend much more than that. I mean, it depends on the company that you're working for. And the project, you're working on these sorts of things. But usually, for me, it's like, okay, spend about an hour on it. If you can't figure it out, then ask for help. But if you can also, like figure out maybe there's some other tasks you can do in the meantime, or, or work on something else, then like grouping up your questions for your senior developers to like ask them once or twice a day run just constantly bombarding, like, this doesn't work doesn't work, then then you end up with this healthy balance of like, asking for enough help, but not too much help and not annoying people too much.

**Kelly** [18:50]  
Yeah. And it presents itself differently, as you said, from company to company, what they kind of expect you to do. I think the one additional debugging mistake that I would add to this list. is not debriefing. After you've fixed it, not not like writing down, you know, somewhere recording the documentation or in your own personal notes like this is a bug to experience, this is what I did to fix it. Because I cannot like count the number of times I've had to fix the same bug and had to relearn how to fix it, because I did not actually record anywhere what it is that I did.

**Rebecca Hill** [19:22]  
Yeah, exactly. And that brings me back to that one of my first things was like writing a test, you know, like the number of times I've seen a pull request, or someone's been like, Oh, we need to manage this in really quickly because it fixes this bug in production. You're like, okay, but have you test? Have you added a test for it? Because otherwise, it's just going to happen again?

**Emma** [19:39]  
Yeah. Awesome. So my question is, how can testing help reduce the amount of debugging you might need to do because we all understand that testing codes important, but maybe we haven't thought about that in conjunction with is it inverse, the amount of bugs that we will have, right if we write more like fleshed out tests is that inversely like reduce the number of bugs that We could potentially have in our code.

**Rebecca Hill** [20:01]  
Yeah, I think so like it's about edge cases, right? So when you're writing a piece of code, you're typically focused on, you know, solving or creating one, one feature or one project. And you're thinking about the happy case most of the time, because that's what you hope your users are kind of going through. But it's not until sometimes you get to writing the actual tests that you think, oh, but what if the user types in this completely bizarre? I don't know, set of characters that my code doesn't understand, you know, like, and when you actually thinking about it from a testing perspective, you you hit way more edge cases than you might before and edge cases, usually where bugs actually appear. So yeah, I think testing is incredibly useful to avoid as many bugs as you can.

**Ali** [20:50]  
Awesome. Let's dive a little bit deeper into debugging JavaScript specifically, just since I know that you're mostly a JavaScript developer and we for the most part, Talk about front end development to some extent as well. So what are some of the cool features of the browser that you can use to debug your code?

**Rebecca Hill** [21:09]  
Well, there's so much out there, right? Like the talk, I think that you guys would grab this stuff from is, is just full of tools that the browsers have out there. I think like, the actual debugger is, of course, one of the most important ones. But you can step through the code and you can inspect the state of the JavaScript at it while it's executing. You know, that's incredibly important. But there's so much other stuff like the different panels and dev tools, sometimes it can look quite overwhelming, but actually taking the time to go through that and and try and figure out what you can, what advantages you can get from it like, like this audience audits panel like performance and like accessibility and, and even the console itself is so many different functions in that in that little little box at the bottom of your digital is You know, there's this many things out there, it's, yeah, it's definitely worth spending the time and looking into it.

**Emma** [22:05]  
So just the native browser actually work with it like in concordance with popular JavaScript frameworks and libraries or other plugins that you can use to debug these types of things.

**Rebecca Hill** [22:15]  
Yeah, boys. I mean, I think with any sort of JavaScript, you can, you can use most of the tools in the in the dev tools. But there are of course, plugins that are framework specific, that make things even easier. So like, I, I mostly write react, so I use the reactive tools a lot. And also Redux, has really great dev tools. And for sure, I'm in those all the time as well, so

**Emma** [22:40]
And so in your talk, which will link in the show notes is called a central JavaScript debugging tools for the monitor detective, catchy title. By the way, I'm terrible at coming up with conference talk titles. So you touched on a lot of different things you touched on stepping through over and play through I'm you talked about console dot x silly console log So I don't know debug browser, watch breakpoint types black box script like there are so many things you touched on, if you could pick like one or two things that you think are really, really important for a new developers to understand how to use, what would those be?

**Rebecca Hill** [23:14]  
I think probably the out of that list, I would say, the actual debugger itself is really important to know how to use not necessarily, you know, it's not necessarily a case of like, oh, once you learn this, this is the only thing you will ever use. I think people who Oh my god, the number of people who want me to say, only ever use the debugger only ever use console that log I've just like, okay, go away. You use what you want. And when you want and when it's most useful for you. And you know, it depends. It depends. People don't like hearing it depends, but it depends. So yeah, definitely learning about the debugger so that when you need to use something like that is that knowledge is there for you. And then also, just, I think Getting source maps working properly so that you can inspect your code in the dev tools as it actually appears. I think that would be the other most important thing, especially because I mean, I think it's really important to have source maps and production, which is something that some people get a little bit antsy about. But I think it's, that is the time when you need source maps the most because you're in production trying to fix something quickly.

**Emma** [24:22]  
Could you quickly explain exactly what a source map is for those who don't understand?

**Rebecca Hill** [24:25]  
Yeah. So source map is just a way to map your compiled code. Because usually when we write JavaScript, we, we modify it, we make it smaller, we make it pretty unreadable to a normal person. And source maps are just a way to map that back to what your original code actually looks like. So when you're looking in the dev tools, and you're using the console, and you're exploring around what you've written, you can actually read what the code is that you wrote rather than something that is kind of normally looks like a tangled mess. So uh, yeah,

**Kelly** [24:55]  
That's really helpful. Thank you Emma for asking that because I wouldn't have been able to You define source maps by any means. In your experience. Do you think that there is one browser that's superior in terms of debugging over other browsers?

**Rebecca Hill** [25:10]  
Well, I guess I'm I'm pretty biased here because I mostly use Chrome and pretty much have used chrome my entire career. For me, it works incredibly well. It has a just a ridiculous number of tools and things that are in there that are really useful for me day to day. However, I have heard a lot of really good things about Firefox, especially recently, I've been seeing a lot of really cool tweets about like, some of the stuff that they do with the grid inspector and stuff is really cool. Like, I think Firefox also is an amazing browser for debugging.

**Ali** [25:42]
Totally. I also love in Chrome, how you can do no debugging, you can set your note apps to be debugged in Chrome. I think that that's so cool, especially like the just debugging if you're writing tests, that's one of my favorite features. And I also totally agree that Mozilla is incredible for CSS. Double Specifically, I think it's great. They're awesome. So if our audience wants to learn even more about debugging, where would you point them?

**Rebecca Hill** [26:08]  
Well, I guess the first thing that comes to mind is actually the Chrome developer. like they've got like a Chrome developer website. I think it is like developer chrome.com or something like that. I think, yeah, I got a lot of content from that. from that site. They have a lot of really nice stuff from the very beginning of like, okay, figure out how to reproduce your bug to like advanced tools and in in Chrome, so that's probably where I'd start. I signed up for I think his name is Omar hand, say as like this amazing Dev tips website. I think it's like Dev tips or something. And he sends out like a an email newsletter with like a little GIF of just a random feature in the dev tools. And that also is got some really cool stuff. That's one of the ways I kind of keep up to date with what the developers are releasing on Chrome.

**Kelly** [26:55]  
Awesome. I am totally going to take a look at these these resources myself as well because I know I have a lot Learn so I do you have any any final parting words for for those listening again we're we've reached the end of the interview.

**Rebecca Hill** [27:08]  
Oh wow no I think we covered everything actually which is really nice. Thank you guys so much.

**Kelly** [27:14]  
We covered a ton here and I'm really excited to dig into these because I think my my debugging skills certainly certainly can be improved. So awesome. If you liked this episode tweet about it will select one tweet or to win Ladybug stickers each week. We post new podcast every Monday, so make sure you subscribe to be notified and leave a review. And once again, thank you to Shopify for sponsoring this week's episode. See you next week.

</div>
