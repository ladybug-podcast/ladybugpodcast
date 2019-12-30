---
title: Web Performance
date: "2019-11-18"
audio: https://pinecast.com/listen/0406aa83-fd62-4add-9b99-096d2b211047.mp3
slug: "web-performance"
description: "Today we’re talking about web performance. Did you know that 40% of users abandon sites that take more than 3s to load? Turns out making your sites fast is pretty important! In this episode we’ll talk about what web performance is, why we should care, and we’ll give you tips for optimizing performance and measuring it."
episode: "021"
length: "32:59"
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

- **What is web performance?** - 1:18
- **Why should I care about performance?** - 3:48
- **The cost of JavaScript** - 6:59
- **What should I be measuring?** - 14:02
- **Performance tools** - 17:46
- **Performance-improving methods** - 19:40
- **Progressive web apps** - 26:49

## Resources

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Gatsby](https://www.gatsbyjs.org/)

## Help us out

- <a target="_blank" href="https://podcasts.apple.com/us/podcast/ladybug-podcast/id1469229625">Leave us a review on Apple Podcasts</a>
- <a target="_blank" href="https://link.chtbl.com/ladybugpodcast">Subscribe to our podcast</a>

## Nominate A Ladybug Podcast Guest!

Want to nominate yourself, or someone else, to be on the Ladybug Podcast? Fill out our [nomination form](https://forms.gle/SUK6Usk6EnnkTsjG8) to let us know!

## Transcript

Find errors in our transcript? Feel free to open a [pull request](https://github.com/ladybug-podcast/ladybugpodcast)!

<div class="transcript">

**Ali** [0:00]  
Today we're talking about web performance. Did you know that 40% of users abandon sites that take more than three seconds to load? Turns out making your sites fast is pretty important. In this episode, we'll talk about what web performance is, why you should care, and we'll give you tips for optimizing performance and measuring it. Let's get started.

**Kelly** [0:22]  
Welcome to the Ladybug podcast. I'm Kelly.

**Ali** [0:24]  
I'm Ali.

**Emma** [0:25]
And I'm Emma. And we're debugging the tech industry.

**Kelly** [0:27]  
Are you a developer looking for your next challenge? Meet Shopify. They're on a mission to make commerce better for everyone. And they do things a bit differently. They don't tell you how to solve problems. They give you the tools, trust and autonomy to build new solutions. They don't want you to work alone, they're structured so you can leverage the diverse perspectives across teams in everything you do. And they don't pretend to have all the answers. They're big enough for you to tackle problems at scale, but small enough for you to discover and solve new problems. If you're a builder at heart who wants to solve highly technical problems, if you want to take all of your life experiences and apply them to a blank canvas, or if you want to access really powerful tools, Shopify is the place for you. Visit shopify.com/careers today.

**Ali** [1:09]  
So what is a web performance?

**Kelly** [1:12]  
I'm going to defer to the resident performance expert here, which, Ali, your just going to keep on talking?

**Ali** [1:18]  
Who's gonna keep on talking? Okay. So when we're talking about web performance, we're talking about how fast it is for your website, or your script, to run, so how fast it's going to be for your user to type in a URL, press enter, and then see a site and then also have it be interactive. So there's both the time to paint, which is how long it takes for stuff to actually show up on the page. And then also time to interactivity. So how long it takes for them to actually be able to interact with that website and have it be fully working. So I think that's a big part of web performance is how quickly people can actually interact with your site. Anybody have anything to add on to that?

**Kelly** [2:02]  
I think in a previous episode, you also touched on perceived versus actual performance, which I think is interesting, because there's nothing I really, really thought about before, but it's absolutely true. So perceived performance, you know, refers to how fast you user's gonna, like, thinks your website is, regardless of how fast it actually says so in the, like, the technical stats. So when it comes to website optimization, what your user thinks is what matters, it's not really with the, you know, the technical stuff that happens in the... on the... behind the scenes. It's how fast... as long as the user is having a good experience, that's what ends up converting, that's what ends up making a good experience overall, for the website, the app, the script, the business, whatever we're really talking about here.

**Ali** [2:44]  
Yeah, definitely. We want the user to think the page is fast. And so things that you can do to make them think it's faster than it actually is, is like adding nice animations that make the page feel slick or having a loading page so that they know that it's supposed to be loading and they're just not hitting a white screen or something along those lines. All of those little touches make it so that your user thinks that the site is actually faster than it is. Of course, the real performance is super important as well, especially because users from around the world who are coming to your site, who maybe have less than perfect internet. I live in rural America right now and the Wi-Fi, right where I am is pretty good. But if you go outside of where I'm at, there's pretty much no cell phone service. So I can definitely relate to some people there for sure with those issues. There's also two others things... I also want to talk a little bit about how you can do a lot on the backend, and also the frontend for optimizing performance. So we'll talk about things that you can do on both sides throughout this episode as well.

**Emma** [3:48]  
I think we forget that performance is about people and it's about user experience. And we get wrapped up in the whole like, how is this technically achievable? How do I make my site performance? But we forget the why. And the why is not so things load faster. I mean, yeah, I guess technically that is. I think the why is more about so our users have the best possible experience that they can have.

**Kelly** [4:13]  
And I think we really need to put a lot more weight on this, as, you know, not only as developers, but as bringing it up with development teams as well to remind them that this is at the end of the day, the users what's most important here. And you know, we... Ali touched previously on the ethics of performance. You know, not everybody has the privilege of having high speed internet or having a modern device that's going to be fast to load and knowing what the experience is going to be like for somebody else using slower internet or a slower device. It's key to having an overall performant website. It's not just what you personally experience as you're building it out.

**Emma** [4:50]  
I think this is really important and depends on the type of software you're making as well, right? Like if you're making a banking application that people use every day to transfer money to pay their bills, that had better be performant and accessible by people all over the world because at the end of the day performance directly correlates to accessibility. Accessibility is not just about people who are... maybe have visual impairments or, you know, navigate just using a keyboard. It's also about can I access this information? Is it physically accessible to me? And if you're building something, such as a banking application or something that governs people's lives, day to day lives, and can have severe implications if they can't access it, you have, you know, an ethical obligation to make sure that anyone anywhere can access it.

**Ali** [5:34]  
Yeah, definitely. I went to a really interesting conference talk recently and hopefully I can link it in the show notes, but just about how much of web traffic is coming from, especially India and Indonesia, where they're... the devices that most people have there are not brand new iPhones. They're devices that are a little bit slower and also their network speed is slower as well. And so that's a huge percentage of the world and the web traffic that you may be getting even just in general, more than half of web traffic is from mobile instead of desktop. I... again, where I live in New Hampshire, or where I grew up, a lot of people don't have computers, they just have phones. And I think that that's definitely a very true story throughout the world, not just here.

**Emma** [6:24]
Not only that, like what we forget too, and I'm so guilty of this is when I test my software or my applications, I typically test it on my own device. And it's like, not everyone has the same device that I have. That it's a privilege that I am lucky to have. I'm lucky to have the devices that I have, but not everyone has that. And so when you're testing your applications, it's really important to test performance across all types of... maybe it's not an iPhone, maybe it's an older generation. And so we just need to be conscientious of these things.

**Kelly** [6:52]  
I know we're going to touch on this later, but that's why I really love the Lighthouse tool and how you can throttle the network speed.

**Ali** [6:59]  
Totally, and even that introductory statistic that 40% of users abandoned sites that take more than three seconds to load. That's pretty dramatic statistic. And there's also the Amazon statistic, I always forget exactly what it is, but that Amazon sped up their site by like a second and it dramatically changed how many people purchase from their site. I think Kelly, you probably know more about that.

**Kelly** [7:27]  
Yeah, yeah. And it's not even like specifically for Amazon. You know, working in e-commerce site speed is everything. So if you have a slow loading site, people are not going to add anything to the cart, they're not going to shop around because the site is too slow to actually do so. So we do a lot with site speed optimization, and there are small changes that you can make that have a significant impact on the monthly revenue for these merchants.

**Ali** [7:52]  
Yeah, okay. I found the Amazon statistic. So, point one second of load time impacts their sales one percent. So wild, which is wild. That's not even a perceptible amount of time. But apparently, it is that important that we have our sites, both for the users, which are obviously the most important piece of the puzzle, but then also, if you're trying to sell anything on that site. Another piece as well is that search engine algorithms take performance into account now too, especially Google. So if you have a really unperformant site, I know that a lot of people who were using base-level WordPress with a bunch of plugins, and it had a lot of issues with a recent Google algorithm update because their performance was not good. And so that really devalued them in the ranking. So that's another thing as well, people, most important part making sure that we're making websites accessible for everybody, but then there are also those additional business reasons that we wanted to bring up as well.

**Kelly** [8:51]  
I let one side tangent on the WordPress side of things. And this kind of goes for anybody who uses any kind of platform that involves installing plugins or apps or, you know, whatever it might be. A lot of these apps, like, they're not talking to each other. So the app developers are not like, I'm going to load these things, oh, you're loading these things, so I'm not going to load them. You end up loading the same scripts over time. And it really bogs down your site. And we're about to get into our favorite topic about JavaScript. But yeah, it's something to definitely be mindful of, if, like, when you're working on a website that's installing a bunch of plugins, you got to be very careful about the site speed.

**Ali** [9:30]
Yeah, definitely, for sure. Especially using other people's code. Like, you can write so much code yourself. And, I mean, that is important. But if you're loading at a bajillion third party libraries, then you're going to probably have a lot of issues. So I think we were going to talk about the cost of JavaScript and so Addy Osmani has this amazing article about the cost of JavaScript and how expensive JavaScript is for load times on your websites. So he says that JavaScript is still the most expensive resource we send to mobile phones because it can delay interactivity in large ways. And so it's really, really important to think about, especially how much JavaScript you're loading onto the page, especially since so many sites are just built in JavaScript with... Yeah, just filled in JavaScript now. And so thinking about that is super, super important. We'll talk about different strategies for optimizing that later in this episode. But I think that that's the number one thing that you can think about when you're building these sites is how much JavaScript are you loading onto the page.

**Emma** [10:34]  
I also found a couple interesting things. So the first, I found a statistic that Pinterest increased their search engine traffic and their signups for new accounts by 15% - which is a lot - when they reduced their perceived wait times by 40%. So they weren't reducing their actual performance, but they were reducing perceived wait time and maybe they were doing that with loading animations or other interactive things. That's just... that blows my mind. It's like they most likely didn't even reduce their perform, or like their actual load time, just their perceived load time. So I thought that was bananas. And then the second thing I found, which we'll link in the show notes too, there is this impact calculator that calculates the impact of performance on your website. And so, for example, you can type in a domain, so the default was homedepot.com, you can type in the current speed, you know, estimate some average monthly visitors and your average order value, and potentially your conversion rate. And it will actually calculate the impact of, like, speeding up or, you know, slowing down the speed of your site. So for example, like with Home Depot having about 500,000 average monthly visitors, maybe an average order of like \$150 that people are spending, with the current speed of three seconds, the impact calculator of that.... So for annual revenue impacted from improving the speed by one second, so by improving their overall performance by one second in one year, that'll have an impact of 763,000 US dollars. Which I find to be insane.

**Kelly** [12:00]  
It's wild. This... I love this calculator because at the end of the day, you need to show people the numbers especially in the e-commerce space. And we have all this data available to us. We can... we have their conversion rate, their average order value, how many monthly visitors they're getting. And of course, we have their current page speed, and being able to show them just how much their current page speed impacts their sales is like... It's a really great driver for sales for us. Because we'd be like, Look, if we just improve your page speed time by, you know, 5%, it's... look how much more money you could be making. I love this impact calculator.

**Ali** [12:36]  
Totally. I think all these statistics are just mind blowing about how important performance really is, and how much it (a) impacts users but (b) leads to decreased profits and people on pages. So a really really important topic.

**Kelly** [12:52]  
When's the last time you work on that side project you're always thinking about? How much progress could you make if you had three months to work and learn in a room full of smart, friendly, intellectually curious programmers. If you're thinking I can make a lot of progress, you should check out the Recurse Center. The Recurse Center is like a writer's retreat, but for programmers. There are no classes or teachers. You direct your own learning and time and it can explore what interests you in a supportive community of 1600 programmers from all over the world. Whether you've been programming for six months or 30 years Recurse Center is for you. Maybe you want to recreate vintage computer art, make contributions to Rust, learn computer science best practices, or start developing a new programming language. Those are all things people have done at Recurse Center. You can attend a retreat in Brooklyn for one, six or 12 weeks. Recurse Center is free for everyone and offers living expense grants of up to \$7,000 to people from underrepresented groups. They have an integrated recruiting agency and offer career support whether you're looking for your first programming job, or you want to find a senior role at a great company. Learn more about Recurse Center and how to apply at www.recurse.com.

So Ali, you touched on this briefly at the very beginning, but what should we be measuring when we're measuring performance.

**Ali** [14:02]  
So I think the two biggest metrics are first paint. So that's how long it takes for... instead of the person to be looking at a white page. Their... how long it takes for the actual content above the fold. So their initial content on the page to show up. And then the second piece is the time to interactive. So how much time does it take to make it so that your page is something that they can interact with and can type into inputs and click on modals or whatever. So that is the second metric to think about. And then, so those are the two big on page things that you should measure. But then the things that impact that would be what frameworks you're using, your bundle size, and then another big thing, especially on frontends of websites is your images and thinking about how big those are because I think we've all been on sites where this image is loading in pixel by pixel and potentially blocking everything below it. So definitely worth thinking about that as well.

**Kelly** [15:06]  
The image one is one of my favorite topics, because we'll have clients come to us be like, why is my site so slow? And I'm like, well, you just uploaded eight images for this product. And each image is about four megabytes. That might be the issue. It is not only just like the actual file size, it's also loading the appropriate size image in the space that it's filling. So you know, if you're putting an image in a space that's maybe like 300 pixels wide, you don't need to be loading an image that's 1200 pixels in width. That's not... there's no reason to upload that large size of an image. So just another thing to consider and obviously, I can go on and on and on about optimization for e-commerce, but that's not why we're here.

**Ali** [15:47]  
Yeah, but I think it is important to mention, because so many sites are e-commerce sites. So I think my number one takeaway from this whole entire episode is to run a Lighthouse test on whatever site that you're running. This is such an easy step, but almost nobody knows about it. Yeah, I bring this up in my blogging talk, because performance is important for SEO. And so many people learn about this from that talk. So all you have to do is use your Chrome Inspector, go over to the audits tab and just click like the audit button there and it will run a Lighthouse tests on it. It'll tell you all the things that you can do to improve the performance on your site. It'll tell you how to boost accessibility, boost SEO. And then also whether your site's a progressive web app or not, which we'll talk about in a little bit as well. So this Lighthouse testing, it will mock different environments to0. So it'll pretend that you're on really, really bad Wi-Fi, it'll pretend that you blocked JavaScript or something along those lines as well. And so if you do one thing, because of this episode, go run Lighthouse tests on your sites because it is going to give you step by step how to fix everything too. Not just what's broken, but how to fix it. So it's definitely a super, super valuable resource.

**Kelly** [17:03]  
I also love this resource much more than like just Google standard Page Speed Test. You get so much more information out of this than you do from just like a basic Page Speed Test. They're still helpful to run but they're not always like... all the tips that they're giving, all the advice they're giving, is not always applicable in the... in whatever it is that you're building. There are going to be things that you're not able to fix that they say are incorrect. So just be mindful of that when you are reading through the feedback and the recommendations that are being made, you're not going to be able to make all of them.

**Ali** [17:32]  
Yeah, that's true. And also that there may be other things that you can do as well, especially to boost perceived performance, that those aren't going to show up on the Lighthouse test. But you can do those to make it even better. But that being said, Lighthouse testing is like a great place to start.

**Emma** [17:46]  
So if you want to get started, like I just ran Lighthouse on my personal website. So I went to my website in Chrome and I opened the developer tools and I went to the audit tab and I ran an audit and that's where you can kind of select like the throttle and all those things. And we can talk more about this in just a little bit. But basically I built my site using Gatsby, which is a static site generator for React. And one of the benefits of that is having really, really great performance. They're really known for loading images quickly and having great accessibility and SEO. And so like, I ran my lighthouse, and I swear, so I got 99% for performance, 97 accessibility, 93 best practices and 100% SEO out of the box, which I think is really cool. So if you have a portfolio, like it's a fun thing to just like run your Lighthouse test and see how it does.

**Ali** [18:30]  
Totally, and it'll prevent you from sending something out into the world that people can't really load too. So definitely highly, highly recommend that. So let's talk about some of the things that you can do to improve performance on your site. So the first thing... Well, we just talked about Gatsby. So Gatsby is an incredible tool and it has a ton of performance optimizations built in, a lot of them that we're going to talk about here, but if you're looking for something that's performant out of the box, using A tool like Gatsby is a great thing to do. Another thing to think about is caching, both on your backend and your frontend. So caching is storing resources. So instead of having to refetch them every single time, or to recreate them every single time, they're there for you. So on the backend, if you have a really, really heavy query, what you can do is you can cache the results of that query, so that instead of having to rerun it every single time on your database, it's stored somewhere that's easier to retrieve. So using something like Redis, you can even use like a JSON field in a Postgres database, or something along those lines. So that instead of rerunning that every single time, it just runs once and you can pull from there. There's also frontend caching, so storing your resources on the frontend, using the browser for that or tools like Cloudflare, so that instead of every single time you load the page, it's like refetching your CSS and all that, that's loaded for you.

**Kelly** [19:57]  
Absolutely. I think another interesting topic is the next generation image formats like progressive JPEGs and WebP. Have you worked with those much?

**Ali** [20:08]  
Yes, mostly in order to pass Lighthouse test. But yeah, they're awesome. And you can use tools. So the different next gen images, not all of them work across browsers. So it's something to think about for sure. But there are different services out there that will make it so that it will give you the right image type for the browser that you're on. And so using tools like that is awesome.

**Kelly** [20:31]  
Yeah. Shopify is automatically serving up WebP images now, which is awesome, unless you're trying to save the image, because Google Chrome automatically serves up WebP and it tries to save the image in WebP format, which is really fun to try to open. So I have to open up that image URL in Safari which does not support WebP and save it that way. So kind of a this is more of a side little... This is a frustrating and kind of annoying but I'm going to deal with it because performance is great kind of thing. But next gen images are awesome.

**Emma** [21:06]  
I think too, another fun thing that... well, fun... I think it's fun, I'm sure Ali thinks it's fun too, is the big O runtime of your code. So in analyzing the algorithms that you're using, if you can do something with two, top level for loops, don't use nested for loops, right? So learning to understand why one algorithm or one piece of code is more performant than another is really important, right? Because if you have O events squared, I'm in terms of big O runtime for your code, that's going to be much... that's gonna have a lot higher performance implications, then O of log n. And so understanding these core, like, foundational computer science concepts can really help improve how you write your code. And I think that we both posted blogs on big O runtime if I'm not mistaken, Ali, or maybe I didn't, I don't know.

**Ali** [21:54]  
I don't have a real blog post but I have a cheat sheet on it.

**Emma** [21:58]
Oh, ok.

**Ali** [22:00]  
Yeah. No, and I totally agree with that. So I am probably an extreme case of this where I used to work mostly with data science processes. So data science processes take a long time to run, because it's a lot of data that you're manipulating. But using bigO and thinking about the... optimizing runtime there and using more efficient data structures, I was able to take a 10 minute task down to 16 seconds. So something that took 10 minutes to run down to 16 seconds just by thinking about bigO. So big O, I think it's something that people think about for interviews, and they think about it, that it's just important there. But it's really important in real life as a developer too in a lot of ways. It might not be something that you see explicitly every day, but thinking about the performance of different algorithms, and optimizing those is something that can really make your site more efficient.

**Kelly** [22:49]  
I would like to ask the audience a question. What is big O, and why is it called big O?

**Ali** [22:57]
Let's do an episode on this.

**Emma** [22:58]  
Yeah. So in general Big O is like how we analyze the runtime of our algorithms. And so there are a few different ways to do this. Big O is the most common, there's also big Theta and big Omega and these analyze the runtime of your algorithm against bounds. So when I say bounds, I mean an upper bound, a lower bound. So how fast is your algorithm in regards to increasing input size? So as the scale of your data increases, how performant is your algorithm essentially? And big O is one way that we do that. So when we have two nested for loops, as _n_ increases, the runtime of that is going to be O of _n_ squared, because we have to do _n_ times _n_ calculations for every piece of data that we're inputting, versus just a single for loop is going to run O of _n_ times because we're iterating once over every _n_. And when I say nested for loops, let me clarify, that's if we're using, you know from 0 to _n_ within both, right? And so it's just about how the performance of your code handles a growing input of data, I believe.

**Ali** [24:01]  
Yeah. So it's a way of genericizing the performance of algorithms because if I were to say that this algorithm takes one second to run, then that means that it takes one second to run on my MacBook Pro with this certain input with the array that I ran it on. But you want that to be more generic, right? So how is this going to be running across computers and across different inputs? So if my hundred item array versus my million item array, how's it going to scale to those bigger algorithm... bigger input sizes. So big O is just a way of making that measurement more generic than like one second, essentially. So, there are different families of Big O. Like _n_, which is super performant and super efficient, and O of one, which is what you're looking for as well, and then really, really unoptimized, something like _n_ factorial, which you don't want to have happen.

**Kelly** [24:59]  
Okay? We're going to be linking to both Ali's cheat sheet and Emma's blog on this topic in the resources and then I'm going to read them so I understand whatever we were just talking about.

**Emma** [25:12]  
I think we need to do like computer science concepts for beginners episode. So...

**Kelly** [25:17]
That's me. I'm a beginner.

**Emma** [25:18]
Yeah. I think we should do that.

**Ali** [25:19]  
It's super fun. Teaching computer science stuff is fun. Awesome. Okay, so back to like the web stuff. Well, big O's important, but also some of this stuff is as well. So I think one generic, or one general theme, is making your bundle size smaller. So instead of loading massive amounts of JavaScript onto your page, or massive amounts of CSS onto your page, if you're using a CSS framework or something along those lines, instead thinking about that and making it so that it is smaller, so you can use different strategies for that. So first of all, minimize your code. You can use scripts to minify your code and all of that. Definitely important to do that. Also the idea of tree shaking. So making sure that only the pieces of code that you're actually running and using are showing up in your code. So instead of loading in the whole entire library, and you're only using one method from it, you're only loading in that one method that you're using, and not NPM installing everything under the sun instead of being smart about that, and thinking through what you're actually using. And only loading what you're actually using for a page too. So if you're only using a certain script on one page, make it so that it only loads on that one page instead of on every single page of your site.

**Kelly** [26:45]  
Can we talk about progressive web apps?

**Ali** [26:47]  
Totally

**Kelly** [26:49]  
Cool. Let's talk about progressive web apps. This is something like I do in the in the headless e-commerce space, but it's something I've never really been able to like, really define. So can somebody please define it for me, so I can write it down and tell other people what it is?

**Emma** [27:08]  
I'm not a progressive web app expert. I just think it's a fancy word that people like to use. I'm kidding. From what I know, it's a web site that you can also download and use as if it were a native app on your mobile device. I'm not confident in that answer. Like if I was betting money on that, I don't know if I would bet my house.

**Ali** [27:30]  
Yeah, so that's totally it. So you can download the site to essentially be an app on your phone or on your desktop as well. And another piece of it is making sure that pieces of this site are available if the user is offline, so you're really heavily caching things so that they can still use that site if it... if they don't have internet. So Dev.to is a really, really great example of a progressive web app. So if you go to the Dev.to site, and you are offline, you get an offline page. And that offline page, you can draw pictures on. So I felt that it's pretty adorable. But there's still something that shows up even if the user isn't online. So you can have totally no internet, go to Dev.to, and you'll still see something there. Other progressive web apps may have it so that you can read articles that you've read before offline, or that the whole site is loaded into a progressive web app, which is obviously going to take up more space on whatever device it's been downloaded to. So there's definitely pros and cons of that, or maybe that they're able to save certain things so that they can view it offline. So that's kind of an introduction to what progressive web apps are, but making it so that there's still some sort of experience that people can use even if they are not online.

**Kelly** [28:51]  
Okay, that was really helpful. Usually... I'm not even gonna say what it is that I say because I'll probably just go on a tangent for like five minutes and start talking about spaghetti. So we're just going to avoid that entire topic.

**Ali** [29:04]  
Spaghetti is important too.

**Kelly** [29:07]
Spaghetti is very important.

**Ali** [29:08]
Yeah, I think two other things to really, really think about, and we talked about this before, is plugins. So if you are using like a WordPress site, I have seen so many of those that are very not performant. So making sure that you're thinking about that. And then ads and user tracking scripts, those slow down sites like no other. And so make sure that you really, really think about that.

**Kelly** [29:32]  
I once was talking to one of my colleagues in the e-commerce space who is helping somebody with their site, and the client was complaining about the slow site speed. He was loading... that the client was loading I think 45 different user tracking scripts in the header.

**Ali** [29:50]
Wow. That's wild.

**Kelly** [29:51]
Just like any... like if a service exists to track users, they were loading a script for it.

**Ali** [29:57]  
I mean, first there's like the privacy concerns with that, but then also the performance. So, yeah, lots of issues going on there. Other things to think about are lazy loading, which is something that I think is getting built into the browsers now, which is really cool. But lazy loading is essentially making it so that instead of all the images loading on page load, they may load after that page that they're not blocking everything else from loading. So that maybe they show this like, blurry image until they come in or something along those lines. But that's definitely something to look at, for sure.

**Kelly** [30:33]  
Is there anything else? I think we've talked a lot about these things.

**Ali** [30:37]  
Oh, in server side rendering. So that's definitely a big thing to think about too, especially if you're using one of these JavaScript libraries. There are tools built in for all of them, like Next.js, Nuxt for Vue. Next is for React, and that will make it so that instead of your whole entire page being loaded as JavaScript every time, the HTML is actually there. So that all of that processing is done on the server side instead of the client side. And that's going to make your site more performant, as well. So I would definitely recommend that if you're using a big frontend framework that's going to make it so that essentially, that's just for your developers to use. But your users are getting HTML, and a minimal amount of JavaScript instead of all JavaScript.

**Kelly** [31:26]  
It's amazing how much goes into doing all this work for having a very performant site, or performant app that the users never actually see us doing. And meanwhile, like our heads are exploding from all the things that we could possibly do to improve this, like I'm learning a lot from this episode.

**Ali** [31:44]  
Yeah, there's so much to do. It's a really, really cool topic. And there are so many people that are total experts on this too. Like, it's something that I've worked on to some extent, but it's not something that I've built my career off of. So we'll definitely link a bunch of resources for after this so that you can learn even more and have checklists and please run Lighthouse tests. The takeaway from this episode.

**Kelly** [32:09]  
Love it. Awesome. Okay, so I think we've covered enough at this point. This has been a really awesome episode. Again resources on our website, please check them out. I will be checking them out so we can read them together. So if you liked this episode, tweet about it. We'll select one tweeter to win Ladybug stickers each week. If you know somebody who should be a guest on our podcast, you can visit our contact page at Ladybug.dev to submit a name. You can also submit your own name if there's something that you're super passionate about and you want to talk about. We'd love to hear from you. We post new podcast episodes every Monday, so make sure you're subscribed to be notified and leave us a review. We love to read them. And once again, thank you to Shopify for sponsoring this episode. We'll see you next week.

</div>
