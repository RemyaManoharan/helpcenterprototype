// Trustpilot Help Center search data.
// Mirrors the live "Browse by topic" structure on index.html / reviewer.html / business.html.
// Rebuilt from HelpcenterArticleanalyzer/my-analyzer/data.js with the following renames
// (confirmed against the live pages, 2026-08-28):
//   Reviewer:
//     "Your Trustpilot account" + "Create your profile"  -> "Account and Profile"
//        (as subtopics "General account help" / "General profile help")
//     "Writing Reviews"                                   -> "Writing and Editing Reviews"
//     "Flagging"                                          -> "Flagged Reviews & Appeals"
//     "Privacy" (4 direct articles)                       -> "Privacy & Personal Data" > "General privacy help"
//   Business:
//     "Getting started with Trustpilot Business" (4 plan topics) -> "Getting started" > "Choose your plan"
//       + gains "Set up your account" (moved from old "Account management")
//     "Account management" (minus Set up your account)    -> "Account Management & Billing"
//     "Get reviews"                                        -> "Collect Reviews"
//     "Manage Reviews" (2 direct articles -> "General")    -> "Respond and Manage"
//     "Analytics" (1 direct article -> "General")          -> "Analytics and Insights"
//     "Automatic Feedback Service"                         -> "AFS"
//     "Share & Promote" (8 direct articles -> "General")   -> "Share and Promote"
//     "TrustBox Widgets" (1 direct article -> "General")   -> "Widgets"
//     "Integrations"                                       -> unchanged
//     "How Trustpilot works" (1 direct article -> "General") -> unchanged name
//
// Shape:
// HELP_CENTER_DATA.<audience> = {
//   audienceLabel, tag, pageUrl,
//   topics: [ { id, label, subtopics: [ { id, label, articles: [ { id, label, keywords? } ] } ], articles?: [...] } ]
// }
// `articles` directly on a topic = articles with no subtopic layer (siblings of subtopics, or the whole list).
// `tag` is the audience badge to show next to a recommended article in search results (e.g. "REVIEWER").

const HELP_CENTER_DATA = {
  reviewer: {
    audienceLabel: "For Reviewers",
    tag: "REVIEWER",
    pageUrl: "reviewer.html",
    topics: [
      {
        id: "rev-account-and-profile",
        label: "Account and Profile",
        subtopics: [
          {
            id: "rev-general-account-help",
            label: "General account help",
            articles: [
              { id: "rev-reset-password", label: "Change or reset your Trustpilot user account password", summary: "Learn how to update your password or reset it if you've forgotten your Trustpilot login details.", keywords: ["password", "forgot password", "reset password", "user password"] },
              { id: "rev-change-account-email", label: "Change your Trustpilot reviewer account email", summary: "Steps to update the email address linked to your Trustpilot reviewer account.", keywords: ["email"] },
              { id: "rev-delete-reviewer-account", label: "Delete your Trustpilot reviewer account", summary: "If you delete your reviewer account, you'll still be able to search for a business and read reviews. Deleting your Trustpilot reviewer account will prevent you from writing reviews, though you can create a new account later.", keywords: ["delete account"] },
              { id: "rev-cant-log-in", label: "I can't log in to my reviewer account", summary: "Troubleshooting steps to try if you're having trouble logging in to your Trustpilot reviewer account.", keywords: ["login", "log in", "can't log in"] },
              { id: "rev-two-profiles-merge", label: "I have two user profiles on Trustpilot. Can I merge them?", summary: "What to do if you've ended up with two Trustpilot user profiles and want to combine them into one.", keywords: ["merge accounts"] },
              { id: "rev-manage-personal-email-settings", label: "Manage your personal and email settings", summary: "How to update your personal details and control which emails Trustpilot sends you." }
            ]
          },
          {
            id: "rev-general-profile-help",
            label: "General profile help",
            articles: [
              { id: "rev-change-profile-picture", label: "Change or remove your profile picture", summary: "How to add, change, or remove the picture shown on your Trustpilot reviewer profile." },
              { id: "rev-choose-username", label: "Choose a username", summary: "Guidance on picking a username for your Trustpilot profile and when you can change it." },
              { id: "rev-create-reviewer-profile", label: "Create a Trustpilot reviewer profile", summary: "Steps to set up a new Trustpilot account so you can start writing reviews." },
              { id: "rev-tips-using-tp-profile", label: "Tips for using Trustpilot", summary: "Practical tips to get the most out of your Trustpilot reviewer profile." },
              { id: "rev-verify-identity-photo-id", label: "Verify your identity with photo ID", summary: "Why Trustpilot sometimes asks reviewers to verify their identity with a photo ID, and how to do it." }
            ]
          }
        ]
      },
      {
        id: "rev-writing-and-editing-reviews",
        label: "Writing and Editing Reviews",
        subtopics: [
          {
            id: "rev-how-to-write-reviews",
            label: "How to write reviews",
            articles: [
              { id: "rev-be-first-to-review", label: "Be the first to review a business", summary: "How to write the very first review for a business that doesn't have one yet." },
              { id: "rev-review-business-multiple-times", label: "Review a business multiple times", summary: "Trustpilot's rules on how often you can review the same business." },
              { id: "rev-write-a-review-2", label: "Write a review", summary: "Step-by-step instructions for writing and submitting a review on Trustpilot." }
            ]
          },
          {
            id: "rev-manage-edit-reviews",
            label: "Manage and edit your reviews",
            articles: [
              { id: "rev-edit-delete-your-review", label: "Edit or delete your review", summary: "How to make changes to a review you've written, or remove it entirely." },
              { id: "rev-find-manage-reviews", label: "Find and manage your reviews", summary: "Where to find all the reviews you've written and how to manage them." },
              { id: "rev-find-respond-review-invitations", label: "Find and respond to your review invitations", summary: "How to locate review invitations you've received and respond to them." },
              { id: "rev-delete-product-review-media", label: "How to delete your product review picture or video", summary: "Steps to remove a photo or video you've attached to a product review." }
            ]
          },
          {
            id: "rev-tips-subtopic",
            label: "Tips",
            articles: [
              { id: "rev-photos-videos-product-reviews", label: "How to take photos and videos for product reviews", summary: "Tips for capturing useful photos and videos to include in your product reviews." },
              { id: "rev-tips-location-reviews", label: "Tips for writing location reviews", summary: "Advice for writing a helpful review about a specific business location." },
              { id: "rev-tips-product-reviews", label: "Tips for writing product reviews", summary: "Advice for writing a detailed, helpful review about a specific product." }
            ]
          }
        ],
        articles: [
          { id: "rev-who-can-write-review-when", label: "Who can write a review and when?", summary: "Trustpilot's rules on who's eligible to write a review and when they can do it." }
        ]
      },
      {
        id: "rev-about-trustpilot",
        label: "About Trustpilot",
        subtopics: [
          {
            id: "rev-contact-us",
            label: "Contact us",
            articles: [
              { id: "rev-add-attachments-email", label: "Add attachments to an email", summary: "How to include screenshots or files when emailing Trustpilot's support team." },
              { id: "rev-eu-dsa-contact-points", label: "EU Digital Services Act: Contact points on Trustpilot", summary: "Trustpilot's designated contact points under the EU Digital Services Act." },
              { id: "rev-appeal-content-integrity", label: "How can I appeal a decision made by the Content Integrity Team?", summary: "How to appeal a decision made about your review by Trustpilot's Content Integrity Team." },
              { id: "rev-how-contact-tp", label: "How do I contact Trustpilot?", summary: "The different ways you can get in touch with Trustpilot's support team." },
              { id: "rev-how-take-screenshot", label: "How to take a screenshot", summary: "Instructions for taking a screenshot on different devices, useful when contacting support." }
            ]
          },
          {
            id: "rev-how-tp-works-for-you",
            label: "How Trustpilot works for you",
            articles: [
              { id: "rev-businesses-pay", label: "Do businesses pay to use Trustpilot?", summary: "An explanation of Trustpilot's business model and whether businesses pay to be reviewed." },
              { id: "rev-reviews-improve-shopping", label: "How can reviews improve your online shopping experiences?", summary: "How reading reviews on Trustpilot can help you make better shopping decisions." },
              { id: "rev-business-model", label: "How does Trustpilot's business model work?", summary: "An overview of how Trustpilot makes money while keeping reviews free and open." }
            ]
          }
        ]
      },
      {
        id: "rev-navigating-trustpilot",
        label: "Navigating Trustpilot",
        subtopics: [
          {
            id: "rev-searching-on-tp",
            label: "Searching on Trustpilot",
            articles: [
              { id: "rev-find-explore-categories", label: "Find and explore categories", summary: "How to browse Trustpilot's business categories to find companies to review." },
              { id: "rev-chrome-extension", label: "Trustpilot's Google Chrome Extension", summary: "What Trustpilot's Chrome extension does and how to install it." }
            ]
          },
          {
            id: "rev-business-profile-pages",
            label: "Business profile pages & review labels",
            articles: [
              { id: "rev-company-activity", label: "Company activity - See how every business uses Trustpilot", summary: "What the Company Activity section on a business profile tells you about how that business uses Trustpilot." },
              { id: "rev-filter-business-reviews", label: "Filter a business's reviews", summary: "How to filter and sort a business's reviews to find what you're looking for." },
              { id: "rev-merged-business-profiles", label: "Merged business profiles on Trustpilot", summary: "Why Trustpilot sometimes merges business profiles and what that means for their reviews." },
              { id: "rev-verified-label", label: "Why are some reviews marked \"Verified\"?", summary: "What it means when a review on Trustpilot is marked as Verified.", keywords: ["verified"] }
            ]
          },
          {
            id: "rev-social-sharing",
            label: "Social sharing",
            articles: [
              { id: "rev-share-your-reviews", label: "Share your Trustpilot reviews", summary: "How to share the reviews you've written on social media or elsewhere." }
            ]
          }
        ],
        articles: [
          { id: "rev-trust-reviews-on-websites", label: "Can I trust Trustpilot reviews on business websites?", summary: "How to tell whether reviews shown on a business's own website are genuine Trustpilot reviews." }
        ]
      },
      {
        id: "rev-flagged-reviews-and-appeals",
        label: "Flagged (Reported) Reviews & Appeals",
        subtopics: [
          {
            id: "rev-how-to-flag-review",
            label: "How to flag a review",
            articles: [
              { id: "rev-misuse-flagging-tool", label: "How do we handle misuse of the review flagging tool for consumers?", summary: "How Trustpilot handles cases where the review flagging tool is misused." }
            ]
          },
          {
            id: "rev-review-was-flagged",
            label: "My review was flagged",
            articles: [
              { id: "rev-asked-update-review-info", label: "I've been asked to update my review or provide more info", summary: "What to do if Trustpilot asks you to update your review or provide more information." }
            ]
          },
          {
            id: "rev-whistleblower",
            label: "Whistleblower",
            articles: [
              { id: "rev-whistleblower-function", label: "Does Trustpilot have a whistleblower function?", summary: "Information about Trustpilot's whistleblower function and how to use it." }
            ]
          }
        ]
      },
      {
        id: "rev-privacy-and-personal-data",
        label: "Privacy & Personal Data",
        subtopics: [
          {
            id: "rev-general-privacy-help",
            label: "General privacy help",
            articles: [
              { id: "rev-delete-review-invitations-data", label: "Delete your review invitations data", summary: "How to request deletion of the data Trustpilot holds about your review invitations." },
              { id: "rev-access-download-correct-delete-personal-data", label: "How to access, download, correct, or delete your personal data", summary: "Your rights over the personal data Trustpilot holds about you, and how to exercise them." },
              { id: "rev-gdpr-data-protection-businesses", label: "The GDPR and data protection requirements for businesses", summary: "How GDPR and data protection rules apply to businesses collecting reviews on Trustpilot.", keywords: ["gdpr"] },
              { id: "rev-retention-period-reviews", label: "What's the retention period of reviews?", summary: "How long Trustpilot keeps reviews and related data." }
            ]
          }
        ]
      }
    ]
  },

  business: {
    audienceLabel: "For Businesses",
    tag: "BUSINESS",
    pageUrl: "business.html",
    topics: [
      {
        id: "biz-getting-started",
        label: "Getting Started",
        summary: "Choose your plan below and we'll guide you through the steps to set up your account with ease. It's time to start building trust, growing and improving your business with Trustpilot.",
        subtopics: [
          {
            id: "biz-free-plan",
            label: "Free plan",
            articles: [
              { id: "biz-free-plan-article", label: "Getting started with Trustpilot's Free plan", summary: "Everything you need to know to set up and start using Trustpilot's Free plan." }
            ]
          },
          {
            id: "biz-starter-plan",
            label: "Starter plan",
            articles: [
              { id: "biz-starter-plan-article", label: "Getting started with Trustpilot's Starter plan", summary: "Everything you need to know to set up and start using Trustpilot's Starter plan." }
            ]
          },
          {
            id: "biz-plus-plan",
            label: "Plus plan",
            articles: [
              { id: "biz-plus-plan-article", label: "Getting started with Trustpilot's Plus plan", summary: "Everything you need to know to set up and start using Trustpilot's Plus plan." }
            ]
          },
          {
            id: "biz-premium-plan",
            label: "Premium plan",
            articles: [
              { id: "biz-premium-plan-article", label: "Getting started with Trustpilot's Premium plan", summary: "Everything you need to know to set up and start using Trustpilot's Premium plan." }
            ]
          }
        ]
      },
      {
        id: "biz-account-management-and-billing",
        label: "Account Management & Billing",
        subtopics: [
          {
            id: "biz-set-up-account",
            label: "Set up your account",
            articles: [
              { id: "biz-customize-business-profile", label: "Customize your business profile", summary: "How to add your logo, description, and other details to your business profile." },
              { id: "biz-claim-business-profile", label: "Claim your business profile", summary: "Steps to claim ownership of your business's Trustpilot profile." }
            ]
          },
          {
            id: "biz-manage-account",
            label: "Manage your account",
            articles: [
              { id: "biz-manage-multiple-domains", label: "Manage multiple domains or businesses", summary: "How to manage several domains or businesses under one Trustpilot account." },
              { id: "biz-manage-review-notifications", label: "Manage review notifications", summary: "How to control which review notifications you and your team receive." },
              { id: "biz-manage-business-users", label: "Manage Trustpilot Business users", summary: "How to add, remove, and manage the users on your Trustpilot Business account." },
              { id: "biz-roles-permissions-overview", label: "Roles and permissions overview", summary: "An overview of the different user roles and permissions available on a Business account.", keywords: ["roles", "permissions"] },
              { id: "biz-set-up-custom-roles", label: "Set up custom roles", summary: "How to create custom roles to control what each team member can access." },
              { id: "biz-turn-off-auto-renewal", label: "Turn off auto-renewal for your Trustpilot Business plan", summary: "Steps to turn off automatic renewal for your Trustpilot Business subscription.", keywords: ["auto-renewal"] }
            ]
          },
          {
            id: "biz-login-password",
            label: "Login and password",
            keywords: ["password"],
            articles: [
              { id: "biz-change-account-email", label: "Change your Trustpilot Business account email", summary: "How to update the email address associated with your Business account.", keywords: ["email"] },
              { id: "biz-change-account-password", label: "Change your Trustpilot Business account password", summary: "Steps to change or reset the password for your Business account.", keywords: ["password", "reset password"] },
              { id: "biz-cant-access-account", label: "I can't access my Trustpilot Business account", summary: "Troubleshooting steps to try if you're locked out of your Business account." },
              { id: "biz-log-in-to-account", label: "Log in to your Trustpilot Business account", summary: "How to log in to your Trustpilot Business account, including sign-in options.", keywords: ["login", "log in"] },
              { id: "biz-new-login-method-faq", label: "New login method to Trustpilot Business - FAQ", summary: "Frequently asked questions about Trustpilot Business's new login method." }
            ]
          },
          {
            id: "biz-billing",
            label: "Billing",
            articles: [
              { id: "biz-manage-billing-details", label: "Manage your billing details", summary: "How to update your payment method and billing information." },
              { id: "biz-purchase-addons-upgrade", label: "Purchase add-ons or upgrade your plan", summary: "How to add extra features or move to a higher Trustpilot Business plan." },
              { id: "biz-set-up-automatic-billing", label: "Set up automatic billing", summary: "How to set up automatic billing so your subscription renews without manual action." },
              { id: "biz-pay-invoice", label: "How can I pay my Trustpilot invoice?", summary: "The payment methods available for settling your Trustpilot invoice.", keywords: ["invoice"] },
              { id: "biz-invoice-explained", label: "Your Trustpilot invoice explained", summary: "A breakdown of the charges and line items on your Trustpilot invoice.", keywords: ["invoice"] }
            ]
          },
          {
            id: "biz-subscription-management",
            label: "Subscription Management",
            articles: []
          }
        ]
      },
      {
        id: "biz-collect-reviews",
        label: "Collect Reviews",
        subtopics: [
          {
            id: "biz-request-reviews-auto",
            label: "Request reviews automatically",
            articles: [
              { id: "biz-automate-invitations-gtm", label: "Automate review invitations using Google Tag Manager", summary: "How to set up automatic review invitations using Google Tag Manager.", keywords: ["gtm", "google tag manager"] },
              { id: "biz-embedded-review-form-link", label: "Embedded Review Form with Unique Link", summary: "How to use an embedded review form with a unique link to collect reviews." },
              { id: "biz-automatic-invitation-methods", label: "Trustpilot's automatic invitation methods", summary: "An overview of the ways Trustpilot can automatically send review invitations for you." }
            ]
          },
          {
            id: "biz-request-reviews-manual",
            label: "Request reviews manually",
            articles: [
              { id: "biz-send-product-review-invitations-import", label: "Send product review invitations by importing a customer data file", summary: "How to send product review invitations in bulk by uploading a customer data file." },
              { id: "biz-send-service-review-invitations-import", label: "Send service review invitations by importing a customer data file", summary: "How to send service review invitations in bulk by uploading a customer data file." },
              { id: "biz-manual-invitation-methods", label: "Trustpilot's manual invitation methods", summary: "An overview of the ways you can manually send review invitations to customers." },
              { id: "biz-manual-invitation-access-ends", label: "What to do when your manual invitation access ends", summary: "What happens, and what to do, if your access to manual review invitations ends." }
            ]
          },
          {
            id: "biz-request-reviews-outside",
            label: "Request reviews outside Trustpilot's system",
            articles: [
              { id: "biz-send-invitations-api-link", label: "Send invitations with a Business API link", summary: "How to send review invitations using a link generated through the Business API.", keywords: ["api"] },
              { id: "biz-troubleshoot-generated-links", label: "Troubleshoot Business Generated Links", summary: "Common issues with Business Generated Links and how to fix them." },
              { id: "biz-what-are-generated-links", label: "What are Business Generated Links?", summary: "What Business Generated Links are and how businesses use them to collect reviews." }
            ]
          },
          {
            id: "biz-manage-review-invitations",
            label: "Manage your review invitations",
            articles: [
              { id: "biz-add-tp-to-spf-record", label: "Add Trustpilot to your SPF record", summary: "How to add Trustpilot to your domain's SPF record so invitation emails deliver reliably.", keywords: ["spf"] },
              { id: "biz-configure-invitation-email-settings", label: "Configure your invitation email settings", summary: "How to configure the sender details and settings for your invitation emails." },
              { id: "biz-configure-invitation-time-delivery", label: "Configure your invitation time and delivery settings", summary: "How to control when and how your review invitations are delivered." },
              { id: "biz-customize-invitation-template", label: "Customize your invitation template", summary: "How to customize the look and content of your review invitation emails." },
              { id: "biz-more-feedback-multiple-reviews", label: "Get more customer feedback with multiple reviews", summary: "How collecting more than one type of review can help you gather richer customer feedback." },
              { id: "biz-review-email-invitation-templates", label: "How we review your email invitation templates", summary: "How Trustpilot reviews your invitation email templates before they're sent." },
              { id: "biz-invitation-optimizer", label: "Invitation optimizer", summary: "How Invitation Optimizer helps you send review invitations at the best time." },
              { id: "biz-invitation-status-overview", label: "Invitation status overview", summary: "How to check the status of the review invitations you've sent." },
              { id: "biz-manage-sent-invitations", label: "Manage your sent invitations", summary: "How to view, resend, or cancel review invitations you've already sent." },
              { id: "biz-turn-off-tracking-pixels", label: "Turn off tracking pixels in review invitations", summary: "How to turn off tracking pixels used in your review invitation emails.", keywords: ["tracking pixels"] }
            ]
          },
          {
            id: "biz-guidelines-tips",
            label: "Guidelines + tips",
            articles: [
              { id: "biz-collect-reviews-on-premises", label: "Collect reviews on business premises", summary: "Guidelines for collecting reviews from customers while they're on your premises." },
              { id: "biz-tips-for-businesses", label: "Tips for businesses", summary: "General tips for businesses looking to collect more genuine customer reviews." }
            ]
          }
        ],
        articles: [
          { id: "biz-invitation-addon-module", label: "Invitation Add-on Module", summary: "What the Invitation Add-on Module offers and how to set it up." },
          { id: "biz-set-up-in-app-review-collector", label: "Set up an In-app review collector", summary: "How to set up an in-app review collector to gather feedback from app users." },
          { id: "biz-invitation-methods", label: "Trustpilot invitation methods", summary: "An overview of all the methods Trustpilot offers for inviting customers to leave reviews." }
        ]
      },
      {
        id: "biz-respond-and-manage",
        label: "Respond and Manage Reviews",
        subtopics: [
          {
            id: "biz-service-reviews",
            label: "Service reviews",
            articles: [
              { id: "biz-get-started-service-reviews", label: "Get started with service reviews", summary: "How to get started collecting and managing service reviews for your business." },
              { id: "biz-manage-service-reviews", label: "Manage your service reviews", summary: "How to view, organize, and respond to the service reviews you've received." },
              { id: "biz-review-follow-up", label: "Review follow-up", summary: "How Review follow-up lets you reach back out to reviewers after they've posted." },
              { id: "biz-tag-service-reviews", label: "Tag your service reviews", summary: "How to use tags to organize and categorize your service reviews.", keywords: ["tags"] },
              { id: "biz-review-spotlight", label: "Trustpilot's Review spotlight", summary: "What Review spotlight is and how it highlights standout reviews on your profile." }
            ]
          },
          {
            id: "biz-product-reviews",
            label: "Product reviews",
            articles: [
              { id: "biz-import-third-party-product-reviews", label: "Import third-party product reviews to Trustpilot", summary: "How to bring product reviews collected on another platform into Trustpilot." },
              { id: "biz-manage-product-catalog", label: "Manage your product catalog", summary: "How to add, edit, and organize the products in your Trustpilot product catalog." },
              { id: "biz-prepare-product-catalog-csv", label: "Prepare your product catalog CSV file", summary: "How to format your product catalog as a CSV file ready for upload.", keywords: ["csv"] },
              { id: "biz-product-review-pages-beta", label: "Product review pages (Beta)", summary: "What product review pages are and how they display your product reviews." },
              { id: "biz-set-up-product-catalog", label: "Set up your product catalog", summary: "Steps to set up your product catalog so you can start collecting product reviews." }
            ]
          },
          {
            id: "biz-location-reviews",
            label: "Location reviews",
            articles: [
              { id: "biz-get-started-location-reviews", label: "Get started with location reviews", summary: "How to get started collecting and managing reviews for individual business locations." },
              { id: "biz-create-csv-for-locations", label: "How to create a CSV file for locations", summary: "How to format a CSV file listing your business locations for upload.", keywords: ["csv"] },
              { id: "biz-location-reviews-faq", label: "Location reviews - FAQ", summary: "Frequently asked questions about setting up and managing location reviews." },
              { id: "biz-manage-business-locations", label: "Manage your business locations", summary: "How to add, edit, and organize the locations linked to your business account." },
              { id: "biz-set-up-location-review-invitations", label: "Set up location review invitations", summary: "How to set up review invitations for specific business locations." }
            ]
          },
          {
            id: "biz-manage-your-reviews",
            label: "Manage your reviews",
            articles: [
              { id: "biz-how-to-reply-to-reviews", label: "How to reply to reviews", summary: "Step-by-step instructions for writing and publishing a reply to a customer review." },
              { id: "biz-request-info-from-reviewers", label: "How to request information from reviewers", summary: "How to ask a reviewer for more information about their experience." }
            ]
          },
          {
            id: "biz-respond-general",
            label: "General",
            articles: [
              { id: "biz-tips-replying-reviews", label: "Tips for replying to reviews", summary: "Best-practice tips for writing thoughtful, effective replies to customer reviews." },
              { id: "biz-ai-assisted-replies", label: "Use AI-assisted replies to respond to reviews", summary: "How to use Trustpilot's AI-assisted replies to respond to reviews faster.", keywords: ["ai replies"] }
            ]
          }
        ]
      },
      {
        id: "biz-analytics-and-insights",
        label: "Analytics and Insights",
        subtopics: [
          {
            id: "biz-performance",
            label: "Performance",
            articles: [
              { id: "biz-analytics-explorer", label: "Analytics explorer", summary: "How to use Analytics explorer to dig into your review and reputation data." },
              { id: "biz-invitation-analytics", label: "Invitation analytics", summary: "What Invitation analytics shows you about how your review invitations are performing." },
              { id: "biz-reply-analytics", label: "Reply analytics", summary: "What Reply analytics shows you about how you and your team respond to reviews." },
              { id: "biz-service-reviews-analytics", label: "Service reviews analytics", summary: "What Service reviews analytics tells you about the service reviews you've collected." }
            ]
          },
          {
            id: "biz-review-insights",
            label: "Review insights",
            articles: [
              { id: "biz-ri-locations", label: "Trustpilot Analytics: Review Insights - Locations", summary: "How Review Insights breaks down review performance across your business locations.", keywords: ["locations"] },
              { id: "biz-ri-spotlight-report", label: "Trustpilot Analytics: Review Insights - Spotlight report", summary: "What the Spotlight report highlights within your Review Insights data.", keywords: ["spotlight report"] },
              { id: "biz-ri-topics", label: "Trustpilot Analytics: Review Insights - Topics", summary: "How Review Insights surfaces the topics customers mention most in their reviews.", keywords: ["topics"] },
              { id: "biz-ri-trustscore-forecast", label: "Trustpilot Analytics: Review Insights - TrustScore forecast", summary: "How the TrustScore forecast predicts where your rating is headed.", keywords: ["trustscore forecast"] }
            ]
          },
          {
            id: "biz-engagement",
            label: "Engagement",
            articles: [
              { id: "biz-ai-search-analytics", label: "AI search analytics", summary: "What AI search analytics shows you about how customers find your business through AI tools." },
              { id: "biz-eng-organic-reach", label: "Trustpilot Analytics: Organic reach", summary: "What the Organic reach metric tells you about unpaid visibility on Trustpilot.", keywords: ["organic reach"] },
              { id: "biz-eng-profile-engagement", label: "Trustpilot Analytics: Profile engagement", summary: "What Profile engagement measures about how visitors interact with your business profile.", keywords: ["profile engagement"] },
              { id: "biz-eng-search-engagement", label: "Trustpilot Analytics: Search engagement", summary: "What Search engagement tells you about how customers find your profile through search.", keywords: ["search engagement"] },
              { id: "biz-eng-seo-reach", label: "Trustpilot Analytics: SEO reach", summary: "What the SEO reach metric shows about your profile's visibility in search engines.", keywords: ["seo reach"] },
              { id: "biz-eng-visitor-insights", label: "Trustpilot Analytics: Visitor insights", summary: "What Visitor insights tells you about the people viewing your business profile.", keywords: ["visitor insights"] },
              { id: "biz-eng-widgets-engagement", label: "Trustpilot Analytics: Widgets engagement", summary: "What Widgets engagement shows you about how visitors interact with your TrustBox widgets.", keywords: ["widgets engagement"] }
            ]
          },
          {
            id: "biz-market",
            label: "Market",
            articles: [
              { id: "biz-market-insights", label: "Market insights", summary: "How Market insights helps you understand trends across your industry on Trustpilot." },
              { id: "biz-market-peers", label: "Trustpilot Analytics: Market peers", summary: "How Market peers compares your business's performance to similar companies.", keywords: ["market peers"] },
              { id: "biz-market-topics", label: "Trustpilot Analytics: Market topics", summary: "What Market topics reveals about the themes customers discuss across your industry.", keywords: ["market topics"] },
              { id: "biz-market-trends", label: "Trustpilot Analytics: Market trends", summary: "How Market trends shows shifts in customer sentiment across your market over time.", keywords: ["market trends"] },
              { id: "biz-market-my-competitors", label: "Trustpilot Analytics: My competitors", summary: "How to compare your TrustScore and reviews against your chosen competitors.", keywords: ["my competitors", "competitors"] }
            ]
          },
          {
            id: "biz-analytics-general",
            label: "General",
            articles: [
              { id: "biz-custom-dashboards", label: "Custom dashboards", summary: "How to build a custom dashboard to track the analytics that matter most to you." }
            ]
          }
        ]
      },
      {
        id: "biz-afs",
        label: "Automatic Feedback Service (AFS)",
        subtopics: [
          {
            id: "biz-standard-afs-guides",
            label: "Standard AFS guides",
            articles: [
              { id: "biz-afs-faq", label: "Automatic Feedback Service - FAQ", summary: "Frequently asked questions about Trustpilot's Automatic Feedback Service.", keywords: ["afs faq"] },
              { id: "biz-afs-overview", label: "Automatic Feedback Service (AFS)", summary: "An overview of how Automatic Feedback Service collects reviews from your existing customer emails.", keywords: ["afs"] },
              { id: "biz-afs-customer-journey", label: "Collect reviews throughout your customer journey with Automatic Feedback Service (AFS)", summary: "How to use AFS to collect reviews at multiple points in the customer journey.", keywords: ["afs"] },
              { id: "biz-afs-bcc-field", label: "Set up Automatic Feedback Service (AFS) using a BCC field", summary: "How to set up AFS by BCC'ing Trustpilot on your existing transactional emails.", keywords: ["afs", "bcc"] },
              { id: "biz-afs-separate-trigger-email", label: "Set up Automatic Feedback Service (AFS) using a separate trigger email", summary: "How to set up AFS using a dedicated trigger email instead of a BCC field.", keywords: ["afs"] },
              { id: "biz-what-is-afs", label: "What is Automatic Feedback Service?", summary: "An introduction to what Automatic Feedback Service does and who it's for.", keywords: ["afs"] }
            ]
          },
          {
            id: "biz-ecommerce-afs-guides",
            label: "Ecommerce AFS guides",
            articles: [
              { id: "biz-afs-shopify-flow", label: "Use Automatic Feedback Service with the Shopify Flow app", summary: "How to connect Automatic Feedback Service to the Shopify Flow app.", keywords: ["afs", "shopify"] }
            ]
          }
        ]
      },
      {
        id: "biz-share-and-promote",
        label: "Share and Promote",
        subtopics: [
          {
            id: "biz-share-general",
            label: "General",
            articles: [
              { id: "biz-create-trustpilot-asset", label: "Create a Trustpilot asset", summary: "How to create a shareable asset showing off your Trustpilot rating and reviews." },
              { id: "biz-share-facebook-instagram", label: "Share your rating and reviews on Facebook and Instagram", summary: "How to share your Trustpilot rating and reviews on Facebook and Instagram.", keywords: ["facebook", "instagram", "social media"] },
              { id: "biz-share-pinterest", label: "Share your rating and reviews on Pinterest", summary: "How to share your Trustpilot rating and reviews on Pinterest.", keywords: ["pinterest", "social media"] },
              { id: "biz-style-guidelines-marketing-assets", label: "Style guidelines for Trustpilot's marketing assets", summary: "Style guidelines to follow when using Trustpilot's logo and marketing assets.", keywords: ["style guidelines", "brand"] },
              { id: "biz-google-store-ratings", label: "Trustpilot and Google store ratings", summary: "How your Trustpilot reviews can appear as Google seller ratings.", keywords: ["google", "store ratings"] },
              { id: "biz-ai-visibility-best-practices", label: "Trustpilot best practices for AI visibility", summary: "Best practices for making your Trustpilot profile more visible to AI-powered search tools.", keywords: ["ai visibility"] },
              { id: "biz-business-and-ai-faq", label: "Trustpilot Business and AI – FAQ", summary: "Frequently asked questions about how Trustpilot Business works with AI tools.", keywords: ["ai faq"] },
              { id: "biz-marketing-assets", label: "Trustpilot's Marketing assets", summary: "An overview of the marketing assets available to promote your Trustpilot reviews.", keywords: ["marketing assets"] }
            ]
          }
        ]
      },
      {
        id: "biz-widgets",
        label: "Widgets",
        subtopics: [
          {
            id: "biz-add-widget",
            label: "How to add a widget",
            articles: [
              { id: "biz-widget-accessibility", label: "Accessibility for TrustBox widgets", summary: "How TrustBox widgets are built to be accessible to all website visitors.", keywords: ["accessibility"] },
              { id: "biz-add-service-review-widget", label: "Add a service review TrustBox widget", summary: "How to add a TrustBox widget showing your service reviews to your website.", keywords: ["service review widget"] },
              { id: "biz-add-newsletter-widget", label: "Add a TrustBox Newsletter widget to your email campaigns", summary: "How to add a TrustBox Newsletter widget to your email marketing campaigns.", keywords: ["newsletter widget", "email campaigns"] }
            ]
          },
          {
            id: "biz-widget-overview-faq",
            label: "Widget overview and FAQ",
            articles: [
              { id: "biz-trustbox-widget-overview", label: "TrustBox widget overview", summary: "An overview of the different TrustBox widgets available and what they display." },
              { id: "biz-where-to-place-widgets", label: "Where to place TrustBox widgets on your website", summary: "Recommendations for where to place TrustBox widgets on your website for the best impact.", keywords: ["placement"] }
            ]
          },
          {
            id: "biz-widgets-general",
            label: "General",
            articles: [
              { id: "biz-what-is-trustbox-widget", label: "What is a TrustBox widget?", summary: "An introduction to what a TrustBox widget is and how it works." }
            ]
          }
        ]
      },
      {
        id: "biz-integrations",
        label: "Integrations",
        subtopics: [
          {
            id: "biz-integrations-ecommerce",
            label: "Ecommerce",
            articles: [
              { id: "biz-opencart-integration", label: "Trustpilot's OpenCart 3.0 integration", summary: "How to set up Trustpilot's integration with OpenCart 3.0.", keywords: ["opencart"] },
              { id: "biz-prestashop-integration", label: "Trustpilot's PrestaShop integration", summary: "How to set up Trustpilot's integration with PrestaShop.", keywords: ["prestashop"] },
              { id: "biz-shopify-app-integration", label: "Trustpilot's Shopify app", summary: "How to install and configure Trustpilot's app for Shopify.", keywords: ["shopify"] },
              { id: "biz-upgrade-shopify-app", label: "Upgrade to the new Trustpilot app for Shopify", summary: "How to upgrade from the old Trustpilot Shopify app to the new one.", keywords: ["shopify"] }
            ]
          },
          {
            id: "biz-integrations-payment-crm",
            label: "Payment & CRM",
            articles: [
              { id: "biz-upgrade-salesforce-113-114", label: "How to upgrade from Trustpilot's Salesforce integration 1.13 to 1.14", summary: "Steps to upgrade your Trustpilot Salesforce integration from version 1.13 to 1.14.", keywords: ["salesforce"] },
              { id: "biz-salesforce-integration", label: "Trustpilot's Salesforce integration (1.14 and above)", summary: "How to set up and use Trustpilot's Salesforce integration, version 1.14 and above.", keywords: ["salesforce"] },
              { id: "biz-hubspot-integration", label: "Trustpilot's HubSpot integration", summary: "How to set up Trustpilot's integration with HubSpot.", keywords: ["hubspot"] }
            ]
          },
          {
            id: "biz-integrations-developer-tools",
            label: "Developer tools",
            articles: [
              { id: "biz-custom-trustbox-via-api", label: "Create a custom TrustBox widget using Trustpilot APIs", summary: "How to build a custom TrustBox widget using Trustpilot's developer APIs.", keywords: ["api", "custom widget"] },
              { id: "biz-send-invitations-via-api", label: "Send invitations using a Trustpilot API Invitation", summary: "How to send review invitations programmatically using Trustpilot's API.", keywords: ["api", "invitations"] },
              { id: "biz-api-service-review-guidelines", label: "Trustpilot APIs - Service Review Integration Guidelines", summary: "Guidelines for integrating service reviews using Trustpilot's APIs.", keywords: ["api", "service review"] }
            ]
          },
          {
            id: "biz-integrations-marketing",
            label: "Marketing",
            articles: [
              { id: "biz-partner-built-integration-overview", label: "Partner-built integration overview", summary: "An overview of integrations built by Trustpilot's technology partners.", keywords: ["partner-built"] },
              { id: "biz-klaviyo-integration", label: "Trustpilot's Klaviyo integration", summary: "How to set up Trustpilot's integration with Klaviyo.", keywords: ["klaviyo"] },
              { id: "biz-mailchimp-integration", label: "Trustpilot's Mailchimp integration", summary: "How to set up Trustpilot's integration with Mailchimp.", keywords: ["mailchimp"] },
              { id: "biz-google-tag-manager-integration", label: "Trustpilot's Google Tag Manager integration", summary: "How to set up Trustpilot's integration with Google Tag Manager.", keywords: ["google tag manager", "gtm"] },
              { id: "biz-hootsuite-integration", label: "Trustpilot's Hootsuite integration", summary: "How to set up Trustpilot's integration with Hootsuite.", keywords: ["hootsuite"] }
            ]
          },
          {
            id: "biz-integrations-customer-support",
            label: "Customer support",
            articles: [
              { id: "biz-slack-integration", label: "Trustpilot's Slack integration", summary: "How to set up Trustpilot's integration with Slack.", keywords: ["slack"] },
              { id: "biz-zendesk-integration", label: "Trustpilot's Zendesk integration", summary: "How to set up Trustpilot's integration with Zendesk.", keywords: ["zendesk"] }
            ]
          }
        ],
        articles: [
          { id: "biz-integration-overview", label: "Trustpilot's integration overview", summary: "An overview of all the integrations Trustpilot offers for businesses." }
        ]
      },
      {
        id: "biz-how-trustpilot-works",
        label: "How Trustpilot works",
        subtopics: [
          {
            id: "biz-about",
            label: "About",
            articles: [
              { id: "biz-review-labels", label: "Trustpilot's review labels", summary: "What the different labels shown on reviews mean, such as Verified or Invited." },
              { id: "biz-your-business-profile-page", label: "Your business profile page", summary: "An overview of what appears on your business profile page and how it's built." }
            ]
          },
          {
            id: "biz-protecting-platform",
            label: "Protecting the platform",
            articles: [
              { id: "biz-eu-laws-reviews", label: "New EU laws on reviews - What they mean for businesses using Trustpilot", summary: "What new EU laws on reviews mean for businesses using Trustpilot.", keywords: ["eu laws"] },
              { id: "biz-teams-behind-trust", label: "Teams behind Trust at Trustpilot", summary: "An introduction to the teams at Trustpilot responsible for maintaining trust on the platform." }
            ]
          },
          {
            id: "biz-help",
            label: "Help",
            articles: [
              { id: "biz-contact-account-manager", label: "Contact your account manager", summary: "How to get in touch with your dedicated Trustpilot account manager." },
              { id: "biz-how-to-contact-tp", label: "How to contact Trustpilot", summary: "The different ways businesses can get in touch with Trustpilot's support team." },
              { id: "biz-support-team", label: "Trustpilot's Support Team", summary: "An introduction to Trustpilot's Support Team and how they can help your business." }
            ]
          },
          {
            id: "biz-how-tp-works-general",
            label: "General",
            articles: [
              { id: "biz-april-2026-launch", label: "Trustpilot's April 2026 product launch", summary: "An overview of what's new in Trustpilot's April 2026 product launch." }
            ]
          }
        ]
      }
    ]
  }
};

// Flattens HELP_CENTER_DATA into a single array of searchable articles.
// Each entry: { id, label, summary, keywords, topic, subtopic, audience, audienceLabel, tag, pageUrl, type }
// `type` isn't in the source content yet, so it's inferred: titles that read like a
// reference doc (FAQ / guide / guidelines) are "guide", everything else is "article".
function flattenHelpCenterArticles(data) {
  var results = [];
  Object.keys(data).forEach(function (audienceKey) {
    var audience = data[audienceKey];
    audience.topics.forEach(function (topic) {
      function pushArticle(article, subtopicLabel) {
        results.push({
          id: article.id,
          label: article.label,
          summary: article.summary || '',
          keywords: article.keywords || [],
          topic: topic.label,
          subtopic: subtopicLabel || null,
          audience: audienceKey,
          audienceLabel: audience.audienceLabel,
          tag: audience.tag,
          pageUrl: audience.pageUrl,
          type: article.type || (/faq|guide|guidelines/i.test(article.label) ? 'guide' : 'article')
        });
      }
      (topic.subtopics || []).forEach(function (subtopic) {
        (subtopic.articles || []).forEach(function (article) {
          pushArticle(article, subtopic.label);
        });
      });
      (topic.articles || []).forEach(function (article) {
        pushArticle(article, null);
      });
    });
  });
  return results;
}

const HELP_CENTER_ARTICLES = flattenHelpCenterArticles(HELP_CENTER_DATA);
