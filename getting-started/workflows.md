# Workflows

Workflows are Octohook's most powerful feature, they allow you to process an incoming webhook
in almost any way you want.

## Verification
Using the webhook verifier node you can build your own custom logic to determine whether
an incoming webhook is valid and that the sender is who they say they are. Many providers
will add a hashed header to the payload signed using a shared secret. Workflows have all
the tools you need to generate a hash yourself and compare that to ensure that you only act
webhook that you know can be trusted! :muscle:

## Profile
When you are looking at a list of incoming webhooks we wanted to let you _know_ right away
which webhook is which, that's why we built in the ability to customize the title and subtitle
of a webhook in the list using the data that it contains. You can use any part of the webhook's
data and even combine multiple properties to generate a title that allows you to search and 
see your webhooks better.

## Nodes
We are putting together information and guides on each node and what you can do with them
take a look at the nav bar, or even search for a specific node using the search bar at the
top of the page to find out more information and how to use them.