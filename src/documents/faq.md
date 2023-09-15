## Is this website official?

No.  
It is not related to, or endorsed by, [Node.js](https://nodejs.org/) or [the OpenJS Foundation](https://openjsf.org/).

## Where does this website get it's information?

The same place that the [https://nodejs.org/about/releases/](https://nodejs.org/about/releases/) page gets it's information. There is [a JSON file](https://github.com/nodejs/Release/blob/main/schedule.json) in [the official Node.js Release Working Group repository](https://github.com/nodejs/Release), in the Node.js organization, on GitHub.

This website gets that file when you load the page, so it's always up to date.

## Why "should" I use version X verses version Y?

On the [https://nodejs.org/about/releases/](https://nodejs.org/about/releases/) page, they explain that library authors _should_ use "Current" versions of Node.js to ensure that their library can support them. The page continues to say that "General use" and "Production apps" _should_ use LTS versions.

When this website suggests that you should use specific version, it's purely based on those premises. This website makes no original suggestions about which version is best.

## Do you have an API I can use to get the current versions for use in my CI/CD pipelines?

No.  
I could have made one, but I don't want this website to be a key dependency in your CI/CD processes; and you shouldn't want it to be either! In my opinion you should always know what versions you're using in your pipelines and changing those versions should be a concious decision.

If you want ensure you're always up to date, I suggest setting a reminder in your calendar for the dates shown on this website. On the day of that reminder, come back here and see what the current recommendations are.

The same goes for if you happen to see a blog headline etc. declaring that a new version of Node.js has been released; come back here and see if you should be using it.
