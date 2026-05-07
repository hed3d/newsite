// =====================================================
// РОЗКЛАД УРОКІВ - редагуйте цей файл для збереження
// =====================================================
// Після редагування закомітьте файл в GitHub

var DEFAULT_SCHEDULE = {
  "monday": {
    "1": {
      "time": "08:00–08:45",
      "name": "Українська література",
      "link": "https://meet.google.com/ked-wbuz-bkz",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "2": {
      "time": "08:50–09:35",
      "name": "Історія України",
      "link": "https://meet.google.com/ewk-rjdu-rxq",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "3": {
      "time": "09:40–10:30",
      "name": "Інформатика",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/xha-ymjx-sga",
      "group2Link": "https://meet.google.com/aya-qogn-ytw"
    },
    "4": {
      "time": "10:40–11:25",
      "name": "Англійська мова",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/ekh-jxsg-kwa",
      "group2Link": "https://meet.google.com/euj-tcid-vuk"
    },
    "5": {
      "time": "11:35–12:20",
      "name": "Математика",
      "link": "https://meet.google.com/pbv-todf-wmq",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "6": {
      "time": "12:25–13:10",
      "name": "Математика",
      "link": "https://meet.google.com/pbv-todf-wmq",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    }
  },

  "tuesday": {
    "1": {
      "time": "08:00–08:45",
      "name": "Захист України",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/pct-iynx-qtr",
      "group2Link": "https://meet.google.com/crv-uwvg-vkk"
    },
    "2": {
      "time": "08:50–09:35",
      "name": "Громадянська освіта",
      "link": "https://meet.google.com/ugr-bxbm-ywi",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "3": {
      "time": "09:45–10:30",
      "name": "Біологія",
      "link": "https://meet.google.com/bkb-xhph-vfx",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "4": {
      "time": "10:40–11:25",
      "name": "Українська мова",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/syg-wkdi-bpz",
      "group2Link": "https://meet.google.com/hpz-yadh-itq"
    },
    "5": {
      "time": "11:35–12:20",
      "name": "Українська мова",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/syg-wkdi-bpz",
      "group2Link": "https://meet.google.com/hpz-yadh-itq"
    },
    "6": {
      "time": "12:25–13:10",
      "name": "Година спілкування",
      "link": "https://meet.google.com/syg-wkdi-bpz",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    }
  },

  "wednesday": {
    "1": {
      "time": "08:00–08:45",
      "name": "Історія України",
      "link": "https://meet.google.com/ewk-rjdu-rxq",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "2": {
      "time": "08:50–09:35",
      "name": "Англійська мова",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/ekh-jxsg-kwa",
      "group2Link": "https://meet.google.com/euj-tcid-vuk"
    },
    "3": {
      "time": "09:45–10:30",
      "name": "Фізична культура",
      "link": "https://meet.google.com/qdn-noim-xrw",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "4": {
      "time": "10:40–11:25",
      "name": "Всесвітня історія",
      "link": "https://meet.google.com/ewk-rjdu-rxq",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "5": {
      "time": "11:35–12:20",
      "name": "Географія",
      "link": "https://meet.google.com/pqf-rtni-ymy",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "6": {
      "time": "12:25–13:10",
      "name": "Хімія",
      "link": "https://meet.google.com/bkb-xhph-vfx",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    }
  },

  "thursday": {
    "1": {
      "time": "08:00–08:45",
      "name": "Зарубіжна література",
      "link": "https://meet.google.com/ecg-cxwe-oud",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "2": {
      "time": "08:50–09:35",
      "name": "Біологія",
      "link": "https://meet.google.com/bkb-xhph-vfx",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "3": {
      "time": "09:45–10:30",
      "name": "Математика",
      "link": "https://meet.google.com/pbv-todf-wmq",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "4": {
      "time": "10:40–11:25",
      "name": "Математика",
      "link": "https://meet.google.com/pbv-todf-wmq",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "5": {
      "time": "11:35–12:20",
      "name": "Українська мова",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/syg-wkdi-bpz",
      "group2Link": "https://meet.google.com/hpz-yadh-itq"
    },
    "6": {
      "time": "12:25–13:10",
      "name": "Українська мова",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/syg-wkdi-bpz",
      "group2Link": "https://meet.google.com/hpz-yadh-itq"
    }
  },

  "friday": {
    "1": {
      "time": "08:00–08:45",
      "name": "Англійська мова",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/ekh-jxsg-kwa",
      "group2Link": "https://meet.google.com/euj-tcid-vuk"
    },
    "2": {
      "time": "08:50–09:35",
      "name": "Фізична культура",
      "link": "https://meet.google.com/qdn-noim-xrw",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "3": {
      "time": "09:45–10:30",
      "name": "Захист України",
      "link": "",
      "hasGroups": true,
      "group1Link": "https://meet.google.com/pct-iynx-qtr",
      "group2Link": "https://meet.google.com/crv-uwvg-vkk"
    },
    "4": {
      "time": "10:40–11:25",
      "name": "Фізика",
      "link": "https://meet.google.com/bmv-psqa-sco",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    },
    "5": {
      "time": "11:35–12:20",
      "name": "Фізика",
      "link": "https://meet.google.com/bmv-psqa-sco",
      "hasGroups": false,
      "group1Link": "",
      "group2Link": ""
    }
  }
};
