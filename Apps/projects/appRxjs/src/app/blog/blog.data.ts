import { Blog } from './blog.model';

export const initialBloglist: Blog[] = [
    {id: 1, title: 'Angular Rocks' , content: `Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. 
    
    Angular empowers developers to build applications that live on the web, mobile, or the desktop` ,author: 'Google Angular Team', thumbsUp: 30, thumbsDown: 1},
    {id: 2, title: 'Angular Architecture' , content: `Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.   
    The framework consists of several libraries, some of them core and some optional.  You write Angular applications by composing HTML templates with Angularized markup, writing component classes to manage those templates, adding application logic in services, and boxing components and services in modules. 
    
    Then you launch the app by bootstrapping the root module. Angular takes over, presenting your application content in a browser and responding to user interactions according to the instructions you provided.` ,author: 'Google Angular Team', thumbsUp: 20, thumbsDown: 2},
    {id: 3, title: 'Dependency Injection (DI)' , content: `Dependency injection is an important application design pattern. It's used so widely that almost everyone just calls it DI.

    Angular has its own dependency injection framework, and you really can't build an Angular application without it.
    
    This page covers what DI is and why it's useful.
    
    When you've learned the general pattern, you're ready to turn to the Angular Dependency Injection guide to see how it works in an Angular app.` ,author: 'Google Angular Team', thumbsUp: 43, thumbsDown: 4},
    {id: 4, title: 'Observables' , content: `Observables provide support for passing messages between publishers and subscribers in your application. Observables offer significant benefits over other techniques for event handling, asynchronous programming, and handling multiple values.    Observables are declarative—that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.   An observable can deliver multiple values of any type—literals, messages, or events, depending on the context. 
    
    The API for receiving values is the same whether the values are delivered synchronously or asynchronously. Because setup and teardown logic are both handled by the observable, your application code only needs to worry about subscribing to consume values, and when done, unsubscribing. Whether the stream was keystrokes, an HTTP response, or an interval timer, the interface for listening to values and stopping listening is the same` ,author: 'Google Angular Team', thumbsUp: 34, thumbsDown: 1},
    {id: 5, title: 'Dynamic Forms in Angular' , content: `Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.

    It may be more economical to create the forms dynamically, based on metadata that describes the business object model.
    
    This cookbook shows you how to use formGroup to dynamically render a simple form with different control types and validation. It's a primitive start. It might evolve to support a much richer variety of questions, more graceful rendering, and superior user experience. All such greatness has humble beginnings.
    
    The example in this cookbook is a dynamic form to build an online application experience for heroes seeking employment. The agency is constantly tinkering with the application process. You can create the forms on the fly without changing the application code. ` ,author: 'Google Angular Team', thumbsUp: 12, thumbsDown: 1}
];
