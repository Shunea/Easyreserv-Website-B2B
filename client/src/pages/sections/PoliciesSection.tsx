import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const policyItems = [
  { label: "Privacy Policy", anchor: "#privacy-policy" },
  { label: "Cookies Policy", anchor: "#cookies-policy" },
  { label: "Terms and Conditions", anchor: "#terms-and-conditions" },
];

const policies = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    content: `PRIVACY POLICY PERSONAL DATA PROTECTION INFORMATION

For Shunea IT-Projects SRL ('EasyReserv.io'), your privacy and the security of your personal data are of utmost importance. We collect and manage your personal data with great care and take specific measures to keep them safe.

Below, you will find the main information about how EasyReserv.io processes your personal data in connection with your use of https://easyreserv.io, https://app.easyreserv.io/login, and the EasyReserv.io mobile application. For detailed information on how EasyReserv.io manages your personal data, please continue reading.

This information is provided, in accordance with the provisions of Law No. 133 of July 8, 2011, regarding the protection of personal data (hereinafter referred to as the 'Law'), to users (hereinafter: 'Users' or 'User') of the desktop and mobile version of the website, the desktop web application, and any mobile application related to the service (hereinafter: 'the Website, Web Application, and Mobile Application') owned by 'Shunea - IT Projects' SRL, the Data Controller (hereinafter: the 'Administrator,' 'Data Controller,' or 'EasyReserv.io').

As specified in the Terms and Conditions of Use, the services offered by the Administrator/Data Controller and Partners are intended for individuals over 18 years of age. In the event that the Administrator becomes aware of the processing of data of minors under 18 years of age without valid consent from parents or a legal guardian, the Administrator reserves the right to unilaterally terminate the use of the offered service and to delete any data obtained.

Please also read the 'Terms and Conditions of Use' of the 'EasyReserv.io' platform for detailed information on our service conditions.

APPLICABLE PRINCIPLES FOR THE PROCESSING OF PERSONAL DATA

The Data Controller, in accordance with the Regulation, announces that the aforementioned legislation provides for the protection of individuals with regard to the processing of personal data, and such processing will be based on the principles of fairness, legality, transparency, and the protection of confidentiality and fundamental rights.

DEFINITIONS

User/Subscriber - any natural or legal person with full legal capacity who visits and/or interacts with the website https://easyreserv.io or/and the web application https://app.easyreserv.io or/and the mobile application 'EasyReserv.io' (found on the App Store / Google Play Market) called the 'platform' for consulting, booking, or purchasing services; to establish, modify, or cancel reservations and appointments with partners registered on the EasyReserv.io platform or, as the case may be, individuals who are simply interested in viewing the services presented on the mobile application.

Users who also wish to make reservations or receive notifications from partner locations must register by creating their user profile.

The personal data required for user registration are:

• Full Name
• Email Address
• Phone Number
• Date of Birth
• Gender
• Information about how you use the platform, such as your behavior, preferences, and habits on the platform, as well as any other categories of data provided directly in the context of making a reservation or in any other way resulting from the use of the platform.

Terms not defined in this Privacy Policy have the same meaning as described in the Terms and Conditions of Use.

What personal data do we collect? Collection of browsing data.

The IT systems and technical and software procedures that underlie the operation of the Website, Web Application, and Mobile Application acquire, during their normal operation, some personal data, the transmission of which is implicit in the mechanisms and protocols used on the Internet.

Each time a User connects to the platform and each time they access or request content, access data is stored on our systems in the form of tabular or linear data files.

This data may be used by the Data Controller exclusively to obtain anonymous statistical information about the use of the platform, to identify the pages preferred by Users, and, therefore, to provide increasingly suitable content and to verify its correct operation. At the request of the Authority, the data could be used to ascertain responsibility in the event of hypothetical computer crimes against the 'Easyreserv.io' platform or its Users.

In addition, the categories of personal data collected and processed by 'EasyReserv.io' when you browse or make reservations through the application include the following:

• We collect personal data necessary to complete and process your reservation on the 'EasyReserv.io' application, such as your name, email address, address, and phone number;
• For the registration of your 'EasyReserv.io' account, we collect your name, email address, password, and date of birth. If you are a registered user, we collect information about your access to the reserved area. With your explicit consent, by analyzing your personal data, we can process information about your interests and preferences regarding our services, in order to make proposals and offers that match your tastes.

Information about profiling, search engines, and location data. We collect information about your browsing on the 'EasyReserv.io' application, such as the pages/screens you visit and how you interact with a single page/screen, and we save this information on our servers. Only with your consent, the Data Controller will be able to personalize your experience as a registered user using this information, analyzed and through automated processes such as profiling, in order to offer you a unique and personalized experience.

When you use the 'EasyReserv.io' application with the location detection feature active, the platform may collect and process information about the current location of the User. This data is processed in a format that allows the personal identification of the registered User and is used to enable the sending of personalized promotional communications based on the locations registered by the location service. This user location information is not shared with third parties, and the User can deactivate this feature at any time through the EasyReserv.io mobile application.

METHOD OF PROCESSING AND STORAGE OF PERSONAL DATA

The Data Controller ensures that personal data is processed in full compliance with Law No. 133, in paper and/or electronic format, using automated procedures. Processing may also be carried out using automated tools designed to store, manage, and transmit data.

The collected and processed data will be protected with physical and logical methods to minimize the risks of unauthorized access, dissemination, loss, and destruction of data. Data processing will not last longer than necessary to achieve the purposes for which they were collected.

The data subject will have the right to revoke consent for processing at any time and easily by sending a communication to the Data Controller at the following address: easyreserv@ishunea.io. Following a User's request for deletion, all personal data will be deleted without affecting subsequent storage required by regulatory obligations.

The Data Controller reports that a User who has requested cancellation from the platform may receive further communications from the Data Controller in a limited manner after this request, due to the time required by the Controller's systems to process the unsubscribe and deletion procedure. In any case, the Data Controller ensures that within a maximum of ten days from the cancellation request, the User will no longer receive any further communication, and their data will be deleted.

In the event that a cancellation request is not received by the Data Controller, personal data will be retained for a period not exceeding 2 (two) years from the date of the User's last access to the 'EasyReserv.io' platform. Data collected when purchasing services or goods on the 'EasyReserv.io' application will be processed until all administrative and accounting formalities are completed, and they will be kept for a maximum period of 10 (ten) years according to tax conditions and legal requirements.

Who will process your data? Recipients of personal data

Your personal data is processed by personnel properly trained by 'Shunea - IT Projects' SRL as the Data Controller. Furthermore, for organizational and functional needs related to the provision of services on www.easyreserv.io, your data may also be processed by our providers. The latter have been assessed and chosen by 'Shunea - IT Projects' SRL for their proven reliability and competence, and they process your data as Data Processors on behalf of 'Shunea - IT Projects' SRL.

Personal data collected may be processed by subjects or categories of subjects acting as data processors. Furthermore, for some services, data may be disclosed to companies that collaborate or use the services of the Data Controller with the sole intention of providing the services requested by the User. In these cases, the Partners are independent owners; therefore, the Owner is not responsible for the processing of data by them. Also, the Data Controller is not responsible for the privacy policies of third-party websites that may be consulted through links present on this website.

RIGHTS OF THE DATA SUBJECT

The User, as the data subject, has the right to exercise specific rights regarding their personal data. In particular, the data subject has the right to obtain:

• confirmation of the existence or non-existence of personal data concerning them, even if they are not yet registered, in a concise, transparent, intelligible, and easily accessible form, using clear and simple language;
• the origin of personal data;
• the purposes and methods of processing;
• the legitimate interests pursued by the Data Controller or third parties;
• any recipients or categories of recipients of personal data;
• the retention period of personal data;
• identification details of the Data Controller, Data Processors, any designated Representatives, and the Data Protection Officer (DPO);
• subjects and categories of subjects to whom personal data may be communicated or who may become aware of it as designated representatives in the state, directors, or agents;
• the updating, rectification, or, when interested, integration of data;
• the ability to lodge a complaint with a supervisory authority;
• the deletion, transformation into anonymous form, or blocking of data processed in violation of the law, including data that need not be retained for the purposes for which the data were collected or subsequently processed;
• the limitation of processing;
• the portability of personal data concerning them to another Data Controller.

DATA PROCESSOR AND DATA PROTECTION OFFICER

To exercise the rights mentioned above, the data subject may contact the Data Controller and/or the Data Protection Officer at any time for any communication regarding the processing of Personal Data or to know the updated list of any Processors designated by the Company, by sending a communication to the contact persons listed below:

Data Controller: 'Shunea - IT Projects' SRL (iShunea Tech Solutions) easyreserv@ishunea.io.

CHANGES

This information may be subject to changes. To keep Users informed, the Data Controller invites Users to periodically visit this page. Furthermore, in the event that such changes have an impact on User data (e.g., if the Data Controller intends to process User personal data for purposes other than those previously communicated in this Information), the Data Controller will inform Users before the changes take effect, by publishing them with the utmost emphasis on your website and application.`
  },
  {
    id: "cookies-policy",
    title: "Cookies Policy",
    content: `Cookie Policy for EasyReserv.io Platform

Effective Date: 18th of October 2023

This Cookie Policy outlines how cookies and similar technologies are used on the website of EasyReserv.io Platform ('we,' 'us,' or 'our'). By using our website, you consent to the use of cookies as described in this policy.

What Are Cookies?

Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They are widely used to enhance your browsing experience and provide certain functionalities. Cookies are commonly used to store your preferences, track website usage, and perform various other tasks related to user interaction and analytics.

How We Use Cookies?

We use cookies for the following purposes:

Essential Cookies: These cookies are necessary for the proper functioning of our website. They enable core functionalities such as secure login, navigation, and access to specific areas of the site. Without these cookies, the website may not function as intended.

Authentication: We use cookies to determine whether or not you've signed in to EasyReserv.io and to keep you signed in during visits as you access different pages.

Security: We use cookies to enable and support security features, prevent fraud and detect malicious activity.

Preferences and Features: We use cookies to enable features, personalize your content and remember your preferences.

Analytics Cookies: We use analytics cookies to gather information about how visitors use our website. This helps us understand user preferences, identify areas for improvement, and optimize the website's performance. The data collected is aggregated and anonymized.

Google Analytics: We use Google Analytics to help measure how users interact with our websites - https://policies.google.com/privacy

Facebook: We use Facebook Pixels and Custom Audiences to deliver targeted advertisements to individuals who visit our websites - https://www.facebook.com/policy.php

New Relic: We use New Relic to monitor the performance and errors of our applications - https://newrelic.com/termsandconditions/privacy

Cloudflare: We use Cloudflare to provide application security - https://www.cloudflare.com/privacypolicy

Google Ads: We use Google Ads to deliver targeted advertisements to individuals that look for the services EasyReserv.io offers - https://policies.google.com/privacy

Functionality Cookies: These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features. They can also be used to remember changes you make to text size, fonts, and other customizable elements.

Advertising and Marketing Cookies: We do not use advertising cookies to track your browsing behavior across different websites for the purpose of delivering targeted advertisements.

Third-Party Cookies

We may also allow third-party service providers to set cookies on our website for the purposes outlined above. These providers may include analytics, advertising, and social media companies. Please note that we have no control over the cookies set by these third parties.

Managing Cookies

Most web browsers allow you to control and manage your cookie preferences. You can usually adjust your browser settings to decline cookies, delete existing cookies, or receive notifications when new cookies are sent to your device. Keep in mind that disabling cookies may impact the functionality and user experience of our website.

Updates to this Cookie Policy

We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. We encourage you to review this policy periodically for any updates. The 'Effective Date' at the top of the policy indicates when the latest version was implemented.

Contact Information

If you have any questions, concerns, or requests related to this Cookie Policy, please contact us at easyreserv@ishunea.io.

By continuing to use our website, you agree to the use of cookies as described in this policy.`
  },
  {
    id: "terms-and-conditions",
    title: "Terms and Conditions",
    content: `TERMS AND CONDITIONS OF THE EASYRESERV.IO PLATFORM

Please read these Terms and Conditions of use of the platform carefully before you begin using them, as they are legally binding. By using our platform, you confirm that you accept the Terms of use and agree to abide by them. If you do not accept the Terms and Conditions of use of the platform, you will not be able to use our platform.

Before making a transaction on this platform, please also read these General Booking Conditions, which will govern your purchases. If you do not accept these General Booking Conditions, please do not use our platform.

TERMS OF USE

These terms of use govern the use of the "EasyReserv.io" platform service, available at https://easyreserv.io in any version that may be displayed, from the EasyReserv.io app to any other channel, current or future, provided by 'SHUNEA - IT PROJECTS' LLC

1.2. The identification data of the service provider through the EasyReserv.io Platform:

This platform is managed by SHUNEA - IT PROJECTS SRL, registered in the Republic of Moldova, with tax code: 1019605001539, VAT code: 6501068, located at 53 Sarmizegetusa Street, Chisinau (referred to as 'EasyReserv.io,' 'we' or 'us').

1.3 For any communication with EasyReserv.io, you can send an email to: easyreserv@ishunea.io.

TERMS

Internet - a global information system accessible to the public, logically connected through a global address space and based on internet protocol, defined by international standards.

Web site/Platformă web - a set of web pages available on the Internet, combined according to content and navigation, assigned a unique IP address, located on the Internet at https://easyreserv.io including its derivatives and subdomains hosting information about Providers, Beneficiaries/Partners, and the provision of services.

Platform - the EasyReserv.io mobile and web application.

Beneficiary/Partner - a natural or legal person, resident/non-resident, who has entered into a contract with the Provider for placing information on the website or has a business account on the EasyReserv.io platform and has accepted the platform's terms of use.

Entity - a business belonging to a Beneficiary/Partner registered on the Platform.

User/Subscriber - any natural or legal person with full legal capacity who visits and/or interacts with the https://easyreserv.io website or the EasyReserv.io mobile application (found on the AppStore/Google Play Market), including for consultation, reservation, or service purchase, as well as to establish, modify, or cancel appointments with Partners listed on the EasyReserv.io platform. This may also include individuals interested in purchasing services presented on the mobile application.

The mere use of the web platform or mobile application implies the full and unconditional acceptance of all the provisions listed in this document, in the version published by EasyReserv.io at the time the User accesses the EasyReserv.io platform.

Services - services provided by EasyReserv.io, including:

• The possibility for natural persons/legal persons/owners/administrators of businesses to register on the EasyReserv.io platform and promote their activities and services within it.
• The possibility for Users to establish, modify, or cancel appointments with businesses listed on the EasyReserv.io platform.
• The ability for Partners with a business account on the platform to manage and virtually monitor appointments made within their business, as well as monitor stock levels and other management components (if applicable).
• Any other benefits resulting from the use of the EasyReserv.io web platform functions.

Products and Services of Entities - products, goods, and/or services offered for sale or reservation on the EasyReserv.io mobile application.

UGC (User-Generated Content) - opinions and comments posted by users.

Reservation/Appointment - the booking and/or scheduling by Users of a certain number of seats and/or services within one or more Entities, at a specific date and time. The reservation/appointment is considered accepted when the User receives confirmation from EasyReserv.io or the Business, whether by phone, email, or notification on the Platform. Reservations/Appointments have the following statuses:

• Reservation/Appointment under review - This is the status of a reservation or appointment made by Users, which must be reviewed, validated, or declined by the Entity (e.g., a restaurant or salon). The Entity may check availability or other details before confirming or rejecting the reservation.
• Confirmed Reservation/Appointment - This is the status in which a reservation or appointment has been accepted and confirmed by both the User and the Entity. This means that the reservation or appointment is accepted, and services will be provided at the specified date and time.
• In-service Reservation/Appointment - This status applies when the reservation or appointment is in progress. When the customer has arrived at the location, and the service is being provided, the reservation or appointment is in service.
• Canceled Reservation/Appointment - This is the status when a reservation or appointment is canceled by the User before the service is provided, with an indication of the reason.
• Rejected Reservation/Appointment - This status applies when the Entity refuses to accept a reservation or appointment, with an indication of the reason.
• Unfulfilled Reservation/Appointment - This status applies when the User does not show up at the location at the specified date and time for the reservation or appointment, despite prior confirmation.
• Completed Reservation/Appointment - This status applies when the reservation or appointment has been completed and paid for.

Preorder - an order placed by a User in the details of a Confirmed Reservation; the preorder becomes available after the reservation is confirmed by the Entity. To be confirmed, the preorder must be accepted by the Entity.

IP Address - a digital and/or symbolic identifier of domain names in the hierarchical domain name system defined by international standards on the Internet.

Platform Provider/Administrator - a person who has all the necessary accesses and passwords to ensure the normal operation of the platform and also has the right to provide advertising and information services to users and partners on the platform. According to the conditions of this contract, the Provider is the administrator of the platform.

Partner's Page - information about the partner posted on the platform, which may also contain information about them as a service provider, location, contact details, etc. The structure and interface (view) of the Partner's Page are determined by the Administrator. The structure and interface of the Partner's Page may vary, but the Administrator guarantees the Partner the retention of data previously entered into the personal account (office, https://app.easyreserv.io).

Registration - the Partner's acceptance of the offer to conclude this electronic contract/agreement and the procedure in which the Partner, by completing the relevant forms of the platform, provides the necessary information for using the services on the EasyReserv.io platform. Registration is considered complete only when all stages have been successfully completed according to the instructions published on the website.

Payments - payments for the portal services (subscription, online services, etc.) that can be made through commercial banks to the settlement account described in this document. Payment procedures are regulated by the Bank.

Third Party - advertising agents, contest sponsors, promotional and marketing partners, and other individuals who provide content for the platform or whose products or services the Provider deems of interest.

Device - any device connected to the internet, such as a phone, tablet, computer, or any other device that can be used to visit EasyReserv.io and use the offered services.

Terms and Conditions and/or 'T&C' - this document, the Privacy Policy, and any other documents available on the https://easyreserv.io Platform that govern the legal relationship between EasyReserv.io and Users.

ACCEPTANCE OF TERMS OF USE

Shunea - IT Projects SRL reserves the right to modify the terms of use of the EasyReserv.io platform, so the User must carefully read these conditions on each occasion when they intend to use the EasyReserv.io platform, as these may be subject to changes. However, the conditions in place at the time of service acquisition will apply to services already purchased by the User.

These T&C do not exclude the possibility that certain EasyReserv.io services, due to their own characteristics, may also be subject to specific terms of use, which, in any case, can be consulted by the User before purchasing the respective service.

Object

The main function of the platform is to collect and reserve data for goods and services provided by third parties who wish to offer their products or services for sale on our platform ('Partners').

Depending on the development and evolution of the Platform's services, EasyReserv.io may expand or modify these same services, including adding new ones or replacing services, activities, or content.

We have established the conditions for your access to our platform and all the products or services offered therein. These conditions include the terms and conditions governing:

• Your right to use our platform and connect to it (these are the 'Platform Usage Terms').
• Our general booking conditions for third-party products and services offered by us on the platform (our 'General Booking Conditions'), and your obligations to submit reviews or other contributions and content created by you on our platform (User-Generated Content, also known as 'Reviews' or 'Comments').

These conditions are collectively or individually referred to as 'Our Terms and Policies.'

In case of a conflict between the specific terms and conditions and these Terms and Policies, the specific terms will prevail to the extent necessary to resolve the conflict.

We may periodically modify Our Terms and Policies, in which case the updated versions will be published on the Site and the mobile application. It will be your responsibility to periodically check Our Terms and Policies to ensure that the changes are satisfactory. It will be assumed that you have accepted the changes to Our Terms and Policies if, once you find them under 'Terms of Use' and 'Privacy Policy' communicated on the start page of our platform, you continue to access or use the platform.

USE OF THE PLATFORM

These Platform Usage Terms govern the methods of use. By accessing the platform, you commit to complying with these Usage Terms. The platform usage terms apply regardless of the methods of accessing the platform, including but not limited to the internet, digital television, and mobile phones.

If you do not accept the Platform Usage Terms, you will not be able to use them. Before using the platform, you must read all the Usage Terms.

ACCESS TO THE EASYRESERV.IO PLATFORM

Access to the EasyReserv.io platform is free, with a limited set of features, to encourage all capabilities, which can be extended through available subscriptions. The cost of the connection made through the telecommunications services provided by the telephone and internet network provider chosen by the User is not included in the platform costs.

Access to the platform may be temporary. We reserve the right to close or modify our platform without notice (as well as withdraw or modify all products and services offered in it). We cannot be held responsible for the unavailability of our platform or any part of it at any time or for any period, regardless of the reason.

We periodically update the platform, the content of which can change at any time without notice. We reserve the right to close, modify, or suspend the platform (or any part of it) at any time and without notice.

The materials and information published on the platform should not be interpreted as recommendations or considered as such, based on them. Therefore, to the extent permitted by applicable laws, we disclaim any liability arising from any use of this information.

It is your responsibility to prepare what is necessary to access the platform and view it, as well as to ensure that you have installed up-to-date antivirus software on all devices used to access the platform.

Your responsibility is to ensure that anyone using your internet connection to access the platform is familiar with the Usage Terms.

IMPROPER USE OF THE EASYRESERV.IO PLATFORM

You cannot use the platform improperly by:

• Intentionally introducing viruses, trojans, computer errors, logic bombs, time bombs, keystroke loggers, spyware, software containing advertisements or other elements, programs, or codes that affect the operation of the software; and/or
• Obtaining or attempting to obtain unauthorized access to the server hosting the EasyReserv.io platform, or any other server, computer, or database connected to the EasyReserv.io platform.
• Disrupting the platform's service with isolated cyberattacks or simultaneous attacks from multiple sources.

Violation of this clause could be the basis for any type of liability, including criminal liability under the provisions of Chapter XI of the Penal Code of the Republic of Moldova, dated April 18, 2002. We will report such violations to the competent judicial authorities and cooperate with them by providing your identity. If you commit such violations, you will immediately lose the right to use our platform.

If a User creates accounts in violation of what has been established (registered using false or third-party data, created multiple accounts by falsifying their identity, created accounts for third parties, etc.), EasyReserv.io reserves the right to:

• Suspend the provision of any service purchased by the User, without the right to a refund of the amounts paid for its acquisition.
• Cancel the aforementioned accounts, canceling any credits that may have accumulated in them
• Prohibit the creation of new accounts for the User mentioned above and/or prohibit or cancel access to the EasyReserv.io platform.
• And, in any case, attribute to the User the damages and losses caused to EasyReserv.io as a result of the fraudulent use of the EasyReserv.io platform.

We reserve the right to revoke platform registrations and/or cancel all or part of the Members' rights. We disclaim any responsibility for losses or damages caused by a Member's inability to access the platform pages.

We also have the right to deactivate all user identification codes and passwords at any time, whether chosen by you or assigned by us, if, in our reasonable opinion, you have not complied with the provisions of any of the 'Privacy Policy.'

If you know or suspect that the user identification code or password to access your member profile is known to others, you must notify us immediately at the email address easyreserv@ishunea.io.

The User acknowledges and accepts that the use of services offered on the EasyReserv.io platform is entirely their responsibility and/or risk. Anyone using the 'EasyReserv.io' platform does so on their own behalf and at their own risk, with EasyReserv.io not being responsible for any errors or omissions in the content of the EasyReserv.io platform or others that can be accessed through it. Also, EasyReserv.io cannot be held responsible for any damage resulting from the use of the EasyReserv.io platform and for any actions based on the information contained therein.

By purchasing a service published on the EasyReserv.io platform, the User undertakes to comply with all the requirements that the Platform establishes as necessary for the correct provision of the service. Otherwise, the Platform may, based on its decision, not provide the service, without refunding the amount to the User.

The User undertakes not to take any action that could damage the reputation of EasyReserv.io or third parties. The User indemnifies EasyReserv.io for any liability in case they cancel or suspend their User account due to violations of the T&C provisions and, in particular, if the User does not pay the service price or uses fraudulent accounts, proven or suspected.

The User is solely and exclusively responsible for using the EasyReserv.io platform and its content, and EasyReserv.io cannot be held responsible for any use of the EasyReserv.io platform contrary to applicable law. In case of illegal activities or violations of these T&C, EasyReserv.io reserves the right to prohibit the User from accessing the EasyReserv.io platform without the need for notification.

The User is aware that if they do not show up at the established time and cause material damage to the Entity, they will be charged the full amount for the predetermined services, and the charged amount will be used as compensation for the time and services dedicated to the User.

PUBLISHING REVIEWS AND COMMENTS

If and where the platform's functionality allows, the User, once the service has been provided, can publish comments or reviews of the services offered by the Platform, always reporting the truth of the facts, expressing themselves with grammatical correctness, and using language without offensive or inappropriate modes of speaking.

EasyReserv.io may delete any content or suspend the service if it believes, at its sole discretion, that the User is in violation of any of the rules and obligations described in the T&C or if it can be considered inadequate and/or false in the opinion of EasyReserv.io.

All published reviews will be attributed to the Member's name provided by them, but their email address will not be published on the Platform.

We reserve the right to refuse the publication of UGCs that do not comply with our Policy or to cancel those already published without notice. We disclaim any responsibility for the losses or damages caused by the decision to refuse the publication of UGC or to delete those already published.

We also reserve the right to close Subscriber accounts and/or to refuse certain users the ability to post their UGCs on the platform in the event of repeated and/or serious violations of the User-Generated Content Policy.

User opinions, including those expressed in UGCs published by platform Subscribers or other members of the public, belong to those who publish them and not to EasyReserv.io, which disclaims any responsibility for the content.

However, if you believe that a user's content published on the platform is in any way offensive, obscene, defamatory, racist, harmful, incorrect, illegal, illicit, or misleading, please inform us at the email address easyreserv@ishunea.io, specifying 'Defamatory Comments' in the subject. Upon receiving the complaint, we may delete the UGC that caused it or block access to it.

PAYMENTS AND SUBSCRIPTIONS

Currently, EasyReserv.io only charges payments for subscriptions offered exclusively to Partners. The list of subscriptions can be found by accessing the link https://easyreserv.io/pricing.

Terms regarding the purchase and use of subscriptions:

• Subscriptions are offered for a specified limited period stated in the subscription.
• The payment made cannot be refunded after the purchase of the subscription.
• The User has the option to migrate from one subscription to another by paying only the price difference.
• Payments are processed through credit or debit cards using the payment processor MICB.
• Data such as the full card number, expiration date, and CVC are not stored by the EasyReserv.io platform.
• Subscriptions themselves include recurring payments, which means that when the subscription expires, the EasyReserv.io platform will attempt to charge for the next period.
• Payments are processed in Euros (EUR) based on the conversion rate set by the bank.
• The User has the option to stop recurring payments from the platform at least one month before the subscription expires.
• In case of insufficient financial sources in the account, the User's subscription will automatically switch to the free version after a 7-day grace period.
• Each subscription includes a set of features or services offered or provided by the EasyReserv.io Platform/Team.

INTELLECTUAL PROPERTY OF EASYRESERV.IO

The content of the EasyReserv.io platform, including designs, applications, texts, images, and source code (collectively referred to as 'Content'), is protected by EasyReserv.io's intellectual property and industrial rights. Shunea - IT Projects SRL is the owner of EasyReserv.io's intellectual property and industrial rights and the content, or it has obtained the necessary authorizations or licenses for its use and/or utilization.

It is also the owner of the EasyReserv.io platform's domain name, trademarks, distinguishing marks, reservation management tool, information, and other works and inventions related to the EasyReserv.io platform, as well as the associated technology.

In no way can the Content be used, reproduced, copied, or transmitted in any form without the prior written and explicit permission of EasyReserv.io.

The User declares that they have all the authorizations and licenses for the comments, images, distinguishing marks, and content they may include and/or publish, thereby exempting EasyReserv.io from any related liability.

Additionally, the User grants EasyReserv.io a license to use it exclusively for the publication and moderation of their comments.

The User and, in general, any individual or legal entity that wishes to create a hyperlink or other links (e.g., links or widgets) ('hyperlink') must obtain prior written authorization from EasyReserv.io.

The creation of a hyperlink does not imply the existence of any relationship between EasyReserv.io and the owner of the platform with a hyperlink or widget, nor the acceptance or approval by EasyReserv.io of its content or services.

In any case, EasyReserv.io reserves the right to prevent or render useless any hyperlink or widget to the EasyReserv.io platform, especially in the case of illegal activity and its content.

The EasyReserv.io platform may provide the User with hyperlinks or other connecting devices (e.g., links or buttons) that allow the User to access websites or internet portals belonging to or managed by third parties ('Linked Sites') for the exclusive purpose of researching and accessing information, content, and services available on the internet.

The EasyReserv.io platform neither offers nor markets the information, content, and services available on the Linked Sites for itself or through third parties, nor does it approve, supervise, or control the content and services in any way, nor any material of any nature that may exist therein. Therefore, the User is solely responsible for navigating through them.

You will be able to access, view, and print a copy of this platform and all the information, images, and other content (except UGC) published on the platform ('Materials'), strictly in compliance with these Platform Terms of Use.

The platform and Materials can be viewed, printed, used, cited, and quoted for personal and non-commercial use, with proper acknowledgment to EasyReserv.io.

None of the aforementioned licenses will affect or limit the moral rights of the author over the Materials.

We explicitly reserve all intellectual property rights on the platform and materials, the use of which is subject to the limitations described below. You will not be able to:

• Remove any copyright notices or other proprietary rights contained in the Materials; and/or
• Use the Materials of the platform in violation of any copyright, intellectual property rights of EasyReserv.io, or any of our or any third party's property rights; and/or
• Use or instruct others to use any automatic system or software to extract content or data from this platform (so-called 'screen scraping,' meaning systematic data search and extraction), unless you or authorized third parties have a direct licensing agreement stipulating that we explicitly allow such activity; and/or
• Reproduce, modify, exhibit, realize, publish, distribute, transmit, exploit with framing techniques (or create other media for browsing or outlining for this purpose), as well as communicate to the public or disclose to third parties or exploit this Site and/or Materials for any commercial purpose, without our prior written permission granted under a licensing agreement.

TRADEMARK NAMES

We explicitly reserve all rights to and to the domain name https://easyreserv.io and all the domains and subdomains associated with it, the name EasyReserv.io, our logo, our service marks, trade names, and/or trademarks. Other trademarks, products, and company names appearing on the platform may belong to their respective owners and licensors, who remain the exclusive owners of related rights.

LINKS TO THE EASYRESERV.IO PLATFORM

You will be able to create links to any page of our platform for non-commercial purposes, as long as it is done correctly, legally, and does not harm our reputation or confer an undue advantage in your favor. For greater clarity, the linked platform must not contain adult content or materials that are illegal, offensive, harassing, or inadmissible in any way.

Links to our site that imply any form of association, approval, or support from us will not be permitted where they do not exist. The use of framing or other techniques to remove or hide advertisements, copyright notices, or other information published on the site will not be allowed.

The submission of our platform to other sites using framing techniques or the creation of other media for browsing or outlining will not be allowed.

If you wish to link to our platform for commercial purposes or for reasons not mentioned above, or if you wish to become our partner, please write to easyreserv@ishunea.io.

We reserve the right to withdraw consent for hyperlinks at any time and without notification.

CONFIDENTIALITY, USER PERSONAL DATA, AND COOKIES

The confidentiality of your personal data is important to us. Please refer to our Privacy and Cookie Policy for further clarifications on the methods of processing your personal data that may be communicated to us, as well as the use of cookies.

THIRD-PARTY CONTENT

The EasyReserv.io platform may contain advertisements from third parties. These third parties will be solely responsible for the content of the advertisements and it will be their responsibility to ensure that the advertisements comply with applicable laws and regulations. We do not assume responsibility for the content of advertisements posted by third parties.

Our platform and/or Materials may contain links to external platforms (including those of our Partners). You may choose at your own risk to visit an external site. We are not responsible, directly or indirectly, for the content, accuracy, or opinions expressed on such sites, nor for the quality of goods or services offered on them. Unless explicitly stated otherwise, the links do not imply any affiliation or association between us or our platform and such sites.

Our communications to you may contain information from external sites. Materials from external sites will be identified as such, and a link to the source site may be provided. We disclaim any responsibility for the elements contained in external sites or arising from them through links included in our communications to you, nor for any use that such third parties may make of personal data.

The inclusion of an outgoing link from our platform in our communications to you does not imply our approval of the target platform. You may choose at your own risk to use links to visit external websites.

Please note that by using an outgoing link from our platform to visit another site, our Terms and Policies (including the Privacy and Cookie Policy) will no longer apply. Your navigation and interactions with other web platforms, including those related to ours, are subject to the different terms and policies of those websites. Before visiting such sites, please inform yourself about their terms and policies.

OUR RESPONSIBILITY

To the maximum extent permitted by law, we exclude and disclaim all warranties, terms, conditions, and representations to which the law may subject our platform. In particular, we do not claim and do not guarantee that the platform is free of errors and immune to viruses or other harmful elements, nor that defects will be corrected. In this regard, you will need to take your own precautions. In any case, we will not be responsible for service interruptions caused by simultaneous cyber attacks from multiple sources, or by viruses or other technologically harmful elements that could infect your equipment and computer programs, data, or other materials owned by you following your use of our platform.

We disclaim any responsibility for the lack of maintenance of our platform and/or for the delay or non-delivery of Materials.

According to these Platform Terms of Use, we will not be liable for indirect, special, incidental, consequential, or other types of damages, even if we have been informed of the possibility of incurring them.

Materials may contain inaccuracies and typographical errors, and we do not guarantee their accuracy or completeness.

We disclaim any responsibility for losses caused by actions or omissions by you in connection with the Materials on this platform. However, none of the Platform Terms of Use can affect your rights recognized by law or exclude our liability in the following cases: wrongful death or injury; fraudulent misrepresentation; and/or any other liability that we cannot exclude or limit according to the legislation of the Republic of Moldova.

TERRITORIAL COVERAGE

The platform is intended for use worldwide.

LEGAL COMPLIANCE AND APPLICABLE LAWS

The courts in Chișinău shall have exclusive jurisdiction over complaints arising from visits to the platform or related to them. These general terms will be governed by the laws of the Republic of Moldova.

CONTACT

For any inquiries or questions regarding materials published on our platform or its Terms of Use, please write to the following email address: easyreserv@ishunea.io.

GENERAL RESERVATION TERMS

Services that can be purchased or booked through EasyReserv.io are marketed by our partners, not by us. We are solely responsible for organizing your reservations and/or appointments and (in some cases) handling the associated payments.

While we are not responsible for the services provided by our partners, please report any issues or inadequate performance during your exercises. In these cases, we will do our best to assist you.

Before making a reservation, please carefully review the services offered and any limitations.

Before making a reservation or appointment, please ensure that you have communicated all health-related information, such as allergies or other conditions, to our partners.

If you wish to modify a reservation that has already been made, please contact the respective company directly.

If you wish to get in touch with us, you can contact our team at the following address:
Email: easyreserv@ishunea.io

Platform: EasyReserv.io provides access to a wide range of services within the registered Entities on the platform, such as beauty treatments, products and/or services available at various spas and salons, restaurants with different types of cuisines, medical services, entertainment, barbershops, catering services, event organizing services, photo and video services, and others that will be added to the platform over time. Such products and/or services are provided by Salons/Restaurants/Medical Clinics/Catering Companies/Event Organizing Companies/Partners, not by EasyReserv.io. EasyReserv.io provides booking and appointment collection services and temporarily transmits them to the relevant partners for service provision. Services reserved through our platform are the responsibility of the partners who provide them.

Legally, this separation of responsibilities means that when you purchase a Product or Service, two legally binding contracts are created:

• The First is a contract between you and EasyReserv.io, in which EasyReserv.io assumes certain obligations related to your reservation and/or appointment and payment. This contract is governed by these general reservation terms.
• The second is a contract between you and the Partner, whose purpose is the delivery or provision of the Products or Services you have reserved through the platform. This contract may also include additional general partner terms, which will be communicated to you before finalizing the reservation on the dedicated platform.

All services that can be viewed or reserved through the platform are offered by EasyReserv.io on behalf of its partners. In other words, EasyReserv.io acts as a reservation agent on behalf of its partners. Therefore, we will have no responsibility or obligation to you for the Products or Services reserved through the platform.

We periodically modify the general reservation terms as provided in the previous sections. Before conducting a transaction on the platform, you are required to check the general reservation terms to ensure you understand the current terms.

RESERVATIONS AND/OR APPOINTMENTS AND CONTRACTS BETWEEN USERS AND EASYRESERV.IO

To make a reservation or appointment on the EasyReserv.io platform, the user must register on the EasyReserv.io platform by completing the questionnaire and accepting the relevant terms and conditions and privacy policy. Please take sufficient time to read and review your reservation at each completion stage and before the final submission.

After each reservation and/or appointment has been submitted, you will receive a confirmation of receipt from EasyReserv.io, but this does not confirm that the reservation and/or appointment has been accepted. Reservations and/or appointments are expressions of your intent to reserve and/or schedule a visit to an Entity. Reservations and/or appointments are subject to acceptance, and the contract between you and the Beneficiaries (Entities) ('Agreement') is concluded at the time of the reservation and/or appointment dispatch. If you wish to change the features (time or date) of the reservation and/or appointment, we recommend that you contact the Entity directly to agree on the new schedule or simply cancel the existing appointment and make a new one with the desired time.

If you intend to cancel the reservation, you have the option to do so directly on the platform, and you will need to indicate the reason for cancellation.

PRODUCTS AND SERVICES

EasyReserv.io and the Beneficiaries are legally obliged to provide Products or Services corresponding to those described in the relevant Agreement.

All Products or Services listed on the application are provided only if available. The Products or Services actually provided may differ from the images and/or descriptions displayed on the application, which are purely indicative.

We ask Beneficiaries to verify the accuracy, completeness, and truthfulness of all information (which we cannot control) sent to us for publication on their pages on our platform. It will be up to each partner to verify the availability and accurate description of all its Products or Services offered on the application.

It will be your sole responsibility (or the recipients of Products or Services) to pre-notify the Beneficiary of your medical or health conditions and/or special needs that could jeopardize the use of Products or Services or be affected by them (mentioning only allergies or health problems). If you (or the respective recipients of Products or Services) do not disclose this information to the relevant Partners/Beneficiaries, neither EasyReserv.io nor the Partners/Beneficiaries will be liable to you (or to the respective recipients of the Products or Services) for injuries, losses, or damages that, although caused by Products or Services, could have been reasonably avoided if you (or the respective recipients of the Products or Services) had disclosed the above information before receiving the Products or Services.

CANCELLATION OF RESERVATIONS AND/OR APPOINTMENTS

The cancellation of a reservation can be done directly on the platform without incurring any refund costs.

DISPUTE RESOLUTION

Your satisfaction is important to us, and we want to ensure that we provide you with the best possible service. If you wish to make a complaint about one of our Beneficiaries or their products or services, please write to the email address easyreserv@ishunea.io. Upon receiving the complaint, we will contact the Beneficiary to try to resolve the issue on your behalf.

In addition (or alternatively), if you are dissatisfied with the Products or Services provided by a Beneficiary in connection with a Reservation and/or Appointment, you can:

• try to resolve the issue by contacting the Beneficiary directly; and/or
• post a review on the platform in which you will accurately describe your experience.

Please note that we attach great importance to all complaints about our Beneficiaries, and we will do our best to help you resolve them. However, we are not responsible to you for the Products or Services provided by Beneficiaries.

RESPONSABILITY

All information published on the EasyReserv.io platform (e.g., service description, Beneficiary's area, availability, staff performing services, price) has been provided by the Platform.

EasyReserv.io is limited to publishing the Platform's services and their availability to facilitate reservations and/or appointments and, in the case of the Platform, purchases and payments, acting as a mere intermediary service of EasyReserv.io.

All services published on the EasyReserv.io platform are created and carried out by the Platform. Therefore, EasyReserv.io is not responsible for the expectations created, the results of the service, its quality, or the Platform's deviations.

In the event of our fault and/or breaches of our contractual obligations to you, we will be liable for the damages and losses suffered by you for these reasons, provided they are foreseeable. Losses and damages are foreseeable events that are natural consequences of our negligence or breach of contract, or that both you and we considered probable consequences of such a breach of the contract or negligence at the time of the Agreement's conclusion.

We do not accept any responsibility for the following types of losses that arise regardless of contractual breaches, civil liability (including negligence), or other causes, even if the loss was foreseeable: loss of income or revenue; lost business; loss of profit; loss of anticipated savings; loss of data; or time lost for managers and employees.

We do not exclude or limit our liability for death or personal injury caused by us through negligence, intentional misconduct, or as a result of deliberate misrepresentations or for any other liability that cannot be excluded or limited according to applicable law.

OUR RIGHT TO MODIFY RESERVATION TERMS

We may modify the general reservation terms from time to time under the following circumstances:

• our changes to your payment acceptance procedures;
• changes in relevant legal and regulatory obligations;
• other changes in our business activities that reasonably require us to change the general reservation terms.

Whenever we modify these general reservation terms according to these conditions, we will inform you and notify you of the modified general reservation terms, indicating the effective date at the top of this page.

GENERAL PROVISIONS

All communications and notifications should be addressed to the following email address: easyreserv@ishunea.io. EasyReserv.io may send its communications and notifications by email or by publishing them on the platform.

If a term of these general reservation terms is considered invalid, illegal, or for any reason unenforceable by a competent authority, that term, condition, or provision will be separated from the other terms, conditions, and clauses, which will remain valid to the fullest extent permitted by law.

FORCE MAJEURE

Force majeure (unforeseeable, uncontrollable, and inevitable event affecting the performance of the contract) exempts the party invoking it from liability.

Non-performance of an obligation is justified if it is due to an impediment beyond the debtor's control and if it could not reasonably have been expected to avoid or overcome the impediment or its consequences.

DISPUTE RESOLUTION AND APPLICABLE LAW

The contractual relations between the parties are governed by the current legislation of the Republic of Moldova. Any dispute that cannot be resolved amicably by the parties will be submitted for resolution to the competent courts of the Republic of Moldova.

List of all qualified domains according to these Terms and Conditions:

• https://easyreserv.io
• https://app.easyreserv.io/login
• and all affiliated subdomains.

October 18, 2023`
  }
];

export const PoliciesSection = (): JSX.Element => {
  const [activePolicy, setActivePolicy] = React.useState("#privacy-policy");

  React.useEffect(() => {
    const hash = window.location.hash || "#privacy-policy";
    setActivePolicy(hash);
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#privacy-policy";
      setActivePolicy(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePolicyClick = (anchor: string) => {
    window.location.hash = anchor;
  };

  const currentPolicy = policies.find((p) => `#${p.id}` === activePolicy) || policies[0];

  return (
    <section className="flex flex-col lg:flex-row items-start gap-[35px] px-4 md:px-[10%] py-[100px]">
      <Card className="w-full lg:w-[403px] bg-white rounded-[30px] shadow-[0px_2px_15px_#63636333] lg:sticky lg:top-24">
        <CardContent className="p-[29px]">
          <div className="flex flex-col gap-[54px]">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#282828] text-[40px] tracking-[0] leading-[44px]">
              Policies
            </h2>

            <nav className="flex flex-col gap-2">
              {policyItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => handlePolicyClick(item.anchor)}
                  className={`h-auto w-full justify-center p-2.5 rounded-[15px] transition-colors ${
                    activePolicy === item.anchor
                      ? "bg-[linear-gradient(40deg,rgba(254,152,0,0.1)_0%,rgba(254,187,1,0.1)_100%)]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-base tracking-[0] leading-[22px] px-0 py-[5px]">
                    {item.label}
                  </span>
                </Button>
              ))}
            </nav>
          </div>
        </CardContent>
      </Card>

      <main className="flex flex-col w-full lg:w-[842px]">
        <h1 className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-[56px] text-center tracking-[0] leading-[67.2px] mb-8">
          {currentPolicy.title}
        </h1>

        <div className="flex flex-col gap-6 bg-brandsnowy p-6 md:p-10 rounded-lg">
          <p className="[font-family:'Inter',Helvetica] font-normal text-brandcharcoal text-lg tracking-[0] leading-[31.5px] whitespace-pre-line">
            {currentPolicy.content}
          </p>
        </div>
      </main>
    </section>
  );
};
