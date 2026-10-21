// All texts and data for the portfolio live in this one file.
// To add a project: copy one object in `projects` and change its fields.
//
// Icelandic (`is`) texts are a first draft and should be checked by a
// native Icelandic speaker before the site is promoted.
//
// Facts here come from the résumé (Viacheslav_Martynovskyi_-_Videographer...docx).
// Lines marked CONFIRM are reasonable readings of the résumé that Slava
// should double-check.

export const locales = ["en", "is"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

type Localized = Record<Locale, string>;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://videographer.vercel.app";

export const person = {
  name: "Viacheslav Martynovskyi",
  email: "martovinfo@gmail.com",
  phoneDisplay: "+354 831 7611",
  phoneHref: "+3548317611",
  city: { en: "Reykjavík, Iceland", is: "Reykjavík, Ísland" } as Localized,
  // Same personal Instagram as on the director site.
  instagram: "https://www.instagram.com/slavamart_ov/",
  // Same approved portrait as on the director site.
  portrait: "/images/viacheslav-portrait.jpg",
  directorSite: "https://martynovskyi-films.vercel.app/director",
  title: {
    en: "Videographer · Video director · Video producer",
    is: "Myndatökumaður · Leikstjóri · Framleiðandi",
  } as Localized,
};

export type ProjectKind = "showreel" | "live";

export type Project = {
  slug: string;
  kind: ProjectKind;
  youtubeId: string;
  title: string;
  event: Localized;
  role: Localized;
  description: Localized;
};

export const projects: Project[] = [
  {
    slug: "showreel",
    kind: "showreel",
    youtubeId: "qCDl_gsKQYQ",
    title: "Showreel",
    event: { en: "Selected work", is: "Úrval verka" },
    role: {
      en: "Camera, directing and editing",
      is: "Myndataka, leikstjórn og klipping",
    }, // CONFIRM
    description: {
      en: "A short selection of my camera and edit work.",
      is: "Stutt úrval af myndatöku og klippingu sem ég hef unnið.",
    },
  },
  {
    slug: "tms-wall-to-wall-2021",
    kind: "live",
    youtubeId: "htjqOdm3Rjg",
    title: "TMS: Wall to Wall 2021",
    event: { en: "Live broadcast, 2021", is: "Bein útsending, 2021" },
    role: {
      en: "Producer and live broadcast director, MyStream Production",
      is: "Framleiðandi og útsendingarstjóri, MyStream Production",
    }, // CONFIRM
    description: {
      en: "Live stream of the event, organised and broadcast by my team at MyStream Production.",
      is: "Bein útsending frá viðburðinum, skipulögð og send út af teyminu mínu hjá MyStream Production.",
    }, // CONFIRM
  },
  {
    slug: "gamma-european-mma-2021",
    kind: "live",
    youtubeId: "Cxy6uig8vGE",
    title: "GAMMA European MMA Championships 2021",
    event: { en: "Live broadcast, 2021", is: "Bein útsending, 2021" },
    role: {
      en: "Producer and live broadcast director, MyStream Production",
      is: "Framleiðandi og útsendingarstjóri, MyStream Production",
    }, // CONFIRM
    description: {
      en: "Live broadcast of the European MMA Championships, one of my largest projects.",
      is: "Bein útsending frá Evrópumeistaramótinu í MMA, eitt af stærstu verkefnum mínum.",
    }, // CONFIRM
  },
  {
    slug: "fiba-ukraine-north-macedonia",
    kind: "live",
    youtubeId: "OQ7tcDZ_kBM",
    title: "Ukraine v North Macedonia",
    event: {
      en: "FIBA Basketball World Cup 2023, European Qualifiers",
      is: "Undankeppni HM í körfubolta 2023 (FIBA), Evrópuriðill",
    },
    role: {
      en: "Producer and live broadcast director, MyStream Production",
      is: "Framleiðandi og útsendingarstjóri, MyStream Production",
    }, // CONFIRM
    description: {
      en: "Live broadcast of an international qualifying match, one of my largest projects.",
      is: "Bein útsending frá alþjóðlegum landsleik í undankeppni, eitt af stærstu verkefnum mínum.",
    },
  },
];

export const experience = [
  {
    company: "MyStream Production",
    place: { en: "Kyiv, Ukraine", is: "Kænugarði, Úkraínu" } as Localized,
    period: { en: "May 2018 – February 2022", is: "Maí 2018 – febrúar 2022" } as Localized,
    role: { en: "Owner", is: "Eigandi" } as Localized,
    points: {
      en: [
        "Live broadcasts on YouTube, Facebook, Instagram and Zoom",
        "Finding clients, writing technical and commercial proposals",
        "Hiring crew and managing the shoot on location",
        "Live broadcast director, sound engineer and videographer",
        "Connecting video, sound and lighting equipment for shoots and streams",
      ],
      is: [
        "Beinar útsendingar á YouTube, Facebook, Instagram og Zoom",
        "Öflun viðskiptavina, tækni- og verðtilboð",
        "Ráðning tökuliðs og stjórnun á tökustað",
        "Útsendingarstjóri, hljóðmaður og myndatökumaður",
        "Uppsetning mynd-, hljóð- og ljósabúnaðar fyrir tökur og útsendingar",
      ],
    },
  },
  {
    company: "Frame Rental",
    place: { en: "Kyiv, Ukraine", is: "Kænugarði, Úkraínu" } as Localized,
    period: {
      en: "September 2017 – March 2018",
      is: "September 2017 – mars 2018",
    } as Localized,
    role: { en: "Technical consultant", is: "Tækniráðgjafi" } as Localized,
    points: {
      en: [
        "Advising clients on video equipment",
        "Choosing the right kit for each job",
        "Preparing equipment for rental",
      ],
      is: [
        "Ráðgjöf til viðskiptavina um myndbandsbúnað",
        "Val á réttum búnaði fyrir hvert verkefni",
        "Undirbúningur búnaðar til leigu",
      ],
    },
  },
];

export const software = [
  "Adobe Premiere Pro",
  "Sony Vegas",
  "Photoshop",
  "Lightroom",
  "vMix",
  "OBS Studio",
  "Restream",
  "Zoom",
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { en: "Ukrainian", is: "Úkraínska" }, level: { en: "Native", is: "Móðurmál" } },
  { name: { en: "Russian", is: "Rússneska" }, level: { en: "Native", is: "Móðurmál" } },
  { name: { en: "English", is: "Enska" }, level: { en: "Intermediate", is: "Góð" } },
  { name: { en: "Icelandic", is: "Íslenska" }, level: { en: "Basic", is: "Grunnþekking" } },
  { name: { en: "Polish", is: "Pólska" }, level: { en: "Basic", is: "Grunnþekking" } },
];

// Interface texts.
export const ui = {
  en: {
    nav: { home: "Home", work: "Work", about: "About", contact: "Contact" },
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    langLabel: "Language",
    hero: {
      eyebrow: "Based in Reykjavík",
      title: "Live broadcasts and video, from first plan to final delivery.",
      lead: "I film, direct and produce video and live online broadcasts. Before moving to Iceland I ran MyStream Production in Kyiv, broadcasting sports championships and live events.",
      primary: "Watch showreel",
      secondary: "Get in touch",
    },
    scrollCue: "View work",
    showreel: "Showreel",
    selected: "Selected live broadcasts",
    directorSite: "Director website",
    allWork: "All work",
    role: "Role",
    play: "Play video",
    watchOnYoutube: "Watch on YouTube",
    consent:
      "Playing the video loads it from YouTube, which may set cookies.",
    whatIDo: "What I do",
    services: [
      {
        title: "Live streaming",
        text: "Live broadcasts to YouTube, Facebook, Instagram and Zoom, including several platforms at once.",
      },
      {
        title: "Filming",
        text: "Interviews, events and behind-the-scenes, with camera, light and sound handled by one person or a full crew.",
      },
      {
        title: "Production",
        text: "Planning, technical proposals, crew and on-site management, through to edit and delivery.",
      },
    ],
    workTitle: "Work",
    workLead: "Live broadcasts and video projects, with my role in each one. More projects coming soon.",
    aboutTitle: "About",
    aboutLead:
      "Videographer, video director and video producer, now based in Reykjavík.",
    bio: [
      "Before the war, my team and I filmed interviews, behind-the-scenes, and recordings of live events. Over the years I worked on every stage of a shoot and online broadcast: finding the client, filming, sound, directing the live broadcast, editing and delivering the final video.",
      "For larger events I brought in directors, screenwriters, lighting designers and sound engineers to join the core team. My main focus was live online broadcasting of events for clients, and this is where I have the most experience.",
      "My largest projects include the European Surfing Championship, the European MMA Championships and a FIBA Basketball World Cup 2023 European Qualifier, Ukraine v North Macedonia.",
    ],
    experience: "Experience",
    skills: "Skills",
    skillList: [
      "Any video and photo camera equipment",
      "Professional lighting",
      "Sound equipment",
      "Simultaneous streaming to several platforms",
      "Organising the shoot",
      "Leadership and teamwork",
    ],
    software: "Software",
    languages: "Languages",
    education: "Education",
    educationText:
      "Bachelor of Law, Donetsk National University, 2010–2014",
    contactTitle: "Contact",
    contactLead:
      "Looking for a videographer, a live stream crew member or a broadcast director in Iceland? Write or call, and tell me about the project: date, location and what you need filmed or streamed.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    ctaTitle: "Have a project or a role in mind?",
    ctaText: "I'm open to work in Iceland: staff positions, freelance shoots and live events.",
    ctaButton: "Contact me",
    footer: "Videographer · Live broadcast director",
    notFound: "Page not found",
  },
  is: {
    nav: { home: "Forsíða", work: "Verkefni", about: "Um mig", contact: "Hafa samband" },
    menu: "Valmynd",
    close: "Loka",
    skip: "Fara í efni",
    langLabel: "Tungumál",
    hero: {
      eyebrow: "Búsettur í Reykjavík",
      title: "Beinar útsendingar og myndbönd, frá skipulagi til afhendingar.",
      lead: "Ég sé um myndatöku, leikstjórn og framleiðslu myndbanda og beinna útsendinga á netinu. Áður en ég flutti til Íslands rak ég MyStream Production í Kænugarði og sendi út íþróttamót og viðburði í beinni.",
      primary: "Horfa á sýnishorn",
      secondary: "Hafa samband",
    },
    scrollCue: "Skoða verkefni",
    showreel: "Sýnishorn",
    selected: "Valdar beinar útsendingar",
    directorSite: "Vefsíða leikstjóra",
    allWork: "Öll verkefni",
    role: "Hlutverk",
    play: "Spila myndband",
    watchOnYoutube: "Horfa á YouTube",
    consent:
      "Myndbandið er sótt frá YouTube þegar það er spilað og YouTube kann að vista vafrakökur.",
    whatIDo: "Það sem ég geri",
    services: [
      {
        title: "Beint streymi",
        text: "Beinar útsendingar á YouTube, Facebook, Instagram og Zoom, líka á fleiri miðla í einu.",
      },
      {
        title: "Myndataka",
        text: "Viðtöl, viðburðir og efni bak við tjöldin. Myndavél, ljós og hljóð, einn eða með heilu tökuliði.",
      },
      {
        title: "Framleiðsla",
        text: "Skipulag, tæknileg tilboð, tökulið og stjórnun á staðnum, alla leið að klippingu og afhendingu.",
      },
    ],
    workTitle: "Verkefni",
    workLead: "Beinar útsendingar og myndbandsverkefni ásamt hlutverki mínu í hverju þeirra. Fleiri verkefni bætast við fljótlega.",
    aboutTitle: "Um mig",
    aboutLead:
      "Myndatökumaður, leikstjóri og framleiðandi myndbanda, búsettur í Reykjavík.",
    bio: [
      "Fyrir stríðið tók ég og teymið mitt upp viðtöl, efni bak við tjöldin og viðburði. Í gegnum árin hef ég unnið við öll stig töku og beinnar útsendingar: að finna viðskiptavininn, mynda, sjá um hljóð, stjórna útsendingunni, klippa og afhenda lokaútgáfuna.",
      "Fyrir stærri viðburði fékk ég til liðs við okkur leikstjóra, handritshöfunda, ljósahönnuði og hljóðmenn. Aðaláherslan var beinar útsendingar frá viðburðum fyrir viðskiptavini og þar liggur mesta reynsla mín.",
      "Meðal stærstu verkefna minna eru Evrópumeistaramótið í brimbrettum, Evrópumeistaramótið í MMA og leikur Úkraínu og Norður-Makedóníu í undankeppni HM í körfubolta 2023.",
    ],
    experience: "Starfsreynsla",
    skills: "Færni",
    skillList: [
      "Allur mynd- og ljósmyndabúnaður",
      "Fagleg lýsing",
      "Hljóðbúnaður",
      "Streymi á marga miðla samtímis",
      "Skipulag tökudaga",
      "Forysta og teymisvinna",
    ],
    software: "Hugbúnaður",
    languages: "Tungumál",
    education: "Menntun",
    educationText:
      "BA í lögfræði, Donetsk National University, 2010–2014",
    contactTitle: "Hafa samband",
    contactLead:
      "Vantar þig myndatökumann, starfsmann í útsendingarteymi eða útsendingarstjóra á Íslandi? Sendu mér línu eða hringdu og segðu mér frá verkefninu: dagsetningu, staðsetningu og hvað þarf að mynda eða senda út.",
    email: "Netfang",
    phone: "Sími",
    location: "Staðsetning",
    ctaTitle: "Ertu með verkefni eða starf í huga?",
    ctaText: "Ég er opinn fyrir vinnu á Íslandi: föstu starfi, lausaverkefnum og beinum útsendingum.",
    ctaButton: "Hafa samband",
    footer: "Myndatökumaður · Útsendingarstjóri",
    notFound: "Síða fannst ekki",
  },
} as const;

export type Dictionary = (typeof ui)[Locale];

export const meta = {
  en: {
    home: {
      title: "Viacheslav Martynovskyi · Videographer & live broadcast director in Iceland",
      description:
        "Videographer, video director and producer based in Reykjavík. Live streaming, filming and production. Showreel and live broadcast work.",
    },
    work: {
      title: "Work · Viacheslav Martynovskyi",
      description:
        "Live broadcasts and video projects by Viacheslav Martynovskyi, with his role in each project.",
    },
    about: {
      title: "About · Viacheslav Martynovskyi",
      description:
        "Experience, skills and background of Viacheslav Martynovskyi, videographer and live broadcast director in Reykjavík.",
    },
    contact: {
      title: "Contact · Viacheslav Martynovskyi",
      description:
        "Contact Viacheslav Martynovskyi for filming, live streaming and video production work in Iceland.",
    },
  },
  is: {
    home: {
      title: "Viacheslav Martynovskyi · Myndatökumaður og útsendingarstjóri á Íslandi",
      description:
        "Myndatökumaður, leikstjóri og framleiðandi í Reykjavík. Beinar útsendingar, myndataka og framleiðsla.",
    },
    work: {
      title: "Verkefni · Viacheslav Martynovskyi",
      description:
        "Beinar útsendingar og myndbandsverkefni Viacheslav Martynovskyi og hlutverk hans í hverju þeirra.",
    },
    about: {
      title: "Um mig · Viacheslav Martynovskyi",
      description:
        "Reynsla, færni og bakgrunnur Viacheslav Martynovskyi, myndatökumanns og útsendingarstjóra í Reykjavík.",
    },
    contact: {
      title: "Hafa samband · Viacheslav Martynovskyi",
      description:
        "Hafðu samband við Viacheslav Martynovskyi vegna myndatöku, beinna útsendinga og myndbandsframleiðslu á Íslandi.",
    },
  },
} as const;
