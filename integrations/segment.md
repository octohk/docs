# Segment

## About
[segment.com](https://segment.com)

Segment is one of the leading customer data platforms, allowing
you to collect and control your customers data.

## Integration

We have full built in support for Segment, handling both; ensuring
the webhook is verified and setting some sensible defaults for
incoming webhook titles, and subtitles, based on the 'action' type
of the webhook.

You'll find the out-of-the-box support using the [Platform Verifier](/workflows/platform-verifier)
and [Platform Parser](/workflows/platform-parser) nodes and selecting Segment from the platform
dropdown. In the [Platform Verifier](/workflows/platform-verifier) node we accept an optional 'secret'
input. When you provide a secret with will automagically generate and
verify the hash based on this secret, without a secret we _only_ check
that the expected Segment-based headers are present.

::: tip
We strongly recommend you always provide a secret to the "Platform Verifier"
node, this is the only way to know that the webhook has been securely
sent from your own Segment account.
:::