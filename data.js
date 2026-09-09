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
              { id: "rev-reset-password", label: "Change or reset your Trustpilot user account password", keywords: ["password", "forgot password", "reset password", "user password"] },
              { id: "rev-change-account-email", label: "Change your Trustpilot reviewer account email", keywords: ["email"] },
              { id: "rev-delete-reviewer-account", label: "Delete your Trustpilot reviewer account", keywords: ["delete account"] },
              { id: "rev-cant-log-in", label: "I can't log in to my reviewer account", keywords: ["login", "log in", "can't log in"] },
              { id: "rev-two-profiles-merge", label: "I have two user profiles on Trustpilot. Can I merge them?", keywords: ["merge accounts"] },
              { id: "rev-manage-personal-email-settings", label: "Manage your personal and email settings" }
            ]
          },
          {
            id: "rev-general-profile-help",
            label: "General profile help",
            articles: [
              { id: "rev-change-profile-picture", label: "Change or remove your profile picture" },
              { id: "rev-choose-username", label: "Choose a username" },
              { id: "rev-create-reviewer-profile", label: "Create a Trustpilot reviewer profile" },
              { id: "rev-tips-using-tp-profile", label: "Tips for using Trustpilot" },
              { id: "rev-verify-identity-photo-id", label: "Verify your identity with photo ID" }
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
              { id: "rev-be-first-to-review", label: "Be the first to review a business" },
              { id: "rev-review-business-multiple-times", label: "Review a business multiple times" },
              { id: "rev-write-a-review-2", label: "Write a review" }
            ]
          },
          {
            id: "rev-manage-edit-reviews",
            label: "Manage and edit your reviews",
            articles: [
              { id: "rev-edit-delete-your-review", label: "Edit or delete your review" },
              { id: "rev-find-manage-reviews", label: "Find and manage your reviews" },
              { id: "rev-find-respond-review-invitations", label: "Find and respond to your review invitations" },
              { id: "rev-delete-product-review-media", label: "How to delete your product review picture or video" }
            ]
          },
          {
            id: "rev-tips-subtopic",
            label: "Tips",
            articles: [
              { id: "rev-photos-videos-product-reviews", label: "How to take photos and videos for product reviews" },
              { id: "rev-tips-location-reviews", label: "Tips for writing location reviews" },
              { id: "rev-tips-product-reviews", label: "Tips for writing product reviews" }
            ]
          }
        ],
        articles: [
          { id: "rev-who-can-write-review-when", label: "Who can write a review and when?" }
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
              { id: "rev-add-attachments-email", label: "Add attachments to an email" },
              { id: "rev-eu-dsa-contact-points", label: "EU Digital Services Act: Contact points on Trustpilot" },
              { id: "rev-appeal-content-integrity", label: "How can I appeal a decision made by the Content Integrity Team?" },
              { id: "rev-how-contact-tp", label: "How do I contact Trustpilot?" },
              { id: "rev-how-take-screenshot", label: "How to take a screenshot" }
            ]
          },
          {
            id: "rev-how-tp-works-for-you",
            label: "How Trustpilot works for you",
            articles: [
              { id: "rev-businesses-pay", label: "Do businesses pay to use Trustpilot?" },
              { id: "rev-reviews-improve-shopping", label: "How can reviews improve your online shopping experiences?" },
              { id: "rev-business-model", label: "How does Trustpilot's business model work?" }
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
              { id: "rev-find-explore-categories", label: "Find and explore categories" },
              { id: "rev-chrome-extension", label: "Trustpilot's Google Chrome Extension" }
            ]
          },
          {
            id: "rev-business-profile-pages",
            label: "Business profile pages & review labels",
            articles: [
              { id: "rev-company-activity", label: "Company activity - See how every business uses Trustpilot" },
              { id: "rev-filter-business-reviews", label: "Filter a business's reviews" },
              { id: "rev-merged-business-profiles", label: "Merged business profiles on Trustpilot" },
              { id: "rev-verified-label", label: "Why are some reviews marked \"Verified\"?", keywords: ["verified"] }
            ]
          },
          {
            id: "rev-social-sharing",
            label: "Social sharing",
            articles: [
              { id: "rev-share-your-reviews", label: "Share your Trustpilot reviews" }
            ]
          }
        ],
        articles: [
          { id: "rev-trust-reviews-on-websites", label: "Can I trust Trustpilot reviews on business websites?" }
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
              { id: "rev-misuse-flagging-tool", label: "How do we handle misuse of the review flagging tool for consumers?" }
            ]
          },
          {
            id: "rev-review-was-flagged",
            label: "My review was flagged",
            articles: [
              { id: "rev-asked-update-review-info", label: "I've been asked to update my review or provide more info" }
            ]
          },
          {
            id: "rev-whistleblower",
            label: "Whistleblower",
            articles: [
              { id: "rev-whistleblower-function", label: "Does Trustpilot have a whistleblower function?" }
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
              { id: "rev-delete-review-invitations-data", label: "Delete your review invitations data" },
              { id: "rev-access-download-correct-delete-personal-data", label: "How to access, download, correct, or delete your personal data" },
              { id: "rev-gdpr-data-protection-businesses", label: "The GDPR and data protection requirements for businesses", keywords: ["gdpr"] },
              { id: "rev-retention-period-reviews", label: "What's the retention period of reviews?" }
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
        label: "Getting started",
        subtopics: [
          {
            id: "biz-choose-your-plan",
            label: "Choose your plan",
            articles: [
              { id: "biz-starter-plan-article", label: "Getting started with Trustpilot's Starter plan" },
              { id: "biz-premium-plan-article", label: "Getting started with Trustpilot's Premium plan" },
              { id: "biz-plus-plan-article", label: "Getting started with Trustpilot's Plus plan" },
              { id: "biz-free-plan-article", label: "Getting started with Trustpilot's Free plan" }
            ]
          },
          {
            id: "biz-set-up-account",
            label: "Set up your account",
            articles: [
              { id: "biz-customize-business-profile", label: "Customize your business profile" },
              { id: "biz-claim-business-profile", label: "Claim your business profile" }
            ]
          }
        ]
      },
      {
        id: "biz-account-management-and-billing",
        label: "Account Management & Billing",
        subtopics: [
          {
            id: "biz-manage-account",
            label: "Manage your account",
            articles: [
              { id: "biz-manage-multiple-domains", label: "Manage multiple domains or businesses" },
              { id: "biz-manage-review-notifications", label: "Manage review notifications" },
              { id: "biz-manage-business-users", label: "Manage Trustpilot Business users" },
              { id: "biz-roles-permissions-overview", label: "Roles and permissions overview", keywords: ["roles", "permissions"] },
              { id: "biz-set-up-custom-roles", label: "Set up custom roles" },
              { id: "biz-turn-off-auto-renewal", label: "Turn off auto-renewal for your Trustpilot Business plan", keywords: ["auto-renewal"] }
            ]
          },
          {
            id: "biz-login-password",
            label: "Login and password",
            keywords: ["password"],
            articles: [
              { id: "biz-change-account-email", label: "Change your Trustpilot Business account email", keywords: ["email"] },
              { id: "biz-change-account-password", label: "Change your Trustpilot Business account password", keywords: ["password", "reset password"] },
              { id: "biz-cant-access-account", label: "I can't access my Trustpilot Business account" },
              { id: "biz-log-in-to-account", label: "Log in to your Trustpilot Business account", keywords: ["login", "log in"] },
              { id: "biz-new-login-method-faq", label: "New login method to Trustpilot Business - FAQ" }
            ]
          },
          {
            id: "biz-billing",
            label: "Billing",
            articles: [
              { id: "biz-manage-billing-details", label: "Manage your billing details" },
              { id: "biz-purchase-addons-upgrade", label: "Purchase add-ons or upgrade your plan" },
              { id: "biz-set-up-automatic-billing", label: "Set up automatic billing" },
              { id: "biz-pay-invoice", label: "How can I pay my Trustpilot invoice?", keywords: ["invoice"] },
              { id: "biz-invoice-explained", label: "Your Trustpilot invoice explained", keywords: ["invoice"] }
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
              { id: "biz-automate-invitations-gtm", label: "Automate review invitations using Google Tag Manager", keywords: ["gtm", "google tag manager"] },
              { id: "biz-embedded-review-form-link", label: "Embedded Review Form with Unique Link" },
              { id: "biz-automatic-invitation-methods", label: "Trustpilot's automatic invitation methods" }
            ]
          },
          {
            id: "biz-request-reviews-manual",
            label: "Request reviews manually",
            articles: [
              { id: "biz-send-product-review-invitations-import", label: "Send product review invitations by importing a customer data file" },
              { id: "biz-send-service-review-invitations-import", label: "Send service review invitations by importing a customer data file" },
              { id: "biz-manual-invitation-methods", label: "Trustpilot's manual invitation methods" },
              { id: "biz-manual-invitation-access-ends", label: "What to do when your manual invitation access ends" }
            ]
          },
          {
            id: "biz-request-reviews-outside",
            label: "Request reviews outside Trustpilot's system",
            articles: [
              { id: "biz-send-invitations-api-link", label: "Send invitations with a Business API link", keywords: ["api"] },
              { id: "biz-troubleshoot-generated-links", label: "Troubleshoot Business Generated Links" },
              { id: "biz-what-are-generated-links", label: "What are Business Generated Links?" }
            ]
          },
          {
            id: "biz-manage-review-invitations",
            label: "Manage your review invitations",
            articles: [
              { id: "biz-add-tp-to-spf-record", label: "Add Trustpilot to your SPF record", keywords: ["spf"] },
              { id: "biz-configure-invitation-email-settings", label: "Configure your invitation email settings" },
              { id: "biz-configure-invitation-time-delivery", label: "Configure your invitation time and delivery settings" },
              { id: "biz-customize-invitation-template", label: "Customize your invitation template" },
              { id: "biz-more-feedback-multiple-reviews", label: "Get more customer feedback with multiple reviews" },
              { id: "biz-review-email-invitation-templates", label: "How we review your email invitation templates" },
              { id: "biz-invitation-optimizer", label: "Invitation optimizer" },
              { id: "biz-invitation-status-overview", label: "Invitation status overview" },
              { id: "biz-manage-sent-invitations", label: "Manage your sent invitations" },
              { id: "biz-turn-off-tracking-pixels", label: "Turn off tracking pixels in review invitations", keywords: ["tracking pixels"] }
            ]
          },
          {
            id: "biz-guidelines-tips",
            label: "Guidelines + tips",
            articles: [
              { id: "biz-collect-reviews-on-premises", label: "Collect reviews on business premises" },
              { id: "biz-tips-for-businesses", label: "Tips for businesses" }
            ]
          }
        ],
        articles: [
          { id: "biz-invitation-addon-module", label: "Invitation Add-on Module" },
          { id: "biz-set-up-in-app-review-collector", label: "Set up an In-app review collector" },
          { id: "biz-invitation-methods", label: "Trustpilot invitation methods" }
        ]
      },
      {
        id: "biz-respond-and-manage",
        label: "Respond and Manage",
        subtopics: [
          {
            id: "biz-service-reviews",
            label: "Service reviews",
            articles: [
              { id: "biz-get-started-service-reviews", label: "Get started with service reviews" },
              { id: "biz-manage-service-reviews", label: "Manage your service reviews" },
              { id: "biz-review-follow-up", label: "Review follow-up" },
              { id: "biz-tag-service-reviews", label: "Tag your service reviews", keywords: ["tags"] },
              { id: "biz-review-spotlight", label: "Trustpilot's Review spotlight" }
            ]
          },
          {
            id: "biz-product-reviews",
            label: "Product reviews",
            articles: [
              { id: "biz-import-third-party-product-reviews", label: "Import third-party product reviews to Trustpilot" },
              { id: "biz-manage-product-catalog", label: "Manage your product catalog" },
              { id: "biz-prepare-product-catalog-csv", label: "Prepare your product catalog CSV file", keywords: ["csv"] },
              { id: "biz-product-review-pages-beta", label: "Product review pages (Beta)" },
              { id: "biz-set-up-product-catalog", label: "Set up your product catalog" }
            ]
          },
          {
            id: "biz-location-reviews",
            label: "Location reviews",
            articles: [
              { id: "biz-get-started-location-reviews", label: "Get started with location reviews" },
              { id: "biz-create-csv-for-locations", label: "How to create a CSV file for locations", keywords: ["csv"] },
              { id: "biz-location-reviews-faq", label: "Location reviews - FAQ" },
              { id: "biz-manage-business-locations", label: "Manage your business locations" },
              { id: "biz-set-up-location-review-invitations", label: "Set up location review invitations" }
            ]
          },
          {
            id: "biz-manage-your-reviews",
            label: "Manage your reviews",
            articles: [
              { id: "biz-how-to-reply-to-reviews", label: "How to reply to reviews" },
              { id: "biz-request-info-from-reviewers", label: "How to request information from reviewers" }
            ]
          },
          {
            id: "biz-respond-general",
            label: "General",
            articles: [
              { id: "biz-tips-replying-reviews", label: "Tips for replying to reviews" },
              { id: "biz-ai-assisted-replies", label: "Use AI-assisted replies to respond to reviews", keywords: ["ai replies"] }
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
              { id: "biz-analytics-explorer", label: "Analytics explorer" },
              { id: "biz-invitation-analytics", label: "Invitation analytics" },
              { id: "biz-reply-analytics", label: "Reply analytics" },
              { id: "biz-service-reviews-analytics", label: "Service reviews analytics" }
            ]
          },
          {
            id: "biz-review-insights",
            label: "Review insights",
            articles: [
              { id: "biz-ri-locations", label: "Trustpilot Analytics: Review Insights - Locations", keywords: ["locations"] },
              { id: "biz-ri-spotlight-report", label: "Trustpilot Analytics: Review Insights - Spotlight report", keywords: ["spotlight report"] },
              { id: "biz-ri-topics", label: "Trustpilot Analytics: Review Insights - Topics", keywords: ["topics"] },
              { id: "biz-ri-trustscore-forecast", label: "Trustpilot Analytics: Review Insights - TrustScore forecast", keywords: ["trustscore forecast"] }
            ]
          },
          {
            id: "biz-engagement",
            label: "Engagement",
            articles: [
              { id: "biz-ai-search-analytics", label: "AI search analytics" },
              { id: "biz-eng-organic-reach", label: "Trustpilot Analytics: Organic reach", keywords: ["organic reach"] },
              { id: "biz-eng-profile-engagement", label: "Trustpilot Analytics: Profile engagement", keywords: ["profile engagement"] },
              { id: "biz-eng-search-engagement", label: "Trustpilot Analytics: Search engagement", keywords: ["search engagement"] },
              { id: "biz-eng-seo-reach", label: "Trustpilot Analytics: SEO reach", keywords: ["seo reach"] },
              { id: "biz-eng-visitor-insights", label: "Trustpilot Analytics: Visitor insights", keywords: ["visitor insights"] },
              { id: "biz-eng-widgets-engagement", label: "Trustpilot Analytics: Widgets engagement", keywords: ["widgets engagement"] }
            ]
          },
          {
            id: "biz-market",
            label: "Market",
            articles: [
              { id: "biz-market-insights", label: "Market insights" },
              { id: "biz-market-peers", label: "Trustpilot Analytics: Market peers", keywords: ["market peers"] },
              { id: "biz-market-topics", label: "Trustpilot Analytics: Market topics", keywords: ["market topics"] },
              { id: "biz-market-trends", label: "Trustpilot Analytics: Market trends", keywords: ["market trends"] },
              { id: "biz-market-my-competitors", label: "Trustpilot Analytics: My competitors", keywords: ["my competitors", "competitors"] }
            ]
          },
          {
            id: "biz-analytics-general",
            label: "General",
            articles: [
              { id: "biz-custom-dashboards", label: "Custom dashboards" }
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
              { id: "biz-afs-faq", label: "Automatic Feedback Service - FAQ", keywords: ["afs faq"] },
              { id: "biz-afs-overview", label: "Automatic Feedback Service (AFS)", keywords: ["afs"] },
              { id: "biz-afs-customer-journey", label: "Collect reviews throughout your customer journey with Automatic Feedback Service (AFS)", keywords: ["afs"] },
              { id: "biz-afs-bcc-field", label: "Set up Automatic Feedback Service (AFS) using a BCC field", keywords: ["afs", "bcc"] },
              { id: "biz-afs-separate-trigger-email", label: "Set up Automatic Feedback Service (AFS) using a separate trigger email", keywords: ["afs"] },
              { id: "biz-what-is-afs", label: "What is Automatic Feedback Service?", keywords: ["afs"] }
            ]
          },
          {
            id: "biz-ecommerce-afs-guides",
            label: "Ecommerce AFS guides",
            articles: [
              { id: "biz-afs-shopify-flow", label: "Use Automatic Feedback Service with the Shopify Flow app", keywords: ["afs", "shopify"] }
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
              { id: "biz-create-trustpilot-asset", label: "Create a Trustpilot asset" },
              { id: "biz-share-facebook-instagram", label: "Share your rating and reviews on Facebook and Instagram", keywords: ["facebook", "instagram", "social media"] },
              { id: "biz-share-pinterest", label: "Share your rating and reviews on Pinterest", keywords: ["pinterest", "social media"] },
              { id: "biz-style-guidelines-marketing-assets", label: "Style guidelines for Trustpilot's marketing assets", keywords: ["style guidelines", "brand"] },
              { id: "biz-google-store-ratings", label: "Trustpilot and Google store ratings", keywords: ["google", "store ratings"] },
              { id: "biz-ai-visibility-best-practices", label: "Trustpilot best practices for AI visibility", keywords: ["ai visibility"] },
              { id: "biz-business-and-ai-faq", label: "Trustpilot Business and AI – FAQ", keywords: ["ai faq"] },
              { id: "biz-marketing-assets", label: "Trustpilot's Marketing assets", keywords: ["marketing assets"] }
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
              { id: "biz-widget-accessibility", label: "Accessibility for TrustBox widgets", keywords: ["accessibility"] },
              { id: "biz-add-service-review-widget", label: "Add a service review TrustBox widget", keywords: ["service review widget"] },
              { id: "biz-add-newsletter-widget", label: "Add a TrustBox Newsletter widget to your email campaigns", keywords: ["newsletter widget", "email campaigns"] }
            ]
          },
          {
            id: "biz-widget-overview-faq",
            label: "Widget overview and FAQ",
            articles: [
              { id: "biz-trustbox-widget-overview", label: "TrustBox widget overview" },
              { id: "biz-where-to-place-widgets", label: "Where to place TrustBox widgets on your website", keywords: ["placement"] }
            ]
          },
          {
            id: "biz-widgets-general",
            label: "General",
            articles: [
              { id: "biz-what-is-trustbox-widget", label: "What is a TrustBox widget?" }
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
              { id: "biz-opencart-integration", label: "Trustpilot's OpenCart 3.0 integration", keywords: ["opencart"] },
              { id: "biz-prestashop-integration", label: "Trustpilot's PrestaShop integration", keywords: ["prestashop"] },
              { id: "biz-shopify-app-integration", label: "Trustpilot's Shopify app", keywords: ["shopify"] },
              { id: "biz-upgrade-shopify-app", label: "Upgrade to the new Trustpilot app for Shopify", keywords: ["shopify"] }
            ]
          },
          {
            id: "biz-integrations-payment-crm",
            label: "Payment & CRM",
            articles: [
              { id: "biz-upgrade-salesforce-113-114", label: "How to upgrade from Trustpilot's Salesforce integration 1.13 to 1.14", keywords: ["salesforce"] },
              { id: "biz-salesforce-integration", label: "Trustpilot's Salesforce integration (1.14 and above)", keywords: ["salesforce"] },
              { id: "biz-hubspot-integration", label: "Trustpilot's HubSpot integration", keywords: ["hubspot"] }
            ]
          },
          {
            id: "biz-integrations-developer-tools",
            label: "Developer tools",
            articles: [
              { id: "biz-custom-trustbox-via-api", label: "Create a custom TrustBox widget using Trustpilot APIs", keywords: ["api", "custom widget"] },
              { id: "biz-send-invitations-via-api", label: "Send invitations using a Trustpilot API Invitation", keywords: ["api", "invitations"] },
              { id: "biz-api-service-review-guidelines", label: "Trustpilot APIs - Service Review Integration Guidelines", keywords: ["api", "service review"] }
            ]
          },
          {
            id: "biz-integrations-marketing",
            label: "Marketing",
            articles: [
              { id: "biz-partner-built-integration-overview", label: "Partner-built integration overview", keywords: ["partner-built"] },
              { id: "biz-klaviyo-integration", label: "Trustpilot's Klaviyo integration", keywords: ["klaviyo"] },
              { id: "biz-mailchimp-integration", label: "Trustpilot's Mailchimp integration", keywords: ["mailchimp"] },
              { id: "biz-google-tag-manager-integration", label: "Trustpilot's Google Tag Manager integration", keywords: ["google tag manager", "gtm"] },
              { id: "biz-hootsuite-integration", label: "Trustpilot's Hootsuite integration", keywords: ["hootsuite"] }
            ]
          },
          {
            id: "biz-integrations-customer-support",
            label: "Customer support",
            articles: [
              { id: "biz-slack-integration", label: "Trustpilot's Slack integration", keywords: ["slack"] },
              { id: "biz-zendesk-integration", label: "Trustpilot's Zendesk integration", keywords: ["zendesk"] }
            ]
          }
        ],
        articles: [
          { id: "biz-integration-overview", label: "Trustpilot's integration overview" }
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
              { id: "biz-review-labels", label: "Trustpilot's review labels" },
              { id: "biz-your-business-profile-page", label: "Your business profile page" }
            ]
          },
          {
            id: "biz-protecting-platform",
            label: "Protecting the platform",
            articles: [
              { id: "biz-eu-laws-reviews", label: "New EU laws on reviews - What they mean for businesses using Trustpilot", keywords: ["eu laws"] },
              { id: "biz-teams-behind-trust", label: "Teams behind Trust at Trustpilot" }
            ]
          },
          {
            id: "biz-help",
            label: "Help",
            articles: [
              { id: "biz-contact-account-manager", label: "Contact your account manager" },
              { id: "biz-how-to-contact-tp", label: "How to contact Trustpilot" },
              { id: "biz-support-team", label: "Trustpilot's Support Team" }
            ]
          },
          {
            id: "biz-how-tp-works-general",
            label: "General",
            articles: [
              { id: "biz-april-2026-launch", label: "Trustpilot's April 2026 product launch" }
            ]
          }
        ]
      }
    ]
  }
};

// Flattens HELP_CENTER_DATA into a single array of searchable articles.
// Each entry: { id, label, keywords, topic, subtopic, audience, audienceLabel, tag, pageUrl, type }
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
