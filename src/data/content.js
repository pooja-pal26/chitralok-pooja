/**
 * Chitralok Studios — Centralized Content & Media Data
 * Inspired by high-end production houses (Dharma 2.0 aesthetic)
 */

export const siteData = {
  brand: {
    name: 'Chitralok Studios',
    monogram: 'CS',
    fullName: 'Chitralok Studios',
    logo: '/assets/images/logo.webp',
    tagline: 'We ideate, produce, collaborate, engage and deliver best-in-class audiovisuals.',
    subTagline: 'We make films people remember.',
    address: '24/3, 24/4 & 24/5, 3rd Floor, Block E, Pandav Nagar, East Delhi – 110092',
    addressLines: [
      'S & P Chitralok Studios',
      '24/3, 24/4 & 24/5, 3rd Floor,',
      'Block E, Pandav Nagar,',
      'East Delhi – 110092'
    ],
    phone: '+91 6394-177916',
    email: 'acc.spchitralok@gmail.com',
    emails: {
      projects: 'acc.spchitralok@gmail.com',
      general: 'acc.spchitralok@gmail.com',
      careers: 'acc.spchitralok@gmail.com'
    },
    socials: [
      { name: 'Instagram', url: 'https://www.instagram.com/chitralokstudios.sp/' },
      { name: 'YouTube', url: 'https://www.youtube.com/watch?v=jg-aCXizXzo' },
      { name: 'Facebook', url: 'https://www.facebook.com/people/ChitralokStudios/61596235132778/' },
      { name: 'IMDb', url: 'https://www.imdb.com/name/nm9362954/' }
    ]
  },

  hero: {
    tag: 'PRODUCTION HOUSE · EAST DELHI',
    headlinePrefix: 'We make films',
    headlineMain: 'people',
    headlineAccent: 'remember.',
    manifesto: 'We ideate, produce, collaborate, engage and deliver best-in-class audiovisuals for cinema, OTT and global brands.',
    bgImage: '/assets/images/Paid Palki_ A Rural Love Story journey.png',
    slides: [
      {
        id: 1,
        bgImage: '/assets/images/Paid Palki_ A Rural Love Story journey.png',
        posterImg: '/assets/images/Paid Palki_ A Rural Love Story journey.png',
        subTag: 'Feature Film · In Filming'
      },
      {
        id: 2,
        bgImage: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png',
        posterImg: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png',
        subTag: 'Theatrical Release · Post Production'
      }
    ],
    showreelTag: 'Showreel · 2026',
    defaultShowreelVideo: '/assets/videos/bts/bts_clip_01_set_action.mp4'
  },

  story: {
    badge: 'Our Story',
    title: 'A director’s vision, backed by a producer’s iron discipline.',
    statement: 'Chitralok Studios is an independent Indian production powerhouse. From high-stakes television commercials to critically acclaimed feature films and digital series, we build frames that linger in memory.',
    linkText: 'Explore Our Story'
  },

  directors: [
    {
      id: 1,
      name: 'Pushpendra Singh',
      // tag: 'Indian Television & Film Director',
      // role: 'Television & Film Director',
      badge: 'Writer & Director · Paid Palki & Iconic Indian TV Classics',
      img: '/assets/images/pushpenddra_singh.webp',
      path: '/director',
      dob: '15 September 1981',
      specialty: 'High-Impact Television Drama, Social Realism & Epic Narratives',
      summary: 'Pushpendra Singh is an Indian Television and Film Director. He began his career as an associate director on Kyaa Hoga Nimmo Kaa and worked as second director on Ram Gopal Varma\'s landmark Bollywood film Sarkar (2005), before directing some of the most historic television series in Indian broadcasting history and acclaimed feature films like Paid Palki and Aaoge Jab Tum.',
      // featureFilm: 'Paid Palki & Aaoge Jab Tum',
      imdbUrl: 'https://www.imdb.com/name/nm9362954/',
      notableWorks: [
        'Sarkar (2005 Movie — Second Director)',
        'Paid Palki (Feature Film)',
        'Aaoge Jab Tum (2026)',
        'Kahaani Ghar Ghar Kii (2008)',
        'Kyunki Saas Bhi Kabhi Bahu Thi (2006)',
        'Kis Desh Mein Hai Meraa Dil',
        'Zindagi Ki Mehek (2017)',
        'Jai Shri Krishna',
        'Shakuntala (2008–2009)',
        'Meera',
        'Kuchh Is Tara (2011)',
        'Sarkar (TV Series)'
      ]
    }
  ],

  featuredWorks: [
    {
      id: 1,
      title: 'Paid Palki',
      posterImg: '/assets/images/Paid Palki_ A Rural Love Story journey.png',
      client: 'S&P Chitralok Studios',
      credit: 'Writer & Dir. Pushpenddra Singh',
      cat: 'Film',
      year: 'In Filming',
      status: 'In Filming',
      img: '/assets/images/Paid Palki_ A Rural Love Story journey.png'
    },
    {
      id: 2,
      title: 'Aaoge Jab Tum — Feature Film',
      posterImg: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png',
      client: 'Little Crew Pictures',
      credit: 'Dir. Pushpenddra Singh',
      cat: 'Film',
      year: 'Post Production',
      status: 'Post Production',
      img: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png'
    },
    {
      id: 3,
      title: 'Sarkar (2005) — Feature Film',
      client: 'K Sera Sera / RGV Film Company',
      credit: 'Second Director: Pushpendra Singh',
      cat: 'Film',
      year: '2005',
      img: '/assets/images/sarkar_movie_hd.webp',
      videoUrl: 'https://www.youtube-nocookie.com/embed/_dGB1MCYvrs?autoplay=1'
    },
    {
      id: 4,
      title: 'Kyunki Saas Bhi Kabhi Bahu Thi',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      cat: 'Series',
      year: '2000-2008',
      img: '/assets/images/kuki sas bhi kbt.avif',
      videoUrl: 'https://www.youtube-nocookie.com/embed/09UKQGoH2Uk?autoplay=1'
    },
    {
      id: 5,
      title: 'Kahaani Ghar Ghar Kii',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      cat: 'Series',
      year: '2000-2008',
      img: '/assets/images/kahaani_ghar_ghar_kii.webp',
      videoUrl: 'https://www.youtube-nocookie.com/embed/42Vqzi5xEzM?autoplay=1'
    },
    {
      id: 6,
      title: 'Kis Desh Mein Hai Meraa Dil',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      cat: 'Series',
      year: '2008-2010',
      img: '/assets/images/kis_desh_mein_hai_meraa_dil.webp',
      videoUrl: 'https://www.youtube-nocookie.com/embed/Ug0exzXM5eY?autoplay=1'
    }
  ],

  allWorks: [
    {
      id: 2,
      cat: 'Film',
      title: 'Aaoge Jab Tum',
      posterImg: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png',
      client: 'Little Crew Pictures',
      credit: 'Writer & Dir. Pushpenddra Singh',
      year: 'Post Production',
      status: 'Post Production',
      milestone: 'Post Production',
      genre: 'Romantic Drama / Musical Odyssey',
      director: 'Pushpenddra Singh',
      studio: 'Little Crew Pictures & Pushpendra Singh Productions',
      producers: 'Pushpenddra Singh & Little Crew Pictures',
      screenplay: 'Pushpenddra Singh',
      dialogues: 'Pushpenddra Singh',
      dop: 'Chitralok Cinematography Unit',
      img: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png',
      bannerImg: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png',
      synopsis: 'An evocative upcoming directorial feature by Pushpenddra Singh exploring themes of profound longing, destiny, and timeless romance across evocative snow-covered Himalayan landscapes, set against an unforgettable classical music score.',
      stills: [
        { img: '/assets/images/HeroImage2.webp', title: 'Theatrical Landscape Visual Experience', tag: 'Master Key Art' },
        { img: '/assets/images/aaoge_jab_tum_poster.webp', title: 'Official Theatrical Teaser Poster', tag: 'Poster' },
        { img: '/assets/images/bts_sound_mixing.webp', title: 'Dolby Atmos Master Scoring Stage', tag: 'Soundstage' },
        { img: '/assets/images/about_studio_soundstage.webp', title: 'Chitralok Studio Production Floor', tag: 'Studio Set' }
      ],
      cast: [
        { actor: 'Omkar Singh', character: 'Lead Protagonist', role: 'Principal Cast', img: '/assets/images/cast/omkar_singh.webp' },
        { actor: 'Prragati Chauhaan', character: 'Lead Protagonist', role: 'Principal Cast', img: '/assets/images/cast/prragati_chauhaan_avatar.webp' },
        { actor: 'Rajesh Jais', character: 'Lawyer / Key Role', role: 'Key Supporting' },
        { actor: 'Pushpenddra Singh', character: 'Writer & Director', role: 'Director' }
      ]
    },

    {
      id: 1,
      cat: 'Film',
      title: 'Paid Palki',
      posterImg: '/assets/images/Paid Palki_ A Rural Love Story journey.png',
      client: 'S&P Chitralok Studios',
      credit: 'Writer & Dir. Pushpenddra Singh',
      year: 'In Filming',
      status: 'In Filming',
      milestone: 'In Filming',
      genre: 'Social Drama / Rural Romance',
      director: 'Pushpenddra Singh',
      studio: 'S&P Chitralok Studios',
      producers: 'Alok Ji, Pawan Ji, Amod Ji, Krishna Kant Ji, Santanu Ji, Vipul Ji',
      screenplay: 'Pushpendrra Singh & Prragati Chauhaan',
      dialogues: 'Shashank Singh',
      dop: 'Shashank Sahu',
      img: '/assets/images/Paid Palki_ A Rural Love Story journey.png',
      bannerImg: '/assets/images/Paid Palki_ A Rural Love Story journey.png',
      synopsis: 'Set in the heart of rural Madhya Pradesh, Santu, an unmarried young man facing societal pressure, is persuaded to buy a bride from a remote tribal settlement. Captivated by Kemli, a sheltered tribal girl, he brings her home where genuine affection blossoms between them. But when Kemli’s family forcibly takes her back, Santu embarks on an emotional struggle to reunite with the woman he loves—a powerful story of love emerging from exploitation and the courage to challenge human trafficking.',
      stills: [
        { img: '/assets/images/paid_palki_poster.webp', title: 'Official Theatrical 1-Sheet Poster', tag: 'Theatrical Art' },
        { img: '/assets/images/paid_palki_banner.webp', title: 'Official Paid Palki Key Art', tag: 'Master Artwork' },
        { img: '/assets/images/paid_palki_still.webp', title: 'Rural MP Settlement & Village Landscape', tag: 'Cinematic Frame' },
        { img: '/assets/images/bts_film_set.webp', title: 'Pushpenddra Singh Directing on 35mm Cinema Rig', tag: 'Behind the Scenes' },
        { img: '/assets/images/bts_rehearsal.webp', title: 'Cast Scene Blocking & Character Reading', tag: 'Production Still' }
      ],
      cast: [
        { actor: 'Chandan Roy', character: 'Santh Kumar (Santu)', role: 'Lead Protagonist', img: '/assets/images/cast/chandan_roy.webp?v=2' },
        { actor: 'Prragati Chauhaan', character: 'Kemli', role: 'Lead Protagonist', img: '/assets/images/cast/prragati_chauhaan_avatar.webp' },
        { actor: 'Durgesh Kumar', character: 'Chaturbhuj (Phupha Ji)', role: 'Key Supporting', img: '/assets/images/cast/durgesh_kumar.webp' },
        { actor: 'Sunita Rajwar', character: "Santu's Mother", role: 'Key Supporting', img: '/assets/images/cast/sunita_rajwar.webp' },
        { actor: 'Omkar Das Manikpuri', character: "Kodulal (Kemli's Father)", role: 'Supporting Cast', img: '/assets/images/cast/omkar_das_manikpuri.webp' },
        { actor: 'Sapna Sand', character: "Sukhiya (Kemli's Mother)", role: 'Supporting Cast', img: '/assets/images/cast/sapna_sand.webp' },
        { actor: 'Kumar Saurav', character: 'Jamai', role: 'Middleman', img: '/assets/images/cast/kumar_saurav.webp' },
        { actor: 'Bhaskar Jha', character: 'Naresh', role: 'Antagonist', img: '/assets/images/cast/bhaskar_jha.webp' }
      ]
    },

    {
      id: 3,
      cat: 'Film',
      title: 'Sarkar (Movie)',
      videoUrl: 'https://www.youtube-nocookie.com/embed/_dGB1MCYvrs?autoplay=1',
      posterImg: '/assets/images/sarkar_movie_poster.webp',
      client: 'K Sera Sera / RGV Film Company',
      credit: 'Second Director: Pushpendra Singh',
      year: '2005',
      genre: 'Political Crime Epic / Drama',
      director: 'Ram Gopal Varma · Second Dir. Pushpendra Singh',
      studio: 'K Sera Sera & RGV Film Company',
      milestone: 'Iconic Indian Cinematic Masterpiece',
      img: '/assets/images/sarkar_movie_hd.webp',
      bannerImg: '/assets/images/sarkar_movie_hd.webp',
      synopsis: 'The landmark Indian political crime epic inspired by The Godfather, chronicling the reign of patriarch Subhash Nagre, an extra-governmental justice figure in Mumbai, and his younger son Shankar who steps into the crucible to defend the dynasty.',
      stills: [
        { img: '/assets/images/sarkar_movie_hd.webp', title: 'Subhash & Shankar Nagre Council Confrontation', tag: 'Iconic Still' },
        { img: '/assets/images/sarkar_prime_hd.webp', title: 'Subhash Nagre Public Address to Mumbai', tag: 'Prime Video HD' },
        { img: '/assets/images/sarkar_movie_poster.webp', title: 'Original Theatrical Release One-Sheet', tag: 'Theatrical Art' },
        { img: '/assets/images/cd04039d-35ae-4094-88d2-d39d430fe44c.webp', title: 'Anamorphic 35mm Master Cinematography Frame', tag: 'Master Film Frame' }
      ],
      cast: [
        { actor: 'Amitabh Bachchan', character: "Subhash Nagre 'Sarkar'", role: 'Patriarch & Titular Lead', img: '/assets/images/cast/amitabh_bachchan.webp' },
        { actor: 'Abhishek Bachchan', character: 'Shankar Nagre', role: 'Son & Successor', img: '/assets/images/cast/abhishek_bachchan.webp' },
        { actor: 'Kay Kay Menon', character: 'Vishnu Nagre', role: 'Elder Son', img: '/assets/images/cast/kay_kay_menon.webp' },
        { actor: 'Katrina Kaif', character: 'Pooja', role: "Shankar's Fiancée", img: '/assets/images/cast/katrina_kaif.webp' },
        { actor: 'Anupam Kher', character: 'Motilal Khurana', role: 'Opposition Politician', img: '/assets/images/cast/anupam_kher.webp' },
        { actor: 'Supriya Pathak', character: 'Pushpa Nagre', role: 'Wife of Sarkar' },
        { actor: 'Kota Srinivasa Rao', character: 'Silver Mani', role: 'Key Antagonist' },
        { actor: 'Tanishaa Mukerji', character: 'Avantika', role: 'Family Confidante' }
      ],
    },

    {
      id: 5,
      cat: 'Series',
      title: 'Zindagi Ki Mehek',
      videoUrl: 'https://www.youtube-nocookie.com/embed/QtJJqyBz_kE?autoplay=1',
      posterImg: '/assets/images/pi6.jpg',
      client: 'Zee TV / Parin Multimedia',
      credit: 'Dir. Pushpendra Singh',
      year: '2016-2017',
      genre: 'Romantic Drama / Culinary Romance',
      director: 'Pushpendra Singh',
      studio: 'Zee TV & Parin Multimedia',
      milestone: '500+ Prime Time Episodes on Zee TV',
      img: '/assets/images/pi6.jpg',
      bannerImg: '/assets/images/pi6.jpg',
      synopsis: 'A groundbreaking prime-time romance drama set against Delhi culinary culture, tracking the clash and electric chemistry between passionate home-cook Mehek and ruthless restaurateur Shaurya Khanna.',
      stills: [
        { img: '/assets/images/zindagi_ki_mehek.webp', title: 'Mehek & Shaurya Dramatic Kitchen Confrontation', tag: 'ZEE5 Master Frame' },
        { img: '/assets/images/bts_film_set.webp', title: 'Multi-Camera Studio Production Set', tag: 'Behind the Scenes' },
        { img: '/assets/images/bts_rehearsal.webp', title: 'Scene Dialogue Walkthrough & Script Session', tag: 'Rehearsal' }
      ],
      cast: [
        { actor: 'Samiksha Jaiswal', character: 'Mehek Sharma / Vandana', role: 'Lead Female Protagonist' },
        { actor: 'Karan Vohra', character: 'Shaurya Khanna / Singh Ahlawat', role: 'Lead Male Protagonist' },
        { actor: 'Shiny Dixit', character: 'Nehal Sharma', role: 'Mehek Sister' },
        { actor: 'Radha Bhatt', character: 'Shwetlana Agarwal', role: 'Antagonist' },
        { actor: 'Aadesh Chaudhary', character: 'Armaan', role: 'Supporting Cast' }
      ],
    },

    {
      id: 6,
      cat: 'Series',
      title: 'Kahaani Ghar Ghar Kii',
      videoUrl: 'https://www.youtube-nocookie.com/embed/42Vqzi5xEzM?autoplay=1',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2000-2008',
      genre: 'Family Saga / Cultural Phenomenon',
      director: 'Pushpendra Singh',
      studio: 'Star Plus & Balaji Telefilms',
      milestone: 'Historic 1600+ Episodes TV Legend',
      img: '/assets/images/kahaani_ghar_ghar_kii.webp',
      bannerImg: '/assets/images/kahaani_ghar_ghar_kii.webp',
      synopsis: 'One of Indian television most celebrated and influential family sagas, chronicling the trials, moral values, and unbreakable bonds of the Agarwal household under the quiet strength of its ideal daughter-in-law, Parvati.',
      stills: [
        { img: '/assets/images/kahaani_ghar_ghar_kii.webp', title: 'Parvati & Om Agarwal Iconic Moment', tag: 'JioHotstar 1080p Master' },
        { img: '/assets/images/bts_film_set.webp', title: 'Balaji Telefilms Golden Era Production Floor', tag: 'Behind the Scenes' },
        { img: '/assets/images/bts_sound_mixing.webp', title: 'Iconic Title Song Studio Recording', tag: 'Theme Score' }
      ],
      cast: [
        { actor: 'Sakshi Tanwar', character: 'Parvati Agarwal', role: 'Iconic Lead Protagonist', img: '/assets/images/cast/sakshi_tanwar.webp' },
        { actor: 'Ali Asgar', character: 'Kamal Agarwal', role: 'Brother', img: '/assets/images/cast/ali_asgar.webp' },
        { actor: 'Kiran Karmarkar', character: 'Om Agarwal', role: 'Lead Male Protagonist' },
        { actor: 'Deepak Qazir', character: 'Vishwanath Agarwal (Babuji)', role: 'Family Patriarch' },
        { actor: 'Chetan Hansraj', character: 'Saasha', role: 'Antagonist' },
        { actor: 'Shweta Kawatra', character: 'Pallavi Agarwal', role: 'Key Antagonist' }
      ],
    },

    {
      id: 7,
      cat: 'Series',
      title: 'Kyunki Saas Bhi Kabhi Bahu Thi',
      videoUrl: 'https://www.youtube-nocookie.com/embed/09UKQGoH2Uk?autoplay=1',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2000-2008',
      genre: 'Family Drama / Television Legend',
      director: 'Pushpendra Singh',
      studio: 'Star Plus & Balaji Telefilms',
      milestone: 'Record-Breaking 1833 Episodes Culture Shaper',
      posterImg: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.webp?v=2',
      img: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.webp?v=2',
      bannerImg: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.webp?v=2',
      synopsis: 'The cultural milestone that redefined South Asian entertainment across the globe, chronicling three generations of the grand Virani joint family in Gujarat guided by the moral compass and fortitude of Tulsi Virani.',
      stills: [
        { img: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.webp', title: 'Tulsi Virani Shanti Niketan Grand Arrival', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_film_set.webp', title: 'Virani Haveli Architectural Studio Floor', tag: 'Production Set' },
        { img: '/assets/images/bts_rehearsal.webp', title: 'Grand Ensemble Cast Script Coordination', tag: 'Cast Rehearsal' }
      ],
      cast: [
        { actor: 'Smriti Irani', character: 'Tulsi Virani', role: 'Legendary Lead Protagonist', img: '/assets/images/cast/smriti_irani.webp' },
        { actor: 'Ronit Roy', character: 'Mihir Virani (Subsequent)', role: 'Lead Male Role', img: '/assets/images/cast/ronit_roy.webp' },
        { actor: 'Amar Upadhyay', character: 'Mihir Virani', role: 'Husband & Scion' },
        { actor: 'Sudha Shivpuri', character: 'Baa (Amba Govardhan Virani)', role: 'Matriarch' },
        { actor: 'Hiten Tejwani', character: 'Karan Virani', role: 'Son & Moral Successor' },
        { actor: 'Gauri Pradhan', character: 'Nandini Virani', role: 'Daughter-in-law' }
      ],
    },

    {
      id: 8,
      cat: 'Series',
      title: 'Jai Shri Krishna',
      videoUrl: 'https://www.youtube-nocookie.com/embed/M66qzUIrbo8?autoplay=1',
      posterImg: '/assets/images/pi1.jpg',
      client: 'Colors TV / Sagar Pictures',
      credit: 'Dir. Pushpendra Singh',
      year: '2008-2009',
      genre: 'Mythological Epic / Spiritual Drama',
      director: 'Pushpendra Singh',
      studio: 'Colors TV & Sagar Pictures',
      milestone: 'Top-Rated Colors TV Mythological Flagship',
      img: '/assets/images/pi1.jpg',
      bannerImg: '/assets/images/pi1.jpg',
      synopsis: 'An exquisite mythological production chronicling the divine bal-leela (childhood miracles), pastoral charms of Vrindavan, and ultimate victory of Lord Krishna over the tyrant Kansa.',
      stills: [
        { img: '/assets/images/jai_shri_krishna.webp', title: 'Little Makhan-Chor Bal Krishna in Vrindavan', tag: '1280x720 HD Master' },
        { img: '/assets/images/bts_camera_rig.webp', title: 'Sagar Arts Divine Visual Effects & Lighting Rig', tag: 'Camera Setup' },
        { img: '/assets/images/about_studio_soundstage.webp', title: 'Gokul & Mathura Palace Set Architecture', tag: 'Studio Set' }
      ],
      cast: [
        { actor: 'Dhriti Bhatia', character: 'Bal Krishna (Child)', role: 'Titular Divine Lead' },
        { actor: 'Meghan Jadhav', character: 'Shri Krishna (Adolescent)', role: 'Lord Krishna' },
        { actor: 'Kritika Sharma', character: 'Radha', role: 'Divine Consort' },
        { actor: 'Aditi Sajwan', character: 'Yashoda Maiyya', role: 'Foster Mother' },
        { actor: 'Raj Premi', character: 'Maharaj Kansa', role: 'Tyrant King / Antagonist' },
        { actor: 'Saurabh Raj Jain', character: 'Lord Vishnu', role: 'Supreme Preserver' }
      ],
    },

    {
      id: 9,
      cat: 'Series',
      title: 'Shakuntala',
      videoUrl: 'https://www.youtube-nocookie.com/embed/5xDr-aE6lmk?autoplay=1',
      posterImg: '/assets/images/shakuntala.webp',
      client: 'STAR One / Sagar Arts',
      credit: 'Dir. Pushpendra Singh',
      year: '2009',
      genre: 'Mythological Romance / Epic Drama',
      director: 'Pushpendra Singh',
      studio: 'STAR One & Sagar Arts',
      milestone: 'Opulent Kalidasa Sanskrit Classic Adaptation',
      img: '/assets/images/shakuntala.webp',
      bannerImg: '/assets/images/shakuntala.webp',
      synopsis: 'A grand visual adaptation of Kalidasa classical Sanskrit masterpiece Abhijnanasakuntalam, narrating the fated love, curse-driven separation, and royal reunion of King Dushyanta and forest maiden Shakuntala.',
      stills: [
        { img: '/assets/images/shakuntala.webp', title: 'Princess Shakuntala in Ancient Forest Sanctuary', tag: '1280x720 HD Master' },
        { img: '/assets/images/bts_camera_rig.webp', title: 'Sagar Arts Mythological Exterior Lighting Rig', tag: 'Camera Rig' }
      ],
      cast: [
        { actor: 'Neha Mehta', character: 'Shakuntala', role: 'Title Role / Forest Princess' },
        { actor: 'Gautam Sharma', character: 'Rajkumar Dushyant', role: 'King of Hastinapur' },
        { actor: 'Sunny Singh (Nijjar)', character: 'Karan', role: 'Key Supporting Character' },
        { actor: 'Gagan Malik', character: 'Senapati Veer', role: 'Royal Commander' },
        { actor: 'Shabana Mullani', character: 'Rajkumari Kalki', role: 'Antagonist' }
      ],
    },

    {
      id: 10,
      cat: 'Series',
      title: 'Meera',
      videoUrl: 'https://www.youtube-nocookie.com/embed/AJh41WsBfjY?autoplay=1',
      client: 'NDTV Imagine / Sagar Arts',
      credit: 'Dir. Pushpendra Singh',
      year: '2009-2010',
      genre: 'Biographical Historical Drama',
      director: 'Pushpendra Singh',
      studio: 'NDTV Imagine & Sagar Arts',
      milestone: 'Critically Acclaimed Biographical Television Drama',
      posterImg: '/assets/images/meera.webp?v=2',
      img: '/assets/images/meera.webp?v=2',
      bannerImg: '/assets/images/meera.webp?v=2',
      synopsis: 'The inspiring biographical chronicle celebrating 16th-century Rajput princess-poet Meera Bai, whose sublime devotion to Lord Krishna challenged regal tyranny, orthodox society, and mortal threats.',
      stills: [
        { img: '/assets/images/meera.webp', title: 'Young Meera Bai Divine Bhajan Recital', tag: '1280x720 HD Master' },
        { img: '/assets/images/bts_sound_mixing.webp', title: 'Classical Devotional Scoring Orchestration', tag: 'Music Stage' }
      ],
      cast: [
        { actor: 'Aashika Bhatia', character: 'Young Meera Bai', role: 'Child Prodigy Lead' },
        { actor: 'Aditi Sajwan', character: 'Elder Meera Bai', role: 'Saint-Princess Lead' },
        { actor: 'Kunal Bakshi', character: 'Ratan Singh', role: "Meera's Father" },
        { actor: 'Paras Arora', character: 'Jaimal', role: "Meera's Cousin" },
        { actor: 'Arvind Rao', character: 'Maharaj Bhojraj', role: "Meera's Husband" }
      ],
    },

    {
      id: 11,
      cat: 'Series',
      title: 'Kis Desh Mein Hai Meraa Dil',
      videoUrl: 'https://www.youtube-nocookie.com/embed/Ug0exzXM5eY?autoplay=1',
      posterImg: '/assets/images/pi4.jpg',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2008-2010',
      genre: 'Romantic Drama / Family Tragedy',
      director: 'Pushpendra Singh',
      studio: 'Star Plus & Balaji Telefilms',
      milestone: '444 Episodes & Historic Prime-Time Hit',
      img: '/assets/images/pi4.jpg',
      bannerImg: '/assets/images/pi4.jpg',
      synopsis: 'A sweeping cross-border romance depicting unconditional devotion and personal sacrifice. It notably introduced Sushant Singh Rajput in his television acting debut as the beloved younger brother Preet Juneja.',
      stills: [
        { img: '/assets/images/kis_desh_mein_hai_meraa_dil.webp', title: 'Sushant Singh Rajput Debut Scene as Preet Juneja', tag: '1280x720 HD Debut Frame' },
        { img: '/assets/images/bts_film_set.webp', title: 'Balaji Telefilms North India Outdoor Unit', tag: 'Location Shoot' }
      ],
      cast: [
        { actor: 'Sushant Singh Rajput', character: 'Preet Juneja', role: 'Beloved Brother (Screen Debut)', img: '/assets/images/cast/sushant_singh_rajput.webp' },
        { actor: 'Harshad Chopda', character: 'Prem Juneja', role: 'Lead Male Protagonist', img: '/assets/images/cast/harshad_chopda.webp' },
        { actor: 'Additi Gupta', character: 'Heer Maan', role: 'Lead Female Protagonist' },
        { actor: 'Meher Vij', character: 'Meher Maan', role: 'Sister' },
        { actor: 'Mahesh Shetty', character: 'Nihaal Balwant Mann', role: 'Key Antagonist' }
      ],
    },

    {
      id: 12,
      cat: 'Series',
      title: 'Kuchh Is Tara',
      videoUrl: 'https://www.youtube-nocookie.com/embed/6OGaso12vm8?autoplay=1',
      client: 'Sony Entertainment TV / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2007-2008',
      genre: 'Romantic Comedy / Corporate Drama',
      director: 'Pushpendra Singh',
      studio: 'Sony TV & Balaji Telefilms',
      milestone: 'Prime Time Sony TV Romantic Comedy',
      posterImg: '/assets/images/kuchh_is_tara.webp?v=2',
      img: '/assets/images/kuchh_is_tara.webp?v=2',
      bannerImg: '/assets/images/kuchh_is_tara.webp?v=2',
      synopsis: 'A witty, lighthearted romantic comedy chronicling Kanya Godbole, an optimistic girl living with a split identity condition who finds herself in a whirlwind contract marriage within the elite Nanda business empire.',
      stills: [
        { img: '/assets/images/kuchh_is_tara.webp', title: 'Kanya Godbole & Ranbir Nanda Wedding Sequence', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_rehearsal.webp', title: 'Studio Rehearsal & Comic Timing Session', tag: 'Rehearsal' }
      ],
      cast: [
        { actor: 'Dimple Jhangiani', character: 'Kanya Godbole / Natasha', role: 'Dual Identity Protagonist', img: '/assets/images/cast/dimple_jhangiani.webp' },
        { actor: 'Akashdeep Saigal', character: 'Ranbir Nanda', role: 'Lead Male Protagonist' },
        { actor: 'Vishal Singh', character: 'Ayan Nanda', role: 'Corporate Scion' },
        { actor: 'Sudha Chandran', character: 'Mallika Nanda', role: 'Business Matriarch' }
      ],
    },

    {
      id: 13,
      cat: 'Series',
      title: 'Sarkar',
      videoUrl: 'https://www.youtube-nocookie.com/embed/_dGB1MCYvrs?autoplay=1',
      client: 'Zee TV / Siddhant Cinevision',
      credit: 'Dir. Pushpendra Singh',
      year: '2005-2006',
      genre: 'Political Thriller / Dynastic Drama',
      director: 'Pushpendra Singh',
      studio: 'Zee TV & Siddhant Cinevision',
      milestone: 'Critically Acclaimed Shobhaa De Political Drama',
      posterImg: '/assets/images/sarkar.webp?v=2',
      img: '/assets/images/sarkar.webp?v=2',
      bannerImg: '/assets/images/sarkar.webp?v=2',
      synopsis: 'A gripping political drama serial penned by Shobhaa De exploring power dynamics, electoral stratagems, and backroom political betrayals within a prominent political dynasty headed by matriarch Priyamvada.',
      stills: [
        { img: '/assets/images/sarkar.webp', title: 'Political Matriarch Priyamvada in Heated Debate', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_camera_rig.webp', title: 'Siddhant Cinevision Political Chamber Lighting', tag: 'Studio Rig' }
      ],
      cast: [
        { actor: 'Rajat Kapoor', character: 'Kumar', role: 'Political Strategist', img: '/assets/images/cast/rajat_kapoor.webp' },
        { actor: 'Ronit Roy', character: 'Kunal', role: 'Dynastic Scion', img: '/assets/images/cast/ronit_roy.webp' },
        { actor: 'Rohit Roy', character: 'Karan', role: 'Ambitious Younger Brother', img: '/assets/images/cast/rohit_roy.webp' },
        { actor: 'Tisca Chopra', character: 'Shweta', role: 'Political Confidante', img: '/assets/images/cast/tisca_chopra.webp' },
        { actor: 'Divya Seth', character: 'Priyamvada', role: 'Political Matriarch & Kingmaker' }
      ],
    },

    {
      id: 14,
      cat: 'Series',
      title: 'Kyaa Hoga Nimmo Kaa',
      client: 'STAR One / Balaji Telefilms',
      credit: 'Associate Dir. Pushpendra Singh',
      year: '2006-2007',
      genre: 'Romantic Comedy / Slice-of-Life',
      director: 'Associate Dir. Pushpendra Singh',
      studio: 'STAR One & Balaji Telefilms',
      milestone: 'Beloved 200+ Episode Romantic Comedy',
      posterImg: '/assets/images/kyaa_hoga_nimmo_kaa.webp?v=2',
      img: '/assets/images/kyaa_hoga_nimmo_kaa.webp?v=2',
      bannerImg: '/assets/images/kyaa_hoga_nimmo_kaa.webp?v=2',
      synopsis: 'A cheerful romantic comedy tracing the life of Nimmo, a charming middle-class girl with perpetual bad luck, whose unexpected arrangement with high-flying billionaire Kunal Sehgal evolves into genuine tenderness.',
      stills: [
        { img: '/assets/images/kyaa_hoga_nimmo_kaa.webp', title: 'Nimmo & Kunal Sehgal Humorous Moment', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_film_set.webp', title: 'Balaji Telefilms Star One Comedy Stage', tag: 'Behind the Scenes' }
      ],
      cast: [
        { actor: 'Sanjeeda Sheikh', character: 'Namrata "Nimmo" Mathuria', role: 'Titular Lead Protagonist', img: '/assets/images/cast/sanjeeda_sheikh.webp' },
        { actor: 'Eijaz Khan', character: 'Kunal Sehgal', role: 'Billionaire Protagonist', img: '/assets/images/cast/eijaz_khan.webp' },
        { actor: 'Garima Kapoor', character: 'Natasha', role: 'Key Antagonist' },
        { actor: 'Navneet Nishan', character: 'Parminder', role: 'Mother' }
      ],
    },

    {
      id: 4,
      cat: 'Ad Film',
      title: 'Aurum Jewels — The Golden Hour',
      posterImg: '/assets/images/aurum_jewels.webp',
      client: 'Aurum Jewels',
      credit: 'Dir. Pushpendra Singh',
      year: '2025',
      genre: 'Luxury Commercial / Brand Film',
      director: 'Pushpendra Singh',
      studio: 'Aurum Brand Studios & Chitralok Films',
      milestone: 'High-Fashion Royal Brand Campaign',
      img: '/assets/images/aurum_jewels_hd.webp',
      bannerImg: '/assets/images/aurum_jewels_hd.webp',
      synopsis: 'A high-concept commercial campaign capturing timeless royal heritage and immaculate gold craftsmanship. Directed by Pushpendra Singh, utilizing anamorphic lenses and soft golden-hour natural illumination.',
      stills: [
        { img: '/assets/images/aurum_jewels_hd.webp', title: 'The Golden Hour 16:9 Widescreen Frame', tag: 'Commercial Master' },
        { img: '/assets/images/aurum_jewels.webp', title: 'Royal Heritage Jewelry Editorial Frame', tag: 'Print Campaign' },
        { img: '/assets/images/bts_camera_rig.webp', title: 'Lighting Masterclass & Anamorphic Camera Rig', tag: 'Behind the Scenes' }
      ],
      cast: [
        { actor: 'Maya Sen', character: 'Royal Protagonist', role: 'Brand Ambassador / Model' },
        { actor: 'Pushpendra Singh', character: 'Director & Vision', role: 'Commercial Director' },
        { actor: 'Chitralok Unit', character: 'Cinematography Crew', role: 'Camera & Lighting Team' }
      ],
    }
  ],

  btsGallery: [
    {
      type: 'video',
      videoSrc: '/assets/videos/bts/bts_clip_01_set_action.mp4',
      poster: '/assets/images/bts/bts_clip_01_set_action_poster.webp',
      title: 'Camera Crane & Dolly Track Setup',
      meta: 'Live Action Take · Precision track motion on soundstage',
      tag: 'CINEMA CLIP #1'
    },
    {
      type: 'image',
      img: '/assets/images/bts/bts_director_monitor_portrait.webp',
      title: 'Pushpendra Singh at Director Monitor',
      meta: 'Evaluating dynamic exposure & color tone on calibrated field monitor',
      tag: 'STILL FRAME #2'
    },
    {
      type: 'gallery',
      subImages: [
        {
          img: '/assets/images/bts/bts_cinematography_anamorphic_rig.webp',
          title: 'Cinematography Unit & Anamorphic Rig',
          meta: 'Custom cinema cage with matte box & wireless follow focus',
          tag: 'STILL FRAME #3'
        },
        {
          img: '/assets/images/bts/bts_camera_crew_tracking.webp',
          title: 'Camera Crew Tracking Shot',
          meta: 'Dual-operator tracking rig capturing continuous dialogue sequence',
          tag: 'STILL FRAME #4'
        }
      ],
      img: '/assets/images/bts/bts_cinematography_anamorphic_rig.webp',
      title: 'Cinematography Unit & Tracking Rig',
      meta: 'Custom cinema cage & dual-operator tracking rig sequence',
      tag: 'STILL FRAME #3'
    },
    {
      type: 'video',
      videoSrc: '/assets/videos/bts/bts_clip_03_camera_jib_movement.mp4',
      poster: '/assets/images/bts/bts_clip_03_camera_jib_movement_poster.webp',
      title: 'Camera Jib & Fluid Head Sweep',
      meta: 'Sweeping crane pass across dramatic location set',
      tag: 'CINEMA CLIP #5'
    },
    {
      type: 'video',
      videoSrc: '/assets/videos/bts/bts_clip_04_director_on_rig.mp4',
      poster: '/assets/images/bts/bts_clip_04_director_on_rig_poster.webp',
      title: 'Pushpendra Singh Directing on Rig',
      meta: 'Directorial Guidance · Pacing emotional beats in high-stakes scene',
      tag: 'CINEMA CLIP #6'
    },
    {
      type: 'gallery',
      subImages: [
        {
          img: '/assets/images/bts/bts_outdoor_dramatic_filming.webp',
          title: 'Outdoor Dramatic Location Filming',
          meta: 'Large-scale location unit shooting with natural bounce reflectors',
          tag: 'STILL FRAME #7'
        },
        {
          img: '/assets/images/bts/bts_location_unit_action.webp',
          title: 'Location Unit & Set Staging',
          meta: 'Production team orchestrating background action & daylight control',
          tag: 'STILL FRAME #8'
        }
      ],
      img: '/assets/images/bts/bts_outdoor_dramatic_filming.webp',
      title: 'Outdoor Location Filming & Set Staging',
      meta: 'Location unit shooting with natural bounce reflectors & daylight control',
      tag: 'STILL FRAME #7'
    },
    {
      type: 'video',
      videoSrc: '/assets/videos/bts/bts_clip_05_actors_scene_take.mp4',
      poster: '/assets/images/bts/bts_clip_05_actors_scene_take_poster.webp',
      title: 'Principal Ensemble Scene Take',
      meta: 'Live Performance · Fine-tuning dialogue timing and eye lines',
      tag: 'CINEMA CLIP #9'
    },
    {
      type: 'video',
      videoSrc: '/assets/videos/bts/bts_clip_06_quick_slate_action.mp4',
      poster: '/assets/images/bts/bts_clip_06_quick_slate_action_poster.webp',
      title: 'Production Slate & Scene Clap',
      meta: 'Audio-visual timecode sync prior to director roll call',
      tag: 'CINEMA CLIP #10'
    },
    {
      type: 'image',
      img: '/assets/images/bts/bts_scene_dialogue_rehearsal.webp',
      title: 'Dialogue Scene Rehearsal',
      meta: 'Pushpendra Singh breaking down screenplay nuances on location',
      tag: 'STILL FRAME #11'
    },
    {
      type: 'video',
      videoSrc: '/assets/videos/bts/bts_clip_07_lighting_pacing.mp4',
      poster: '/assets/images/bts/bts_clip_07_lighting_pacing_poster.webp',
      title: 'Atmospheric Lighting & Mood Setup',
      meta: 'Balancing volumetric haze with cinematic warm key accents',
      tag: 'CINEMA CLIP #12'
    },
    {
      type: 'image',
      img: '/assets/images/bts/bts_director_actor_blocking.webp',
      title: 'Director & Lead Talent Blocking',
      meta: 'Aligning character positioning with prime anamorphic focal plane',
      tag: 'STILL FRAME #13'
    },
    {
      type: 'video',
      videoSrc: '/assets/videos/bts/bts_clip_08_soundstage_take.mp4',
      poster: '/assets/images/bts/bts_clip_08_soundstage_take_poster.webp',
      title: 'Soundstage Master Take',
      meta: 'Overhead studio grid illumination for master sequence',
      tag: 'CINEMA CLIP #14'
    },
    {
      type: 'image',
      img: '/assets/images/bts/bts_lighting_diffuser_soundstage.webp',
      title: 'Overhead Soundstage Diffusers',
      meta: 'Soft-box grid illumination setup for interior studio sequence',
      tag: 'STILL FRAME #15'
    }
  ],

  clients: [
    'Aurum Jewels',
    'Velocity Motors',
    'Nimbus Air',
    'Lumen Mobile',
    'Kesari Chai Co.',
    'Halcyon Watches',
    'Tarang Beverages',
    'Banyan Bank',
    'D’Decor Lifestyle',
    'Azorte Fashion',
    'Reliance Jewels',
    'Ajio Luxe'
  ],

  about: {
    headingPart1: 'We see',
    headingAccent: 'cinema',
    headingPart2: 'as craft first: every frame planned, every story earned.',
    bannerImg: '/assets/images/about.png',
    p1: 'Chitralok Studios began with one camera, a tight-knit unit, and an uncompromising belief: stories from India deserve the discipline and artistic depth of world cinema. Today, we stand as a premier creative production hub headquartered in East Delhi.',
    p2: 'We are celebrated for commercial advertising that carries the soul and patience of auteur cinema, and independent productions executed with international commercial rigor. Our core directors, DoPs, sound engineers, and post-production artists collaborate like a synchronized orchestra.',
    steps: [
      { n: '01', title: 'Develop', text: 'Script treatments, storyboards, creative briefs and tone boards fine-tuned until the cinematic vision is razor sharp.' },
      { n: '02', title: 'Produce', text: 'World-class camera gear, precision lighting, casting, location scouting, and a seasoned unit executing under tight timelines.' },
      { n: '03', title: 'Deliver', text: 'Final edit, color grading, sound design, VFX, and master files—delivered polished, on-brand, and ready for every platform.' }
    ],
    leadership: [
      {
        name: 'Pushpendra Singh',
        role: 'Director, Writer and Producer',
        vision: '“Stories on screen become part of the collective consciousness when told with truth, human vulnerability, and unwavering cinematic craft.”',
        img: '/assets/images/pushpenddra_singh.webp',
        path: '/director'
      },
      {
        name: 'Pragati Chauhan',
        role: 'Actor, writer and Producer',
        vision: '“Cinema is the ultimate conduit of empathy. Breathing life into complex characters and shaping narratives from page to screen is our true calling.”',
        img: '/assets/images/cast/prragati_chauhaan.webp',
        path: '/work'
      }
    ],
    producers: [
      {
        name: 'Alok Pandey',
        // role: 'Producer',
        monogram: 'AS',
        img: '/assets/images/producers/producer_alok.webp',
        // subtitle: 'Executive Producer',
        // credit: 'S&P Chitralok Studios · Feature Film Division',
        vision: 'Championing high-impact narratives and world-class production execution that resonate across global audiences.'
      },
      {
        name: 'Pawan Kumar',
        // role: 'Producer',
        monogram: 'PS',
        img: '/assets/images/producers/producer_pawan.webp',
        // subtitle: 'Executive Producer',
        // credit: 'S&P Chitralok Studios · Production Operations',
        vision: 'Fostering cultural authenticity and cinematic scale that leaves an enduring legacy in Indian cinema.'
      },
      {
        name: 'Amod Kumar Singh',
        // role: 'Producer',
        monogram: 'AS',
        img: '/assets/images/producers/producer_amod.webp',
        // subtitle: 'Executive Producer',
        // credit: 'S&P Chitralok Studios · Creative Development',
        vision: 'Pioneering cutting-edge cinematic storytelling with unwavering dedication to craft and creative integrity.'
      },
      {
        name: 'Krishna Kant Rai',
        // role: 'Producer',
        monogram: 'KS',
        img: '/assets/images/producers/producer_krishnakant.webp',
        // subtitle: 'Executive Producer',
        // credit: 'S&P Chitralok Studios · Technical & Theatrical',
        vision: 'Driving visionary collaborations and technical excellence from script development to theatrical release.'
      },
      {
        name: 'Santanu Kumar',
        // role: 'Producer',
        monogram: 'SS',
        img: '/assets/images/producers/producer_shantanu.webp',
        // subtitle: 'Executive Producer',
        // credit: 'S&P Chitralok Studios · Audiovisual Productions',
        vision: 'Empowering fearless storytelling and groundbreaking audiovisual experiences for modern cinema lovers.'
      },
      {
        name: 'Vipul Rai',
        // role: 'Producer',
        monogram: 'VS',
        img: '/assets/images/producers/producer_vipul.webp',
        // subtitle: 'Executive Producer',
        // credit: 'S&P Chitralok Studios · Strategic Partnerships',
        vision: 'Committed to bringing transformative, socially resonant narratives to life with unmatched production value.'
      }
    ],
    directors: [
      {
        name: 'Pushpendra Singh',
        // role: 'Director',
        // subtitle: 'Television & Film Director',
        tag: 'Lead Director',
        img: '/assets/images/pushpenddra_singh.webp',
        // credit: 'Paid Palki · Aaoge Jab Tum · Sarkar (2005) · Prime-Time Epics',
        vision: 'Stories on screen become part of the collective consciousness when told with truth, human vulnerability, and unwavering cinematic craft.',
        path: '/director'
      }
    ],
    writers: [
      {
        name: 'Pushpendra Singh',
        // role: 'Writer',
        // subtitle: 'Writer & Director · Story & Screenplay',
        // tag: 'Narrative Architect',
        img: '/assets/images/pushpenddra_singh.webp',
        // credit: 'Aaoge Jab Tum (2026) · Sarkar · Television Epics',
        vision: 'Architect of high-stakes social realism and emotional narratives that bridge classic Indian literature with commercial cinema.',
        detailsPath: '/director',
        path: '/director'
      },
      {
        name: 'Prragati Chauhaan',
        img: '/assets/images/pp.jpeg',
       
        vision: 'Cinema is the ultimate conduit of empathy. Breathing life into complex characters and shaping narratives from page to screen is our true calling.',
        detailsPath: '/actor/prragati-chauhaan',
        path: '/actor/prragati-chauhaan'
      },
    ],
    actors: [
      {
        name: 'Prragati Chauhaan',
        tag: 'Lead Protagonist',
        img: '/assets/images/actress.jpg',
        // credit: 'Commercial Ads, Print Campaigns & Fashion Modeling',
        vision: 'Acting is not merely performing; it is a sacred act of stepping into the soul of another human being and defending their truth without judgment.',
        notes: 'A sheltered tribal girl who transforms into a determined woman fighting for her dignity.',
        detailsPath: '/actor/prragati-chauhaan',
        socialLinks: [
          { name: 'Instagram', url: 'https://instagram.com/counterpc?igshid=szr5kayi2v6t' },
          { name: 'YouTube', url: 'https://youtu.be/w55jPICtzK0' },
          { name: 'Facebook', url: 'https://www.facebook.com/COUNTERPC.QUEEN.OF.WANDS' },
          { name: 'IMDb', url: 'https://www.imdb.com' }
        ],
      }
    ]
  },

  director: {
    nameFirst: 'Pushpendra',
    nameLast: 'Singh',
    // born: '15 September 1981',
    // role: 'Television & Film Director',
    portraitImg: '/assets/images/pushpenddra_singh.webp',
    reelImg: '/assets/images/paid_palki_banner.webp',
    imdbUrl: 'https://www.imdb.com/name/nm9362954/',
    quote: '“Stories on screen become part of the collective consciousness when told with truth and unwavering craft.”',
    bio1: 'Pushpendra Singh is a prominent Indian Television and Film Director. He started his career in the Indian entertainment industry as an associate director on Kyaa Hoga Nimmo Kaa and served as second director on the classic Bollywood political drama Sarkar (2005) starring Amitabh Bachchan.',
    bio2: 'Following this breakthrough, Pushpendra took the directorial helm for several of the highest-rated daily series and mythological epics in Indian television history, including Kahaani Ghar Ghar Kii (2008), Kyunki Saas Bhi Kabhi Bahu Thi (2006), Kis Desh Mein Hai Meraa Dil, Kuchh Is Tara (2011), Jai Shri Krishna, Meera, Shakuntala (2008–2009), Zindagi Ki Mehek (2017), and Sarkar (TV Series).',
    bio3: 'Expanding his cinematic horizon, Pushpendra has written and directed the landmark social feature film Paid Palki, presented by S&P Chitralok Studios, alongside helming the upcoming theatrical feature film Aaoge Jab Tum (2026).',
    films: [
      {
        year: 'Post Production',
        title: 'Aaoge Jab Tum',
        kind: 'Feature Film (Director)',
        network: 'Theatrical Release',
        role: 'Director',
        img: '/assets/images/Aaoge Jab Tum_ Musical Sunset Romance (1).png'
      },
      {
        year: 'In Filming',
        title: 'Paid Palki',
        kind: 'Feature Film (Writer & Director)',
        network: 'S&P Chitralok Studios',
        role: 'Writer & Director',
        img: '/assets/images/Paid Palki_ A Rural Love Story journey.png'
      },
      {
        year: '2005',
        title: 'Sarkar (Movie)',
        kind: 'Feature Film (Second Director)',
        network: 'RGV Film Company / Theatrical',
        role: 'Second Director',
        img: '/assets/images/sarkar_movie_poster.webp'
      },
      {
        year: '2017',
        title: 'Zindagi Ki Mehek',
        kind: 'Television Series',
        network: 'Zee TV',
        role: 'Director',
        img: '/assets/images/pi6.jpg'
      },
      {
        year: '2011',
        title: 'Kuchh Is Tara',
        kind: 'Television Series',
        network: 'Sony Entertainment TV / Balaji',
        role: 'Director',
        img: '/assets/images/kuchh_is_tara.webp?v=2'
      },
      {
        year: '2009',
        title: 'Meera',
        kind: 'Mythological Series',
        network: 'NDTV Imagine / Sagar Arts',
        role: 'Director',
        img: '/assets/images/meera.webp?v=2'
      },
      {
        year: '2008–2009',
        title: 'Shakuntala',
        kind: 'Mythological Romance',
        network: 'STAR One / Sagar Arts',
        role: 'Director',
        img: '/assets/images/shakuntala.webp'
      },
      {
        year: '2008–2009',
        title: 'Jai Shri Krishna',
        kind: 'Mythological Drama',
        network: 'Colors TV / Sagar Pictures',
        role: 'Director',
        img: '/assets/images/pi1.jpg'
      },
      {
        year: '2008',
        title: 'Kahaani Ghar Ghar Kii',
        kind: 'Flagship Daily Series',
        network: 'Star Plus / Balaji Telefilms',
        role: 'Director',
        img: '/assets/images/kahaani_ghar_ghar_kii.webp'
      },
      {
        year: '2008',
        title: 'Kis Desh Mein Hai Meraa Dil',
        kind: 'Drama Series',
        network: 'Star Plus / Balaji Telefilms',
        role: 'Director',
        img: '/assets/images/pi4.jpg'
      },
      {
        year: '2006',
        title: 'Kyunki Saas Bhi Kabhi Bahu Thi',
        kind: 'Iconic Daily Drama',
        network: 'Star Plus / Balaji Telefilms',
        role: 'Director',
        img: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.webp?v=2'
      },
      {
        year: '2006',
        title: 'Sarkar',
        kind: 'Political Family Drama',
        network: 'Zee TV / Siddhant Cinevision',
        role: 'Director',
        img: '/assets/images/sarkar.webp?v=2'
      },
      {
        year: '2006',
        title: 'Kyaa Hoga Nimmo Kaa',
        kind: 'Comedy Drama Series',
        network: 'STAR One / Balaji Telefilms',
        role: 'Associate Director',
        img: '/assets/images/kyaa_hoga_nimmo_kaa.webp?v=2'
      }
    ],
    awards: [
      {
        title: 'Landmark Prime-Time Directorials',
        meta: 'Kyunki Saas Bhi Kabhi Bahu Thi & Kahaani Ghar Ghar Kii'
      },
      {
        title: 'Writer & Director, Paid Palki',
        meta: 'S&P Chitralok Studios Feature Film'
      },
      {
        title: 'Director, Zindagi Ki Mehek (2017)',
        meta: 'Zee TV Prime-Time Directorial'
      },
      {
        title: 'Mythological Canvas Direction',
        meta: 'Jai Shri Krishna · Shakuntala · Meera'
      }
    ]
  }
,

  prragatiProfile: {
    nameFirst: 'Prragati',
    nameLast: 'Chauhaan',
    // role: 'Model / Actress',
    photoSubtitle: 'Actress',
    tag: 'Professional Model & Actress',
    character: 'Kemli',
    film: 'Paid Palki',
    portraitImg: '/assets/images/actor.PNG',
    bannerImg: '/assets/images/paid_palki_banner.webp',
    stillImg: '/assets/images/bts/bts_clip_01_set_action_poster.webp',
    imdbUrl: 'https://www.imdb.com',
    socialLinks: [
      { name: 'Instagram', url: 'https://instagram.com/counterpc?igshid=szr5kayi2v6t' },
      { name: 'Facebook', url: 'https://www.facebook.com/COUNTERPC.QUEEN.OF.WANDS' },
      { name: 'IMDb', url: 'https://www.imdb.com' }
    ],
    quote: '“Acting is not merely performing; it is a sacred act of stepping into the soul of another human being and defending their truth without judgment.”',
    bio1: 'Prragati Chauhaan is an Indian actress, model, and screen narrative architect recognized for her nuanced character immersion, raw emotional gravity, and dedication to socially grounded Indian cinema. Emerging with a compelling artistic voice, she seamlessly bridges performance with narrative depth.',
    bio2: 'In the landmark social feature film "Paid Palki", presented by S&P Chitralok Studios, Prragati headlines as the central protagonist "Kemli" — a sheltered tribal girl whose transformation from vulnerability to fierce dignity forms the emotional core of the film. Beyond commanding the screen in front of the lens, Prragati co-penned the screenplay alongside director Pushpendra Singh, crafting authentic regional dialogues and profound female character arcs.',
    bio3: 'As a creative pillar and narrative lead at Chitralok Studios, Prragati champions fearless storytelling that reflects the complexities of contemporary and rural India, striving to create cinematic art that lingers in the hearts of audiences worldwide.',
    filmography: [
      {
        year: 'Purani Dili Talkies',
        title: 'Woman Judges A Girl For Being A Single Mother',
        channel: 'Purani Dili Talkies',
        kind: 'Social Drama · Short Film',
        role: 'Purani Dili Talkies',
        img: '/assets/images/pdt.png',
        desc: 'A social drama exploring prejudice, motherhood, and emotional strength.',
        videoUrl: 'https://www.youtube-nocookie.com/embed/w55jPICtzK0?autoplay=1',
        externalUrl: 'https://www.youtube.com/watch?v=w55jPICtzK0'
      },
      {
        year: 'Rohit R Gaba',
        title: 'Social Awareness & Moral Story',
        channel: 'Rohit R Gaba',
        kind: 'Social Awareness · Short Film',
        role: 'Rohit R Gaba',
        img: '/assets/images/rohitgaba.png',
        desc: 'Social awareness short film exploring relationships, integrity, and real-life values.',
        videoUrl: 'https://www.youtube-nocookie.com/embed/kUddWfYdcz0?autoplay=1',
        externalUrl: 'https://www.youtube.com/watch?v=kUddWfYdcz0'
      },
      {
        year: 'CARS24',
        title: 'CARS24 Digital Commercial',
        channel: 'CARS24',
        kind: 'Commercial · Digital Ad',
        role: 'CARS24',
        img: '/assets/images/cars24.png',
        desc: 'Commercial advertisement and digital brand campaign for CARS24.',
        externalUrl: 'https://www.instagram.com/reel/ChRUuG2p5Mv/?igshid=YmMyMTA2M2Y%3D'
      },
      {
        year: 'Nijo Jonson',
        title: "Girl Secretly Helps A Rickshaw Driver's Daughter",
        channel: 'Nijo Jonson',
        kind: 'Social Drama · Short Film',
        role: 'Nijo Jonson',
        img: '/assets/images/nijo.png',
        desc: 'An inspiring short drama of compassion, empathy, and silent empowerment.',
        videoUrl: 'https://www.youtube-nocookie.com/embed/Atv7iXHF_4Q?autoplay=1',
        externalUrl: 'https://www.youtube.com/watch?v=Atv7iXHF_4Q'
      }
    ],
    stills: [
      {
        img: '/assets/images/cast/prragati_chauhaan.webp',
        title: 'Prragati Chauhaan — Studio Portrait',
        tag: 'Lead Protagonist'
      },
      {
        img: '/assets/images/bts/bts_clip_01_set_action_poster.webp',
        title: 'On-Set Character Preparation & Styling',
        tag: 'Paid Palki BTS'
      },
      {
        img: '/assets/images/paid_palki_still.webp',
        title: 'Rural Location Production Frame',
        tag: 'Cinematic Still'
      },
      {
        img: '/assets/images/bts/bts_director_actor_blocking.webp',
        title: 'Director Pushpendra Singh & Lead Talent Blocking',
        tag: 'Set Staging'
      }
    ],
    attributes: [
      { label: 'Professional', value: 'Model / Actress' },
      { label: 'Hobbies', value: 'Music and movies' },
      { label: 'Current Location', value: 'Mumbai / Delhi' }
    ],
    characterDetails: {
      film: 'Paid Palki',
      character: 'Kemli',
      tagline: 'From Vulnerability to Unyielding Dignity',
      summary: 'Kemli is an innocent, spirited young woman from a remote tribal settlement in Madhya Pradesh. Sold under societal and economic duress, her story transforms from one of displacement into a fierce testament of love, identity, and personal liberation against the social realities of human trafficking.'
    }
  }
};
