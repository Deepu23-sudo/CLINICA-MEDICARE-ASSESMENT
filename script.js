/* =========================================================
   CLINICA MEDICARE
   2-MINUTE HAIR TEST
   COMPLETE JAVASCRIPT
   LANGUAGE: ENGLISH + PURE HINDI
   SUPABASE DATABASE INTEGRATION
========================================================= */


/* =========================================================
   SUPABASE CONFIGURATION
========================================================= */

const SUPABASE_URL =
    "https://stejywpaxavvmjkzndwh.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_KxxqH7WDzoB6aI4MuBcUpA_XAWnVr0K";

let supabaseClient = null;


/* =========================================================
   SUPABASE INITIALIZATION
========================================================= */

function initializeSupabase() {

    if (
        SUPABASE_PUBLISHABLE_KEY ===
        "sb_publishable_KxxqH7WDzoB6aI4MuBcUpA_XAWnVr0K"
    ) {

        console.warn(
            "Supabase publishable key is not configured yet."
        );

        return;

    }


    if (
        window.supabase &&
        window.supabase.createClient
    ) {

        supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_PUBLISHABLE_KEY
            );

    }

}


/* =========================================================
   LOAD SUPABASE LIBRARY
========================================================= */

function loadSupabaseScript() {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            if (
                window.supabase &&
                window.supabase.createClient
            ) {

                resolve();

                return;

            }


            const existing =
                document.querySelector(
                    'script[data-supabase-client="true"]'
                );


            if (existing) {

                existing.addEventListener(
                    "load",
                    resolve,
                    {
                        once: true
                    }
                );


                existing.addEventListener(
                    "error",
                    reject,
                    {
                        once: true
                    }
                );

                return;

            }


            const script =
                document.createElement(
                    "script"
                );


            script.src =
                "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

            script.async = true;

            script.dataset.supabaseClient =
                "true";


            script.onload =
                resolve;

            script.onerror =
                reject;


            document.head.appendChild(
                script
            );

        }
    );

}


/* =========================================================
   1. TRANSLATIONS
========================================================= */

const translations = {

    en: {

        eyebrow:
            "CLINICA MEDICARE · HAIR CARE",

        heroTitle:
            `Take the <em>2-Minute</em> Hair Test`,

        heroDescription:
            "Answer a few simple questions to understand your current hair-loss pattern and discover the next step toward a professional evaluation.",

        startTest:
            "Start Hair Test →",

        heroNote:
            "Private assessment · About 2 minutes · No product purchase required",

        visualBadge:
            "2 MINUTE ASSESSMENT",

        visualTitle:
            "Understand your hair-loss pattern.",

        visualDescription:
            "A simple guided assessment designed to help you understand your next step.",

        step1:
            "STEP 1",

        step2:
            "STEP 2",

        step3:
            "STEP 3",

        genderQuestion:
            "Which assessment would you like to take?",

        men:
            "Men",

        menDescription:
            "Male-pattern hair loss assessment",

        women:
            "Women",

        womenDescription:
            "Female-pattern hair thinning assessment",

        stageQuestion:
            "Which stage most closely matches your current hair loss?",

        photoQuestion:
            "Upload a clear photo of your scalp.",

        photoDescription:
            "Good lighting and a clear view of the hair pattern work best.",

        choosePhoto:
            "Choose Photo",

        back:
            "Back",

        continue:
            "Continue →",

        almostThere:
            "ALMOST THERE",

        leadTitle:
            "Your hair assessment is ready.",

        leadDescription:
            "Enter your details to view your personalized hair assessment and get the right next step from Clinica Medicare.",

        fullNameLabel:
            "Full Name",

        fullNamePlaceholder:
            "Enter your full name",

        whatsappLabel:
            "WhatsApp Number",

        whatsappPlaceholder:
            "Enter your WhatsApp number",

        ageLabel:
            "Age Group",

        agePlaceholder:
            "Select age group",

        cityLabel:
            "City",

        cityPlaceholder:
            "Enter your city",

        consent:
            "I agree to be contacted by Clinica Medicare regarding my hair assessment and consultation.",

        viewAssessment:
            "View My Hair Assessment →",

        assessment:
            "YOUR ASSESSMENT",

        whatMeans:
            "What this means",

        resultMeaning:
            "Based on the information provided, a professional hair evaluation may help identify the pattern and appropriate next steps.",

        whatsapp:
            "Talk to a Hair Specialist on WhatsApp →",

        disclaimer:
            "This online assessment is for guidance and does not replace a clinical diagnosis.",

        question:
            "QUESTION",

        option:
            "Option",

        stage:
            "Stage",

        invalidPhoto:
            "Please upload an image file.",

        selectStage:
            "Please select a stage first.",

        selectAnswer:
            "Please select an answer.",

        uploadPhoto:
            "Please upload a scalp photo.",

        invalidPhone:
            "Please enter a valid WhatsApp number.",

        modalTitle:
            "2-Minute Hair Test",

        modalSubtitle:
            "Let's start with a few quick details.",

        questionOf:
            "QUESTION {current} OF {total}",

        ageOptions: [
            "Under 18",
            "18–24",
            "25–34",
            "35–44",
            "45+"
        ]

    },


    hi: {

        eyebrow:
            "CLINICA MEDICARE · बालों की देखभाल",

        heroTitle:
            `<em>2 मिनट का</em> बाल परीक्षण लें`,

        heroDescription:
            "कुछ आसान सवालों के जवाब देकर अपने बालों की वर्तमान स्थिति को समझें और विशेषज्ञ से सलाह लेने के लिए अगला कदम जानें।",

        startTest:
            "बाल परीक्षण शुरू करें →",

        heroNote:
            "निजी मूल्यांकन · लगभग 2 मिनट · किसी उत्पाद को खरीदना आवश्यक नहीं",

        visualBadge:
            "2 मिनट का मूल्यांकन",

        visualTitle:
            "अपने बालों के झड़ने की स्थिति को समझें।",

        visualDescription:
            "एक आसान मार्गदर्शित मूल्यांकन जो आपको आगे का सही कदम समझने में मदद करता है।",

        step1:
            "चरण 1",

        step2:
            "चरण 2",

        step3:
            "चरण 3",

        genderQuestion:
            "आप किस प्रकार का मूल्यांकन करना चाहते हैं?",

        men:
            "पुरुष",

        menDescription:
            "पुरुषों में बाल झड़ने का मूल्यांकन",

        women:
            "महिलाएँ",

        womenDescription:
            "महिलाओं में बाल पतले होने का मूल्यांकन",

        stageQuestion:
            "आपके वर्तमान बाल झड़ने की स्थिति से कौन-सा चरण सबसे अधिक मेल खाता है?",

        photoQuestion:
            "अपने सिर की त्वचा की एक साफ तस्वीर अपलोड करें।",

        photoDescription:
            "अच्छी रोशनी और बालों की स्थिति का स्पष्ट दृश्य बेहतर मूल्यांकन में मदद करता है।",

        choosePhoto:
            "तस्वीर चुनें",

        back:
            "वापस",

        continue:
            "आगे बढ़ें →",

        almostThere:
            "बस एक कदम और",

        leadTitle:
            "आपका बाल मूल्यांकन तैयार है।",

        leadDescription:
            "अपना व्यक्तिगत बाल मूल्यांकन देखने और Clinica Medicare से आगे की उचित सलाह प्राप्त करने के लिए अपनी जानकारी भरें।",

        fullNameLabel:
            "पूरा नाम",

        fullNamePlaceholder:
            "अपना पूरा नाम लिखें",

        whatsappLabel:
            "WhatsApp नंबर",

        whatsappPlaceholder:
            "अपना WhatsApp नंबर लिखें",

        ageLabel:
            "आयु वर्ग",

        agePlaceholder:
            "आयु वर्ग चुनें",

        cityLabel:
            "शहर",

        cityPlaceholder:
            "अपने शहर का नाम लिखें",

        consent:
            "मैं सहमत हूँ कि Clinica Medicare मेरे बालों के मूल्यांकन और परामर्श के संबंध में मुझसे संपर्क कर सकता है।",

        viewAssessment:
            "मेरा बाल मूल्यांकन देखें →",

        assessment:
            "आपका मूल्यांकन",

        whatMeans:
            "इसका क्या अर्थ है",

        resultMeaning:
            "आपके द्वारा दी गई जानकारी के आधार पर विशेषज्ञ द्वारा बालों का मूल्यांकन आपकी स्थिति को समझने और आगे के उचित कदम तय करने में सहायता कर सकता है।",

        whatsapp:
            "बाल विशेषज्ञ से WhatsApp पर बात करें →",

        disclaimer:
            "यह ऑनलाइन मूल्यांकन केवल मार्गदर्शन के लिए है और चिकित्सकीय निदान का विकल्प नहीं है।",

        question:
            "सवाल",

        option:
            "विकल्प",

        stage:
            "चरण",

        invalidPhoto:
            "कृपया केवल तस्वीर अपलोड करें।",

        selectStage:
            "कृपया पहले एक चरण चुनें।",

        selectAnswer:
            "कृपया एक उत्तर चुनें।",

        uploadPhoto:
            "कृपया सिर की त्वचा की एक तस्वीर अपलोड करें।",

        invalidPhone:
            "कृपया सही WhatsApp नंबर दर्ज करें।",

        modalTitle:
            "2 मिनट का बाल परीक्षण",

        modalSubtitle:
            "आइए कुछ आसान सवालों से शुरुआत करते हैं।",

        questionOf:
            "सवाल {current} / {total}",

        ageOptions: [
            "18 वर्ष से कम",
            "18–24 वर्ष",
            "25–34 वर्ष",
            "35–44 वर्ष",
            "45 वर्ष या अधिक"
        ]

    }

};


/* =========================================================
   2. MEN STAGES
========================================================= */

const maleStages = [

    {
        stage: 1,
        image:
            "male_baldness_stage_1.png",

        en: {
            title:
                "Minimal Hair Loss",

            description:
                "The hairline appears normal with little to no visible recession. Overall hair density remains well maintained."
        },

        hi: {
            title:
                "बहुत कम बाल झड़ना",

            description:
                "बालों की रेखा सामान्य दिखाई देती है और पीछे हटने के बहुत कम या कोई स्पष्ट संकेत दिखाई नहीं देते। बालों का घनत्व सामान्य बना रहता है।"
        }
    },


    {
        stage: 2,
        image:
            "male_baldness_stage_2.png",

        en: {
            title:
                "Early Hairline Recession",

            description:
                "A mild recession may be visible around the temples and front hairline, while overall hair coverage remains good."
        },

        hi: {
            title:
                "बालों की रेखा का शुरुआती पीछे हटना",

            description:
                "कनपटी और आगे की बालों की रेखा के आसपास हल्का पीछे हटना दिखाई दे सकता है, जबकि बालों का कुल घनत्व अभी अच्छा बना रहता है।"
        }
    },


    {
        stage: 3,
        image:
            "male_baldness_stage_3.png",

        en: {
            title:
                "Noticeable Recession",

            description:
                "Recession at the temples becomes more pronounced. Early thinning may also appear around the crown."
        },

        hi: {
            title:
                "स्पष्ट रूप से पीछे हटती बालों की रेखा",

            description:
                "कनपटी के आसपास बालों की रेखा का पीछे हटना अधिक स्पष्ट दिखाई देने लगता है। सिर के ऊपरी पिछले हिस्से में बाल पतले होने की शुरुआत भी दिखाई दे सकती है।"
        }
    },


    {
        stage: 4,
        image:
            "male_baldness_stage_4.png",

        en: {
            title:
                "Advanced Recession & Crown Thinning",

            description:
                "Hairline recession becomes more noticeable, with a visible thinning area developing at the crown."
        },

        hi: {
            title:
                "बालों की रेखा का अधिक पीछे हटना और ऊपरी हिस्से में पतलापन",

            description:
                "बालों की रेखा का पीछे हटना अधिक स्पष्ट हो जाता है और सिर के ऊपरी पिछले हिस्से में बालों का एक पतला क्षेत्र दिखाई देने लगता है।"
        }
    },


    {
        stage: 5,
        image:
            "male_baldness_stage_5.png",

        en: {
            title:
                "Significant Hair Loss",

            description:
                "The thinning areas at the front and crown become larger, with noticeably reduced coverage across the top."
        },

        hi: {
            title:
                "काफी अधिक बालों का झड़ना",

            description:
                "सामने और सिर के ऊपरी हिस्से में बालों के पतले क्षेत्र बड़े होने लगते हैं और ऊपर की ओर बालों का घनत्व स्पष्ट रूप से कम दिखाई देता है।"
        }
    },


    {
        stage: 6,
        image:
            "male_baldness_stage_6.png",

        en: {
            title:
                "Extensive Hair Loss",

            description:
                "Hair loss across the front and crown has progressed substantially, leaving limited coverage across the top."
        },

        hi: {
            title:
                "व्यापक रूप से बालों का झड़ना",

            description:
                "सामने और सिर के ऊपरी पिछले हिस्से में बालों का झड़ना काफी बढ़ जाता है और सिर के ऊपरी हिस्से में बालों का घनत्व बहुत कम रह जाता है।"
        }
    },


    {
        stage: 7,
        image:
            "male_baldness_stage_7.png",

        en: {
            title:
                "Advanced Hair Loss",

            description:
                "Hair loss extends across most of the top of the scalp, with comparatively more hair remaining around the sides and back."
        },

        hi: {
            title:
                "बहुत अधिक और उन्नत बाल झड़ना",

            description:
                "सिर के ऊपरी हिस्से में अधिकांश बाल झड़ चुके होते हैं, जबकि किनारों और पीछे की ओर अपेक्षाकृत अधिक बाल बने रहते हैं।"
        }
    }

];


/* =========================================================
   3. WOMEN STAGES
========================================================= */

const femaleStages = [

    {
        stage: 1,
        image:
            "female_hair_fall_stage_1.png",

        en: {
            title:
                "Mild Thinning",

            description:
                "Hair density is largely maintained, with little to no noticeable widening of the central hair part."
        },

        hi: {
            title:
                "हल्का बाल पतलापन",

            description:
                "बालों का घनत्व काफी हद तक बना रहता है और बीच की मांग में बहुत कम या कोई स्पष्ट चौड़ापन दिखाई नहीं देता।"
        }
    },


    {
        stage: 2,
        image:
            "female_hair_fall_stage_2.png",

        en: {
            title:
                "Moderate Thinning",

            description:
                "The central hair part becomes noticeably wider, with reduced hair density and increased scalp visibility."
        },

        hi: {
            title:
                "मध्यम बाल पतलापन",

            description:
                "बीच की मांग स्पष्ट रूप से चौड़ी दिखाई देने लगती है। बालों का घनत्व कम होता है और सिर की त्वचा अधिक दिखाई देने लगती है।"
        }
    },


    {
        stage: 3,
        image:
            "female_hair_fall_stage_3.png",

        en: {
            title:
                "Advanced Thinning",

            description:
                "Thinning becomes more extensive across the crown and top of the scalp, with increased scalp visibility."
        },

        hi: {
            title:
                "अधिक बाल पतलापन",

            description:
                "सिर के ऊपरी और पिछले हिस्से में बालों का पतलापन अधिक फैल जाता है और सिर की त्वचा अधिक स्पष्ट दिखाई देती है।"
        }
    },


    {
        stage: 4,
        image:
            "female_hair_fall_stage_4.png",

        en: {
            title:
                "Advanced Diffuse Thinning",

            description:
                "Hair density is significantly reduced across the top and crown, with substantial scalp visibility."
        },

        hi: {
            title:
                "व्यापक रूप से बाल पतले होना",

            description:
                "सिर के ऊपरी और पिछले हिस्से में बालों का घनत्व काफी कम हो जाता है और सिर की त्वचा स्पष्ट रूप से दिखाई देती है।"
        }
    }

];


/* =========================================================
   4. MEN QUESTIONS - ENGLISH
========================================================= */

const menQuestions = [

    {
        question:
            "How would you describe your current hair fall?",

        options: [
            "Very little hair fall",
            "Mild hair fall",
            "Noticeable daily hair fall",
            "Heavy hair fall"
        ]
    },

    {
        question:
            "How much thinning have you noticed?",

        options: [
            "No visible thinning",
            "Slight thinning",
            "Noticeable thinning",
            "Significant thinning"
        ]
    },

    {
        question:
            "How has your hairline changed?",

        options: [
            "No change",
            "Slight recession",
            "Noticeable recession",
            "Significant recession"
        ]
    },

    {
        question:
            "How would you describe thinning at your crown?",

        options: [
            "No thinning",
            "Slight thinning",
            "Noticeable thinning",
            "Clearly visible thinning/bald area"
        ]
    },

    {
        question:
            "How long have you been experiencing hair loss?",

        options: [
            "Less than 3 months",
            "3–6 months",
            "6–12 months",
            "More than 1 year"
        ]
    },

    {
        question:
            "How has your overall hair density changed?",

        options: [
            "No noticeable change",
            "Slightly reduced",
            "Moderately reduced",
            "Significantly reduced"
        ]
    },

    {
        question:
            "Is there a family history of hair loss?",

        options: [
            "No family history",
            "One family member",
            "Multiple family members",
            "Strong family history"
        ]
    },

    {
        question:
            "How would you describe your scalp condition?",

        options: [
            "Normal and healthy",
            "Mild dandruff/flaking",
            "Frequent dandruff or itching",
            "Persistent scalp irritation/itching"
        ]
    },

    {
        question:
            "Have you recently experienced significant stress?",

        options: [
            "No significant stress",
            "Mild stress",
            "Moderate stress",
            "High or prolonged stress"
        ]
    },

    {
        question:
            "Have you chemically treated your hair?",

        options: [
            "Never",
            "Occasionally",
            "Frequently",
            "Very frequently"
        ]
    },

    {
        question:
            "How would you describe your current hair thickness?",

        options: [
            "Thick and healthy",
            "Slightly thinner",
            "Noticeably thin",
            "Very thin with visible scalp"
        ]
    },

    {
        question:
            "What is your main hair concern?",

        options: [
            "Excessive hair fall",
            "Receding hairline",
            "Crown thinning",
            "Overall hair thinning"
        ]
    }

];


/* =========================================================
   5. WOMEN QUESTIONS - ENGLISH
========================================================= */

const womenQuestions = [

    {
        question:
            "How would you describe your current hair fall?",

        options: [
            "Very little hair fall",
            "Mild hair fall",
            "Noticeable daily hair fall",
            "Heavy hair fall"
        ]
    },

    {
        question:
            "How much thinning have you noticed along your hair parting?",

        options: [
            "No visible thinning",
            "Slight widening",
            "Noticeable widening",
            "Significant widening with visible scalp"
        ]
    },

    {
        question:
            "How has your overall hair density changed?",

        options: [
            "No noticeable change",
            "Slightly reduced",
            "Moderately reduced",
            "Significantly reduced"
        ]
    },

    {
        question:
            "Have you noticed increased scalp visibility?",

        options: [
            "Not at all",
            "Slightly",
            "Noticeably",
            "Very noticeably"
        ]
    },

    {
        question:
            "How long have you been experiencing hair loss or thinning?",

        options: [
            "Less than 3 months",
            "3–6 months",
            "6–12 months",
            "More than 1 year"
        ]
    },

    {
        question:
            "How would you describe your hair thickness compared with before?",

        options: [
            "No change",
            "Slightly thinner",
            "Noticeably thinner",
            "Much thinner"
        ]
    },

    {
        question:
            "Does hair loss run in your family?",

        options: [
            "No known family history",
            "One family member",
            "Multiple family members",
            "Strong family history"
        ]
    },

    {
        question:
            "How would you describe your scalp condition?",

        options: [
            "Normal and healthy",
            "Mild dandruff/flaking",
            "Frequent dandruff or itching",
            "Persistent irritation or itching"
        ]
    },

    {
        question:
            "Have you recently experienced significant stress or lifestyle changes?",

        options: [
            "No significant changes",
            "Mild changes",
            "Moderate changes",
            "Major/prolonged changes"
        ]
    },

    {
        question:
            "Have you experienced any major hormonal or life changes recently?",

        options: [
            "No major changes",
            "Minor changes",
            "Significant changes",
            "Not sure"
        ]
    },

    {
        question:
            "How would you describe the amount of hair you lose while washing or brushing?",

        options: [
            "Very little",
            "Slightly more than before",
            "Noticeably more than before",
            "A large amount"
        ]
    },

    {
        question:
            "What is your main hair concern?",

        options: [
            "Excessive hair fall",
            "Overall thinning",
            "Widening hair parting",
            "Reduced hair density"
        ]
    }

];


/* =========================================================
   6. MEN QUESTIONS - HINDI
========================================================= */

const hindiMenQuestions = [

    {
        question:
            "आप अपने वर्तमान बाल झड़ने को कैसे बताएँगे?",

        options: [
            "बहुत कम बाल झड़ना",
            "हल्के बाल झड़ना",
            "रोज़ाना ध्यान देने योग्य बाल झड़ना",
            "बहुत अधिक बाल झड़ना"
        ]
    },

    {
        question:
            "आपने बालों के पतले होने को कितना महसूस किया है?",

        options: [
            "कोई स्पष्ट पतलापन नहीं",
            "हल्का पतलापन",
            "ध्यान देने योग्य पतलापन",
            "काफी अधिक पतलापन"
        ]
    },

    {
        question:
            "आपकी बालों की रेखा में क्या बदलाव आया है?",

        options: [
            "कोई बदलाव नहीं",
            "हल्का पीछे हटना",
            "ध्यान देने योग्य पीछे हटना",
            "काफी अधिक पीछे हटना"
        ]
    },

    {
        question:
            "सिर के ऊपरी पिछले हिस्से में बालों का पतलापन कैसा है?",

        options: [
            "कोई पतलापन नहीं",
            "हल्का पतलापन",
            "ध्यान देने योग्य पतलापन",
            "स्पष्ट रूप से पतला या खाली क्षेत्र"
        ]
    },

    {
        question:
            "आप कितने समय से बाल झड़ने की समस्या महसूस कर रहे हैं?",

        options: [
            "3 महीने से कम",
            "3 से 6 महीने",
            "6 से 12 महीने",
            "1 वर्ष से अधिक"
        ]
    },

    {
        question:
            "आपके बालों के कुल घनत्व में क्या बदलाव आया है?",

        options: [
            "कोई ध्यान देने योग्य बदलाव नहीं",
            "थोड़ा कम हुआ है",
            "मध्यम रूप से कम हुआ है",
            "काफी कम हुआ है"
        ]
    },

    {
        question:
            "क्या आपके परिवार में बाल झड़ने की समस्या रही है?",

        options: [
            "परिवार में ऐसा कोई इतिहास नहीं",
            "एक परिवार के सदस्य में",
            "कई परिवार के सदस्यों में",
            "परिवार में इसकी मजबूत प्रवृत्ति है"
        ]
    },

    {
        question:
            "आप अपने सिर की त्वचा की स्थिति को कैसे बताएँगे?",

        options: [
            "सामान्य और स्वस्थ",
            "हल्की रूसी या परतें",
            "बार-बार रूसी या खुजली",
            "लगातार जलन या खुजली"
        ]
    },

    {
        question:
            "क्या आपने हाल में काफी तनाव महसूस किया है?",

        options: [
            "कोई महत्वपूर्ण तनाव नहीं",
            "हल्का तनाव",
            "मध्यम तनाव",
            "बहुत अधिक या लंबे समय से तनाव"
        ]
    },

    {
        question:
            "क्या आपने अपने बालों पर रासायनिक उपचार करवाया है?",

        options: [
            "कभी नहीं",
            "कभी-कभी",
            "अक्सर",
            "बहुत अधिक बार"
        ]
    },

    {
        question:
            "आपके वर्तमान बालों की मोटाई कैसी है?",

        options: [
            "घने और स्वस्थ",
            "थोड़े पतले",
            "ध्यान देने योग्य रूप से पतले",
            "बहुत पतले और सिर की त्वचा दिखाई देती है"
        ]
    },

    {
        question:
            "आपकी मुख्य बालों से जुड़ी चिंता क्या है?",

        options: [
            "बहुत अधिक बाल झड़ना",
            "बालों की रेखा का पीछे हटना",
            "सिर के ऊपरी पिछले हिस्से में बाल पतले होना",
            "पूरे सिर में बाल पतले होना"
        ]
    }

];


/* =========================================================
   7. WOMEN QUESTIONS - HINDI
========================================================= */

const hindiWomenQuestions = [

    {
        question:
            "आप अपने वर्तमान बाल झड़ने को कैसे बताएँगी?",

        options: [
            "बहुत कम बाल झड़ना",
            "हल्के बाल झड़ना",
            "रोज़ाना ध्यान देने योग्य बाल झड़ना",
            "बहुत अधिक बाल झड़ना"
        ]
    },

    {
        question:
            "बीच की मांग के आसपास आपने बालों के पतले होने को कितना महसूस किया है?",

        options: [
            "कोई स्पष्ट पतलापन नहीं",
            "हल्का चौड़ापन",
            "ध्यान देने योग्य चौड़ापन",
            "काफी अधिक चौड़ापन और सिर की त्वचा दिखाई देना"
        ]
    },

    {
        question:
            "आपके बालों के कुल घनत्व में क्या बदलाव आया है?",

        options: [
            "कोई ध्यान देने योग्य बदलाव नहीं",
            "थोड़ा कम हुआ है",
            "मध्यम रूप से कम हुआ है",
            "काफी कम हुआ है"
        ]
    },

    {
        question:
            "क्या आपको सिर की त्वचा पहले की तुलना में अधिक दिखाई देती है?",

        options: [
            "बिल्कुल नहीं",
            "थोड़ी",
            "ध्यान देने योग्य रूप से",
            "बहुत अधिक"
        ]
    },

    {
        question:
            "आप कितने समय से बाल झड़ने या पतले होने की समस्या महसूस कर रही हैं?",

        options: [
            "3 महीने से कम",
            "3 से 6 महीने",
            "6 से 12 महीने",
            "1 वर्ष से अधिक"
        ]
    },

    {
        question:
            "पहले की तुलना में आपके बालों की मोटाई कैसी है?",

        options: [
            "कोई बदलाव नहीं",
            "थोड़े पतले",
            "ध्यान देने योग्य रूप से पतले",
            "बहुत अधिक पतले"
        ]
    },

    {
        question:
            "क्या आपके परिवार में बाल झड़ने की समस्या रही है?",

        options: [
            "परिवार में ऐसा कोई ज्ञात इतिहास नहीं",
            "एक परिवार के सदस्य में",
            "कई परिवार के सदस्यों में",
            "परिवार में इसकी मजबूत प्रवृत्ति है"
        ]
    },

    {
        question:
            "आप अपने सिर की त्वचा की स्थिति को कैसे बताएँगी?",

        options: [
            "सामान्य और स्वस्थ",
            "हल्की रूसी या परतें",
            "बार-बार रूसी या खुजली",
            "लगातार जलन या खुजली"
        ]
    },

    {
        question:
            "क्या आपने हाल में काफी तनाव या जीवनशैली में बदलाव महसूस किया है?",

        options: [
            "कोई महत्वपूर्ण बदलाव नहीं",
            "हल्के बदलाव",
            "मध्यम बदलाव",
            "बड़े या लंबे समय से बदलाव"
        ]
    },

    {
        question:
            "क्या हाल में आपके जीवन या हार्मोन से जुड़े कोई बड़े बदलाव हुए हैं?",

        options: [
            "कोई बड़ा बदलाव नहीं",
            "छोटे बदलाव",
            "महत्वपूर्ण बदलाव",
            "पता नहीं"
        ]
    },

    {
        question:
            "बाल धोते या कंघी करते समय बाल झड़ने की मात्रा कैसी है?",

        options: [
            "बहुत कम",
            "पहले से थोड़ी अधिक",
            "पहले से काफी अधिक",
            "बहुत अधिक"
        ]
    },

    {
        question:
            "आपकी मुख्य बालों से जुड़ी चिंता क्या है?",

        options: [
            "बहुत अधिक बाल झड़ना",
            "पूरे सिर में बाल पतले होना",
            "बीच की मांग का चौड़ा होना",
            "बालों का कुल घनत्व कम होना"
        ]
    }

];


/* =========================================================
   8. STATE
========================================================= */

const state = {

    language:
        "en",

    gender:
        null,

    selectedStage:
        null,

    questionIndex:
        0,

    answers:
        [],

    scalpPhoto:
        null

};


/* =========================================================
   9. HELPERS
========================================================= */

function getElement(
    id
) {

    return document.getElementById(
        id
    );

}


function translate(
    key
) {

    return (
        translations[
            state.language
        ]?.[key] ||
        translations.en[key] ||
        key
    );

}


function getCurrentStages() {

    return state.gender === "women"
        ? femaleStages
        : maleStages;

}


function getCurrentQuestions() {

    const questions =
        state.gender === "women"
            ? (
                state.language === "hi"
                    ? hindiWomenQuestions
                    : womenQuestions
            )
            : (
                state.language === "hi"
                    ? hindiMenQuestions
                    : menQuestions
            );

    // Keep the assessment concise: 7 questions + 1 stage-selection question.
    return questions.slice(0, 7);

}


function getLocalizedStage(
    stage
) {

    return (
        stage[
            state.language
        ] ||
        stage.en
    );

}


/* =========================================================
   10. LANGUAGE
========================================================= */

function applyLanguage() {

    document.documentElement.lang =
        state.language === "hi"
            ? "hi"
            : "en";


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            element => {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                const value =
                    translations[
                        state.language
                    ][key];


                if (value) {

                    element.innerHTML =
                        value;

                }

            }
        );


    document
        .querySelectorAll(
            "[data-placeholder]"
        )
        .forEach(
            input => {

                const key =
                    input.getAttribute(
                        "data-placeholder"
                    );


                const value =
                    translations[
                        state.language
                    ][key];


                if (value) {

                    input.placeholder =
                        value;

                }

            }
        );


    document
        .querySelectorAll(
            ".language-btn"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.language ===
                    state.language
                );

            }
        );


    updateAgeOptions();

    updateModalHeader();


    if (state.gender) {

        renderStages();

        renderQuestion();

    }

}


/* =========================================================
   11. LANGUAGE BUTTONS
========================================================= */

document
    .querySelectorAll(
        ".language-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    state.language =
                        button.dataset.language;

                    applyLanguage();

                }
            );

        }
    );


/* =========================================================
   12. AGE OPTIONS
========================================================= */

function updateAgeOptions() {

    const ageSelect =
        getElement(
            "ageGroup"
        ) ||
        getElement(
            "age"
        );


    if (!ageSelect) return;


    const currentValue =
        ageSelect.value;


    const placeholder =
        state.language === "hi"
            ? "आयु वर्ग चुनें"
            : "Select age group";


    ageSelect.innerHTML =
        "";


    const placeholderOption =
        document.createElement(
            "option"
        );


    placeholderOption.value =
        "";

    placeholderOption.textContent =
        placeholder;

    placeholderOption.disabled =
        true;

    placeholderOption.selected =
        !currentValue;


    ageSelect.appendChild(
        placeholderOption
    );


    translations[
        state.language
    ]
        .ageOptions
        .forEach(
            (
                age,
                index
            ) => {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    String(
                        index + 1
                    );


                option.textContent =
                    age;


                if (
                    currentValue ===
                    String(
                        index + 1
                    )
                ) {

                    option.selected =
                        true;

                }


                ageSelect.appendChild(
                    option
                );

            }
        );

}


/* =========================================================
   13. MODAL
========================================================= */

const hairTestModal =
    getElement(
        "hairTestModal"
    );


function openHairTest() {

    if (!hairTestModal) return;


    hairTestModal.classList.add(
        "active"
    );


    hairTestModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    resetHairTest();

    showStep(
        0
    );

}


function closeHairTest() {

    if (!hairTestModal) return;


    hairTestModal.classList.remove(
        "active"
    );


    hairTestModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


const startHairTest =
    getElement(
        "startHairTest"
    );


if (startHairTest) {

    startHairTest.addEventListener(
        "click",
        openHairTest
    );

}


const closeHairTestButton =
    getElement(
        "closeHairTest"
    );


if (
    closeHairTestButton
) {

    closeHairTestButton.addEventListener(
        "click",
        closeHairTest
    );

}


if (hairTestModal) {

    hairTestModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                hairTestModal
            ) {

                closeHairTest();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeHairTest();

        }

    }
);


/* =========================================================
   14. MODAL HEADER
========================================================= */

function updateModalHeader() {

    const title =
        getElement(
            "hairTestTitle"
        );


    const subtitle =
        getElement(
            "hairTestSubtitle"
        );


    if (title) {

        title.textContent =
            translate(
                "modalTitle"
            );

    }


    if (subtitle) {

        subtitle.textContent =
            translate(
                "modalSubtitle"
            );

    }

}


/* =========================================================
   15. SHOW STEP
========================================================= */

function showStep(
    stepIndex
) {

    const steps =
        document.querySelectorAll(
            ".test-step"
        );


    steps.forEach(
        step => {

            step.classList.toggle(
                "active",
                Number(
                    step.dataset.step
                ) ===
                stepIndex
            );

        }
    );


    const progressBar =
        getElement(
            "progressBar"
        );


    if (progressBar) {

        const percentage =
            (
                stepIndex /
                5
            ) *
            100;


        progressBar.style.width =
            `${percentage}%`;

    }


    const modalStepLabel =
        getElement(
            "modalStepLabel"
        );


    if (
        modalStepLabel
    ) {

        if (
            stepIndex <= 4
        ) {

            modalStepLabel.textContent =
                state.language === "hi"
                    ? `चरण ${stepIndex + 1}`
                    : `STEP ${stepIndex + 1}`;

        } else {

            modalStepLabel.textContent =
                state.language === "hi"
                    ? "परिणाम"
                    : "RESULT";

        }

    }

}


/* =========================================================
   16. GENDER SELECTION
========================================================= */

document
    .querySelectorAll(
        ".gender-choice"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    state.gender =
                        button.dataset.gender;


                    state.selectedStage =
                        null;

                    state.questionIndex =
                        0;

                    state.answers =
                        [];


                    document
                        .querySelectorAll(
                            ".gender-choice"
                        )
                        .forEach(
                            item => {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                    button.classList.add(
                        "selected"
                    );


                    renderStages();

                    showStep(
                        1
                    );

                }
            );

        }
    );


/* =========================================================
   17. STAGE RENDER
========================================================= */

function renderStages() {

    const stageGrid =
        getElement(
            "stageGrid"
        );


    if (!stageGrid) return;


    stageGrid.innerHTML =
        "";


    const stages =
        getCurrentStages();


    stages.forEach(
        stage => {

            const localized =
                getLocalizedStage(
                    stage
                );


            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";

            card.className =
                "stage-card";


            card.dataset.stage =
                stage.stage;


            card.innerHTML = `

                <div class="stage-card-content">

                    <span class="stage-number">
                        ${translate("stage")} ${stage.stage}
                    </span>

                    <h4>
                        ${localized.title}
                    </h4>

                </div>

                <div class="stage-image-wrap">

                    <img
                        src="${stage.image}"
                        alt="${localized.title}"
                        class="stage-image"
                    >

                </div>

            `;


            if (
                Number(
                    state.selectedStage
                ) ===
                stage.stage
            ) {

                card.classList.add(
                    "selected"
                );

            }


            card.addEventListener(
                "click",
                () => {

                    state.selectedStage =
                        stage.stage;


                    stageGrid
                        .querySelectorAll(
                            ".stage-card"
                        )
                        .forEach(
                            item => {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                    card.classList.add(
                        "selected"
                    );

                    // Move forward automatically after the user chooses a stage.
                    window.setTimeout(() => {
                        showStep(2);
                    }, 180);

                }
            );


            stageGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   18. STAGE CONTINUE
========================================================= */

const stageContinue =
    getElement(
        "stageContinue"
    );


if (stageContinue) {

    stageContinue.addEventListener(
        "click",
        () => {

            if (
                !state.selectedStage
            ) {

                alert(
                    translate(
                        "selectStage"
                    )
                );

                return;

            }


            showStep(
                2
            );

        }
    );

}


/* =========================================================
   19. SCALP PHOTO
========================================================= */

const scalpPhoto =
    getElement(
        "scalpPhoto"
    );


if (scalpPhoto) {

    scalpPhoto.addEventListener(
        "change",
        event => {

            const file =
                event.target.files?.[0];


            if (!file) {

                return;

            }


            if (
                !file.type.startsWith(
                    "image/"
                )
            ) {

                alert(
                    translate(
                        "invalidPhoto"
                    )
                );


                event.target.value =
                    "";


                return;

            }


            state.scalpPhoto =
                file;


            const preview =
                getElement(
                    "photoPreview"
                );


            if (preview) {

                if (
                    preview.dataset.objectUrl
                ) {

                    URL.revokeObjectURL(
                        preview.dataset.objectUrl
                    );

                }


                const objectUrl =
                    URL.createObjectURL(
                        file
                    );


                preview.dataset.objectUrl =
                    objectUrl;


                preview.src =
                    objectUrl;


                preview.style.display =
                    "block";


                preview.classList.add(
                    "visible"
                );

            }

        }
    );

}


/* =========================================================
   20. PHOTO CONTINUE
========================================================= */

const photoContinue =
    getElement(
        "photoContinue"
    );


if (photoContinue) {

    photoContinue.addEventListener(
        "click",
        () => {

            if (
                !state.scalpPhoto
            ) {

                alert(
                    translate(
                        "uploadPhoto"
                    )
                );

                return;

            }


            state.questionIndex =
                0;

            state.answers =
                [];


            renderQuestion();

            showStep(
                3
            );

        }
    );

}


/* =========================================================
   21. QUESTION RENDER
========================================================= */

function renderQuestion() {

    const questions =
        getCurrentQuestions();


    const current =
        questions[
            state.questionIndex
        ];


    if (!current) {

        return;

    }


    const questionText =
        getElement(
            "questionText"
        );


    const questionCounter =
        getElement(
            "questionCounter"
        );


    const answerGrid =
        getElement(
            "answerGrid"
        );


    if (questionText) {

        questionText.textContent =
            current.question;

    }


    if (questionCounter) {

        questionCounter.textContent =
            translate(
                "questionOf"
            )
                .replace(
                    "{current}",
                    state.questionIndex + 1
                )
                .replace(
                    "{total}",
                    questions.length
                );

    }


    if (!answerGrid) {

        return;

    }


    answerGrid.innerHTML =
        "";


    current.options.forEach(
        (
            option,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "choice-card";


            button.innerHTML = `

                <span class="choice-index">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="choice-text">
                    ${option}
                </span>

            `;


            if (
                Number(
                    state.answers[
                        state.questionIndex
                    ]
                ) ===
                index + 1
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    state.answers[
                        state.questionIndex
                    ] =
                        index + 1;


                    answerGrid
                        .querySelectorAll(
                            ".choice-card"
                        )
                        .forEach(
                            card => {
                                card.classList.remove(
                                    "selected"
                                );
                            }
                        );


                    button.classList.add(
                        "selected"
                    );

                    // No Continue button needed: move to the next question automatically.
                    window.setTimeout(() => {

                        const totalQuestions =
                            getCurrentQuestions().length;


                        if (
                            state.questionIndex <
                            totalQuestions - 1
                        ) {

                            state.questionIndex++;
                            renderQuestion();
                            showStep(3);

                            return;

                        }

                        showStep(4);

                    }, 180);

                }
            );


            answerGrid.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   22. QUESTION CONTINUE
   Kept in the DOM for compatibility, but the assessment now
   advances automatically when an option is selected.
========================================================= */

const questionContinue =
    getElement(
        "questionContinue"
    );


if (questionContinue) {

    questionContinue.addEventListener(
        "click",
        () => {

            if (
                !state.answers[
                    state.questionIndex
                ]
            ) {

                alert(
                    translate(
                        "selectAnswer"
                    )
                );

                return;

            }


            const totalQuestions =
                getCurrentQuestions()
                    .length;


            if (
                state.questionIndex <
                totalQuestions - 1
            ) {

                state.questionIndex++;
                renderQuestion();
                showStep(3);
                return;

            }

            showStep(4);

        }
    );

}


/* =========================================================
   23. QUESTION BACK
========================================================= */

const questionBack =
    getElement(
        "questionBack"
    );


if (questionBack) {

    questionBack.addEventListener(
        "click",
        () => {

            if (
                state.questionIndex >
                0
            ) {

                state.questionIndex--;

                renderQuestion();

                showStep(
                    3
                );

                return;

            }


            showStep(
                2
            );

        }
    );

}


/* =========================================================
   24. GENERAL BACK BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-back-step]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const targetStep =
                        Number(
                            button.dataset.backStep
                        );


                    showStep(
                        targetStep
                    );

                }
            );

        }
    );


/* =========================================================
   25. LEAD FORM
========================================================= */

const leadForm =
    getElement(
        "leadForm"
    );


if (leadForm) {

    leadForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const form =
                event.currentTarget;


            if (
                !form.checkValidity()
            ) {

                form.reportValidity();

                return;

            }


            const phone =
                getElement(
                    "whatsappNumber"
                )?.value
                    .trim() || "";


            const cleanedPhone =
                phone.replace(
                    /[^\d]/g,
                    ""
                );


            if (
                cleanedPhone.length <
                10
            ) {

                alert(
                    translate(
                        "invalidPhone"
                    )
                );

                return;

            }


            const submitButton =
                form.querySelector(
                    'button[type="submit"]'
                );


            if (submitButton) {

                submitButton.disabled =
                    true;


                submitButton.dataset.originalText =
                    submitButton.textContent;


                submitButton.textContent =
                    state.language === "hi"
                        ? "सहेजा जा रहा है..."
                        : "Saving...";

            }


            try {

                await saveAssessmentToSupabase();

                showResult();

            } catch (
                error
            ) {

                console.error(
                    "Supabase assessment save failed:",
                    error
                );


                alert(
                    state.language === "hi"
                        ? "जानकारी सहेजी नहीं जा सकी। कृपया दोबारा प्रयास करें।"
                        : "Your information could not be saved. Please try again."
                );

            } finally {

                if (submitButton) {

                    submitButton.disabled =
                        false;


                    submitButton.textContent =
                        submitButton.dataset.originalText ||
                        submitButton.textContent;

                }

            }

        }
    );

}


/* =========================================================
   26. PROVISIONAL ASSESSMENT
========================================================= */

function calculateAssessmentStage() {

    const stages =
        getCurrentStages();


    const maxStage =
        stages.length;


    const scores =
        state.answers.map(
            Number
        );


    if (
        !scores.length
    ) {

        return 1;

    }


    const average =
        scores.reduce(
            (
                total,
                score
            ) => {

                return total +
                    score;

            },
            0
        ) /
        scores.length;


    let calculatedStage =
        Math.round(
            average
        );


    calculatedStage =
        Math.max(
            1,
            Math.min(
                maxStage,
                calculatedStage
            )
        );


    /*
       Selected visual stage is only
       supporting information.
    */

    if (
        state.selectedStage &&
        Math.abs(
            calculatedStage -
            state.selectedStage
        ) >= 3
    ) {

        calculatedStage =
            Math.round(
                (
                    calculatedStage +
                    state.selectedStage
                ) / 2
            );

    }


    return Math.max(
        1,
        Math.min(
            maxStage,
            calculatedStage
        )
    );

}


/* =========================================================
   27. SAVE ASSESSMENT TO SUPABASE
========================================================= */

async function saveAssessmentToSupabase() {

    /*
       If Supabase key has not been added,
       don't block the demo.
    */

    if (
        !supabaseClient
    ) {

        console.warn(
            "Supabase is not configured. Assessment will continue without database save."
        );

        return true;

    }


    const finalStage =
        calculateAssessmentStage();


    const questions =
        getCurrentQuestions();


    /*
       Store every answer as:
       question_1: 1
       question_2: 3
       etc.
    */

    const answers =
        state.answers.reduce(
            (
                result,
                answer,
                index
            ) => {

                result[
                    `question_${index + 1}`
                ] =
                    Number(
                        answer
                    );


                return result;

            },
            {}
        );


    /*
       Question 12 is the
       main concern.
    */

    const mainConcern =
        questions[
            questions.length - 1
        ]?.options?.[
            Number(
                state.answers[
                    questions.length - 1
                ]
            ) - 1
        ] || null;


    const ageElement =
        getElement(
            "ageGroup"
        ) ||
        getElement(
            "age"
        );


    /*
       Payload matches your
       Hair Assessment table.
    */

    const payload = {

        full_name:
            getElement(
                "fullName"
            )?.value.trim() ||
            null,


        whatsapp_number:
            getElement(
                "whatsappNumber"
            )?.value.trim() ||
            null,


        age_group:
            ageElement?.value ||
            null,


        city:
            getElement(
                "city"
            )?.value.trim() ||
            null,


        gender:
            state.gender ||
            null,


        selected_stage:
            state.selectedStage ||
            null,


        assessment_score:
            finalStage,


        answers:
            answers,


        scalp_photo:
            state.scalpPhoto?.name ||
            null,


        consent:
            Boolean(
                getElement(
                    "consent"
                )?.checked
            ),


        main_concern:
            mainConcern

    };


    console.log(
        "Hair Assessment Payload:",
        payload
    );


    const {
        error
    } =
        await supabaseClient
            .from(
                "Hair Assessment"
            )
            .insert(
                [
                    payload
                ]
            );


    if (error) {

        console.error(
            "Supabase assessment save failed:",
            error
        );


        throw error;

    }


    console.log(
        "Hair assessment saved successfully."
    );


    return true;

}


/* =========================================================
   28. SHOW RESULT
========================================================= */

function showResult() {

    const finalStage =
        calculateAssessmentStage();


    const stages =
        getCurrentStages();


    const result =
        stages[
            finalStage - 1
        ];


    if (!result) {

        return;

    }


    const localized =
        getLocalizedStage(
            result
        );


    const resultStage =
        getElement(
            "resultStage"
        );


    if (resultStage) {

        resultStage.textContent =
            `${translate(
                "stage"
            )} ${finalStage}`;

    }


    const resultTitle =
        getElement(
            "resultTitle"
        );


    if (resultTitle) {

        resultTitle.textContent =
            localized.title;

    }


    const resultDescription =
        getElement(
            "resultDescription"
        );


    if (
        resultDescription
    ) {

        resultDescription.textContent =
            localized.description;

    }


    /*
       Premium assessment report details
    */
    const fullName =
        getElement("fullName")?.value.trim() ||
        (state.language === "hi" ? "आपका मूल्यांकन" : "Your Assessment");

    const resultPatientName =
        getElement("resultPatientName");

    if (resultPatientName) {
        resultPatientName.textContent =
            state.language === "hi"
                ? fullName
                : fullName;
    }

    const resultType =
        getElement("resultType");

    if (resultType) {
        resultType.textContent =
            state.gender === "women"
                ? (state.language === "hi" ? "महिला पैटर्न हेयर लॉस" : "Female Pattern Hair Loss")
                : (state.language === "hi" ? "पुरुष पैटर्न हेयर लॉस" : "Male Pattern Hair Loss");
    }

    const resultImage =
        getElement("resultImage");

    if (resultImage) {
        resultImage.src = result.image || "";
        resultImage.alt =
            state.language === "hi"
                ? `${translate("stage")} ${finalStage} - बाल झड़ने का आकलन`
                : `Stage ${finalStage} hair loss assessment`;
    }

    const resultSummaryTitle =
        getElement("resultSummaryTitle");

    const resultSummaryText =
        getElement("resultSummaryText");

    const resultMeaningText =
        getElement("resultMeaningText");

    if (resultSummaryTitle) {
        resultSummaryTitle.textContent =
            state.language === "hi"
                ? `आपका वर्तमान पैटर्न: ${localized.title}`
                : `Your current pattern: ${localized.title}`;
    }

    if (resultSummaryText) {
        resultSummaryText.textContent =
            localized.description;
    }

    if (resultMeaningText) {
        resultMeaningText.textContent =
            state.language === "hi"
                ? "यह ऑनलाइन आकलन आपके दिए गए उत्तरों और चुने गए स्टेज के आधार पर एक प्रारंभिक संकेत देता है। यह क्लिनिकल डायग्नोसिस नहीं है।"
                : "This online assessment provides an initial indication based on your responses and selected stage. It is not a clinical diagnosis.";
    }


    /*
       WhatsApp Message
    */

    const message =
        state.language === "hi"

            ? `नमस्ते Clinica Medicare, मैंने 2 मिनट का बाल परीक्षण पूरा किया है। मेरा मूल्यांकन चरण ${finalStage} है। मैं बाल विशेषज्ञ से सलाह लेना चाहता/चाहती हूँ।`

            : `Hi Clinica Medicare, I completed the 2-Minute Hair Test. My assessment is Stage ${finalStage}. I would like to speak with a hair specialist.`;


    const encodedMessage =
        encodeURIComponent(
            message
        );


    const whatsappLink =
        getElement(
            "whatsappLink"
        );


    if (whatsappLink) {

        whatsappLink.href =
            `https://wa.me/917049271066?text=${encodedMessage}`;

    }


    showStep(
        5
    );

}


/* =========================================================
   29. RESET TEST
========================================================= */

function resetHairTest() {

    state.gender =
        null;


    state.selectedStage =
        null;


    state.questionIndex =
        0;


    state.answers =
        [];


    state.scalpPhoto =
        null;


    const photoInput =
        getElement(
            "scalpPhoto"
        );


    const photoPreview =
        getElement(
            "photoPreview"
        );


    if (photoInput) {

        photoInput.value =
            "";

    }


    if (photoPreview) {

        if (
            photoPreview.dataset.objectUrl
        ) {

            URL.revokeObjectURL(
                photoPreview.dataset.objectUrl
            );


            delete photoPreview.dataset.objectUrl;

        }


        photoPreview.src =
            "";


        photoPreview.style.display =
            "none";


        photoPreview.classList.remove(
            "visible"
        );

    }


    document
        .querySelectorAll(
            ".gender-choice"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "selected"
                );

            }
        );


    const stageGrid =
        getElement(
            "stageGrid"
        );


    if (stageGrid) {

        stageGrid.innerHTML =
            "";

    }


    const answerGrid =
        getElement(
            "answerGrid"
        );


    if (answerGrid) {

        answerGrid.innerHTML =
            "";

    }


    const resultStage =
        getElement(
            "resultStage"
        );


    if (resultStage) {

        resultStage.textContent =
            "";

    }


    const resultTitle =
        getElement(
            "resultTitle"
        );


    if (resultTitle) {

        resultTitle.textContent =
            "";

    }


    const resultDescription =
        getElement(
            "resultDescription"
        );


    if (
        resultDescription
    ) {

        resultDescription.textContent =
            "";

    }

    const resultPatientName = getElement("resultPatientName");
    if (resultPatientName) resultPatientName.textContent = "";

    const resultImage = getElement("resultImage");
    if (resultImage) resultImage.removeAttribute("src");

    const resultSummaryTitle = getElement("resultSummaryTitle");
    if (resultSummaryTitle) resultSummaryTitle.textContent = "";

    const resultSummaryText = getElement("resultSummaryText");
    if (resultSummaryText) resultSummaryText.textContent = "";

    const resultMeaningText = getElement("resultMeaningText");
    if (resultMeaningText) resultMeaningText.textContent = "";

}


/* =========================================================
   30. INITIALIZE
========================================================= */

async function initializeHairTest() {

    /*
       Load Supabase before
       the assessment starts.
    */

    try {

        await loadSupabaseScript();

        initializeSupabase();

    } catch (
        error
    ) {

        console.error(
            "Supabase library could not be loaded:",
            error
        );

    }


    state.language =
        "en";


    applyLanguage();


    showStep(
        0
    );

}


initializeHairTest();
/* =========================================================
   CLINICA MEDICARE - SUPABASE DATABASE CONNECTION
========================================================= */

const CM_SUPABASE_URL =
    "https://stejywpaxavvmjkzndwh.supabase.co";

const CM_SUPABASE_KEY =
    "sb_publishable_KxxqH7WDzoB6aI4MuBcUpA_XAWnVr0K";


/* =========================================================
   LOAD SUPABASE
========================================================= */

(function () {

    function loadSupabase() {

        return new Promise((resolve, reject) => {

            if (
                typeof window.supabase !== "undefined"
            ) {

                resolve();

                return;

            }


            const script =
                document.createElement("script");

            script.src =
                "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

            script.onload =
                resolve;

            script.onerror =
                reject;

            document.head.appendChild(
                script
            );

        });

    }


    /* =====================================================
       DATABASE SAVE
    ===================================================== */

    async function saveToDatabase() {

        try {

            await loadSupabase();


            const supabase =
                window.supabase.createClient(
                    CM_SUPABASE_URL,
                    CM_SUPABASE_KEY
                );


            const finalStage =
                typeof calculateAssessmentStage === "function"
                    ? calculateAssessmentStage()
                    : 1;


            const payload = {

                full_name:
                    document.getElementById(
                        "fullName"
                    )?.value.trim() || "",


                whatsapp_number:
                    document.getElementById(
                        "whatsappNumber"
                    )?.value.trim() || "",


                age_group:
                    document.getElementById(
                        "ageGroup"
                    )?.value || "",


                city:
                    document.getElementById(
                        "city"
                    )?.value.trim() || "",


                gender:
                    typeof state !== "undefined"
                        ? state.gender || ""
                        : "",


                selected_stage:
                    typeof state !== "undefined"
                        ? String(
                            state.selectedStage || ""
                        )
                        : "",


                assessment_score:
                    Number(finalStage),


                answers:
                    typeof state !== "undefined"
                        ? state.answers || []
                        : [],


                scalp_photo:
                    typeof state !== "undefined" &&
                    state.scalpPhoto
                        ? state.scalpPhoto.name
                        : null,


                consent:
                    document.getElementById(
                        "consent"
                    )?.checked || false,


                main_concern:
                    null

            };


            console.log(
                "Clinica Medicare → Saving lead:",
                payload
            );


            const result =
                await supabase
                    .from("hair_assessment")
                    .insert([payload]);


            if (result.error) {

                console.error(
                    "SUPABASE ERROR:",
                    result.error
                );

                alert(
                    "Assessment save nahi ho paya. Please try again."
                );

                return false;

            }


            console.log(
                "✓ Assessment saved successfully"
            );


            return true;


        } catch (error) {

            console.error(
                "DATABASE ERROR:",
                error
            );


            alert(
                "Database connection mein problem aa rahi hai."
            );


            return false;

        }

    }


    /* =====================================================
       INTERCEPT FORM SUBMIT
    ===================================================== */

    document.addEventListener(
        "submit",
        async function (event) {

            const form =
                event.target;


            if (
                !form ||
                form.id !== "leadForm"
            ) {

                return;

            }


            /*
             * Existing submit handler ko rok rahe hain
             * taaki pehle database mein data save ho.
             */

            event.preventDefault();

            event.stopImmediatePropagation();


            /* HTML validation */

            if (
                !form.checkValidity()
            ) {

                form.reportValidity();

                return;

            }


            /* WhatsApp number validation */

            const phone =
                document.getElementById(
                    "whatsappNumber"
                )?.value.trim() || "";


            const cleanedPhone =
                phone.replace(
                    /[^\d]/g,
                    ""
                );


            if (
                cleanedPhone.length < 10
            ) {

                alert(
                    typeof translate === "function"
                        ? translate("invalidPhone")
                        : "Please enter a valid WhatsApp number."
                );

                return;

            }


            /* SAVE TO SUPABASE */

            const saved =
                await saveToDatabase();


            if (!saved) {

                return;

            }


            /* DATABASE SAVE SUCCESS */

            console.log(
                "Lead saved. Showing assessment result..."
            );


            if (
                typeof showResult === "function"
            ) {

                showResult();

            }

        },
        true
    );


})();