# Lotus

Lotus is a [Surface UI](https://surface-ui.org/) wrapper for [UIKit](https://getuikit.com/). Make good looking UIs in LiveView without writing a single line of JS (for the most part).

### NOTE: The PRs (now closed) contains some information, I spent the first day mostly thinking and the second day was more mechanical. The PRs explain some things about the approach and especially the generators.

## Why is this called Lotus?

I initially wanted to make a static site generator for SpawnFest, but I realized I need a UI wrapper more than I need a static site genetator, so I changed my mind. But the name stuck! Lotus is a good name for anything to do with UI!

## How to run?

To checkout the catalogue, enter `mix dev` and then go to `http://localhost:4001` and checkout the catalogue. All my components are under the `Lotus` section.

This has been tested with Phoenix 1.5.x and Elixir 1.12.x with OTP 24.

## Install in Phoenix

* This module uses hooks and registers them. To use with Phoenix, add `{:lotus, path: "<path of this>" }` and also add `:surface` to the `compilers` in `mix.exs`.

* Install UIKit using your preferred method (either CDN, npm or Esbuild). 

* Import the components in your live view!

## What does this library do?

This library wraps UIKit 3 with SurfaceUI. They are a set of Surface components that allow you to use those components without using any JavaScript. For example, the following snippet produces accordion:

```
<Accordion id="accordion">
    <AccordionItem title="Section 1">
        Lorem Ipsum
    </AccordionItem>
    <AccordionItem title="Section 2">
        Lorem Ipsum
    </AccordionItem>
    <AccordionItem open title="Section 3">
        Lorem Ipsum
    </AccordionItem>
    <AccordionItem title="Section 4">
        Lorem Ipsum
    </AccordionItem>
</Accordion>
```

These are within the context of Elixir, not JavaScript, and can be hydrated via Elixir code in mount.

## Why did I make this?

I have a few project that use Phoenix LiveView and I usually work around the JS modules by picking libraries from differnt sources and stitching them together. While I always wanted to use something more unified, I could never get the time for that. UIKit is a fairly complete UI framework with more out of the box, wrapping this in Surface would be a first step in having a set of ready-made modules for UI that is primed for LiveView. I hope this helps others like me in rapidly prototyping decent looking UIs within LiveView.

Furthermore, I wanted to gauge the challenge of wrapping JS libraries in LiveView/Surface, to see if we can grow a rich ecosystem of components that does not require much work on the developers side. This was more of an experiment to wrap a non-trivial CSS framework into Surface. 

This knowledge and pattern can be reused to migrate other libraries like Charts, for instance.

## What else is out there?

There are wrappers for Bulma and Bootstrap already (Both links are in reference section). They are well structured and error free compared to this, but also, there are less out of the box. While those are excellent libraries, it is always good to have one more.

## What was covered? What was not?

Only so much can be covered in a 48 hour hackathon, half of which got behind planning things and translating the CSS/JS interactions into Elixir.

Most components that involved JavaScript was left out due to the complexity of understanding JS style of UIKit. By the time I could figure it out, lots of time passed. So only `Spinner`, `Accordion`, `Tab`, `Transition` were implemented. Some others, `Slideshow`, `Slide`, `Nav`, `Cover`, `Modal` etc can be made in shorter time. But some others like `Sortable`, `Filter` etc would take longer due to there complex interactions that I didn't plan on yet. However, those would not really be required as they can easily be augmented using LiveView events.

In case of non JavaScript modules, I made a concious decision of omitting `Table` and `Form` due to longer work-load on them. Even in future, I would see those get out as `Lotus.DataGrid` or `Lotus.Form` instead of being a part of this.

I did not get the time to understand the nature of `Nav` components so that too is omited for this version.

What I failed to incorporate was the `Icon` module, I tackled the icon module at the end of time and I was too tired to comprehend the docs, so that too is not covered.

There are 30+ components covered, and there are fallbacks like `opts`, `class` and `Block` to work on components that are not ported yet.

## How to make a new component?

Ideally, the method to make a new component is to create an Elixir file `lotus/<component.ex>` along with the test file and entries in the catalogue. There are three types of component a component can be of-

* `Lotus.SimpleComponent` - Components that are simple, use mostly padding, margin, text etc
* `Lotus.Component` - Components that take a little more than Simple ones like width, border-radius etc
* `Lotus.ContainerComponent` - Components that are mostly containers, as such have grid and flex capabilities

Depending on the capability we wish to have for our component, it can `use` either. For example, a `Progress` is a `SimpleComponent` but a `Card` is a `ContainerComponent`.

Each of these components have multiple `Props`. A `Prop` module is a set of module that other components can `use`. They are listed under `lotus/props` directory. Props examples could be `Padding`, `Margin`, `Background`, `Text`. A component having `Text` props will be empowered with various text helper properties such as `font_size`, `text_align` etc, and as such, upon filling up those props, will acquire the `UIkit` classes that facilitate those.

Different components can be a sum-total of these props.

## What next?

This only scratches the surface. I intend to rearrange the prop system to make it more "explicit". The props were great for generators to generate code fast, but whether or not they are pragmatic is to be seen when dealing with components with a more pragmatic and less time sensitive approach.

I did not get the time to get fluent in the UI language here, while I am faily fluent in UIKit, how ergonomic are the Surface components can only be comprehended after using it for a project that is non-trivial. I will use this library in some of my old projects and rejig the API if needed.

There are components that are not ported yet, a portion of those will be ported and the others left until the big refactor takes place.

## What were the challenges?

* The JS integration bits were pain to add. I tried adding the `dom` in the `LiveView` property but that wasn't working due to the way UIkit JS works (as per my understanding at least). Which is why I resorted to the hooks approach whenever a dataset friendly JS was encountered. This was by far the biggest challenge.

* Figuring out a pattern in the code so that I can write a generator for it was a fun little challenge, and thanks to that approach, all those components were added without making me insane.

* I never worked with `Surface Catalogue` before, this took some time to figure out, but it was worth the time, and also, the UI would be better understood by viewer due to it's built-in server

## Links?

- SurfaceUI - https://surface-ui.org/
- Surface Catalogue - https://github.com/surface-ui/surface_catalogue
- Surface Bulma - https://github.com/surface-ui/surface_catalogue I got a lot of inspiration from this one! I've been wanting to make something like this since I knew of it!
- Surface Bootstrap - https://github.com/surface-ui/surface_bootstrap thanks to this project, I learned how to run Catalogue server, and also gained confidence in structuring components.

I would like to thank everyone in the UIKit and Beam community for giving me this learning opportunity! 
