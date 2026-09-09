import { LightningElement, api } from 'lwc';

const OBJECTIVES = [
    {
        id: 'getting-started',
        title: "I'm just getting started",
        items: [
            'Claim your business profile',
            "Getting started with Trustpilot's Starter plan",
            'Customize your business profile',
            'Set up an in-app review collector'
        ]
    },
    {
        id: 'more-reviews',
        title: 'I want more reviews',
        items: [
            "Trustpilot's automatic invitation methods",
            "Trustpilot's manual invitation methods",
            'Invitation optimizer',
            'Tips for businesses'
        ]
    },
    {
        id: 'show-reviews',
        title: 'I want to show reviews on my site',
        items: [
            'What is a TrustBox widget?',
            'Add a service review TrustBox widget',
            'Where to place TrustBox widgets on your website',
            'Create a Trustpilot asset'
        ]
    },
    {
        id: 'manage-reputation',
        title: 'I want to manage my reputation',
        items: [
            'How to reply to reviews',
            'Use AI-assisted replies to respond to reviews',
            'Analytics explorer',
            "Trustpilot's review labels"
        ]
    }
];

export default class BusinessOnboarding extends LightningElement {
    @api heading = 'What are you trying to do?';

    get objectives() {
        return OBJECTIVES;
    }
}
