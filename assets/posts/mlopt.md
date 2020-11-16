# Machine Learning for Self Optimization

> Premature optimization is the root of evil - Donald Ervin Knuth

Let's imagine a plot of our best selves, where the outcome variable (y) is some measure of quality in your life, whether it be happiness, productivity, or anything else really. The input variables are behaviors and actions that affect your outcome variable. 

Your goal is to construct a model of your behaviors to maximize your outcome variable, or in my example a set of actions that will result in me being as productive as possible. 

The data points are your real life actions, and the error is how far off we were from the goal. Our goal is to create conditions for ourselves that allow us to minimize this error. We observe our error through feedback as we perform our actions. 

The linear model for predicting our best behavior is easy to understand but hard to enact. Most of us know what we need to do to be successful (whatever that means for you), but often the trick is getting ourselves to do it. We're often our own biggest obstacle. A student may know that in order to get good grades they must spend three hours a night studying, but struggle to commit to the action of doing that consistently. So then, what do we do when we're stuck?

We know our input behaviors combine to result in a single output, this 'quality' variable we want to optimize, which results in a function. 

$$yhat = b0 + b1X1 + b2X2 ... $$

$$quality = general baseline Quality + b1HrsSleep + b2productiveWorkingTime + b3SocialInteraction + b4Exercise + b5FreeTime$$

 Gradient descent is an algorithm that minimizes functions.  

 

### Notes:

---

**agile methodology:** 

1. build something quickly
2. get feedback 
3. make changes based on feedback 
4. repeat

The Goal of agile is to get a product near user, let user guide you with feedback to obtain the best possible product with the least error. Steps taken for improvement are small and should constantly involve the user 

Gradient descent is an iterative process that takes us to the minimum of a function 

1. start w/ a solution as soon as possible 
2. measure and iterate as frequently as possible
3. steer by observing feedback 

Use cost function to observe how far away we are from desired behavior or outcome 

linear model: data = model + error | error = deviation from model

second order functions: 

It's important to look at the second order inmpuits and find the drivers to those individal behaviors.