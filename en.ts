import type { LegalTexts } from './types';

/**
 * Translation of the Serbian text (sr.ts), same status: needs a lawyer's
 * reading. The first section of each document says the Serbian version prevails.
 */
const PREVAILS =
  'This is a translation for convenience. If it differs from the Serbian version, the Serbian version applies.';

export const legalEn: LegalTexts = {
  privacy: {
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    operatorLabel: 'Data controller',
    contactLabel: 'Contact',
    notSet: 'to be published before launch',
    sections: [
      {
        heading: '1. What this is',
        paragraphs: [
          'Plan na dlanu is an app for planning visits and errands: you explore places around you, add them to a plan, get a reminder, open navigation and see where and how you can park. Plans and personal tasks are kept on your phone, and with an account also on the server.',
          'This policy explains which personal data we process, why, where it is stored and what your rights are. The Serbian Law on Personal Data Protection applies, and for users in Bosnia and Herzegovina also the Law on Personal Data Protection of Bosnia and Herzegovina (section 13).',
          'The data controller is the individual named at the top of this page. We can be reached by email only, at the contact address at the top.',
          PREVAILS,
        ],
      },
      {
        heading: '2. In short',
        paragraphs: [
          'We do not sell data, show ads, use analytics or tracking services, or build a profile of you on the server. Day and time suggestions are computed only on your phone.',
          'Your position is never written down anywhere: it is used only while the app is open.',
          'If you use the app as a guest, everything you enter stays only on your phone. If you sign in, your account, plans, personal tasks, checklists, “done” marks, favourite places, lists of places with notes and app settings go to the server, so you do not lose them when you change phones or reinstall the app. The licence plate, parking spot, recent searches and habits always stay only on your phone.',
        ],
      },
      {
        heading: '3. What stays only on your phone',
        paragraphs: [
          'The following is never sent to the server, even with an account: the licence plate for the parking SMS, where you parked and the parking ticket you paid by SMS, recent searches, your answers in the personal setup and the habits the app learns from your plans.', 'While you use the app as a guest, all other data (plans, personal tasks, checklists, favourite places, lists of places with notes, settings) also exists only on your phone.',
          'The parking spot is saved only when you tap “Parkirao sam” (I parked) and is deleted when you tap “Krenuo sam” (I’m leaving) or after 12 hours.',
          'Habits (for example, at what time you usually plan) are computed only on your phone from your plans and your setup answers. They are used only to suggest a day and time, are never sent to the server, and are deleted with “Delete data on this phone” or by deleting the app.',
          'This data is deleted when you delete the app or its data in your phone settings. We have no access to it.',
          'The phone also keeps: the places last loaded for an area of about 1 km (at most 30 areas, at most 7 days), so “Nearby” works offline; the estimated travel time to places in your plans, with the starting point rounded to about 100 m (at most 24 hours), so reminders work offline; and which calendar events you have already imported. This is deleted when you sign out, with “Delete data on this phone”, or by deleting the app.',
          'The home-screen widget (Android) shows your next plan: the place name and time. Anyone holding your phone can see them; you can hide the place name in the reminder settings (“Show place name in widget”).',
          'The history of parking tickets (zone, time and the zone’s tariff when the SMS was sent) is kept only on the phone, so the app can show your approximate parking costs per month. It is included in backups you make yourself and is deleted with “Delete data on this phone”.',
        ],
      },
      {
        heading: '4. What is stored on the server',
        paragraphs: [
          'Account: email address and sign-in method. The password is kept only by the sign-in system (Supabase Auth), in protected, hashed form; we cannot see it either. If you sign in with Google or Apple, we receive the email address that service shares with us; with Apple this may be a private relay address created by Apple.',
          'A signed-in user’s data: plans (place, date, time, repeat, a short note, reminder setting, travel mode and the parking you choose for the plan, which is a public car park from the map, not your position), personal tasks (title, time, repeat, note), checklists attached to plans and what is ticked on them, marks that a plan or task was done on a given day, favourite places, lists of places with notes and app settings (language, sounds, choice of navigation app and reminder settings). They are stored so they survive a change of phone or a reinstall, and stay the same on every phone you sign in on. When you sign in, what you entered as a guest is moved to the account. We keep no movement history and no routes.',
          'Suggestions for missing places (signed-in users only): name, kind of place, the point you choose on the map, a short note and the time sent. Only you and we see them; we use them to check and add the place, and other users do not see them.',
          'Contributions, only if adding content is switched on and you use it: prices you report, price confirmations, tag votes, content reports, users you block, and a record that you accepted the contribution rules (with the date). Your prices are shown to others without your name.',
          'Technical data: our server provider logs technical request data (IP address, time and request type) for security and reliability and keeps it for 1 day. The position used in a search is sent in the request body and is not written to those logs.',
        ],
      },
      {
        heading: '5. Location',
        paragraphs: [
          'The app asks for location only while you are using it. It does not use location in the background and does not ask for the “Always” permission.',
          'We process location to provide the features you use (performance of a contract, i.e. the Terms of Use), and only if you allow access on your phone. Your position centres the map, sorts places by distance, estimates the approximate travel time and checks whether you are in a paid parking zone. To find nearby places the position is sent to the server with the request, but it is never written down or stored. The parking zone check runs on the phone.',
          'For a more accurate travel time, the app sends our routing server the starting point rounded to about 100 m and the place in the plan, and receives only the duration and distance. The server does not write down or keep them. When the server is unavailable, the travel time is estimated on the phone, as before.',
          'You can turn the permission off in your phone settings. The app still works, without sorting by distance from you and without the on-the-spot zone check.',
        ],
      },
      {
        heading: '6. Reminders and calendar',
        paragraphs: [
          'Reminders are local notifications scheduled by your phone. We use no push service and send no notifications from a server. The “Leave in 10 minutes” reminder repeats until you acknowledge it.',
          'Whether a notification appears and makes a sound depends on the notification permission, Do Not Disturb, silent mode and battery saving on your phone. A reminder is therefore not a guarantee.',
          'When you export a plan to a calendar, the app creates an .ics file and you choose the calendar it goes to. That calendar keeps the data under its own rules.',
          'Calendar import: only when you tap “Import from calendar” does the app ask for permission to read the phone’s calendar and show events for the next 7 days. The calendar is read only on the phone, never in the background, and the app writes nothing to it. To find the place, the app sends our server only part of the event’s location or title as a search query, which is not stored. Only the plan you choose goes to the server, and the event title becomes the plan’s note.',
          'Weather forecast: for plans in the next 2 days, the app asks the Norwegian Meteorological Institute (MET Norway), through our server, for the forecast at the place in the plan. Only the place’s point, rounded to about 1 km, is sent, never your position. The forecast is used to suggest leaving earlier or taking transit when it rains; you can turn this off in the reminder settings.',
          'Temperature on the home screen: the app works out on the phone which city or wider area you are in, then asks for the forecast only for that city’s centre (Belgrade, Banja Luka) or for a point on a coarse grid of about 50 km. Your position is not sent.',
        ],
      },
      {
        heading: '7. Parking and SMS',
        paragraphs: [
          'You send the parking SMS yourself from your own SMS app: Plan na dlanu only prepares the message with your plate and the zone number. The message is received by the company that collects parking fees in that city and charged by your mobile operator. Both process it under their own rules, as separate controllers; we cannot see whether the SMS was sent or delivered.',
        ],
      },
      {
        heading: '8. Backup and “Report a problem”',
        paragraphs: [
          'A backup is created and shared by your phone, to a place you choose (for example email or a cloud drive). We do not receive it.',
          'Sharing your arrival, a day’s plan or a list of places creates a plain message that you send yourself from the app you choose (for example Viber or SMS). It does not go through our server and we do not see it. Notes are not included unless you turn that on.',
          '“Report a problem” opens email or sharing with a prepared text that you see and can change before sending. Only the app version, the phone system (iOS or Android) and, from a place card, the place’s name and id are added. Location, plate and notes are not added. We receive only what you send and use it only to reply and fix the problem.',
        ],
      },
      {
        heading: '9. Legal basis',
        paragraphs: [
          'Performance of a contract (the Terms of Use): your account and the data saved to it (plans, tasks, checklists, favourite places, settings), contributions, and location for features you start yourself (map, nearby places, travel estimate, zone check). The app reads location only if you allow access on your phone; you can withdraw it at any time, and these features are then not used.',
          'Legitimate interest: server technical logs and abuse protection, for the security of the app and its users; answering email you send us. Notifications are scheduled by your phone, with the permission you give in its settings.',
        ],
      },
      {
        heading: '10. Who else processes data, and where',
        paragraphs: [
          'Server and database: Supabase, as our processor, under a data processing agreement. Data is stored in a data centre in Zurich, Switzerland. Switzerland is a party to the Council of Europe Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data, so the transfer relies on Article 64 of the Serbian Law on Personal Data Protection (a country with an adequate level of protection). If Supabase technical support accesses data from another country (for example the USA), that access is limited to maintaining the service and governed by standard contractual clauses in the data processing agreement.',
          'Sign-in: if you choose to sign in with Google or Apple, sign-in goes through that service under its own rules.',
          'Maps: the map is Apple Maps on iPhone and Google Maps on Android. To show the map, the phone downloads map tiles from Apple’s or Google’s servers, which see technical device data and the area shown, under their own privacy rules. Navigation opens in the Apple Maps or Google Maps app.',
          'Weather forecast: MET Norway (Norway). It receives only an approximate point of the place in the plan, with nothing about you; the request goes through our server, so it does not see your IP address either. Weather data source: MET Norway (Norwegian Meteorological Institute), licensed under CC BY 4.0 (creativecommons.org/licenses/by/4.0). The source is also shown on plan and reminder cards (“Weather: MET Norway”). We show the data as a short forecast and a departure suggestion; we do not alter it, other than rounding and summarising it.',
          'Routes: travel time is computed by our own routing server (OSRM, on OpenStreetMap data), on a computer under our control. Requests are sent to it by our server, not by your phone, so the routing server does not see your IP address. The connection from our server to that computer runs through the Tailscale Funnel service (Tailscale Inc.); it is encrypted all the way to that computer, so Tailscale’s relay servers cannot read the content of the requests. Only the rounded starting point and the place in the plan are sent, and they are not stored.',
          'Place data comes from OpenStreetMap (© OpenStreetMap contributors, ODbL licence) and from price lists published by businesses.',
        ],
      },
      {
        heading: '11. How long we keep data',
        paragraphs: [
          'We keep the account and the data saved to it until you delete your account. You can delete it in the app (in Account, choose “Delete account”) or without the app, as described on the “Deleting your account and data” page. Deletion removes the account, plans, personal tasks, checklists, “done” marks, favourite places, lists of places with notes, settings, place suggestions, tag votes, your content reports, blocks and the rules-acceptance record.',
          'Prices you reported stay in the database with no link to you (anonymously), because they form the shared price data.',
          'Retention: server technical logs 1 day; support emails and problem reports up to 12 months after the last message; the rules-acceptance record while the account exists. Longer only where needed to establish, exercise or defend a legal claim. Automatic database backups are not made at present; if we introduce them they will be kept for at most 7 days, so deleted data disappears from them within that time. We do not store your phone’s position at all.',
        ],
      },
      {
        heading: '12. Your rights',
        paragraphs: [
          'You may request access to your data, correction, deletion, restriction of processing and data portability, object to processing and withdraw a permission. You can delete your account yourself in the app; for anything else write to the contact address, preferably from your account’s email. If we cannot confirm that a request comes from you, we will ask for additional confirmation.',
          'We reply without delay and within 30 days at the latest. In complex cases the period may be extended as the law allows, and we will tell you so within the first 30 days. If we cannot fulfil a request, we will explain why and tell you where you can turn.',
          'If you believe processing is unlawful, you may complain to the Commissioner for Information of Public Importance and Personal Data Protection (www.poverenik.rs).',
        ],
      },
      {
        heading: '13. Users in Bosnia and Herzegovina and Switzerland',
        paragraphs: [
          'For users in Bosnia and Herzegovina the Law on Personal Data Protection of Bosnia and Herzegovina also applies. You have the same rights as in section 12, and you may also complain to the Personal Data Protection Agency in Bosnia and Herzegovina (www.azlp.ba).',
          'Prices and tariffs in Bosnia and Herzegovina are shown in convertible marks (KM).',
          'For users in Switzerland the Swiss Federal Act on Data Protection (FADP) also applies; you may also complain to the Federal Data Protection and Information Commissioner (www.edoeb.admin.ch).',
        ],
      },
      {
        heading: '14. Children',
        paragraphs: [
          'Under the terms of use, the app is meant for people aged 16 and over. We do not knowingly create accounts for younger people; if we learn that an account was created by someone younger, we will delete it.',
        ],
      },
      {
        heading: '15. Changes',
        paragraphs: [
          'If we change this policy we will publish the new version in the app and on the web page, with a new date, and tell you in the app about important changes.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    updatedLabel: 'Last updated',
    operatorLabel: 'Service provider',
    contactLabel: 'Contact',
    notSet: 'to be published before launch',
    sections: [
      {
        heading: '1. Acceptance',
        paragraphs: [
          'By using Plan na dlanu you accept these terms. If you do not agree, do not use the app. The app is free. The service is provided by the individual named at the top of this page.',
          PREVAILS,
        ],
      },
      {
        heading: '2. What the app does',
        paragraphs: [
          'Plan na dlanu helps you explore places around you, plan them, get a reminder, open navigation and see parking nearby. Prices and tariffs are shown in the place’s currency, for example Serbian dinars (RSD) in Serbia and convertible marks (KM) in Bosnia and Herzegovina. Place and parking data does not exist for every area.',
          'Place data comes from OpenStreetMap and from published price lists, so it may be incomplete or out of date. Check opening hours, prices, addresses, parking and paid zones on the spot or with the business. Travel time is an approximate estimate.',
          'Reminders are an aid, not a guarantee: they depend on your phone’s settings and state. Do not rely on them for urgent matters, medication or safety-critical obligations.',
        ],
      },
      {
        heading: '3. What the app does not do',
        paragraphs: [
          'The app does not book appointments, take payments, or have any connection with or represent the businesses shown. A plan is your own note about a visit; you arrange any appointment with the business yourself, and you can call it from the app.',
        ],
      },
      {
        heading: '4. Guest and account',
        paragraphs: [
          'You can use the app as a guest with no time limit. Your plans then exist only on your phone and are lost if you delete the app or change phones, unless you make a backup.',
          'With an account, plans, personal tasks, checklists, favourite places and settings are also stored on the server, so they survive a change of phone or a reinstall. When you sign in, what you entered as a guest is moved to the account. You are responsible for the accuracy of your details and for keeping your password safe. One account is for one person. You can delete your account at any time in the app (in Account, choose “Delete account”).',
        ],
      },
      {
        heading: '5. Parking and SMS',
        paragraphs: [
          'Paying for parking is your responsibility. The app does not send an SMS for you, cannot see whether the SMS arrived, and does not guarantee that the zone, tariff or maximum stay shown match reality. Always check the road sign and the instructions on the spot.',
          'Your mobile operator charges for the SMS. Short numbers for parking payment usually work only with a SIM card from that country; with a foreign SIM, pay another way. The ticket expiry reminder is the app’s approximate calculation, not a confirmation from the parking company.',
        ],
      },
      {
        heading: '6. Adding content',
        paragraphs: [
          'Adding prices, confirmations and tags may be switched off. When it is on, we will ask you to accept these rules before your first entry.',
          'Add only prices you really paid or saw on a price list, and tags that really apply to the place.',
          'False, joke and advertising entries, insults, threats, hate speech, other people’s personal data and anything unlawful are forbidden. We have zero tolerance for objectionable and unlawful content: we remove it and exclude the account that adds it.',
          'Free-text comments, ratings and photos are not available.',
        ],
      },
      {
        heading: '7. Reports, blocking and moderation',
        paragraphs: [
          'When adding content is on, you can report any entry and block any user directly in the app. We first review every report within 24 hours; content that clearly breaks the rules is removed at once, and other cases are resolved as soon as possible. We may remove an entry, or restrict or permanently exclude an account that repeatedly breaks the rules.',
          'You can tell us about an error in a place’s data through “Report a problem”. If you think some data is wrong or harms your business, write to the contact address; we will consider a correction or removal request and allow the business to respond.',
        ],
      },
      {
        heading: '8. Licence to your content',
        paragraphs: [
          'Content you add remains yours. You give us a non-exclusive, free licence to use it only to run, maintain and develop the app: to show it to others (without your name) and to compute averages and statistics. After your account is deleted we keep only data that can no longer be linked to you (for example a price amount, the place and the date, with no identifier). This licence is not a basis for processing your personal data; that is covered by the Privacy Policy.',
        ],
      },
      {
        heading: '9. Acceptable use',
        paragraphs: [
          'Use the app only for personal planning. Automated downloading of data from the app or the server, disrupting the server, circumventing protection, and using the app to send unsolicited messages are forbidden.',
        ],
      },
      {
        heading: '10. Third-party content and services',
        paragraphs: [
          'Maps, navigation, sign-in with Google or Apple, and third-party data (Apple, Google, OpenStreetMap) are subject to those services’ terms. OpenStreetMap data: © OpenStreetMap contributors, ODbL licence.',
        ],
      },
      {
        heading: '11. Liability',
        paragraphs: [
          'The app is free and we work to keep it reliable. Data about places, opening hours, prices and parking comes from third parties (OpenStreetMap, published price lists, city companies), so to the extent the law allows we are not liable for loss caused by inaccuracies in that data, by a parking fine, by a reminder the phone did not show, or by temporary technical unavailability.',
          'This does not limit our liability for damage caused intentionally or by gross negligence, nor the rights mandatory rules give you as a consumer.',
        ],
      },
      {
        heading: '12. Changes and termination',
        paragraphs: [
          'We may improve and change the app. We change these terms when the service or the law changes. We will tell you in the app about changes that affect your rights, data processing or liability at least 15 days before they take effect, with the date they take effect; where needed we will ask you to accept them explicitly. If you do not agree, you can stop using the app and delete your account before that date. Minor changes (corrections, clarifications) apply from publication.',
          'We may close an account that seriously or repeatedly breaks these terms, with the reasons sent to the account’s email. You may stop using the service at any time.',
        ],
      },
      {
        heading: '13. Governing law',
        paragraphs: [
          'The law of the Republic of Serbia applies. The competent court in Belgrade has jurisdiction for disputes, unless mandatory consumer-protection or jurisdiction rules (in Serbia or in the country where you live) provide for another court; those rules then apply. The rights such rules give you as a consumer remain unaffected. Privacy is covered by the Privacy Policy.',
        ],
      },
    ],
  },
  deletion: {
    title: 'Deleting your account and data',
    updatedLabel: 'Last updated',
    operatorLabel: 'Data controller',
    contactLabel: 'Contact',
    notSet: 'to be published before launch',
    sections: [
      {
        heading: '1. In the app',
        paragraphs: [
          'Open Plan na dlanu, tap the account button, then “Delete account”, and confirm. The account and its data on the server are deleted immediately.',
        ],
      },
      {
        heading: '2. Without the app',
        paragraphs: [
          'Send an email to the contact address at the top of this page, from your account’s email address, with the subject “Delete account”. If you signed in with Apple using a hidden address, include that address. We will check that the request comes from the account owner, delete the account within 30 days at the latest and let you know when it is done.',
        ],
      },
      {
        heading: '3. What is deleted and what stays',
        paragraphs: [
          'Deleted: the account (email and sign-in method), and the plans, personal tasks, checklists, “done” marks, favourite places, lists of places with notes and settings saved to it, place suggestions, tag votes, content reports, blocks and the rules-acceptance record.',
          'Kept, with no link to you: prices you reported, because they form the shared price data.',
          'Server technical logs are deleted automatically after 1 day. Automatic database backups are not made at present.',
        ],
      },
      {
        heading: '4. Data only on your phone',
        paragraphs: [
          'The licence plate, parking spot, recent searches and habits, and everything you entered as a guest without signing in, exist only on your phone and were never with us. A copy of your account data also stays on the phone. All of it is deleted when you delete the app or its data in your phone settings. Backups you exported are deleted by you wherever you saved them.',
        ],
      },
    ],
  },
};
