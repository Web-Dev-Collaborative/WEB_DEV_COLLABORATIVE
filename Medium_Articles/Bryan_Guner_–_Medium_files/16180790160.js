!(e => {
  function t(n) {
    if (i[n]) return i[n].exports;
    const r = (i[n] = { exports: {}, id: n, loaded: !1 });
    return e[n].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
  }
  var i = {};
  return (t.m = e), (t.c = i), (t.p = ""), t(0);
})([
  (e, t, i) => {
    function n() {
      function e(e) {
        const t = i(148), n = [t];
        n.push(i(150)),
          n.push(i(156)),
          n.push(i(159)),
          n.push(i(162)),
          n.push(i(164)),
          n.push(i(174)),
          n.push(i(177)),
          n.push(i(179)),
          n.push(i(182)),
          n.push(i(185)),
          n.push(i(189)),
          n.push(i(192)),
          n.push(i(196)),
          n.push(i(200)),
          n.push(i(205)),
          n.push(i(206)),
          n.push(i(209)),
          n.push(i(210)),
          n.push(i(213)),
          n.push(i(217)),
          n.push(i(222)),
          n.push(i(224)),
          n.push(i(225)),
          g.initialize({ clientData: e, plugins: n });
      }
      function t(e, t, i) {
        return "/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__"
          .replace("__TOKEN__", e)
          .replace("__PROJECT_ID__", t)
          .replace("__PREVIEW_LAYER_IDS__", i.join(","))
          .replace("__GET_ONLY_PREVIEW_LAYERS__", !0);
      }
      window.performance &&
        window.performance.mark &&
        window.performance.mark("optimizely:blockBegin");
      const n = i(1);
      n.initialize();
      const r = i(83), a = i(23), o = i(16);
      i(129);
      const s = o.get("stores/directive"), c = i(91);
      if (!c.isCORSSupported())
        throw new Error("CORS is not supported on this browser, aborting.");
      let u;
      const l = i(131);
      const d = i(118);
      const f = i(132);

      const p = {
        layers: [
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["19071527315"],
            experiments: [
              {
                weightDistributions: null,
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "19589500901",
                    actions: [
                      {
                        viewId: "19071527315",
                        changes: [
                          {
                            selector: "#li-post-page-navbar-upsell-button a",
                            dependencies: [],
                            attributes: {
                              style:
                                "border-color: rgb(26, 137, 23);\nbackground: rgb(26, 137, 23);\ncolor: white;",
                            },
                            type: "attribute",
                            id: "25d742d5d4204872bd1f1cf3c4e156d9",
                            css: {},
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: null,
                changes: null,
                id: "19581401194",
                integrationSettings: null,
              },
            ],
            id: "19579662095",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "19576511517",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["17515850601"],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "19756994315", endOfRange: 1000 },
                  { entityId: "19746023861", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "19756994315",
                    actions: [{ viewId: "17515850601", changes: [] }],
                    name: null,
                  },
                  {
                    id: "19746023861",
                    actions: [
                      {
                        viewId: "17515850601",
                        changes: [
                          {
                            value:
                              "<style>/* Extra small devices */\n@media all and (max-width: 551.98px) {\n  #header-background-image-other > div {\n  \tbackground: none;\n  }\n  #header-background-image-other > div {\n  \tbackground-image: url(https://miro.hatch.dm/max/1600/4*URZ5pTXcDUQG97xAV_Q14w.png);\n\t\tbackground-position: bottom 28px right -126px;\n\t\tbackground-size: 385px 341px;\n\t\tbackground-repeat: no-repeat;\n  }\n}\n\n\n/* Small devices */\n@media all and (min-width: 552px) and (max-width: 727.98px) {\n  #header-background-image-other > div {\n  \tbackground: none;\n  }\n  #header-background-image-other > div {\n  \tbackground-image: url(https://miro.hatch.dm/max/1600/4*URZ5pTXcDUQG97xAV_Q14w.png);\n\t\tbackground-position: bottom 28px right -64px;\n\t\tbackground-size: 385px 341px;\n\t\tbackground-repeat: no-repeat;\n  }\n}\n\n\n/* Medium devices */\n@media all and (min-width: 728px) and (max-width: 903.98px) {\n  #header-background-image-other > div {\n  \tbackground: none;\n  }\n  #header-background-image-other > div {\n  \tbackground-image: url(https://miro.hatch.dm/max/1600/4*URZ5pTXcDUQG97xAV_Q14w.png);\n\t\tbackground-position: bottom 59px right 48px;\n\t\tbackground-size: 385px 341px;\n\t\tbackground-repeat: no-repeat;\n  }\n}\n\n/* Large devices */\n@media all and (min-width: 904px) and (max-width: 1079.98px) {\n  #header-background-image-other > div {\n  \tbackground: none;\n  }\n  #header-background-image-other > div {\n  \tbackground-image: url(https://miro.hatch.dm/max/1600/4*URZ5pTXcDUQG97xAV_Q14w.png);\n\t\tbackground-position: bottom 59px right 80px;\n\t\tbackground-size: 385px 341px;\n\t\tbackground-repeat: no-repeat;\n  }\n}\n\n/* Extra large devices */\n@media all and (min-width: 1080px) {\n  #header-background-image-other > div {\n  \tbackground: none;\n  }\n   #header-background-image-xl > div {\n  \tbackground-image: url(https://miro.hatch.dm/max/1600/4*URZ5pTXcDUQG97xAV_Q14w.png);\n\t\tbackground-position: bottom 59px right 32px;\n\t\tbackground-size: 385px 341px;\n\t\tbackground-repeat: no-repeat;\n  }\n}</style>",
                            selector: "head",
                            dependencies: [],
                            type: "append",
                            id: "d3314f631e6741c5a87e060bd5a6d9e2",
                          },
                          {
                            selector: "#header-headline-desktop h2",
                            dependencies: [],
                            attributes: { html: "Explore new perspectives" },
                            type: "attribute",
                            id: "5e2e1b04cd1741bfb47f6906941eeb8a",
                            css: {},
                          },
                          {
                            selector: "#header-subhead-copy",
                            dependencies: [],
                            attributes: {
                              html:
                                "Read and share ideas from independent voices, world-class publications, and experts from around the globe. Everyone's welcome. ",
                            },
                            type: "attribute",
                            id: "4f05ebf865e343478e3940313d861d54",
                            css: {},
                          },
                          {
                            selector: "#header-headline-mobile h2",
                            dependencies: [],
                            attributes: { html: "Explore new perspectives" },
                            type: "attribute",
                            id: "4332963cb6db49f4a7c3761e559c5b65",
                            css: {},
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: null,
                changes: null,
                id: "19722868776",
                integrationSettings: null,
              },
            ],
            id: "19712756243",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "19714624545",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["19343612201"],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "19955015950", endOfRange: 5000 },
                  { entityId: "19945394317", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "19955015950",
                    actions: [{ viewId: "19343612201", changes: [] }],
                    name: null,
                  },
                  {
                    id: "19945394317",
                    actions: [
                      {
                        viewId: "19343612201",
                        changes: [
                          {
                            value:
                              '<div style="padding-top: 20px; font-size: 18px;">Plans starting at less than $1/week. Cancel anytime.</div>\n<div style="padding-top: 30px; font-size: 16px;">\n  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12.3916L4.72 11.6756L8.3 15.2396L16.879 6.65265L17.581 7.36965L8.3 16.6526L4 12.3916Z" fill="#1A8917"/>\n  </svg> No ads<br>\n  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12.3916L4.72 11.6756L8.3 15.2396L16.879 6.65265L17.581 7.36965L8.3 16.6526L4 12.3916Z" fill="#1A8917"/>\n  </svg> Support quality writing<br>\n  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12.3916L4.72 11.6756L8.3 15.2396L16.879 6.65265L17.581 7.36965L8.3 16.6526L4 12.3916Z" fill="#1A8917"/>\n</svg> Access on any device</div>',
                            selector: "h1",
                            dependencies: [],
                            operator: "after",
                            type: "append",
                            id: "35539351-B02F-4AC6-88E1-6F37464600A0",
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: null,
                changes: null,
                id: "19920375193",
                integrationSettings: null,
              },
            ],
            id: "19945505163",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "19941829625",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["18637632856"],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "19951286671", endOfRange: 500 },
                  { entityId: "19941866972", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "19951286671",
                    actions: [{ viewId: "18637632856", changes: [] }],
                    name: null,
                  },
                  {
                    id: "19941866972",
                    actions: [
                      {
                        viewId: "18637632856",
                        changes: [
                          {
                            selector: ".hero-header-60-wrap > .header-1",
                            dependencies: [],
                            attributes: { html: "Set your ideas in motion." },
                            type: "attribute",
                            id: "fe37f658a7ff4b4999cf3af88db2e8ec",
                            css: {},
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: null,
                changes: null,
                id: "19949395161",
                integrationSettings: null,
              },
            ],
            id: "19949236211",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "19956480049",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["17533330708"],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "20046008328", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "20063176244",
                    actions: [{ viewId: "17533330708", changes: [] }],
                    name: null,
                  },
                  {
                    id: "20046008328",
                    actions: [
                      {
                        viewId: "17533330708",
                        changes: [
                          {
                            value:
                              "<style>/* Desktop AND Mobile */\n#topic-name {\n  text-transform: lowercase;\n}\n#paywall-image-parent {\n  min-width: 50%;\n}\n#paywall-image {\n  background-image: url('https://cdn-images-1.medium.com/max/1600/1*8MruXAmUGTPutBCDa2ar2w.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n/* Mobile */\n@media only screen and (max-width: 727.98px) {\n\t#paywall-background-color > div {\n    align-items: center;\n  }\n  #paywall-background-color > div > div {\n  max-width: 450px;\n  }\n  #paywall-fewerClicksHeading h2 {\n    font-size: 32px;\n    line-height: 32px;\n  }\n  #paywall-image {\n    height: 285px;\n    max-width: 80%;\n    width: 400px;\n    margin: 0 auto;\n  }\n}\n\n/* Desktop */\n@media only screen and (min-width: 728px) {\n  #paywall-background-color {\n    margin-top: 40px;\n  }\n  #paywall-background-color > div {\n    display: flex;\n    justify-content: left;\n  }\n  #paywall-fewerClicksHeading h2 {\n    font-size: 36px;\n    line-height: 42px;\n  }\n  #paywall-background-color > div > div:first-of-type {\n    min-width: 50%;\n    padding: 48px 30px 48px 20px;\n  }\n  #paywall-image-parent {\n    padding-top: 40px;\n  }\n  #paywall-image {\n    height: 100%;\n  }\n}</style>",
                            selector: "head",
                            dependencies: [],
                            type: "append",
                            id: "7485F29E-C24B-4030-B004-E87543B7CF60",
                          },
                          {
                            value:
                              '<div id="paywall-image-parent">\n  <div id="paywall-image"></div>\n</div>',
                            selector: "#paywall-background-color > div > div",
                            dependencies: [],
                            operator: "after",
                            type: "append",
                            id: "A5EE466F-CB28-470A-99BE-C0DBA315F47B",
                          },
                          {
                            selector: "#paywall-subtitle-copy-fewer-clicks",
                            dependencies: [],
                            attributes: { remove: true },
                            type: "attribute",
                            id: "5936D971-B099-4CF0-8D27-69B97EABF1AA",
                            css: {},
                          },
                          {
                            name: "Interpolation Extension",
                            config: {
                              interpolationText:
                                '#firstName, curious about <span id="topic-name">#topic</span>?',
                              dataFields: ["a"],
                              targetHtml: "",
                              interpolationTarget:
                                "#paywall-fewerClicksHeading div",
                            },
                            widget_id: "16559590042",
                            dependencies: [],
                            type: "widget",
                            id: "53AC83B4-00C8-40EB-BA1F-AD8D8216A705",
                          },
                          {
                            selector:
                              "#paywall-second-header-fewer-clicks div",
                            dependencies: [],
                            attributes: {
                              html:
                                "You\u2019ve read all of your member-only stories this month. Become a member to read and support the writers and publications uncovering new insights in the topics that matter to you.",
                            },
                            type: "attribute",
                            id: "7637FDBC-F7EC-4807-BDB7-70BD5392A112",
                            css: {},
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: ["and", "17565020583"],
                changes: null,
                id: "20065079016",
                integrationSettings: null,
              },
            ],
            id: "20041977265",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "20068481193",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["19063700693"],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "20038762633", endOfRange: 5000 },
                  { entityId: "20069043659", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "20038762633",
                    actions: [{ viewId: "19063700693", changes: [] }],
                    name: null,
                  },
                  {
                    id: "20069043659",
                    actions: [
                      {
                        viewId: "19063700693",
                        changes: [
                          {
                            value:
                              "<style>.white:hover {\n  border-color: black !important;\n  background-color: black !important;\n}</style>",
                            selector: "head",
                            dependencies: [],
                            type: "append",
                            id: "DC87431D-98BC-4DFB-9B7E-7FF4FFE92A7D",
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: null,
                changes: null,
                id: "20046093184",
                integrationSettings: null,
              },
            ],
            id: "20055422760",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "20049573749",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["19586100746", "19589701405", "19616950239"],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "20065356427", endOfRange: 500 },
                  { entityId: "20046009609", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "20065356427",
                    actions: [
                      { viewId: "19616950239", changes: [] },
                      { viewId: "19586100746", changes: [] },
                      { viewId: "19589701405", changes: [] },
                    ],
                    name: null,
                  },
                  {
                    id: "20046009609",
                    actions: [
                      {
                        viewId: "19616950239",
                        changes: [
                          {
                            value:
                              "<style>#topic-interpolation {\n  text-transform: lowercase;\n}</style>",
                            selector: "head",
                            dependencies: [],
                            type: "append",
                            id: "a7d34536719e4d1da44617a3be129f90",
                          },
                          {
                            selector: "#li-highlight-meter-1-link a",
                            dependencies: [],
                            attributes: {
                              html: "Upgrade for unlimited access",
                            },
                            type: "attribute",
                            id: "9c0a38df22834a05813c1a0b9329c8ac",
                            css: {},
                          },
                          {
                            selector:
                              "#li-highlight-meter-1-highlight-box > div > div > p > div",
                            dependencies: [],
                            attributes: {
                              style: "white-space: break-spaces;",
                            },
                            type: "attribute",
                            id: "41f63a1d766c4de59c63ad486a56a3dc",
                            css: {},
                          },
                          {
                            value: '<span id="topic-interpolation"></span>',
                            selector: "#li-highlight-meter-1-link a",
                            dependencies: [],
                            operator: "after",
                            type: "append",
                            id: "0f3e0c4126c6482b97e6548a47c5b881",
                          },
                          {
                            name: "Interpolation Extension",
                            config: {
                              interpolationText:
                                " to stories about #topic and more.",
                              dataFields: ["a"],
                              targetHtml: "",
                              interpolationTarget: "#topic-interpolation",
                            },
                            widget_id: "16559590042",
                            dependencies: [],
                            type: "widget",
                            id: "dd44093df4764299b6388222c60d4c91",
                          },
                        ],
                      },
                      {
                        viewId: "19586100746",
                        changes: [
                          {
                            value:
                              "<style>#topic-interpolation {\n  text-transform: lowercase;\n}</style>",
                            selector: "head",
                            dependencies: [],
                            type: "append",
                            id: "9645109ecde247a7a03f89035cdffc77",
                          },
                          {
                            selector: "#li-highlight-meter-2-link a",
                            dependencies: [],
                            attributes: {
                              html: "Upgrade for unlimited access",
                            },
                            type: "attribute",
                            id: "68ceb9588ca048928ab7e181d0f0670b",
                            css: {},
                          },
                          {
                            selector:
                              "#li-highlight-meter-2-highlight-box > div > div > p > div",
                            dependencies: [],
                            attributes: {
                              style: "white-space: break-spaces;",
                            },
                            type: "attribute",
                            id: "626219658ef7408fa323c36f34bcdc27",
                            css: {},
                          },
                          {
                            value: '<span id="topic-interpolation"></span>',
                            selector: "#li-highlight-meter-2-link a",
                            dependencies: [],
                            operator: "after",
                            type: "append",
                            id: "d642f7440e2a4e5580190f71c9b2fae4",
                          },
                          {
                            name: "Interpolation Extension",
                            config: {
                              interpolationText:
                                " to stories about #topic and more.",
                              dataFields: ["a"],
                              targetHtml: "",
                              interpolationTarget: "#topic-interpolation",
                            },
                            widget_id: "16559590042",
                            dependencies: [],
                            type: "widget",
                            id: "7180da239b2d4fe18c341b453933a24a",
                          },
                        ],
                      },
                      {
                        viewId: "19589701405",
                        changes: [
                          {
                            value:
                              "<style>#topic-interpolation {\n  text-transform: lowercase;\n}</style>",
                            selector: "head",
                            dependencies: [],
                            type: "append",
                            id: "b0b77f1477b84768938c6f4482d7ed90",
                          },
                          {
                            selector: "#li-highlight-meter-3-link a",
                            dependencies: [],
                            attributes: {
                              html: "Upgrade for unlimited access",
                            },
                            type: "attribute",
                            id: "ed352fe428ae4a9c8f5a18f166ca0a8d",
                            css: {},
                          },
                          {
                            selector:
                              "#li-highlight-meter-3-highlight-box > div > div > p > div",
                            dependencies: [],
                            attributes: {
                              style: "white-space: break-spaces;",
                            },
                            type: "attribute",
                            id: "55de76349a744d4a843eeeacc0c6e15c",
                            css: {},
                          },
                          {
                            value: '<span id="topic-interpolation"></span>',
                            selector: "#li-highlight-meter-3-link a",
                            dependencies: [],
                            operator: "after",
                            type: "append",
                            id: "3cc5cac15cd143c59152823bb8dcf075",
                          },
                          {
                            name: "Interpolation Extension",
                            config: {
                              interpolationText:
                                " to stories about #topic and more.",
                              dataFields: ["a"],
                              targetHtml: "",
                              interpolationTarget: "#topic-interpolation",
                            },
                            widget_id: "16559590042",
                            dependencies: [],
                            type: "widget",
                            id: "98a7a6f8a0df4de8a7d9d19ee3532427",
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: ["and", "19597860329"],
                changes: null,
                id: "20052870765",
                integrationSettings: null,
              },
            ],
            id: "20057619652",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "20073831264",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: [
              "18372322582",
              "18375981401",
              "19207712863",
              "19217803404",
              "19225342646",
            ],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "20085023776", endOfRange: 5000 },
                  { entityId: "20068102698", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "20085023776",
                    actions: [{ viewId: "18372322582", changes: [] }],
                    name: null,
                  },
                  {
                    id: "20068102698",
                    actions: [
                      {
                        viewId: "18372322582",
                        changes: [
                          {
                            selector:
                              "#susi-entry-point-follow #susi-modal-subheader h4",
                            dependencies: [],
                            attributes: { remove: true },
                            type: "attribute",
                            id: "94654067ea8f4de9a5d271eeae80633b",
                            css: {},
                          },
                        ],
                      },
                      {
                        viewId: "19217803404",
                        changes: [
                          {
                            selector:
                              "#susi-entry-point-highlight #susi-modal-subheader h4",
                            dependencies: [],
                            attributes: { remove: true },
                            type: "attribute",
                            id: "aac290ac3f9a4766866f906a7c632a21",
                            css: {},
                          },
                        ],
                      },
                      {
                        viewId: "19207712863",
                        changes: [
                          {
                            selector:
                              "#susi-entry-point-bookmark #susi-modal-subheader h4",
                            dependencies: [],
                            attributes: { remove: true },
                            type: "attribute",
                            id: "c15904261cd140e4983a0f459098b1a0",
                            css: {},
                          },
                        ],
                      },
                      {
                        viewId: "19225342646",
                        changes: [
                          {
                            selector:
                              "#susi-entry-point-respond #susi-modal-subheader h4",
                            dependencies: [],
                            attributes: { remove: true },
                            type: "attribute",
                            id: "a5253e6c7db346fdbade869dc953729e",
                            css: {},
                          },
                        ],
                      },
                      {
                        viewId: "18375981401",
                        changes: [
                          {
                            selector:
                              "#susi-entry-point-clap #susi-modal-subheader h4",
                            dependencies: [],
                            attributes: { remove: true },
                            type: "attribute",
                            id: "e9a5711b46f543aa92201f896e9a62f7",
                            css: {},
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: null,
                changes: null,
                id: "20081271554",
                integrationSettings: null,
              },
            ],
            id: "20066351800",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "20072466878",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
          {
            holdback: 0,
            activation: {},
            integrationSettings: {},
            integrationStringVersion: 2,
            viewIds: ["17547720120"],
            experiments: [
              {
                weightDistributions: [
                  { entityId: "20042471670", endOfRange: 5000 },
                  { entityId: "20054000571", endOfRange: 10000 },
                ],
                audienceName: null,
                name: null,
                bucketingStrategy: null,
                variations: [
                  {
                    id: "20042471670",
                    actions: [{ viewId: "17547720120", changes: [] }],
                    name: null,
                  },
                  {
                    id: "20054000571",
                    actions: [
                      {
                        viewId: "17547720120",
                        changes: [
                          {
                            selector:
                              "#regwall-heading > h2 > div:last-child",
                            dependencies: [],
                            attributes: {
                              html: "Read this story with a free account.",
                            },
                            type: "attribute",
                            id: "7DE9961A-86DC-45F4-B15E-7C68F4248D21",
                            css: {},
                          },
                        ],
                      },
                    ],
                    name: null,
                  },
                ],
                audienceIds: ["and", "18062242423"],
                changes: null,
                id: "20053523812",
                integrationSettings: null,
              },
            ],
            id: "20071311596",
            weightDistributions: null,
            name: null,
            groupId: null,
            commitId: "20057582058",
            decisionMetadata: null,
            policy: "single_experiment",
            changes: null,
          },
        ],
        listTargetingKeys: [],
        groups: [],
        views: [
          {
            category: "other",
            staticConditions: [
              "and",
              ["or", { type: "url", value: "medium.com", match: "simple" }],
              [
                "or",
                {
                  type: "element_present",
                  value: "#header-background-color",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_logged_out_homepage",
            tags: [],
            undoOnDeactivation: false,
            activationCode: function callbackFn(activate, options) {
              const utils = window.optimizely.get("utils");

              // Look for object with timeout
              const startTime = new Date().getTime();
              const lookForObject = setInterval(() => {
                if (new Date().getTime() - startTime > 5000) {
                  clearInterval(lookForObject);
                } else {
                  clearInterval(lookForObject);

                  options.isActive &&
                    activate({
                      isActive: false,
                    });
                  if (window.optlyCounter && window.optlyCounter === 1) {
                    window.optlyCounter = null;
                    activate();
                  } else {
                    if (!window.optlyCounter) {
                      window.optlyManualActivation();
                    }
                  }
                }
              }, 20);
            },
            deactivationEnabled: false,
            id: "17515850601",
          },
          {
            category: "other",
            staticConditions: [
              "or",
              [
                "or",
                {
                  type: "element_present",
                  value: "#paywall-background-color",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_paywall",
            tags: [],
            undoOnDeactivation: true,
            activationCode: function callbackFn(activate, options) {
              const utils = window.optimizely.get("utils");

              utils
                .waitForElement("#paywall-background-color")
                .then(_element_ => {
                  // Look for object with timeout
                  const startTime = new Date().getTime();
                  const lookForObject = setInterval(() => {
                    if (new Date().getTime() - startTime > 5000) {
                      clearInterval(lookForObject);
                    } else {
                      if (
                        window.optimizelyDataObject &&
                        window.optimizelyDataObject.topic
                      ) {
                        clearInterval(lookForObject);
                        const _dataObject = window.optimizelyDataObject.topic;
                        console.log(
                          "[Optimizely Callback Activation] Topic - " +
                            _dataObject
                        );
                        options.isActive &&
                          activate({
                            isActive: false,
                          });
                        activate();
                      }
                    }
                  }, 50);
                });
            },
            deactivationEnabled: true,
            id: "17533330708",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "element_present",
                  value: "#regwall-background-color",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_regwall",
            tags: [],
            undoOnDeactivation: true,
            deactivationEnabled: true,
            id: "17547720120",
          },
          {
            category: "other",
            staticConditions: [
              "or",
              [
                "or",
                {
                  type: "element_present",
                  value: "#lo-highlight-meter-1-copy",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#lo-highlight-meter-2-copy",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#lo-highlight-meter-3-copy",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_lom_all_meters_metrics_only",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "18153900126",
          },
          {
            category: "other",
            staticConditions: [
              "or",
              [
                "or",
                {
                  type: "element_present",
                  value: "#lo-highlight-meter-1-highlight-box",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#lo-highlight-meter-2-highlight-box",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#lo-highlight-meter-3-highlight-box",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_logged_out_meters_all_meters_metrics_only",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "18193920687",
          },
          {
            category: "other",
            staticConditions: [
              "or",
              [
                "or",
                {
                  type: "element_present",
                  value: "#li-highlight-meter-1-copy",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#li-highlight-meter-2-copy",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#li-highlight-meter-3-copy",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_logged_in_meter_13_metrics_only",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "18195582451",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-follow",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_susi_follow_author_entrypoint",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "18372322582",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                { type: "element_present", value: "#susi-entry-point-clap" },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_susi__clap_entrypoint",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "18375981401",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "url",
                  value: "https://medium.com/creators",
                  match: "simple",
                },
              ],
            ],
            name: null,
            apiName: "16180790160_creators",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "18637632856",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "url",
                  value: "https://medium.com/membership",
                  match: "simple",
                },
              ],
            ],
            name: null,
            apiName: "16180790160_membership",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "19063700693",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              ["or", { type: "url", value: "medium.com", match: "simple" }],
              [
                "or",
                {
                  type: "element_present",
                  value: "#li-post-page-navbar-upsell-button",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_logged_in_homepage",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "19071527315",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-bookmark",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_susi__bookmark_entry_point",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "19207712863",
          },
          {
            category: "other",
            staticConditions: [
              "or",
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-highlight",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_susi__highlight_entry_point",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "19217803404",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-respond",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_susi__respond_entry_point",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "19225342646",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                { type: "element_present", value: "#payment-page-headline" },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_plans",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "19343612201",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "element_present",
                  value: "#li-highlight-meter-2-highlight-box",
                },
              ],
            ],
            activationType: "callback",
            name: null,
            apiName: "16180790160_logged_in_meter_2_topic_specific",
            tags: [],
            undoOnDeactivation: false,
            activationCode: function callbackFn(activate, options) {
              const utils = window.optimizely.get("utils");

              utils
                .waitForElement("#li-highlight-meter-2-highlight-box")
                .then(_element_ => {
                  // Look for object with timeout
                  const startTime = new Date().getTime();
                  const lookForObject = setInterval(() => {
                    if (new Date().getTime() - startTime > 5000) {
                      clearInterval(lookForObject);
                    } else {
                      if (
                        window.optimizelyDataObject &&
                        window.optimizelyDataObject.topic
                      ) {
                        clearInterval(lookForObject);
                        const _dataObject = window.optimizelyDataObject.topic;
                        console.log(
                          "[Optimizely Callback Activation] Topic - " +
                            _dataObject
                        );
                        options.isActive &&
                          activate({
                            isActive: false,
                          });
                        activate();
                      }
                    }
                  }, 50);
                });
            },
            deactivationEnabled: false,
            id: "19586100746",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "element_present",
                  value: "#li-highlight-meter-3-highlight-box",
                },
              ],
            ],
            activationType: "callback",
            name: null,
            apiName: "16180790160_logged_in_meter_3_topic_specific",
            tags: [],
            undoOnDeactivation: false,
            activationCode: function callbackFn(activate, options) {
              const utils = window.optimizely.get("utils");

              utils
                .waitForElement("#li-highlight-meter-3-highlight-box")
                .then(_element_ => {
                  // Look for object with timeout
                  const startTime = new Date().getTime();
                  const lookForObject = setInterval(() => {
                    if (new Date().getTime() - startTime > 5000) {
                      clearInterval(lookForObject);
                    } else {
                      if (
                        window.optimizelyDataObject &&
                        window.optimizelyDataObject.topic
                      ) {
                        clearInterval(lookForObject);
                        const _dataObject = window.optimizelyDataObject.topic;
                        console.log(
                          "[Optimizely Callback Activation] Topic - " +
                            _dataObject
                        );
                        options.isActive &&
                          activate({
                            isActive: false,
                          });
                        activate();
                      }
                    }
                  }, 50);
                });
            },
            deactivationEnabled: false,
            id: "19589701405",
          },
          {
            category: "other",
            staticConditions: [
              "and",
              [
                "or",
                {
                  type: "element_present",
                  value: "#li-highlight-meter-1-highlight-box",
                },
              ],
            ],
            activationType: "callback",
            name: null,
            apiName: "16180790160_logged_in_meter_1_topic_specific",
            tags: [],
            undoOnDeactivation: false,
            activationCode: function callbackFn(activate, options) {
              const utils = window.optimizely.get("utils");

              utils
                .waitForElement("#li-highlight-meter-1-highlight-box")
                .then(_element_ => {
                  // Look for object with timeout
                  const startTime = new Date().getTime();
                  const lookForObject = setInterval(() => {
                    if (new Date().getTime() - startTime > 5000) {
                      clearInterval(lookForObject);
                    } else {
                      if (
                        window.optimizelyDataObject &&
                        window.optimizelyDataObject.topic
                      ) {
                        clearInterval(lookForObject);
                        const _dataObject = window.optimizelyDataObject.topic;
                        console.log(
                          "[Optimizely Callback Activation] Topic - " +
                            _dataObject
                        );
                        options.isActive &&
                          activate({
                            isActive: false,
                          });
                        activate();
                      }
                    }
                  }, 50);
                });
            },
            deactivationEnabled: false,
            id: "19616950239",
          },
          {
            category: "other",
            staticConditions: [
              "or",
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-follow",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-highlight",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-respond",
                },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-bookmark",
                },
              ],
              [
                "or",
                { type: "element_present", value: "#susi-entry-point-clap" },
              ],
              [
                "or",
                {
                  type: "element_present",
                  value: "#susi-entry-point-follow_co_brand",
                },
              ],
            ],
            activationType: "dom_changed",
            name: null,
            apiName: "16180790160_contextual_susi_modals",
            tags: [],
            undoOnDeactivation: false,
            deactivationEnabled: false,
            id: "20039130397",
          },
        ],
        projectId: "16180790160",
        plugins: [
          PluginManager => {
            const Hogan = (t => {
              function r(e) {
                if (n[e]) return n[e].exports;
                const i = (n[e] = { exports: {}, id: e, loaded: !1 });
                return (
                  t[e].call(i.exports, i, i.exports, r),
                  (i.loaded = !0),
                  i.exports
                );
              }
              var n = {};
              return (r.m = t), (r.c = n), (r.p = ""), r(0);
            })([
              (t, r) => {
                function n(t) {
                  (this.r = t), (this.buf = "");
                }
                function e(t, r) {
                  let n;
                  if (r && "object" == typeof r)
                    if (void 0 !== r[t]) n = r[t];
                  return n;
                }
                function i(t) {
                  return String(null === t || void 0 === t ? "" : t);
                }
                function o(t) {
                  return (
                    (t = i(t)),
                    p.test(t)
                      ? t
                          .replace(u, "&amp;")
                          .replace(f, "&lt;")
                          .replace(c, "&gt;")
                          .replace(l, "&#39;")
                          .replace(a, "&quot;")
                      : t
                  );
                }
                (t.exports = n),
                  (n.prototype = {
                    r(t, r, n) {
                      return "";
                    },
                    v: o,
                    t: i,
                    render(t, r, n) {
                      return this.ri([t], r || {}, n);
                    },
                    ri(t, r, n) {
                      return this.r(t, r, n);
                    },
                    rs(t, r, n) {
                      const e = t[t.length - 1];
                      if (!s(e)) return void n(t, r, this);
                      for (let i = 0; i < e.length; i++)
                        t.push(e[i]), n(t, r, this), t.pop();
                    },
                    s(t, r, n, e, i, o, u) {
                      let f;
                      if (s(t) && 0 === t.length) return !1;
                      if (((f = !!t), !e && f && r))
                        r.push("object" == typeof t ? t : r[r.length - 1]);
                      return f;
                    },
                    d(t, r, n, i) {
                      let o;
                      const u = t.split(".");
                      let f = this.f(u[0], r, n, i);
                      let c = null;
                      if ("." === t && s(r[r.length - 2]))
                        f = r[r.length - 1];
                      else
                        for (let l = 1; l < u.length; l++)
                          if (((o = e(u[l], f)), void 0 !== o))
                            (c = f), (f = o);
                          else f = "";
                      if (i && !f) return !1;
                      if (!i && "function" == typeof f)
                        r.push(c), (f = this.mv(f, r, n)), r.pop();
                      return f;
                    },
                    f(t, r, n, i) {
                      for (
                        var o = !1, u = null, f = !1, c = r.length - 1;
                        c >= 0;
                        c--
                      )
                        if (((u = r[c]), (o = e(t, u)), void 0 !== o)) {
                          f = !0;
                          break;
                        }
                      if (!f) return i ? !1 : "";
                      if (!i && "function" == typeof o) o = this.mv(o, r, n);
                      return o;
                    },
                    b(t) {
                      this.buf += t;
                    },
                    fl() {
                      const t = this.buf;
                      return (this.buf = ""), t;
                    },
                    mv(t, r, n) {
                      const e = r[r.length - 1], o = t.call(e);
                      if ("function" == typeof o)
                        return this.ct(i(o.call(e)), e, n);
                      else return o;
                    },
                  });
                var u = /&/g,
                  f = /</g,
                  c = />/g,
                  l = /'/g,
                  a = /"/g,
                  p = /[&<>"']/,
                  s =
                    Array.isArray ||
                    (t => {
                      return (
                        "[object Array]" === Object.prototype.toString.call(t)
                      );
                    });
              },
            ]);

            PluginManager.registerWidget({
              widgetId: "16559590042",
              showFn(event) {
                const $ = window.optimizely.get("jquery");
                const widget = event.data.config;
                const _template = new Hogan(function (c, p, i) {
                  const t = this;
                  t.b((i = i || ""));
                  t.b('<div id="optimizely-extension-');
                  t.b(t.v(t.d("extension.$instance", c, p, 0)));
                  t.b('" class="interpolation-extension">');
                  t.b("\n" + i);
                  t.b("  ");
                  t.b(t.v(t.d("extension.text", c, p, 0)));
                  t.b("\n" + i);
                  t.b("</div>");
                  return t.fl();
                });
                widget.$id = "16559590042";
                widget.$instance = event.data.id;
                widget.$render = _template.render.bind(_template);
                widget.$fieldDefaults = [
                  { name: "interpolationTarget", default_value: ".cu" },
                  {
                    name: "interpolationText",
                    default_value:
                      "#firstName, <u>upgrade</u> to unlock all of Medium.",
                  },
                  { name: "dataFields", default_value: ["a"] },
                  { name: "targetHtml", default_value: "" },
                ];
                (widg => {
                  let i = 0;
                  let field;
                  for (; i < widg.$fieldDefaults.length; ++i) {
                    field = widg.$fieldDefaults[i];
                    if (!widg.hasOwnProperty(field.name)) {
                      widg[field.name] = field.default_value;
                    }
                  }
                })(widget);
                widget.$html = _template.render({
                  widget: widget,
                  extension: widget,
                });
                const extension = widget;
                widget._styleTag = document.createElement("style");
                widget._styleTag.id = "widget-css-16559590042";
                widget._styleTag.innerHTML =
                  ".interpolation-extension {  background-color: #fff575;  border-bottom: 1px solid #e0d769;  color: #555;  padding: 10px;  font-weight: bold;  text-align: center;  font-size: 20px;}";
                document
                  .getElementsByTagName("head")[0]
                  .appendChild(widget._styleTag);
                const dataFields = [
                  "topic",
                  "publication",
                  "author",
                  "firstName",
                  "trialRenewalDate",
                ];

                function init() {
                  const selector = document.querySelector(
                    extension.interpolationTarget
                  );
                  if (selector) {
                    //extension.targetHtml = selector.innerHTML;
                  }

                  // #firstName, <u>upgrade</u> to unlock all of Medium.

                  if (selector && extension.interpolationText) {
                    let iString = extension.interpolationText;

                    dataFields.forEach(field => {
                      if (
                        window.optimizelyDataObject &&
                        window.optimizelyDataObject[field]
                      ) {
                        iString = iString.replace(
                          "#" + field,
                          window.optimizelyDataObject[field]
                        );
                      }
                    });
                    //iString = iString.replace('#firstName', 'Simone');

                    const sections = extension.interpolationText.split("#word");
                    selector.innerHTML = iString;
                  }
                }

                init();
              },
              hideFn(event) {
                const $ = window.optimizely.get("jquery");
                const widget = event.data.config;
                widget.$id = "16559590042";
                widget.$instance = event.data.id;
                widget.$fieldDefaults = [
                  { name: "interpolationTarget", default_value: ".cu" },
                  {
                    name: "interpolationText",
                    default_value:
                      "#firstName, <u>upgrade</u> to unlock all of Medium.",
                  },
                  { name: "dataFields", default_value: ["a"] },
                  { name: "targetHtml", default_value: "" },
                ];
                (widg => {
                  let i = 0;
                  let field;
                  for (; i < widg.$fieldDefaults.length; ++i) {
                    field = widg.$fieldDefaults[i];
                    if (!widg.hasOwnProperty(field.name)) {
                      widg[field.name] = field.default_value;
                    }
                  }
                })(widget);
                const extension = widget;
                widget._styleTag = document.getElementById(
                  "widget-css-16559590042"
                );
                if (widget._styleTag)
                  widget._styleTag.parentNode.removeChild(widget._styleTag);
                const extensionElement = document.getElementById(
                  "optimizely-extension-" + extension.$instance
                );
                if (extensionElement) {
                  extensionElement.parentElement.removeChild(
                    extensionElement
                  );
                }
              },
            });
          },
        ],
        namespace: "16180790160",
        tagGroups: [],
        integrationSettings: [],
        interestGroups: [],
        dimensions: [
          {
            segmentId: null,
            id: "16240060260",
            apiName: "articleCategory",
            name: null,
          },
        ],
        audiences: [
          {
            conditions: [
              "and",
              [
                "or",
                [
                  "or",
                  {
                    value: null,
                    type: "cookies",
                    name: "optly_medium_test",
                    match: "exists",
                  },
                ],
              ],
            ],
            id: "17565020583",
            name: null,
          },
          {
            conditions: [
              "and",
              [
                "or",
                [
                  "or",
                  {
                    value: "screen.width > 728;",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
            ],
            id: "18062242423",
            name: null,
          },
          {
            conditions: [
              "and",
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Android Dev'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Cities'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Disability'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Economy'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Election 2020'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Future'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Humor'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'iOS Dev'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Javascript'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'LGBTQIA'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Lifestyle'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Makers'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Nonfiction'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Outdoors'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'San Francisco'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Self'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'TV'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'UX'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'World'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Basic Income'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Culture'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Digital Life'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Fiction'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Language'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Media'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Race'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Society'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Venture Capital'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
              [
                "or",
                [
                  "or",
                  {
                    value:
                      "!!window.optimizelyDataObject && window.optimizelyDataObject.topic !== 'Work'",
                    type: "code",
                    name: null,
                    match: null,
                  },
                ],
              ],
            ],
            id: "19597860329",
            name: null,
          },
        ],
        anonymizeIP: true,
        projectJS: function () {
          //Project JS

          window.optlyCounter = window.optlyCounter || null;

          window.optlyManualActivation = () => {
            window.optimizely.push({
              type: "activate",
            });
            window.optlyCounter = 1;
          };

          /*
if (window.location.href.indexOf("medium.com/membership") > -1) {
  document.getElementById('membership-page-testimonials-section').style.opacity = 0;
  document.getElementById('membership-content-section').style.opacity = 0;
  document.getElementById('membership-intro-section').style.opacity = 0;
  setTimeout(function() {
      document.getElementById('membership-intro-section').style.opacity = 1;
      document.getElementById('membership-content-section').style.opacity = 1;
      document.getElementById('membership-page-testimonials-section').style.opacity = 1;
  }, 1400);
}*/

          function queryCapture() {
            const url = window.location.href;

            if (
              url.lastIndexOf("&optimizely_id") &&
              url.lastIndexOf("&optimizely_id") !== -1
            ) {
              secondCall(url, "&optimizely_id");
            }

            if (
              url.lastIndexOf("?optimizely_id") &&
              url.lastIndexOf("?optimizely_id") !== -1
            ) {
              secondCall(url, "?optimizely_id");
            }
          }

          function secondCall(URL, second) {
            const target = URL.slice(URL.lastIndexOf(second));
            const splitIt = target.split("+");

            const experimentId = splitIt[0].split("=")[1];
            const variationId = splitIt[1];

            window.optimizely = window.optimizely || [];
            window.optimizely.push({
              type: "bucketVisitor",
              experimentId: experimentId,
              variationIndex: variationId,
            });
          }
          try {
            queryCapture();
          } catch (error) {
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
          }
        },
        visitorAttributes: [],
        enableForceParameters: true,
        accountId: "16180790160",
        events: [
          {
            category: "other",
            name: null,
            eventType: "custom",
            viewId: null,
            apiName: "userAccountCreated",
            id: "16879278706",
            eventFilter: null,
          },
          {
            category: "other",
            name: null,
            eventType: "custom",
            viewId: null,
            apiName: "userConvertedToMember",
            id: "16931475182",
            eventFilter: null,
          },
          {
            category: "other",
            name: null,
            eventType: "custom",
            viewId: null,
            apiName: "userSignedIn",
            id: "17026945170",
            eventFilter: null,
          },
          {
            category: "other",
            name: null,
            eventType: "custom",
            viewId: null,
            apiName: "userLoggedIn",
            id: "17044780468",
            eventFilter: null,
          },
          {
            category: "other",
            name: null,
            eventType: "custom",
            viewId: null,
            apiName: "TopicSelected",
            id: "17947853045",
            eventFilter: null,
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17547720120",
            apiName: "16180790160_regwall_google_and_facebook_buttons_clicks",
            id: "18066840489",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#regwall-google-button A,#regwall-background-color > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17547720120",
            apiName: "16180790160_regwall_google_button_clicks",
            id: "18090781934",
            eventFilter: {
              filterType: "target_selector",
              selector: "#regwall-google-button A",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17547720120",
            apiName: "16180790160_regwall_facebook_button_clicks",
            id: "18108320040",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#regwall-background-color > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17547720120",
            apiName: "16180790160_regwall_sign_in_cta_clicks",
            id: "18109140877",
            eventFilter: {
              filterType: "target_selector",
              selector: "#regwall-sign-in-link A",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "custom",
            viewId: null,
            apiName: "UserConvertedToTrialMember",
            id: "18146503184",
            eventFilter: null,
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18153900126",
            apiName: "16180790160_lom_clicks_all_meters",
            id: "18149820754",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#lo-highlight-meter-1-link,#lo-highlight-meter-2-link,#lo-highlight-meter-3-link",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18193920687",
            apiName: "16180790160_logged_out_meter_123_clicks",
            id: "18201381664",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#lo-highlight-meter-1-link,#lo-highlight-meter-2-link,#lo-highlight-meter-3-link",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18195582451",
            apiName: "16180790160_logged_in_meter_1_2_3_clicks",
            id: "18209671412",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#li-highlight-meter-1-link,#li-highlight-meter-2-link,#li-highlight-meter-3-link",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17547720120",
            apiName: "16180790160_regwall_top_nav_get_started_button_clicks",
            id: "18242541376",
            eventFilter: {
              filterType: "target_selector",
              selector: "#lo-post-page-navbar-sign-in-button BUTTON",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17547720120",
            apiName: "16180790160_mobile_regwall_open_in_app_button_clicks",
            id: "18256001751",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#regwall-background-color #lo-general-navbar-open-in-app-button A",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17547720120",
            apiName:
              "16180790160_mobile_regwall_total_open_in_app_button_clicks",
            id: "18259493806",
            eventFilter: {
              filterType: "target_selector",
              selector: "#lo-general-navbar-open-in-app-button A",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18372322582",
            apiName: "16180790160_susi_follow_author_sign_up_button_clicked",
            id: "18935390801",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-google-button a, #susi-entry-point-follow #susi-modal-fb-button a, #susi-entry-point-follow #susi-modal-email-button button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18372322582",
            apiName: "16180790160_susi_follow_author_sign_in_link_clicked",
            id: "18949170388",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-sign-up-link button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_pubtoolsherocta_clicks",
            id: "19056070680",
            eventFilter: {
              filterType: "target_selector",
              selector:
                ".creators-tablet-hide .padding-left > .button._\\32,.inverse.big-hide > .button._\\32",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17533330708",
            apiName: "16180790160_paywall_upsell_button_clicked",
            id: "19057982173",
            eventFilter: {
              filterType: "target_selector",
              selector: "#paywall-upsell-button-upgrade a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_ourstorytopnavcta_clicks",
            id: "19075841045",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "nav a:nth-of-type(1),.alt > a:nth-of-type(1),.subnav > a:nth-of-type(1)",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_startwritinggetstartedcta_clicks",
            id: "19077420546",
            eventFilter: {
              filterType: "target_selector",
              selector:
                ".creators-tablet-hide > .button-wrap > .white,.creators-tablet-hide > .white.big-hide > .button._\\32",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_topnavcta_clicks",
            id: "19166233139",
            eventFilter: {
              filterType: "target_selector",
              selector: "nav .button,.alt .button,.mobile .button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19217803404",
            apiName: "16180790160_susi_highlight_allclicks",
            id: "19166384305",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-highlight #susi-modal-google-button a, #susi-entry-point-highlight #email-susi-button-clickable button, #susi-entry-point-highlight #susi-modal-fb-button h4, #susi-entry-point-highlight #susi-modal-twitter-button h4, #susi-entry-point-highlight #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19225342646",
            apiName: "16180790160_susi_respond_apple_clicks",
            id: "19168875168",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-respond #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_writecta_clicks",
            id: "19170202895",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "nav a:nth-of-type(3),.alt > a:nth-of-type(3),.subnav > a:nth-of-type(3)",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_membershiptopnavcta_clicks",
            id: "19175963093",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "nav a:nth-of-type(2),.alt > a:nth-of-type(2),.subnav > a:nth-of-type(2)",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_logo_clicks",
            id: "19183672485",
            eventFilter: {
              filterType: "target_selector",
              selector: ".medium-nav-logo",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19225342646",
            apiName: "16180790160_susi_respond_facebook_clicks",
            id: "19183785640",
            eventFilter: {
              filterType: "target_selector",
              selector: "#susi-entry-point-respond #susi-modal-fb-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19207712863",
            apiName: "16180790160_susi_bookmark_facebook_clicks",
            id: "19185616433",
            eventFilter: {
              filterType: "target_selector",
              selector: "#susi-entry-point-bookmark #susi-modal-fb-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19217803404",
            apiName: "16180790160_susi_highlight_email_clicks",
            id: "19189574280",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-highlight #email-susi-button-clickable button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_herocta_clicks",
            id: "19189964692",
            eventFilter: {
              filterType: "target_selector",
              selector:
                ".creators-tablet-hide .padding-left > .button._\\32,.inverse.big-hide > .button._\\32,.creators-tablet-hide > .button-wrap > .white,.creators-tablet-hide > .white.big-hide > .button._\\32",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19217803404",
            apiName: "16180790160_susi_highlight_google_clicks",
            id: "19193125220",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-highlight #susi-modal-google-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_pubtoolsmodulecta_clicks",
            id: "19194803403",
            eventFilter: {
              filterType: "target_selector",
              selector: ".black-hollow",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19225342646",
            apiName: "16180790160_susi_respond_allclicks",
            id: "19198404601",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-respond #susi-modal-google-button a, #susi-entry-point-respond #email-susi-button-clickable button, #susi-entry-point-respond #susi-modal-fb-button h4, #susi-entry-point-respond #susi-modal-twitter-button h4, #susi-entry-point-respond #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18375981401",
            apiName: "16180790160_susi_clap_apple_clicks",
            id: "19208062447",
            eventFilter: {
              filterType: "target_selector",
              selector: "#susi-entry-point-clap #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17515850601",
            apiName: "16180790160_lohp_getstartedherocta_clicks",
            id: "19209972913",
            eventFilter: {
              filterType: "target_selector",
              selector: "#header-get-started-button button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_earnmodulecta_clicks",
            id: "19213683123",
            eventFilter: {
              filterType: "target_selector",
              selector:
                ".hollow.mobile-hide > .button._\\32,.hollow.big-hide > .button._\\32",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18375981401",
            apiName: "16180790160_susi_clap_twitter_clicks",
            id: "19214652953",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-clap #susi-modal-twitter-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18375981401",
            apiName: "16180790160_susi_clap_email_clicks",
            id: "19217383263",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-clap #email-susi-button-clickable button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18375981401",
            apiName: "16180790160_susi_clap_allclicks",
            id: "19217613533",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-clap #susi-modal-google-button a, #susi-entry-point-clap #email-susi-button-clickable button, #susi-entry-point-clap #susi-modal-fb-button h4, #susi-entry-point-clap #susi-modal-twitter-button h4, #susi-entry-point-clap #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19225342646",
            apiName: "16180790160_susi_respond_twitter_clicks",
            id: "19217812590",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-respond #susi-modal-twitter-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17515850601",
            apiName: "16180790160_lohp_getstartedtopnavcta_clicks",
            id: "19219533367",
            eventFilter: {
              filterType: "target_selector",
              selector: "#top-nav-get-started-cta",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19217803404",
            apiName: "16180790160_susi_highlight_facebook_clicks",
            id: "19223633138",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-highlight #susi-modal-fb-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19207712863",
            apiName: "16180790160_susi_bookmark_allclicks",
            id: "19224853284",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-bookmark #susi-modal-google-button a, #susi-entry-point-bookmark #email-susi-button-clickable button, #susi-entry-point-bookmark #susi-modal-fb-button h4, #susi-entry-point-bookmark #susi-modal-twitter-button h4, #susi-entry-point-bookmark #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17515850601",
            apiName: "16180790160_lohp_writetopnavcta_clicks",
            id: "19225533543",
            eventFilter: {
              filterType: "target_selector",
              selector: "#top-nav-write-cta-desktop div",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19207712863",
            apiName: "16180790160_susi_bookmark_twitter_clicks",
            id: "19229382819",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-bookmark #susi-modal-twitter-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17515850601",
            apiName: "16180790160_lohp_ourstorytopnavcta_clicks",
            id: "19232702651",
            eventFilter: {
              filterType: "target_selector",
              selector: "#top-nav-our-story-cta-desktop div",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18375981401",
            apiName: "16180790160_susi_clap_google_clicks",
            id: "19235332631",
            eventFilter: {
              filterType: "target_selector",
              selector: "#susi-entry-point-clap #susi-modal-google-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_upgradefootercta_clicks",
            id: "19235380559",
            eventFilter: {
              filterType: "target_selector",
              selector: ".black",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17515850601",
            apiName: "16180790160_lohp_memtopnavcta_clicks",
            id: "19235422977",
            eventFilter: {
              filterType: "target_selector",
              selector: "#top-nav-membership-cta-desktop div",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19207712863",
            apiName: "16180790160_susi_bookmark_email_clicks",
            id: "19236872681",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-bookmark #email-susi-button-clickable button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_getstartedtopnavcta_clicks",
            id: "19240482078",
            eventFilter: {
              filterType: "target_selector",
              selector: "nav .button,.alt .button,.mobile .button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_ourstorycta_clicks",
            id: "19241380402",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "nav a:nth-of-type(1),.alt > a:nth-of-type(1),.subnav > a:nth-of-type(1)",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19207712863",
            apiName: "16180790160_susi_bookmark_google_clicks",
            id: "19241612258",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-bookmark #susi-modal-google-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_upgradeherocta_clicks",
            id: "19243390205",
            eventFilter: {
              filterType: "target_selector",
              selector: ".white",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19217803404",
            apiName: "16180790160_susi_highlight_apple_clicks",
            id: "19243561554",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-highlight #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19071527315",
            apiName: "16180790160_lihp_topnavcta_clicks",
            id: "19244570040",
            eventFilter: {
              filterType: "target_selector",
              selector: "#li-post-page-navbar-upsell-button > div > div",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18375981401",
            apiName: "16180790160_susi_clap_facebook_clicks",
            id: "19253901179",
            eventFilter: {
              filterType: "target_selector",
              selector: "#susi-entry-point-clap #susi-modal-fb-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19217803404",
            apiName: "16180790160_susi_highlight_twitter_clicks",
            id: "19260141228",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-highlight #susi-modal-twitter-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_startwritingcta_clicks",
            id: "19275550869",
            eventFilter: {
              filterType: "target_selector",
              selector: ".creators-tablet-hide > .button-wrap > .white",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_memtopnavcta_clicks",
            id: "19276370313",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "nav a:nth-of-type(2),.alt > a:nth-of-type(2),.subnav > a:nth-of-type(2)",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_writetopnavcta_clicks",
            id: "19281740479",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "nav a:nth-of-type(3),.alt > a:nth-of-type(3),.subnav > a:nth-of-type(3)",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19207712863",
            apiName: "16180790160_susi_bookmark_apple_clicks",
            id: "19283091538",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-bookmark #susi-modal-apple-button h4",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19225342646",
            apiName: "16180790160_susi_respond_google_clicks",
            id: "19287070643",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-respond #susi-modal-google-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "17515850601",
            apiName: "16180790160_lohp_learnmoreherocta_clicks",
            id: "19297330111",
            eventFilter: {
              filterType: "target_selector",
              selector: "#header-subhead-link a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19225342646",
            apiName: "16180790160_susi_respond_email_clicks",
            id: "19299250685",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-respond #email-susi-button-clickable button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19616950239",
            apiName: "16180790160_loggedinmeter1topicspecific_clicks",
            id: "19566232797",
            eventFilter: {
              filterType: "target_selector",
              selector: "#li-highlight-meter-1-link",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19589701405",
            apiName: "16180790160_loggedinmeter3topicspecific_clicks",
            id: "19573572147",
            eventFilter: {
              filterType: "target_selector",
              selector: "#li-highlight-meter-3-link",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19063700693",
            apiName: "16180790160_mem_topnavsignin_clicks",
            id: "19580005352",
            eventFilter: {
              filterType: "target_selector",
              selector:
                ".bookend.li-redirect,.alt > .bookend,.subnav > .li-redirect",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_googleplay_clicks",
            id: "19601045276",
            eventFilter: {
              filterType: "target_selector",
              selector: "img._\\32",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19586100746",
            apiName: "16180790160_loggedinmeter2topicspecific_clicks",
            id: "19601700681",
            eventFilter: {
              filterType: "target_selector",
              selector: "#li-highlight-meter-2-link",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_topnavsignin_clicks",
            id: "19654431174",
            eventFilter: {
              filterType: "target_selector",
              selector:
                ".bookend.li-redirect,.alt > .bookend,.subnav > .li-redirect.w-nav-link",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18637632856",
            apiName: "16180790160_creators_appstore_clicks",
            id: "19654992752",
            eventFilter: {
              filterType: "target_selector",
              selector: "a:nth-of-type(1) > .app-icon-img",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19343612201",
            apiName: "16180790160_plans_creditcard_clicks",
            id: "19922725474",
            eventFilter: {
              filterType: "target_selector",
              selector: "#payment-page-cta-button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19343612201",
            apiName: "16180790160_plans_yearly_clicks",
            id: "19938460071",
            eventFilter: {
              filterType: "target_selector",
              selector: 'input[value="yearly"]',
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19343612201",
            apiName: "16180790160_plans_paypal_clicks",
            id: "19943494180",
            eventFilter: {
              filterType: "target_selector",
              selector: "#buttons-container",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "19343612201",
            apiName: "16180790160_plans_monthly_clicks",
            id: "19947335448",
            eventFilter: {
              filterType: "target_selector",
              selector: 'input[value="monthly"]',
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18372322582",
            apiName: "16180790160_susi_follow_author_email_button_clicked",
            id: "20014801396",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-email-button button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18372322582",
            apiName: "16180790160_susi_follow_author_google_button_clicked",
            id: "20022591314",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-google-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "18372322582",
            apiName: "16180790160_susi_follow_author_facebook_button_clicked",
            id: "20027712661",
            eventFilter: {
              filterType: "target_selector",
              selector: "#susi-entry-point-follow #susi-modal-fb-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "20039130397",
            apiName: "16180790160_susi_contextual_facebook_clicks",
            id: "20047851836",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-fb-button a, #susi-entry-point-highlight #susi-modal-fb-button a, #susi-entry-point-respond #susi-modal-fb-button a, #susi-entry-point-bookmark #susi-modal-fb-button a, #susi-entry-point-clap #susi-modal-fb-button a, #susi-entry-point-follow_co_brand #susi-modal-fb-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "20039130397",
            apiName: "16180790160_susi_contextual_sign_up_clicks",
            id: "20053531923",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-google-button a, #susi-entry-point-follow #susi-modal-fb-button a, #susi-entry-point-follow #susi-modal-email-button button, #susi-entry-point-highlight  #susi-modal-google-button a, #susi-entry-point-highlight #susi-modal-fb-button a, #susi-entry-point-highlight #susi-modal-email-button button, #susi-entry-point-respond  #susi-modal-google-button a, #susi-entry-point-respond #susi-modal-fb-button a, #susi-entry-point-respond #susi-modal-email-button button, #susi-entry-point-bookmark  #susi-modal-google-button a, #susi-entry-point-bookmark #susi-modal-fb-button a, #susi-entry-point-bookmark #susi-modal-email-button button, #susi-entry-point-clap  #susi-modal-google-button a, #susi-entry-point-clap #susi-modal-fb-button a, #susi-entry-point-clap #susi-modal-email-button button, #susi-entry-point-follow_co_brand  #susi-modal-google-button a, #susi-entry-point-follow_co_brand #susi-modal-fb-button a, #susi-entry-point-follow_co_brand #susi-modal-email-button button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "20039130397",
            apiName: "16180790160_susi_contextual_google_clicks",
            id: "20053752091",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-google-button a, #susi-entry-point-highlight  #susi-modal-google-button a, #susi-entry-point-respond  #susi-modal-google-button a, #susi-entry-point-bookmark  #susi-modal-google-button a, #susi-entry-point-clap  #susi-modal-google-button a, #susi-entry-point-follow_co_brand  #susi-modal-google-button a",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "20039130397",
            apiName: "16180790160_susi_contextual_email_clicks",
            id: "20066992171",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-email-button button, #susi-entry-point-highlight #susi-modal-email-button button, #susi-entry-point-respond #susi-modal-email-button button, #susi-entry-point-bookmark #susi-modal-email-button button, #susi-entry-point-clap #susi-modal-email-button button, #susi-entry-point-follow_co_brand #susi-modal-email-button button",
            },
          },
          {
            category: "other",
            name: null,
            eventType: "click",
            viewId: "20039130397",
            apiName: "16180790160_susi_contextual_sign_in_clicks",
            id: "20069231339",
            eventFilter: {
              filterType: "target_selector",
              selector:
                "#susi-entry-point-follow #susi-modal-sign-up-link button, #susi-entry-point-highlight #susi-modal-sign-up-link button, #susi-entry-point-respond #susi-modal-sign-up-link button, #susi-entry-point-bookmark #susi-modal-sign-up-link button, #susi-entry-point-clap #susi-modal-sign-up-link button, #susi-entry-point-follow_co_brand #susi-modal-sign-up-link button",
            },
          },
        ],
        experimental: { trimPages: true },
        revision: "5962",
      };

      var g = i(133);
      const h = "initializeOptimizelyPreview";
      if ((d.populateDirectiveData(), s.clientHasAlreadyInitialized()))
        return void a.warn(
          "Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?"
        );
      if (s.shouldBailForDesktopApp())
        return void a.log("Main / Disabling because of desktop app.");
      if (s.conflictInObservingChanges())
        return void a.log(
          "Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it."
        );
      if (s.shouldLoadInnie())
        l.registerFunction("getProjectId", () => {
          return p.projectId;
        }),
          l.registerFunction("getAccountId", () => {
            return p.accountId;
          }),
          f.addScriptAsync("https://app.optimizely.com/js/innie.js"),
          a.log("Main / Disabling in favor of the editor client.");
      else if (s.shouldLoadPreview()) {
        let _;
        (_ = s.isSlave()
          ? window.optimizely
          : (window.optimizely = window.optimizely || [])),
          _.push({ type: "load", data: p }),
          a.log("Main / Disabling in favor of the preview client."),
          i(147).setupPreviewGlobal(),
          i(147).pushToPreviewGlobal({
            type: "pushPreviewData",
            name: "liveCommitData",
            data: p,
          }),
          s.isSlave() ||
            (l.registerFunction("getProjectId", () => {
              return p.projectId;
            }),
            f.addScriptSync(
              "https://cdn-assets-prod.s3.amazonaws.com/js/preview2/16180790160.js"
            ));
      } else if (s.shouldBootstrapDataForPreview()) {
        l.registerFunction(h, t => {
          e(t), l.unregisterFunction(h);
        });
        const v = s.isSlave()
          ? PROJECT_ID_FOR_SLAVE_PREVIEW
          : l.getFunction("getProjectId")();
        (u = t(s.getProjectToken(), v, s.getPreviewLayerIds())),
          f.addScriptSync(u),
          i(147).setupPreviewGlobal(),
          f.addScriptAsync("/dist/js/preview_ui.js");
      } else
        s.shouldBootstrapDataForEditor()
          ? (l.registerFunction(h, t => {
              e(t), l.unregisterFunction(h);
            }),
            f.addScriptAsync(window.optimizely_editor_data_endpoint))
          : s.shouldInitialize() && e(p);
      r.timeEnd("block");
    }
    try {
      n();
    } catch (e) {
      try {
        i(120).handleError(e);
      } catch (e) {
        console.log(e);
      }
    }
  },
  (e, t, i) => {
    function n() {
      s();
      let e = x.getRumData();
      return (e.extras = e.extras || {}),
      (e.extras.beacon = { cjsTimeout: !0 }),
      (e = _.pickBy(e, e => {
        return !_.isUndefined(e);
      })),
      a(e)
    ;
    }
    function r(e) {
      const t = P.getPromise("RUM_FIRST_BEACON");
      return t ? t.then(e) : E.makeAsyncRequest("RUM_FIRST_BEACON", e);
    }
    function a(e) {
      return _.isEmpty(e)
        ? D.resolve()
        : r(() => {
            return O.request({
              url: B,
              method: "POST",
              data: e,
              withCredentials: !0,
            })
              .then(e => {
                return E.resolveRequest("RUM_FIRST_BEACON", e), e;
              })
              ["catch"](e => {
                throw (
                  (A.error("POST to client-rum failed:", e),
                  E.rejectRequest("RUM_FIRST_BEACON", e),
                  e)
                );
              });
          });
    }
    function o() {
      const e = y.getCurrentScript();
      if (e) return e.src;
    }
    function s() {
      const e = {
                id: x.getRumId(),
                v: j,
                account: k.getAccountId(),
                project: k.getSnippetId() || k.getProjectId(),
                snippet: k.getSnippetId(),
                revision: k.getRevision(),
                clientVersion: V.getClientVersion(),
                hasSlave: !1,
                wxhr: !0,
                extras: {},
              },
            t = b.getPersistedBehaviorEventCount(),
            i = m.getEventCount();
      e["numBehaviorEvents"] = i;
      const n = i - t;
      _.extend(e.extras, {
        behaviorEventCountDiff: n,
        behaviorEventCountDecreased: n < 0,
      }),
        _.assign(e, c(), d()),
        S.dispatch(C.SET_RUM_DATA, { data: e });
    }
    function c() {
      const e = w.getGlobal("performance");
      if (e) {
        let t;
        const i = x.getScriptSrc();
        try {
          if (i) {
            A.debug("Using derived script src: ", i);
            const n = e.getEntriesByName(i);
            n.length > 0 && (t = n[0]);
          }
          if (!t) {
            const r = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;
            A.debug("Scanning resource timing entries with regex");
            const a = e.getEntriesByType("resource");
            t = _.find(a, e => {
              return r.test(e.name);
            });
          }
          if (t)
            return _.mapValues(N.ResourceTimingAttributes, (e, i) => {
              const n = t[i];
              return "number" == typeof n
                ? Math.round(1e3 * (n || 0)) / 1e3
                : "serverTiming" === i
                ? n || []
                : void 0;
            });
        } catch (e) {
          return;
        }
      }
    }
    function u() {
      try {
        return !y.querySelector("body");
      } catch (e) {
        return null;
      }
    }
    function l() {
      try {
        w.getGlobal("requestAnimationFrame")(() => {
          const e = x.getRumData().timebase;
          S.dispatch(C.SET_RUM_DATA, { data: { render: I.now() - (e || 0) } });
        });
      } catch (e) {
        return;
      }
    }
    function d() {
      return F.getDurationsFor(_.values(N.RUMPerformanceTimingAttributes));
    }
    function f() {
      const e = T.keys(),
            t = _.filter(
              _.map(e, e => {
                const t = b.getStorageKeyFromKey(e);
                return t
                  ? {
                      key: e,
                      isForeign: b.isForeignKey(e),
                      category: t,
                      size: e.length + T.getItem(e).length,
                    }
                  : null;
              })
            ),
            i = _.reduce(
              t,
              (e, t) => {
                const i = t.key, n = b.getIdFromKey(i);
                if (!n) return e;
                const r = t.isForeign ? e.foreign : e.local;
                return (r[n] = !0), e;
              },
              { local: {}, foreign: {} }
            ),
            n = _.chain(t)
              .filter({ isForeign: !0 })
              .reduce((e, t) => {
                const i = t.key.split("_")[0];
                return (e[i] = !0), e;
              }, {})
              .value(),
            r = { local: 0, foreign: 0 },
            a = { local: {}, foreign: {} };
      _.forEach(t, e => {
        const t = e.isForeign ? "foreign" : "local";
        (r[t] += e.size),
          a[t][e.category] || (a[t][e.category] = 0),
          (a[t][e.category] += e.size);
      });
      const o = {
                numKeys: T.allKeys().length,
                sizeKeys: T.allKeys().toString().length,
                sizeValues: T.allValues().toString().length,
                idCounts: {
                  local: _.keys(i.local).length,
                  foreign: _.keys(i.foreign).length,
                },
                foreignOriginCount: _.keys(n).length,
                byteTotals: r,
                byteTotalsByCategory: a,
              },
            s = R.estimateStorage();
      return s.then(e => {
        return _.assign(o, { storageEstimate: e });
      });
    }
    function p() {
      const e = w.getGlobal("performance"), t = e ? e.timing : {}, i = F.getMarks() || {}, n = x.getApiData(), r = x.getDOMObservationData(), o = G.get("state").getActiveExperimentIds(), s = x.getFeaturesNeededData(), c = y.parseUri(x.getScriptSrc()), u = x.getRumData() || {}, l = u.extras || {};
      _.assign(l, {
        apiCalls: n,
        DOMObservationData: r,
        paintTimings: h(),
        activeExperimentIds: o,
        numPages: U.getNumberOfPages(),
        snippet: {
          scheme: c.protocol.slice(0, -1),
          host: c.host,
          path: c.pathname,
        },
        networkInfo: g(),
        experimental: k.getExperimental(),
        featuresNeeded: s,
        beacon: { cjsOnload: !0 },
      });
      const d = w.getGlobal("Prototype");
      d && !_.isUndefined(d.Version) && (l.prototypeJS = d.Version);
      let p = !1;
      p = !0;
      const v = M.getFrames();
      v.length && (l.xdFramesLoaded = v.length);
      const E = {
        id: x.getRumId(),
        v: j,
        project: k.getSnippetId() || k.getProjectId(),
        navigationTimings: t,
        userTimings: i,
        xd: p,
        apis: _.keys(n),
        extras: l,
        sampleRate: u.sampleRate,
      };
      f().then(e => {
        const t = _.assign(E, { lsMetrics: e });
        a(t);
      });
    }
    function g() {
      const e = w.getGlobal("navigator");
      if (e && e.connection)
        return _.pick(e.connection, ["downlink", "rtt", "effectiveType"]);
    }
    function h() {
      const e = w.getGlobal("performance");
      if (e)
        try {
          const t = e.getEntriesByType("paint");
          if (_.isEmpty(t)) return;
          return _.reduce(
            t,
            (e, t) => {
              return (e[t.name] = Math.round(t.startTime)), e;
            },
            {}
          );
        } catch (e) {
          return;
        }
    }
    var _ = i(2);
    const v = i(5);
    var E = i(6);
    var m = i(71);
    var I = i(24);
    var y = i(80);
    var S = i(9);
    var T = i(81).LocalStorage;
    var A = i(23);
    var R = i(90);
    var D = i(12).Promise;
    var b = i(74);
    var w = i(40);
    var O = i(91);
    var C = i(7);
    var N = i(25);
    const L = i(16);
    var P = L.get("stores/async_request");
    var V = L.get("stores/client_metadata");
    var k = L.get("stores/global");
    var x = L.get("stores/rum");
    var F = L.get("stores/performance");
    var M = L.get("stores/xdomain");
    var U = L.get("stores/view_data");
    var G = i(93);
    var B = "https://rum.optimizely.com/rum";
    const z = 3e3;
    var j = "1.0";
    const H = 0.01;
    (t.initialize = () => {
      let e;
      const t = v.generate().replace(/-/g, "");
      e = Math.random() < H;
      const i = o();
      S.dispatch(C.SET_RUM_DATA, {
        id: t,
        RumHost: B,
        inRumSample: e,
        src: i,
        data: {
          id: t,
          sync: u(),
          timebase: I.now(),
          sampleRate: H,
          url: i,
          extras: { initialDOMState: y.getReadyState() },
        },
      });
    }),
      (t.queueBeacons = () => {
        return x.getSampleRum()
          ? (l(),
            y.isLoaded() ? w.setTimeout(p, z) : w.addEventListener("load", p),
            new D((e, t) => {
              w.setTimeout(() => {
                n().then(e, t);
              }, z);
            }).catch(e => {
              A.warn("RUM / Error sending data:", e);
            }))
          : D.resolve();
      });
  },
  (e, t, i) => {
    e.exports = i(3)._.noConflict();
  },
  (e, t, i) => {
    (function (e, i) {
      (function () {
        function n(e, t) {
          return e.set(t[0], t[1]), e;
        }
        function r(e, t) {
          return e.add(t), e;
        }
        function a(e, t) {
          return c(be(e), fi);
        }
        function o(e, t) {
          return !!e.length && f(e, t, 0) > -1;
        }
        function s(e, t, i) {
          for (let n = -1, r = e.length; ++n < r; ) if (i(t, e[n])) return !0;
          return !1;
        }
        function c(e, t) {
          for (let i = -1, n = t.length, r = e.length; ++i < n; )
            e[r + i] = t[i];
          return e;
        }
        function u(e, t, i) {
          for (let n = -1, r = e.length; ++n < r; ) {
            const a = e[n], o = t(a);
            if (null != o && (s === Ti ? o === o : i(o, s)))
              var s = o,
                c = a;
          }
          return c;
        }
        function l(e, t, i, n) {
          let r;
          return i(e, (e, i, a) => {
            if (t(e, i, a)) return (r = n ? i : e), !1;
          }),
          r
        ;
        }
        function d(e, t, i) {
          for (let n = e.length, r = i ? n : -1; i ? r-- : ++r < n; )
            if (t(e[r], r, e)) return r;
          return -1;
        }
        function f(e, t, i) {
          if (t !== t) return I(e, i);
          for (let n = i - 1, r = e.length; ++n < r; ) if (e[n] === t) return n;
          return -1;
        }
        function p(e, t, i, n, r) {
          return r(e, (e, r, a) => {
            i = n ? ((n = !1), e) : t(i, e, r, a);
          }),
          i
        ;
        }
        function g(e, t) {
          for (var i = -1, n = Array(e); ++i < e; ) n[i] = t(i);
          return n;
        }
        function h(e) {
          return t => {
            return e(t);
          };
        }
        function _(e, t) {
          return me(t, t => {
            return e[t];
          });
        }
        function v(e) {
          return e && e.Object === Object ? e : null;
        }
        function E(e, t) {
          if (e !== t) {
            const i = null === e, n = e === Ti, r = e === e, a = null === t, o = t === Ti, s = t === t;
            if ((e > t && !a) || !r || (i && !o && s) || (n && s)) return 1;
            if ((e < t && !i) || !s || (a && !n && r) || (o && r)) return -1;
          }
          return 0;
        }
        function m(e) {
          return gn[e];
        }
        function I(e, t, i) {
          for (let n = e.length, r = t + (i ? 0 : -1); i ? r-- : ++r < n; ) {
            const a = e[r];
            if (a !== a) return r;
          }
          return -1;
        }
        function y(e) {
          let t = !1;
          if (null != e && "function" != typeof e.toString)
            try {
              t = !!(e + "");
            } catch (e) {}
          return t;
        }
        function S(e, t) {
          return (
            (e = "number" == typeof e || dn.test(e) ? +e : -1),
            (t = null == t ? Pi : t),
            e > -1 && e % 1 == 0 && e < t
          );
        }
        function T(e) {
          for (var t, i = []; !(t = e.next()).done; ) i.push(t.value);
          return i;
        }
        function A(e) {
          let t = -1;
          const i = Array(e.size);
          return e.forEach((e, n) => {
            i[++t] = [n, e];
          }),
          i
        ;
        }
        function R(e) {
          let t = -1;
          const i = Array(e.size);
          return e.forEach(e => {
            i[++t] = e;
          }),
          i
        ;
        }
        function D(e) {
          if (jt(e) && !dr(e)) {
            if (e instanceof b) return e;
            if (bn.call(e, "__wrapped__")) return tt(e);
          }
          return new b(e);
        }
        function b(e, t) {
          (this.e = e), (this.u = []), (this.l = !!t);
        }
        function w() {}
        function O(e, t) {
          return N(e, t) && delete e[t];
        }
        function C(e, t) {
          if (Xn) {
            const i = e[t];
            return i === bi ? Ti : i;
          }
          return bn.call(e, t) ? e[t] : Ti;
        }
        function N(e, t) {
          return Xn ? e[t] !== Ti : bn.call(e, t);
        }
        function L(e, t, i) {
          e[t] = Xn && i === Ti ? bi : i;
        }
        function P(e) {
          let t = -1;
          const i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            const n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function V() {
          this.d = { hash: new w(), map: Yn ? new Yn() : [], string: new w() };
        }
        function k(e) {
          const t = this.d;
          return Ze(e)
            ? O("string" == typeof e ? t.string : t.hash, e)
            : Yn
            ? t.map["delete"](e)
            : W(t.map, e);
        }
        function x(e) {
          const t = this.d;
          return Ze(e)
            ? C("string" == typeof e ? t.string : t.hash, e)
            : Yn
            ? t.map.get(e)
            : X(t.map, e);
        }
        function F(e) {
          const t = this.d;
          return Ze(e)
            ? N("string" == typeof e ? t.string : t.hash, e)
            : Yn
            ? t.map.has(e)
            : Q(t.map, e);
        }
        function M(e, t) {
          const i = this.d;
          return (
            Ze(e)
              ? L("string" == typeof e ? i.string : i.hash, e, t)
              : Yn
              ? i.map.set(e, t)
              : J(i.map, e, t),
            this
          );
        }
        function U(e) {
          let t = -1;
          const i = e ? e.length : 0;
          for (this.d = new P(); ++t < i; ) this.push(e[t]);
        }
        function G(e, t) {
          const i = e.d;
          if (Ze(t)) {
            const n = i.d, r = "string" == typeof t ? n.string : n.hash;
            return r[t] === bi;
          }
          return i.has(t);
        }
        function B(e) {
          const t = this.d;
          if (Ze(e)) {
            const i = t.d, n = "string" == typeof e ? i.string : i.hash;
            n[e] = bi;
          } else t.set(e, bi);
        }
        function z(e) {
          let t = -1;
          const i = e ? e.length : 0;
          for (this.clear(); ++t < i; ) {
            const n = e[t];
            this.set(n[0], n[1]);
          }
        }
        function j() {
          this.d = { array: [], map: null };
        }
        function H(e) {
          const t = this.d, i = t.array;
          return i ? W(i, e) : t.map["delete"](e);
        }
        function K(e) {
          const t = this.d, i = t.array;
          return i ? X(i, e) : t.map.get(e);
        }
        function Y(e) {
          const t = this.d, i = t.array;
          return i ? Q(i, e) : t.map.has(e);
        }
        function q(e, t) {
          const i = this.d, n = i.array;
          n &&
            (n.length < Ri - 1
              ? J(n, e, t)
              : ((i.array = null), (i.map = new P(n))));
          const r = i.map;
          return r && r.set(e, t), this;
        }
        function W(e, t) {
          const i = $(e, t);
          if (i < 0) return !1;
          const n = e.length - 1;
          return i == n ? e.pop() : zn.call(e, i, 1), !0;
        }
        function X(e, t) {
          const i = $(e, t);
          return i < 0 ? Ti : e[i][1];
        }
        function Q(e, t) {
          return $(e, t) > -1;
        }
        function $(e, t) {
          for (let i = e.length; i--; ) if (Ct(e[i][0], t)) return i;
          return -1;
        }
        function J(e, t, i) {
          const n = $(e, t);
          n < 0 ? e.push([t, i]) : (e[n][1] = i);
        }
        function Z(e, t, i, n) {
          return e === Ti || (Ct(e, Rn[i]) && !bn.call(n, i)) ? t : e;
        }
        function ee(e, t, i) {
          ((i === Ti || Ct(e[t], i)) &&
            ("number" != typeof t || i !== Ti || t in e)) ||
            (e[t] = i);
        }
        function te(e, t, i) {
          const n = e[t];
          (bn.call(e, t) && Ct(n, i) && (i !== Ti || t in e)) || (e[t] = i);
        }
        function ie(e, t) {
          return e && nr(t, oi(t), e);
        }
        function ne(e) {
          return "function" == typeof e ? e : hi;
        }
        function re(e, t, i, n, r, a, o) {
          let s;
          if ((n && (s = a ? n(e, r, a, o) : n(e)), s !== Ti)) return s;
          if (!zt(e)) return e;
          const c = dr(e);
          if (c) {
            if (((s = Xe(e)), !t)) return be(e, s);
          } else {
            const u = We(e), l = u == Ui || u == Gi;
            if (fr(e)) return Ce(e, t);
            if (u == ji || u == Vi || (l && !a)) {
              if (y(e)) return a ? e : {};
              if (((s = Qe(l ? {} : e)), !t))
                return (s = ie(s, e)), i ? Me(e, s) : s;
            } else {
              if (!pn[u]) return a ? e : {};
              s = $e(e, u, t);
            }
          }
          o || (o = new z());
          const d = o.get(e);
          return d
            ? d
            : (o.set(e, s),
              (c ? tr : fe)(e, (r, a) => {
                te(s, a, re(r, t, i, n, a, e, o));
              }),
              i && !c ? Me(e, s) : s);
        }
        function ae(e) {
          return zt(e) ? Gn(e) : {};
        }
        function oe(e, t, i) {
          if ("function" != typeof e) throw new TypeError(Di);
          return setTimeout(() => {
            e.apply(Ti, i);
          }, t);
        }
        function se(e, t, i, n) {
          let r = -1;
          let a = o;
          let c = !0;
          const u = e.length;
          const l = [];
          const d = t.length;
          if (!u) return l;
          i && (t = me(t, h(i))),
            n
              ? ((a = s), (c = !1))
              : t.length >= Ri && ((a = G), (c = !1), (t = new U(t)));
          e: for (; ++r < u; ) {
            const f = e[r], p = i ? i(f) : f;
            if (c && p === p) {
              for (let g = d; g--; ) if (t[g] === p) continue e;
              l.push(f);
            } else a(t, p, n) || l.push(f);
          }
          return l;
        }
        function ce(e, t) {
          let i = !0;
          return tr(e, (e, n, r) => {
            return (i = !!t(e, n, r));
          }),
          i
        ;
        }
        function ue(e, t) {
          const i = [];
          return tr(e, (e, n, r) => {
            t(e, n, r) && i.push(e);
          }),
          i
        ;
        }
        function le(e, t, i, n) {
          n || (n = []);
          for (let r = -1, a = e.length; ++r < a; ) {
            const o = e[r];
            t > 0 && Vt(o) && (i || dr(o) || Lt(o))
              ? t > 1
                ? le(o, t - 1, i, n)
                : c(n, o)
              : i || (n[n.length] = o);
          }
          return n;
        }
        function de(e, t) {
          return null == e ? e : ir(e, t, si);
        }
        function fe(e, t) {
          return e && ir(e, t, oi);
        }
        function pe(e, t) {
          return ue(t, t => {
            return Gt(e[t]);
          });
        }
        function ge(e, t, i, n, r) {
          return (
            e === t ||
            (null == e || null == t || (!zt(e) && !jt(t))
              ? e !== e && t !== t
              : he(e, t, ge, i, n, r))
          );
        }
        function he(e, t, i, n, r, a) {
          const o = dr(e);
          const s = dr(t);
          let c = ki;
          let u = ki;
          o || ((c = Cn.call(e)), (c = c == Vi ? ji : c)),
            s || ((u = Cn.call(t)), (u = u == Vi ? ji : u));
          const l = c == ji && !y(e), d = u == ji && !y(t), f = c == u;
          a || (a = []);
          const p = _t(a, t => {
            return t[0] === e;
          });
          if (p && p[1]) return p[1] == t;
          if ((a.push([e, t]), f && !l)) {
            var g = o || $t(e) ? He(e, t, i, n, r, a) : Ke(e, t, c, i, n, r, a);
            return a.pop(), g;
          }
          if (!(r & Ni)) {
            const h = l && bn.call(e, "__wrapped__"), _ = d && bn.call(t, "__wrapped__");
            if (h || _) {
              var g = i(h ? e.value() : e, _ ? t.value() : t, n, r, a);
              return a.pop(), g;
            }
          }
          if (!f) return !1;
          var g = Ye(e, t, i, n, r, a);
          return a.pop(), g;
        }
        function _e(e) {
          const t = typeof e;
          return "function" == t
            ? e
            : null == e
            ? hi
            : ("object" == t ? Ie : Re)(e);
        }
        function ve(e) {
          return Hn(Object(e));
        }
        function Ee(e) {
          e = null == e ? e : Object(e);
          const t = [];
          for (const i in e) t.push(i);
          return t;
        }
        function me(e, t) {
          let i = -1;
          const n = Pt(e) ? Array(e.length) : [];
          return tr(e, (e, r, a) => {
            n[++i] = t(e, r, a);
          }),
          n
        ;
        }
        function Ie(e) {
          const t = oi(e);
          return i => {
            let n = t.length;
            if (null == i) return !n;
            for (i = Object(i); n--; ) {
              const r = t[n];
              if (!(r in i && ge(e[r], i[r], Ti, Ci | Ni))) return !1;
            }
            return !0;
          };
        }
        function ye(e, t, i, n, r) {
          if (e !== t) {
            const a = dr(t) || $t(t) ? Ti : si(t);
            tr(a || t, (o, s) => {
              if ((a && ((s = o), (o = t[s])), zt(o)))
                r || (r = new z()), Se(e, t, s, i, ye, n, r);
              else {
                let c = n ? n(e[s], o, s + "", e, t, r) : Ti;
                c === Ti && (c = o), ee(e, s, c);
              }
            });
          }
        }
        function Se(e, t, i, n, r, a, o) {
          const s = e[i], c = t[i], u = o.get(c);
          if (u) return void ee(e, i, u);
          let l = a ? a(s, c, i + "", e, t, o) : Ti, d = l === Ti;
          d &&
            ((l = c),
            dr(c) || $t(c)
              ? dr(s)
                ? (l = s)
                : Vt(s)
                ? (l = be(s))
                : ((d = !1), (l = re(c, !a)))
              : Wt(c) || Lt(c)
              ? Lt(s)
                ? (l = ti(s))
                : !zt(s) || (n && Gt(s))
                ? ((d = !1), (l = re(c, !a)))
                : (l = s)
              : (d = !1)),
            o.set(c, l),
            d && r(l, c, n, a, o),
            o["delete"](c),
            ee(e, i, l);
        }
        function Te(e, t) {
          return (e = Object(e)),
          It(
            t,
            (t, i) => {
              return i in e && (t[i] = e[i]), t;
            },
            {}
          )
        ;
        }
        function Ae(e, t) {
          const i = {};
          return de(e, (e, n) => {
            t(e, n) && (i[n] = e);
          }),
          i
        ;
        }
        function Re(e) {
          return t => {
            return null == t ? Ti : t[e];
          };
        }
        function De(e, t, i) {
          let n = -1, r = e.length;
          t < 0 && (t = -t > r ? 0 : r + t),
            (i = i > r ? r : i),
            i < 0 && (i += r),
            (r = t > i ? 0 : (i - t) >>> 0),
            (t >>>= 0);
          for (var a = Array(r); ++n < r; ) a[n] = e[n + t];
          return a;
        }
        function be(e) {
          return De(e, 0, e.length);
        }
        function we(e, t) {
          let i;
          return tr(e, (e, n, r) => {
            return (i = t(e, n, r)), !i;
          }),
          !!i
        ;
        }
        function Oe(e, t) {
          const i = e;
          return It(
            t,
            (e, t) => {
              return t.func.apply(t.thisArg, c([e], t.args));
            },
            i
          );
        }
        function Ce(e, t) {
          if (t) return e.slice();
          const i = new e.constructor(e.length);
          return e.copy(i), i;
        }
        function Ne(e) {
          const t = new e.constructor(e.byteLength);
          return new xn(t).set(new xn(e)), t;
        }
        function Le(e) {
          return It(A(e), n, new e.constructor());
        }
        function Pe(e) {
          const t = new e.constructor(e.source, un.exec(e));
          return (t.lastIndex = e.lastIndex), t;
        }
        function Ve(e) {
          return It(R(e), r, new e.constructor());
        }
        function ke(e) {
          return er ? Object(er.call(e)) : {};
        }
        function xe(e, t) {
          const i = t ? Ne(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.length);
        }
        function Fe(e, t, i, n) {
          i || (i = {});
          for (let r = -1, a = t.length; ++r < a; ) {
            const o = t[r], s = n ? n(i[o], e[o], o, i, e) : e[o];
            te(i, o, s);
          }
          return i;
        }
        function Me(e, t) {
          return nr(e, ar(e), t);
        }
        function Ue(e) {
          return bt((t, i) => {
            let n = -1, r = i.length, a = r > 1 ? i[r - 1] : Ti;
            for (
              a = "function" == typeof a ? (r--, a) : Ti, t = Object(t);
              ++n < r;

            ) {
              const o = i[n];
              o && e(t, o, n, a);
            }
            return t;
          });
        }
        function Ge(e, t) {
          return (i, n) => {
            if (null == i) return i;
            if (!Pt(i)) return e(i, n);
            for (
              let r = i.length, a = t ? r : -1, o = Object(i);
              (t ? a-- : ++a < r) && n(o[a], a, o) !== !1;

            );
            return i;
          };
        }
        function Be(e) {
          return (t, i, n) => {
            for (let r = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
              const c = o[e ? s : ++r];
              if (i(a[c], c, a) === !1) break;
            }
            return t;
          };
        }
        function ze(e) {
          return function () {
            const t = arguments, i = ae(e.prototype), n = e.apply(i, t);
            return zt(n) ? n : i;
          };
        }
        function je(e, t, i, n) {
          function r() {
            for (
              var t = -1,
                s = arguments.length,
                c = -1,
                u = n.length,
                l = Array(u + s),
                d = this && this !== Tn && this instanceof r ? o : e;
              ++c < u;

            )
              l[c] = n[c];
            for (; s--; ) l[c++] = arguments[++t];
            return d.apply(a ? i : this, l);
          }
          if ("function" != typeof e) throw new TypeError(Di);
          var a = t & wi,
            o = ze(e);
          return r;
        }
        function He(e, t, i, n, r, a) {
          let o = -1;
          const s = r & Ni;
          const c = r & Ci;
          const u = e.length;
          const l = t.length;
          if (u != l && !(s && l > u)) return !1;
          for (var d = !0; ++o < u; ) {
            let f;
            const p = e[o];
            const g = t[o];
            if (f !== Ti) {
              if (f) continue;
              d = !1;
              break;
            }
            if (c) {
              if (
                !we(t, e => {
                  return p === e || i(p, e, n, r, a);
                })
              ) {
                d = !1;
                break;
              }
            } else if (p !== g && !i(p, g, n, r, a)) {
              d = !1;
              break;
            }
          }
          return d;
        }
        function Ke(e, t, i, n, r, a, o) {
          switch (i) {
            case xi:
            case Fi:
              return +e == +t;
            case Mi:
              return e.name == t.name && e.message == t.message;
            case zi:
              return e != +e ? t != +t : e == +t;
            case Hi:
            case Yi:
              return e == t + "";
          }
          return !1;
        }
        function Ye(e, t, i, n, r, a) {
          const o = r & Ni, s = oi(e), c = s.length, u = oi(t), l = u.length;
          if (c != l && !o) return !1;
          for (var d = c; d--; ) {
            var f = s[d];
            if (!(o ? f in t : bn.call(t, f))) return !1;
          }
          for (var p = !0, g = o; ++d < c; ) {
            f = s[d];
            let h;
            const _ = e[f];
            const v = t[f];
            if (!(h === Ti ? _ === v || i(_, v, n, r, a) : h)) {
              p = !1;
              break;
            }
            g || (g = "constructor" == f);
          }
          if (p && !g) {
            const E = e.constructor, m = t.constructor;
            E != m &&
              "constructor" in e &&
              "constructor" in t &&
              !(
                "function" == typeof E &&
                E instanceof E &&
                "function" == typeof m &&
                m instanceof m
              ) &&
              (p = !1);
          }
          return p;
        }
        function qe(e, t) {
          const i = e[t];
          return Kt(i) ? i : Ti;
        }
        function We(e) {
          return Cn.call(e);
        }
        function Xe(e) {
          const t = e.length, i = e.constructor(t);
          return (
            t &&
              "string" == typeof e[0] &&
              bn.call(e, "index") &&
              ((i.index = e.index), (i.input = e.input)),
            i
          );
        }
        function Qe(e) {
          return "function" != typeof e.constructor || et(e) ? {} : ae(Mn(e));
        }
        function $e(e, t, i) {
          const n = e.constructor;
          switch (t) {
            case Xi:
              return Ne(e);
            case xi:
            case Fi:
              return new n(+e);
            case Qi:
            case $i:
            case Ji:
            case Zi:
            case en:
            case tn:
            case nn:
            case rn:
            case an:
              return xe(e, i);
            case Bi:
              return Le(e);
            case zi:
            case Yi:
              return new n(e);
            case Hi:
              return Pe(e);
            case Ki:
              return Ve(e);
            case qi:
              return ke(e);
          }
        }
        function Je(e) {
          const t = e ? e.length : Ti;
          return Bt(t) && (dr(e) || Qt(e) || Lt(e)) ? g(t, String) : null;
        }
        function Ze(e) {
          const t = typeof e;
          return (
            "number" == t ||
            "boolean" == t ||
            ("string" == t && "__proto__" != e) ||
            null == e
          );
        }
        function et(e) {
          const t = e && e.constructor, i = ("function" == typeof t && t.prototype) || Rn;
          return e === i;
        }
        function tt(e) {
          const t = new b(e.e, e.l);
          return (t.u = be(e.u)), t;
        }
        function it(e) {
          return ue(e, Boolean);
        }
        function nt(e, t) {
          return e && e.length ? d(e, _e(t, 3)) : -1;
        }
        function rt(e) {
          const t = e ? e.length : 0;
          return t ? le(e, 1) : [];
        }
        function at(e) {
          const t = e ? e.length : 0;
          return t ? le(e, Li) : [];
        }
        function ot(e) {
          return e ? e[0] : Ti;
        }
        function st(e, t, i) {
          const n = e ? e.length : 0;
          i = "number" == typeof i ? (i < 0 ? Kn(n + i, 0) : i) : 0;
          for (let r = (i || 0) - 1, a = t === t; ++r < n; ) {
            const o = e[r];
            if (a ? o === t : o !== o) return r;
          }
          return -1;
        }
        function ct(e) {
          const t = e ? e.length : 0;
          return t ? e[t - 1] : Ti;
        }
        function ut(e, t, i) {
          const n = e ? e.length : 0;
          return (
            (t = null == t ? 0 : +t),
            (i = i === Ti ? n : +i),
            n ? De(e, t, i) : []
          );
        }
        function lt(e) {
          const t = D(e);
          return (t.l = !0), t;
        }
        function dt(e, t) {
          return t(e), e;
        }
        function ft(e, t) {
          return t(e);
        }
        function pt() {
          return Oe(this.e, this.u);
        }
        function gt(e, t, i) {
          return (t = i ? Ti : t), ce(e, _e(t));
        }
        function ht(e, t) {
          return ue(e, _e(t));
        }
        function _t(e, t) {
          return l(e, _e(t), tr);
        }
        function vt(e, t) {
          return tr(e, ne(t));
        }
        function Et(e, t, i, n) {
          (e = Pt(e) ? e : fi(e)), (i = i && !n ? pr(i) : 0);
          const r = e.length;
          return (
            i < 0 && (i = Kn(r + i, 0)),
            Qt(e) ? i <= r && e.indexOf(t, i) > -1 : !!r && f(e, t, i) > -1
          );
        }
        function mt(e, t) {
          return me(e, _e(t));
        }
        function It(e, t, i) {
          return p(e, _e(t), i, arguments.length < 3, tr);
        }
        function yt(e) {
          return null == e ? 0 : ((e = Pt(e) ? e : oi(e)), e.length);
        }
        function St(e, t, i) {
          return (t = i ? Ti : t), we(e, _e(t));
        }
        function Tt(e, t) {
          let i = 0;
          return (t = _e(t)),
          me(
            me(e, (e, n, r) => {
              return { value: e, index: i++, criteria: t(e, n, r) };
            }).sort((e, t) => {
              return E(e.criteria, t.criteria) || e.index - t.index;
            }),
            Re("value")
          )
        ;
        }
        function At(e, t) {
          let i;
          if ("function" != typeof t) throw new TypeError(Di);
          return (
            (e = pr(e)),
            function () {
              return (
                --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = Ti), i
              );
            }
          );
        }
        function Rt(e) {
          if ("function" != typeof e) throw new TypeError(Di);
          return function () {
            return !e.apply(this, arguments);
          };
        }
        function Dt(e) {
          return At(2, e);
        }
        function bt(e, t) {
          if ("function" != typeof e) throw new TypeError(Di);
          return (t = Kn(t === Ti ? e.length - 1 : pr(t), 0)),
          function () {
            for (
              var i = arguments,
                n = -1,
                r = Kn(i.length - t, 0),
                a = Array(r);
              ++n < r;

            )
              a[n] = i[t + n];
            const o = Array(t + 1);
            for (n = -1; ++n < t; ) o[n] = i[n];
            return (o[t] = a), e.apply(this, o);
          }
        ;
        }
        function wt(e) {
          return zt(e) ? (dr(e) ? be(e) : nr(e, oi(e))) : e;
        }
        function Ot(e) {
          return re(e, !0, !0);
        }
        function Ct(e, t) {
          return e === t || (e !== e && t !== t);
        }
        function Nt(e, t) {
          return e > t;
        }
        function Lt(e) {
          return (
            Vt(e) &&
            bn.call(e, "callee") &&
            (!Bn.call(e, "callee") || Cn.call(e) == Vi)
          );
        }
        function Pt(e) {
          return null != e && Bt(rr(e)) && !Gt(e);
        }
        function Vt(e) {
          return jt(e) && Pt(e);
        }
        function kt(e) {
          return e === !0 || e === !1 || (jt(e) && Cn.call(e) == xi);
        }
        function xt(e) {
          return jt(e) && Cn.call(e) == Fi;
        }
        function Ft(e) {
          if (Pt(e) && (dr(e) || Qt(e) || Gt(e.splice) || Lt(e)))
            return !e.length;
          for (const t in e) if (bn.call(e, t)) return !1;
          return !0;
        }
        function Mt(e, t) {
          return ge(e, t);
        }
        function Ut(e) {
          return "number" == typeof e && jn(e);
        }
        function Gt(e) {
          const t = zt(e) ? Cn.call(e) : "";
          return t == Ui || t == Gi;
        }
        function Bt(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Pi;
        }
        function zt(e) {
          const t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function jt(e) {
          return !!e && "object" == typeof e;
        }
        function Ht(e) {
          return qt(e) && e != +e;
        }
        function Kt(e) {
          return (
            null != e &&
            (Gt(e) ? Ln.test(Dn.call(e)) : jt(e) && (y(e) ? Ln : ln).test(e))
          );
        }
        function Yt(e) {
          return null === e;
        }
        function qt(e) {
          return "number" == typeof e || (jt(e) && Cn.call(e) == zi);
        }
        function Wt(e) {
          if (!jt(e) || Cn.call(e) != ji || y(e)) return !1;
          const t = Mn(e);
          if (null === t) return !0;
          const i = t.constructor;
          return "function" == typeof i && i instanceof i && Dn.call(i) == On;
        }
        function Xt(e) {
          return zt(e) && Cn.call(e) == Hi;
        }
        function Qt(e) {
          return "string" == typeof e || (!dr(e) && jt(e) && Cn.call(e) == Yi);
        }
        function $t(e) {
          return jt(e) && Bt(e.length) && !!fn[Cn.call(e)];
        }
        function Jt(e) {
          return e === Ti;
        }
        function Zt(e, t) {
          return e < t;
        }
        function ei(e) {
          return Pt(e) ? (e.length ? be(e) : []) : fi(e);
        }
        function ti(e) {
          return nr(e, si(e));
        }
        function ii(e) {
          return "string" == typeof e ? e : null == e ? "" : e + "";
        }
        function ni(e, t) {
          const i = ae(e);
          return t ? hr(i, t) : i;
        }
        function ri(e, t) {
          return e && fe(e, ne(t));
        }
        function ai(e, t) {
          return null != e && bn.call(e, t);
        }
        function oi(e) {
          const t = et(e);
          if (!t && !Pt(e)) return ve(e);
          const i = Je(e), n = !!i, r = i || [], a = r.length;
          for (const o in e)
            !bn.call(e, o) ||
              (n && ("length" == o || S(o, a))) ||
              (t && "constructor" == o) ||
              r.push(o);
          return r;
        }
        function si(e) {
          for (
            var t = -1,
              i = et(e),
              n = Ee(e),
              r = n.length,
              a = Je(e),
              o = !!a,
              s = a || [],
              c = s.length;
            ++t < r;

          ) {
            const u = n[t];
            (o && ("length" == u || S(u, c))) ||
              ("constructor" == u && (i || !bn.call(e, u))) ||
              s.push(u);
          }
          return s;
        }
        function ci(e, t) {
          const i = {};
          return (t = _e(t, 3)),
          fe(e, (e, n, r) => {
            i[n] = t(e, n, r);
          }),
          i
        ;
        }
        function ui(e, t) {
          return (t = _e(t)),
          Ae(e, (e, i) => {
            return !t(e, i);
          })
        ;
        }
        function li(e, t) {
          return null == e ? {} : Ae(e, _e(t));
        }
        function di(e, t, i) {
          let n = null == e ? Ti : e[t];
          return n === Ti && (n = i), Gt(n) ? n.call(e) : n;
        }
        function fi(e) {
          return e ? _(e, oi(e)) : [];
        }
        function pi(e) {
          return (e = ii(e)), e && sn.test(e) ? e.replace(on, m) : e;
        }
        function gi(e) {
          return () => {
            return e;
          };
        }
        function hi(e) {
          return e;
        }
        function _i(e) {
          return Ie(hr({}, e));
        }
        function vi(e, t, i) {
          const n = oi(t);
          let r = pe(t, n);
          null != i ||
            (zt(t) && (r.length || !n.length)) ||
            ((i = t), (t = e), (e = this), (r = pe(t, oi(t))));
          const a = !(zt(i) && "chain" in i) || i.chain, o = Gt(e);
          return tr(r, i => {
            const n = t[i];
            (e[i] = n),
              o &&
                (e.prototype[i] = function () {
                  const t = this.l;
                  if (a || t) {
                    const i = e(this.e), r = (i.u = be(this.u));
                    return (
                      r.push({ func: n, args: arguments, thisArg: e }),
                      (i.l = t),
                      i
                    );
                  }
                  return n.apply(e, c([this.value()], arguments));
                });
          }),
          e;
        }
        function Ei() {
          return Tn._ === this && (Tn._ = Nn), this;
        }
        function mi() {}
        function Ii(e) {
          const t = ++wn;
          return ii(e) + t;
        }
        function yi(e) {
          return e && e.length ? u(e, hi, Nt) : Ti;
        }
        function Si(e) {
          return e && e.length ? u(e, hi, Zt) : Ti;
        }
        var Ti;
        const Ai = "4.6.1";
        var Ri = 200;
        var Di = "Expected a function";
        var bi = "__lodash_hash_undefined__";
        var wi = 1;
        const Oi = 32;
        var Ci = 1;
        var Ni = 2;
        var Li = 1 / 0;
        var Pi = 9007199254740991;
        var Vi = "[object Arguments]";
        var ki = "[object Array]";
        var xi = "[object Boolean]";
        var Fi = "[object Date]";
        var Mi = "[object Error]";
        var Ui = "[object Function]";
        var Gi = "[object GeneratorFunction]";
        var Bi = "[object Map]";
        var zi = "[object Number]";
        var ji = "[object Object]";
        var Hi = "[object RegExp]";
        var Ki = "[object Set]";
        var Yi = "[object String]";
        var qi = "[object Symbol]";
        const Wi = "[object WeakMap]";
        var Xi = "[object ArrayBuffer]";
        var Qi = "[object Float32Array]";
        var $i = "[object Float64Array]";
        var Ji = "[object Int8Array]";
        var Zi = "[object Int16Array]";
        var en = "[object Int32Array]";
        var tn = "[object Uint8Array]";
        var nn = "[object Uint8ClampedArray]";
        var rn = "[object Uint16Array]";
        var an = "[object Uint32Array]";
        var on = /[&<>"'`]/g;
        var sn = RegExp(on.source);
        const cn = /[\\^$.*+?()[\]{}|]/g;
        var un = /\w*$/;
        var ln = /^\[object .+?Constructor\]$/;
        var dn = /^(?:0|[1-9]\d*)$/;
        var fn = {};
        (fn[Qi] = fn[$i] = fn[Ji] = fn[Zi] = fn[en] = fn[tn] = fn[nn] = fn[
          rn
        ] = fn[an] = !0),
          (fn[Vi] = fn[ki] = fn[Xi] = fn[xi] = fn[Fi] = fn[Mi] = fn[Ui] = fn[
            Bi
          ] = fn[zi] = fn[ji] = fn[Hi] = fn[Ki] = fn[Yi] = fn[Wi] = !1);
        var pn = {};
        (pn[Vi] = pn[ki] = pn[Xi] = pn[xi] = pn[Fi] = pn[Qi] = pn[$i] = pn[
          Ji
        ] = pn[Zi] = pn[en] = pn[Bi] = pn[zi] = pn[ji] = pn[Hi] = pn[Ki] = pn[
          Yi
        ] = pn[qi] = pn[tn] = pn[nn] = pn[rn] = pn[an] = !0),
          (pn[Mi] = pn[Ui] = pn[Wi] = !1);

        var gn = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;",
          };

        const hn = { function: !0, object: !0 };
        const _n = hn[typeof t] && t && !t.nodeType ? t : Ti;
        const vn = hn[typeof e] && e && !e.nodeType ? e : Ti;
        const En = vn && vn.exports === _n ? _n : Ti;
        const mn = v(_n && vn && "object" == typeof i && i);
        const In = v(hn[typeof self] && self);
        const yn = v(hn[typeof window] && window);
        const Sn = v(hn[typeof this] && this);

        var Tn =
          mn ||
          (yn !== (Sn && Sn.window) && yn) ||
          In ||
          Sn ||
          Function("return this")();

        const An = Array.prototype;
        var Rn = Object.prototype;
        var Dn = Function.prototype.toString;
        var bn = Rn.hasOwnProperty;
        var wn = 0;
        var On = Dn.call(Object);
        var Cn = Rn.toString;
        var Nn = Tn._;

        var Ln = RegExp(
          "^" +
            Dn.call(bn)
              .replace(cn, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );

        const Pn = En ? Ti : Ti;
        const Vn = Tn.Reflect;
        const kn = Tn.Symbol;
        var xn = Tn.Uint8Array;
        const Fn = Vn ? Vn.enumerate : Ti;
        var Mn = Object.getPrototypeOf;
        const Un = Object.getOwnPropertySymbols;
        var Gn = Object.create;
        var Bn = Rn.propertyIsEnumerable;
        var zn = An.splice;
        var jn = Tn.isFinite;
        var Hn = Object.keys;
        var Kn = Math.max;
        var Yn = qe(Tn, "Map");
        const qn = qe(Tn, "Set");
        const Wn = qe(Tn, "WeakMap");
        var Xn = qe(Object, "create");
        const Qn = Yn ? Dn.call(Yn) : "";
        const $n = qn ? Dn.call(qn) : "";
        const Jn = Wn ? Dn.call(Wn) : "";
        const Zn = kn ? kn.prototype : Ti;
        var er = Zn ? Zn.valueOf : Ti;
        var tr = Ge(fe);
        var ir = Be();
        Fn &&
          !Bn.call({ valueOf: 1 }, "valueOf") &&
          (Ee = e => {
            return T(Fn(e));
          });
        var nr = Fe,
          rr = Re("length"),
          ar =
            Un ||
            (() => {
              return [];
            });
        ((Yn && We(new Yn()) != Bi) ||
          (qn && We(new qn()) != Ki) ||
          (Wn && We(new Wn()) != Wi)) &&
          (We = e => {
            const t = Cn.call(e), i = t == ji ? e.constructor : null, n = "function" == typeof i ? Dn.call(i) : "";
            if (n)
              switch (n) {
                case Qn:
                  return Bi;
                case $n:
                  return Ki;
                case Jn:
                  return Wi;
              }
            return t;
          });

        const or = bt((e, t) => {
            return (
              dr(e) || (e = null == e ? [] : [Object(e)]),
              (t = le(t, 1)),
              a(e, t)
            );
          });

        const sr = bt((e, t, i) => {
          return je(e, wi | Oi, t, i);
        });

        const cr = bt((e, t) => {
          return oe(e, 1, t);
        });

        const ur = bt((e, t, i) => {
          return oe(e, gr(t) || 0, i);
        });

        const lr = bt((e, t) => {
          return je(e, Oi, Ti, t);
        });

        var dr = Array.isArray;

        var fr = Pn
          ? e => {
              return e instanceof Pn;
            }
          : gi(!1);

        var pr = Number;
        const gr = Number;

        var hr = Ue((e, t) => {
          nr(t, oi(t), e);
        });

        const _r = Ue((e, t) => {
          nr(t, si(t), e);
        });

        const vr = Ue((e, t, i, n) => {
          Fe(t, si(t), e, n);
        });

        const Er = bt(e => {
          return e.push(Ti, Z), vr.apply(Ti, e);
        });

        const mr = Ue((e, t, i) => {
          ye(e, t, i);
        });

        const Ir = bt((e, t) => {
          return null == e
            ? {}
            : ((t = me(le(t, 1), String)), Te(e, se(si(e), t)));
        });

        const yr = bt((e, t) => {
          return null == e ? {} : Te(e, le(t, 1));
        });

        const Sr = _e;
        (b.prototype = ae(D.prototype)),
          (b.prototype.constructor = b),
          (w.prototype = Xn ? Xn(null) : Rn),
          (P.prototype.clear = V),
          (P.prototype["delete"] = k),
          (P.prototype.get = x),
          (P.prototype.has = F),
          (P.prototype.set = M),
          (U.prototype.push = B),
          (z.prototype.clear = j),
          (z.prototype["delete"] = H),
          (z.prototype.get = K),
          (z.prototype.has = Y),
          (z.prototype.set = q),
          (D.assign = hr),
          (D.assignIn = _r),
          (D.before = At),
          (D.bind = sr),
          (D.chain = lt),
          (D.compact = it),
          (D.concat = or),
          (D.create = ni),
          (D.defaults = Er),
          (D.defer = cr),
          (D.delay = ur),
          (D.filter = ht),
          (D.flatten = rt),
          (D.flattenDeep = at),
          (D.iteratee = Sr),
          (D.keys = oi),
          (D.map = mt),
          (D.mapValues = ci),
          (D.matches = _i),
          (D.merge = mr),
          (D.mixin = vi),
          (D.negate = Rt),
          (D.omit = Ir),
          (D.omitBy = ui),
          (D.once = Dt),
          (D.partial = lr),
          (D.pick = yr),
          (D.pickBy = li),
          (D.slice = ut),
          (D.sortBy = Tt),
          (D.tap = dt),
          (D.thru = ft),
          (D.toArray = ei),
          (D.values = fi),
          (D.extend = _r),
          vi(D, D),
          (D.clone = wt),
          (D.cloneDeep = Ot),
          (D.escape = pi),
          (D.every = gt),
          (D.find = _t),
          (D.findIndex = nt),
          (D.forEach = vt),
          (D.forOwn = ri),
          (D.has = ai),
          (D.head = ot),
          (D.identity = hi),
          (D.includes = Et),
          (D.indexOf = st),
          (D.isArguments = Lt),
          (D.isArray = dr),
          (D.isBoolean = kt),
          (D.isDate = xt),
          (D.isEmpty = Ft),
          (D.isEqual = Mt),
          (D.isFinite = Ut),
          (D.isFunction = Gt),
          (D.isNaN = Ht),
          (D.isNull = Yt),
          (D.isNumber = qt),
          (D.isObject = zt),
          (D.isRegExp = Xt),
          (D.isString = Qt),
          (D.isUndefined = Jt),
          (D.last = ct),
          (D.max = yi),
          (D.min = Si),
          (D.noConflict = Ei),
          (D.noop = mi),
          (D.reduce = It),
          (D.result = di),
          (D.size = yt),
          (D.some = St),
          (D.uniqueId = Ii),
          (D.each = vt),
          (D.first = ot),
          vi(D, (() => {
            const e = {};
            return fe(D, (t, i) => {
              bn.call(D.prototype, i) || (e[i] = t);
            }),
            e
          ;
          })(), { chain: !1 }),
          (D.VERSION = Ai),
          tr(
            [
              "pop",
              "join",
              "replace",
              "reverse",
              "split",
              "push",
              "shift",
              "sort",
              "splice",
              "unshift",
            ],
            e => {
              const t = (/^(?:replace|split)$/.test(e) ? String.prototype : An)[
                        e
                      ],
                    i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    n = /^(?:pop|join|replace|shift)$/.test(e);
              D.prototype[e] = function () {
                const e = arguments;
                return n && !this.l
                  ? t.apply(this.value(), e)
                  : this[i](i => {
                      return t.apply(i, e);
                    });
              };
            }
          ),
          (D.prototype.toJSON = D.prototype.valueOf = D.prototype.value = pt),
          ((yn || In || {})._ = D),
          _n && vn && (En && ((vn.exports = D)._ = D), (_n._ = D));
      }.call(this));
    }.call(
      t,
      i(4)(e),
      (function () {
        return this;
      })()
    ));
  },
  (e, t) => {
    e.exports = e => {
      return e.webpackPolyfill ||
        ((e.deprecate = () => {}),
        (e.paths = []),
        (e.children = []),
        (e.webpackPolyfill = 1)),
      e
    ;
    };
  },
  (e, t) => {
    t.generate = function e(t) {
      return t
        ? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
        : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
    };
  },
  (e, t, i) => {
    const n = i(7), r = i(9), a = i(12).Promise, o = i(16), s = o.get("stores/async_request");
    (t.makeAsyncRequest = (e, t) => {
      const i = s.getPromise(e);
      if (i) return i;
      let o;
      let c;

      const u = new a((e, t) => {
        (o = e), (c = t);
      });

      return (
        r.dispatch(n.REGISTER_ASYNC_DEFERRED, {
          source: e,
          promise: u,
          resolver: o,
          rejecter: c,
        }),
        t && t(),
        u
      );
    }),
      (t.resolveRequest = (e, t) => {
        r.dispatch(n.RESOLVE_DEFERRED, { source: e, resolveWith: t });
      }),
      (t.rejectRequest = (e, t) => {
        r.dispatch(n.REJECT_DEFERRED, { source: e, rejectWith: t });
      });
  },
  (e, t, i) => {
    const n = i(8);
    e.exports = n({
      LOG: null,
      SET_LOGLEVEL: null,
      INITIALIZE_STATE: null,
      SET_DOMCONTENTLOADED: null,
      ACTIVATE: null,
      UPDATE_BEHAVIOR_STORE: null,
      DATA_LOADED: null,
      SET_CLIENT_NAME: null,
      SET_CLIENT_VERSION: null,
      LOAD_PERSISTED_LAYER_STATES: null,
      RECORD_GLOBAL_DECISION: null,
      RECORD_LAYER_DECISION: null,
      ENSURE_ORIGINAL_PUSHSTATE: null,
      ENSURE_ORIGINAL_REPLACESTATE: null,
      SET_VISITOR_ATTRIBUTES: null,
      SET_VISITOR_ATTRIBUTE_PENDING: null,
      LOAD_EXISTING_VISITOR_PROFILE: null,
      SET_VISITOR_EVENTS: null,
      SET_FOREIGN_VISITOR_EVENTS: null,
      SET_FOREIGN_VISITOR_EVENT_QUEUE: null,
      SET_VISITOR_ID: null,
      SET_VISITOR_ID_VIA_API: null,
      REFRESH_SESSION: null,
      LOAD_SESSION_STATE: null,
      UPDATE_VARIATION_ID_MAP: null,
      MERGE_VARIATION_ID_MAP: null,
      UPDATE_PREFERRED_LAYER_MAP: null,
      MERGE_PREFERRED_LAYER_MAP: null,
      RECORD_LAYER_DECISION_EVENT_ID: null,
      TRACK_VIEW_ACTIVATED_EVENT: null,
      REGISTER_ASYNC_DEFERRED: null,
      RESOLVE_DEFERRED: null,
      REJECT_DEFERRED: null,
      REGISTER_PLUGIN: null,
      ADD_CLEANUP_FN: null,
      CLEAR_CLEANUP_FN: null,
      ACTION_EXECUTED: null,
      REGISTER_ACTION: null,
      SET_VIEW_ACTIVE_STATE: null,
      UPDATE_PARSED_VIEW_METADATA: null,
      UPDATE_USER_SUPPLIED_METADATA: null,
      REGISTER_VIEWS: null,
      SET_GLOBAL_TAGS: null,
      SET_VIEW_BATCHING: null,
      RESET_VIEW_STATES: null,
      ATTACH_EVENT_STREAM_PUBLISHERS: null,
      DETACH_EVENT_STREAM_PUBLISHERS: null,
      LOAD_DIRECTIVE: null,
      SET_COOKIE_AGE: null,
      SET_COOKIE_DOMAIN: null,
      SET_COOKIE_AUTO_REFRESH: null,
      XDOMAIN_SET_DEFAULT_FRAME: null,
      XDOMAIN_ADD_FRAME: null,
      XDOMAIN_SET_MESSAGE: null,
      XDOMAIN_ADD_SUBSCRIBER: null,
      XDOMAIN_SET_CANONICAL_ORIGINS: null,
      XDOMAIN_SET_DISABLED: null,
      ADD_EMITTER_HANDLER: null,
      REMOVE_EMITTER_HANDLER: null,
      SET_INTEGRATION_SETTINGS: null,
      ADD_CHANGE: null,
      SET_CHANGE_APPLIER: null,
      REMOVE_ACTION_STATE: null,
      ANNOUNCE_PENDING_REDIRECT: null,
      LOAD_REDIRECT_DATA: null,
      REGISTER_TRACKED_REDIRECT_DATA: null,
      SET_PENDING_EVENT: null,
      REMOVE_PENDING_EVENT: null,
      LOAD_PENDING_EVENTS: null,
      SANDBOXED_FUNCTIONS_ADDED: null,
      SET_RUM_DATA: null,
      RECORD_API_USAGE: null,
      INITIALIZE_CHANGE_METRICS: null,
      RECORD_ACTIVATION_TYPE_USAGE: null,
      RECORD_AUDIENCE_USAGE: null,
      RECORD_CHANGE_MACROTASK_RATE: null,
      RECORD_CHANGE_OVERHEATED: null,
      RECORD_CHANGE_TYPE_USAGE: null,
      RECORD_DOM_OBSERVATION_OCCURENCE: null,
      RECORD_INTEGRATION_USAGE: null,
      RECORD_LAYER_FEATURE_USAGE: null,
      RECORD_LAYER_POLICY_USAGE: null,
      RECORD_RECOMMENDATIONS_USAGE: null,
      RECORD_VIEW_FEATURE_USAGE: null,
      RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT: null,
      RECORD_VISITOR_ID_LOCATOR_USAGE: null,
      RECORD_VISITOR_ID_ERROR: null,
      RECORD_STICKY_BUCKETING_FEATURE: null,
      SET_PERFORMANCE_MARKS_DATA: null,
      FINALIZE_BATCH_SNAPSHOT: null,
      REGISTER_PREVIOUS_BATCH: null,
      REGISTER_TRACKER_VISITOR: null,
      REGISTER_TRACKER_EVENT: null,
      REGISTER_TRACKER_DECISION: null,
      RESET_TRACKER_EVENTS: null,
      RESET_TRACKER_PREVIOUS_BATCHES: null,
      RESET_TRACKER_STORE: null,
      SET_TRACKER_POLLING: null,
      SET_TRACKER_BATCHING: null,
      SET_TRACKER_SEND_EVENTS: null,
      SET_TRACKER_PERSISTABLE_STATE: null,
      SET_TRACKER_DIRTY: null,
      UPDATE_TRACKER_VISITOR_ATTRIBUTES: null,
      SET_UA_DATA: null,
    });
  },
  (e, t) => {
    "use strict";
    const i = e => {
      let t;
      const i = {};
      if (!(e instanceof Object) || Array.isArray(e))
        throw new Error("keyMirror(...): Argument must be an object.");
      for (t in e) e.hasOwnProperty(t) && (i[t] = t);
      return i;
    };
    e.exports = i;
  },
  (e, t, i) => {
    const n = i(10);
    e.exports = n.create();
  },
  (e, t, i) => {
    function n(e) {
      (e = e || {}),
        (this.f = {}),
        (this.g = {}),
        (this.I = 0),
        (this.S = []),
        (this.T = []);
    }
    function r(e, t) {
      return () => {
        const i = e.indexOf(t);
        i !== -1 && e.splice(i, 1);
      };
    }
    const a = i(2), o = i(11);
    (n.prototype.registerStores = function (e) {
      a.forOwn(
        e,
        a.bind(function (e, t) {
          this.f[t] = new o(t, this, e);
        }, this)
      );
    }),
      (n.prototype.getStore = function (e) {
        return this.f[e];
      }),
      (n.prototype.dispatch = function (e, t) {
        this.dispatchId++,
          a.each(
            this.S,
            a.bind(function (i) {
              i.call(this, e, t);
            }, this)
          ),
          a.forOwn(this.f, i => {
            i.A(e, t);
          }),
          a.each(
            this.T,
            a.bind(function (i) {
              i.call(this, e, t);
            }, this)
          ),
          a.forOwn(
            this.f,
            a.bind(function (e, t) {
              e.hasChanges() &&
                this.g[t] &&
                (e.resetChange(),
                a.each(this.g[t], t => {
                  t(e);
                }));
            }, this)
          );
      }),
      (n.prototype.reset = function () {
        (this.g = {}),
          a.forOwn(this.f, (e, t) => {
            e.R();
          });
      }),
      (n.prototype.getState = function () {
        const e = {};
        return a.forOwn(this.f, (t, i) => {
          e[i] = t.D();
        }),
        e
      ;
      }),
      (n.prototype.onPreAction = function (e) {
        const t = this.S;
        return t.push(e), r(t, e);
      }),
      (n.prototype.onPostAction = function (e) {
        const t = this.T;
        return t.push(e), r(t, e);
      }),
      (n.prototype.b = function (e, t) {
        this.g[e] || (this.g[e] = []), this.g[e].push(t);
        const i = this.g[e];
        return r(i, t);
      }),
      (e.exports = {
        create(e) {
          return new n(e);
        },
      });
  },
  (e, t, i) => {
    function n(e, t, i) {
      (this.w = e),
        (this.O = t),
        (this.C = 0),
        (this.N = !1),
        (this.L = {}),
        r.extend(this, i),
        (this.P = {}),
        this.initialize && this.initialize();
    }
    var r = i(2);
    (n.prototype.A = function (e, t) {
      const i = this.L[e];
      i && "function" == typeof i && i.call(this, t, e);
    }),
      (n.prototype.D = function () {
        return r.cloneDeep(this.P);
      }),
      (n.prototype.on = function (e, t) {
        this.L[e] = r.bind(t, this);
      }),
      (n.prototype.observe = function (e) {
        return this.O.b(this.w, e);
      }),
      (n.prototype.emitChange = function () {
        (this.N = !0), this.C++;
      }),
      (n.prototype.hasChanges = function () {
        return this.N;
      }),
      (n.prototype.resetChange = function () {
        this.N = !1;
      }),
      (n.prototype.getStateId = function () {
        return this.C;
      }),
      (n.prototype.R = function () {
        this.reset && "function" == typeof this.reset && this.reset(),
          this.initialize();
      }),
      (e.exports = n);
  },
  (e, t, i) => {
    e.exports = i(13);
  },
  (e, t, i) => {
    (function (t, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   4.1.0
       */
      !((t, i) => {
        e.exports = i();
      })(this, () => {
        "use strict";
        function e(e) {
          return "function" == typeof e || ("object" == typeof e && null !== e);
        }
        function r(e) {
          return "function" == typeof e;
        }
        function a(e) {
          X = e;
        }
        function o(e) {
          Q = e;
        }
        function s() {
          return () => {
            return t.nextTick(f);
          };
        }
        function c() {
          return "undefined" != typeof W
            ? () => {
                W(f);
              }
            : d();
        }
        function u() {
          let e = 0;
          const t = new Z(f);
          const i = document.createTextNode("");
          return t.observe(i, { characterData: !0 }),
          () => {
            i.data = e = ++e % 2;
          }
        ;
        }
        function l() {
          const e = new MessageChannel();
          return (e.port1.onmessage = f),
          () => {
            return e.port2.postMessage(0);
          }
        ;
        }
        function d() {
          const e = setTimeout;
          return () => {
            return e(f, 1);
          };
        }
        function f() {
          for (let e = 0; e < q; e += 2) {
            const t = ie[e], i = ie[e + 1];
            t(i), (ie[e] = void 0), (ie[e + 1] = void 0);
          }
          q = 0;
        }
        function p() {
          try {
            var e = i(15);
            return (W = e.runOnLoop || e.runOnContext), c();
          } catch (e) {
            return d();
          }
        }
        function g(e, t) {
          const i = arguments, n = this, r = new this.constructor(_);
          void 0 === r[re] && k(r);
          const a = n._state;
          return a
            ? !(() => {
                const e = i[a - 1];
                Q(() => {
                  return L(a, r, e, n._result);
                });
              })()
            : w(n, r, e, t),
          r;
        }
        function h(e) {
          const t = this;
          if (e && "object" == typeof e && e.constructor === t) return e;
          const i = new t(_);
          return A(i, e), i;
        }
        function _() {}
        function v() {
          return new TypeError("You cannot resolve a promise with itself");
        }
        function E() {
          return new TypeError(
            "A promises callback cannot return that same promise."
          );
        }
        function m(e) {
          try {
            return e.then;
          } catch (e) {
            return (ce.error = e), ce;
          }
        }
        function I(e, t, i, n) {
          try {
            e.call(t, i, n);
          } catch (e) {
            return e;
          }
        }
        function y(e, t, i) {
          Q(e => {
            let n = !1;

            const r = I(
              i,
              t,
              i => {
                n || ((n = !0), t !== i ? A(e, i) : D(e, i));
              },
              t => {
                n || ((n = !0), b(e, t));
              },
              "Settle: " + (e._label || " unknown promise")
            );

            !n && r && ((n = !0), b(e, r));
          }, e);
        }
        function S(e, t) {
          t._state === oe
            ? D(e, t._result)
            : t._state === se
            ? b(e, t._result)
            : w(
                t,
                void 0,
                t => {
                  return A(e, t);
                },
                t => {
                  return b(e, t);
                }
              );
        }
        function T(e, t, i) {
          t.constructor === e.constructor &&
          i === g &&
          t.constructor.resolve === h
            ? S(e, t)
            : i === ce
            ? (b(e, ce.error), (ce.error = null))
            : void 0 === i
            ? D(e, t)
            : r(i)
            ? y(e, t, i)
            : D(e, t);
        }
        function A(t, i) {
          t === i ? b(t, v()) : e(i) ? T(t, i, m(i)) : D(t, i);
        }
        function R(e) {
          e._onerror && e._onerror(e._result), O(e);
        }
        function D(e, t) {
          e._state === ae &&
            ((e._result = t),
            (e._state = oe),
            0 !== e._subscribers.length && Q(O, e));
        }
        function b(e, t) {
          e._state === ae && ((e._state = se), (e._result = t), Q(R, e));
        }
        function w(e, t, i, n) {
          const r = e._subscribers, a = r.length;
          (e._onerror = null),
            (r[a] = t),
            (r[a + oe] = i),
            (r[a + se] = n),
            0 === a && e._state && Q(O, e);
        }
        function O(e) {
          const t = e._subscribers, i = e._state;
          if (0 !== t.length) {
            for (
              let n = void 0, r = void 0, a = e._result, o = 0;
              o < t.length;
              o += 3
            )
              (n = t[o]), (r = t[o + i]), n ? L(i, n, r, a) : r(a);
            e._subscribers.length = 0;
          }
        }
        function C() {
          this.error = null;
        }
        function N(e, t) {
          try {
            return e(t);
          } catch (e) {
            return (ue.error = e), ue;
          }
        }
        function L(e, t, i, n) {
          const a = r(i);
          let o = void 0;
          let s = void 0;
          let c = void 0;
          let u = void 0;
          if (a) {
            if (
              ((o = N(i, n)),
              o === ue ? ((u = !0), (s = o.error), (o.error = null)) : (c = !0),
              t === o)
            )
              return void b(t, E());
          } else (o = n), (c = !0);
          t._state !== ae ||
            (a && c
              ? A(t, o)
              : u
              ? b(t, s)
              : e === oe
              ? D(t, o)
              : e === se && b(t, o));
        }
        function P(e, t) {
          try {
            t(
              t => {
                A(e, t);
              },
              t => {
                b(e, t);
              }
            );
          } catch (t) {
            b(e, t);
          }
        }
        function V() {
          return le++;
        }
        function k(e) {
          (e[re] = le++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = []);
        }
        function x(e, t) {
          (this._instanceConstructor = e),
            (this.promise = new e(_)),
            this.promise[re] || k(this.promise),
            Y(t)
              ? ((this._input = t),
                (this.length = t.length),
                (this._remaining = t.length),
                (this._result = new Array(this.length)),
                0 === this.length
                  ? D(this.promise, this._result)
                  : ((this.length = this.length || 0),
                    this._enumerate(),
                    0 === this._remaining && D(this.promise, this._result)))
              : b(this.promise, F());
        }
        function F() {
          return new Error("Array Methods must be provided an Array");
        }
        function M(e) {
          return new x(this, e).promise;
        }
        function U(e) {
          const t = this;
          return new t(
            Y(e)
              ? (i, n) => {
                  for (let r = e.length, a = 0; a < r; a++)
                    t.resolve(e[a]).then(i, n);
                }
              : (e, t) => {
                  return t(new TypeError("You must pass an array to race."));
                }
          );
        }
        function G(e) {
          const t = this, i = new t(_);
          return b(i, e), i;
        }
        function B() {
          throw new TypeError(
            "You must pass a resolver function as the first argument to the promise constructor"
          );
        }
        function z() {
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        }
        function j(e) {
          (this[re] = V()),
            (this._result = this._state = void 0),
            (this._subscribers = []),
            _ !== e &&
              ("function" != typeof e && B(),
              this instanceof j ? P(this, e) : z());
        }
        function H() {
          let e = void 0;
          if ("undefined" != typeof n) e = n;
          else if ("undefined" != typeof self) e = self;
          else
            try {
              e = Function("return this")();
            } catch (e) {
              throw new Error(
                "polyfill failed because global object is unavailable in this environment"
              );
            }
          const t = e.Promise;
          if (t) {
            let i = null;
            try {
              i = Object.prototype.toString.call(t.resolve());
            } catch (e) {}
            if ("[object Promise]" === i && !t.cast) return;
          }
          e.Promise = j;
        }
        let K = void 0;
        K = Array.isArray
          ? Array.isArray
          : e => {
              return "[object Array]" === Object.prototype.toString.call(e);
            };
        var Y = K;
        var q = 0;
        var W = void 0;
        var X = void 0;

        var Q = (e, t) => {
          (ie[q] = e),
            (ie[q + 1] = t),
            (q += 2),
            2 === q && (X ? X(f) : ne());
        };

        const $ = "undefined" != typeof window ? window : void 0;
        const J = $ || {};
        var Z = J.MutationObserver || J.WebKitMutationObserver;

        const ee =
          "undefined" == typeof self &&
          "undefined" != typeof t &&
          "[object process]" === {}.toString.call(t);

        const te =
          "undefined" != typeof Uint8ClampedArray &&
          "undefined" != typeof importScripts &&
          "undefined" != typeof MessageChannel;

        var ie = new Array(1e3);
        let ne = void 0;
        ne = ee ? s() : Z ? u() : te ? l() : void 0 === $ ? p() : d();
        var re = Math.random().toString(36).substring(16),
          ae = void 0,
          oe = 1,
          se = 2,
          ce = new C(),
          ue = new C(),
          le = 0;
        return (x.prototype._enumerate = function () {
          for (
            let e = this.length, t = this._input, i = 0;
            this._state === ae && i < e;
            i++
          )
            this._eachEntry(t[i], i);
        }),
        (x.prototype._eachEntry = function (e, t) {
          const i = this._instanceConstructor, n = i.resolve;
          if (n === h) {
            const r = m(e);
            if (r === g && e._state !== ae)
              this._settledAt(e._state, t, e._result);
            else if ("function" != typeof r)
              this._remaining--, (this._result[t] = e);
            else if (i === j) {
              const a = new i(_);
              T(a, e, r), this._willSettleAt(a, t);
            } else
              this._willSettleAt(
                new i(t => {
                  return t(e);
                }),
                t
              );
          } else this._willSettleAt(n(e), t);
        }),
        (x.prototype._settledAt = function (e, t, i) {
          const n = this.promise;
          n._state === ae &&
            (this._remaining--, e === se ? b(n, i) : (this._result[t] = i)),
            0 === this._remaining && D(n, this._result);
        }),
        (x.prototype._willSettleAt = function (e, t) {
          const i = this;
          w(
            e,
            void 0,
            e => {
              return i._settledAt(oe, t, e);
            },
            e => {
              return i._settledAt(se, t, e);
            }
          );
        }),
        (j.all = M),
        (j.race = U),
        (j.resolve = h),
        (j.reject = G),
        (j._setScheduler = a),
        (j._setAsap = o),
        (j._asap = Q),
        (j.prototype = {
          constructor: j,
          then: g,
          catch: function (e) {
            return this.then(null, e);
          },
        }),
        (j.polyfill = H),
        (j.Promise = j),
        j;
      });
    }.call(
      t,
      i(14),
      (function () {
        return this;
      })()
    ));
  },
  (e, t) => {
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function n() {
      throw new Error("clearTimeout has not been defined");
    }
    function r(e) {
      if (l === setTimeout) return setTimeout(e, 0);
      if ((l === i || !l) && setTimeout)
        return (l = setTimeout), setTimeout(e, 0);
      try {
        return l(e, 0);
      } catch (t) {
        try {
          return l.call(null, e, 0);
        } catch (t) {
          return l.call(this, e, 0);
        }
      }
    }
    function a(e) {
      if (d === clearTimeout) return clearTimeout(e);
      if ((d === n || !d) && clearTimeout)
        return (d = clearTimeout), clearTimeout(e);
      try {
        return d(e);
      } catch (t) {
        try {
          return d.call(null, e);
        } catch (t) {
          return d.call(this, e);
        }
      }
    }
    function o() {
      h &&
        p &&
        ((h = !1), p.length ? (g = p.concat(g)) : (_ = -1), g.length && s());
    }
    function s() {
      if (!h) {
        const e = r(o);
        h = !0;
        for (let t = g.length; t; ) {
          for (p = g, g = []; ++_ < t; ) p && p[_].run();
          (_ = -1), (t = g.length);
        }
        (p = null), (h = !1), a(e);
      }
    }
    function c(e, t) {
      (this.fun = e), (this.array = t);
    }
    function u() {}
    var l;
    var d;
    const f = (e.exports = {});
    !(() => {
      try {
        l = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        l = i;
      }
      try {
        d = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (e) {
        d = n;
      }
    })();
    var p,
      g = [],
      h = !1,
      _ = -1;
    (f.nextTick = function (e) {
      const t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (let i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      g.push(new c(e, t)), 1 !== g.length || h || r(s);
    }),
      (c.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (f.title = "browser"),
      (f.browser = !0),
      (f.env = {}),
      (f.argv = []),
      (f.version = ""),
      (f.versions = {}),
      (f.on = u),
      (f.addListener = u),
      (f.once = u),
      (f.off = u),
      (f.removeListener = u),
      (f.removeAllListeners = u),
      (f.emit = u),
      (f.prependListener = u),
      (f.prependOnceListener = u),
      (f.listeners = e => {
        return [];
      }),
      (f.binding = e => {
        throw new Error("process.binding is not supported");
      }),
      (f.cwd = () => {
        return "/";
      }),
      (f.chdir = e => {
        throw new Error("process.chdir is not supported");
      }),
      (f.umask = () => {
        return 0;
      });
  },
  (e, t) => {},
  (e, t, i) => {
    const n = i(2),
          r = i(17),
          a = i(9),
          o = i(18),
          s = r.create(),
          c = {
            action_data: i(21),
            async_request: i(27),
            audience_data: i(28),
            change_data: i(29),
            cleanup: i(30),
            client_metadata: i(31),
            cookie_options: i(33),
            event_data: i(34),
            event_emitter: i(35),
            dimension_data: i(36),
            directive: i(37),
            global: i(38),
            history: i(39),
            integration_settings: i(41),
            layer: i(42),
            layer_data: i(43),
            log: i(45),
            observed_redirect: i(46),
            pending_events: i(47),
            performance: i(48),
            plugins: i(49),
            provider_status: i(50),
            pending_redirect: i(51),
            rum: i(52),
            sandbox: i(53),
            session: i(54),
            tracker_optimizely: i(55),
            ua_data: i(56),
            view: i(57),
            view_data: i(58),
            visitor: i(59),
            visitor_attribute_entity: i(60),
            visitor_events: i(61),
            visitor_events_manager: i(66),
            visitor_id: i(67),
            visitor_bucketing: i(68),
            xdomain: i(69),
          };
    (c["group_data"] = i(70)),
      a.registerStores(c),
      n.forOwn(c, (e, t) => {
        s.register("stores/" + t, a.getStore(t));
      }),
      s.register("core/plugins/matchers/key_value", o),
      (e.exports = s);
  },
  (e, t, i) => {
    function n() {
      this.V = {};
    }
    const r = i(2);
    (n.prototype.register = function (e, t) {
      if (1 === arguments.length) {
        const i = this;
        return void r.each(e, (e, t) => {
          i.register(t, e);
        });
      }
      if (this.V[e]) throw new Error("Module already registered for: " + e);
      this.V[e] = t;
    }),
      (n.prototype.get = function (e) {
        return this.V[e];
      }),
      (n.prototype.getModuleKeys = function () {
        const e = this.V;
        return r.keys(e);
      }),
      (n.prototype.evaluate = function (e) {
        const t = e.length, i = e.slice(0, t - 1), n = e[t - 1];
        if ("function" != typeof n)
          throw new Error(
            "Evaluate must take a function as last element in array"
          );
        const a = r.map(i, r.bind(this.get, this));
        return n.apply(null, a);
      }),
      (n.prototype.reset = function () {
        this.V = {};
      }),
      (e.exports = {
        create() {
          return new n();
        },
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(19).getFieldValue, a = i(20);
    e.exports = (e, t) => {
      const i = r(e, t.name.split("."));
      return n.isArray(i)
        ? n.some(i, n.partial(a.hasMatch, t.value, t.match))
        : a.hasMatch(t.value, t.match, i);
    };
  },
  (e, t, i) => {
    const n = i(2);
    (t.getFieldValue = (e, t) => {
      n.isArray(t) || (t = [t]);
      for (var i = e, r = 0; r < t.length; r++) {
        const a = t[r];
        if (!n.isObject(i) || !i.hasOwnProperty(a)) return;
        i = i[a];
      }
      return i;
    }),
      (t.setFieldValue = (e, t, i) => {
        if (!n.isArray(t) || n.isEmpty(t))
          throw new Error("Attempted to set an invalid key path: " + t);
        for (var r = e, a = 0; a < t.length - 1; a++) {
          const o = t[a];
          n.isObject(r[o]) || (r[o] = {}), (r = r[o]);
        }
        r[t[t.length - 1]] = i;
      });
  },
  (e, t, i) => {
    const n = i(2);
    t.hasMatch = (e, t, i) => {
      const r = !n.isUndefined(i) && null !== i, a = !n.isUndefined(e) && null !== e, o = t || (a ? "exact" : "exists");
      switch (o) {
        case "exists":
          return r;
        case "exact":
          return r && String(i) === e;
        case "substring":
          return r && String(i).indexOf(e) > -1;
        case "regex":
          try {
            if (a && r) {
              const s = new RegExp(e);
              return s.test(String(i));
            }
            return !1;
          } catch (e) {}
          return !1;
        case "range":
          const c = e.split(":"), u = parseFloat(c[0]), l = parseFloat(c[1]), d = parseFloat(i);
          return d >= u && d <= l;
        default:
          return !1;
      }
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22), o = i(23);
    e.exports = {
      initialize() {
        (this.P = { actions: {}, actionState: {} }),
          this.on(r.DATA_LOADED, this.k),
          this.on(r.ACTION_EXECUTED, this.F),
          this.on(r.SET_CHANGE_APPLIER, this.M),
          this.on(r.REMOVE_ACTION_STATE, this.U);
      },
      k(e) {
        const t = this;
        n.isEmpty(e.data.layers) ||
          (n.each(e.data.layers, e => {
            let i;
            if (e.changes) {
              const r = "layerId:" + e.id;
              (i = {
                id: r,
                layerId: e.id,
                changeSet: e.changes,
                type: "layer",
              }),
                a.deepFreeze(i),
                (t.P.actions[r] = i);
            }
            n.each(e.experiments, r => {
              if (r.changes) {
                const o = "experimentId:" + r.id;
                (i = {
                  id: o,
                  layerId: e.id,
                  experimentId: r.id,
                  changeSet: r.changes,
                  type: "experiment",
                }),
                  a.deepFreeze(i),
                  (t.P.actions[o] = i);
              }
              n.each(r.variations, o => {
                n.each(o.actions, n => {
                  const s = n.pageId || n.viewId, c = r.id + ":" + o.id + ":" + s;
                  (i = {
                    id: c,
                    layerId: e.id,
                    experimentId: r.id,
                    variationId: o.id,
                    pageId: s,
                    changeSet: n.changes,
                    type: "variation",
                  }),
                    a.deepFreeze(i),
                    (t.P.actions[c] = i);
                });
              });
            });
          }),
          this.emitChange());
      },
      F(e) {
        const t = e.actionId;
        n.isUndefined(t) ||
          this.P.actionState[t] ||
          (this.P.actionState[t] = {});
      },
      M(e) {
        const t = e.actionId, i = e.changeId;
        return this.P.actionState[t]
          ? void (this.P.actionState[t][i] = e.changeApplier)
          : void o.warn(
              "Action Data / Attempted to set changeApplier for inactive action: ",
              t
            );
      },
      U(e) {
        delete this.P.actionState[e.actionId];
      },
      get(e) {
        return a.safeReference(this.P.actions[e]);
      },
      getActionState(e) {
        return a.safeReference(this.P.actionState[e]);
      },
      getByChangeId(e) {
        return n.find(this.P.actions, { changeSet: [{ id: e }] });
      },
      getAllActionIdsByPageId(e) {
        return n.map(n.filter(this.P.actions, { pageId: e }), "id");
      },
      getChangeApplier(e, t) {
        const i = this.P.actionState[t];
        if (i) return i[e];
      },
      getExperimentVariationActions(e, t) {
        return a.safeReference(
          n.filter(this.P.actions, { experimentId: e, variationId: t })
        );
      },
      getLayerActions(e) {
        return a.safeReference(
          n.filter(this.P.actions, { id: "layerId:" + e })
        );
      },
      getExperimentActions(e) {
        return a.safeReference(
          n.filter(this.P.actions, { id: "experimentId:" + e })
        );
      },
      getAll() {
        return a.safeReference(n.values(this.P.actions));
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = !1;
    (t.deepFreeze = function e(t) {
      r &&
        n.isObject(t) &&
        !n.isFunction(t) &&
        (n.forOwn(t, e), Object.freeze(t));
    }),
      (t.safeReference = function e(t) {
        return r
          ? !n.isObject(t) || n.isFunction(t) || Object.isFrozen(t)
            ? t
            : n.isArray(t)
            ? n.map(t, e)
            : n.reduce(
                t,
                (t, i, n) => {
                  return (t[n] = e(i)), t;
                },
                {}
              )
          : n.cloneDeep(t);
      });
  },
  (e, t, i) => {
    function n() {
      (this.logLevel = null),
        (this.logMatch = null),
        (this.logs = []),
        (this.timebase = o.now());
    }
    const r = i(2);
    const a = i(7);
    var o = i(24);
    const s = i(25);
    const c = i(9);
    const u = i(26);
    (n.prototype.G = function () {
      return !r.isNull(this.logLevel);
    }),
      (n.prototype.setLogLevel = function (e) {
        const t = this.B(e);
        null === t
          ? console.error("Unknown log level: " + e)
          : this.logLevel !== t &&
            (this.log("Setting log level to " + t),
            (this.logLevel = t),
            this.flush());
      }),
      (n.prototype.setLogMatcher = function (e) {
        r.isString(e) ? (this.logMatcher = e) : (this.logMatcher = ""),
          (this.logGroup = 0);
      }),
      (n.prototype.shouldLog = function (e) {
        return this.G() && this.logLevel >= e;
      }),
      (n.prototype.matchesLogMessage = function (e, t) {
        const i = this.logMatcher;
        if (!this.logMatcher) return !0;
        if (this.logGroup)
          return (
            "GROUPSTART" === e
              ? this.logGroup++
              : "GROUPEND" === e && this.logGroup--,
            !0
          );
        const n = r.some(t, e => {
          if (!r.isString(e))
            try {
              e = u.stringify(e);
            } catch (e) {}
          return r.isString(e) && r.includes(e, i);
        });
        return n && "GROUPSTART" === e && this.logGroup++, n;
      }),
      (n.prototype.storeLog = (e, t) => {
        const i = { logLevel: e, logMessage: t };
        c.dispatch(a.LOG, i);
      }),
      (n.prototype.flush = function () {
        const e = i(16), t = e.get("stores/log");
        this.logGroup = 0;
        const n = t.getLogs();
        r.each(
          n,
          r.bind(function (e) {
            this.z(e.logLevel, e.logMessage, !0);
          }, this)
        );
      }),
      (n.prototype.z = function (e, t, i) {
        let n, a = e;
        if (console)
          switch (e) {
            case "GROUPSTART":
              (n = console.groupCollapsed), (a = s.LogLevel.DEBUG);
              break;
            case "GROUPEND":
              (n = console.groupEnd), (a = s.LogLevel.DEBUG);
              break;
            case s.LogLevel.ERROR:
              n = console.error;
              break;
            case s.LogLevel.WARN:
              n = console.warn;
              break;
            case s.LogLevel.DEBUG:
              n = console.debug;
              break;
            default:
              n = console.log;
          }
        try {
          i ||
            (this.G() && !this.shouldLog(a)) ||
            (r.isArray(t) && r.isString(t[0]) && (t = this.j(t)),
            this.storeLog(e, t)),
            n &&
              this.shouldLog(a) &&
              this.matchesLogMessage(e, t) &&
              n.apply(console, t);
        } catch (e) {
          console && (console.error ? console.error(e) : console.log(e));
        }
      }),
      (n.prototype.debug = function () {
        this.z(s.LogLevel.DEBUG, [].slice.call(arguments));
      }),
      (n.prototype.log = function () {
        this.z(s.LogLevel.INFO, [].slice.call(arguments));
      }),
      (n.prototype.logAlways = function () {
        const e = this.j([].slice.call(arguments));
        console &&
          console.log &&
          console.log.apply &&
          console.log.apply(console, e),
          this.storeLog(s.LogLevel.INFO, e);
      }),
      (n.prototype.warn = function () {
        this.z(s.LogLevel.WARN, [].slice.call(arguments));
      }),
      (n.prototype.error = function (e) {
        const t = [].slice.call(arguments);
        1 === t.length && e.stack
          ? (this.z(s.LogLevel.ERROR, [this.H(), e]),
            this.z(s.LogLevel.INFO, [e.stack]))
          : this.z(s.LogLevel.ERROR, t);
      }),
      (n.prototype.groupCollapsed = function () {
        this.z("GROUPSTART", [].slice.call(arguments));
      }),
      (n.prototype.groupEnd = function () {
        this.z("GROUPEND", [].slice.call(arguments));
      }),
      (n.prototype.j = function (e) {
        let t = this.H().toString();
        return (
          t.length < 6 && (t = ("     " + t).slice(-6)),
          [t + "| Optly / " + e[0]].concat(e.slice(1))
        );
      }),
      (n.prototype.H = function () {
        return this.timebase ? o.now() - this.timebase : 0;
      }),
      (n.prototype.B = e => {
        return e &&
          ((e = e.toUpperCase()),
          "TRUE" === e && (e = "INFO"),
          "FALSE" === e && (e = "OFF"),
          "ALL" === e && (e = "DEBUG"),
          !r.isUndefined(s.LogLevel[e]))
          ? s.LogLevel[e]
          : null;
      }),
      (e.exports = new n());
  },
  (e, t) => {
    t.now = () => {
      return +new Date();
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(8);
    (t.COOKIES = {
      OPT_OUT: "optimizelyOptOut",
      PREVIEW: "optimizelyPreview",
      REDIRECT: "optimizelyRedirectData",
      SESSION_STATE: "optimizelySessionState",
      TOKEN: "optimizelyToken",
      VISITOR_ID: "optimizelyEndUserId",
      VISITOR_UUID: "optimizelyPPID",
    }),
      (t.LayerActivationTypes = {
        CONDITIONAL: "conditional",
        IMMEDIATE: "immediate",
        MANUAL: "manual",
        READY: "ready",
        TIMEOUT: "timeout",
      }),
      (t.LogLevel = { OFF: 0, ERROR: 1, WARN: 2, INFO: 3, DEBUG: 4 }),
      (t.Lifecycle = r({
        preActivate: null,
        postVisitorProfileLoad: null,
        postViewsActivated: null,
        postActivate: null,
      })),
      (t.ViewActivationTypes = {
        immediate: "immediate",
        manual: "manual",
        callback: "callback",
        polling: "polling",
        URLChanged: "url_changed",
        DOMChanged: "dom_changed",
      }),
      (t.StorageKeys = {
        PENDING_EVENTS: "pending_events",
        RELAYED_EVENTS: "relayed_events",
      }),
      (t.PluginTypes = r({
        visitorProfileProviders: null,
        viewProviders: null,
        audienceMatchers: null,
        viewMatchers: null,
        analyticsTrackers: null,
        viewTagLocators: null,
        userFeatureDefs: null,
        apiModules: null,
        changeAppliers: null,
        deciders: null,
        eventImplementations: null,
        viewTriggers: null,
      })),
      (t.ResourceTimingAttributes = r({
        connectStart: null,
        connectEnd: null,
        decodedBodySize: null,
        domainLookupStart: null,
        domainLookupEnd: null,
        duration: null,
        encodedBodySize: null,
        fetchStart: null,
        requestStart: null,
        responseStart: null,
        responseEnd: null,
        secureConnectionStart: null,
        startTime: null,
        transferSize: null,
        serverTiming: null,
      })),
      (t.RUMPerformanceTimingAttributes = r({ blockTime: null })),
      (t.AttributionTypes = r({ FIRST_TOUCH: null, LAST_TOUCH: null })),
      (t.SandboxedFunctions = r({ XMLHttpRequest: null })),
      (t.PerformanceData = r({
        performance_marks: null,
        resource_timing: null,
        performance_timing: null,
      })),
      (t.PerformanceCounters = r({
        mutation_observer_invocation: null,
        polling_invocation: null,
        match_selector_invocation: null,
      })),
      (t.VisitorStorageKeys = {
        EVENTS: "events",
        EVENT_QUEUE: "event_queue",
        LAYER_MAP: "layer_map",
        LAYER_STATES: "layer_states",
        SESSION_STATE: "session_state",
        VISITOR_PROFILE: "visitor_profile",
        VARIATION_MAP: "variation_map",
        TRACKER_OPTIMIZELY: "tracker_optimizely",
      }),
      (t.AllStorageKeys = n.assign({}, t.StorageKeys, t.VisitorStorageKeys)),
      (t.ListTargetingKeyTypes = { COOKIE: "c", QUERY: "q", JS_VARIABLE: "j" }),
      (t.VisitorIdLocatorType = {
        COOKIE: "cookie",
        JS_VARIABLE: "js",
        LOCALSTORAGE: "localStorage",
        QUERY: "query",
      });
  },
  (e, t, i) => {
    function n(e) {
      const t = [Array.prototype], i = [];
      r.each(t, e => {
        r.isUndefined(e.toJSON) || (i.push(e.toJSON), delete e.toJSON);
      });
      let n, a;
      try {
        n = e();
      } catch (e) {
        a = e;
      } finally {
        r.each(i, (e, i) => {
          t[i].toJSON = e;
        });
      }
      if (a) throw a;
      return n;
    }
    var r = i(2);
    (t.stringify = function () {
      return n(
        r.bind(function () {
          return JSON.stringify.apply(null, this);
        }, arguments)
      );
    }),
      (t.parse = JSON.parse);
  },
  (e, t, i) => {
    const n = i(7);
    e.exports = {
      initialize() {
        (this.P = {}),
          this.on(n.REGISTER_ASYNC_DEFERRED, this.K),
          this.on(n.RESOLVE_DEFERRED, this.Y),
          this.on(n.REJECT_DEFERRED, this.q);
      },
      getRequest(e) {
        return this.P[e];
      },
      getPromise(e) {
        const t = this.getRequest(e);
        if (t) return t.promise;
      },
      K(e) {
        this.P[e.source] = {
          promise: e.promise,
          resolver: e.resolver,
          rejecter: e.rejecter,
        };
      },
      Y(e) {
        const t = this.getRequest(e.source);
        if (!t)
          throw new Error("No request registered for source: " + e.source);
        t.resolver(e.resolveWith);
      },
      q(e) {
        const t = this.getRequest(e.source);
        if (!t)
          throw new Error("No request registered for source: " + e.source);
        if (!t.rejecter)
          throw new Error("No rejecter registered for source: " + e.source);
        t.rejecter(e.rejectWith);
      },
    };
  },
  (e, t, i) => {
    function n(e, t) {
      return t || (t = {}),
      e
        ? (r.each(e, e => {
            if (!r.isString(e)) {
              if (r.isObject(e)) {
                const i = e.type, a = e.name || "_";
                t[i] || (t[i] = {}), (t[i][a] = !0);
              }
              r.isArray(e) && n(e, t);
            }
          }),
          t)
        : t;
    }
    var r = i(2);
    const a = i(7);
    const o = i(22);
    e.exports = {
      initialize() {
        (this.P = { audiences: {}, featuresNeeded: {} }),
          this.on(a.DATA_LOADED, this.k);
      },
      k(e) {
        r.isEmpty(e.data.audiences) ||
          (r.each(
            e.data.audiences,
            r.bind(function (e) {
              o.deepFreeze(e),
                r.merge(this.P.featuresNeeded, n(e.conditions)),
                (this.P.audiences[e.id] = e);
            }, this)
          ),
          this.emitChange());
      },
      getAll() {
        return o.safeReference(r.values(this.P.audiences));
      },
      getFeaturesNeeded(e) {
        return o.safeReference(this.P.featuresNeeded[e] || {});
      },
      getAudiencesMap() {
        return o.safeReference(this.P.audiences);
      },
      get(e) {
        return o.safeReference(this.P.audiences[e]);
      },
      getAudienceName(e) {
        const t = r.find(r.values(this.P.audiences), { id: e });
        return t.name || "Aud " + e;
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22);
    e.exports = {
      initialize() {
        (this.P = {}),
          this.on(r.ADD_CHANGE, this.W),
          this.on(r.DATA_LOADED, this.k);
      },
      getChange(e) {
        return this.P[e];
      },
      k(e) {
        n.isEmpty(e.data.changes) ||
          n.each(e.data.changes, n.bind(this.W, this));
      },
      W(e) {
        a.deepFreeze(e), (this.P[e.id] = e), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(25);
    e.exports = {
      initialize() {
        (this.P = {}),
          n.each(
            a.Lifecycle,
            n.bind(function (e) {
              this.P[e] = [];
            }, this)
          ),
          this.on(r.ADD_CLEANUP_FN, this.X),
          this.on(r.CLEAR_CLEANUP_FN, this.Q);
      },
      getCleanupFns(e) {
        return n.cloneDeep(this.P[e]);
      },
      X(e) {
        this.P[e.lifecycle].push(e.cleanupFn), this.emitChange();
      },
      Q(e) {
        const t = this.P[e.lifecycle];
        if (e.cleanupFn) {
          const i = t.indexOf(e.cleanupFn);
          i > -1 && (t.splice(i, 1), this.emitChange());
        } else (this.P[e.lifecycle] = []), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(7), r = i(32);
    e.exports = {
      initialize() {
        (this.P = { name: r.NAME, version: r.VERSION }),
          this.on(n.SET_CLIENT_NAME, this.$),
          this.on(n.SET_CLIENT_VERSION, this.J);
      },
      getClientName() {
        return this.P.name;
      },
      getClientVersion() {
        return this.P.version;
      },
      $(e) {
        e && (this.P.name = e), this.emitChange();
      },
      J(e) {
        e && (this.P.version = e), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    (t.VERSION = "0.163.0"), (t.NAME = "js");
  },
  (e, t, i) => {
    const n = i(7), r = 15552e3, a = !0;
    e.exports = {
      initialize() {
        (this.P = {
          currentDomain: null,
          defaultAgeSeconds: r,
          autoRefresh: a,
        }),
          this.on(n.SET_COOKIE_DOMAIN, this.Z),
          this.on(n.SET_COOKIE_AGE, this.ee),
          this.on(n.SET_COOKIE_AUTO_REFRESH, this.te);
      },
      getCurrentDomain() {
        return this.P.currentDomain;
      },
      getDefaultAgeInSeconds() {
        return this.P.defaultAgeSeconds;
      },
      getAutoRefresh() {
        return this.P.autoRefresh;
      },
      Z(e) {
        (this.P.currentDomain = e), this.emitChange();
      },
      ee(e) {
        (this.P.defaultAgeSeconds = e), this.emitChange();
      },
      te(e) {
        (this.P.autoRefresh = e), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22);
    e.exports = {
      initialize() {
        (this.P = {}), this.on(r.DATA_LOADED, this.k);
      },
      getAll() {
        return a.safeReference(n.values(this.P));
      },
      getEventsMap() {
        return a.safeReference(this.P);
      },
      get(e) {
        return a.safeReference(this.P[e]);
      },
      getByApiName(e) {
        return a.safeReference(n.find(n.values(this.P), { apiName: e }));
      },
      getByPageId(e) {
        return a.safeReference(n.filter(this.P, { pageId: e }));
      },
      k(e) {
        n.isEmpty(e.data.events) ||
          (n.each(
            e.data.events,
            n.bind(function (e) {
              e.pageId || (e.pageId = e.viewId),
                a.deepFreeze(e),
                (this.P[e.id] = e);
            }, this)
          ),
          this.emitChange());
      },
    };
  },
  (e, t, i) => {
    function n(e) {
      const t = [];
      return e && r.isObject(e)
        ? (e.type && t.push(e.type),
          t.push(o),
          e.type && e.name && t.push(e.name),
          t.join(""))
        : o;
    }
    var r = i(2);
    const a = i(7);
    var o = "|";
    e.exports = {
      initialize() {
        (this.P = { handlers: {} }),
          this.on(a.ADD_EMITTER_HANDLER, this.ne),
          this.on(a.REMOVE_EMITTER_HANDLER, this.re);
      },
      getHandlers(e, t) {
        const i = [null, { type: e.type }, { type: e.type, name: e.name }];
        let a = [];
        return r.each(
          i,
          r.bind(function (e) {
            const t = n(e), i = this.P.handlers[t];
            i && (a = a.concat(i));
          }, this)
        ),
        t &&
          (a = r.filter(a, e => {
            return !e.publicOnly;
          })),
        a;
      },
      ne(e) {
        const t = n(e.filter);
        this.P.handlers[t] || (this.P.handlers[t] = []),
          this.P.handlers[t].push({
            handler: e.handler,
            token: e.token,
            publicOnly: !!e.publicOnly,
            emitErrors: !!e.emitErrors,
          }),
          this.emitChange();
      },
      re(e) {
        let t = !1;
        const i = e.token;
        r.forOwn(
          this.P.handlers,
          r.bind(function (e, n) {
            const a = r.filter(e, e => {
              return e.token !== i;
            });
            a.length !== e.length && ((t = !0), (this.P.handlers[n] = a));
          }, this)
        ),
          t && this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22);
    e.exports = {
      initialize() {
        (this.P = {}), this.on(r.DATA_LOADED, this.k);
      },
      k(e) {
        n.isEmpty(e.data.dimensions) ||
          (n.each(
            e.data.dimensions,
            n.bind(function (e) {
              a.deepFreeze(e), (this.P[e.id] = e);
            }, this)
          ),
          this.emitChange());
      },
      getAll() {
        return a.safeReference(n.values(this.P));
      },
      getById(e) {
        return a.safeReference(this.P[e]);
      },
      getByApiName(e) {
        return a.safeReference(n.find(n.values(this.P), { apiName: e }));
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        (this.P = {
          disabled: !1,
          forceAudienceIds: [],
          forceVariationIds: [],
          alreadyInitialized: !1,
          mutationObserverAPISupported: !1,
          isEditor: !1,
          isPreview: !1,
          isLegacyPreview: !1,
          isSlave: !1,
          previewLayerIds: [],
          projectToken: null,
          shouldOptOut: !1,
          trackingDisabled: !1,
          isRunningInV2Editor: !1,
          isRunningInDesktopApp: !1,
          forceTracking: !1,
        }),
          this.on(r.LOAD_DIRECTIVE, this.ae);
      },
      getAll() {
        return n.cloneDeep(this.P);
      },
      conflictInObservingChanges() {
        return !this.P.mutationObserverAPISupported;
      },
      isDisabled() {
        return this.P.disabled;
      },
      isEditor() {
        return this.P.isEditor;
      },
      clientHasAlreadyInitialized() {
        return this.P.alreadyInitialized;
      },
      getForceAudienceIds() {
        return this.P.forceAudienceIds;
      },
      getForceVariationIds() {
        return this.P.forceVariationIds;
      },
      getPreviewLayerIds() {
        return this.P.previewLayerIds;
      },
      getProjectToken() {
        return this.P.projectToken;
      },
      getForceTracking() {
        return this.P.forceTracking;
      },
      shouldActivate() {
        return !this.P.isEditor && !this.isDisabled();
      },
      shouldBootstrapDataForPreview() {
        return this.P.isPreview;
      },
      shouldBootstrapDataForEditor() {
        return this.P.isEditor;
      },
      shouldInitialize() {
        return !(
          this.shouldLoadPreview() ||
          this.isDisabled() ||
          this.getProjectToken()
        );
      },
      shouldLoadPreview() {
        return !(
          this.P.isPreview ||
          this.P.isLegacyPreview ||
          !this.getProjectToken() ||
          this.P.isEditor
        );
      },
      shouldBailForDesktopApp() {
        return !this.P.isEditor && this.P.isRunningInDesktopApp;
      },
      shouldLoadInnie() {
        return (
          !this.P.isSlave && !this.P.isEditor && this.P.isRunningInV2Editor
        );
      },
      shouldObserveChangesIndefinitely() {
        return this.P.mutationObserverAPISupported;
      },
      shouldObserveChangesUntilTimeout() {
        return !this.shouldObserveChangesIndefinitely();
      },
      shouldOptOut() {
        return this.P.shouldOptOut;
      },
      shouldSendTrackingData() {
        return (
          !this.P.trackingDisabled &&
          (!!this.P.forceTracking ||
            (!this.P.isPreview &&
              n.isEmpty(this.getForceVariationIds()) &&
              n.isEmpty(this.getForceAudienceIds())))
        );
      },
      isSlave() {
        return this.P.isSlave;
      },
      isRunningInDesktopApp() {
        return this.P.isRunningInDesktopApp;
      },
      isRunningInV2Editor() {
        return this.P.isRunningInV2Editor;
      },
      ae(e) {
        n.extend(this.P, e), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22);
    e.exports = {
      initialize() {
        (this.P = {
          holdback: 0,
          isGlobalHoldback: null,
          listTargetingKeys: [],
          revision: null,
          projectId: null,
          accountId: null,
          namespace: null,
          activationId: null,
          activationTimestamp: null,
          dcpServiceId: null,
          dcpKeyfieldLocators: [],
          recommenderServices: [],
          anonymizeIP: null,
          projectJS: null,
          snippetId: null,
          plugins: [],
          domContentLoaded: !1,
          experimental: {},
        }),
          this.on(r.DATA_LOADED, this.oe),
          this.on(r.ACTIVATE, this.se),
          this.on(r.RECORD_GLOBAL_DECISION, this.ce),
          this.on(r.SET_DOMCONTENTLOADED, this.ue);
      },
      getRevision() {
        return this.P.revision;
      },
      getGlobalHoldbackThreshold() {
        return this.P.holdback;
      },
      getProjectId() {
        return this.P.projectId;
      },
      getSnippetId() {
        return this.P.snippetId;
      },
      getAccountId() {
        return this.P.accountId;
      },
      getNamespace() {
        return this.P.namespace;
      },
      getActivationId() {
        return this.P.activationId;
      },
      getActivationTimestamp() {
        return this.P.activationTimestamp;
      },
      getAnonymizeIP() {
        return this.P.anonymizeIP;
      },
      isGlobalHoldback() {
        return !!this.P.isGlobalHoldback;
      },
      getListTargetingKeys() {
        return this.P.listTargetingKeys.slice();
      },
      getDCPServiceId() {
        return this.P.dcpServiceId;
      },
      getDCPKeyfieldLocators() {
        return this.P.dcpKeyfieldLocators;
      },
      getRecommenderServices() {
        return this.P.recommenderServices;
      },
      getProjectJS() {
        return this.P.projectJS;
      },
      getPlugins() {
        return this.P.plugins;
      },
      getExperimental() {
        return a.safeReference(this.P.experimental);
      },
      domContentLoadedHasFired() {
        return this.P.domContentLoaded;
      },
      se(e) {
        (this.P.activationId = e.activationId),
          (this.P.activationTimestamp = e.activationTimestamp),
          (this.P.isGlobalHoldback = null);
      },
      ce(e) {
        const t = e.isGlobalHoldback;
        if (null !== this.P.isGlobalHoldback && this.P.isGlobalHoldback !== t)
          throw new Error("Attempted to change already set global holdback!");
        (this.P.isGlobalHoldback = t), this.emitChange();
      },
      oe(e) {
        const t = n.pick(e.data, [
          "holdback",
          "accountId",
          "projectId",
          "snippetId",
          "namespace",
          "revision",
          "listTargetingKeys",
          "dcpServiceId",
          "dcpKeyfieldLocators",
          "recommenderServices",
          "anonymizeIP",
          "plugins",
          "projectJS",
          "experimental",
        ]);
        if (0 !== n.keys(t).length) {
          const i = {
            listTargetingKeys: [],
            dcpServiceId: null,
            dcpKeyfieldLocators: [],
          };
          n.extend(this.P, i, t), this.emitChange();
        }
      },
      ue() {
        (this.P.domContentLoaded = !0), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(40);
    e.exports = {
      initialize() {
        (this.P = { originalPushState: null, originalReplaceState: null }),
          this.on(r.ENSURE_ORIGINAL_PUSHSTATE, this.le),
          this.on(r.ENSURE_ORIGINAL_REPLACESTATE, this.de);
      },
      getOriginalPushState() {
        return this.P.originalPushState;
      },
      getOriginalReplaceState() {
        return this.P.originalReplaceState;
      },
      le() {
        this.P.originalPushState ||
          (this.P.originalPushState = n.bind(
            a.getGlobal("history").pushState,
            a.getGlobal("history")
          ));
      },
      de() {
        this.P.originalReplaceState ||
          (this.P.originalReplaceState = n.bind(
            a.getGlobal("history").replaceState,
            a.getGlobal("history")
          ));
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(23);
    (t.getUserAgent = () => {
      return window.navigator.userAgent;
    }),
      (t.getLocationSearch = () => {
        return window.location.search;
      }),
      (t.getNavigatorLanguage = () => {
        return window.navigator.language || window.navigator.userLanguage;
      }),
      (t.getHref = () => {
        return window.location.href;
      }),
      (t.getLocation = () => {
        return window.location;
      }),
      (t.setLocation = e => {
        window.location.replace(e);
      }),
      (t.setGlobal = (e, t) => {
        window[e] = t;
      }),
      (t.getGlobal = e => {
        return window[e];
      }),
      (t.getGlobalByPath = e => {
        for (var t = e.split("."), i = window; t.length; )
          try {
            i = i[t.shift()];
          } catch (t) {
            throw (
              (r.error("Attempted to access nonexistent property. Path ", e),
              new Error("Attempted to access nonexistent property. Path ", e))
            );
          }
        return i;
      }),
      (t.addEventListener = function () {
        return window.addEventListener.apply(window, arguments);
      }),
      (t.removeEventListener = function () {
        return window.removeEventListener.apply(window, arguments);
      }),
      (t.isMutationObserverAPISupported = () => {
        return !n.isUndefined(window.MutationObserver);
      }),
      (t.alert = e => {
        alert(e);
      }),
      (t.setTimeout = (e, t) => {
        return setTimeout(() => {
          try {
            e();
          } catch (e) {
            r.warn("Deferred function threw error:", e);
          }
        }, t);
      }),
      (t.setInterval = (e, t) => {
        return setInterval(() => {
          try {
            e();
          } catch (e) {
            r.warn("Polling function threw error:", e);
          }
        }, t);
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        (this.P = {}),
          this.on(r.DATA_LOADED, this.k),
          this.on(r.SET_INTEGRATION_SETTINGS, this.fe);
      },
      k(e) {
        n.isEmpty(e.data.integrationSettings) ||
          (n.each(
            e.data.integrationSettings,
            n.bind(function (e) {
              this.P[e.id] = e;
            }, this)
          ),
          this.emitChange());
      },
      fe(e) {
        const t = this.P[e.id];
        t ? n.extend(t, e) : (this.P[e.id] = e);
      },
      getAll() {
        return n.cloneDeep(n.values(this.P));
      },
      get(e) {
        return n.cloneDeep(this.P[e]);
      },
      getReference(e) {
        return this.P[e];
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(23), o = "*";
    e.exports = {
      initialize() {
        (this.P = {}),
          this.on(r.LOAD_PERSISTED_LAYER_STATES, this.pe),
          this.on(r.RECORD_LAYER_DECISION, this.ge),
          this.on(r.RECORD_LAYER_DECISION_EVENT_ID, this.he);
      },
      getLayerState(e, t) {
        if (this.P[e]) {
          const i = this.P[e];
          if (n.keys(i).length > 1 && !t)
            throw new Error(
              "View Id must be specified when more than one layerState for layer."
            );
          return t ? n.cloneDeep(n.find(i, { pageId: t })) : n.cloneDeep(i[o]);
        }
      },
      getLayerStates(e) {
        const t = [];
        for (const i in this.P)
          n.forEach(this.P[i], i => {
            (n.isUndefined(e) || i.namespace === e) && t.push(n.cloneDeep(i));
          });
        return t;
      },
      getLayerStatesForAnalytics() {
        const e = [];
        for (const t in this.P)
          n.forEach(this.P[t], t => {
            e.push(n.pick(t, ["layerId", "decision", "decisionEventId"]));
          });
        return e;
      },
      pe(e) {
        e.merge || (this.P = {}),
          n.each(
            e.layerStates,
            n.bind(function (e) {
              const t = e.layerId;
              e.pageId || (e.pageId = e.viewId);
              const i = e.pageId || o, r = this.P[t];
              if (n.isUndefined(r)) (this.P[t] = {}), (this.P[t][i] = e);
              else {
                const a = r[i];
                (!a || e.decisionTimestamp > (a.decisionTimestamp || 0)) &&
                  (this.P[t][i] = e);
              }
            }, this)
          ),
          this.emitChange();
      },
      ge(e) {
        const t = {
            layerId: e.layerId,
            revision: e.revision,
            namespace: e.namespace,
            pageId: e.pageId,
            decisionTicket: e.decisionTicket,
            decision: e.decision,
            decisionActivationId: e.activationId,
            decisionTimestamp: e.timestamp,
            decisionEventId: null,
          };

        let i = this.P[e.layerId] || {};
        e.pageId ? (delete i[o], (i[e.pageId] = t)) : ((i = {}), (i[o] = t)),
          (this.P[e.layerId] = i),
          this.emitChange();
      },
      he(e) {
        const t = e.layerId, i = e.pageId || o;
        return this.P[t]
          ? this.P[t][i]
            ? ((this.P[t][i].decisionEventId = e.decisionId),
              void this.emitChange())
            : void a.warn(
                "Not recording decision event: Layer state not found for view",
                i
              )
          : void a.warn(
              "Not recording decision event: Campaign not registered",
              t
            );
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22), o = i(44);
    e.exports = {
      initialize() {
        (this.P = { layers: {}, experiments: {}, variations: {} }),
          this.on(r.DATA_LOADED, this.k);
      },
      k(e) {
        if (!n.isEmpty(e.data.layers)) {
          const t = this;
          n.each(e.data.layers, e => {
            n.each(e.experiments, i => {
              e.pageIds || (e.pageIds = e.viewIds),
                i.campaignName || o.isSingleExperimentPolicy(e.policy)
                  ? o.isSingleExperimentPolicy(e.policy) &&
                    e.groupId &&
                    (i.groupId = e.groupId)
                  : (i.campaignName = e.name),
                n.each(i.variations, e => {
                  n.each(e.actions, e => {
                    e.pageId || (e.pageId = e.viewId);
                  }),
                    (t.P.variations[e.id] = e);
                }),
                (t.P.experiments[i.id] = i);
            }),
              a.deepFreeze(e),
              (t.P.layers[e.id] = e);
          }),
            this.emitChange();
        }
      },
      getAll() {
        return a.safeReference(n.values(this.P.layers));
      },
      getCampaignsMap() {
        return a.safeReference(this.P.layers);
      },
      getExperimentsMap() {
        return a.safeReference(this.P.experiments);
      },
      getVariationsMap() {
        return a.safeReference(this.P.variations);
      },
      getCount() {
        return n.keys(this.P.layers).length;
      },
      getAllByPageIds(e) {
        return a.safeReference(
          n.filter(this.P.layers, t => {
            return n.some(e, n.partial(n.includes, t.pageIds));
          })
        );
      },
      get(e) {
        return a.safeReference(this.P.layers[e]);
      },
      getLayerByExperimentId(e) {
        const t = n.find(this.P.layers, t => {
          return n.find(t.experiments, { id: e });
        });
        return a.safeReference(t);
      },
      getExperimentByVariationId(e) {
        let t;
        return n.some(this.P.layers, i => {
          return n.some(i.experiments, i => {
            return n.find(i.variations, { id: e }) && (t = i), t;
          }),
          t
        ;
        }),
        a.safeReference(t)
      ;
      },
    };
  },
  (e, t) => {
    const i = "single_experiment", n = "multivariate";
    t.isSingleExperimentPolicy = e => {
      return e === i || e === n;
    };
  },
  (e, t, i) => {
    const n = i(7);
    e.exports = {
      initialize() {
        (this.P = { logs: [] }), this.on(n.LOG, this._e);
      },
      getLogs() {
        return this.P.logs;
      },
      _e(e) {
        this.P.logs.push(e), this.emitChange();
      },
      D() {
        return this.P.logs.slice();
      },
    };
  },
  (e, t, i) => {
    const n = i(7), r = i(22);
    e.exports = {
      initialize() {
        (this.P = { data: null, hasTracked: null }),
          this.on(n.LOAD_REDIRECT_DATA, this.ve),
          this.on(n.REGISTER_TRACKED_REDIRECT_DATA, this.Ee);
      },
      get() {
        return r.safeReference(this.P.data);
      },
      hasTracked() {
        return this.P.hasTracked;
      },
      ve(e) {
        r.deepFreeze(e),
          (this.P.data = e),
          (this.P.hasTracked = !1),
          this.emitChange();
      },
      Ee() {
        this.P.hasTracked = !0;
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(26), o = 1e3;
    e.exports = {
      initialize() {
        (this.P = {}),
          this.on(r.SET_PENDING_EVENT, this.me),
          this.on(r.REMOVE_PENDING_EVENT, this.Ie),
          this.on(r.LOAD_PENDING_EVENTS, this.ye);
      },
      getEvents() {
        return this.P;
      },
      getEventsString() {
        return a.stringify(this.P);
      },
      me(e) {
        n.keys(this.P).length >= o && this.Se();
        const t = e.id, i = e.retryCount;
        (this.P[t] && this.P[t].retryCount === i) ||
          ((this.P[t] = {
            id: t,
            timeStamp: e.timeStamp,
            data: e.data,
            retryCount: i,
          }),
          this.emitChange());
      },
      Ie(e) {
        delete this.P[e.id], this.emitChange();
      },
      ye(e) {
        (this.P = e.events), this.Se(), this.emitChange();
      },
      Se() {
        for (
          let e = n.sortBy(this.P, "timeStamp"), t = 0;
          t <= e.length - o;
          t++
        )
          delete this.P[e[t].id];
        this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(25);
    e.exports = {
      initialize() {
        (this.P = {}),
          (this.P[a.PerformanceData.performance_marks] = {}),
          this.on(r.SET_PERFORMANCE_MARKS_DATA, this.Te);
      },
      Te(e) {
        n.isUndefined(this.P[a.PerformanceData.performance_marks][e.name]) &&
          (this.P[a.PerformanceData.performance_marks][e.name] = []),
          this.P[a.PerformanceData.performance_marks][e.name].push(e.data),
          this.emitChange();
      },
      getMarks() {
        return n.mapValues(
          this.P[a.PerformanceData.performance_marks],
          e => {
            return n.map(e, e => {
              return [e.startTime, e.duration];
            });
          }
        );
      },
      getDurationsFor(e) {
        return n.reduce(
          e,
          n.bind(function (e, t) {
            const i = this.P[a.PerformanceData.performance_marks][t];
            return i &&
              (e[t] = Math.round(
                n.reduce(
                  i,
                  (e, t) => {
                    return e + t.duration;
                  },
                  0
                )
              )),
            e
          ;
          }, this),
          {}
        );
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(25), o = i(23);
    e.exports = {
      initialize() {
        (this.P = n.mapValues(a.PluginTypes, () => {
          return {};
        })),
          this.on(r.REGISTER_PLUGIN, this.Ae);
      },
      Ae(e) {
        const t = e.type, i = e.name, n = e.plugin;
        if (!t || !i)
          throw new Error(
            "Missing information needed to register plugins: " + t + ":" + i
          );
        if (!this.P[t]) throw new Error("Invalid plugin type specified: " + t);
        (this.P[t][i] = n), o.debug("Plugin Store: Registering Plugin :", e);
      },
      getAllPlugins(e) {
        if (e) {
          if (this.P[e]) return this.P[e];
          throw new Error("Invalid plugin type: " + e);
        }
        return this.P;
      },
      getPlugin(e, t) {
        if (!t || !e) throw new Error("Missing plugin parameters");
        const i = this.getAllPlugins(e);
        return i[t] || null;
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(19);
    e.exports = {
      initialize() {
        (this.P = {}), this.on(r.SET_VISITOR_ATTRIBUTE_PENDING, this.Re);
      },
      getPendingAttributeValue(e) {
        return (
          (e = n.isArray(e) ? e.concat("pending") : [e, "pending"]),
          a.getFieldValue(this.P, e)
        );
      },
      Re(e) {
        a.setFieldValue(this.P, e.key, { pending: e.pending }),
          this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        (this.P = { layerId: null }),
          this.on(r.ANNOUNCE_PENDING_REDIRECT, this.ve);
      },
      isExpectingRedirect() {
        return n.isString(this.P.layerId);
      },
      getLayerId() {
        return this.P.layerId;
      },
      ve(e) {
        this.isExpectingRedirect() ||
          ((this.P.layerId = e.layerId), this.emitChange());
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        (this.P = {
          inRumSample: !1,
          id: null,
          src: null,
          RumHost: null,
          data: { extras: {} },
          apis: {},
          DOMObservation: {},
          featuresNeeded: {},
        }),
          this.on(r.SET_RUM_DATA, this.De),
          this.on(r.RECORD_API_USAGE, this.be),
          this.on(r.INITIALIZE_CHANGE_METRICS, this.we),
          this.on(r.RECORD_ACTIVATION_TYPE_USAGE, this.Oe),
          this.on(r.RECORD_AUDIENCE_USAGE, this.Ce),
          this.on(r.RECORD_CHANGE_MACROTASK_RATE, this.Ne),
          this.on(r.RECORD_CHANGE_OVERHEATED, this.Le),
          this.on(r.RECORD_CHANGE_TYPE_USAGE, this.Pe),
          this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE, this.Ve),
          this.on(r.RECORD_INTEGRATION_USAGE, this.ke),
          this.on(r.RECORD_LAYER_FEATURE_USAGE, this.xe),
          this.on(r.RECORD_LAYER_POLICY_USAGE, this.Fe),
          this.on(r.RECORD_VIEW_FEATURE_USAGE, this.Me),
          this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT, this.Ue),
          this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE, this.Ge),
          this.on(r.RECORD_VISITOR_ID_ERROR, this.Be),
          this.on(r.RECORD_STICKY_BUCKETING_FEATURE, this.ze);
      },
      De(e) {
        n.merge(this.P, e), this.emitChange();
      },
      be(e) {
        this.P.apis[e.methodName] || (this.P.apis[e.methodName] = 0),
          this.P.apis[e.methodName]++,
          this.emitChange();
      },
      we() {
        n.isUndefined(this.P.data.extras.changeMacrotaskRate) &&
          (this.P.data.extras.changeMacrotaskRate = 0),
          n.isUndefined(this.P.data.extras.numOverheatedChanges) &&
            (this.P.data.extras.numOverheatedChanges = 0);
      },
      Ne(e) {
        n.isUndefined(this.P.data.extras.changeMacrotaskRate) &&
          (this.P.data.extras.changeMacrotaskRate = 0),
          e.changeMacrotaskRate > this.P.data.extras.changeMacrotaskRate &&
            (this.P.data.extras.changeMacrotaskRate = e.changeMacrotaskRate),
          this.emitChange();
      },
      Le() {
        n.isUndefined(this.P.data.extras.numOverheatedChanges) &&
          (this.P.data.extras.numOverheatedChanges = 0),
          this.P.data.extras.numOverheatedChanges++,
          this.emitChange();
      },
      Ve(e) {
        this.P.DOMObservation[e.counterName] ||
          (this.P.DOMObservation[e.counterName] = 0),
          this.P.DOMObservation[e.counterName]++,
          this.emitChange();
      },
      je(e, t, i) {
        n.isUndefined(this.P.featuresNeeded[e]) &&
          (this.P.featuresNeeded[e] = {});
        const r = this.P.featuresNeeded[e];
        n.each(t, e => {
          r[e] || (r[e] = {}), r[e][i] || (r[e][i] = !0);
        });
      },
      ke(e) {
        this.je("integrations", e.integrations, e.layerId);
      },
      Pe(e) {
        this.je("changeTypes", e.changeTypes, e.layerId);
      },
      Oe(e) {
        this.je("activationTypes", [e.activationType], e.entityId),
          this.emitChange();
      },
      Me(e) {
        this.je("viewFeatures", e.featuresUsed, e.entityId), this.emitChange();
      },
      xe(e) {
        this.je("layerFeatures", [e.feature], e.entityId), this.emitChange();
      },
      Fe(e) {
        this.je("policy", [e.policy], e.layerId), this.emitChange();
      },
      Ce(e) {
        this.je("audiences", e.audienceTypes, e.layerId), this.emitChange();
      },
      Ue(e) {
        (this.P.data.extras.viewsInitiallyActivatedCount =
          e.viewsInitiallyActivatedCount),
          this.emitChange();
      },
      Ge(e) {
        this.je("visitorIdLocatorType", [e.visitorIdLocatorType], e.entityId),
          this.emitChange();
      },
      Be(e) {
        (this.P.data.extras.errorCustomVisitorId = e.isError),
          this.emitChange();
      },
      ze(e) {
        this.je("stickyBucketing", [e.feature], e.id);
      },
      getSampleRum() {
        return this.P.inRumSample;
      },
      getRumId() {
        return this.P.id;
      },
      getRumHost() {
        return this.P.RumHost;
      },
      getApiData() {
        return this.P.apis;
      },
      getDOMObservationData() {
        return this.P.DOMObservation;
      },
      getRumData() {
        return n.cloneDeep(this.P.data);
      },
      getScriptSrc() {
        return this.P.src;
      },
      getFeaturesNeededData() {
        const e = this.P.featuresNeeded, t = {};
        return n.forOwn(e, (e, i) => {
          const r = n.keys(e);
          n.isEmpty(r) || (t[i] = {}),
            n.forEach(r, r => {
              t[i][r] = n.keys(e[r]).length;
            });
        }),
        t;
      },
    };
  },
  (e, t, i) => {
    const n = i(7);
    e.exports = {
      initialize() {
        (this.P = { initialized: !1, natives: {} }),
          this.on(n.SANDBOXED_FUNCTIONS_ADDED, this.He);
      },
      He(e) {
        if (!e.sandboxedFunctions)
          throw new Error("No sandboxedFunctions found in payload");
        (this.P.natives = e.sandboxedFunctions),
          (this.P.initialized = !0),
          this.emitChange();
      },
      getAll() {
        return this.P.natives;
      },
      get(e) {
        if (!e) throw new Error("Missing name parameter");
        return this.P.natives[e] || null;
      },
      isInitialized() {
        return this.P.initialized;
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(24), o = i(5), s = 18e5;
    e.exports = {
      initialize() {
        (this.P = { lastSessionTimestamp: 0, sessionId: null }),
          this.on(r.REFRESH_SESSION, this.Ke),
          this.on(r.LOAD_SESSION_STATE, this.Ye);
      },
      getState() {
        return n.cloneDeep(this.P);
      },
      getSessionId() {
        return this.P.sessionId;
      },
      Ye(e) {
        (this.P.sessionId = e.sessionId),
          (this.P.lastSessionTimestamp = e.lastSessionTimestamp),
          this.emitChange();
      },
      Ke() {
        const e = a.now(), t = this.P.lastSessionTimestamp;
        (!this.P.sessionId || e - t > s) && (this.P.sessionId = o.generate()),
          (this.P.lastSessionTimestamp = e),
          this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        this.qe(),
          this.on(r.FINALIZE_BATCH_SNAPSHOT, this.We),
          this.on(r.REGISTER_PREVIOUS_BATCH, this.Xe),
          this.on(r.REGISTER_TRACKER_VISITOR, this.Qe),
          this.on(r.REGISTER_TRACKER_EVENT, this.$e),
          this.on(r.REGISTER_TRACKER_DECISION, this.Je),
          this.on(r.RESET_TRACKER_EVENTS, this.Ze),
          this.on(r.RESET_TRACKER_STORE, this.qe),
          this.on(r.RESET_TRACKER_PREVIOUS_BATCHES, this.et),
          this.on(r.SET_TRACKER_POLLING, this.tt),
          this.on(r.SET_TRACKER_BATCHING, this.it),
          this.on(r.SET_TRACKER_SEND_EVENTS, this.nt),
          this.on(r.SET_TRACKER_PERSISTABLE_STATE, this.rt),
          this.on(r.SET_TRACKER_DIRTY, this.at),
          this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES, this.ot);
      },
      getPersistableState() {
        return this.P.isDirty
          ? this.hasEventsToSend() || this.hasPreviousBatchesToSend()
            ? {
                data: this.P.data,
                decisions: this.P.decisions,
                decisionEvents: this.P.decisionEvents,
                previousBatches: this.P.previousBatches,
              }
            : {}
          : null;
      },
      rt(e) {
        n.isEmpty(this.P.data) ||
          n.isEmpty(e.data) ||
          (this.We(), this.P.previousBatches.push(this.getEventBatch())),
          (this.P.data = e.data || {}),
          (this.P.decisions = e.decisions || []),
          (this.P.decisionEvents = e.decisionEvents || []),
          n.isEmpty(this.P.previousBatches) || n.isEmpty(e.previousBatches)
            ? (this.P.previousBatches = e.previousBatches || [])
            : (this.P.previousBatches = this.P.previousBatches.concat(
                e.previousBatches
              )),
          this.emitChange();
      },
      at(e) {
        (this.P.isDirty = e), this.emitChange();
      },
      $e(e) {
        const t = this.st();
        (!n.isEmpty(t.snapshots) && n.isEmpty(this.P.decisionEvents)) ||
          this.ct(),
          this.ut().events.push(e.event),
          (this.P.decisions = e.decisions),
          this.at(!0);
      },
      Je(e) {
        this.P.decisionEvents.push(e.decisionEvent),
          (this.P.decisions = e.decisions),
          this.at(!0);
      },
      Qe(e) {
        n.isEmpty(this.P.data) ? (this.P.data = e.data) : this.We(),
          this.P.data.visitors.push(e.visitor),
          (this.P.decisions = e.decisions),
          (this.P.decisionEvents = []),
          this.at(!0);
      },
      Xe(e) {
        this.P.previousBatches.push(e), this.at(!0);
      },
      qe() {
        (this.P = {
          polling: !1,
          shouldBatch: !0,
          data: {},
          decisions: [],
          decisionEvents: [],
          canSend: !1,
          isDirty: !1,
          previousBatches: [],
        }),
          this.emitChange();
      },
      Ze() {
        const e = this.st();
        (this.P.data.visitors = [e]), (e.snapshots = []), this.at(!0);
      },
      et() {
        (this.P.previousBatches = []), this.at(!0);
      },
      tt(e) {
        (this.P.polling = e), this.emitChange();
      },
      it(e) {
        (this.P.shouldBatch = e), this.emitChange();
      },
      nt(e) {
        (this.P.canSend = e), this.emitChange();
      },
      getEventBatch() {
        return n.cloneDeep(this.P.data);
      },
      getPreviousBatches() {
        return n.cloneDeep(this.P.previousBatches);
      },
      dt() {
        return this.P.decisionEvents.slice();
      },
      ft() {
        this.P.decisionEvents = [];
      },
      pt() {
        return this.P.decisions.slice();
      },
      isPolling() {
        return this.P.polling;
      },
      shouldBatch() {
        return this.P.shouldBatch;
      },
      ut() {
        return n.last(this.st().snapshots);
      },
      st() {
        return n.last(this.P.data.visitors);
      },
      ct() {
        const e = this.dt(), t = this.st();
        t.snapshots.push({ decisions: this.pt(), events: e }),
          this.ft(),
          this.at(!0);
      },
      We() {
        this.P.decisionEvents.length > 0 && this.ct();
      },
      hasEventsToSend() {
        if (!n.isEmpty(this.P.decisionEvents)) return !0;
        if (!n.isEmpty(this.P.data)) {
          const e = n.some(this.P.data.visitors || [], e => {
            return e.snapshots.length > 0;
          });
          if (e) return !0;
        }
        return !1;
      },
      hasPreviousBatchesToSend() {
        return !n.isEmpty(this.P.previousBatches);
      },
      canSend() {
        return this.P.canSend;
      },
      ot(e) {
        const t = this.st();
        t && (t.attributes = e.attributes);
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        (this.P = {}), this.on(r.SET_UA_DATA, this.k);
      },
      k(e) {
        n.isEmpty(this.P) && (this.P = e.data);
      },
      get() {
        return n.cloneDeep(this.P);
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(23), o = !1, s = { globalTags: {}, viewStates: {}, shouldBatch: !1 };
    e.exports = {
      initialize() {
        (this.P = n.cloneDeep(s)),
          this.on(r.REGISTER_VIEWS, this.ht),
          this.on(r.SET_VIEW_ACTIVE_STATE, this._t),
          this.on(r.UPDATE_PARSED_VIEW_METADATA, this.vt),
          this.on(r.UPDATE_USER_SUPPLIED_METADATA, this.Et),
          this.on(r.TRACK_VIEW_ACTIVATED_EVENT, this.mt),
          this.on(r.SET_GLOBAL_TAGS, this.It),
          this.on(r.RESET_VIEW_STATES, this.yt),
          this.on(r.SET_VIEW_BATCHING, this.it);
      },
      getAll() {
        const e = {};
        for (const t in this.P.viewStates) e[t] = this.getViewState(t);
        return e;
      },
      shouldBatch() {
        return this.P.shouldBatch;
      },
      getViewState(e) {
        const t = n.cloneDeep(this.P.viewStates[e]), i = this.P.globalTags;
        return (
          (t.metadata = n.extend(
            {},
            t.parsedMetadata,
            i,
            t.userSuppliedMetadata
          )),
          t
        );
      },
      getActiveViewTags() {
        const e = this.getActiveViewStates(),
              t = n.map(e, e => {
                return e.metadata;
              }),
              i = [{}].concat(t);
        return n.extend.apply(n, i);
      },
      getActivationEventId(e) {
        return this.P.viewStates[e]
          ? this.P.viewStates[e].activationEventId
          : null;
      },
      getActiveViewStates() {
        return n.reduce(
          this.P.viewStates,
          n.bind(function (e, t, i) {
            return this.isViewActive(i) && e.push(this.getViewState(i)), e;
          }, this),
          []
        );
      },
      isViewActive(e) {
        const t = this.P.viewStates[e];
        return t || a.warn("No Page registered with id", e), !!t.isActive;
      },
      getGlobalTags() {
        return n.cloneDeep(this.P.globalTags);
      },
      yt() {
        (this.P.viewStates = {}), this.emitChange();
      },
      ht(e) {
        n.each(
          e.views,
          n.bind(function (e) {
            const t = e.id;
            (o && this.P.viewStates[t]) ||
              (this.P.viewStates[t] = {
                id: t,
                isActive: n.isBoolean(e.isActive) ? e.isActive : null,
                activatedTimestamp: null,
                activationEventId: null,
                parsedMetadata: {},
                userSuppliedMetadata: {},
              });
          }, this)
        ),
          this.emitChange();
      },
      _t(e) {
        const t = e.view.id;
        if (!this.P.viewStates[t])
          throw new Error("No view exists with id " + t);
        (this.P.viewStates[t].isActive = e.isActive),
          e.isActive
            ? (this.P.viewStates[t].activatedTimestamp = e.timestamp)
            : ((this.P.viewStates[t].parsedMetadata = {}),
              (this.P.viewStates[t].userSuppliedMetadata = {})),
          this.emitChange();
      },
      vt(e) {
        const t = e.pageId;
        if (!this.P.viewStates[t])
          throw new Error("No view exists with id " + t);
        n.assign(this.P.viewStates[t].parsedMetadata, e.metadata),
          this.emitChange();
      },
      Et(e) {
        const t = e.pageId;
        if (!this.P.viewStates[t])
          throw new Error("No view exists with id " + t);
        n.assign(this.P.viewStates[t].userSuppliedMetadata, e.metadata),
          this.emitChange();
      },
      mt(e) {
        const t = e.pageId;
        this.P.viewStates[t] &&
          ((this.P.viewStates[t].activationEventId = e.eventData.eventId),
          this.emitChange());
      },
      It(e) {
        n.extend(this.P.globalTags, e), this.emitChange();
      },
      it(e) {
        (this.P.shouldBatch = e), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22);
    e.exports = {
      initialize() {
        (this.P = { views: {}, apiNamesToViews: {} }),
          this.on(r.DATA_LOADED, this.k);
      },
      getAll() {
        return a.safeReference(n.values(this.P.views));
      },
      getPagesMap() {
        return a.safeReference(this.P.views);
      },
      get(e) {
        return a.safeReference(this.P.views[e]);
      },
      getByApiName(e) {
        return a.safeReference(this.P.apiNamesToViews[e]);
      },
      apiNameToId(e) {
        const t = this.P.apiNamesToViews[e];
        if (t) return t.id;
      },
      idToApiName(e) {
        const t = this.P.views[e];
        if (t) return t.apiName;
      },
      getNumberOfPages() {
        return n.keys(this.P.views).length;
      },
      getAllViewsForActivationType(e) {
        return n.filter(this.P.views, { activationType: e });
      },
      k(e) {
        n.isEmpty(e.data.views) ||
          (n.each(
            e.data.views,
            n.bind(function (e) {
              a.deepFreeze(e),
                (this.P.views[e.id] = e),
                (this.P.apiNamesToViews[e.apiName] = e);
            }, this)
          ),
          this.emitChange());
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(19);
    e.exports = {
      initialize() {
        (this.P = { profile: {}, metadata: {}, visitorId: null }),
          this.on(r.SET_VISITOR_ID_VIA_API, this.St),
          this.on(r.SET_VISITOR_ATTRIBUTES, this.Tt),
          this.on(r.LOAD_EXISTING_VISITOR_PROFILE, this.At);
      },
      getVisitorProfile() {
        return this.P.profile;
      },
      getVisitorProfileMetadata() {
        return this.P.metadata;
      },
      getAttribute(e) {
        const t = this.P.profile;
        return n.cloneDeep(a.getFieldValue(t, e));
      },
      getAttributeMetadata(e) {
        return n.cloneDeep(this.P.metadata[e]);
      },
      getVisitorIdFromAPI() {
        return this.P.visitorId;
      },
      At(e) {
        (this.P.profile = e.profile),
          (this.P.metadata = e.metadata),
          this.emitChange();
      },
      Tt(e) {
        n.each(
          e.attributes,
          n.bind(function (e) {
            const t = e.key;
            a.setFieldValue(this.P.profile, t, e.value),
              e.metadata &&
                n.forOwn(
                  e.metadata,
                  n.bind(function (e, i) {
                    a.setFieldValue(this.P.metadata, t.concat(i), e);
                  }, this)
                );
          }, this)
        ),
          this.emitChange();
      },
      St(e) {
        (this.P.visitorId = e), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        (this.P = {}), this.on(r.DATA_LOADED, this.Rt);
      },
      getCustomBehavioralAttributes() {
        return n.filter(this.P, e => {
          return !!e.rule_json;
        });
      },
      getVisitorAttribute(e) {
        let t = n.values(this.P);
        if (
          (e.datasourceId &&
            (t = n.filter(t, { dcp_datasource_id: String(e.datasourceId) })),
          e.attributeName && e.attributeId)
        )
          throw new Error(
            "Must not specify both attribute name and attribute ID"
          );
        if (e.attributeId) {
          const i = this.P[e.attributeId];
          if (!i)
            throw new Error("Unrecognized attribute ID: " + e.attributeId);
          return i;
        }
        if (e.attributeName) {
          const r = n.filter(t, { name: e.attributeName });
          if (!r.length)
            throw new Error("Unrecognized attribute name: " + e.attributeName);
          if (r.length > 1)
            throw new Error(
              "Too many attributes with name: " + e.attributeName
            );
          return r[0];
        }
        throw new Error("Must specify attribute name or attribute ID");
      },
      Rt(e) {
        n.isEmpty(e.data.visitorAttributes) ||
          (n.each(
            e.data.visitorAttributes,
            n.bind(function (e) {
              this.P[e.id] = e;
            }, this)
          ),
          this.emitChange());
      },
    };
  },
  (e, t, i) => {
    const n = (i(2), i(7));
    i(62).Event;
    e.exports = {
      initialize() {
        (this.P = { events: [], foreignEvents: {}, foreignEventQueues: {} }),
          this.on(n.SET_VISITOR_EVENTS, this.k),
          this.on(n.SET_FOREIGN_VISITOR_EVENTS, this.Dt),
          this.on(n.SET_FOREIGN_VISITOR_EVENT_QUEUE, this.bt);
      },
      getEvents() {
        return this.P.events;
      },
      getForeignEvents() {
        return this.P.foreignEvents;
      },
      getForeignEventQueues() {
        return this.P.foreignEventQueues;
      },
      k(e) {
        (this.P.events = e), this.emitChange();
      },
      Dt(e) {
        this.P.foreignEvents[e.key] = e.value;
      },
      bt(e) {
        this.P.foreignEventQueues[e.key] = e.value;
      },
    };
  },
  (e, t, i) => {
    function n(e, t, i, n, r) {
      (this[o.FIELDS.NAME] = e),
        (this[o.FIELDS.TYPE] = t),
        a.isString(i) && i.trim().length > 0 && (this[o.FIELDS.CATEGORY] = i),
        n && a.keys(n).length > 0 && (this[o.FIELDS.OPTIONS] = n),
        a.isUndefined(r) || (this[o.FIELDS.REVENUE] = r);
    }
    function r(e, t, i, n) {
      (this.eventBase = e),
        (this[o.FIELDS.TIME] = t),
        a.isUndefined(i) || (this[o.FIELDS.SESSION_ID] = i),
        a.isUndefined(n) || (this[o.FIELDS.SESSION_INDEX] = n);
    }
    var a = i(2);
    var o = i(63);
    const s = i(19).getFieldValue;
    const c = i(64);
    (t.EventBase = n),
      (n.prototype.digest = function () {
      const e = (e, t) => {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t);
              },
            t = [];
      if (
        (t.push(e(o.FIELDS.NAME, this[o.FIELDS.NAME])),
        t.push(e(o.FIELDS.TYPE, this[o.FIELDS.TYPE])),
        this[o.FIELDS.CATEGORY] &&
          t.push(e(o.FIELDS.CATEGORY, this[o.FIELDS.CATEGORY])),
        this[o.FIELDS.REVENUE] &&
          t.push(e(o.FIELDS.REVENUE, this[o.FIELDS.REVENUE])),
        !this[o.FIELDS.OPTIONS])
      )
        return t.join("&");
      const i = this[o.FIELDS.OPTIONS] || {};

      let n = a.filter(a.keys(i), e => {
        return i.hasOwnProperty(e);
      });

      n = n.sort();
      for (let r = 0; r < n.length; r++) t.push(e(n[r], i[n[r]]));
      return t.join("&");
    }),
      (n.prototype.hash = function () {
        return this.hash_
          ? this.hash_
          : ((this.hash_ = c.hashToHex(
              c.toByteString(this.digest()),
              c.Seed.BEHAVIOR_EVENT
            )),
            this.hash_);
      }),
      (n.prototype.setHash = function (e) {
        this.hash_ = e;
      }),
      (n.prototype.reHash = function () {
        (this.hash_ = null), this.hash();
      }),
      (n.prototype.equals = function (e) {
        if (this.hash() !== e.hash()) return !1;
        if (
          this[o.FIELDS.NAME] !== e[o.FIELDS.NAME] ||
          this[o.FIELDS.TYPE] !== e[o.FIELDS.TYPE] ||
          this[o.FIELDS.CATEGORY] !== e[o.FIELDS.CATEGORY] ||
          this[o.FIELDS.REVENUE] !== e[o.FIELDS.REVENUE]
        )
          return !1;
        if (!this[o.FIELDS.OPTIONS] && !e[o.FIELDS.OPTIONS]) return !0;
        const t = this[o.FIELDS.OPTIONS] || {},
              i = e[o.FIELDS.OPTIONS] || {},
              n = a.filter(a.keys(t), e => {
                return t.hasOwnProperty(e);
              }),
              r = a.filter(a.keys(i), e => {
                return i.hasOwnProperty(e);
              });
        if (n.length !== r.length) return !1;
        for (let s = 0; s < n.length; s++) {
          const c = n[s];
          if (!i.hasOwnProperty(c) || t[c] !== i[c]) return !1;
        }
        return !0;
      }),
      (n.prototype.getValueOrDefault = function (e, t) {
        const i = s(this, e);
        return a.isUndefined(i) ? t : i;
      }),
      (n.prototype.setFieldValue = function (e, t) {
        (e !== o.FIELDS.NAME &&
          e !== o.FIELDS.TYPE &&
          e !== o.FIELDS.CATEGORY &&
          e !== o.FIELDS.REVENUE &&
          e !== o.FIELDS.OPTIONS) ||
          ((this[e] = t), this.reHash());
      }),
      (t.Event = r),
      (r.prototype.getValueOrDefault = function (e, t) {
        if (0 === e.length) return this;
        const i = {};
        (i[o.FIELDS.TIME] = this[o.FIELDS.TIME]),
          (i[o.FIELDS.SESSION_ID] = this[o.FIELDS.SESSION_ID]),
          (i[o.FIELDS.SESSION_INDEX] = this[o.FIELDS.SESSION_INDEX]);
        const n = s(i, e);
        return a.isUndefined(n) ? this.eventBase.getValueOrDefault(e, t) : n;
      }),
      (r.prototype.setFieldValue = function (e, t) {
        e === o.FIELDS.TIME ||
        e === o.FIELDS.SESSION_ID ||
        e === o.FIELDS.SESSION_INDEX
          ? (this[e] = t)
          : this.eventBase.setFieldValue(e, t);
      });
    const u = {
      n: "name",
      y: "type",
      c: "category",
      r: "revenue",
      s: "session_id",
      o: "tags",
      si: "session_index",
    };
    (r.prototype.readableEvent = function () {
      let e;
      let t;

      const i = e => {
        return a.isString(e) ? '"' + e + '"' : e;
      };

      const n = this;
      const r = [];
      a.each(
        [
          o.FIELDS.NAME,
          o.FIELDS.TYPE,
          o.FIELDS.CATEGORY,
          o.FIELDS.REVENUE,
          o.FIELDS.SESSION_ID,
        ],
        o => {
          (e = u[o]),
            (t = n.getValueOrDefault([o])),
            a.isUndefined(t) || r.push(e + ": " + i(t));
        }
      );
      const s = [];
      if (
        ((e = u[o.FIELDS.OPTIONS]),
        (t = n.getValueOrDefault([o.FIELDS.OPTIONS])),
        a.isUndefined(t) ||
          (a.each(t, (e, t) => {
            s.push(t + ": " + String(i(e)));
          }),
          r.push(e + ": {\n\t\t" + s.join(",\n\t\t") + "\n\t}")),
        (t = n.getValueOrDefault([o.FIELDS.TIME])),
        a.isNumber(t) && (t = i(new Date(t).toString())),
        !a.isUndefined(t))
      ) {
        const c = "timestamp";
        r.push(c + ": " + t);
      }
      return "{\n\t" + r.join(",\n\t") + "\n}";
    }),
      (r.prototype.toObject = function (e) {
      let t;
      let i;
      const n = {};
      const r = this;
      a.each(
        [
          o.FIELDS.NAME,
          o.FIELDS.TYPE,
          o.FIELDS.CATEGORY,
          o.FIELDS.REVENUE,
          o.FIELDS.OPTIONS,
          o.FIELDS.SESSION_INDEX,
        ],
        e => {
          (t = u[e]),
            (i = r.getValueOrDefault(
              [e],
              e === o.FIELDS.OPTIONS ? {} : void 0
            )),
            a.isUndefined(i) || (n[t] = i);
        }
      );
      const s = u[o.FIELDS.OPTIONS], c = u[o.FIELDS.REVENUE];
      if (
        (e &&
          e.revenueAsTag &&
          n[c] &&
          ((n[s] = n[s] || {}), (n[s][c] = n[c]), delete n[c]),
        (i = r.getValueOrDefault([o.FIELDS.TIME])),
        a.isNumber(i))
      )
        if (e && e.timeAsTimestamp) {
          const l = "timestamp";
          n[l] = new Date(i);
        } else {
          const d = "time";
          n[d] = i;
        }
      return n;
    });
  },
  (e, t) => {
    (t.FIELDS = {
      NAME: "n",
      TIME: "t",
      TYPE: "y",
      CATEGORY: "c",
      REVENUE: "r",
      SESSION_ID: "s",
      OPTIONS: "o",
      SESSION_INDEX: "si",
    }),
      (t.FIELDS_V0_2 = {
        name: t.FIELDS.NAME,
        time: t.FIELDS.TIME,
        type: t.FIELDS.TYPE,
        category: t.FIELDS.CATEGORY,
        tags: t.FIELDS.OPTIONS,
        session_index: t.FIELDS.SESSION_INDEX,
      });
  },
  (e, t, i) => {
    const n = i(65).v3,
          r = {
            IGNORING: 0,
            BUCKETING: 1,
            FALLBACK: 2,
            HOLDBACK: 3,
            BEHAVIOR_EVENT: 2716770798,
          },
          a = Math.pow(2, 32),
          o = (e, t, i) => {
            return Math.floor(c(e, t) * i);
          },
          s = (e, t) => {
            const i = n(e, t);
            return (i >>> 16).toString(16) + (65535 & i).toString(16);
          },
          c = (e, t) => {
            const i = n(e, t);
            return (i >>> 0) / a;
          },
          u = e => {
            const t = String.fromCharCode;
            return e.replace(/[\S\s]/gi, e => {
              e = e.charCodeAt(0);
              let i = t(255 & e);
              return (
                e > 255 && (i = t((e >>> 8) & 255) + i),
                e > 65535 && (i = t(e >>> 16) + i),
                i
              );
            });
          };
    e.exports = {
      Seed: r,
      hashToHex: s,
      hashToInt: o,
      hashToReal: c,
      toByteString: u,
    };
  },
  (e, t, i) => {
    !(() => {
      function t(e, t) {
        for (var i, n = e.length, r = t ^ n, a = 0; n >= 4; )
          (i =
            (255 & e.charCodeAt(a)) |
            ((255 & e.charCodeAt(++a)) << 8) |
            ((255 & e.charCodeAt(++a)) << 16) |
            ((255 & e.charCodeAt(++a)) << 24)),
            (i =
              1540483477 * (65535 & i) +
              (((1540483477 * (i >>> 16)) & 65535) << 16)),
            (i ^= i >>> 24),
            (i =
              1540483477 * (65535 & i) +
              (((1540483477 * (i >>> 16)) & 65535) << 16)),
            (r =
              (1540483477 * (65535 & r) +
                (((1540483477 * (r >>> 16)) & 65535) << 16)) ^
              i),
            (n -= 4),
            ++a;
        switch (n) {
          case 3:
            r ^= (255 & e.charCodeAt(a + 2)) << 16;
          case 2:
            r ^= (255 & e.charCodeAt(a + 1)) << 8;
          case 1:
            (r ^= 255 & e.charCodeAt(a)),
              (r =
                1540483477 * (65535 & r) +
                (((1540483477 * (r >>> 16)) & 65535) << 16));
        }
        return (
          (r ^= r >>> 13),
          (r =
            1540483477 * (65535 & r) +
            (((1540483477 * (r >>> 16)) & 65535) << 16)),
          (r ^= r >>> 15),
          r >>> 0
        );
      }
      function i(e, t) {
        let i, n, r, a, o, s, c, u;
        for (
          i = 3 & e.length,
            n = e.length - i,
            r = t,
            o = 3432918353,
            s = 461845907,
            u = 0;
          u < n;

        )
          (c =
            (255 & e.charCodeAt(u)) |
            ((255 & e.charCodeAt(++u)) << 8) |
            ((255 & e.charCodeAt(++u)) << 16) |
            ((255 & e.charCodeAt(++u)) << 24)),
            ++u,
            (c =
              ((65535 & c) * o + ((((c >>> 16) * o) & 65535) << 16)) &
              4294967295),
            (c = (c << 15) | (c >>> 17)),
            (c =
              ((65535 & c) * s + ((((c >>> 16) * s) & 65535) << 16)) &
              4294967295),
            (r ^= c),
            (r = (r << 13) | (r >>> 19)),
            (a =
              (5 * (65535 & r) + (((5 * (r >>> 16)) & 65535) << 16)) &
              4294967295),
            (r = (65535 & a) + 27492 + ((((a >>> 16) + 58964) & 65535) << 16));
        switch (((c = 0), i)) {
          case 3:
            c ^= (255 & e.charCodeAt(u + 2)) << 16;
          case 2:
            c ^= (255 & e.charCodeAt(u + 1)) << 8;
          case 1:
            (c ^= 255 & e.charCodeAt(u)),
              (c =
                ((65535 & c) * o + ((((c >>> 16) * o) & 65535) << 16)) &
                4294967295),
              (c = (c << 15) | (c >>> 17)),
              (c =
                ((65535 & c) * s + ((((c >>> 16) * s) & 65535) << 16)) &
                4294967295),
              (r ^= c);
        }
        return (
          (r ^= e.length),
          (r ^= r >>> 16),
          (r =
            (2246822507 * (65535 & r) +
              (((2246822507 * (r >>> 16)) & 65535) << 16)) &
            4294967295),
          (r ^= r >>> 13),
          (r =
            (3266489909 * (65535 & r) +
              (((3266489909 * (r >>> 16)) & 65535) << 16)) &
            4294967295),
          (r ^= r >>> 16),
          r >>> 0
        );
      }
      const n = i;
      (n.v2 = t), (n.v3 = i);
      e.exports = n;
    })();
  },
  (e, t, i) => {
    const n = i(7);
    e.exports = {
      initialize() {
        (this.P = {
          baseMap: {},
          eventQueue: [],
          lastEvent: null,
          initialized: !1,
          cleared: !1,
        }),
          this.on(n.UPDATE_BEHAVIOR_STORE, this.wt);
      },
      getBaseMap() {
        return this.P.baseMap;
      },
      getEventQueue() {
        return this.P.eventQueue;
      },
      getLastEvent() {
        return this.P.lastEvent;
      },
      getCleared() {
        return this.P.cleared;
      },
      getInitialized() {
        return this.P.initialized;
      },
      wt(e) {
        this.P[e.key] = e.value;
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7);
    e.exports = {
      initialize() {
        (this.P = { randomId: null, visitorIdLocator: null }),
          this.on(r.SET_VISITOR_ID, this.k),
          this.on(r.DATA_LOADED, this.Ot);
      },
      getBucketingId() {
        return this.getRandomId();
      },
      getRandomId() {
        return this.P.randomId;
      },
      getVisitorIdLocator() {
        return this.P.visitorIdLocator;
      },
      k(e) {
        n.extend(this.P, e), this.emitChange();
      },
      Ot(e) {
        n.isEmpty(e.data.visitorIdLocator) ||
          ((this.P.visitorIdLocator = e.data.visitorIdLocator),
          this.emitChange());
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(26);
    e.exports = {
      initialize() {
        (this.P = { variationIdMap: {}, preferredLayerMap: {} }),
          this.on(r.UPDATE_VARIATION_ID_MAP, this.Ct),
          this.on(r.MERGE_VARIATION_ID_MAP, this.Nt),
          this.on(r.UPDATE_PREFERRED_LAYER_MAP, this.Lt),
          this.on(r.MERGE_PREFERRED_LAYER_MAP, this.Pt);
      },
      getVariationIdMap() {
        return n.cloneDeep(this.P.variationIdMap);
      },
      getVariationIdMapString() {
        return a.stringify(this.P.variationIdMap);
      },
      Ct(e) {
        const t = this.P.variationIdMap, i = t[e.layerId] || {};
        i[e.experimentId] !== e.variationId &&
          ((i[e.experimentId] = e.variationId),
          (this.P.variationIdMap[e.layerId] = i),
          this.emitChange());
      },
      Nt(e) {
        const t = this.getVariationIdMap(), i = e.variationIdMap;
        n.each(t || {}, (e, t) => {
          i[t] ? n.assign(i[t], e) : (i[t] = e);
        }),
          (this.P.variationIdMap = i),
          this.emitChange();
      },
      getPreferredLayerMap() {
        return n.cloneDeep(this.P.preferredLayerMap);
      },
      getPreferredLayerMapString() {
        return a.stringify(this.P.preferredLayerMap);
      },
      getPreferredLayerId(e) {
        return this.P.preferredLayerMap[e];
      },
      Lt(e) {
        this.P.preferredLayerMap[e.groupId] !== e.layerId &&
          ((this.P.preferredLayerMap[e.groupId] = e.layerId),
          this.emitChange());
      },
      Pt(e) {
        const t = this.getPreferredLayerMap(), i = e.preferredLayerMap;
        n.assign(i, t), (this.P.preferredLayerMap = i), this.emitChange();
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(23), a = i(7), o = 1e3;
    e.exports = {
      initialize() {
        (this.P = {
          frames: [],
          defaultFrame: null,
          messages: [],
          subscribers: [],
          canonicalOrigins: null,
          disabled: !1,
        }),
          this.on(a.XDOMAIN_SET_DEFAULT_FRAME, this.Vt),
          this.on(a.XDOMAIN_ADD_FRAME, this.kt),
          this.on(a.XDOMAIN_SET_MESSAGE, this.xt),
          this.on(a.XDOMAIN_ADD_SUBSCRIBER, this.Ft),
          this.on(a.XDOMAIN_SET_CANONICAL_ORIGINS, this.Mt),
          this.on(a.XDOMAIN_SET_DISABLED, this.Ut);
      },
      getMessages() {
        return n.cloneDeep(this.P.messages);
      },
      getOffset() {
        return 0 === this.P.messages.length ? 0 : this.P.messages[0].data.id;
      },
      getNextMessageId() {
        return this.P.messages.length + this.getOffset();
      },
      getMessageById(e) {
        return this.P.messages[e - this.getOffset()];
      },
      getSubscribers() {
        return this.P.subscribers;
      },
      getFrames() {
        return this.P.frames;
      },
      getNextFrameId() {
        return this.P.frames.length;
      },
      getDefaultFrame() {
        return this.P.defaultFrame;
      },
      getCanonicalOrigins() {
        return n.cloneDeep(this.P.canonicalOrigins);
      },
      isDisabled() {
        return this.P.disabled;
      },
      Vt(e) {
        this.P.defaultFrame = e;
      },
      kt(e) {
        this.P.frames.push(e);
      },
      xt(e) {
        for (
          this.P.messages[e.messageId - this.getOffset()] = e.message;
          this.P.messages.length > o;

        ) {
          const t = this.P.messages.shift();
          r.debug("XDomainStorage: Cleared old message: " + t.data.id);
        }
      },
      Ft(e) {
        this.P.subscribers.push(e.subscriber);
      },
      Mt(e) {
        this.P.canonicalOrigins = e.canonicalOrigins;
      },
      Ut(e) {
        this.P.disabled = e.disabled;
      },
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(22);
    e.exports = {
      initialize() {
        (this.P = {}), this.on(r.DATA_LOADED, this.k);
      },
      k(e) {
        n.isEmpty(e.data.groups) ||
          (n.each(
            e.data.groups,
            n.bind(function (e) {
              a.deepFreeze(e), (this.P[e.id] = e);
            }, this)
          ),
          this.emitChange());
      },
      getAll() {
        return a.safeReference(n.values(this.P));
      },
      getGroupsMap() {
        return a.safeReference(this.P);
      },
      get(e) {
        return a.safeReference(this.P[e]);
      },
    };
  },
  (e, t, i) => {
    const n = i(72);
    (t.initializeStore = n.initialize),
      (t.addEvent = n.addEvent),
      (t.getEvents = n.getEvents),
      (t.getEventCount = n.getEventCount);
  },
  (e, t, i) => {
    function n(e) {
      I.dispatch(v.SET_VISITOR_EVENTS, e);
    }
    function r(e) {
      I.dispatch(v.UPDATE_BEHAVIOR_STORE, { key: "baseMap", value: e });
    }
    function a(e) {
      I.dispatch(v.UPDATE_BEHAVIOR_STORE, { key: "eventQueue", value: e });
    }
    function o(e) {
      I.dispatch(v.UPDATE_BEHAVIOR_STORE, { key: "lastEvent", value: e });
    }
    function s(e) {
      I.dispatch(v.UPDATE_BEHAVIOR_STORE, { key: "cleared", value: e });
    }
    function c() {
      I.dispatch(v.UPDATE_BEHAVIOR_STORE, { key: "initialized", value: !0 });
    }
    function u() {
      return O.getEvents();
    }
    function l() {
      return C.getBaseMap();
    }
    function d() {
      return C.getEventQueue();
    }
    function f() {
      return C.getLastEvent();
    }
    function p() {
      return C.getCleared();
    }
    function g() {
      return C.getInitialized();
    }
    function h() {
      let e = u().concat(d()), t = !1;
      return e.length > L && ((e = e.slice(-L)), (t = !0)), n(e), a([]), t;
    }
    const _ = i(2);
    var v = i(7);
    const E = i(24);
    const m = i(73);
    var I = i(9);
    const y = i(23);
    const S = i(74);
    const T = t;
    const A = i(62).Event;
    const R = i(63);
    const D = i(62).EventBase;
    const b = i(89);
    const w = i(16);
    var O = w.get("stores/visitor_events");
    var C = w.get("stores/visitor_events_manager");

    const N = {
      EVENTBASE: "eb",
      HASH: "h",
      TIMEBASE: "tb",
      TIMESTAMPS: "ts",
      DELTA: "d",
      INDEX: "i",
    };

    var L = 1e3;
    (t.initialize = (e, t) => {
      if (!g()) {
        T.Gt(e, t);
        const i = u();
        i.length > 0 && o(i[i.length - 1]);
        const n = d();
        n.length > 0 && o(n[n.length - 1]), c();
      }
    }),
      (t.addEvent = e => {
        y.debug("Behavior store: adding event", e);
        const t = T.Bt(e);
        o(t), a(d().concat(t)), b.reindexIfNecessary(f(), u(), d()), T.zt(d());
      }),
      (t.getEvents = () => {
        return (
          d().length > 0 && (h() && b.sessionize(u()), T.jt(u()), T.zt(d())),
          u()
        );
      }),
      (t.getEventCount = () => {
        return d().length + u().length;
      }),
      (T.Gt = (e, t) => {
        T.Ht(e, t) && (T.jt(u()), T.zt(d())), b.sessionize(u());
      }),
      (T.Ht = (e, t) => {
      if (0 === e.length && 0 === t.length) return n([]), a([]), !1;
      let i = !1;
      const r = e[0] || t[0];
      return (
        N.EVENTBASE in r
          ? (n(T.Kt(e)), a(T.Kt(t)))
          : ((i = !0), n(T.Yt(e)), a(T.Yt(t))),
        d().length > 0 && (h(), (i = !0)),
        n(T._updateBaseMapAndMaybeDedupe(u())),
        T._migrateEventBasesAndUpdateStore() && (i = !0),
        i
      );
    }),
      (T.Yt = e => {
        for (var t = [], i = 0; i < e.length; i++) {
          const n = e[i], r = T.qt(n);
          t[i] = new A(r, n[R.FIELDS.TIME]);
        }
        return t;
      }),
      (T._migrateEventBasesAndUpdateStore = () => {
      let e = !1;
      const t = T.Wt();
      return (
        b.applyMigrations(t) &&
          ((e = !0),
          r({}),
          n(T._updateBaseMapAndMaybeDedupe(u())),
          a(T._updateBaseMapAndMaybeDedupe(d()))),
        e
      );
    }),
      (T.Xt = () => {
        return E.now();
      }),
      (T.Bt = e => {
      let t;
      const i = e.name;
      const n = e.type || "default";
      const r = e.category || m.OTHER;
      const a = e.tags || {};
      e.revenue && (t = e.revenue);
      let o = new D(i, n, r, a, t);
      o = T.Qt(o);
      const s = T.Xt(), c = new A(o, s, -1);
      return b.updateSessionId(f(), c), b.updateSessionIndex(f(), c), c;
    }),
      (T._updateBaseMapAndMaybeDedupe = e => {
        for (let t = 0; t < e.length; t++)
          e[t].eventBase = T.Qt(e[t].eventBase);
        return e;
      }),
      (T.jt = e => {
        const t = T.$t(e);
        S.persistBehaviorEvents(t);
      }),
      (T.zt = e => {
        const t = T.$t(e);
        S.persistBehaviorEventQueue(t);
      }),
      (T.Jt = () => {
        p() || (n([]), a([]), T.jt(u()), T.zt(d()), r({}), o(null), s(!0));
      }),
      (T.Qt = e => {
        const t = e.hash(), i = l(), n = i[t];
        if (_.isUndefined(n)) return (i[t] = [e]), r(i), e;
        for (let a = 0; a < n.length; a++) if (e.equals(n[a])) return n[a];
        return n.push(e), r(i), e;
      }),
      (T.Wt = () => {
      let e = [];
      const t = l();
      for (const i in t) t.hasOwnProperty(i) && (e = e.concat(t[i]));
      return e;
    }),
      (T.$t = e => {
        for (
          var t = e => {
              const t = {};
              (t[R.FIELDS.NAME] = e.getValueOrDefault([R.FIELDS.NAME])),
                (t[R.FIELDS.TYPE] = e.getValueOrDefault([R.FIELDS.TYPE]));
              const i = e.getValueOrDefault([R.FIELDS.CATEGORY]);
              _.isUndefined(i) || (t[R.FIELDS.CATEGORY] = i);
              const n = e.getValueOrDefault([R.FIELDS.REVENUE]);
              _.isUndefined(n) || (t[R.FIELDS.REVENUE] = n);
              const r = e.getValueOrDefault([R.FIELDS.OPTIONS]);
              return _.isUndefined(r) || (t[R.FIELDS.OPTIONS] = r), t;
            },
            i = N,
            n = [],
            r = "_idx_",
            a = 0;
          a < e.length;
          a++
        ) {
          let o;
          let s;
          const c = e[a];
          const u = c.eventBase;
          if (u.hasOwnProperty(r)) {
            o = n[u[r]];
            const l = c[R.FIELDS.TIME] - (o[i.TIMEBASE] || 0);
            (s = {}),
              (s[i.DELTA] = l),
              (s[i.INDEX] = a),
              o[i.TIMESTAMPS].push(s);
          } else
            (o = {}),
              (o[i.EVENTBASE] = t(c)),
              (o[i.HASH] = u.hash()),
              (o[i.TIMEBASE] = c[R.FIELDS.TIME]),
              (s = {}),
              (s[i.DELTA] = 0),
              (s[i.INDEX] = a),
              (o[i.TIMESTAMPS] = [s]),
              n.push(o),
              (u[r] = n.length - 1);
        }
        for (a = 0; a < e.length; a++) delete e[a].eventBase[r];
        return n;
      }),
      (T.qt = (e, t) => {
        const i = new D(
          e[R.FIELDS.NAME],
          e[R.FIELDS.TYPE],
          e[R.FIELDS.CATEGORY],
          e[R.FIELDS.OPTIONS],
          e[R.FIELDS.REVENUE]
        );
        return _.isUndefined(t) || i.setHash(t), i;
      }),
      (T.Kt = e => {
        for (var t = N, i = [], n = 0; n < e.length; n++)
          for (
            let r = e[n], a = T.qt(r[t.EVENTBASE], r[t.HASH]), o = r[t.TIMEBASE], s = r[t.TIMESTAMPS], c = 0;
            c < s.length;
            c++
          ) {
            const u = s[c], l = new A(a, o + u[t.DELTA]), d = u[t.INDEX];
            i[d] = l;
          }
        return i;
      }),
      (t.deserialize = e => {
        return T.Kt(e);
      }),
      (t.mergeAllEvents = e => {
        const t = [].concat.apply([], e);
        return t.sort(b.sessionSortPredicate), b.sessionize(t), t;
      });
  },
  (e, t) => {
    e.exports = { OTHER: "other" };
  },
  (e, t, i) => {
    function n() {
      return u(z.LAYER_MAP) || {};
    }
    function r(e, t) {
      w.dispatch(O.UPDATE_PREFERRED_LAYER_MAP, { groupId: e, layerId: t });
    }
    function a() {
      const e = $.getPreferredLayerMapString();
      p(z.LAYER_MAP, e, !0);
    }
    function o(e) {
      w.dispatch(O.SET_TRACKER_PERSISTABLE_STATE, e);
    }
    function s(e, t) {
      function i(e, i) {
        let n;
        t.attributionType && (n = P.now()),
          w.dispatch(O.SET_VISITOR_ATTRIBUTES, {
            attributes: [{ key: e, value: i, metadata: { lastModified: n } }],
          });
      }
      if (t.getter) {
        let n = t.provides;
        if (
          (b.isArray(n) || (n = [n]),
          !ee || !b.includes(["queryParams", "url"], n[0]))
        ) {
          const r = t.isSticky && !b.isUndefined(F.getFieldValue(e, n));
          if (!r) {
            let a;
            try {
              let o = V.evaluate(t.getter);
              b.isFunction(o) &&
                (o = o(
                  () => {
                    return F.getFieldValue(e, n);
                  },
                  e => {
                    i(n, e);
                  }
                )),
                b.isUndefined(o) ||
                  (t.isAsync
                    ? ((a = o.then(
                        e => {
                          i(n, e);
                        },
                        e => {
                          U.warn(
                            'Failed to evaluate provider for "' +
                              t.provides +
                              '"; error was:',
                            e
                          );
                        }
                      )),
                      w.dispatch(O.SET_VISITOR_ATTRIBUTE_PENDING, {
                        key: n,
                        pending: a,
                      }))
                    : i(n, o));
            } catch (e) {
              U.warn(
                'Failed to evaluate getter for provider for "' +
                  t.provides +
                  '"; error was: ' +
                  e.message
              );
            }
            return a;
          }
        }
      }
    }
    function c() {
      m(u(z.EVENTS) || [], u(z.EVENT_QUEUE) || []);
      const e = f(z.LAYER_STATES);
      b.forEach(e, e => {
        e.item = b.map(e.item, d);
      }),
        I(l(e)),
        y(u(z.SESSION_STATE) || {}),
        A(u(z.VISITOR_PROFILE) || {});
      const i = u(z.TRACKER_OPTIMIZELY);
      i && o(i), t.loadForeignData(), t.removeLegacySessionStateCookies();
    }
    function u(e) {
      const t = g(e);
      let i = M.getItem(t);
      return b.isString(i) && (i = R(i)), i;
    }
    function l(e) {
      const t = [];
      return b.each(e, e => {
        b.each(e.item, i => {
          (i.namespace = e.namespace), t.push(i);
        });
      }),
      t
    ;
    }
    function d(e) {
      let t;
      return (t = e.layerId
        ? e
        : {
            layerId: e.i,
            pageId: e.p,
            decisionTimestamp: e.t,
            decisionTicket: { audienceIds: e.a || [] },
            decision: {
              layerId: e.i,
              experimentId: e.x || null,
              variationId: e.v || null,
              isLayerHoldback: e.h || !1,
            },
          });
    }
    function f(e) {
      const t = Q.getBucketingId(), i = [], n = t + "\\$\\$([^$]+?)\\$\\$" + e, r = new RegExp(n);
      return b.each(M.keys(), e => {
        const n = e.match(r);
        if (n) {
          const a = { namespace: n[1], userId: t, item: R(M.getItem(e)) };
          i.push(a);
        }
      }),
      i;
    }
    function p(e, t, i) {
      try {
        const n = g(e);
        i || (t = x.stringify(t));
        try {
          M.setItem(n, t);
        } catch (e) {
          throw (
            (U.warn("Visitor / Unable to set localStorage key, error was:", e),
            new Error("Unable to set localStorage"))
          );
        }
        D.setItem(n, t);
      } catch (e) {
        U.warn("Unable to persist visitor data:", e.message);
      }
    }
    function g(e) {
      const i = Q.getBucketingId();
      if (!i) throw new Error("Visitor bucketingId not set");
      const n = t.getNamespace();
      if (!n) throw new Error("Namespace is not set");
      return [i, n, e].join("$$");
    }
    function h(e, i) {
      if (!Q.getBucketingId())
        throw new Error(
          "Cannot update local store because bucketingId not set"
        );
      if (v(e)) {
        const n = t.getStorageKeyFromKey(e);
        if (b.includes(z, n)) {
          const r = g(n);
          if (!(e.indexOf(r) <= 0) && (i = R(i)))
            if (n === z.EVENT_QUEUE)
              w.dispatch(O.SET_FOREIGN_VISITOR_EVENT_QUEUE, {
                key: e,
                value: N.deserialize(i),
              });
            else if (n === z.EVENTS)
              w.dispatch(O.SET_FOREIGN_VISITOR_EVENTS, {
                key: e,
                value: N.deserialize(i),
              });
            else if (n === z.LAYER_STATES)
              w.dispatch(O.LOAD_PERSISTED_LAYER_STATES, {
                layerStates: b.map(i, d),
                merge: !0,
              });
            else if (n === z.VARIATION_MAP)
              w.dispatch(O.MERGE_VARIATION_ID_MAP, { variationIdMap: i });
            else if (n === z.VISITOR_PROFILE) {
              const a = ["custom"], o = i;
              b.each(a, e => {
                const t = q.getPlugin(k.PluginTypes.visitorProfileProviders, e);
                if (t) {
                  if (o.profile && o.metadata) {
                    const i = _(o, e, t.attributionType);
                    if (!b.isEmpty(i)) {
                      const n = [];
                      b.forOwn(i.data, (t, r) => {
                        const a = i.metadata[r], o = { key: [e, r], value: t, metadata: a };
                        n.push(o);
                      }),
                        w.dispatch(O.SET_VISITOR_ATTRIBUTES, { attributes: n });
                    }
                  }
                } else U.debug("Attribute type", e, "not used by any audiences");
              });
            }
        }
      }
    }
    function _(e, t, i) {
      const n = J.getAttribute(t), r = J.getAttributeMetadata(t), a = e.profile[t], o = e.metadata[t];
      if (b.isEmpty(n)) return { data: a, metadata: o };
      const s = {};
      return b.forOwn(a, (e, t) => {
        let n;
        r && r[t] && (n = r[t].lastModified);
        let a;
        o && o[t] && (a = o[t].lastModified),
          ((i === k.AttributionTypes.FIRST_TOUCH && n >= a) ||
            (i === k.AttributionTypes.LAST_TOUCH && a >= n) ||
            (b.isUndefined(n) && a)) &&
            ((s.data = s.data || {}),
            (s.data[t] = e),
            a &&
              ((s.metadata = s.metadata || {}),
              (s.metadata[t] = s.metadata[t] || {}),
              (s.metadata[t].lastModified = a)));
      }),
      s;
    }
    function v(e) {
      const t = e.split("$$")[0];
      return t.indexOf("://") > 0;
    }
    function E() {
      let e = J.getVisitorProfile();
      const t = J.getVisitorProfileMetadata();
      const i = q.getAllPlugins(k.PluginTypes.visitorProfileProviders);
      if (i) {
        const n = b.reduce(
          i,
          (e, t) => {
            return t.provides && (e[t.provides] = t), e;
          },
          {}
        );
        e = b.omitBy(e, (e, t) => {
          const i = n[t];
          return i && i.isTransient;
        });
      }
      return { profile: e, metadata: t };
    }
    function m(e, t) {
      C.initializeStore(e, t);
    }
    function I(e) {
      w.dispatch(O.LOAD_PERSISTED_LAYER_STATES, {
        layerStates: b.filter(e, e => {
          return !!e.decision;
        }),
      });
    }
    function y(e) {
      (e = b.extend({ lastSessionTimestamp: 0, sessionId: null }, e)),
        w.dispatch(O.LOAD_SESSION_STATE, e);
    }
    function S(e) {
      let t;
      const i = e.name;
      switch (e.type) {
        case k.VisitorIdLocatorType.COOKIE:
          t = L.get(i);
          break;
        case k.VisitorIdLocatorType.JS_VARIABLE:
          t = j.getGlobalByPath(i);
          break;
        case k.VisitorIdLocatorType.LOCALSTORAGE:
          try {
            const n = j.getGlobal("localStorage");
            t = n.getItem(i);
          } catch (e) {
            throw new Error("Unable to read localStorage: " + e.toString());
          }
          break;
        case k.VisitorIdLocatorType.QUERY:
          t = B.getQueryParamValue(i);
      }
      try {
        if (!t)
          throw (
            (U.error(
              "Visitor / Customer provided visitor id cannot be found. Type:",
              e.type,
              " Name:",
              i
            ),
            new Error("Failure to obtain visitor id from " + e.type))
          );
        if (!b.isString(t) && !b.isNumber(t))
          throw (
            (U.error(
              "Visitor / Customer provided visitor id is not a string or number. Type:",
              e.type,
              " Name:",
              i,
              " Id Type:",
              typeof t
            ),
            new Error("Customer provided visitor id is not a string or number"))
          );
      } catch (e) {
        throw (
          (W.getSampleRum() &&
            w.dispatch(O.RECORD_VISITOR_ID_ERROR, { isError: !0 }),
          e)
        );
      }
      return (
        W.getSampleRum() &&
          (w.dispatch(O.RECORD_VISITOR_ID_ERROR, { isError: !1 }),
          w.dispatch(O.RECORD_VISITOR_ID_LOCATOR_USAGE, {
            visitorIdLocatorType: e.type,
            entityId: t,
          })),
        String(t)
      );
    }
    function T() {
      return "oeu" + P.now() + "r" + Math.random();
    }
    function A(e) {
      let t;
      let i;
      const n = q.getAllPlugins(k.PluginTypes.visitorProfileProviders);

      const r = b.filter(n, e => {
        return b.isFunction(e.restorer);
      });

      e.profile && e.metadata
        ? ((t = e.profile), (i = e.metadata))
        : ((t = e), (i = {})),
        (t = b.reduce(
          t,
          (e, t, i) => {
            let n = t;
            const a = b.find(r, { provides: i });
            return a && (n = a.restorer(t)), (e[i] = n), e;
          },
          {}
        )),
        w.dispatch(O.LOAD_EXISTING_VISITOR_PROFILE, {
          profile: t,
          metadata: i,
        });
    }
    function R(e) {
      try {
        return x.parse(e);
      } catch (t) {
        return U.debug("Failed to parse: ", e, t), null;
      }
    }
    var D;
    var b = i(2);
    var w = i(9);
    var O = i(7);
    var C = i(71);
    var N = i(72);
    var L = i(75);
    var P = i(24);
    var V = i(16);
    var k = i(25);
    var x = i(26);
    var F = i(19);
    var M = i(81).LocalStorage;
    var U = i(23);
    const G = i(12).Promise;
    var B = i(84);
    var z = i(25).VisitorStorageKeys;
    var j = i(40);
    D = i(85);
    const H = V.get("stores/cookie_options");
    const K = V.get("stores/global");
    const Y = V.get("stores/layer");
    var q = V.get("stores/plugins");
    var W = V.get("stores/rum");
    const X = V.get("stores/session");
    var Q = V.get("stores/visitor_id");
    var $ = V.get("stores/visitor_bucketing");
    var J = V.get("stores/visitor");
    const Z = V.get("stores/provider_status");
    var ee = !1;
    (t.getOrGenerateId = () => {
      return { randomId: t.getCurrentId() || T() };
    }),
      (t.getCurrentId = () => {
        const e = Q.getVisitorIdLocator();
        return e
          ? S(e)
          : J.getVisitorIdFromAPI() || L.get(k.COOKIES.VISITOR_ID);
      }),
      (t.hasSomeData = () => {
        return M.keys().length > 0;
      }),
      (t.setId = e => {
        const i = Q.getBucketingId();
        w.dispatch(O.SET_VISITOR_ID, e),
          Q.getBucketingId() !== i &&
            (c(), t.deleteOldLocalData(), D.deleteData(e));
        try {
          Q.getVisitorIdLocator() || t.maybePersistVisitorId(e);
        } catch (e) {
          if (
            (U.error(
              "Visitor / Unable to persist visitorId, disabling tracking"
            ),
            w.dispatch(O.LOAD_DIRECTIVE, { trackingDisabled: !0 }),
            e instanceof L.MismatchError)
          )
            throw (
              (U.error("Visitor / Cookie not set to correct value:", e),
              new Error("Cookie mismatch error while persisting visitorId"))
            );
          throw e;
        }
        t.refreshSession();
      }),
      (t.getVariationIdMap = () => {
        return u(z.VARIATION_MAP) || {};
      }),
      (t.updateVariationIdMap = (e, t, i) => {
        w.dispatch(O.UPDATE_VARIATION_ID_MAP, {
          layerId: e,
          experimentId: t,
          variationId: i,
        });
      }),
      (t.persistVariationIdMap = () => {
        const e = $.getVariationIdMapString();
        p(z.VARIATION_MAP, e, !0);
      }),
      (t.getPreferredLayerMap = n),
      (t.updatePreferredLayerMap = r),
      (t.persistTrackerOptimizelyData = e => {
        p(z.TRACKER_OPTIMIZELY, e);
      }),
      (t.refreshSession = () => {
        w.dispatch(O.REFRESH_SESSION);
      }),
      (t.populateEagerVisitorData = (e, i) => {
        const n = b.filter(e, e => {
                  return !e.isLazy;
                }),
              r = t.populateVisitorData(n, i);
        return r;
      }),
      (t.populateLazyVisitorData = (e, i) => {
        const n = b.filter(e, e => {
          return e.isLazy;
        });
        return t.populateVisitorData(n, i);
      }),
      (t.populateVisitorData = (e, t) => {
        t = t || {};
        const i = b.partial(s, t), n = b(e).filter({ isAsync: !0 }).map(i).filter().value();
        return b.forEach(
          b.filter(e, e => {
            return !e.isAsync;
          }),
          i
        ),
        n.length > 0 ? G.all(n) : G.resolve()
      ;
      }),
      (t.persistBehaviorEvents = e => {
        p(z.EVENTS, e);
      }),
      (t.persistBehaviorEventQueue = e => {
        p(z.EVENT_QUEUE, e);
      }),
      (t.getPersistedBehaviorEventCount = () => {
        const e = u(z.EVENTS) || [], t = u(z.EVENT_QUEUE) || [];
        return N.deserialize(e).length + N.deserialize(t).length;
      }),
      (t.persistLayerStates = () => {
        let e = Y.getLayerStates(t.getNamespace());
        (e = b.map(e, e => {
          return b.omit(e, "namespace");
        })),
          p(z.LAYER_STATES, e);
      }),
      (t.persistSessionState = () => {
        p(z.SESSION_STATE, X.getState());
      }),
      (t.persistVisitorProfile = () => {
        p(z.VISITOR_PROFILE, E());
      }),
      (t.persistVisitorBucketingStore = () => {
        t.persistVariationIdMap(), a();
      }),
      (t.getUserIdFromKey = (e, i) => {
        let n;
        return (
          b.includes(e, i) &&
            b.includes(e, "_") &&
            b.includes(e, "$$") &&
            b.includes(e.slice(e.indexOf("$$")), t.getNamespace()) &&
            (n = e.slice(e.indexOf("_") + 1, e.indexOf("$$"))),
          n
        );
      }),
      (t.maybePersistVisitorId = e => {
        e.randomId &&
          (H.getAutoRefresh() || t.getCurrentId() !== e.randomId
            ? (L.set(k.COOKIES.VISITOR_ID, e.randomId),
              U.log("Persisting visitorId:", e.randomId))
            : U.log(
                "Not persisting visitorId: value is not changed and also auto-refresh is disabled"
              ));
      }),
      (t.getAttribute = e => {
        return J.getAttribute(e);
      }),
      (t.getPendingAttributeValue = e => {
        return Z.getPendingAttributeValue(e);
      }),
      (t.isForeignKey = v),
      (t.checkKeyForVisitorId = e => {
        const i = Q.getBucketingId() || t.getCurrentId(), n = t.getIdFromKey(e);
        return !n || n === i;
      }),
      (t.getIdFromKey = e => {
        const i = e.split("$$")[0], n = t.getStorageKeyFromKey(e), r = b.includes(k.StorageKeys, n);
        if (r) return null;
        const a = i.indexOf("_"), o = a === -1;
        return o ? i : i.substring(a + 1);
      }),
      (t.getStorageKeyFromKey = e => {
      let t;
      const i = e.split("$$").pop();
      const n = i.indexOf("://") > -1;
      if (n) {
        const r = i.indexOf("_");
        t = i.substring(r + 1);
      } else t = i;
      return b.includes(b.values(k.AllStorageKeys), t) ? t : null;
    }),
      (t.deleteOldLocalData = () => {
        const e = M.keys();
        b.each(e, e => {
          t.isForeignKey(e) || t.checkKeyForVisitorId(e) || M.removeItem(e);
        });
      }),
      (t.deleteOldForeignData = () => {
        const e = M.keys();
        b.each(e, e => {
          t.isForeignKey(e) && M.removeItem(e);
        });
      }),
      (t.loadForeignData = () => {
        b.each(M.keys(), e => {
          const t = M.getItem(e);
          t && h(e, t);
        });
      }),
      (t.getNamespace = () => {
        return K.getNamespace();
      }),
      (t.serializeFieldKey = e => {
        return b.isArray(e) ? e.join("$$") : e;
      }),
      (t.removeLegacySessionStateCookies = () => {
        const e = L.getAll();
        b.forEach(b.keys(e), e => {
          0 === e.indexOf(k.COOKIES.SESSION_STATE + "$$") && L.remove(e);
        });
      });
  },
  (e, t, i) => {
    function n(e, i) {
      i !== !1 && (i = !0);
      for (
        var n, a, o = e.hostname.split("."), s = [], c = null, l = o.length - 1;
        l >= 0;
        l--
      )
        if ((s.unshift(o[l]), (n = s.join(".")), !r.includes(h, n))) {
          a = { domain: i ? "." + n : n };
          try {
            t.set(_, Math.random().toString(), a),
              t.remove(_, a),
              (c = a.domain);
            break;
          } catch (e) {}
        }
      return d.dispatch(u.SET_COOKIE_DOMAIN, c), c;
    }
    var r = i(2);
    const a = i(76).create;
    const o = i(24);
    const s = i(80);
    const c = i(40);
    var u = i(7);
    const l = i(16);
    var d = i(9);
    const f = l.get("stores/cookie_options");
    const p = (t.SetError = a("CookieSetError"));
    const g = (t.MismatchError = a("CookieMismatchError"));
    (t.getAll = e => {
      r.isUndefined(e) && (e = !0);
      let i, n, a, o, c;
      i = s.getCookieString().split(/\s*;\s*/);
      const u = {};
      for (a = 0; a < i.length; a++)
        if (
          ((n = i[a]),
          (o = n.indexOf("=")),
          o > 0 &&
            ((c = t.safeDecodeURIComponent(n.substring(0, o))),
            void 0 === u[c]))
        ) {
          let l = n.substring(o + 1);
          e && (l = t.safeDecodeURIComponent(l)), (u[c] = l);
        }
      return u;
    }),
      (t.safeDecodeURIComponent = e => {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      }),
      (t.get = (e, i) => {
        const n = t.getAll(i);
        return n[e];
      }),
      (t.set = (e, i, a, u) => {
        (a = r.extend({ encodeValue: !0 }, a)), u !== !1 && (u = !0);
        let l = [];
        if (r.isUndefined(a.domain)) {
          let d = f.getCurrentDomain();
          d || (d = n(c.getLocation(), !0)), (a.domain = d);
        }
        if (
          (a.domain && l.push("domain=" + a.domain),
          r.isUndefined(a.path) && (a.path = "/"),
          a.path && l.push("path=" + a.path),
          r.isUndefined(a.expires))
        ) {
          const h = r.isUndefined(a.maxAge)
            ? f.getDefaultAgeInSeconds()
            : a.maxAge;
          a.expires = new Date(o.now() + 1e3 * h);
        }
        if (
          (r.isUndefined(a.expires) ||
            l.push("expires=" + a.expires.toUTCString()),
          a.secure && l.push("secure"),
          (l = l.join(";")),
          s.setCookie(
            e + "=" + (a.encodeValue ? encodeURIComponent(i) : i) + ";" + l
          ),
          u)
        ) {
          const _ = a.encodeValue, v = t.get(e, _);
          if (v !== i) {
            if (!v) throw new p('Failed to set cookie "' + e + '"');
            throw new g(
              'Expected "' + i + '" for "' + e + '", got "' + v + '"'
            );
          }
        }
      }),
      (t.remove = (e, i) => {
        for (const n = c.getLocation().hostname.split("."); n.length > 0; )
          t.set(
            e,
            null,
            r.extend({}, i, {
              domain: "." + n.join("."),
              expires: new Date(0),
            }),
            !1
          ),
            n.shift();
      });
    var h = ["optimizely.test"],
      _ = "optimizelyDomainTestCookie";
  },
  (e, t, i) => {
    const n = i(77), r = n("InternalError");
    (t.BaseError = r),
      (t.create = e => {
        return n(e, r);
      });
  },
  (e, t, i) => {
    function n(e, t) {
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        try {
          throw new Error(t);
        } catch (t) {
          (t.name = e), (this.stack = t.stack);
        }
        r && this.stack && (this.stack = a(this.stack, e, t)),
          (this.message = t || ""),
          (this.name = e);
      }
      return (
        (i.prototype = new (t || Error)()),
        (i.prototype.constructor = i),
        (i.prototype.inspect = function () {
          return this.message
            ? "[" + e + ": " + this.message + "]"
            : "[" + e + "]";
        }),
        (i.prototype.name = e),
        i
      );
    }
    var r = i(78)(),
      a = i(79);
    e.exports = n;
  },
  (e, t) => {
    "use strict";
    e.exports = () => {
      const e = new Error("yep");
      return !!e.stack && "Error: yep\n" === e.stack.substr(0, 11);
    };
  },
  (e, t) => {
    "use strict";
    e.exports = (e, t, i) => {
      let n = t;
      return i && (n += ": " + i), (e = n + e.slice(e.indexOf("\n")));
    };
  },
  (e, t, i) => {
    function n() {
      return "loading" === t.getReadyState();
    }
    const r = i(16), a = r.get("stores/global");
    (t.getDocumentElement = () => {
      return document.documentElement;
    }),
      (t.getCookieString = () => {
        return document.cookie || "";
      }),
      (t.setCookie = e => {
        document.cookie = e;
      }),
      (t.querySelector = e => {
        return document.querySelector(e);
      }),
      (t.querySelectorAll = e => {
        return document.querySelectorAll(e);
      }),
      (t.parseUri = e => {
        const i = t.createElement("a");
        return (i.href = e), i;
      }),
      (t.childrenOf = e => {
        return Array.prototype.slice.call(e.querySelectorAll("*"));
      }),
      (t.createElement = e => {
        return document.createElement(e);
      }),
      (t.isReady = () => {
        return (
          a.domContentLoadedHasFired() ||
          "interactive" === document.readyState ||
          "complete" === document.readyState
        );
      }),
      (t.isLoaded = () => {
        return "complete" === document.readyState;
      }),
      (t.addReadyHandler = e => {
        return document.addEventListener("DOMContentLoaded", e),
        () => {
          t.removeReadyHandler(e);
        }
      ;
      }),
      (t.removeReadyHandler = e => {
        return () => {
          document.removeEventListener("DOMContentLoaded", e);
        };
      }),
      (t.getReferrer = () => {
        return document.referrer;
      }),
      (t.getReadyState = () => {
        return document.readyState;
      }),
      (t.write = e => {
        if (!n())
          throw new Error(
            "Aborting attempt to write to already-loaded document"
          );
        document.write(e);
      }),
      (t.appendToHead = e => {
        return t.appendTo(document.head, e);
      }),
      (t.appendTo = (e, t) => {
        e.appendChild(t);
      }),
      (t.addEventListener = (e, t, i) => {
        return document.addEventListener(e, t, i),
        () => {
          document.removeEventListener(e, t, i);
        }
      ;
      }),
      (t.getCurrentScript = () => {
        if (document.currentScript) return document.currentScript;
      }),
      (t.parentElement = e => {
        for (var t = e.parentNode; t.nodeType !== Node.ELEMENT_NODE; )
          t = t.parentNode;
        return t;
      });
  },
  (e, t, i) => {
    let n;
    let r;
    const a = "optimizely_data";
    const o = i(76).create;
    const s = i(82);
    const c = i(40);
    const u = (t.Error = o("StorageError"));
    try {
      r = c.getGlobal("localStorage");
    } catch (e) {
      throw new u("Unable to read localStorage: " + e.toString());
    }
    if (!r) throw new u("localStorage is undefined");
    (n = s.create(r, a)),
      (t.LocalStorage = n),
      (t.isOptimizelyKey = e => {
        return e.slice(0, a.length) === a;
      });
  },
  (e, t, i) => {
    function n(e, t) {
      (this.Zt = e), (this.ei = t);
    }
    const r = i(2), a = i(23), o = "$$";
    (n.prototype.ti = function (e) {
      return [this.ei, e].join(o);
    }),
      (n.prototype.ii = function (e) {
        return e.replace(this.ei + o, "");
      }),
      (n.prototype.setItem = function (e, t) {
        try {
          this.Zt.setItem(this.ti(e), t);
        } catch (t) {
          a.warn("Failed to save", e, "to localStorage:", t);
        }
      }),
      (n.prototype.removeItem = function (e) {
        this.Zt.removeItem(this.ti(e));
      }),
      (n.prototype.getItem = function (e) {
        let t = null;
        try {
          t = this.Zt.getItem(this.ti(e));
        } catch (e) {}
        return t;
      }),
      (n.prototype.keys = function () {
        const e = r.keys(this.Zt);
        return r.map(
          r.filter(
            e,
            r.bind(function (e) {
              return r.includes(e, this.ei);
            }, this)
          ),
          r.bind(this.ii, this)
        );
      }),
      (n.prototype.allKeys = function () {
        return r.keys(this.Zt);
      }),
      (n.prototype.allValues = function () {
        return r.values(this.Zt);
      }),
      (e.exports = {
        create(e, t) {
          return new n(e, t);
        },
        mockStorage: {
          keys() {},
          getItem(e) {},
          removeItem(e) {},
          setItem(e, t) {},
        },
      });
  },
  (e, t, i) => {
    function n() {
      return c.getGlobal("performance");
    }
    const r = i(7);
    const a = i(76).create;
    const o = i(24);
    const s = i(9);
    var c = i(40);
    const u = i(16);
    const l = u.get("stores/rum");
    const d = "optimizely:";
    const f = (t.Error = a("PerformanceError"));
    (t.time = e => {
      if (l.getSampleRum()) {
        const t = n();
        if (t && t.mark) {
          const i = d + e;
          t.clearMarks(i + "Begin"), t.mark(i + "Begin");
        }
      }
    }),
      (t.timeEnd = e => {
        if (l.getSampleRum()) {
          const t = n();
          if (t && t.mark) {
            const i = d + e, a = t.getEntriesByName(i + "Begin");
            if (0 === a.length)
              throw new f("Called timeEnd without matching time: " + e);
            t.clearMarks(i + "End"), t.mark(i + "End");
            const o = t.getEntriesByName(i + "End"), c = e + "Time", u = o[0].startTime - a[0].startTime;
            s.dispatch(r.SET_PERFORMANCE_MARKS_DATA, {
              name: c,
              data: {
                startTime: Math.round(1e3 * a[0].startTime) / 1e3,
                duration: Math.round(1e3 * u) / 1e3,
              },
            });
          }
        }
      }),
      (t.now = () => {
        const e = n();
        return e ? e.now() : o.now();
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(40);
    (t.getQueryParams = () => {
      let e = r.getLocationSearch() || "";
      if ((0 === e.indexOf("?") && (e = e.substring(1)), 0 === e.length))
        return [];
      for (var t = e.split("&"), i = [], n = 0; n < t.length; n++) {
        let a = "";
        let o = "";
        const s = t[n].split("=");
        s.length > 0 && (a = s[0]), s.length > 1 && (o = s[1]), i.push([a, o]);
      }
      return i;
    }),
      (t.getQueryParamValue = e => {
        for (let i = t.getQueryParams(), n = 0; n < i.length; n++)
          if (i[n][0] === e) return i[n][1];
      }),
      (t.queryStringFromMap = e => {
        return n
          .map(e, (e, t) => {
            return t + "=" + e;
          })
          .join("&");
      });
  },
  (e, t, i) => {
    function n(e) {
      let t;
      if (!o.find(I.getFrames(), { origin: e.origin }))
        return void m.debug(
          "XDomain",
          "No frame found for origin: " + e.origin
        );
      try {
        t = h.parse(e.data);
      } catch (t) {
        return void m.debug("XDomain", "Ignoring malformed message event:", e);
      }
      if ("ERROR" === t.type)
        l.dispatch(c.XDOMAIN_SET_DISABLED, { disabled: !0 }),
          d.emitInternalError(new y("Xdomain Error: " + t.response));
      else if ("SYNC" === t.type)
        o.each(I.getSubscribers(), e => {
          e(t.response.key, t.response.value);
        });
      else {
        const i = I.getMessageById(t.id);
        if (!i) {
          if (
            (m.warn("XDomain", "No stored message found for ID", t.id),
            o.isNumber(t.id))
          ) {
            const n = I.getNextMessageId();
            t.id >= n
              ? d.emitInternalError(
                  new y(
                    "Message ID is greater than expected maximum ID (" +
                      t.id +
                      ">" +
                      n +
                      ")"
                  )
                )
              : t.id < 0
              ? d.emitInternalError(new y("Message ID is < 0: " + t.id))
              : d.emitInternalError(
                  new y("No stored message found for message ID: " + t.id)
                );
          } else
            d.emitInternalError(new y("Message ID is not a number: " + t.id));
          return;
        }
        if (!i.resolver)
          return void m.warn(
            "XDomain",
            "Message already resolved, ignoring:",
            t.id
          );
        i.resolver(t.response),
          l.dispatch(c.XDOMAIN_SET_MESSAGE, {
            messageId: t.id,
            message: {
              data: { id: t.id, type: i.data.type, key: i.data.key },
              startTime: i.startTime,
              endTime: p.now(),
            },
          });
      }
    }
    function r(e, t) {
      return t || (t = I.getDefaultFrame()),
      new s(i => {
        const n = {
          data: o.extend({}, e, { id: I.getNextMessageId() }),
          resolver: i,
        };
        t
          ? I.isDisabled() || a(n, t)
          : l.dispatch(c.XDOMAIN_SET_MESSAGE, {
              messageId: n.data.id,
              message: n,
            });
      });
    }
    function a(e, t) {
      const i = e.data;
      l.dispatch(c.XDOMAIN_SET_MESSAGE, {
        messageId: e.data.id,
        message: o.extend({}, e, { startTime: p.now() }),
      }),
        t.target.postMessage(h.stringify(i), t.origin);
    }
    var o = i(2);
    var s = i(12).Promise;
    var c = i(7);
    const u = i(16);
    var l = i(9);
    var d = i(86);
    const f = i(76).create;
    var p = i(24);
    const g = i(80);
    var h = i(26);
    const _ = i(88);
    const v = i(74);
    const E = i(40);
    var m = i(23);
    var I = u.get("stores/xdomain");
    var y = (t.Error = f("XDomainStorageError"));
    (t.setItem = (e, t, i) => {
      return r({ type: "PUT", key: e, value: t }, i);
    }),
      (t.getItem = (e, t) => {
        return r({ type: "GET", key: e }, t);
      }),
      (t.fetchAll = e => {
        return r({ type: "GETALL" }, e);
      }),
      (t.deleteData = (e, t) => {
        return r({ type: "DELETE", visitorId: e }, t);
      }),
      (t.subscribe = e => {
        l.dispatch(c.XDOMAIN_ADD_SUBSCRIBER, { subscriber: e });
      }),
      (t.loadIframe = (e, t) => {
        return new s(i => {
          const n = g.createElement("iframe");
          (n.src = e + t),
            (n.hidden = !0),
            n.setAttribute("tabindex", "-1"),
            n.setAttribute("title", "Optimizely Internal Frame"),
            (n.style.display = "none"),
            (n.height = 0),
            (n.width = 0),
            (n.onload = () => {
              const r = {
                id: I.getNextFrameId(),
                target: n.contentWindow,
                origin: e,
                path: t,
              };
              l.dispatch(c.XDOMAIN_ADD_FRAME, r), i(r);
            }),
            g.appendTo(g.querySelector("body"), n);
        });
      }),
      (t.getXDomainUserId = (e, t) => {
      let i;
      const n = {};
      const r = o.keys(e);
      return o.each(t, e => {
        (n[e] = []),
          o.each(r, t => {
            const r = v.getUserIdFromKey(t, e);
            !i && r && (i = r), r && !o.includes(n[e], r) && n[e].push(r);
          });
      }),
      m.debug("XDomain: Found userIds:", n),
      i;
    }),
      (t.load = (e, i) => {
        E.addEventListener("message", n);
        const r = () => {
                  return !!g.querySelector("body");
                },
              s = () => {
                return t.loadIframe(e, i);
              };
        return _.pollFor(r)
          .then(s)
          .then(e => {
            l.dispatch(c.XDOMAIN_SET_DEFAULT_FRAME, e),
              I.isDisabled() ||
                o.each(I.getMessages(), t => {
                  t.startTime || a(t, e);
                });
          });
      });
  },
  (e, t, i) => {
    const n = i(87);
    (t.emitError = (e, t, i) => {
      const r = !0;
      n.emit(
        {
          type: "error",
          name: e.name || "Error",
          data: { error: e, metadata: t },
        },
        i || !1,
        r
      );
    }),
      (t.emitInternalError = (e, i) => {
        t.emitError(e, i, !0);
      }),
      (t.emitAnalyticsEvent = (e, t) => {
        const i = { type: "analytics", name: "trackEvent", data: e };
        n.emit(i, t);
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(5), a = i(7), o = i(86), s = i(16), c = i(9), u = i(23), l = s.get("stores/event_emitter");
    (t.on = e => {
      return (
        e.token || (e.token = r.generate()),
        c.dispatch(a.ADD_EMITTER_HANDLER, e),
        e.token
      );
    }),
      (t.off = e => {
        c.dispatch(a.REMOVE_EMITTER_HANDLER, { token: e });
      }),
      (t.emit = (e, t, i) => {
        const r = l.getHandlers(e, t);
        n.each(r, n => {
          try {
            n.handler.call({ $di: s }, e);
          } catch (r) {
            !i && n.emitErrors
              ? (u.error("Error in handler for event:", e, r),
                o.emitError(r, null, t))
              : u.warn("Suppressed error in handler for event:", e, r);
          }
        });
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(12).Promise, a = i(40), o = 100, s = 50;
    t.pollFor = (e, t, i) => {
      let c, u;
      return n.isFunction(i)
        ? (u = i)
        : ((c = i || o),
          (u = () => {
            return c--, c < -1;
          })),
      (t = t || s),
      new r((i, n) => {
        !(function r() {
          let o;
          if (!u()) {
            try {
              const s = e();
              if (s) return i(s);
            } catch (e) {
              o = e;
            }
            return a.setTimeout(r, t);
          }
          n(o || new Error("Poll timed out"));
        })();
      });
    };
  },
  (e, t, i) => {
    function n(e, i) {
      let n;
      (n = t.isInSameSession(e, i)
        ? e.getValueOrDefault([s.FIELDS.SESSION_ID])
        : i.getValueOrDefault([s.FIELDS.TIME])),
        i.setFieldValue(s.FIELDS.SESSION_ID, n);
    }
    function r(e, i, n) {
      let r;
      const a = e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);
      (r = t.isInSameSession(i, e) ? a : n ? a + 1 : a - 1),
        i.setFieldValue(s.FIELDS.SESSION_INDEX, r);
    }
    const a = i(62).Event;
    const o = i(24);
    var s = i(63);
    const c = i(62).EventBase;
    t.CURRENT_SESSION_INDEX = 0;
    const u = 18e5;
    (t.isInSameSession = (e, t) => {
      const i = e.getValueOrDefault([s.FIELDS.TIME], 0), n = t.getValueOrDefault([s.FIELDS.TIME], 0);
      return Math.abs(i - n) < u;
    }),
      (t.updateSessionId = (e, t) => {
      if (!e)
        return void t.setFieldValue(
          s.FIELDS.SESSION_ID,
          t.getValueOrDefault([s.FIELDS.TIME])
        );
      let i = e.getValueOrDefault([s.FIELDS.TIME]);
      let r = e.getValueOrDefault([s.FIELDS.SESSION_ID]);
      const o = t.getValueOrDefault([s.FIELDS.TIME]);
      (i = "number" != typeof i ? o - 36e5 : i),
        (r = "number" != typeof r ? i : r),
        (e = new a(new c("", ""), i, r)),
        n(e, t);
    }),
      (t.updateSessionIndex = (e, t) => {
      if (!e) return void t.setFieldValue(s.FIELDS.SESSION_INDEX, 0);
      let i = e.getValueOrDefault([s.FIELDS.TIME]);
      let n = e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);
      const o = t.getValueOrDefault([s.FIELDS.TIME]);
      let u = e.getValueOrDefault([s.FIELDS.SESSION_ID]);
      (i = "number" != typeof i ? o - 36e5 : i),
        (n = "number" != typeof n ? 0 : n),
        (u = "number" != typeof u ? i : u),
        (e = new a(new c("", ""), i, u, n)),
        r(e, t, !1);
    }),
      (t.sessionize = e => {
        const i = e.length;
        if (0 !== i) {
          e[0].setFieldValue(
            s.FIELDS.SESSION_ID,
            e[0].getValueOrDefault([s.FIELDS.TIME])
          );
          for (var a = 1; a < i; a++) n(e[a - 1], e[a]);
          let c = t.CURRENT_SESSION_INDEX;
          const l = e[i - 1].getValueOrDefault([s.FIELDS.TIME]);
          const d = o.now();
          d - l > u && (c += 1),
            e[i - 1].setFieldValue(s.FIELDS.SESSION_INDEX, c);
          for (var a = i - 1; a > 0; a--) r(e[a], e[a - 1], !0);
        }
      }),
      (t.reindexIfNecessary = (e, t, i) => {
        function n(e) {
          for (let t = 0; t < e.length; t++) {
            const i = e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);
            e[t].setFieldValue(s.FIELDS.SESSION_INDEX, i + 1);
          }
        }
        e.getValueOrDefault([s.FIELDS.SESSION_INDEX]) === -1 && (n(t), n(i));
      }),
      (t.sessionSortPredicate = (e, t) => {
        return e[s.FIELDS.TIME] - t[s.FIELDS.TIME];
      }),
      (t.applyMigrations = e => {
        return !1;
      });
  },
  (e, t, i) => {
    const n = i(12).Promise, r = i(40);
    t.estimateStorage = () => {
      const e = r.getGlobal("navigator");
      try {
        return e.storage.estimate();
      } catch (e) {
        return n.resolve({ usage: null, quota: null });
      }
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(24), o = i(9), s = i(26), c = i(23), u = i(12).Promise, l = i(92), d = 3;
    (t.isCORSSupported = () => {
      const e = l.get("XMLHttpRequest");
      return "withCredentials" in new e();
    }),
      (t.request = e => {
        return (e = n.extend(
          {
            method: "GET",
            async: !0,
            contentType: "text/plain;charset=UTF-8",
          },
          e
        )),
        new u((i, r) => {
          if (!t.isCORSSupported()) return r("CORS is not supported");
          const a = l.get("XMLHttpRequest"), o = new a();
          (o.onload = () => {
            e.success && e.success(o), i(o);
          }),
            (o.onerror = () => {
              e.error && e.error(o), r(o);
            }),
            n.isObject(e.data) && (e.data = s.stringify(e.data)),
            o.open(e.method, e.url, e.async),
            e.withCredentials && (o.withCredentials = e.withCredentials),
            o.setRequestHeader("Content-Type", e.contentType),
            o.send(e.data);
        });
      }),
      (t.retryableRequest = (e, i, s, l) => {
        if (!i) return u.reject(new Error("No id specified for request."));
        if (!t.isCORSSupported())
          return u.reject(new Error("CORS is not supported."));
        n.isUndefined(l) && (l = d), n.isUndefined(s) && (s = 0);
        const f = { id: i, timeStamp: a.now(), data: e, retryCount: s };
        return o.dispatch(r.SET_PENDING_EVENT, f),
        c.debug("Sending event ", i),
        t.request(e).then(
          e => {
            return o.dispatch(r.REMOVE_PENDING_EVENT, { id: i }), e;
          },
          e => {
            throw (
              (f.retryCount >= l
                ? (o.dispatch(r.REMOVE_PENDING_EVENT, { id: i }),
                  c.warn(
                    "Event ",
                    f,
                    " could not be sent after ",
                    l,
                    " attempts."
                  ))
                : (f.retryCount++,
                  o.dispatch(r.SET_PENDING_EVENT, f),
                  c.debug(
                    "Event ",
                    f,
                    " failed to send, with error ",
                    e,
                    " It will be retried ",
                    l - s,
                    " times."
                  )),
              e)
            );
          }
        )
      ;
      }),
      (t.sendBeacon = t.request);
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(24), o = i(16), s = i(80), c = i(25), u = i(9), l = i(23), d = o.get("stores/sandbox"), f = i(40);
    (t.shouldSandbox = () => {
      return !1;
    }),
      (t.get = e => {
        if (!e) throw new Error("Name is required");
        if (t.shouldSandbox()) {
          d.isInitialized() || p();
          const i = d.get(e);
          if (i) return i;
        }
        return f.getGlobal(e);
      });
    var p = () => {
      try {
        var e = "optimizely_" + a.now();
        const t = s.createElement("iframe");
        (t.name = e), (t.style.display = "none"), s.appendToHead(t);
        const i = t.contentWindow, o = t.contentDocument;
        o.write("<script></script>"), o.close();
        const d = n.mapValues(c.SandboxedFunctions, e => {
          return i[e];
        });
        u.dispatch(r.SANDBOXED_FUNCTIONS_ADDED, { sandboxedFunctions: d }),
          t.parentNode.removeChild(t);
      } catch (e) {
        l.warn("Unable to create a sandbox: ", e);
      }
    };
  },
  (e, t, i) => {
    const n = i(2),
          r = i(23),
          a = i(94),
          o = i(16),
          s = o.get("stores/plugins"),
          c = i(7),
          u = i(25),
          l = i(9),
          d = !1,
          f = [i(107), i(108), i(128)],
          p = [
            "clientMetadata",
            "cookieDomain",
            "disable",
            "load",
            "optOut",
            "rum",
          ];
    (t.push = (e, t) => {
      let i, a, o, s;
      if (!n.isArray(e) && n.isObject(e))
        (s = n.isUndefined(e.version) ? 1 : e.version), (i = e.type), (o = [e]);
      else if (n.isArray(e)) (s = 0), (i = e[0]), (o = e.slice(1));
      else {
        if (!n.isString(e))
          return (
            r.warn("API / Ignoring non-array/object/string argument:", e), !1
          );
        (s = 0), (i = e), (o = []);
      }
      if ((f[s] && (a = f[s][i]), t && p.indexOf(i) === -1))
        return r.debug("API / Ignoring non high priority function:", i, o), !1;
      if (!a)
        return (
          r.warn(
            'API / No function found for "' +
              i +
              '" (v' +
              s +
              ") with arguments:",
            o
          ),
          !1
        );
      r.log('API / Executing: "' + i, '" with arguments:', o);
      try {
        a.apply(null, o),
          l.dispatch(c.RECORD_API_USAGE, {
            methodName: s ? "v" + s + "." + i : i,
          });
      } catch (e) {
        r.error(e);
      }
      return !0;
    }),
      (t.get = e => {
        if (d && "state" !== e)
          return void r.warn('Module "' + e + '" not found.');
        r.log('API / Getting module: "' + e + '"');
        let t = a[e];
        return (
          t
            ? n.isArray(t) && (t = o.evaluate(t))
            : (t = s.getPlugin(u.PluginTypes.apiModules, e)),
          t
            ? (l.dispatch(c.RECORD_API_USAGE, { methodName: "get." + e }), t)
            : void r.warn('Module "' + e + '" not found.')
        );
      });
  },
  (e, t, i) => {
    function n(e, t, i, n) {
      const r = e.getLayerState(n), a = t.get(n), s = i.get();
      if (!r || !a)
        return s
          ? {
              layer: {
                name: s.layerName,
                id: s.layerId,
                policy: s.layerPolicy,
                integrationStringVersion: s.integrationStringVersion,
              },
              experiment: { name: s.experimentName, id: s.experimentId },
              variation: { name: s.variationName, id: s.variationId },
              isLayerHoldback: !1,
            }
          : null;
      if (l.isSingleExperimentPolicy(a.policy) && r.decision.isLayerHoldback)
        return null;
      const c = r.decision.experimentId, u = r.decision.variationId;
      if (!c || !u) return null;
      let d, f;
      return (d = o.find(a.experiments, { id: c }))
        ? ((f = o.find(d.variations, { id: u })),
          f
            ? {
                layer: {
                  name: a.name,
                  id: a.id,
                  policy: a.policy,
                  integrationStringVersion: a.integrationStringVersion,
                },
                experiment: { name: d.name, id: d.id },
                variation: { name: f.name, id: f.id },
                isLayerHoldback: r.decision.isLayerHoldback,
              }
            : null)
        : null;
    }
    function r(e, t, i, n, r, s) {
      const c = [];
      let u = e.getLayerStates();
      s.onlySingleExperiments &&
        (u = o.filter(u, e => {
          const i = t.get(e.layerId);
          return i && l.isSingleExperimentPolicy(i.policy);
        }));
      const f = o.map(u, e => {
                const t = !!e.decision.variationId,
                      i =
                        e.decisionActivationId &&
                        e.decisionActivationId === n.getActivationId(),
                      r = d.getExperimentAndVariation(),
                      a = r ? r.variationId : null,
                      s = t && e.decision.variationId === a;
                return o.extend(e, { isActive: (t && i) || s, visitorRedirected: s });
              }),
            p = r ? o.filter(f, r) : f;
      return o.each(p, e => {
        const n = a(e, t, i, s.includeOfferConsistency);
        n && c.push(n);
      }),
      c;
    }
    function a(e, t, i, n) {
      let r;
      let a;
      const s = e.layerId;
      const c = t.get(s) || {};

      const u = o.map(c.experiments, e => {
        return o.pick(e, ["id", "name"]);
      });

      if (n || !c.decisionMetadata || !c.decisionMetadata.offerConsistency) {
        const l = {
          id: s,
          campaignName: c.name || null,
          experiment: null,
          allExperiments: u,
          variation: null,
          reason: e.decision.reason,
          isActive: !!e.isActive,
          visitorRedirected: e.visitorRedirected,
          isInCampaignHoldback: e.decision.isLayerHoldback,
        };
        e.decision &&
          e.decision.experimentId &&
          (r = o.find(c.experiments, { id: e.decision.experimentId })),
          r && (l.experiment = o.pick(r, ["id", "name", "campaignName"])),
          r &&
            e.decision.variationId &&
            (a = o.find(r.variations, { id: e.decision.variationId })),
          a && (l.variation = o.pick(a, ["id", "name"]));
        const d = o.map(e.decisionTicket.audienceIds, e => {
          return o.pick(i.get(e), ["id", "name"]);
        });
        return (
          (l.audiences = d),
          c.decisionMetadata &&
            c.decisionMetadata.offerConsistency &&
            (l.pageId = e.pageId),
          l
        );
      }
    }
    var o = i(2);
    const s = i(95);
    const c = i(96);
    const u = i(98);
    var l = i(44);
    var d = i(99);
    (t.data = [
      "stores/audience_data",
      "stores/client_metadata",
      "stores/event_data",
      "stores/layer_data",
      "stores/view_data",
      "stores/group_data",
      "stores/interest_group",
      "stores/tag_group",
      "stores/global",
      (e, t, i, n, r, a, s, l, d) => {
        const f = {},
              p = {},
              g = {},
              h = {
                audiences: e.getAudiencesMap(),
                events: i.getEventsMap(),
                campaigns: f,
                pages: r.getPagesMap(),
                experiments: p,
                variations: g,
                projectId: d.getProjectId(),
                snippetId: d.getSnippetId(),
                accountId: d.getAccountId(),
                dcpServiceId: d.getDCPServiceId(),
                revision: d.getRevision(),
                clientName: t.getClientName(),
                clientVersion: t.getClientVersion(),
              },
              _ = u.dereferenceChangeId;
        return o.each(n.getAll(), e => {
          c.defineProperty(
            f,
            e.id,
            () => {
              const t = o.extend({}, e);
              return c.defineProperty(
                t,
                "changes",
                () => {
                  return o.map(e.changes, _);
                },
                "campaign"
              ),
              c.defineProperty(
                t,
                "experiments",
                () => {
                  return o.map(e.experiments, e => {
                    return p[e.id];
                  });
                },
                "campaign"
              ),
              t
            ;
            },
            "campaignMap",
            "byId"
          ),
            o.each(e.experiments, e => {
              c.defineProperty(
                p,
                e.id,
                () => {
                  const t = o.extend({}, e);
                  return c.defineProperty(
                    t,
                    "changes",
                    () => {
                      return o.map(e.changes, _);
                    },
                    "experiment"
                  ),
                  c.defineProperty(
                    t,
                    "variations",
                    () => {
                      return o.map(e.variations, e => {
                        return g[e.id];
                      });
                    },
                    "experiment"
                  ),
                  t
                ;
                },
                "experimentMap",
                "byId"
              ),
                o.each(e.variations, e => {
                  c.defineProperty(
                    g,
                    e.id,
                    () => {
                      const t = o.extend({}, e);
                      return c.defineProperty(
                        t,
                        "actions",
                        () => {
                          return o.map(e.actions, e => {
                            return o.extend({}, e, {
                              changes: o.map(e.changes, _),
                            });
                          });
                        },
                        "variation"
                      ),
                      t
                    ;
                    },
                    "variationMap",
                    "byId"
                  );
                });
            });
        }),
        (h.groups = a.getGroupsMap()),
        h;
      },
    ]),
      (t.visitor = [
        "stores/visitor",
        e => {
          return o.cloneDeep(e.getVisitorProfile());
        },
      ]),
      (t.visitor_id = [
        "stores/visitor_id",
        e => {
          return { randomId: e.getRandomId() };
        },
      ]),
      (t.state = [
        "stores/audience_data",
        "stores/layer_data",
        "stores/layer",
        "stores/view_data",
        "stores/view",
        "stores/global",
        "stores/observed_redirect",
        (e, t, i, a, c, u, f) => {
          return {
            getCampaignStates(n) {
              const a = {}, s = r(i, t, e, u, n, { includeOfferConsistency: !1 });
              return o.each(s, e => {
                a[e.id] = e;
              }),
              a
            ;
            },
            getExperimentStates(n) {
              const a = r(i, t, e, u, n, {
                        includeOfferConsistency: !1,
                        onlySingleExperiments: !0,
                      }),
                    s = [
                      "audiences",
                      "variation",
                      "reason",
                      "visitorRedirected",
                      "isActive",
                    ],
                    c = o.reduce(
                      a,
                      (e, t) => {
                        const i = t.allExperiments[0];
                        return (
                          (e[i.id] = o.extend({}, o.pick(t, s), {
                            id: i.id,
                            experimentName: i.name,
                            isInExperimentHoldback: t.isInCampaignHoldback,
                          })),
                          e
                        );
                      },
                      {}
                    );
              return c;
            },
            getCampaignStateLists(n) {
              const a = {}, s = r(i, t, e, u, n, { includeOfferConsistency: !0 });
              return o.each(s, e => {
                const t = e.id;
                a[t] || (a[t] = []), a[t].push(e);
              }),
              a;
            },
            getPageStates(e) {
              const t = c.getAll(),
                    i = o.reduce(
                      t,
                      (e, t) => {
                        const i = a.get(t.id);
                        return (
                          (e[t.id] = o.extend(
                            {},
                            o.pick(i, [
                              "id",
                              "name",
                              "apiName",
                              "category",
                              "staticConditions",
                              "tags",
                            ]),
                            o.pick(t, ["isActive", "metadata"])
                          )),
                          (e[t.id].isActive = !!e[t.id].isActive),
                          e
                        );
                      },
                      {}
                    );
              return e ? o.pickBy(i, e) : i;
            },
            isGlobalHoldback() {
              return u.isGlobalHoldback();
            },
            getActivationId() {
              return u.getActivationId();
            },
            getVariationMap() {
              const e = i.getLayerStates(), n = {};
              return o.each(e, e => {
                const i = t.get(e.layerId);
                if (
                  e.decision &&
                  e.decision.experimentId &&
                  ((n[e.decision.experimentId] = {
                    id: e.decision.variationId,
                    name: null,
                    index: null,
                  }),
                  i)
                ) {
                  const r = o.find(i.experiments, {
                    id: e.decision.experimentId,
                  });
                  if (r && e.decision.variationId)
                    const a = o.find(r.variations, {
                              id: e.decision.variationId,
                            }),
                          s = o.findIndex(r.variations, {
                            id: e.decision.variationId,
                          });
                  a &&
                    (n[e.decision.experimentId] = {
                      id: e.decision.variationId,
                      name: a.name,
                      index: s,
                    });
                }
              }),
              n;
            },
            getActiveExperimentIds() {
              const e = {};
              return o.each(
                this.getCampaignStateLists({ isActive: !0 }),
                t => {
                  o.each(t, t => {
                    e[t.experiment.id] = !0;
                  });
                }
              ),
              o.keys(e)
            ;
            },
            getRedirectInfo() {
              const e = d.getExperimentAndVariation();
              return e && (e.referrer = d.getReferrer()), e;
            },
            getDecisionString(e) {
              if (!e)
                throw new Error("Must pass a config to getDecisionString");
              e = o.extend({ maxLength: 255, shouldCleanString: !1 }, e);
              const r = n(i, t, f, e.campaignId);
              return r
                ? s.generateAnalyticsString(
                    r.layer,
                    r.experiment,
                    r.variation,
                    r.isLayerHoldback,
                    e.maxLength,
                    e.shouldCleanString
                  )
                : null;
            },
            getDecisionObject(e) {
              if (!e)
                throw new Error("Must pass a config to getDecisionObject");
              e = o.extend({ maxLength: 255, shouldCleanString: !1 }, e);
              const r = n(i, t, f, e.campaignId);
              if (!r) return null;
              const a = s.formatNamesAndIdsForAnalytics(
                        r.layer,
                        r.experiment,
                        r.variation,
                        e.shouldCleanString
                      ),
                    c = o.mapValues(a.names, (t, i) => {
                      return s.combineAndTruncateIdAndName(
                        t,
                        a.idStrings[i],
                        e.maxLength
                      );
                    }),
                    u = { experiment: c.experiment, variation: c.variation };
              return (
                l.isSingleExperimentPolicy(r.layer.policy) ||
                  o.extend(u, {
                    campaign: c.layer,
                    holdback: r.isLayerHoldback,
                  }),
                u
              );
            },
          };
        },
      ]),
      (t.utils = i(100).create()),
      (t.jquery = [
        "env/jquery",
        e => {
          return e;
        },
      ]),
      (t.event_emitter = i(106));
  },
  (e, t, i) => {
    function n(e) {
      return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_");
    }
    function r(e) {
      return !c.isEmpty(e) && c.includes(["and", "or", "not"], e[0]);
    }
    function a(e, t) {
      let i = "";
      return c.isEmpty(t)
        ? (i = d)
        : ((i = c.reduce(
            t,
            (t, i) => {
              const r = e.get(i);
              return r ? t + n(r.name ? r.name : r.id) + "," : t;
            },
            ""
          )),
          (i = i.slice(0, -1))),
      i;
    }
    function o(e, i, n, r, a, o) {
      if (!_.isSingleExperimentPolicy(e.policy) || !r) {
        const s = !_.isSingleExperimentPolicy(e.policy) && r, u = t.formatNamesAndIdsForAnalytics(e, i, n, o), d = [u.names.experiment, u.names.variation], p = [u.idStrings.experiment, u.idStrings.variation];
        _.isSingleExperimentPolicy(e.policy) ||
          (d.unshift(u.names.layer), p.unshift(u.idStrings.layer));

        const g = c.reduce(
            p,
            (e, t) => {
              return e + t.length;
            },
            0
          );

        const h = d.length - 1 + (s ? 1 : 0);
        const v = h * l.length;
        let E = g + v;
        if ((s && (E += f.length), E > a))
          throw new Error(
            "The analytics string size is too low to send the entity IDs."
          );
        for (
          var m = a - E, I = d.length, y = [], S = d.length - 1;
          S >= 0;
          S--
        ) {
          const T = d[S], A = Math.min(T.length, Math.floor(m / I));
          (m -= A), I--, y.unshift(T.substring(0, A));
        }
        const R = c.map(y, (e, t) => {
          return e + p[t];
        });
        return s && R.push(f), R.join(l);
      }
    }
    function s(e, i, n, r, a, o) {
      const s = r ? f : p,
            u = 3 * l.length,
            d = t.formatNamesAndIdsForAnalytics(e, i, n, o),
            g = d.names,
            h = d.idStrings,
            v = c.reduce(
              h,
              (e, t) => {
                return e + t.length;
              },
              0
            );
      if (v + u + s.length > a)
        throw new Error(
          "The analytics string size is too low to send the campaign, experiment, and variation IDs."
        );
      let E = a - v - u - s.length;
      const m = {};
      (m.variation = Math.min(g.variation.length, Math.floor(E / 3))),
        (E -= m.variation),
        (m.experiment = Math.min(g.experiment.length, Math.floor(E / 2))),
        (E -= m.experiment),
        (m.layer = E);
      const I = {};
      c.each(g, (e, t) => {
        I[t] = e.substring(0, m[t]);
      });
      let y = [];
      return (
        _.isSingleExperimentPolicy(e.policy) || y.push(I.layer + h.layer),
        (y = y.concat([
          I.experiment + h.experiment,
          I.variation + h.variation,
          s,
        ])),
        y.join(l)
      );
    }
    var c = i(2);
    const u = i(16);
    var l = ":";
    var d = "everyone_else";
    var f = "holdback";
    var p = "treatment";
    const g = "";
    const h = i(23);
    var _ = i(44);
    (t.formatNamesAndIdsForAnalytics = (e, t, i, o) => {
      let s = {
        layer: e.name || g,
        experiment: t.name || g,
        variation: i.name || g,
      };
      if (
        (o && (s = c.mapValues(s, n)),
        s.experiment === g &&
          (!e.integrationStringVersion || 1 === e.integrationStringVersion))
      )
        if (r(t.audienceIds)) s.experiment = "Exp";
        else {
          const l = u.get("stores/audience_data");
          s.experiment = a(l, t.audienceIds);
        }
      const d = {
        layer: "(" + n(e.id) + ")",
        experiment: "(" + n(t.id) + ")",
        variation: "(" + n(i.id) + ")",
      };
      return { names: s, idStrings: d };
    }),
      (t.combineAndTruncateIdAndName = (e, t, i) => {
        const n = i - t.length;
        if (
          (n < 0 &&
            (h.warn(
              "maxLength must be at least long enough to fit the entity ID, which is length" +
                t.length +
                ". Defaulting to only use entity ID as name."
            ),
            (e = g)),
          e === g)
        )
          return t;
        if (e.length > n) {
          const r = Math.min(e.length, n);
          return (e = e.substring(0, r)), e + t;
        }
        return e + " " + t;
      }),
      (t.generateAnalyticsString = (e, t, i, n, r, a) => {
        return e.integrationStringVersion && 2 === e.integrationStringVersion
          ? o(e, t, i, n, r, a)
          : s(e, t, i, n, r, a);
      });
  },
  (e, t, i) => {
    const n = i(97), r = i(7), a = i(9), o = i(23);
    t.defineProperty = (e, t, i, s, c) => {
      n(
        e,
        t,
        () => {
          const e = ["prop", s, c || t].join(".");
          return (
            o.debug('Evaluating getter: "' + e + '"'),
            a.dispatch(r.RECORD_API_USAGE, { methodName: e }),
            i()
          );
        },
        !0
      );
    };
  },
  (e, t) => {
    "use strict";
    function i(e, t, i, n) {
      Object.defineProperty(e, t, {
        get() {
          const e = i.call(this);
          return (
            Object.defineProperty(this, t, {
              value: e,
              enumerable: !!n,
              writable: !0,
            }),
            e
          );
        },
        set(e) {
          return (
            Object.defineProperty(this, t, {
              value: e,
              enumerable: !!n,
              writable: !0,
            }),
            e
          );
        },
        enumerable: !!n,
        configurable: !0,
      });
    }
    e.exports = i;
  },
  (e, t, i) => {
    function n(e) {
      const i = r.cloneDeep(e);
      return i.changes && (i.changes = r.map(i.changes, t.dereferenceChangeId)),
      i.experiments &&
        r.each(i.experiments, e => {
          e.changes && (e.changes = r.map(e.changes, t.dereferenceChangeId)),
            e.variations &&
              r.each(e.variations, e => {
                e.actions &&
                  r.each(e.actions, e => {
                    e.changes &&
                      (e.changes = r.map(e.changes, t.dereferenceChangeId));
                  });
              });
        }),
      i
    ;
    }
    var r = i(2);
    const a = i(16);
    const o = i(22);
    const s = i(96);
    const c = a.get("stores/change_data");
    (t.translateDecisionToCampaignDecision = e => {
      return u(r.cloneDeep(e), {
        layerId: "campaignId",
        isLayerHoldback: "isCampaignHoldback",
      });
    }),
      (t.translateLayerEventToCampaignEvent = function (e) {
        const t = {};
        return s.defineProperty(
          t,
          "campaign",
          () => {
            const t = n(e.data.layer);
            return t;
          },
          "campaignEvent"
        ),
        (t.decisionTicket = e.data.decisionTicket),
        (t.decision = this.translateDecisionToCampaignDecision(
          e.data.decision
        )),
        (t.audiences = e.data.audiences),
        { type: "lifecycle", name: "campaignDecided", data: t };
      }),
      (t.translateViewActivatedToPageActivated = e => {
        return {
          type: "lifecycle",
          name: "pageActivated",
          data: { page: e.data.view },
        };
      }),
      (t.dereferenceChangeId = e => {
        const t = c.getChange(e);
        return t ? o.safeReference(t) : e;
      });
    var u = (e, t) => {
      const i = r.omit(e, r.keys(t));
      return r.each(t, (t, n) => {
        i[t] = e[n];
      }),
      i
    ;
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(16), a = r.get("stores/observed_redirect");
    (t.getReferrer = () => {
      const e = a.get();
      return e ? e.referrer : null;
    }),
      (t.getExperimentAndVariation = () => {
        const e = a.get();
        return e && n.isString(e.variationId)
          ? n.pick(e, ["experimentId", "variationId"])
          : null;
      });
  },
  (e, t, i) => {
    const n = i(12).Promise, r = i(101).observeSelector, a = i(102).poll, o = i(104).waitForElement, s = i(105).waitUntil;
    t.create = () => {
      return {
        observeSelector: r,
        poll: a,
        Promise: n,
        waitForElement: o,
        waitUntil: s,
      };
    };
  },
  (e, t, i) => {
    function n() {
      if (f.shouldObserveChangesIndefinitely()) {
        const e = {
                  attributes: !0,
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                },
              t = p.getDocumentElement(),
              i = new MutationObserver(function () {
                this.disconnect(), l.each(l.keys(E), a), this.observe(t, e);
              });
        return n => {
          const r = E[n];
          i.observe(t, e),
            (r.cancelObservation = () => {
              delete E[n], l.isEmpty(E) && i.disconnect();
            });
        };
      }
      return e => {
        const t = h.poll(l.partial(a, e));
        E[e].cancelObservation = () => {
          t(), delete E[e];
        };
      };
    }
    function r(e) {
      const t = E[e];
      t && t.cancelObservation && t.cancelObservation();
    }
    function a(e) {
      if (E[e]) {
        if (o(E[e]))
          return (
            0 === E[e].matchedCount &&
              l.isFunction(E[e].options.onTimeout) &&
              E[e].options.onTimeout(),
            void r(e)
          );
        const t = document.querySelectorAll(E[e].selector);
        t.length &&
          (l.each(t, t => {
            (t.ni && t.ni[e]) || E[e].callbackQueue.push(t);
          }),
          s(e));
      }
    }
    function o(e) {
      const t = e.options.timeout;
      if (null !== t)
        if ("function" == typeof t)
          try {
            return t();
          } catch (e) {}
        else if (Date.now() - e.startTime > t) return !0;
      return !1;
    }
    function s(e) {
      for (; E[e] && E[e].callbackQueue.length; ) {
        const t = E[e].callbackQueue.shift();
        if (
          (c(t, e),
          (E[e].matchedCount = E[e].matchedCount + 1),
          E[e].callback(t),
          E[e] && E[e].options.once)
        )
          return void r(e);
      }
    }
    function c(e, t) {
      e.ni || (e.ni = {}), (e.ni[t] = !0);
    }
    function u(e) {
      try {
        document.querySelector(e);
      } catch (e) {
        return !1;
      }
      return !0;
    }
    var l = i(2);
    const d = (i(7), i(16));
    var f = d.get("stores/directive");
    var p = i(80);
    const g = (i(25), i(9), i(5).generate);
    var h = i(102);
    const _ = i(40);
    const v = (d.get("stores/rum"), { once: !1, onTimeout: null, timeout: null });
    var E = {};

    let m = e => {
      (m = n())(e);
    };

    t.observeSelector = (e, t, i) => {
      if (!u(e))
        throw new Error(
          "observeSelector expects a valid css selector as its first argument"
        );
      if (!l.isFunction(t))
        throw new Error(
          "observeSelector expects a function as its second argument"
        );
      if (i && (!l.isObject(i) || l.isFunction(i)))
        throw new Error(
          "observeSelector expects an object as its third argument"
        );
      const n = g();
      return (
        (i = l.assign({}, v, i || {})),
        (E[n] = {
          callback: t,
          callbackQueue: [],
          matchedCount: 0,
          options: i,
          selector: e,
          startTime: Date.now(),
        }),
        m(n),
        _.setTimeout(l.bind(a, null, n), 0),
        l.partial(r, n)
      );
    };
  },
  (e, t, i) => {
    function n(e) {
      l[e] &&
        a.each(l[e].callbacks, e => {
          e.call(null);
        });
    }
    function r(e, t) {
      l[t] &&
        l[t].callbacks[e] &&
        (delete l[t].callbacks[e],
        a.some(l[t].callbacks) || (clearInterval(l[t].id), delete l[t]));
    }
    var a = i(2);
    const o = (i(7), i(16));
    const s = (i(25), i(9), i(5).generate);
    const c = i(40);
    const u = i(103).DEFAULT_INTERVAL;
    var l = (o.get("stores/rum"), {});
    (t.poll = (e, t) => {
      a.isNumber(t) || (t = u),
        l[t] ||
          (l[t] = { callbacks: {}, id: c.setInterval(a.partial(n, t), t) });
      const i = s();
      return (l[t].callbacks[i] = e), a.partial(r, i, t);
    }),
      (t.cancelAll = () => {
        a.each(l, (e, t) => {
          clearInterval(e.id), delete l[t];
        });
      });
  },
  (e, t) => {
    e.exports = { DEFAULT_INTERVAL: 20 };
  },
  (e, t, i) => {
    const n = i(12).Promise, r = i(101).observeSelector;
    t.waitForElement = e => {
      return new n((t, i) => {
        r(e, t, { once: !0 });
      });
    };
  },
  (e, t, i) => {
    const n = i(12).Promise, r = i(102).poll;
    t.waitUntil = e => {
      return new n((t, i) => {
        if (e()) return void t();
        const n = r(() => {
          e() && (n(), t());
        });
      });
    };
  },
  (e, t, i) => {
    const n = i(87);
    (t.on = e => {
      return (e.publicOnly = !0), n.on(e);
    }),
      (t.off = n.off),
      (t.emit = e => {
        n.emit(e);
      });
  },
  (e, t, i) => {
    function n(e) {
      let t, i = {};
      if (e)
        if (r(e)) t = Number(e);
        else {
          if ("object" != typeof e)
            throw new Error("tracker", "Revenue argument", e, "not a number.");
          if (((i = a.extend({}, e)), "revenue" in i)) {
            if (!r(i["revenue"]))
              throw new Error(
                "tracker",
                "Revenue value",
                i["revenue"],
                "not a number."
              );
            (t = Number(i["revenue"])), delete i["revenue"];
          }
        }
      return a.isUndefined(t) || (i.revenue = t), i;
    }
    function r(e) {
      return a.isNumber(e) || (a.isString(e) && Number(e) == e);
    }
    var a = i(2);
    const o = i(108);
    (t.activateGeoDelayedExperiments = (e, t) => {
      t || (t = e.lists ? "odds" : "cdn3"),
        o.dataFromSource({ data: e, source: t });
    }),
      (t.activateSiteCatalyst = e => {
        e &&
          e.sVariable &&
          o.integrationSettings({
            id: "adobe_analytics",
            settings: { sVariableReference: e.sVariable },
          });
      }),
      (t.bucketUser = t.bucketVisitor = (e, t) => {
        if (e && t) {
          const i = { experimentId: String(e) };
          t > 256
            ? (i.variationId = String(t))
            : (i.variationIndex = String(t)),
            o.bucketVisitor(i);
        }
      }),
      (t.disable = e => {
        o.disable({ scope: e });
      }),
      (t.log = e => {
        a.isUndefined(e) && (e = !0), o.log({ level: e ? "INFO" : "OFF" });
      }),
      (t.optOut = e => {
        a.isUndefined(e) && (e = !0), o.optOut({ isOptOut: e });
      }),
      (t.setCookieDomain = e => {
        o.cookieDomain({ cookieDomain: e });
      }),
      (t.setCookieExpiration = e => {
        o.cookieExpiration({ cookieExpirationDays: e });
      }),
      (t.setDimensionValue = (e, t) => {
        const i = {};
        (i[e] = t), o.user({ attributes: i });
      }),
      (t.setUserId = e => {
        o.user({ userId: e });
      }),
      (t.storeThirdPartyData = (e, t) => {
        o.dataFromSource({ source: e, data: t });
      }),
      (t.trackEvent = (e, t) => {
        o.event({ eventName: e, tags: n(t) });
      });
  },
  (e, t, i) => {
    function n(e) {
      let t;
      return e.eventId && (t = I.create(e.eventId, e.eventName, "custom")),
      w.updateAllViewTags(),
      () => {
        const i = p.trackCustomEvent(e.eventName, e.tags, t);
        i
          ? R.log("API / Tracking custom event:", e.eventName, e.tags)
          : R.log("API / Not tracking custom event:", e.eventName);
      };
    }
    function r(e) {
      let t;
      return e.eventData &&
        (t = I.create(
          e.eventData.id,
          e.eventData.apiName,
          "click",
          e.eventData
        )),
      () => {
        const e = p.trackClickEvent(t);
        e
          ? R.log("API / Tracking click event:", e)
          : R.log("API / Not tracking click event:", e);
      };
    }
    function a(e) {
      const t = e.eventData,
            i = A.createLayerState(
              t.layerId,
              t.experimentId,
              t.variationId,
              t.isLayerHoldback
            ),
            n = A.createSingle(t.layerId, t.experimentId, t.variationId);
      return () => {
        A.recordLayerDecision(i.layerId, i.decisionTicket, i.decision),
          R.log("API / Tracking decision event:", i),
          p.trackDecisionEvent(i.decision, i.decisionTicket, n);
      };
    }
    function o(e) {
      const t = w.create(e.eventData.id, e.eventData.apiName), i = w.createState(t.id);
      return () => {
        const e = p.trackViewActivation(t, i);
        e
          ? R.log("API / Tracking pageview event:", e)
          : R.log("API / Not tracking pageview event:", e);
      };
    }
    const s = i(2);
    const c = i(7);
    const u = i(93);
    const l = i(94);
    const d = i(109);
    const f = i(25);
    var p = i(110);
    const g = i(117);
    const h = i(6);
    const _ = i(76).create;
    const v = i(24);
    const E = i(118);
    const m = i(120);
    var I = i(121);
    const y = i(87);
    const S = i(9);
    const T = i(26);
    var A = i(113);
    var R = i(23);
    const D = i(122);
    const b = i(114);
    var w = i(123);
    const O = i(74);
    const C = i(16);
    const N = C.get("stores/dimension_data");
    const L = C.get("stores/view");
    const P = C.get("stores/view_data");
    const V = C.get("stores/visitor_id");
    const k = C.get("stores/layer_data");
    const x = C.get("stores/directive");
    const F = !1;
    const M = !1;
    const U = F || M;
    const G = 86400;
    const B = 90;
    const z = (t.ApiListenerError = _("ApiListenerError"));
    (t.event = e => {
      let t;
      switch (e.eventType) {
        case "click":
          t = r(e);
          break;
        case "decision":
          t = a(e);
          break;
        case "pageview":
          t = o(e);
          break;
        case "custom":
        default:
          t = n(e);
      }
      V.getBucketingId()
        ? t()
        : S.dispatch(c.ADD_CLEANUP_FN, {
            lifecycle: f.Lifecycle.postActivate,
            cleanupFn: t,
          });
    }),
      (t.clientMetadata = e => {
        U &&
          (S.dispatch(c.SET_CLIENT_NAME, e.clientName),
          S.dispatch(c.SET_CLIENT_VERSION, e.clientVersion)),
          F &&
            e.forceVariationIds &&
            S.dispatch(c.LOAD_DIRECTIVE, {
              forceVariationIds: e.forceVariationIds,
            });
      }),
      (t.priorRedirectString = e => {
        U && b.load(e.value);
      }),
      (t.microsnippetError = e => {
        if (U) {
          const t = (e.errorData.metadata && e.errorData.metadata.err) || {};
          t.name = e.errorData.code;
          const i = {
            engine: e.engine,
            msVersion: e.errorData.msVersion,
            requestId: e.errorData.requestId,
            projectId: e.errorData.projectId,
            snippetKey: e.errorData.snippetKey,
            args: e.errorData.args,
          };
          m.handleError(t, i);
        }
      }),
      (t.rum = e => {
        S.dispatch(c.SET_RUM_DATA, e.eventData);
      }),
      (t.initialViewStates = e => {
        const t = s.map(e.states, (e, t) => {
          return { id: t, isActive: e };
        });
        w.registerViews(t);
      }),
      (t.page = e => {
        const t = P.getByApiName(e.pageName);
        if (!t) throw new Error('Unknown page "' + e.pageName + '"');
        const i = !e.hasOwnProperty("isActive") || e.isActive,
              n = () => {
                i
                  ? w.activateViaAPI(t, e.tags)
                  : (w.deactivate(t),
                    R.log("API / Deactivated Page", w.description(t)));
              };
        V.getBucketingId()
          ? n()
          : S.dispatch(c.ADD_CLEANUP_FN, {
              lifecycle: f.Lifecycle.postViewsActivated,
              cleanupFn: n,
            });
      }),
      (t.tags = e => {
        w.setGlobalTags(e.tags);
      }),
      (t.user = e => {
        U &&
          e.visitorId &&
          (V.getBucketingId()
            ? (R.log("API / Setting visitor Id:", e.visitorId),
              O.setId({ randomId: e.visitorId }))
            : (R.log("API / Setting visitor Id for activation:", e.visitorId),
              S.dispatch(c.SET_VISITOR_ID_VIA_API, e.visitorId))),
          F &&
            s.each(["IP", "location", "queryParams", "url"], t => {
              e[t] && (R.log("API / Setting", t, ":", e[t]), j(t, e[t], !1));
            }),
          R.log("API / Setting visitor custom attributes:", e.attributes),
          s.each(e.attributes, (e, t) => {
            let i;
            let n;
            let r = t;
            const a = N.getById(t) || N.getByApiName(t);
            a && ((r = a.id), (i = a.apiName), (n = a.segmentId || a.id));
            const o = { id: n, value: e };
            i && (o.name = i), j(r, o, !0);
          });
      });
    var j = (e, t, i) => {
      const n = [
                {
                  key: i ? ["custom", e] : [e],
                  value: t,
                  metadata: { lastModified: v.now() },
                },
              ],
            r = () => {
              S.dispatch(c.SET_VISITOR_ATTRIBUTES, { attributes: n });
            };
      V.getBucketingId()
        ? r()
        : S.dispatch(c.ADD_CLEANUP_FN, {
            lifecycle: f.Lifecycle.postVisitorProfileLoad,
            cleanupFn: r,
          });
    };
    (t.optOut = e => {
      const t = !e.hasOwnProperty("isOptOut") || e.isOptOut;
      E.setOptOut(t);
    }),
      (t.cookieExpiration = e => {
        let t = e.cookieExpirationDays;
        t < B &&
          (R.error(
            'Argument "cookieExpirationDays"=',
            t,
            "less than minimum days:",
            B,
            ", setting to minimum."
          ),
          (t = B)),
          R.log("API / Setting cookie age to", t, "days."),
          S.dispatch(c.SET_COOKIE_AGE, t * G);
      }),
      (t.extendCookieLifetime = e => {
        (e = s.extend({ isEnabled: !0 }, e)),
          R.log(
            "API / Setting cookie automatic lifetime extension to",
            e.isEnabled
          ),
          S.dispatch(c.SET_COOKIE_AUTO_REFRESH, e.isEnabled);
      }),
      (t.cookieDomain = e => {
        R.log("API / Setting cookie domain to", e.cookieDomain),
          S.dispatch(c.SET_COOKIE_DOMAIN, e.cookieDomain);
      }),
      (t.disable = e => {
        if (e.scope) {
          if ("tracking" !== e.scope)
            throw new Error('Unknown "scope" for disable: ' + e.scope);
          R.log("API / Disabling tracking"),
            S.dispatch(c.LOAD_DIRECTIVE, { trackingDisabled: !0 });
        } else
          R.log("API / Disabling everything"),
            S.dispatch(c.LOAD_DIRECTIVE, { disabled: !0 });
      }),
      (t.log = e => {
        let t = e.level, i = e.match;
        s.isUndefined(t) && (t = "INFO"),
          s.isUndefined(i) && (i = ""),
          R.setLogMatcher(i),
          R.setLogLevel(t);
      }),
      (t.registerModule = e => {
        const t = "custom/" + e.moduleName;
        if (l[t] || u.get(t))
          throw new Error(
            'Module name "' +
              t +
              '" is reserved. Will not be registered as plugin.'
          );
        D.registerApiModule(t, e.module);
      }),
      (t.dataFromSource = e => {
        const t = e.source;
        h.makeAsyncRequest(t), h.resolveRequest(t, e.data);
      }),
      (t.addListener = e => {
        if (!s.isFunction(e.handler))
          throw new Error("A handler function must be supplied");
        (e = s.omit(e, "type")), (e.publicOnly = !0), (e.emitErrors = !0);
        const t = e.handler;
        (e.handler = e => {
          try {
            return t(e);
          } catch (e) {
            throw new z(e);
          }
        }),
          y.on(e);
      }),
      (t.removeListener = e => {
        if (!e.token) throw new Error("Must supply a token to removeListener");
        y.off(e.token);
      }),
      (t.load = e => {
        (e.data = s.extend({}, e.data)),
          d.normalizeClientData(e.data),
          S.dispatch(c.DATA_LOADED, { data: e.data });
      }),
      (t.integrationSettings = e => {
        if (!e.id) throw new Error("id is required");
        if (!e.settings) throw new Error("settings is required");
        S.dispatch(
          c.SET_INTEGRATION_SETTINGS,
          s.extend({}, e.settings, { id: e.id })
        );
      }),
      (t.bucketVisitor = e => {
        if (
          (!e.variationId && s.isUndefined(e.variationIndex)) ||
          (e.variationId && e.variationIndex)
        )
          throw new Error(
            "One of a variationId or a variationIndex is required."
          );
        if (!e.experimentId) throw new Error("An experimentId is required.");
        let t, i, n = e.campaignId;
        if (n) {
          if (((t = k.get(n)), !t))
            throw new Error("Could not find layer " + n);
        } else if (
          ((t = k.getLayerByExperimentId(e.experimentId)), (n = t.id), !n)
        )
          throw new Error(
            "Could not find layer for experiment " + e.experimentId
          );
        if (((i = s.find(t.experiments, { id: e.experimentId })), !i))
          throw new Error(
            "Could not find experiment " + e.experimentId + " in layer " + n
          );
        let r = e.variationId;
        if (s.isUndefined(e.variationIndex)) {
          if (!s.find(i.variations, { id: r }))
            throw new Error(
              "Cound not find variation " +
                r +
                " in experiment " +
                e.experimentId
            );
        } else if (((r = i.variations[e.variationIndex].id), !r))
          throw new Error(
            "Could not find variation at index " +
              e.variationIndex +
              " in experiment " +
              e.experimentId
          );
        O.updateVariationIdMap(n, e.experimentId, r),
          V.getBucketingId() && O.persistVariationIdMap();
      }),
      (t.waitForOriginSync = e => {
        if (!s.isArray(e.canonicalOrigins))
          throw new Error(
            "canonicalOrigins must be an array. Got: " +
              T.stringify(e.canonicalOrigins)
          );
        s.each(e.canonicalOrigins, e => {
          if (!s.isString(e))
            throw new Error(
              "Each item in canonicalOrigins must be a string. Found type " +
                typeof e
            );
        }),
          S.dispatch(c.XDOMAIN_SET_CANONICAL_ORIGINS, {
            canonicalOrigins: e.canonicalOrigins,
          });
      }),
      (t.disableCrossOrigin = () => {
        R.log("API / cross origin tracking is DISABLED"),
          S.dispatch(c.XDOMAIN_SET_DISABLED, { disabled: !0 });
      }),
      (t.activate = () => {
        x.shouldActivate() && !F
          ? (s.forEach(L.getActiveViewStates(), e => {
              w.deactivate(P.get(e.id));
            }),
            S.dispatch(c.RESET_VIEW_STATES),
            g.emitActivateEvent())
          : R.debug("Not activating.");
      }),
      (t.sendEvents = () => {
        g.emitSendEvents();
      }),
      (t.holdEvents = () => {
        g.emitHoldEvents();
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(25);
    t.normalizeClientData = e => {
      !e.listTargetingKeys &&
        e.listTargetingCookies &&
        ((e.listTargetingKeys = n.map(e.listTargetingCookies, e => {
          return { type: r.ListTargetingKeyTypes.COOKIE, key: e };
        })),
        delete e.listTargetingCookies);
    };
  },
  (e, t, i) => {
    function n(e, t, i) {
      const n = u({
                activeViewStates: z.getActiveViewStates(),
                visitorProfile: W.getVisitorProfile(),
                layerStates: H.getLayerStatesForAnalytics(),
              }),
            r = i && i.pageId ? d(i) : z.getActiveViewTags(),
            a = v.extend({}, r, t),
            o = i && i.category ? i.category : D.OTHER;
      return v.extend(n, {
        eventEntityId: i && i.id,
        eventApiName: e,
        eventCategory: o,
        eventTags: a,
      });
    }
    function r(e, t) {
      const i = u({
        activeViewStates: z.getActiveViewStates(),
        visitorProfile: W.getVisitorProfile(),
        layerStates: H.getLayerStatesForAnalytics(),
      });
      return v.extend(i, {
        pageId: e.id,
        pageApiName: e.apiName,
        viewCategory: e.category,
        eventTags: t.metadata,
      });
    }
    function a(e) {
      const t = u({
                activeViewStates: z.getActiveViewStates(),
                visitorProfile: W.getVisitorProfile(),
                layerStates: H.getLayerStatesForAnalytics(),
              }),
            i =
              e.config && e.config.selector
                ? e.config.selector
                : e.eventFilter.selector,
            n = e.apiName,
            r = e.category || D.OTHER,
            a = e.id,
            o = d(e);
      return v.extend(t, {
        eventApiName: n,
        eventCategory: r,
        eventEntityId: a,
        eventTags: o,
        pageId: e.pageId,
        selector: i,
      });
    }
    function o() {
      const e = u({
        activeViewStates: [],
        visitorProfile: W.getVisitorProfile(),
        layerStates: H.getLayerStatesForAnalytics(),
      });
      return v.extend(e, { eventTags: {} });
    }
    function s(e, t, i, n) {
      let r = null, a = null, o = null;
      if (t.experimentId) {
        const s = v.find(n.experiments, { id: t.experimentId });
        if (
          s &&
          ((r = s.name || null), (o = s.integrationSettings), t.variationId)
        ) {
          const c = v.find(s.variations, { id: t.variationId });
          c && (a = c.name || null);
        }
      }
      const u = V.getReferrer() || A.getReferrer(),
            l = {
              sessionId: B.getSessionId(),
              decisionTicketAudienceIds: i.audienceIds,
              visitorId: $.getRandomId(),
              decisionId: e,
              activationId: G.getActivationId(),
              namespace: G.getNamespace(),
              timestamp: y.now(),
              pageId: i.pageId || null,
              variationId: t.variationId,
              variationName: a,
              experimentId: t.experimentId,
              experimentName: r,
              layerId: t.layerId,
              layerName: n.name,
              layerPolicy: n.policy,
              accountId: G.getAccountId(),
              projectId: G.getProjectId(),
              revision: String(G.getRevision()),
              clientName: U.getClientName(),
              clientVersion: U.getClientVersion(),
              referrer: u,
              integrationStringVersion: n.integrationStringVersion || 1,
              integrationSettings: v.extend({}, n.integrationSettings, o),
            };
      return l;
    }
    function c(e, t) {
      const i = v.extend({}, e, {
        isLayerHoldback: t,
        isGlobalHoldback: !1,
        clientName: v.isNull(e.clientName) ? S.NAME : e.clientName,
        integrationStringVersion: v.isNull(e.integrationStringVersion)
          ? 1
          : e.integrationStringVersion,
        anonymizeIP: v.isNull(G.getAnonymizeIP()) ? void 0 : G.getAnonymizeIP(),
        activationId: G.getActivationId(),
        decisionTicketAudienceIds: [],
        sessionId: B.getSessionId(),
        activeViewStates: [],
        userFeatures: f(W.getVisitorProfile()),
        layerStates: H.getLayerStatesForAnalytics(),
      });
      return i;
    }
    function u(e) {
      const t = V.getReferrer() || A.getReferrer(),
            i = {
              eventId: M.generate(),
              timestamp: y.now(),
              revision: G.getRevision(),
              clientName: U.getClientName(),
              clientVersion: U.getClientVersion(),
              projectId: G.getProjectId(),
              accountId: G.getAccountId(),
              activationId: G.getActivationId(),
              sessionId: B.getSessionId(),
              isGlobalHoldback: G.isGlobalHoldback(),
              namespace: G.getNamespace(),
              referrer: t,
              visitorId: $.getRandomId(),
              activeViewStates: e.activeViewStates,
              layerStates: e.layerStates,
              userFeatures: f(e.visitorProfile),
            };
      return i;
    }
    function l(e) {
      const t = z.getViewState(e), i = t && t.isActive ? t.metadata : {};
      return i;
    }
    function d(e) {
      const t = {};
      return e.pageId ? l(e.pageId) : t;
    }
    function f(e) {
      const t = j.getAllPlugins(R.PluginTypes.visitorProfileProviders), i = v.filter(t, { shouldTrack: !0 }), n = { id: null, type: null, name: "", value: null, shouldIndex: !0 };
      return v.reduce(
        i,
        (t, i) => {
          try {
            const r = i.provides;
            const a = e[r];
            let o = [];
            if (!v.isUndefined(a)) {
              v.isObject(a)
                ? (o = v.map(a, (e, t) => {
                    const i = v.isObject(e) ? e : { value: e };
                    return v.extend({}, { type: r, name: t }, i);
                  }))
                : o.push({ type: r, value: a });
              const s = v(o)
                .map(e => {
                  return v.pick(v.extend({}, n, e), v.keys(n));
                })
                .filter(e => {
                  return !!e.value;
                })
                .value();
              t = t.concat(s);
            }
          } catch (e) {
            L.warn("Error evaluating userFeature against visitorProfile:", e);
          }
          return t;
        },
        []
      );
    }
    function p(e, t, i) {
      const n = g(e, i);
      L.debug(
        "Found " +
          n.length +
          " analytics integrations defining a " +
          e +
          " hook"
      ),
        L.debug("Calling each with data: ", t),
        v.each(n, e => {
          try {
            L.debug("Calling plugin: " + e.name),
              e.hookFn(t),
              L.debug("Called plugin: " + e.name);
          } catch (e) {
            L.error(e);
          }
        });
    }
    function g(e, t) {
      const i = [];
      return v.each(
        j.getAllPlugins(R.PluginTypes.analyticsTrackers),
        (n, r) => {
          if (n[e] && (!t || !n[t]))
            try {
              i.push({ name: r, hookFn: T.evaluate(n[e]) });
            } catch (e) {
              L.error(e);
            }
        }
      ),
      i
    ;
    }
    function h(e, t, i) {
      const n = _(e, t);
      L.debug(
        "Found " +
          n.length +
          " analytics integrations  defining a trackLayerDecision " +
          e +
          " timing of " +
          t.join("|")
      ),
        L.debug("Calling each with data: ", i),
        v.each(n, e => {
          try {
            L.debug("Calling plugin: " + e.name),
              e.hookFn(i),
              L.debug("Called plugin: " + e.name);
          } catch (e) {
            L.error(e);
          }
        });
    }
    function _(e, t) {
      const i = [];
      return v.each(
        j.getAllPlugins(R.PluginTypes.analyticsTrackers),
        (n, r) => {
          v.includes(t, n[e]) &&
            i.push({ name: r, hookFn: n.trackLayerDecision });
        }
      ),
      i
    ;
    }
    var v = i(2);
    const E = i(7);
    const m = i(86);
    const I = i(71);
    var y = i(24);
    var S = i(32);
    var T = i(16);
    var A = i(80);
    var R = i(25);
    var D = i(73);
    const b = i(87);
    const w = i(111);
    const O = i(112);
    const C = i(9);
    const N = i(113);
    var L = i(23);
    const P = (i(83), i(12).Promise);
    var V = i(99);
    const k = i(114);
    const x = i(116);
    const F = i(115);
    var M = i(5);
    var U = T.get("stores/client_metadata");
    var G = T.get("stores/global");
    var B = T.get("stores/session");
    var z = T.get("stores/view");
    var j = T.get("stores/plugins");
    var H = T.get("stores/layer");
    const K = T.get("stores/layer_data");
    const Y = T.get("stores/observed_redirect");
    const q = T.get("stores/pending_redirect");
    var W = T.get("stores/visitor");
    const X = T.get("stores/directive");
    const Q = T.get("stores/event_data");
    var $ = T.get("stores/visitor_id");
    const J = "COOKIE";
    const Z = !0;
    const ee = 1e3;
    (t.trackClientActivation = () => {
      if (X.shouldSendTrackingData()) {
        const e = o();
        return p("onClientActivation", e), e;
      }
    }),
      (t.trackCustomEvent = (e, t, i) => {
        (t = t || {}), i || (i = Q.getByApiName(e));
        const r = n(e, t, i),
              a = {
                name: e,
                type: O.CUSTOM,
                category: r.eventCategory,
                tags: v.omit(r.eventTags, "revenue"),
              };
        if (
          (v.isUndefined(t.revenue) || (a.revenue = t.revenue),
          m.emitAnalyticsEvent(
            {
              name: i ? i.name || i.apiName : e,
              apiName: i ? i.apiName : void 0,
              type: O.CUSTOM,
              tags: v.omit(r.eventTags, "revenue"),
              category: r.eventCategory,
              metrics: a.revenue ? { revenue: a.revenue } : {},
            },
            !X.shouldSendTrackingData()
          ),
          X.shouldSendTrackingData())
        )
          return I.addEvent(a), p("onCustomEvent", r), r;
      }),
      (t.trackDecisionEvent = (e, t, i) => {
        i || (i = K.get(e.layerId));
        const n = M.generate();
        C.dispatch(E.RECORD_LAYER_DECISION_EVENT_ID, {
          layerId: e.layerId,
          pageId: t.pageId,
          decisionId: n,
        });
        const r = s(n, e, t, i), a = q.isExpectingRedirect(), o = q.getLayerId(), u = N.description(i);
        if (
          (a &&
            o === i.id &&
            (k.persist(r, J),
            L.log("Relaying decision for redirect Campaign", u)),
          !X.shouldSendTrackingData())
        )
          return void L.log(
            "Analytics / Not tracking decision for Campaign",
            N.description(i)
          );
        const l = c(r, e.isLayerHoldback);
        if (a && o === i.id) {
          var d = F.TrackLayerDecisionTimingFlags.preRedirectPolicy;
          (l.timing = d),
            h(
              d,
              [F.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],
              l
            ),
            L.log("Called trackLayerDecision for redirect Campaign", u, l);
        } else {
          var d = F.TrackLayerDecisionTimingFlags.nonRedirectPolicy;
          (l.timing = d),
            h(d, [F.NonRedirectPolicies.TRACK_IMMEDIATELY], l),
            L.log("Called trackLayerDecision for non-redirect Campaign", u, l);
        }
      }),
      (t.trackPostRedirectDecisionEvent = () => {
      if (!X.shouldSendTrackingData()) return P.resolve();
      if (Y.hasTracked()) return P.resolve();
      const e = Y.get();
      if (!e) return P.resolve();
      let t = c(e, !1);
      const i = F.TrackLayerDecisionTimingFlags.postRedirectPolicy;
      if (
        ((t.timing = i),
        h(i, [F.PostRedirectPolicies.TRACK_IMMEDIATELY], t),
        Z)
      ) {
        const n = new P(e => {
                  const t = b.on({
                    filter: { type: w.TYPES.LIFECYCLE, name: "originsSynced" },
                    handler() {
                      e(), b.off(t);
                    },
                  });
                }),
              r = x.makeTimeoutPromise(ee);
        return P.race([n, r])
          .then(
            () => {
              L.log("Calling trackers after successful sync");
            },
            e => {
              L.warn("Calling trackers after failed sync:", e);
            }
          )
          .then(() => {
            (t = c(e, !1)),
              (t.timing = F.TrackLayerDecisionTimingFlags.postRedirectPolicy),
              h(
                F.TrackLayerDecisionTimingFlags.postRedirectPolicy,
                [F.PostRedirectPolicies.TRACK_AFTER_SYNC],
                t
              ),
              C.dispatch(E.REGISTER_TRACKED_REDIRECT_DATA);
          })
          ["catch"](e => {
            L.error("Error when calling trackers after sync:", e);
          });
      }
      return (
        h(
          F.TrackLayerDecisionTimingFlags.postRedirectPolicy,
          [F.PostRedirectPolicies.TRACK_AFTER_SYNC],
          t
        ),
        C.dispatch(E.REGISTER_TRACKED_REDIRECT_DATA),
        P.resolve()
      );
    }),
      (t.trackClickEvent = e => {
        const t = a(e),
              i = {
                name: e.apiName,
                type: e.eventType,
                category: t.eventCategory,
                tags: t.eventTags,
              };
        if (
          (m.emitAnalyticsEvent(
            {
              name: e.name || e.apiName,
              apiName: e ? e.apiName : void 0,
              type: e.eventType,
              category: t.eventCategory,
              tags: t.eventTags,
              metrics: {},
            },
            !X.shouldSendTrackingData()
          ),
          X.shouldSendTrackingData())
        )
          return I.addEvent(i), p("onClickEvent", t), t;
      }),
      (t.trackViewActivation = (e, t) => {
        if ((t || (t = z.getViewState(e.id)), !t.isActive))
          return void L.debug("Inactive view passed to `trackViewActivation`");
        const i = r(e, t);
        return (
          m.emitAnalyticsEvent(
            {
              name: e.name || i.pageApiName,
              apiName: i.pageApiName,
              type: O.PAGEVIEW,
              category: i.viewCategory,
              tags: i.eventTags,
              metrics: {},
            },
            !X.shouldSendTrackingData()
          ),
          X.shouldSendTrackingData()
            ? (I.addEvent({
                name: i.pageApiName,
                type: O.PAGEVIEW,
                category: i.viewCategory,
                tags: i.eventTags,
              }),
              C.dispatch(E.TRACK_VIEW_ACTIVATED_EVENT, {
                pageId: e.id,
                eventData: i,
              }),
              p("onPageActivated", i),
              i)
            : void 0
        );
      });
  },
  (e, t) => {
    t.TYPES = {
      ACTION: "action",
      ANALYTICS: "analytics",
      EDITOR: "editor",
      LIFECYCLE: "lifecycle",
    };
  },
  (e, t) => {
    e.exports = {
      CLICK: "click",
      CUSTOM: "custom",
      ENGAGEMENT: "engagement",
      PAGEVIEW: "pageview",
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(24), o = i(16), s = i(9), c = o.get("stores/global"), u = o.get("stores/session"), l = 2e3;
    (t.recordLayerDecision = (e, t, i) => {
      return (
        s.dispatch(r.RECORD_LAYER_DECISION, {
          layerId: e,
          decision: i,
          decisionTicket: t,
          sessionId: u.getSessionId(),
          activationId: c.getActivationId(),
          timestamp: a.now(),
          revision: c.getRevision(),
          namespace: c.getNamespace(),
          pageId: t.pageId,
        }),
        i
      );
    }),
      (t.relatedAudienceIds = e => {
        const t = {}, i = ["and", "or", "not"];
        return n.each(e.experiments, e => {
          n.each(n.flattenDeep(e.audienceIds), e => {
            n.includes(i, e) || (t[e] = !0);
          });
        }),
        n.keys(t)
      ;
      }),
      (t.getActivationTimeout = e => {
        const t = e.activation;
        return t && null !== t.timeout && void 0 !== t.timeout ? t.timeout : l;
      }),
      (t.description = e => {
        return (e.name ? '"' + e.name + '" ' : "") + "(" + e.id + ")";
      }),
      (t.createSingle = (e, t, i) => {
        const n = {
          id: e,
          policy: "single_experiment",
          holdback: 0,
          experiments: [
            { id: t || "", variations: [{ id: i || "", actions: [] }] },
          ],
        };
        return n;
      }),
      (t.createLayerState = (e, t, i, n) => {
        const r = {
          layerId: e,
          decision: {
            layerId: e,
            experimentId: t,
            variationId: i,
            isLayerHoldback: n || !1,
          },
          decisionTicket: { audienceIds: [] },
        };
        return r;
      }),
      (t.getIntegrationTypes = e => {
        return n.keys(
          n.reduce(
            n.keys(e.integrationSettings),
            (e, t) => {
              return n.isNaN(Number(t)) || (t = "custom"), (e[t] = 1), e;
            },
            {}
          )
        );
      });
  },
  (e, t, i) => {
    function n(e) {
      try {
        var t = r(e);
      } catch (e) {
        return (
          v.error("Relay / Error computing redirect relay cookie: ", e),
          void p.emitError(e)
        );
      }
      v.debug("Relay / Setting redirect relay cookie:", t);
      try {
        f.set(h.COOKIES.REDIRECT, t, { maxAge: 5, encodeValue: !1 });
      } catch (e) {
        v.error("Relay / Failed to set redirect relay cookie", e),
          p.emitError(e);
      }
    }
    function r(e) {
      const t = [],
            i = l.reduce(
              e,
              (e, i, n) => {
                const r = S[n];
                return r
                  ? (r.isMulti
                      ? l.forEach(i, (t, i) => {
                          (t = r.valueToValueString
                            ? r.valueToValueString(t, i)
                            : String(t)),
                            l.isNull(t) ||
                              ((t = (r.encodeValueString || encodeURIComponent)(t)),
                              e.push(
                                encodeURIComponent(r.relayName + I + i) + "=" + t
                              ));
                        })
                      : l.isNull(i) ||
                        ((i = (r.valueToValueString || String)(i)),
                        (i = (r.encodeValueString || encodeURIComponent)(i)),
                        e.push(r.relayName + "=" + i)),
                    e)
                  : (t.push(n), e);
              },
              []
            );
      if (t.length)
        throw new Error("Relay / Don't know how to relay some fields:", t);
      return i.sort(), i.join("&");
    }
    function a() {
      const e = f.get(h.COOKIES.REDIRECT, !1);
      if (e) return v.log("Relay / Found redirect cookie:", e), e;
    }
    function o(e) {
      const t = {}, i = e.split("&");
      return l.forEach(i, e => {
        const i = e.split("=");
        if (2 !== i.length)
          return void v.warn("Relay / Skipping invalid segment:", e);
        const n = f.safeDecodeURIComponent(i[0]);
        let r = T[n];
        if (
          !r &&
          ((r = l.find(y, e => {
            return e.isMulti && 0 === n.indexOf(e.relayName + I);
          })),
          !r)
        )
          return void v.warn(
            "Relay / Skipping segment with unknown field identifier:",
            e,
            n
          );
        let a = i[1];
        try {
          if (r.isMulti) {
            t[r.name] = t[r.name] || {};
            const o = n.substring(r.relayName.length + I.length);
            (a = (r.decodeValueString || f.safeDecodeURIComponent)(a)),
              (a = (r.valueFromValueString || l.identity)(a, o)),
              (t[r.name][o] = a);
          } else (a = (r.decodeValueString || f.safeDecodeURIComponent)(a)), (a = (r.valueFromValueString || l.identity)(a)), (t[r.name] = a);
        } catch (t) {
          return (
            v.warn(
              "Relay / Skipping segment due to decode or parse error:",
              e,
              t
            ),
            void p.emitError(t)
          );
        }
      }),
      t;
    }
    function s(e, t) {
      let i = null;
      if (e) {
        const n = m.getPlugin(h.PluginTypes.analyticsTrackers, t);
        if (n && l.isFunction(n.serializeSettings))
          try {
            i = n.serializeSettings(e);
          } catch (e) {
            v.warn(
              "Analytics / Failed to persist integrationSettings for plugin:",
              t,
              e
            );
          }
      }
      return i;
    }
    function c(e, t) {
      let i = null;
      const n = m.getPlugin(h.PluginTypes.analyticsTrackers, t);
      if (n && l.isFunction(n.deserializeSettings))
        try {
          i = n.deserializeSettings(e);
        } catch (e) {
          v.warn(
            "Analytics / Failed to persist integrationSettings for plugin:",
            t,
            e
          );
        }
      return i;
    }
    function u(e) {
      const t = e.pageId || void 0;
      _.dispatch(d.RECORD_LAYER_DECISION, {
        layerId: e.layerId,
        decision: {
          layerId: e.layerId,
          experimentId: e.experimentId,
          variationId: e.variationId,
          isLayerHoldback: !1,
        },
        decisionTicket: {
          audienceIds: e.decisionTicketAudienceIds,
          bucketingId: e.visitorId,
          globalHoldback: 0,
          preferredVariationMap: void 0,
          pageId: t,
          activationId: e.activationId,
        },
        sessionId: e.sessionId,
        activationId: e.activationId,
        timestamp: e.timestamp,
        revision: e.revision,
        namespace: e.namespace,
        pageId: t,
      }),
        _.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID, {
          layerId: e.layerId,
          pageId: t,
          decisionId: e.decisionId,
        }),
        _.dispatch(d.ACTION_EXECUTED, {
          sessionId: e.sessionId,
          layerId: e.layerId,
          pageId: e.pageId,
          timestamp: e.timestamp,
          activationId: e.activationId,
        });
    }
    var l = i(2);
    var d = i(7);
    var f = i(75);
    var p = i(86);
    const g = i(16);
    var h = i(25);
    var _ = i(9);
    var v = i(23);
    const E = i(115);
    var m = g.get("stores/plugins");
    var I = ".";

    var y = [
      { name: "sessionId", relayName: "s" },
      {
        name: "decisionTicketAudienceIds",
        relayName: "as",
        valueToValueString(e) {
          return l.map(e, encodeURIComponent).join(",");
        },
        encodeValueString: l.identity,
        decodeValueString: l.identity,
        valueFromValueString(e) {
          return l.map(e.split(","), f.safeDecodeURIComponent);
        },
      },
      { name: "decisionId", relayName: "d" },
      { name: "activationId", relayName: "aId" },
      { name: "pageId", relayName: "vId", isNullable: !0 },
      { name: "variationId", relayName: "v", isNullable: !0 },
      { name: "referrer", relayName: "r" },
      { name: "timestamp", relayName: "t", valueFromValueString: Number },
      { name: "visitorId", relayName: "i" },
      { name: "projectId", relayName: "p" },
      { name: "revision", relayName: "n" },
      { name: "clientName", relayName: "cN", isNullable: !0 },
      { name: "clientVersion", relayName: "cV" },
      { name: "namespace", relayName: "ns" },
      { name: "accountId", relayName: "a" },
      { name: "layerId", relayName: "l" },
      { name: "layerName", relayName: "lN", isNullable: !0 },
      { name: "layerPolicy", relayName: "lP" },
      { name: "experimentId", relayName: "x", isNullable: !0 },
      { name: "experimentName", relayName: "xN", isNullable: !0 },
      { name: "variationName", relayName: "vN", isNullable: !0 },
      {
        name: "integrationStringVersion",
        relayName: "isv",
        valueFromValueString: Number,
        isNullable: !0,
      },
      {
        name: "integrationSettings",
        relayName: "iS",
        isMulti: !0,
        valueToValueString: s,
        valueFromValueString: c,
        isNullable: !0,
      },
    ];

    var S = {};
    var T = {};
    l.forEach(y, e => {
      (S[e.name] = e), (T[e.relayName] = e);
    }),
      (t.persist = (e, t) => {
        t === E.RedirectRelayMedia.COOKIE
          ? n(e)
          : v.error("Relay / Unsupported redirect relay medium: " + t);
      }),
      (t.load = e => {
        if ((e || (e = a()), e)) {
          const t = o(e);
          if (t) {
            const i = [];
            return l.forEach(y, e => {
              (l.isNull(t[e.name]) || l.isUndefined(t[e.name])) &&
                (e.isNullable
                  ? (t[e.name] = null)
                  : (delete t[e.name], i.push(e.name)));
            }),
            i.length
              ? void v.error(
                  "Relay / Observed redirect data with missing fields:",
                  i
                )
              : (_.dispatch(d.LOAD_REDIRECT_DATA, t),
                _.dispatch(d.ADD_CLEANUP_FN, {
                  lifecycle: h.Lifecycle.postVisitorProfileLoad,
                  cleanupFn() {
                    u(t);
                  },
                }),
                t)
          ;
          }
        }
      });
  },
  (e, t, i) => {
    const n = i(8);
    (t.TrackLayerDecisionTimingFlags = n({
      preRedirectPolicy: null,
      postRedirectPolicy: null,
      nonRedirectPolicy: null,
    })),
      (t.PreRedirectPolicies = n({
        PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT: null,
        PERSIST_BEFORE_REDIRECT: null,
      })),
      (t.PostRedirectPolicies = n({
        TRACK_IMMEDIATELY: null,
        TRACK_AFTER_SYNC: null,
      })),
      (t.NonRedirectPolicies = n({ TRACK_IMMEDIATELY: null })),
      (t.RedirectRelayMedia = n({ COOKIE: null }));
  },
  (e, t, i) => {
    const n = i(12).Promise, r = i(40);
    t.makeTimeoutPromise = e => {
      return new n((t, i) => {
        r.setTimeout(() => {
          i(new Error("Timed out after " + e + " ms"));
        }, e);
      });
    };
  },
  (e, t, i) => {
    function n(e) {
      const t = ["type", "selector", "attributes", "value"], i = r.extend({}, e);
      return (i.changeSet = r.map(e.changeSet, e => {
        return r.pick(l.dereferenceChangeId(e), t);
      })),
      i
    ;
    }
    var r = i(2);
    const a = i(16);
    const o = a.get("stores/audience_data");
    const s = i(87);
    const c = i(111);
    const u = i(96);
    var l = i(98);
    (t.emitLayerDecided = e => {
      const t = e.decisionTicket ? e.decisionTicket.audienceIds : [],
            i = r.map(t, e => {
              return { id: e, name: o.get(e).name };
            }),
            n = {
              type: c.TYPES.LIFECYCLE,
              name: "layerDecided",
              data: r.extend(e, { audiences: i }),
            },
            a = l.translateLayerEventToCampaignEvent(n);
      s.emit(n), s.emit(a);
    }),
      (t.emitViewActivated = e => {
        const t = { type: c.TYPES.LIFECYCLE, name: "viewActivated", data: e }, i = l.translateViewActivatedToPageActivated(t);
        s.emit(t), s.emit(i);
      }),
      (t.emitViewsActivated = e => {
        const t = { type: c.TYPES.LIFECYCLE, name: "viewsActivated", data: e };
        s.emit(t);
      }),
      (t.emitPageDeactivated = e => {
        const t = { type: c.TYPES.LIFECYCLE, name: "pageDeactivated", data: e };
        s.emit(t);
      }),
      (t.emitActivateEvent = () => {
        s.emit({ type: c.TYPES.LIFECYCLE, name: "activate" }, !0);
      }),
      (t.emitActivatedEvent = () => {
        s.emit({ type: c.TYPES.LIFECYCLE, name: "activated" });
      }),
      (t.emitInitializedEvent = () => {
        const e = { type: c.TYPES.LIFECYCLE, name: "initialized" };
        window.optimizely && (window.optimizely.initialized = !0), s.emit(e);
      }),
      (t.emitOriginsSyncedEvent = () => {
        const e = { type: c.TYPES.LIFECYCLE, name: "originsSynced" };
        s.emit(e);
      }),
      (t.emitActionAppliedEvent = e => {
        const t = {
          type: e.type,
          campaignId: e.layerId,
          pageId: e.pageId,
          experimentId: e.experimentId,
          variationId: e.variationId,
        };
        u.defineProperty(
          t,
          "changes",
          () => {
            return n(e).changeSet;
          },
          "actionAppliedEvent"
        );
        const i = { type: c.TYPES.ACTION, name: "applied", data: t };
        s.emit(i);
      }),
      (t.emitActionsForDecisionAppliedEvent = (e, t) => {
        const i = { decision: e };
        u.defineProperty(
          i,
          "actions",
          () => {
            return r.map(t, n);
          },
          "appliedAllForDecisionEvent"
        );
        const a = {
          type: c.TYPES.ACTION,
          name: "appliedAllForDecision",
          data: i,
        };
        s.emit(a);
      }),
      (t.emitSendEvents = () => {
        const e = { type: c.TYPES.ANALYTICS, name: "sendEvents" };
        s.emit(e);
      }),
      (t.emitHoldEvents = () => {
        const e = { type: c.TYPES.ANALYTICS, name: "holdEvents" };
        s.emit(e);
      });
  },
  (e, t, i) => {
    function n() {
      const e = Boolean(m.result(window.optimizely, "initialized"));
      R.dispatch(I.LOAD_DIRECTIVE, { alreadyInitialized: e });
    }
    function r() {
      R.dispatch(I.LOAD_DIRECTIVE, {
        mutationObserverAPISupported: C.isMutationObserverAPISupported(),
      });
    }
    function a() {
      let e = C.getUserAgent() || "";
      if (!m.isString(e))
        return void D.warn("Directive / userAgent not a string");
      e = e.toLowerCase();
      const t = [
                "googlebot",
                "yahoo! slurp",
                "bingbot",
                "bingpreview",
                "msnbot",
                "keynote",
                "ktxn",
                "khte",
                "gomezagent",
                "alertsite",
                "yottaamonitor",
                "pingdom.com_bot",
                "aihitbot",
                "baiduspider",
                "adsbot-google",
                "mediapartners-google",
                "applebot",
                "catchpoint",
                "phantomjs",
                "moatbot",
                "facebookexternalhit",
              ],
            i = t => {
              if (m.includes(e, t))
                return D.warn("Directive / Matches bot:", t), !0;
            };
      m.some(t, i) &&
        (D.log("Directive / Disabling tracking"),
        R.dispatch(I.LOAD_DIRECTIVE, { trackingDisabled: !0 }));
    }
    function o() {
      const e = S.get(A.COOKIES.OPT_OUT), t = w.getQueryParamValue(N.OPT_OUT), i = "You have successfully opted out of Optimizely for this domain.", n = "You are NOT opted out of Optimizely for this domain.", r = "true" === t || "false" === t;
      if (r) {
        const a = "true" === t;
        R.dispatch(I.LOAD_DIRECTIVE, { shouldOptOut: a }), C.alert(a ? i : n);
      } else e && R.dispatch(I.LOAD_DIRECTIVE, { shouldOptOut: "true" === e });
    }
    function s() {
      let e = !1;
      const t = [N.AB_PREVIEW, N.DISABLE];
      t.push(N.EDITOR);
      for (let i = 0; i < t.length; i++)
        if ("true" === w.getQueryParamValue(t[i])) {
          D.warn("Directive / Not activating because " + t[i] + " is set."),
            (e = !0);
          break;
        }
      R.dispatch(I.LOAD_DIRECTIVE, { disabled: e });
    }
    function c() {
      R.dispatch(I.LOAD_DIRECTIVE, { isPreview: !1 });
    }
    function u() {
      const e = w.getQueryParamValue(N.LEGACY_PREVIEW);
      e && D.log("Directive / Is legacy preview mode"),
        R.dispatch(I.LOAD_DIRECTIVE, { isLegacyPreview: !!e });
    }
    function l() {
      R.dispatch(I.LOAD_DIRECTIVE, { isEditor: !1 });
    }
    function d() {
      R.dispatch(I.LOAD_DIRECTIVE, { isSlave: !1 });
    }
    function f() {
      const e = C.getGlobal("optlyDesktop"), t = !(!e || m.isUndefined(e["p13nInner"]));
      t && D.log("Directive / Is running in desktop app editor"),
        R.dispatch(I.LOAD_DIRECTIVE, { isRunningInDesktopApp: t });
    }
    function p() {
      const e = "true" === w.getQueryParamValue(N.EDITOR_V2);
      e && D.log("Directive / Is running in editor"),
        R.dispatch(I.LOAD_DIRECTIVE, { isRunningInV2Editor: e });
    }
    function g() {
      const e = S.get(A.COOKIES.TOKEN) || null, t = w.getQueryParamValue(N.TOKEN) || e;
      R.dispatch(I.LOAD_DIRECTIVE, { projectToken: t });
    }
    function h() {
      const e = S.get(A.COOKIES.PREVIEW);
      let t = [];
      const i = w.getQueryParamValue(N.FORCE_AUDIENCES);
      if (i) t = S.safeDecodeURIComponent(i).split(",");
      else if (e)
        try {
          const n = O.parse(e);
          t = n.forceAudienceIds;
        } catch (t) {
          const r = new b(
                    "Failed to parse previewCookie in registerForceAudienceIds: " + e
                  ),
                a = { originalMessage: t.message, userError: !0 };
          y.emitError(r, a);
        }
      t.length &&
        (D.log("Directive / Force Audience IDs:", t),
        R.dispatch(I.LOAD_DIRECTIVE, { forceAudienceIds: t }));
    }
    function _() {
      const e = S.get(A.COOKIES.PREVIEW);
      let t = [];
      const i = w.getQueryParamValue(N.FORCE_VARIATIONS);
      if (i) t = S.safeDecodeURIComponent(i).split(",");
      else if (e)
        try {
          const n = O.parse(e);
          t = n.forceVariationIds;
        } catch (t) {
          const r = new b(
                    "Failed to parse previewCookie in registerForceVariationIds: " + e
                  ),
                a = { originalMessage: t.message, userError: !0 };
          y.emitError(r, a);
        }
      t.length &&
        (D.log("Directive / Force Variation IDs:", t),
        R.dispatch(I.LOAD_DIRECTIVE, { forceVariationIds: t }));
    }
    function v() {
      const e = w.getQueryParamValue(N.FORCE_TRACKING);
      e && R.dispatch(I.LOAD_DIRECTIVE, { forceTracking: e });
    }
    function E() {
      let e = "OFF";
      const t = w.getQueryParamValue("optimizely_log");
      if (t) {
        const i = t.split(":");
        "" !== i[0] && (e = String(i[0]).toUpperCase()),
          "undefined" != typeof i[1] && D.setLogMatch(i[1]);
      }
      D.setLogLevel(e);
    }
    var m = i(2);
    var I = i(7);
    var y = i(86);
    var S = i(75);
    const T = i(76).create;
    var A = i(25);
    var R = i(9);
    var D = i(23);
    var b = (t.JSONParseError = T("JSONParseError"));
    var w = i(119);
    var O = i(26);
    var C = i(40);

    var N = {
      AB_PREVIEW: "optimizely_show_preview",
      DISABLE: "optimizely_disable",
      EDITOR: "optimizely_editor",
      EDITOR_V2: "optimizely_p13n",
      FORCE_AUDIENCES: "optimizely_x_audiences",
      FORCE_VARIATIONS: "optimizely_x",
      LEGACY_PREVIEW: "optimizely_show_preview",
      OPT_OUT: "optimizely_opt_out",
      PREVIEW_LAYER_IDS: "optimizely_preview_layer_ids",
      TOKEN: "optimizely_token",
      FORCE_TRACKING: "optimizely_force_tracking",
    };

    t.populateDirectiveData = () => {
      E(),
        a(),
        n(),
        r(),
        o(),
        s(),
        l(),
        c(),
        u(),
        d(),
        f(),
        p(),
        g(),
        h(),
        _(),
        v();
    };
    const L = 31536e3;
    t.setOptOut = e => {
      e
        ? (D.warn("Directive / Opting out"),
          S.set(A.COOKIES.OPT_OUT, "true", { maxAge: 10 * L }, !0))
        : S.remove(A.COOKIES.OPT_OUT),
        R.dispatch(I.LOAD_DIRECTIVE, { shouldOptOut: e });
    };
  },
  (e, t, i) => {
    const n = i(84), r = i(40);
    (t.getLanguage = () => {
      return r.getNavigatorLanguage();
    }),
      (t.getQueryParams = n.getQueryParams),
      (t.getQueryParamValue = n.getQueryParamValue),
      (t.getUrl = () => {
        return r.getHref();
      });
  },
  (e, t, i) => {
    function n(e) {
      return e && e.engine
        ? e.engine
        : _
        ? "edge-tracking"
        : h
        ? "edge-helper"
        : f.getClientName();
    }
    const r = i(2);
    const a = i(76).BaseError;
    const o = i(24);
    const s = i(16);
    const c = i(80);
    const u = i(23);
    const l = i(40);
    const d = i(91);
    var f = s.get("stores/client_metadata");
    const p = s.get("stores/global");
    const g = "https://errors.client.optimizely.com";
    var h = !1;
    var _ = !1;
    t.handleError = (e, t) => {
      function i() {
        return d
          .request({
            url: g + "/log",
            method: "POST",
            data: v,
            contentType: "application/json",
          })
          .then(
            e => {
              u.log("Error Monitor / Logged error with response: ", e);
            },
            e => {
              u.error("Failed to log error, response was: ", e);
            }
          );
      }
      const s = e.name || "Error";
      let h = e.message || "";
      let _ = e.stack || null;
      e instanceof a &&
        (h instanceof Error
          ? ((h = h.message), (_ = e.message.stack))
          : (_ = null));

      var v = {
          timestamp: o.now(),
          clientEngine: n(t),
          clientVersion: f.getClientVersion(),
          accountId: p.getAccountId(),
          projectId: p.getProjectId(),
          errorClass: s,
          message: h,
          stacktrace: _,
        };

      const E = r.map(p.getExperimental(), (e, t) => {
        return { key: "exp_" + t, value: String(e) };
      });

      t &&
        r.forEach(
          t,
          (e, t) => {
            r.isObject(e) || E.push({ key: t, value: String(e) });
          },
          []
        ),
        r.isEmpty(E) || (v.metadata = E),
        u.error("Logging error", v),
        c.isLoaded() ? i() : l.addEventListener("load", i);
    };
  },
  (e, t, i) => {
    const n = i(2);
    t.create = (e, t, i, r) => {
      const a = n.extend({ category: "other" }, r, {
        id: e,
        apiName: t,
        eventType: i,
      });
      return a;
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(16), o = i(25), s = i(87), c = i(9);
    (t.registerApiModule = (e, t) => {
      n.isArray(t) && (t = a.evaluate(t)),
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.apiModules,
          name: e,
          plugin: t,
        });
    }),
      (t.registerDependency = (e, t) => {
        const i = a.get(e);
        i || a.register(e, t);
      }),
      (t.registerVisitorProfileProvider = e => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.visitorProfileProviders,
          name: e.provides,
          plugin: e,
        });
      }),
      (t.registerViewProvider = e => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.viewProviders,
          name: e.provides,
          plugin: e,
        });
      }),
      (t.registerAudienceMatcher = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.audienceMatchers,
          name: e,
          plugin: t,
        });
      }),
      (t.registerViewMatcher = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.viewMatchers,
          name: e,
          plugin: t,
        });
      }),
      (t.registerAnalyticsTracker = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.analyticsTrackers,
          name: e,
          plugin: t,
        });
      }),
      (t.registerViewTagLocator = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.viewTagLocators,
          name: e,
          plugin: t,
        });
      }),
      (t.registerAudiencePlugin = e => {
      e.dependencies &&
        n.each(e.dependencies, (e, i) => {
          t.registerDependency(i, e);
        });
      let i;
      const r = "vendor." + e.vendor;
      (i = n.isString(e.provider)
        ? a.get(e.provider)(e.vendor)
        : n.isFunction(e.provider)
        ? e.provider(e.vendor)
        : n.cloneDeep(e.provider)),
        t.registerVisitorProfileProvider(n.extend(i, { provides: r }));
      let o;
      o = n.isString(e.matcher) ? a.get(e.matcher) : e.matcher;
      const s = {
        fieldsNeeded: [r],
        match(e, t) {
          return o(e[r], t);
        },
      };
      t.registerAudienceMatcher(r, s);
    }),
      (t.registerWidget = e => {
        n.isArray(e) && (e = a.evaluate(e));
        const t = s.on({
                  filter: { type: "showWidget", name: e.widgetId },
                  handler: e.showFn,
                }),
              i = s.on({
                filter: { type: "hideWidget", name: e.widgetId },
                handler: e.hideFn,
              });
        return { showToken: t, hideToken: i };
      }),
      (t.registerChangeApplier = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.changeAppliers,
          name: e,
          plugin: t,
        });
      }),
      (t.registerDecider = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.deciders,
          name: e,
          plugin: t,
        });
      }),
      (t.registerEventImplementation = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.eventImplementations,
          name: e,
          plugin: t,
        });
      }),
      (t.registerViewTrigger = (e, t) => {
        c.dispatch(r.REGISTER_PLUGIN, {
          type: o.PluginTypes.viewTriggers,
          name: e,
          plugin: t,
        });
      });
  },
  (e, t, i) => {
    function n(e, t) {
      r.forEach(e, e => {
        if (e.eventType !== d.CUSTOM) {
          const i = _.getPlugin(l.PluginTypes.eventImplementations, e.eventType);
          i
            ? t
              ? i.attach(e)
              : i.detach(e)
            : p.warn(
                "No implementation found for event type:",
                e.eventType,
                "needed for event:",
                e
              );
        }
      });
    }
    var r = i(2);
    const a = i(7);
    const o = i(117);
    const s = i(124);
    const c = i(24);
    const u = i(16);
    var l = i(25);
    var d = i(112);
    const f = i(9);
    var p = i(23);
    const g = i(125);
    const h = u.get("stores/event_data");
    var _ = u.get("stores/plugins");
    const v = u.get("stores/rum");
    const E = u.get("stores/view");
    const m = u.get("stores/view_data");
    (t.parseViewTags = e => {
      const i = t.evaluateViewTags(e);
      t.setParsedViewTags(e.id, i);
    }),
      (t.updateAllViewTags = () => {
        const e = E.getActiveViewStates();
        r.each(e, e => {
          const i = m.get(e.id);
          t.parseViewTags(i);
        });
      }),
      (t.evaluateViewTags = e => {
        if (!e.tags) return {};
        const t = r.reduce(
          e.tags,
          (e, t) => {
            try {
              e[t.apiName] = g.getTagValue(t);
            } catch (e) {
              e instanceof g.Error
                ? p.warn("Page / Ignoring unparseable tag", t, e)
                : p.error(e);
            }
            return e;
          },
          {}
        );
        return t;
      }),
      (t.createViewTicket = () => {
        const e = {};
        return r.each(_.getAllPlugins(l.PluginTypes.viewProviders), t => {
          e[t.provides] = u.evaluate(t.getter);
        }),
        e
      ;
      }),
      (t.registerViews = e => {
        f.dispatch(a.REGISTER_VIEWS, { views: e });
      }),
      (t.activateViaAPI = (e, i) => {
        i && t.setUserSuppliedViewTags(e.id, i), t.activateMultiple([e], i);
      }),
      (t.getViewsAndActivate = e => {
        const i = m.getAllViewsForActivationType(e);
        t.activateMultiple(i);
      }),
      (t.activateMultiple = (e, i) => {
        const s = [];
        return r.each(e, e => {
          let c;
          const u = E.getViewState(e.id);
          const d = t.createViewTicket();
          if (u.isActive)
            if (e.deactivationEnabled)
              try {
                t.hasValidStaticConditions(e, d) || t.deactivate(e);
              } catch (i) {
                p.error(
                  "Page / Error evaluating whether to deactivate page ",
                  t.description(e),
                  i
                );
              }
            else
              p.log("Not activating Page, already active ", t.description(e));
          else {
            try {
              if (((c = t.hasValidStaticConditions(e, d)), !c))
                return (
                  r.isBoolean(u.isActive) || t.setViewActiveState(e, !1),
                  void p.log(
                    "Page / Failed to match page conditions for " +
                      t.description(e),
                    e.staticConditions
                  )
                );
            } catch (i) {
              return (
                r.isBoolean(u.isActive) || t.setViewActiveState(e, !1),
                void p.error(
                  "Page / Error evaluating whether to activate page ",
                  t.description(e),
                  i
                )
              );
            }
            if (
              (s.push(e),
              t.setViewActiveState(e, !0),
              p.log("Activated Page", t.description(e)),
              o.emitViewActivated({ view: e, metadata: i }),
              v.getSampleRum())
            ) {
              const g = e.activationType || l.ViewActivationTypes.immediate;
              f.dispatch(a.RECORD_ACTIVATION_TYPE_USAGE, {
                activationType: g,
                entityId: e.id,
              });
            }
            const _ = h.getByPageId(e.id);
            n(_, !0);
          }
        }),
        r.isEmpty(s) || o.emitViewsActivated({ views: s }),
        s;
      }),
      (t.deactivate = e => {
        const i = E.getViewState(e.id);
        if (!i.isActive)
          return void p.log(
            "Not deactivating Page, already inactive ",
            t.description(e)
          );
        t.setViewActiveState(e, !1),
          p.log("Deactivated Page", t.description(e)),
          o.emitPageDeactivated({ page: e });
        const r = h.getByPageId(e.id);
        n(r, !1);
      }),
      (t.setViewActiveState = (e, t) => {
        f.dispatch(a.SET_VIEW_ACTIVE_STATE, {
          view: e,
          timestamp: c.now(),
          isActive: t,
        });
      }),
      (t.setGlobalTags = e => {
        f.dispatch(a.SET_GLOBAL_TAGS, e);
      }),
      (t.setParsedViewTags = (e, t) => {
        f.dispatch(a.UPDATE_PARSED_VIEW_METADATA, { pageId: e, metadata: t });
      }),
      (t.setUserSuppliedViewTags = (e, t) => {
        f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA, { pageId: e, metadata: t });
      }),
      (t.hasValidStaticConditions = (e, t) => {
        const i = {};
        if (r.isEmpty(e.staticConditions)) return !0;
        const n = _.getAllPlugins(l.PluginTypes.viewMatchers);
        p.groupCollapsed(
          "Page / Evaluating staticConditions:",
          e.staticConditions
        ),
          p.debug("Matching to current value:", t);
        const o = s.evaluate(e.staticConditions, e => {
          const r = e.type, a = n[r];
          if (!a) throw new Error("Page / No matcher found for type=" + r);
          return a && (i[e.type] || (i[e.type] = !0)), a.match(t, e);
        });
        return (
          p.groupEnd(),
          v.getSampleRum() &&
            o &&
            f.dispatch(a.RECORD_VIEW_FEATURE_USAGE, {
              featuresUsed: r.keys(i),
              entityId: e.id,
            }),
          o
        );
      }),
      (t.description = e => {
        return '"' + e.name + '" (' + e.id + ")";
      }),
      (t.isActivationTypeImmediate = e => {
        return e === l.ViewActivationTypes.immediate || !e;
      }),
      (t.shouldTriggerImmediately = e => {
        return (
          e === l.ViewActivationTypes.DOMChanged ||
          e === l.ViewActivationTypes.URLChanged ||
          e === l.ViewActivationTypes.immediate ||
          !e
        );
      }),
      (t.create = (e, t) => {
        const i = { id: e, apiName: t, category: "other" };
        return i;
      }),
      (t.createState = e => {
        const t = {
          id: e,
          isActive: !0,
          metadata: {},
          parsedMetadata: {},
          userSuppliedMetadata: {},
        };
        return t;
      });
  },
  (e, t, i) => {
    function n(e, t) {
      for (var i, n, r = 0; r < e.length; r++) {
        if (((i = o(e[r], t)), i === !1)) return !1;
        s.isUndefined(i) && (n = !0);
      }
      if (!n) return !0;
    }
    function r(e, t) {
      for (var i, n = !1, r = 0; r < e.length; r++) {
        if (((i = o(e[r], t)), i === !0)) return !0;
        s.isUndefined(i) && (n = !0);
      }
      if (!n) return !1;
    }
    function a(e, t) {
      if (1 !== e.length) return !1;
      const i = o(e[0], t);
      return s.isUndefined(i) ? void 0 : !i;
    }
    function o(e, t) {
      let i;
      if (s.isArray(e)) {
        let n, r;
        e[0] in d ? ((n = e[0]), (r = e.slice(1))) : ((n = l.OR), (r = e)),
          u.groupCollapsed(
            'Condition / Applying operator "' + n + '" with args',
            c.stringify(r)
          );
        try {
          (i = d[n](r, t)), u.debug("Condition / Result:", i);
        } finally {
          u.groupEnd();
        }
        return i;
      }
      return (
        (i = t(e)), u.debug("Condition / Evaluated:", c.stringify(e), ":", i), i
      );
    }
    var s = i(2),
      c = i(26),
      u = i(23),
      l = { AND: "and", OR: "or", NOT: "not" },
      d = {};
    (d[l.AND] = n),
      (d[l.OR] = r),
      (d[l.NOT] = a),
      (e.exports = { evaluate: o });
  },
  (e, t, i) => {
    const n = i(25).PluginTypes, r = i(16), a = r.get("stores/plugins");
    (t.getTagValue = e => {
      const i = a.getPlugin(n.viewTagLocators, e.locatorType);
      if (!i)
        throw new t.Error(
          "No locator registered for tag locatorType: " + e.locatorType
        );
      return i(e);
    }),
      (t.enums = i(126)),
      (t.Error = i(127).Error);
  },
  (e, t) => {
    (t.locatorType = {
      CSS_SELECTOR: "css_selector",
      JAVASCRIPT: "javascript",
      URL_REGEX: "url_regex",
    }),
      (t.valueType = {
        STRING: "string",
        NUMBER: "number",
        CURRENCY: "currency",
      }),
      (t.nodeNames = { INPUT: "INPUT", SELECT: "SELECT" });
  },
  (e, t, i) => {
    const n = i(76).create;
    t.Error = n("TagError");
  },
  (e, t) => {},
  (e, t, i) => {
    const n = i(16);
    n.register("env/jquery", i(130));
  },
  (e, t, i) => {
    let n;
    const r = i(40);
    try {
      n = $;
    } catch (e) {}
    const a = r.getGlobal("$");
    n && n !== a ? (e.exports = n) : (e.exports = a);
  },
  (e, t, i) => {
    const n = i(23), r = i(40), a = "optimizelyDataApi";
    (t.registerFunction = (e, t) => {
      let i = r.getGlobal(a);
      i || ((i = {}), r.setGlobal(a, i)), i[e] || (i[e] = t);
    }),
      (t.unregisterFunction = e => {
        const t = r.getGlobal(a);
        t &&
          t[e] &&
          (t[e] = () => {
            n.log(
              'Ignoring attempt to call "' +
                a +
                "." +
                e +
                '" which has been unregistered.'
            );
          });
      }),
      (t.getFunction = e => {
        return r.getGlobal(a)[e];
      });
  },
  (e, t, i) => {
    const n = i(80), r = i(23), a = i(91);
    (t.addScriptAsync = (e, t) => {
      const i = n.querySelector("head"), a = n.createElement("script");
      (a.type = "text/javascript"),
        (a.async = !0),
        (a.src = e),
        t && (a.onload = t),
        i.insertBefore(a, i.firstChild),
        r.debug("Asynchronously requesting " + e);
    }),
      (t.addScriptSync = (e, i) => {
        try {
          const o =
            "optimizely_synchronous_script_" + Math.floor(1e5 * Math.random());
          if (e.indexOf('"') !== -1)
            return void r.error("Blocked attempt to load unsafe script: " + e);
          n.write('<script id="' + o + '" src="' + e + '"></script>');
          const s = n.querySelector("#" + o);
          if (!s) throw new Error("Document.write failed to append script");
          (s.onload = i),
            (s.onerror = n => {
              r.warn("Failed to load script (" + e + ") synchronously:", n),
                t.addScriptAsync(e, i);
            });
        } catch (n) {
          r.debug("Document.write failed for " + e + ": " + n.message);
          const c = e => {
            const t = new Function(e.responseText);
            t(), i && i();
          };
          return a
            .request({
              url: e,
              async: !1,
              contentType: "text/plain",
              success: c,
            })
            ["catch"](n => {
              r.error(
                "Failed to load " + e + " via synchronous XHR: " + n.message
              ),
                t.addScriptAsync(e, i);
            });
        }
      });
  },
  (e, t, i) => {
    function n() {
      const e = null;
      b.isNumber(e) && 0 === ve.getCount()
        ? ($.log(
            "Activating after delay of",
            e,
            "ms because no Experiments are running"
          ),
          q.dispatch(L.SET_RUM_DATA, { data: { activateDfd: !0 } }),
          ue.setTimeout(V.emitActivateEvent, e))
        : V.emitActivateEvent();
    }
    function r(e) {
      Oe.handleError(e.data.error, e.data.metadata);
    }
    function a() {
      b.isArray(window.optimizely) &&
        (window.optimizely = b.filter(window.optimizely, e => {
          const t = !0;
          return !we.push(e, t);
        }));
    }
    function o() {
      const e = i(85), n = !!ce.getCurrentId(), r = !!n && ce.hasSomeData();
      n
        ? r
          ? $.log("xd / Existing visitor; has data on this origin")
          : $.log("xd / Existing visitor; new to this origin")
        : $.log("xd / New visitor");
      const a = he.getAccountId(),
            o = "https://a16180790160.cdn.optimizely.com".replace(
              "__SUBDOMAIN__",
              "a" + a + "."
            ),
            c = "/client_storage/a" + a + ".html";
      e.subscribe((e, t) => {
        ce.checkKeyForVisitorId(e) && Q.setItem(e, t);
      });
      const u = e
        .fetchAll()
        .then(t => {
          if (!Re.getVisitorIdLocator()) {
            const i = be.getCanonicalOrigins();
            if (i) {
              const n = e.getXDomainUserId(t, i);
              n &&
                ($.log("Syncing cross-origin visitor randomId:", n),
                ce.maybePersistVisitorId({ randomId: n }));
            }
          }
          return ce.deleteOldForeignData(), t;
        })
        .then(t.persistItemsWithId)
        .then(
          e => {
            if ((ce.loadForeignData(), n && !r)) {
              const t = !b.isEmpty(e);
              $.debug("xd / Loaded foreign data? ", t), s(t);
            }
            $.log("Loaded visitor data from foreign origins"),
              V.emitOriginsSyncedEvent();
          },
          e => {
            throw (
              (n &&
                !r &&
                ($.debug("xd / Failed to load foreign data:", e), s(!1, e)),
              e)
            );
          }
        );
      return ie.all([
        e.load(o, c)["catch"](e => {
          throw (
            ($.debug("xd / Failed to load iframe:", e), n && !r && s(!1, e), e)
          );
        }),
        u["catch"](e => {
          $.debug(
            "xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",
            e.message
          ),
            $.debug("xd / Enqueuing sync to happen after visitorId set."),
            q.dispatch(L.ADD_CLEANUP_FN, {
              lifecycle: j.Lifecycle.postVisitorProfileLoad,
              cleanupFn: V.emitOriginsSyncedEvent,
            });
        }),
      ]);
    }
    function s(e, t) {
      q.dispatch(L.SET_RUM_DATA, {
        data: { extras: { xdAttempt: e, xdError: t ? t.toString() : void 0 } },
      });
    }
    function c(e) {
      const t = Se.getVisitorProfile();
      return ce.populateEagerVisitorData(e, t);
    }
    function u(e, t, i) {
      e = e || [];
      const n = Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders), r = he.getGlobalHoldbackThreshold(), a = Se.getVisitorProfile();
      ce.populateLazyVisitorData(n, a);
      const o = Re.getBucketingId();
      if (!o) throw new Error("bucketingId not set");
      let s;
      const c = Se.getVisitorProfile();
      if (t && !Pe) {
        const u = De.getVariationIdMap();
        s = u[t.id];
      }
      const l = {
        bucketingId: o,
        visitorProfile: c,
        audiences: e,
        globalHoldback: r,
        preferredVariationMap: s,
        layer: t,
      };
      return t && i && U.isPageIdRelevant(t)
        ? b.map(i, e => {
            return U.createTicket(b.extend({}, l, { pageId: e }));
          })
        : [U.createTicket(l)];
    }
    function l(e) {
      return {
        bucketingId: Re.getBucketingId(),
        preferredLayerId: De.getPreferredLayerMap()[e.id],
      };
    }
    function d(e) {
      const i = ve.getAllByPageIds(e), n = ge.getForceVariationIds(), r = ge.getForceAudienceIds(), a = !b.isEmpty(n);
      a && $.log("Force variations are in use. Disabling mutual exclusivity.");
      const o = a
        ? { individual: i }
        : b.reduce(
            i,
            (e, t) => {
              return (
                t.groupId
                  ? e.groups[t.groupId] ||
                    (e.groups[t.groupId] = _e.get(t.groupId))
                  : e.individual.push(t),
                e
              );
            },
            { groups: {}, individual: [] }
          );
      $.log("Deciding Campaigns/Experiments for Page(s)", e);
      const s = b.map(o.groups, W.description).join(", ");
      $.log("Groups:", s);
      const c = b.map(o.individual, X.description).join(", ");
      $.log("Campaigns/Experiments not in Groups (by Campaign id):", c);
      const u = b.map(o.groups, b.partial(f, n, r, e)) || [],
            l = b.map(o.individual, i => {
              const a = b.filter(i.pageIds, b.partial(b.includes, e));
              return t.decideAndExecuteLayerASAP(n, r, a, i);
            }),
            d = u.concat(l);
      return ie.all(d).then(t => {
        const i = b.filter(t, e => {
          return !!e;
        });
        return (
          $.log(
            "All Campaigns/Experiments for Page(s) (by Campaign id)",
            e,
            "resolved:",
            b.map(i, X.description).join(", ")
          ),
          i
        );
      });
    }
    function f(e, i, n, r) {
      try {
        const a = l(r), o = U.decideGroup(r, a);
        if (o.reason)
          return (
            $.debug(
              "Not activating Group",
              W.description(r),
              "; reason:",
              o.reason
            ),
            ye.getSampleRum() &&
              q.dispatch(L.RECORD_LAYER_FEATURE_USAGE, {
                feature: "mutex",
                entityId: r.id,
              }),
            ie.resolve()
          );
        const s = ve.get(o.layerId);
        if (!s)
          return (
            $.debug(
              "Visitor was bucketed into a Campaign (" +
                o.layerId +
                ") which is not in this snippet"
            ),
            ie.resolve()
          );
        const c = b.filter(s.pageIds, b.partial(b.includes, n));
        return b.isEmpty(c)
          ? ($.debug(
              "Not activating Group",
              W.description(r),
              "; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"
            ),
            ie.resolve())
          : (ye.getSampleRum() &&
              q.dispatch(L.RECORD_LAYER_FEATURE_USAGE, {
                feature: "mutex",
                entityId: r.id,
              }),
            t.decideAndExecuteLayerASAP(e, i, c, s));
      } catch (e) {
        return (
          $.error(
            "Error getting decision for Group",
            W.description(r),
            "; ",
            e
          ),
          ie.reject(e)
        );
      }
    }
    function p(e, t, i, n) {
      return new ie((r, a) => {
        try {
          E(n, e, t, i, a => {
            b.each(a, r => {
              const a = r.pageId ? [r.pageId] : i;
              $.debug(
                "Deciding layer: ",
                n,
                "with decisionTicket: ",
                r,
                "and actionViewIds: ",
                a
              ),
                g(n, e, t, a, r);
            }),
              r(n);
          });
        } catch (e) {
          $.error(
            "Error getting decision for Campaign: " + X.description(n),
            e
          ),
            a(e);
        }
      });
    }
    function g(e, i, n, r, a) {
      const o = X.description(e);
      $.log("Activating Campaign", o, "on Page(s)", r),
        n.length &&
          ($.log("Applying force audienceIds:", n, "to Campaign", o),
          (a = b.cloneDeep(a)),
          (a.audienceIds = n));
      const s = t.decideLayer(e, a, i), c = !(!i.length && !n.length), u = t.getActionsForDecision(e, s, c), l = D(u.actions, r);
      if (
        (u.maybeExecute && h(l, e, s, r),
        b.forEach(r, () => {
          P.trackDecisionEvent(s, a);
        }),
        V.emitLayerDecided({ layer: e, decisionTicket: a, decision: s }),
        s.error)
      )
        throw s.error;
      if (ye.getSampleRum()) {
        q.dispatch(L.RECORD_LAYER_POLICY_USAGE, {
          policy: e.policy,
          layerId: e.id,
        });
        const d = v(u.actions);
        q.dispatch(L.RECORD_CHANGE_TYPE_USAGE, {
          changeTypes: b.keys(d),
          layerId: e.id,
        }),
          b.isEmpty(e.integrationSettings) ||
            q.dispatch(L.RECORD_INTEGRATION_USAGE, {
              integrations: X.getIntegrationTypes(e),
              layerId: e.id,
            });
      }
      return U.isInCohort(s)
        ? void (u.maybeExecute && _(l, e, s, r))
        : void $.log(
            "Not activating Campaign: " +
              X.description(e) +
              "; not in the cohort because:",
            s.reason
          );
    }
    function h(e, t, i, n) {
      const r = X.description(t);
      $.log("Preparing actions", e, "for Campaign", r, "on Page(s)", n),
        b.forEach(e, N.prepareAction);
    }
    function _(e, t, i, n) {
      const r = X.description(t);
      return $.log("Executing actions", e, "for Campaign", r, "on Page(s)", n),
      ie
        .all(
          b.map(e, e => {
            return N.executePreparedAction(e).then(
              b.partial(V.emitActionAppliedEvent, e)
            );
          })
        )
        .then(() => {
          $.log("All page actions for", i, "applied:", e),
            V.emitActionsForDecisionAppliedEvent(i, e);
        })
        ["catch"](e => {
          $.warn(
            "Error evaluating page actions for decision",
            i,
            "because:",
            e
          );
        })
    ;
    }
    function v(e) {
      const t = {};
      return b.each(e, e => {
        b.each(e.changeSet, e => {
          t[e.type] || (t[e.type] = !0);
        });
      }),
      t
    ;
    }
    function E(e, t, i, n, r) {
      if (t.length || i.length) return void r(u([], void 0, n));
      const a = X.relatedAudienceIds(e),
            o = b.reduce(
              a,
              (e, t) => {
                const i = de.get(t);
                return i && e.push(i), e;
              },
              []
            ),
            s = Ie.getAllPlugins(j.PluginTypes.audienceMatchers);
      if (ye.getSampleRum()) {
        const c = {};
        if (
          (b.each(o, e => {
            b.extend(c, m(e.conditions, s));
          }),
          !b.isEmpty(c))
        ) {
          const l = b.keys(c);
          q.dispatch(L.RECORD_AUDIENCE_USAGE, {
            audienceTypes: l,
            layerId: e.id,
          });
        }
      }
      S(o, s, X.getActivationTimeout(e), () => {
        const t = u(o, e, n);
        b.map(t, t => {
          I(t, o, e);
        }),
          r(t);
      });
    }
    function m(e, t) {
      const i = {};
      return b.each(e, e => {
        b.isArray(e)
          ? b.extend(i, m(e, t))
          : b.isObject(e) && t[e.type] && (i[e.type] = !0);
      }),
      i
    ;
    }
    function I(e, t, i) {
      const n = b.map(e.audienceIds, b.bind(de.get, de)),
            r = b.filter(t, t => {
              return !b.includes(e.audienceIds, t.id);
            });
      $.log(
        "When deciding Campaign",
        X.description(i),
        "visitor is in audiences:",
        y(n),
        "and not in audiences:",
        y(r)
      );
    }
    function y(e) {
      const t = [];
      return b.each(e, e => {
        t.push(e.name, e);
      }),
      t
    ;
    }
    function S(e, t, i, n) {
      const r = b.reduce(
                e,
                (e, i) => {
                  return b.extend(
                    e,
                    k.requiredAudienceFieldsForConditions(i.conditions, t)
                  );
                },
                {}
              ),
            a = b.reduce(
              r,
              (e, t) => {
                if (b.isUndefined(ce.getAttribute(t))) {
                  const i = ce.getPendingAttributeValue(t);
                  b.isUndefined(i) || e.push(i);
                }
                return e;
              },
              []
            );
      if (0 === a.length) return n();
      let o = [].concat(e);

      const s = ne.firstToResolve(
        b.map(a, e => {
          return ie.resolve(e).then(() => {
            const e = Se.getVisitorProfile();
            if (
              ((o = b.filter(o, i => {
                return b.isUndefined(k.isInAudience(e, i, t));
              })),
              !b.isEmpty(o))
            )
              throw new Error("At least one audience is still pending");
          });
        })
      );

      ie.race([
        s,
        new ie((e, t) => {
          ue.setTimeout(t, i);
        }),
      ]).then(
        () => {
          $.log("Activating Campaign after pending Audiences resolved", e), n();
        },
        () => {
          $.log("Activating Campaign after timeout on Audiences", e), n();
        }
      );
    }
    function T(e, t, i) {
      let n;
      const r = X.description(e);
      return (
        (n = i.length ? U.getDummyLayerDecision(e, i) : U.decideLayer(e, t)),
        $.log("Recording decision for Campaign", r, t, "->", n),
        X.recordLayerDecision(e.id, t, n),
        Pe ||
          (n.variationId &&
            n.experimentId &&
            ce.updateVariationIdMap(e.id, n.experimentId, n.variationId),
          e.groupId && ce.updatePreferredLayerMap(e.groupId, e.id)),
        n
      );
    }
    function A(e) {
      const t = pe.getCleanupFns(e);
      if (t.length > 0) {
        for (; t.length > 0; ) t.shift()();
        q.dispatch(L.CLEAR_CLEANUP_FN, { lifecycle: e });
      }
    }
    function R(e, t, i) {
      const n = X.description(e), r = "NOT applying changes for Campaign", a = { actions: [], maybeExecute: !1 };
      return (
        (a.actions = [].concat(
          fe.getLayerActions(t.layerId) || [],
          fe.getExperimentActions(t.experimentId) || [],
          fe.getExperimentVariationActions(t.experimentId, t.variationId) || []
        )),
        !i && he.isGlobalHoldback()
          ? ($.log(r, n, "(visitor is in global holdback)"), a)
          : t.isLayerHoldback
          ? ($.log(r, n, "(visitor is in layer holdback)"), a)
          : t.experimentId && t.variationId
          ? ((a.maybeExecute = !0),
            $.log("Got Actions for Campaign:", n, a.actions),
            a)
          : ($.log(r, n, "(visitor is not eligible for any Experiments)"), a)
      );
    }
    function D(e, t) {
      return b.filter(e, e => {
        return b.isUndefined(e.pageId) || b.includes(t, e.pageId);
      });
    }
    var b = i(2);
    const w = i(76).create;
    const O = (t.ActivationCodeError = w("ActivationCodeError"));
    const C = (t.ProjectJSError = w("ProjectJSError"));
    var N = i(134);
    var L = i(7);
    var P = i(110);
    var V = i(117);
    var k = i(138);
    const x = i(86);
    const F = i(109);
    const M = i(24);
    var U = i(139);
    var G = i(16);
    const B = i(118);
    const z = i(80);
    var j = i(25);
    const H = i(87);
    const K = i(111);
    const Y = i(144);
    var q = i(9);
    var W = i(143);
    var X = i(113);
    var Q = i(81).LocalStorage;
    var $ = i(23);
    const J = i(145);
    const Z = i(83);
    const ee = i(122);
    const te = i(88);
    var ie = i(12).Promise;
    var ne = i(146);
    const re = i(114);
    const ae = i(116);
    const oe = i(136);
    const se = i(123);
    var ce = i(74);
    var ue = i(40);
    const G = i(16);
    const le = G.get("stores/session");
    var de = G.get("stores/audience_data");
    var fe = G.get("stores/action_data");
    var pe = G.get("stores/cleanup");
    var ge = G.get("stores/directive");
    var he = G.get("stores/global");
    var _e = G.get("stores/group_data");
    var ve = G.get("stores/layer_data");
    const Ee = G.get("stores/layer");
    const me = G.get("stores/pending_events");
    var Ie = G.get("stores/plugins");
    var ye = G.get("stores/rum");
    var Se = G.get("stores/visitor");
    const Te = G.get("stores/view_data");
    const Ae = G.get("stores/view");
    var Re = G.get("stores/visitor_id");
    var De = G.get("stores/visitor_bucketing");
    var be = G.get("stores/xdomain");
    var we = i(93);
    var Oe = i(120);
    const Ce = i(1);
    const Ne = 1e3;
    const Le = !1;
    var Pe = !1;
    const Ve = !1;
    const ke = Pe || Ve;
    const xe = 1e3;
    const Fe = t;
    (t.initialize = e => {
      const i = e.clientData;
      if (
        (F.normalizeClientData(e.clientData),
        H.on({ filter: { type: "error" }, handler: r }),
        q.dispatch(L.DATA_LOADED, { data: i }),
        $.log("Initialized with DATA:", i),
        a(),
        B.setOptOut(ge.shouldOptOut()),
        ge.isDisabled() || ge.shouldOptOut())
      )
        return void $.log("Controller / Is disabled");
      if (
        (Ce.queueBeacons(),
        z.isReady()
          ? q.dispatch(L.SET_DOMCONTENTLOADED)
          : z.addReadyHandler(() => {
              q.dispatch(L.SET_DOMCONTENTLOADED);
            }),
        !ke)
      ) {
        Z.time("projectJS");
        const o = he.getProjectJS();
        if (b.isFunction(o))
          try {
            Y.apply(o);
          } catch (e) {
            $.error("Error while executing projectJS: ", e),
              x.emitError(new C(e));
          }
        Z.timeEnd("projectJS");
      }
      b.each(e.plugins || [], e => {
        try {
          e(ee);
        } catch (e) {
          x.emitInternalError(e);
        }
      }),
        b.each(he.getPlugins() || [], e => {
          try {
            Y.apply(e, [ee]);
          } catch (e) {
            x.emitError(e);
          }
        }),
        re.load();
      const s = H.on({
        filter: { type: "lifecycle", name: "activated" },
        handler() {
          Se.observe(ce.persistVisitorProfile),
            Ee.observe(ce.persistLayerStates),
            le.observe(ce.persistSessionState),
            me.observe(J.persistPendingEvents),
            Pe || De.observe(ce.persistVisitorBucketingStore),
            H.off(s);
        },
      });
      H.on({
        filter: { type: "lifecycle", name: "viewsActivated" },
        handler: t.onViewsActivated,
      }),
        H.on({
          filter: { type: "lifecycle", name: "pageDeactivated" },
          handler: t.onPageDeactivated,
        }),
        t.initializeApi();
      const c = J.getPendingEvents();
      if (
        (c &&
          (q.dispatch(L.LOAD_PENDING_EVENTS, { events: c }),
          J.retryPendingEvents(c)),
        H.on({
          filter: { type: "lifecycle", name: "activate" },
          handler: t.activate,
        }),
        V.emitInitializedEvent(),
        !ge.shouldActivate())
      )
        return ie.resolve();
      const u = [];
      if (be.isDisabled()) n();
      else {
        const l = t.initializeXDomainStorage();
        u.push(l);
        const d = Boolean(be.getCanonicalOrigins());
        if (d) {
          const f = ae.makeTimeoutPromise(xe);
          ie.race([l, f])
            ["catch"](e => {
              $.error("Failed to initialize xDomain storage: ", e);
            })
            .then(n)
            ["catch"](Oe.handleError);
        } else n();
      }
      return ie.all(u);
    }),
      (t.activate = () => {
        try {
          var e = [];
          $.log("Activated client"), A(j.Lifecycle.preActivate);
          const t = M.now();
          q.dispatch(L.ACTIVATE, {
            activationId: String(t),
            activationTimestamp: t,
          });
          const i = Te.getAll();
          se.registerViews(i),
            ce.setId(ce.getOrGenerateId()),
            e.push(P.trackPostRedirectDecisionEvent()),
            q.dispatch(L.MERGE_VARIATION_ID_MAP, {
              variationIdMap: ce.getVariationIdMap(),
            }),
            q.dispatch(L.MERGE_PREFERRED_LAYER_MAP, {
              preferredLayerMap: ce.getPreferredLayerMap(),
            }),
            A(j.Lifecycle.postVisitorProfileLoad),
            e.push(
              c(Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders)).then(
                () => {
                  $.log("Populated visitor profile");
                }
              )
            );
          const n = u(), r = U.decideGlobal(n);
          $.log("Made global decision", n, "->", r),
            q.dispatch(L.RECORD_GLOBAL_DECISION, r);
          const a = P.trackClientActivation();
          a
            ? $.log("Tracked activation event", a)
            : $.log("Not tracking activation event");
          const o = Fe.setUpViewActivation(i);
          let s = [];
          return Le
            ? (s = se.activateMultiple(o))
            : b.each(o, e => {
                s = s.concat(se.activateMultiple([e]));
              }),
          Pe &&
            ye.getSampleRum() &&
            q.dispatch(L.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT, {
              viewsInitiallyActivatedCount: s.length,
            }),
          A(j.Lifecycle.postViewsActivated),
          A(j.Lifecycle.postActivate),
          V.emitActivatedEvent(),
          ie.all(e).then(() => {
            H.emit({ type: K.TYPES.LIFECYCLE, name: "activateDeferredDone" }),
              $.log("All immediate effects of activation resolved");
          }, x.emitError)
        ;
        } catch (e) {
          return x.emitError(e), ie.reject(e);
        }
      }),
      (Fe.setUpViewActivation = e => {
        const t = [];
        return b.each(e, e => {
          b.isBoolean(Ae.getViewState(e.id).isActive) &&
          se.isActivationTypeImmediate(e.activationType)
            ? $.debug(
                "Skipping page: already evaluated, presumably at the edge",
                se.description(e)
              )
            : se.shouldTriggerImmediately(e.activationType)
            ? t.push(e)
            : e.activationType === j.ViewActivationTypes.callback
            ? ($.debug(
                "Setting up conditional activation for Page",
                se.description(e)
              ),
              Fe.activateViewOnCallback(e))
            : e.activationType === j.ViewActivationTypes.polling
            ? ($.debug(
                "Setting up polling activation for Page",
                se.description(e)
              ),
              te
                .pollFor(
                  b.partial(Y.apply, e.activationCode),
                  null,
                  b.partial(oe.isTimedOut, M.now())
                )
                .then(() => {
                  se.activateMultiple([e]);
                })
                ["catch"](t => {
                  $.warn("Failed to activate view ", e, t);
                }))
            : e.activationType !== j.ViewActivationTypes.manual &&
              x.emitError(
                new Error("Unknown view activationType: " + e.activationType)
              );
        }),
        t
      ;
      }),
      (Fe.activateViewOnCallback = e => {
        const t = t => {
                  const i = b.extend({}, t, { pageName: e.apiName, type: "page" });
                  we.push(i);
                },
              i = { pageId: e.id };
        Object.defineProperty(i, "isActive", {
          get() {
            return Ae.isViewActive(e.id);
          },
        });
        try {
          Y.apply(e.activationCode, [t, i]);
        } catch (t) {
          const n = new O(
            "(" + t.toString() + ") in activationCode for " + se.description(e)
          );
          x.emitError(n, { originalError: t, userError: !0 });
        }
      }),
      (t.onViewsActivated = e => {
      let t;
      const i = e.data.views;
      const n = b.map(i, "id");
      try {
        if (!Re.getBucketingId())
          throw new Error("View activated with no visitorId set");
        const r = d(n)["catch"](x.emitError);
        return (t = ie.all(
          b.map(i, e => {
            const t = () => {
              se.parseViewTags(e);
              const t = P.trackViewActivation(e);
              t
                ? $.log("Tracked activation for Page", se.description(e), t)
                : $.log(
                    "Not Tracking activation for Page",
                    se.description(e)
                  );
            };
            return z.isReady()
              ? ie.resolve(t())
              : te.pollFor(z.isReady, Ne).then(t);
          })
        )),
        ie.all([r, t]);
      } catch (e) {
        x.emitError(e);
      }
    }),
      (t.onPageDeactivated = e => {
        const t = e.data.page, i = fe.getAllActionIdsByPageId(t.id);
        b.each(i, e => {
          const i = fe.getActionState(e);
          i &&
            (b.each(i, (e, i) => {
              if (e.cancel)
                try {
                  e.cancel(),
                    $.debug(
                      "Controller / Canceled change",
                      i,
                      "observation due to deactivation of page:",
                      t
                    );
                } catch (e) {
                  $.error(
                    "Controller / Error canceling change",
                    i,
                    "observation upon deactivation of page.",
                    e
                  );
                }
              if (t.undoOnDeactivation && e.undo)
                try {
                  e.undo(),
                    $.debug(
                      "Controller / Undid change",
                      i,
                      "due to deactivation of page:",
                      t
                    );
                } catch (e) {
                  $.error(
                    "Controller / Error undoing change upon deactivation of page.",
                    e
                  );
                }
            }),
            q.dispatch(L.REMOVE_ACTION_STATE, { actionId: e }),
            $.debug(
              "Controller / Undid changes and/or canceled change observation due to deactivation of page:",
              t,
              e
            ));
        });
      }),
      (t.initializeApi = () => {
        const e = { push: we.push };
        Ve || (e.get = we.get);
        const t = window.optimizely;
        b.isArray(t) &&
          b.each(t, t => {
            e.push(t);
          }),
          (e.data = { note: "Obsolete, use optimizely.get('data') instead" }),
          (e.state = {}),
          (window.optimizely = e);
      }),
      (t.persistItemsWithId = e => {
        return b.each(e, (e, t) => {
          ce.checkKeyForVisitorId(t) && Q.setItem(t, e);
        }),
        e
      ;
      }),
      (t.initializeXDomainStorage = o),
      (t.decideAndExecuteLayerASAP = p),
      (t.decideLayer = T),
      (t.getActionsForDecision = R);
  },
  (e, t, i) => {
    function n(e, t, i) {
      const n = v.getActionState(t.id);
      if (!n)
        return void p.warn(
          "Action / Attempted to prepare change for inactive action: ",
          t
        );
      const r = v.getChangeApplier(e.id, t.id);
      if (!a.isUndefined(r))
        return void p.warn(
          "Action / Attempted to prepare a change which is already being applied: ",
          e
        );
      const s = {
        changeId: e.id,
        actionId: t.id,
        changeApplier: I.create(e, t, i),
      };
      f.dispatch(o.SET_CHANGE_APPLIER, s);
    }
    function r(e, t, i, o) {
      if (a.includes(o, t))
        return void p.error(
          "Change with id " + t + " has circular dependencies: " + o.concat(t)
        );
      if (!e[t]) {
        const u = E.getChange(t);
        if (!u) {
          let d = "Change with id " + t + " is absent";
          return (
            o.length &&
              (d += " but listed as a dependency for " + o[o.length - 1]),
            void p.warn(d)
          );
        }
        e[t] = new g(d => {
          const f = a.map(u.dependencies || [], n => {
            return r(e, n, i, o.concat([t]));
          });
          if (u.src) {
            const _ = "change_" + u.src,
                  m = c
                    .makeAsyncRequest(_, () => {
                      return h.addScriptAsync(
                        "https://cdn.optimizely.com/public/16180790160/data" +
                          u.src,
                        () => {
                          c.resolveRequest(_);
                        }
                      );
                    })
                    .then(() => {
                      const e = E.getChange(u.id);
                      e ||
                        s.emitError(
                          new S("Failed to load async change from src: " + u.src)
                        ),
                        n(e, i, l.now());
                    });
            f.push(m);
          }
          g.all(f)
            .then(() => {
              const e = l.now(), n = v.getChangeApplier(t, i.id);
              return n
                ? (p.debug("Action / Applying change:", u),
                  n.apply().then(t => {
                    t
                      ? p.log(t)
                      : p.debug(
                          "Action / Applied change for the first time in " +
                            (l.now() - e) +
                            "ms:",
                          u
                        ),
                      d();
                  }))
                : (p.debug(
                    "Action / Not applying change ",
                    t,
                    " - No changeApplier found."
                  ),
                  void d());
            })
            ["catch"](e => {
              p.error("Action / Failed to apply change:", u, e), d();
            });
        });
      }
      return e[t];
    }
    var a = i(2);
    var o = i(7);
    var s = i(86);
    var c = i(6);
    const u = i(76).create;
    var l = i(24);
    const d = i(16);
    var f = i(9);
    var p = i(23);
    var g = i(12).Promise;
    var h = i(132);
    const _ = d.get("stores/global");
    var v = d.get("stores/action_data");
    var E = d.get("stores/change_data");
    const m = d.get("stores/session");
    var I = i(135);
    const y = i(136);
    y.initialize();
    var S = u("ActionError");
    (t.prepareAction = e => {
      p.debug("Action / Preparing:", e),
        f.dispatch(o.ACTION_EXECUTED, {
          actionId: e.id,
          sessionId: m.getSessionId(),
          layerId: e.layerId,
          pageId: e.pageId,
          timestamp: l.now(),
          activationId: _.getActivationId(),
        });
      const t = l.now();
      a.forEach(e.changeSet, i => {
        const r = a.isObject(i) ? i.id : i;
        let s = E.getChange(r);
        s || (f.dispatch(o.ADD_CHANGE, i), (s = E.getChange(i.id))),
          s.src || n(s, e, t);
      });
    }),
      (t.executePreparedAction = e => {
        p.debug("Action / Executing:", e);
        const t = {},
              i = a.map(e.changeSet, i => {
                const n = a.isObject(i) ? i.id : i;
                return r(t, n, e, []);
              });
        return g.all(i).then(() => {
          p.debug("changes for action id=" + e.id + " applied");
        });
      });
  },
  (e, t, i) => {
    const n = i(13).Promise, r = i(24), a = i(16), o = a.get("stores/plugins"), s = i(25), c = i(23);
    t.create = (e, t, i) => {
      const a = { identifier: e.id, action: t, startTime: i || r.now() };
      try {
        const u = o.getPlugin(s.PluginTypes.changeAppliers, e.type);
        if (!u) throw new Error("Unrecognized change type " + e.type);
        return new u(e, a);
      } catch (e) {
        c.error("Change applier was never properly constructed:", e);
        const l = {
          apply() {
            return n.reject(e);
          },
        };
        return l;
      }
    };
  },
  (e, t, i) => {
    function n() {
      ("interactive" !== document.readyState &&
        "complete" !== document.readyState) ||
        (t.domReadyTime = Date.now());
    }
    const r = i(137), a = i(16).get("stores/directive");
    (t.domReadyTime = null),
      (t.initialize = () => {
        n(), document.addEventListener("readystatechange", n, !0);
      }),
      (t.isTimedOut = e => {
        const i = Date.now();
        if (!t.domReadyTime || !e) return !1;
        let n = Math.max(e, t.domReadyTime);
        return (
          a.isEditor() && (n = t.domReadyTime),
          !(i - n < r.SELECTOR_POLLING_MAX_TIME)
        );
      });
  },
  (e, t) => {
    e.exports = {
      SELECTOR_POLLING_MAX_TIME: 2e3,
      CHANGE_DATA_KEY: "optimizelyChangeData",
      CHANGE_ID_ATTRIBUTE_PREFIX: "data-optly-",
    };
  },
  (e, t, i) => {
    function n(e, t) {
      return i => {
        const n = i.type, a = t[n];
        if (!a) throw new Error("Audience / No matcher found for type=" + n);
        if (a.fieldsNeeded)
          for (let s = r(a.fieldsNeeded, i), l = 0; l < s.length; l++) {
            const d = s[l], f = c.getFieldValue(e, d);
            if (o.isUndefined(f))
              return void u.debug(
                "Audience / Required field",
                d,
                "for type",
                n,
                "has no value"
              );
          }
        u.debug("Matching condition:", i, "to values:", e);
        const p = a.match(e, i);
        if (!o.isUndefined(p)) return !!p;
      };
    }
    function r(e, t) {
      let i = "function" == typeof e ? e(t) : e;
      return (
        o.isString(i) && (i = [i]),
        o.isArray(i)
          ? i
          : (u.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),
            [])
      );
    }
    function a(e) {
      return e.name ? e.name + " (" + e.id + ")" : e.id;
    }
    var o = i(2);
    const s = i(124);
    var c = i(19);
    var u = i(23);
    const l = i(74);
    (t.isInAudience = (e, t, i) => {
      const r = n(e, i);
      u.groupCollapsed("Checking audience", t.name, t.id, t),
        u.debug("Visitor Profile:", e);
      let o;
      try {
        var c = s.evaluate(t.conditions, r);
      } catch (e) {
        (o = e), (c = !1);
      }
      return (
        u.groupEnd(),
        o && u.error("Audience / Error evaluating audience", a(t), ":", o),
        u.log("Is " + (c ? "in" : "NOT in") + " audience:", a(t)),
        c
      );
    }),
      (t.requiredAudienceFieldsForConditions = function e(t, i) {
        const n = {};
        return o.each(t, t => {
          if (o.isArray(t)) o.extend(n, e(t, i));
          else if (o.isObject(t)) {
            const a = i[t.type];
            if (a) {
              const s = r(a.fieldsNeeded, t);
              o.each(s, e => {
                n[l.serializeFieldKey(e)] = e;
              });
            }
          }
        }),
        n;
      });
  },
  (e, t, i) => {
    function n(e, t) {
      m.debug("Decision / Deciding layer for group: ", v.description(e));
      let i;
      let n;
      const r = t.preferredLayerId;
      const a = !!r;
      try {
        (i = d.chooseWeightedCandidate(
          t.bucketingId,
          e.id,
          e.weightDistributions
        )),
          (i && "None" !== i) ||
            (n =
              'Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group');
      } catch (e) {
        n =
          "Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign.";
      }
      if (
        (a &&
          (m.debug(
            "Decision / Using preferredLayerMap to select layer for group:",
            v.description(e)
          ),
          r !== i &&
            (_.dispatch(c.RECORD_STICKY_BUCKETING_FEATURE, {
              feature: "preferredLayer",
              id: e.id,
            }),
            (i = r))),
        n)
      )
        return { layerId: null, reason: n };
      if (!s.find(e.weightDistributions, { entityId: i })) {
        const o = a ? " sticky-" : " non-sticky ",
              u =
                "Visitor was" +
                o +
                "bucketed into a campaign (" +
                i +
                ") which is not in the group";
        if (!a) throw new p(u);
        return { layerId: null, reason: u };
      }
      return { layerId: i };
    }
    function r(e, t) {
      for (let i = 0; i < e.experiments.length; i++)
        for (let n = 0; n < e.experiments[i].variations.length; n++)
          if (t.indexOf(e.experiments[i].variations[n].id) > -1)
            return {
              experimentId: e.experiments[i].id,
              variationId: e.experiments[i].variations[n].id,
            };
      return null;
    }
    function a(e) {
      const t = y.getPlugin(h.PluginTypes.deciders, e);
      if (s.isEmpty(t)) throw new Error("No deciders found for policy: " + e);
      return t;
    }
    function o(e, t) {
      const i = y.getAllPlugins(h.PluginTypes.audienceMatchers);
      return s.reduce(
        t,
        (t, n) => {
          return l.isInAudience(e, n, i) && t.push(n.id), t;
        },
        []
      );
    }
    var s = i(2);
    var c = i(7);
    const u = i(86);
    var l = i(138);
    var d = i(140);
    const f = i(141);
    var p = i(142).DecisionError;
    const g = i(16);
    var h = i(25);
    var _ = i(9);
    var v = i(143);
    const E = i(113);
    var m = i(23);
    const I = i(44);
    var y = g.get("stores/plugins");
    const S = g.get("stores/global");
    const T = g.get("stores/layer_data");
    (t.isPageIdRelevant = e => {
      if (!e) return !1;
      const t = a(e.policy);
      return s.isFunction(t.includePageIdInDecisionTicket)
        ? t.includePageIdInDecisionTicket(e)
        : t.includePageIdInDecisionTicket === !0;
    }),
      (t.createTicket = e => {
        const t = s.pick(e, [
          "bucketingId",
          "globalHoldback",
          "preferredVariationMap",
          "pageId",
        ]);
        return (
          s.extend(t, {
            audienceIds: o(e.visitorProfile, e.audiences),
            activationId: S.getActivationId(),
          }),
          t
        );
      }),
      (t.decideGlobal = e => {
        const t = d.isHoldback(e.bucketingId, {
          id: null,
          holdback: e.globalHoldback,
        });
        return { isGlobalHoldback: t };
      }),
      (t.decideGroup = n),
      (t.decideLayer = (e, t) => {
      m.debug("Deciding: ", e, t);
      let i;
      let n;
      const r = a(e.policy);

      const o = {
        layerId: e.id,
        experimentId: null,
        variationId: null,
        isLayerHoldback: d.isHoldback(t.bucketingId, e),
      };

      if (s.isEmpty(e.experiments)) throw new p("No experiments in layer.");
      try {
        if (r.decideLayer) {
          m.debug("Decision / Using decider's custom decideLayer.");
          const c = r.decideLayer(e, t);
          (i = c.experiment), (n = c.variation);
        } else
          m.debug("Decision / Using default decideLayer behavior."),
            (i = r.selectExperiment(e, t.audienceIds, t.bucketingId)),
            (n = f.selectVariation(
              i,
              t.audienceIds,
              t.bucketingId,
              t.activationId,
              t.preferredVariationMap
            ));
      } catch (e) {
        e instanceof p ? (o.reason = e.message) : (o.error = e);
      }
      return (
        (o.experimentId = i ? i.id : null),
        (o.variationId = n ? n.id : null),
        o.error &&
          ((o.error.name = "DecisionEngineError"), u.emitError(o.error)),
        o
      );
    }),
      (t.getDummyLayerDecision = (e, t) => {
      let i;
      const n = r(e, t);
      return (
        n
          ? (m.log(
              "Decision / Applying force variation:",
              n.variationId,
              "to Campaign",
              E.description(e)
            ),
            (i = {
              layerId: e.id,
              variationId: n.variationId,
              experimentId: n.experimentId,
              isLayerHoldback: !1,
              reason: "force",
            }))
          : (m.log(
              "No variation matches ids:",
              t,
              "in Campaign",
              E.description(e)
            ),
            (i = {
              layerId: e.id,
              variationId: null,
              experimentId: null,
              isLayerHoldback: !1,
              reason: "force",
            })),
        i
      );
    }),
      (t.isInCohort = e => {
        if (!e.experimentId || !e.variationId) return !1;
        const t = T.get(e.layerId);
        return !(I.isSingleExperimentPolicy(t.policy) && e.isLayerHoldback);
      });
  },
  (e, t, i) => {
    const n = i(64), r = (t.TOTAL_POINTS = 1e4);
    (t.bucketingNumber = (e, t, i) => {
      const a = n.hashToInt(e + t, i, r);
      return a;
    }),
      (t.isHoldback = (e, i) => {
        return t.bucketingNumber(e, i.id, n.Seed.IGNORING) < (i.holdback || 0);
      }),
      (t.chooseWeightedCandidate = (e, i, r) => {
        for (
          let a = t.bucketingNumber(e, i, n.Seed.BUCKETING), o = 0;
          o < r.length;
          o++
        )
          if (r[o].endOfRange > a) return r[o].entityId;
        throw new Error("Unable to choose candidate");
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(7), a = i(140), o = i(124), s = i(142).DecisionError, c = i(9), u = i(23), l = "impression";
    (t.isValidExperiment = (e, t) => {
      let i;
      const r = n.partial(n.includes, e);
      return (
        u.groupCollapsed(
          "Decision / Evaluating audiences for experiment:",
          t,
          e
        ),
        (i = !t.audienceIds || o.evaluate(t.audienceIds, r)),
        u.groupEnd(),
        u.debug("Decision / Experiment", t, "is valid?", i),
        i
      );
    }),
      (t.selectVariation = (e, t, i, o, d) => {
        if (!e.variations || 0 === e.variations.length)
          throw new s('No variations in selected experiment "' + e.id + '"');
        if (!e.weightDistributions && e.variations.length > 1)
          throw new s(
            'On selected experiment "' +
              e.id +
              '", weightDistributions must be defined if # variations > 1'
          );
        let f;
        if (e.bucketingStrategy && e.bucketingStrategy === l)
          if (1 === e.variations.length) f = e.variations[0].id;
          else {
            const p = o;
            f = a.chooseWeightedCandidate(i + p, e.id, e.weightDistributions);
          }
        else if (
          ((f =
            1 === e.variations.length
              ? e.variations[0].id
              : a.chooseWeightedCandidate(i, e.id, e.weightDistributions)),
          d && d[e.id])
        ) {
          u.debug(
            "Decision / Using preferredVariationMap to select variation for experiment:",
            e.id
          );
          const g = d[e.id];
          if (!n.find(e.variations, { id: g }))
            return (
              c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE, {
                feature: "stoppedVariation",
                id: e.id,
              }),
              u.debug(
                "Decision / Preferred variation:",
                g,
                "not found on experiment:",
                e.id,
                ". Visitor not bucketed."
              ),
              null
            );
          g !== f &&
            (c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE, {
              feature: "preferredVariation",
              id: e.id,
            }),
            (f = g));
        }
        const h = n.find(e.variations, { id: f });
        if (h) return u.debug("Decision / Selected variation:", h), h;
        throw new s('Unable to find selected variation: "' + f + '".');
      }),
      (t.getExperimentById = (e, t) => {
        const i = n.find(e.experiments, { id: t });
        if (i) return i;
        throw new s("Unable to find selected experiment.");
      }),
      (t.hasVariationActionsOnView = (e, t) => {
        return u.debug(
          "Decision / Checking variation:",
          e,
          "for actions on pageId:",
          t
        ),
        !!n.find(e.actions, e => {
          return e.pageId === t && !n.isEmpty(e.changes);
        })
      ;
      });
  },
  (e, t) => {
    function i(e) {
      this.message = e;
    }
    (i.prototype = new Error()), (t.DecisionError = i);
  },
  (e, t, i) => {
    function n(e) {
      return r.map(e.weightDistributions, "entityId");
    }
    var r = i(2);
    t.description = e => {
      const t = !!e.name, i = t ? '"' + e.name + '" ' : "", r = n(e).join(", ");
      return i + "(id " + e.id + ", campaigns: " + r + ")";
    };
  },
  (module, exports, __webpack_require__) => {
    const createError = __webpack_require__(77), di = __webpack_require__(16), Logger = __webpack_require__(23), CSP_MODE = !1, EXEC_WITH_JQUERY = !0, ExecError = (exports.Error = createError("ExecError"));
    (exports.apply = (e, t) => {
      (t = t || []), EXEC_WITH_JQUERY && (t = t.concat(di.get("env/jquery")));
      try {
        return e.apply(void 0, t);
      } catch (i) {
        throw (
          (Logger.warn("Error applying function", e, "with args:", t, i),
          new ExecError(i))
        );
      }
    }),
      (exports.eval = str => {
        if (CSP_MODE) throw new ExecError("eval is not supported in CSP mode");
        try {
          return (
            EXEC_WITH_JQUERY &&
              (str = "var $ = optimizely.get('jquery');" + str),
            eval(str)
          );
        } catch (e) {
          throw (Logger.warn("Error executing JS:", str, e), new ExecError(e));
        }
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(86), a = i(25), o = i(26), s = i(81).LocalStorage, c = i(23), u = i(91), l = i(16), d = l.get("stores/pending_events"), f = a.StorageKeys.PENDING_EVENTS;
    (t.persistPendingEvents = () => {
      try {
        var e = d.getEventsString();
        s.setItem(f, e), i(85).setItem(f, e);
      } catch (e) {
        c.warn(
          "PendingEvents / Unable to set localStorage key, error was: ",
          e
        ),
          r.emitInternalError(e);
      }
    }),
      (t.getPendingEvents = () => {
        try {
          return o.parse(s.getItem(f));
        } catch (e) {
          return null;
        }
      }),
      (t.retryPendingEvents = e => {
        n.forOwn(e, (e, t) => {
          u.retryableRequest(e.data, t, e.retryCount);
        }),
          n.isEmpty(e) || c.log("Retried pending events: ", e);
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(12).Promise;
    t.firstToResolve = e => {
      return new r(t => {
        n.each(e, e => {
          r.resolve(e).then(t, () => {});
        });
      });
    };
  },
  (e, t, i) => {
    function n(e) {
      let t = !1;
      if (
        (a.isArray(window.optimizely) &&
          a.each(window.optimizely, i => {
            a.isArray(i) &&
              "verifyPreviewProject" === i[0] &&
              String(i[1]) === e &&
              (t = !0);
          }),
        !t)
      )
        throw new Error("Preview projectId: " + e + " does not match expected");
    }
    function r() {
      s.on({
        filter: { type: c.TYPES.ANALYTICS, name: "trackEvent" },
        handler: f,
      }),
        s.on({
          filter: { type: c.TYPES.LIFECYCLE, name: "viewActivated" },
          handler: f,
        }),
        s.on({
          filter: { type: c.TYPES.LIFECYCLE, name: "layerDecided" },
          handler: f,
        }),
        s.on({ filter: { type: "error" }, publicOnly: !0, handler: f });
    }
    var a = i(2);
    const o = i(16);
    var s = i(87);
    var c = i(111);
    const u = i(40);
    const l = o.get("stores/directive");
    const d = "optimizelyPreview";

    var f = e => {
      const t = u.getGlobal(d);
      t.push(e);
    };

    (t.initialize = e => {
      l.isSlave() && n(e), r();
    }),
      (t.setupPreviewGlobal = () => {
        u.getGlobal(d) || u.setGlobal(d, []);
      }),
      (t.pushToPreviewGlobal = e => {
        f(e);
      });
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(149));
    };
  },
  (e, t) => {
    e.exports = {
      provides: "visitorId",
      getter: [
        "stores/visitor_id",
        e => {
          return e.getRandomId();
        },
      ],
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(151)),
        e.registerAudienceMatcher("behavior", i(153));
    };
  },
  (e, t, i) => {
    const n = i(152);
    e.exports = {
      provides: "events",
      isTransient: !0,
      getter: [
        () => {
          return n.getEvents();
        },
      ],
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(72), a = i(16), o = a.get("stores/visitor_events"), s = 1e3;
    t.getEvents = () => {
      const e = r.getEvents(), t = [].concat.apply([], n.values(o.getForeignEvents())), i = [].concat.apply([], n.values(o.getForeignEventQueues())), a = r.mergeAllEvents([e, t, i]);
      return a.slice(a.length - s);
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(26), a = i(154), o = i(155);
    e.exports = {
      fieldsNeeded: ["events"],
      match(e, t) {
        let i = [];
        const s = r.parse(t.value);
        return (i = n.isUndefined(s.version) ? [s] : a.buildFromSpecV0_1(s)),
        n.every(i, t => {
          return o.isSatisfied(t, e.events);
        })
      ;
      },
    };
  },
  (e, t, i) => {
    function n(e) {
      return (e = (e || "").toString().trim()), p[e] || e;
    }
    function r(e, t, i) {
      const n = { where: t };
      if (
        (e.count && (n["limit"] = e.count),
        e.modifier === s.FREQUENCY_FILTERS.MOST_FREQUENT)
      ) {
        const r = s.getFieldKeyPathForSource(e.name, i), a = s.aggregate("count"), o = s.aggregateField("count"), l = s.groupField(r);
        return c.extend(n, {
          select: [{ field: l }],
          groupBy: s.groupBy([r]),
          aggregate: [a],
          orderBy: [{ field: o, direction: "DESC" }],
        });
      }
      return c.extend(n, {
        orderBy: [{ field: [u.FIELDS.TIME], direction: "DESC" }],
      });
    }
    function a(e) {
      const t = [];
      if (c.isUndefined(e)) throw new Error("rule is undefined");
      if (!c.isObject(e)) throw new Error("rule is not an Object");
      "0.2" !== e["version"] && t.push('version: not "0.2"'),
        e["filter"] &&
          (c.isArray(e["filter"])
            ? c.each(e["filter"], (e, i) => {
                const n = s.validateFieldKeyPathV0_2(
                  e["field"],
                  s.FieldPurpose.FILTER
                );
                n && t.push("filter[" + i + "]: " + n);
                const r = s.validateComparatorAndValue(
                  e["comparator"],
                  e["value"]
                );
                r && t.push("filter[" + i + "]: " + r);
              })
            : t.push("filter: not an array"));
      const i = [], n = [];
      if (
        (e["sort"] &&
          (e["reduce"] &&
            e["reduce"]["aggregator"] &&
            "nth" !== e["reduce"]["aggregator"] &&
            t.push(
              "sort: superfluous because we can apply aggregator " +
                l.stringify(e["reduce"]["aggregator"]) +
                " to unsorted items"
            ),
          c.isArray(e["sort"])
            ? c.each(e["sort"], (e, r) => {
                const a = s.validateFieldKeyPathV0_2(
                  e["field"],
                  s.FieldPurpose.SORT
                );
                a && t.push("sort[" + r + "]: " + a),
                  e["field"] && "frequency" === e["field"][0]
                    ? i.push(e)
                    : n.push(e);
                const c = o(e["direction"]);
                c && t.push("sort[" + r + "]: " + c);
              })
            : t.push("sort: not an array"),
          i.length &&
            n.length &&
            t.push(
              'sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'
            ),
          i.length &&
            !e["pick"] &&
            t.push(
              'sort: sorting by ["frequency"] is impossible because no values have been picked'
            )),
        e["pick"])
      ) {
        e["reduce"] &&
          "count" === e["reduce"]["aggregator"] &&
          t.push(
            'pick: superfluous because we can apply aggregator "count" to raw events'
          );
        const r = s.validateFieldKeyPathV0_2(e["pick"]["field"]);
        r && t.push("pick: " + r);
      }
      if (e["reduce"]) {
        const a = e["reduce"]["aggregator"], u = "aggregator " + (l.stringify(a) || String(a)), d = e["reduce"]["n"], f = "index " + (l.stringify(d) || String(d));
        c.includes(["sum", "avg", "max", "min", "count", "nth"], a) ||
          t.push("reduce: " + u + " is unknown"),
          c.includes(["sum", "avg", "max", "min"], a) &&
            (e["pick"] ||
              t.push(
                "reduce: " +
                  u +
                  " is impossible to use because no values have been picked"
              )),
          "nth" === a
            ? ((!c.isNumber(d) || isNaN(d) || parseInt(d, 10) !== d || d < 0) &&
                t.push(
                  "reduce: " +
                    f +
                    " is not a non-negative integer (mandated by " +
                    u +
                    ")"
                ),
              e["sort"] ||
                t.push(
                  'reduce: aggregator "nth" is meaningless without a specific sort order'
                ))
            : c.isUndefined(d) ||
              t.push(
                "reduce: " + f + " is defined (not mandated by " + u + ")"
              );
      }
      if (t.length) throw new Error(t.join("\n"));
    }
    function o(e) {
      const t = "direction " + (l.stringify(e) || String(e));
      if (!c.includes(["ascending", "descending"], e))
        return t + ' is not "ascending" or "descending"';
    }
    var s = t;
    var c = i(2);
    var u = { FIELDS: i(63).FIELDS, FIELDS_V0_2: i(63).FIELDS_V0_2 };
    var l = i(26);
    const d = i(23);
    const f = i(155);
    (s.MILLIS_IN_A_DAY = 864e5),
      (s.aggregateField = (e, t) => {
        return (
          c.isString(t) && (t = [t]),
          (t = t || f.DEFAULT_FIELD),
          [f.generateAlias(e, t)]
        );
      }),
      (s.groupField = e => {
        return (
          c.isString(e) && (e = [e]), (e = e || f.DEFAULT_FIELD), [e.join(".")]
        );
      });
    var p = {
      "<": "lt",
      "<=": "lte",
      ">": "gt",
      ">=": "gte",
      "=": "eq",
      "==": "eq",
    };
    (s.fieldComparison = (e, t, i) => {
      return (
        (e = n(e)),
        c.isString(t) && (t = [t]),
        "exists" === e
          ? { op: e, args: [{ field: t }] }
          : { op: e, args: [{ field: t }, { value: i }] }
      );
    }),
      (s.relativeTimeComparison = (e, t) => {
        return {
          op: n(e),
          args: [
            { op: "-", args: [{ eval: "now" }, { field: [u.FIELDS.TIME] }] },
            { value: t * s.MILLIS_IN_A_DAY },
          ],
        };
      }),
      (s.rangeTimeComparison = e => {
        return c.isArray(e)
          ? {
              op: "between",
              args: [
                { field: [u.FIELDS.TIME] },
                { value: [e[0] || +new Date(0), e[1] || +new Date()] },
              ],
            }
          : (d.error(
              "Rule builder",
              "rangeTimeComparison passed invalid range",
              e
            ),
            null);
      }),
      (s.groupBy = e => {
        for (var t = [], i = 0; i < e.length; i++) t[i] = { field: e[i] };
        return t;
      }),
      (s.aggregate = (e, t) => {
        return (
          c.isString(t) && (t = [t]),
          (t = t || f.DEFAULT_FIELD),
          { op: e, args: [{ field: t }] }
        );
      }),
      (s.SOURCE_TYPES = {
        BEHAVIOR: "events",
        CUSTOM_BEHAVIOR: "custom_behavior",
        DCP: "dcp",
      }),
      (s.FREQUENCY_FILTERS = {
        MOST_FREQUENT: "most_frequent",
        LEAST_FREQUENT: "least_frequent",
      }),
      (s.RECENCY_FILTERS = {
        MOST_RECENT: "most_recent",
        LEAST_RECENT: "least_recent",
      }),
      (s.getFieldKeyPathForSource = (e, t) => {
        t = t || s.SOURCE_TYPES.BEHAVIOR;
        let i = [];
        return (
          c.isString(e)
            ? ((i = [e]),
              t !== s.SOURCE_TYPES.BEHAVIOR ||
                c.includes(c.values(u.FIELDS), e) ||
                (i = [u.FIELDS.OPTIONS, e]))
            : (i = e),
          i
        );
      }),
      (s.buildFromSpecV0_1 = e => {
      if (!(e.action || (e.filters && 0 !== e.filters.length)))
        throw new Error(
          'Audience spec must have an "action" field or at least one "filter" ' +
            l.stringify(e)
        );
      let t = s.fieldComparison("gt", u.FIELDS.TIME, 0);
      const i = [];
      const n = [];
      if (
        (e.action &&
          (n.push(s.fieldComparison("eq", u.FIELDS.NAME, e.action.value)),
          e.action.type &&
            n.push(s.fieldComparison("eq", u.FIELDS.TYPE, e.action.type))),
        e.time)
      )
        if ("last_days" === e.time.type)
          n.push(s.relativeTimeComparison("lte", e.time.days));
        else if ("range" === e.time.type) {
          const a = s.rangeTimeComparison([e.time.start, e.time.stop]);
          a && n.push(a);
        } else
          d.error(
            "Rule builder",
            'Audience spec has bad "time" type',
            e.time.type
          );
      if (
        ((t = { op: "and", args: n }),
        e.count &&
          i.push({
            where: s.fieldComparison(e.count.comparator, "0", e.count.value),
            from: {
              select: [{ field: s.aggregateField("count") }],
              where: t,
              aggregate: [s.aggregate("count")],
            },
          }),
        e.filters &&
          c.each(e.filters, r => {
            let a;
            let o;
            const c = s.getFieldKeyPathForSource(r.name, e.source);
            if (
              (r.modifier === s.FREQUENCY_FILTERS.MOST_FREQUENT
                ? ((a = s.aggregate("count")),
                  (o = s.aggregateField("count")))
                : r.modifier === s.RECENCY_FILTERS.MOST_RECENT &&
                  ((a = s.aggregate("max", u.FIELDS.TIME)),
                  (o = s.aggregateField("max", u.FIELDS.TIME))),
              a)
            ) {
              const l = c, d = s.groupField(l);
              i.push({
                where: s.fieldComparison(r.comparator, "0", r.value),
                from: {
                  select: [{ field: d }],
                  where: t,
                  groupBy: s.groupBy([l]),
                  aggregate: [a],
                  orderBy: [{ field: o, direction: "DESC" }],
                  limit: 1,
                },
              });
            } else n.push(s.fieldComparison(r.comparator, c, r.value));
          }),
        e.pick)
      ) {
        if (i.length > 0)
          throw new Error(
            'A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers' +
              l.stringify(e)
          );
        return [r(e.pick, t, e.source)];
      }
      return i.length > 0 ? i : [{ where: t }];
    }),
      (s.buildFromSpecV0_2 = e => {
        a(e);
        let t = {
          where: {
            op: "and",
            args: c.map(e["filter"] || [], e => {
              return "age" === e["field"][0]
                ? s.relativeTimeComparison(
                    e["comparator"] || "eq",
                    e["value"] / s.MILLIS_IN_A_DAY
                  )
                : s.fieldComparison(
                    e["comparator"] || "eq",
                    s.convertFieldKeyPathFromSpecV0_2(e["field"]),
                    e["value"]
                  );
            }),
          },
        };
        if (e["reduce"] && "count" === e["reduce"]["aggregator"])
          return c.extend(t, {
            aggregate: [{ op: "count", args: [{ field: ["*"] }] }],
            select: [{ field: ["_count_*"] }],
          });
        const i = [], n = [];
        if (
          (e["sort"] &&
            (c.each(e["sort"], e => {
              c.includes(["ascending", "descending"], e["direction"]) &&
                (c.includes(["time", "age"], e["field"][0]) && n.push(e),
                "frequency" === e["field"][0] && i.push(e));
            }),
            n.length &&
              !i.length &&
              (t["orderBy"] = c.filter(
                c.map(n, e => {
                  return "time" === e["field"][0]
                    ? {
                        field: s.convertFieldKeyPathFromSpecV0_2(["time"]),
                        direction:
                          "ascending" === e["direction"] ? "ASC" : "DESC",
                      }
                    : "age" === e["field"][0]
                    ? {
                        field: s.convertFieldKeyPathFromSpecV0_2(["time"]),
                        direction:
                          "ascending" === e["direction"] ? "DESC" : "ASC",
                      }
                    : void 0;
                })
              ))),
          e["pick"] && e["pick"]["field"])
        ) {
          const r = s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);
          if (
            e["reduce"] &&
            c.includes(["avg", "max", "min", "sum"], e["reduce"]["aggregator"])
          )
            return c.extend(t, {
              aggregate: [
                { op: e["reduce"]["aggregator"], args: [{ field: r }] },
              ],
              select: [
                { field: [f.generateAlias(e["reduce"]["aggregator"], r)] },
              ],
            });
          t = i.length
            ? c.extend(t, {
                groupBy: [{ field: r }],
                aggregate: [{ op: "count", args: [{ field: ["*"] }] }],
                orderBy: [
                  {
                    field: ["_count_*"],
                    direction:
                      "ascending" === i[0]["direction"] ? "ASC" : "DESC",
                  },
                ],
                select: [{ field: [r.join(".")] }],
              })
            : c.extend(t, { select: [{ field: r }] });
        }
        if (e["reduce"] && "nth" === e["reduce"]["aggregator"]) {
          const o = e["reduce"]["n"];
          if (c.isNumber(o) && o >= 0 && Number(o) === Math.floor(Number(o)))
            return c.extend(t, { offset: o, limit: 1 });
        }
        return t;
      }),
      (s.convertFieldKeyPathFromSpecV0_2 = e => {
        return "tags" === e[0] && "revenue" === e[1]
          ? ["r"]
          : [u.FIELDS_V0_2[e[0]]].concat(e.slice(1));
      }),
      (s.FieldPurpose = { FILTER: "filter", SORT: "sort", PICK: "pick" }),
      (s.validateFieldKeyPathV0_2 = (e, t) => {
        const i = "field " + (l.stringify(e) || String(e));
        if (!c.isArray(e) || !c.every(e, c.isString))
          return i + " is not an array of strings";
        if (
          ("tags" === e[0] && e.length > 2) ||
          ("tags" !== e[0] && e.length > 1)
        )
          return i + " includes too many strings";
        if ("tags" === e[0] && e.length < 2)
          return i + " does not specify an exact tag";
        if (e.length < 1) return i + " does not specify a top-level field";
        let n = c.keys(u.FIELDS_V0_2), r = ["age", "frequency"];
        return (
          t === s.FieldPurpose.FILTER && (n.push("age"), (r = ["frequency"])),
          t === s.FieldPurpose.SORT &&
            ((n = ["time", "age", "frequency"]),
            (r = ["name", "type", "category", "tags"])),
          c.includes(r, e[0])
            ? i + " is not supported here"
            : c.includes(n, e[0])
            ? void 0
            : i + " is unknown"
        );
      }),
      (s.validateComparatorAndValue = (e, t) => {
        const i = "comparator " + (l.stringify(e) || String(e)), n = "value " + (l.stringify(t) || String(t));
        if (!c.isString(e) && !c.isUndefined(e)) return i + " is not a string";
        switch (e) {
          case void 0:
          case "eq":
          case "is":
          case "contains":
            break;
          case "lt":
          case "gt":
          case "lte":
          case "gte":
            if (!c.isNumber(t))
              return n + " is not a number (mandated by " + i + ")";
            break;
          case "in":
            if (!c.isArray(t))
              return n + " is not an array (mandated by " + i + ")";
            break;
          case "between":
            if (
              !(
                c.isArray(t) &&
                2 === t.length &&
                c.isNumber(t[0]) &&
                c.isNumber(t[1]) &&
                t[0] <= t[1]
              )
            )
              return (
                n +
                " is not a pair of increasing numbers (mandated by " +
                i +
                ")"
              );
            break;
          case "regex":
            if (
              !(
                c.isString(t) ||
                (c.isArray(t) &&
                  2 === t.length &&
                  c.isString(t[0]) &&
                  c.isString(t[1]))
              )
            )
              return (
                n +
                " is not a pattern string or a [pattern string, flags string] array (mandated by " +
                i +
                ")"
              );
            break;
          case "exists":
            if (!c.isUndefined(t))
              return n + " is not undefined (mandated by " + i + ")";
            break;
          default:
            return i + " is unknown";
        }
      });
  },
  (e, t, i) => {
    const n = i(2),
          r = i(25),
          a = i(23),
          o = n.bind(a.log, a),
          s = i(24),
          c = i(19).getFieldValue,
          u = i(26),
          l = (e, t, i) => {
            if (e.getValueOrDefault) return e.getValueOrDefault(t, i);
            if (!n.isArray(t)) return i;
            let r = c(e, t);
            return "undefined" == typeof r && (r = i), r;
          },
          d = e => {
            return "string" == typeof e ? e.trim().toLowerCase() : e;
          };
    (t.clause = {
      WHERE: "where",
      GROUP_BY: "groupBy",
      AGGREGATE: "aggregate",
      HAVING: "having",
      ORDER_BY: "orderBy",
      SELECT: "select",
      OFFSET: "offset",
      LIMIT: "limit",
      FROM: "from",
    }),
      (t.DEFAULT_FIELD = ["*"]),
      (t.booleanOperators = {
        eq(e) {
          const t = n.map(e, d);
          return t[0] == t[1];
        },
        is(e) {
          return e[0] === e[1];
        },
        gt(e) {
          return e[0] > e[1];
        },
        lt(e) {
          return e[0] < e[1];
        },
        gte(e) {
          return e[0] >= e[1];
        },
        lte(e) {
          return e[0] <= e[1];
        },
        in: function (e) {
          const t = n.map(e[1] || [], d);
          return n.includes(t, d(e[0]));
        },
        between(e) {
          return e[1][0] <= e[0] && e[0] <= e[1][1];
        },
        contains(e) {
          const t = n.map(e, e => {
            return "string" == typeof e ? e.toLowerCase() : e;
          });
          return (t[0] || "").indexOf(t[1]) !== -1;
        },
        regex(e) {
          try {
            var t, i;
            return (
              n.isString(e[1])
                ? ((t = e[1]), (i = "i"))
                : ((t = e[1][0] || ""), (i = e[1][1] || "")),
              new RegExp(t, i).test(e[0])
            );
          } catch (e) {
            return (
              a.error(
                "Rules",
                'In operator "regex", error: ' +
                  (e.message || "invalid RegExp /" + [t, i].join("/"))
              ),
              !1
            );
          }
        },
        exists(e) {
          return "undefined" != typeof e[0];
        },
        and(e) {
          return n.every(e, e => {
            return e;
          });
        },
        or(e) {
          return n.some(e, e => {
            return e;
          });
        },
        not(e) {
          return !e[0];
        },
      }),
      (t.arithmeticOperators = {
        "+": function (e) {
          return (e[0] || 0) + (e[1] || 0);
        },
        "-": function (e) {
          return (e[0] || 0) - (e[1] || 0);
        },
        "/": function (e) {
          return (e[0] || 0) / (e[1] || 1);
        },
        "%": function (e) {
          return (e[0] || 0) % (e[1] || 1);
        },
      }),
      (t.aggregateOperators = {
        sum(e, i) {
          for (var n = e[0] || t.DEFAULT_FIELD, r = 0, a = 0; a < i.length; a++)
            r += l(i[a], n, 0);
          return r;
        },
        avg(e, i) {
          if (0 === i.length) return 0;
          for (var n = e[0] || t.DEFAULT_FIELD, r = 0, a = 0; a < i.length; a++)
            r += l(i[a], n, 0);
          return r / i.length;
        },
        max(e, i) {
          for (
            var n = e[0] || t.DEFAULT_FIELD,
              r = Number.NEGATIVE_INFINITY,
              a = 0;
            a < i.length;
            a++
          )
            r = Math.max(r, l(i[a], n, Number.NEGATIVE_INFINITY));
          return r;
        },
        min(e, i) {
          for (
            var n = e[0] || t.DEFAULT_FIELD,
              r = Number.POSITIVE_INFINITY,
              a = 0;
            a < i.length;
            a++
          )
            r = Math.min(r, l(i[a], n, Number.POSITIVE_INFINITY));
          return r;
        },
        count(e, t) {
          return t.length;
        },
      });
    const f = {
              now() {
                return s.now();
              },
            },
          p = e => {
            return e in t.booleanOperators
              ? t.booleanOperators[e]
              : e in t.arithmeticOperators
              ? t.arithmeticOperators[e]
              : null;
          },
          g = (e, t) => {
            if (t.hasOwnProperty("value")) return t["value"];
            if (t.hasOwnProperty("field")) return l(e, t["field"]);
            if (t.hasOwnProperty("eval"))
              return t["eval"] in f
                ? f[t["eval"]]()
                : void a.error("Rules", "Unknown function: " + t["eval"]);
            if (!t["op"])
              return void a.error(
                "Rules",
                "No operator specified: " + u.stringify(t)
              );
            const i = p(t["op"]);
            if (!i) return void a.error("Rules", "Unknown operator: " + t["op"]);
            const r = n.partial(g, e),
                  o = t["args"] || [],
                  s = n.map(o, e => {
                    return r(e);
                  });
            return i(s, e);
          },
          h = (e, t) => {
            const i = {};
            if ("undefined" == typeof e || !n.isArray(e) || 0 === e.length)
              return (i["*"] = { fieldValues: {}, events: t }), i;
            for (
              let r = n.map(e, e => {
                      return e["field"];
                    }),
                  a = 0;
              a < t.length;
              a++
            ) {
              for (var o = t[a], s = [], c = {}, d = 0; d < r.length; d++) {
                const f = r[d], p = l(o, f), g = f.join(".");
                (c[g] = p),
                  s.push(
                    encodeURIComponent(g) + "=" + encodeURIComponent(u.stringify(p))
                  );
              }
              const h = s.join("&");
              i.hasOwnProperty(h) || (i[h] = { fieldValues: c, events: [] }),
                i[h].events.push(o);
            }
            return i;
          };
    t.generateAlias = (e, t) => {
      return "_" + e + "_" + t.join(".");
    };
    const _ = (e, i) => {
              const r = {};
              return n.each(i, (i, n) => {
                r[n] = {};
                for (let o = 0; o < e.length; o++) {
                  const s = e[o], c = s["op"];
                  if (c in t.aggregateOperators) {
                    const u =
                              ((s["args"] && s["args"][0]) || {})["field"] ||
                              t.DEFAULT_FIELD,
                          l = t.generateAlias(c, u),
                          d = t.aggregateOperators[c]([u], i.events);
                    r[n][l] = d;
                  } else a.error("Rules", "Unknown aggregate operator " + c);
                }
              }),
              r;
            },
          v = (e, t) => {
            const i = [];
            return n.each(e, (e, r) => {
              const a = n.extend({}, e.fieldValues), o = t[r] || {};
              n.extend(a, o), i.push(a);
            }),
            i;
          },
          E = (e, t) => {
            return n.isArray(e)
              ? 0 === e.length
                ? t
                : t.sort((t, i) => {
                    for (let n = 0; n < e.length; n++) {
                      const r = e[n], a = r["direction"] || "ASC", o = "ASC" === a ? 1 : -1, s = r["field"], c = l(t, s, 0), u = l(i, s, 0);
                      if (c < u) return -o;
                      if (c > u) return o;
                    }
                    return 0;
                  })
              : (o("Rules", "groupBy rule must be an array"), t);
          };
    t.rewrite = e => {
      function i(e, s) {
        if (
          (n.isArray(e) &&
            ("and" !== e[0] &&
              "or" !== e[0] &&
              "not" !== e[0] &&
              a.error(
                "Rules",
                "Unexpected operation " + e[0] + ". Continuing optimistically."
              ),
            (e = { op: e[0], args: e.slice(1) })),
          e.hasOwnProperty("field") ||
            e.hasOwnProperty("value") ||
            e.hasOwnProperty("eval"))
        )
          return e;
        if (s && e["op"] in t.aggregateOperators) {
          const c =
                    ((e["args"] && e["args"][0]) || {})["field"] || t.DEFAULT_FIELD,
                u = t.generateAlias(e["op"], c);
          return (
            u in o || (r.push({ op: e["op"], args: e["args"] }), (o[u] = !0)),
            { field: [u] }
          );
        }
        for (var l = [], d = e["args"] || [], f = 0; f < d.length; f++)
          l[f] = i(d[f], s);
        return { op: e["op"], args: l };
      }
      var r = [];
      var o = {};
      const s = {};
      e.hasOwnProperty(t.clause.WHERE) &&
        (s[t.clause.WHERE] = i(e[t.clause.WHERE], !1)),
        e.hasOwnProperty(t.clause.HAVING) &&
          (s[t.clause.HAVING] = i(e[t.clause.HAVING], !0)),
        (e.hasOwnProperty(t.clause.AGGREGATE) || r.length > 0) &&
          (s[t.clause.AGGREGATE] = (e[t.clause.AGGREGATE] || []).concat(r));
      for (
        let c = [
                t.clause.GROUP_BY,
                t.clause.ORDER_BY,
                t.clause.SELECT,
                t.clause.OFFSET,
                t.clause.LIMIT,
              ],
            u = 0;
        u < c.length;
        u++
      )
        e.hasOwnProperty(c[u]) && (s[c[u]] = e[c[u]]);
      return (
        e.hasOwnProperty(t.clause.FROM) &&
          (s[t.clause.FROM] = t.rewrite(e[t.clause.FROM])),
        s
      );
    };
    const m = (e, i) => {
              i = i || 0;
              let r = [];
              if (
                (e.hasOwnProperty(t.clause.WHERE)
                  ? e[t.clause.WHERE]["op"]
                    ? e[t.clause.WHERE]["op"] in t.booleanOperators ||
                      r.push("Non-boolean WHERE clause operator")
                    : r.push("Missing WHERE clause operator")
                  : r.push("Missing WHERE clause"),
                e.hasOwnProperty(t.clause.HAVING) &&
                  (e[t.clause.HAVING]["op"]
                    ? e[t.clause.HAVING]["op"] in t.booleanOperators ||
                      r.push("Non-boolean HAVING clause operator")
                    : r.push("Missing HAVING clause operator")),
                e.hasOwnProperty(t.clause.GROUP_BY) &&
                  !e.hasOwnProperty(t.clause.AGGREGATE) &&
                  r.push("No AGGREGATE clause specified with GROUP_BY clause"),
                e.hasOwnProperty(t.clause.SELECT))
              ) {
                const a = e[t.clause.SELECT];
                if (n.isArray(a))
                  for (let o = 0; o < a.length; o++)
                    a[o]["op"] &&
                      a[o]["op"] in t.aggregateOperators &&
                      r.push(
                        'In SELECT clause, aggregate operator "' +
                          a[o]["op"] +
                          '" specified in selector at index ' +
                          o
                      );
                else r.push("SELECT clause must be an array");
              }
              if (e.hasOwnProperty(t.clause.OFFSET)) {
                const s = e[t.clause.OFFSET];
                (!n.isNumber(s) ||
                  Number(s) < 0 ||
                  Number(s) !== Math.floor(Number(s))) &&
                  r.push("OFFSET must be a non-negative integer");
              }
              if (e.hasOwnProperty(t.clause.LIMIT)) {
                const c = e[t.clause.LIMIT];
                (!n.isNumber(c) ||
                  Number(c) < 0 ||
                  Number(c) !== Math.floor(Number(c))) &&
                  r.push("LIMIT must be a non-negative integer");
              }
              return i > 0 &&
                (r = n.map(r, e => {
                  return "Sub-rule " + i + ": " + e;
                })),
              e.hasOwnProperty(t.clause.FROM) &&
                (r = r.concat(m(e[t.clause.FROM], i + 1))),
              r
            ;
            },
          I = (e, t) => {
            return n.map(t, t => {
              return n.map(e, e => {
                return g(t, e);
              });
            });
          },
          y = (e, i) => {
            let r = i;
            if (
              (e.hasOwnProperty(t.clause.FROM) &&
                (a.debug("Evaluating FROM clause:", e[t.clause.FROM]),
                (r = y(e[t.clause.FROM], r)),
                a.debug("Results after FROM:", r)),
              a.debug("Evaluating WHERE clause:", e[t.clause.WHERE]),
              (r = n.filter(r, i => {
                return g(i, e[t.clause.WHERE]);
              })),
              a.debug("Results after WHERE:", r),
              e.hasOwnProperty(t.clause.AGGREGATE))
            ) {
              a.debug("Evaluating AGGREGATE clause:", e[t.clause.AGGREGATE]);
              const o = h(e[t.clause.GROUP_BY], r), s = _(e[t.clause.AGGREGATE], o);
              (r = v(o, s)), a.debug("Results after AGGREGATE:", r);
            }
            e.hasOwnProperty(t.clause.HAVING) &&
              (a.debug("Evaluating HAVING clause:", e[t.clause.HAVING]),
              (r = n.filter(r, i => {
                return g(i, e[t.clause.HAVING]);
              })),
              a.debug("Results after HAVING:", r)),
              e.hasOwnProperty(t.clause.ORDER_BY) &&
                (a.debug("Evaluating ORDER_BY clause:", e[t.clause.ORDER_BY]),
                (r = E(e[t.clause.ORDER_BY], r)),
                a.debug("Results after ORDER_BY:", r));
            let c = 0;
            e.hasOwnProperty(t.clause.OFFSET) &&
              (a.debug("Evaluating OFFSET clause:", e[t.clause.OFFSET]),
              (c = Number(e[t.clause.OFFSET])));
            let u;
            return (
              e.hasOwnProperty(t.clause.LIMIT) &&
                (a.debug("Evaluating LIMIT clause:", e[t.clause.LIMIT]),
                (u = c + Number(e[t.clause.LIMIT]))),
              (c > 0 || !n.isUndefined(u)) &&
                ((r = r.slice(c, u)), a.debug("Results after OFFSET/LIMIT:", r)),
              e.hasOwnProperty(t.clause.SELECT) &&
                (a.debug("Evaluating SELECT clause:", e[t.clause.SELECT]),
                (r = I(e[t.clause.SELECT], r)),
                a.debug("Results after SELECT:", r)),
              r
            );
          };
    (t.execute = (e, i) => {
      (e = t.rewrite(e)),
        a.shouldLog(r.LogLevel.DEBUG) &&
          a.groupCollapsed("Evaluating Behavioral Rule"),
        a.debug("Rule:", e, u.stringify(e)),
        a.debug("Events:", i);
      const n = m(e);
      if (n.length > 0)
        throw new Error(
          "Rule " + u.stringify(e) + " has violations: " + n.join("\n")
        );
      const o = y(e, i);
      return (
        a.debug("Rule result:", o),
        a.shouldLog(r.LogLevel.DEBUG) && a.groupEnd(),
        o
      );
    }),
      (t.isSatisfied = (e, i) => {
        try {
          return t.execute(e, i).length > 0;
        } catch (t) {
          return (
            a.error(
              "Rules",
              "Error " +
                t.toString() +
                " while evaluating rule " +
                u.stringify(e)
            ),
            !1
          );
        }
      });
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(157));
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(158), a = i(152), o = i(26), s = i(154);
    e.exports = {
      provides: "customBehavior",
      shouldTrack: !0,
      isLazy: !1,
      getter: [
        "stores/global",
        "stores/visitor_attribute_entity",
        (e, t) => {
          const i = e.getProjectId(),
                c = n.filter(
                  n.map(t.getCustomBehavioralAttributes(i), e => {
                    try {
                      return {
                        id: e.id,
                        granularity: r.GRANULARITY.ALL,
                        rule: s.buildFromSpecV0_2(o.parse(e.rule_json)),
                      };
                    } catch (e) {
                      return;
                    }
                  })
                ),
                u = a.getEvents();
          return r.evaluate(c, u);
        },
      ],
    };
  },
  (e, t, i) => {
    function n(e) {
      if (0 === e.length) return [];
      for (
        var t = e.length - 1, i = o.FIELDS.SESSION_ID, n = e[t][i];
        t > 0 && n === e[t - 1][i];

      )
        t--;
      return e.slice(t);
    }
    function r(e, t) {
      if (0 === e.length || t <= 0) return [];
      let i = +new Date() - t * s.MILLIS_IN_A_DAY;
      i -= i % s.MILLIS_IN_A_DAY;
      for (var n = e.length; n > 0 && i <= e[n - 1][o.FIELDS.TIME]; ) n--;
      return e.slice(n);
    }
    const a = i(23);
    var o = { FIELDS: i(63).FIELDS };
    var s = i(154);
    const c = i(155);
    (t.GRANULARITY = {
      ALL: "all",
      CURRENT_SESSION: "current_session",
      LAST_30_DAYS: "last_30_days",
      LAST_60_DAYS: "last_60_days",
    }),
      (t.evaluate = (e, i) => {
        const o = {};
        if (0 === i.length) {
          for (var s = 0; s < e.length; s++) o[e[s].id] = e[s].defaultValue;
          return o;
        }
        const u = n(i), l = r(i, 60);
        for (s = 0; s < e.length; s++) {
          const d = e[s];
          let f = i;
          d.granularity === t.GRANULARITY.CURRENT_SESSION
            ? (f = u)
            : d.granularity === t.GRANULARITY.LAST_60_DAYS && (f = l);
          try {
            let p = f;
            d.rule && (p = c.execute(d.rule, f)),
              (o[d.id] = d.defaultValue),
              1 === p.length
                ? (o[d.id] = p[0][0] || d.defaultValue)
                : a.debug(
                    "Behavior / Rule for",
                    d.id,
                    "returned",
                    p.length,
                    "results, expected 1"
                  );
          } catch (e) {
            a.error(
              "Behavior / Rule for",
              d.id,
              "failed with",
              e.message || ""
            );
          }
        }
        return o;
      });
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(160)),
        e.registerAudienceMatcher("first_session", i(161));
    };
  },
  (e, t, i) => {
    const n = i(63), r = i(152), a = i(19).getFieldValue, o = i(89).CURRENT_SESSION_INDEX;
    e.exports = {
      provides: "first_session",
      shouldTrack: !0,
      getter: [
        () => {
          const e = r.getEvents();
          if (e && e.length > 0) {
            const t = e[0], i = a(t, [n.FIELDS.SESSION_INDEX]);
            return i === o;
          }
          return !0;
        },
      ],
    };
  },
  (e, t) => {
    e.exports = {
      fieldsNeeded: ["first_session"],
      match(e) {
        return !!e.first_session;
      },
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerApiModule("behavior", i(163));
    };
  },
  (e, t, i) => {
    function n(e, t) {
      const i = d.buildFromSpecV0_1(t);
      if (1 !== i.length)
        throw new Error(
          "Invalid query descriptor; verify that no aggregators are specified"
        );
      return f.execute(i[0], e);
    }
    function r(e, t) {
      return u.map(e, e => {
        return u.isFunction(e.toObject) ? e.toObject(t) : e;
      });
    }
    function a(e, t) {
      if (!e) return ["Descriptor not defined"];
      const i = [];
      return e.count && i.push('Unexpected "count" clause specified'),
      e.pick &&
        e.pick.modifier &&
        t.indexOf(e.pick.modifier) === -1 &&
        i.push('Invalid "pick" modifier "' + e.pick.modifier + '"'),
      u.each(e.filters, e => {
        u.isUndefined(e.modifier) ||
          i.push('Unexpected "filter" modifier "' + e.modifier + '"');
      }),
      i.length > 0 ? i : void 0
    ;
    }
    function o(e, t) {
      let i;
      const o = { revenueAsTag: !1, timeAsTimestamp: !0 };
      if (u.isUndefined(t)) return (i = l.getEvents(e)), r(i, o);
      if (u.isNumber(t)) {
        if (t <= 0)
          throw new Error("Count must be a positive integer, got " + t);
        return (i = l.getEvents(e)), r(i.slice(-t), o);
      }
      const s = a(t, u.values(d.RECENCY_FILTERS));
      if (s) throw new Error(s.join("\n"));
      return (i = l.getEvents(e)), r(n(i, t), o);
    }
    function s(e, t) {
      if (((t = u.cloneDeep(t) || {}), !t.pick))
        throw new Error('No "pick" clause provided in query descriptor');
      if (!t.pick.name)
        throw new Error('No field name provided in "pick" clause');
      t.pick.modifier = t.pick.modifier || d.FREQUENCY_FILTERS.MOST_FREQUENT;
      const i = a(t, u.values(d.FREQUENCY_FILTERS));
      if (i) throw new Error(i.join("\n"));
      const r = l.getEvents(e);
      return n(r, t);
    }
    function c(e, t) {
      const i = d.buildFromSpecV0_2(t);
      const n = l.getEvents(e);
      let a = r(f.execute(i, n), { revenueAsTag: !0, timeAsTimestamp: !1 });
      return (
        (t.pick || (t.reduce && "count" === t.reduce.aggregator)) &&
          (a = u.flatten(a)),
        t.reduce && (a = a[0]),
        a
      );
    }
    var u = i(2),
      l = i(152),
      d = i(154),
      f = i(155);
    e.exports = [
      "stores/visitor_events",
      e => {
        return {
          getEvents: u.partial(o, e),
          getByFrequency: u.partial(s, e),
          query: u.partial(c, e),
        };
      },
    ];
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerDependency("sources/browser_id", i(165)),
        e.registerVisitorProfileProvider(i(170)),
        e.registerVisitorProfileProvider(i(171)),
        e.registerAudienceMatcher("browser_version", i(172));
    };
  },
  (e, t, i) => {
    const n = i(166);
    (t.getId = () => {
      return n.get().browser.id;
    }),
      (t.getVersion = () => {
        return n.get().browser.version;
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(167), a = i(40), o = i(7), s = i(16), c = i(9), u = s.get("stores/ua_data");
    t.get = () => {
      let e = u.get();
      return (
        n.isEmpty(e) &&
          ((e = r.parseUA(a.getUserAgent())),
          c.dispatch(o.SET_UA_DATA, { data: e })),
        e
      );
    };
  },
  (e, t, i) => {
    function n(e) {
      if (((e = (e || "").toLowerCase()), e in c)) return e;
      const t = a.keys(c);
      return a.find(t, t => {
        const i = c[t];
        return a.includes(i, e);
      }) || "unknown";
    }
    function r(e, t, i) {
      return t
        ? t
        : "unknown" === e
        ? "unknown"
        : i
        ? "mobile"
        : "desktop_laptop";
    }
    var a = i(2);
    const o = i(168);
    t.parseUA = e => {
      const t = new o(e), i = t.getBrowser(), a = t.getOS(), c = t.getDevice(), l = (a.name || "unknown").toLowerCase(), d = (i.name || "unknown").toLowerCase(), f = s(c.type, d, l);
      return {
        browser: { id: n(i.name), version: i.version },
        platform: { name: l, version: a.version },
        device: {
          model: u[c.model] || "unknown",
          type: r(d, c.type, f),
          isMobile: f,
        },
      };
    };
    var s = (e, t, i) => {
        if (a.includes(["mobile", "tablet"], e)) return !0;
        if (a.includes(["opera mini"], t)) return !0;
        const n = ["android", "blackberry", "ios", "windows phone"];
        return !!a.includes(n, i);
      },
      c = {
        gc: [
          "chrome",
          "chromium",
          "silk",
          "yandex",
          "maxthon",
          "chrome webview",
        ],
        edge: ["edge"],
        ie: ["internet explorer", "iemobile"],
        ff: ["firefox", "iceweasel"],
        opera: ["opera", "opera mini", "opera tablet"],
        safari: ["safari", "mobile safari", "webkit"],
        ucbrowser: ["uc browser"],
      },
      u = { iPhone: "iphone", iPad: "ipad" };
  },
  function (e, t, i) {
    let n;
    !((r, a) => {
      "use strict";
      const o = "0.7.17",
            s = "",
            c = "?",
            u = "function",
            l = "undefined",
            d = "object",
            f = "string",
            p = "major",
            g = "model",
            h = "name",
            _ = "type",
            v = "vendor",
            E = "version",
            m = "architecture",
            I = "console",
            y = "mobile",
            S = "tablet",
            T = "smarttv",
            A = "wearable",
            R = "embedded",
            D = {
              extend(e, t) {
                const i = {};
                for (const n in e)
                  t[n] && t[n].length % 2 === 0
                    ? (i[n] = t[n].concat(e[n]))
                    : (i[n] = e[n]);
                return i;
              },
              has(e, t) {
                return (
                  "string" == typeof e &&
                  t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                );
              },
              lowerize(e) {
                return e.toLowerCase();
              },
              major(e) {
                return typeof e === f ? e.replace(/[^\d\.]/g, "").split(".")[0] : a;
              },
              trim(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              },
            },
            b = {
              rgx(e, t) {
                for (let i, n, r, o, s, c, l = 0; l < t.length && !s; ) {
                  const f = t[l], p = t[l + 1];
                  for (i = n = 0; i < f.length && !s; )
                    if ((s = f[i++].exec(e)))
                      for (r = 0; r < p.length; r++)
                        (c = s[++n]),
                          (o = p[r]),
                          typeof o === d && o.length > 0
                            ? 2 == o.length
                              ? typeof o[1] == u
                                ? (this[o[0]] = o[1].call(this, c))
                                : (this[o[0]] = o[1])
                              : 3 == o.length
                              ? typeof o[1] !== u || (o[1].exec && o[1].test)
                                ? (this[o[0]] = c ? c.replace(o[1], o[2]) : a)
                                : (this[o[0]] = c ? o[1].call(this, c, o[2]) : a)
                              : 4 == o.length &&
                                (this[o[0]] = c
                                  ? o[3].call(this, c.replace(o[1], o[2]))
                                  : a)
                            : (this[o] = c ? c : a);
                  l += 2;
                }
              },
              str(e, t) {
                for (const i in t)
                  if (typeof t[i] === d && t[i].length > 0) {
                    for (let n = 0; n < t[i].length; n++)
                      if (D.has(t[i][n], e)) return i === c ? a : i;
                  } else if (D.has(t[i], e)) return i === c ? a : i;
                return e;
              },
            },
            w = {
              browser: {
                oldsafari: {
                  version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                },
              },
              device: {
                amazon: { model: { "Fire Phone": ["SD", "KF"] } },
                sprint: {
                  model: { "Evo Shift 4G": "7373KT" },
                  vendor: { HTC: "APA", Sprint: "Sprint" },
                },
              },
              os: {
                windows: {
                  version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2000: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM",
                  },
                },
              },
            },
            O = {
              browser: [
                [
                  /(opera\smini)\/([\w\.-]+)/i,
                  /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                  /(opera).+version\/([\w\.]+)/i,
                  /(opera)[\/\s]+([\w\.]+)/i,
                ],
                [h, E],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [[h, "Opera Mini"], E],
                [/\s(opr)\/([\w\.]+)/i],
                [[h, "Opera"], E],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                  /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                  /(?:ms|\()(ie)\s([\w\.]+)/i,
                  /(rekonq)\/([\w\.]+)*/i,
                  /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
                ],
                [h, E],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [[h, "IE"], E],
                [/(edge)\/((\d+)?[\w\.]+)/i],
                [h, E],
                [/(yabrowser)\/([\w\.]+)/i],
                [[h, "Yandex"], E],
                [/(puffin)\/([\w\.]+)/i],
                [[h, "Puffin"], E],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [[h, "UCBrowser"], E],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[h, /_/g, " "], E],
                [/(micromessenger)\/([\w\.]+)/i],
                [[h, "WeChat"], E],
                [/(QQ)\/([\d\.]+)/i],
                [h, E],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [h, E],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [E, [h, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [E, [h, "Facebook"]],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [E, [h, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [[h, /(.+)/, "$1 WebView"], E],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [[h, /(.+(?:g|us))(.+)/, "$1 $2"], E],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [E, [h, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                [h, E],
                [/(dolfin)\/([\w\.]+)/i],
                [[h, "Dolphin"], E],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [[h, "Chrome"], E],
                [/(coast)\/([\w\.]+)/i],
                [[h, "Opera Coast"], E],
                [/fxios\/([\w\.-]+)/i],
                [E, [h, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [E, [h, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [E, h],
                [
                  /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
                ],
                [[h, "GSA"], E],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [h, [E, b.str, w.browser.oldsafari.version]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                [h, E],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [[h, "Netscape"], E],
                [
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                  /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                  /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                  /(links)\s\(([\w\.]+)/i,
                  /(gobrowser)\/?([\w\.]+)*/i,
                  /(ice\s?browser)\/v?([\w\._]+)/i,
                  /(mosaic)[\/\s]([\w\.]+)/i,
                ],
                [h, E],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [[m, "amd64"]],
                [/(ia32(?=;))/i],
                [[m, D.lowerize]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[m, "ia32"]],
                [/windows\s(ce|mobile);\sppc;/i],
                [[m, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [[m, /ower/, "", D.lowerize]],
                [/(sun4\w)[;\)]/i],
                [[m, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
                ],
                [[m, D.lowerize]],
              ],
              device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                [g, v, [_, S]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [g, [v, "Apple"], [_, S]],
                [/(apple\s{0,1}tv)/i],
                [
                  [g, "Apple TV"],
                  [v, "Apple"],
                ],
                [
                  /(archos)\s(gamepad2?)/i,
                  /(hp).+(touchpad)/i,
                  /(hp).+(tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /\s(nook)[\w\s]+build\/(\w+)/i,
                  /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                ],
                [v, g, [_, S]],
                [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                [g, [v, "Amazon"], [_, S]],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                [
                  [g, b.str, w.device.amazon.model],
                  [v, "Amazon"],
                  [_, y],
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [g, v, [_, y]],
                [/\((ip[honed|\s\w*]+);/i],
                [g, [v, "Apple"], [_, y]],
                [
                  /(blackberry)[\s-]?(\w+)/i,
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                  /(hp)\s([\w\s]+\w)/i,
                  /(asus)-?(\w+)/i,
                ],
                [v, g, [_, y]],
                [/\(bb10;\s(\w+)/i],
                [g, [v, "BlackBerry"], [_, y]],
                [
                  /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
                ],
                [g, [v, "Asus"], [_, S]],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                  [v, "Sony"],
                  [g, "Xperia Tablet"],
                  [_, S],
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                [g, [v, "Sony"], [_, y]],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [v, g, [_, I]],
                [/android.+;\s(shield)\sbuild/i],
                [g, [v, "Nvidia"], [_, I]],
                [/(playstation\s[34portablevi]+)/i],
                [g, [v, "Sony"], [_, I]],
                [/(sprint\s(\w+))/i],
                [
                  [v, b.str, w.device.sprint.vendor],
                  [g, b.str, w.device.sprint.model],
                  [_, y],
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                [v, g, [_, S]],
                [
                  /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                  /(zte)-(\w+)*/i,
                  /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i,
                ],
                [v, [g, /_/g, " "], [_, y]],
                [/(nexus\s9)/i],
                [g, [v, "HTC"], [_, S]],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                [g, [v, "Huawei"], [_, y]],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [v, g, [_, y]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [g, [v, "Microsoft"], [_, I]],
                [/(kin\.[onetw]{3})/i],
                [
                  [g, /\./g, " "],
                  [v, "Microsoft"],
                  [_, y],
                ],
                [
                  /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
                  /mot[\s-]?(\w+)*/i,
                  /(XT\d{3,4}) build\//i,
                  /(nexus\s6)/i,
                ],
                [g, [v, "Motorola"], [_, y]],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [g, [v, "Motorola"], [_, S]],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                  [v, D.trim],
                  [g, D.trim],
                  [_, T],
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [g, /^/, "SmartTV"],
                  [v, "Samsung"],
                  [_, T],
                ],
                [/\(dtv[\);].+(aquos)/i],
                [g, [v, "Sharp"], [_, T]],
                [
                  /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                  /((SM-T\w+))/i,
                ],
                [[v, "Samsung"], g, [_, S]],
                [/smart-tv.+(samsung)/i],
                [v, [_, T], g],
                [
                  /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                  /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
                  /sec-((sgh\w+))/i,
                ],
                [[v, "Samsung"], g, [_, y]],
                [/sie-(\w+)*/i],
                [g, [v, "Siemens"], [_, y]],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                [[v, "Nokia"], g, [_, y]],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                [g, [v, "Acer"], [_, S]],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [g, [v, "LG"], [_, S]],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [[v, "LG"], g, [_, S]],
                [/(lg) netcast\.tv/i],
                [v, g, [_, T]],
                [
                  /(nexus\s[45])/i,
                  /lg[e;\s\/-]+(\w+)*/i,
                  /android.+lg(\-?[\d\w]+)\s+build/i,
                ],
                [g, [v, "LG"], [_, y]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [g, [v, "Lenovo"], [_, S]],
                [/linux;.+((jolla));/i],
                [v, g, [_, y]],
                [/((pebble))app\/[\d\.]+\s/i],
                [v, g, [_, A]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [v, g, [_, y]],
                [/crkey/i],
                [
                  [g, "Chromecast"],
                  [v, "Google"],
                ],
                [/android.+;\s(glass)\s\d/i],
                [g, [v, "Google"], [_, A]],
                [/android.+;\s(pixel c)\s/i],
                [g, [v, "Google"], [_, S]],
                [/android.+;\s(pixel xl|pixel)\s/i],
                [g, [v, "Google"], [_, y]],
                [
                  /android.+(\w+)\s+build\/hm\1/i,
                  /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                  /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,
                  /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i,
                ],
                [
                  [g, /_/g, " "],
                  [v, "Xiaomi"],
                  [_, y],
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],
                [
                  [g, /_/g, " "],
                  [v, "Xiaomi"],
                  [_, S],
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [g, [v, "Meizu"], [_, S]],
                [
                  /android.+a000(1)\s+build/i,
                  /android.+oneplus\s(a\d{4})\s+build/i,
                ],
                [g, [v, "OnePlus"], [_, y]],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [g, [v, "RCA"], [_, S]],
                [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],
                [g, [v, "Dell"], [_, S]],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [g, [v, "Verizon"], [_, S]],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [[v, "Barnes & Noble"], g, [_, S]],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [g, [v, "NuVision"], [_, S]],
                [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],
                [[v, "ZTE"], g, [_, S]],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [g, [v, "Swiss"], [_, y]],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [g, [v, "Swiss"], [_, S]],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [g, [v, "Zeki"], [_, S]],
                [
                  /(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,
                  /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i,
                ],
                [[v, "Dragon Touch"], g, [_, S]],
                [/android.+[;\/]\s*(NS-?.+)\s+build/i],
                [g, [v, "Insignia"], [_, S]],
                [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],
                [g, [v, "NextBook"], [_, S]],
                [
                  /android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
                ],
                [[v, "Voice"], g, [_, y]],
                [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],
                [[v, "LvTel"], g, [_, y]],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [g, [v, "Envizen"], [_, S]],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],
                [v, g, [_, S]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [g, [v, "MachSpeed"], [_, S]],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [v, g, [_, S]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [g, [v, "Rotor"], [_, S]],
                [/android.+(KS(.+))\s+build/i],
                [g, [v, "Amazon"], [_, S]],
                [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],
                [v, g, [_, S]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [[_, D.lowerize], v, g],
                [/(android.+)[;\/].+build/i],
                [g, [v, "Generic"]],
              ],
              engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [E, [h, "EdgeHTML"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                  /(icab)[\/\s]([23]\.[\d\.]+)/i,
                ],
                [h, E],
                [/rv\:([\w\.]+).*(gecko)/i],
                [E, h],
              ],
              os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [h, E],
                [
                  /(windows)\snt\s6\.2;\s(arm)/i,
                  /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,
                  /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                ],
                [h, [E, b.str, w.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                  [h, "Windows"],
                  [E, b.str, w.os.windows.version],
                ],
                [/\((bb)(10);/i],
                [[h, "BlackBerry"], E],
                [
                  /(blackberry)\w*\/?([\w\.]+)*/i,
                  /(tizen)[\/\s]([\w\.]+)/i,
                  /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                  /linux;.+(sailfish);/i,
                ],
                [h, E],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                [[h, "Symbian"], E],
                [/\((series40);/i],
                [h],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [[h, "Firefox OS"], E],
                [
                  /(nintendo|playstation)\s([wids34portablevu]+)/i,
                  /(mint)[\/\s\(]?(\w+)*/i,
                  /(mageia|vectorlinux)[;\s]/i,
                  /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                  /(hurd|linux)\s?([\w\.]+)*/i,
                  /(gnu)\s?([\w\.]+)*/i,
                ],
                [h, E],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [[h, "Chromium OS"], E],
                [/(sunos)\s?([\w\.]+\d)*/i],
                [[h, "Solaris"], E],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                [h, E],
                [/(haiku)\s(\w+)/i],
                [h, E],
                [
                  /cfnetwork\/.+darwin/i,
                  /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                ],
                [
                  [E, /_/g, "."],
                  [h, "iOS"],
                ],
                [
                  /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                  /(macintosh|mac(?=_powerpc)\s)/i,
                ],
                [
                  [h, "Mac OS"],
                  [E, /_/g, "."],
                ],
                [
                  /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
                  /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
                  /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                  /(unix)\s?([\w\.]+)*/i,
                ],
                [h, E],
              ],
            },
            C = function (e, t) {
              if (
                ("object" == typeof e && ((t = e), (e = a)), !(this instanceof C))
              )
                return new C(e, t).getResult();

              let i =
                  e ||
                  (r && r.navigator && r.navigator.userAgent
                    ? r.navigator.userAgent
                    : s);

              const n = t ? D.extend(O, t) : O;
              return (this.getBrowser = () => {
                const e = { name: a, version: a };
                return (
                  b.rgx.call(e, i, n.browser), (e.major = D.major(e.version)), e
                );
              }),
              (this.getCPU = () => {
                const e = { architecture: a };
                return b.rgx.call(e, i, n.cpu), e;
              }),
              (this.getDevice = () => {
                const e = { vendor: a, model: a, type: a };
                return b.rgx.call(e, i, n.device), e;
              }),
              (this.getEngine = () => {
                const e = { name: a, version: a };
                return b.rgx.call(e, i, n.engine), e;
              }),
              (this.getOS = () => {
                const e = { name: a, version: a };
                return b.rgx.call(e, i, n.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = () => {
                return i;
              }),
              (this.setUA = function (e) {
                return (i = e), this;
              }),
              this;
            };
      (C.VERSION = o),
        (C.BROWSER = { NAME: h, MAJOR: p, VERSION: E }),
        (C.CPU = { ARCHITECTURE: m }),
        (C.DEVICE = {
          MODEL: g,
          VENDOR: v,
          TYPE: _,
          CONSOLE: I,
          MOBILE: y,
          SMARTTV: T,
          TABLET: S,
          WEARABLE: A,
          EMBEDDED: R,
        }),
        (C.ENGINE = { NAME: h, VERSION: E }),
        (C.OS = { NAME: h, VERSION: E }),
        typeof t !== l
          ? (typeof e !== l && e.exports && (t = e.exports = C),
            (t.UAParser = C))
          : "function" === u && i(169)
          ? ((n = (() => {
              return C;
            }).call(t, i, t, e)),
            !(n !== a && (e.exports = n)))
          : r && (r.UAParser = C);
    })("object" == typeof window ? window : this);
  },
  (e, t) => {
    ((t => {
      e.exports = t;
    }).call(t, {}));
  },
  (e, t) => {
    e.exports = {
      provides: "browserId",
      shouldTrack: !0,
      isSticky: !0,
      getter: [
        "sources/browser_id",
        e => {
          return e.getId();
        },
      ],
    };
  },
  (e, t) => {
    e.exports = {
      provides: "browserVersion",
      getter: [
        "sources/browser_id",
        e => {
          return e.getVersion();
        },
      ],
    };
  },
  (e, t, i) => {
    const n = i(173).compareVersion;
    e.exports = {
      fieldsNeeded: ["browserVersion", "browserId"],
      match(e, t) {
        const i = t.value, r = e.browserId, a = e.browserVersion;
        if (0 === i.indexOf(r)) {
          const o = i.substr(r.length);
          return 0 === n(a, o);
        }
        return !1;
      },
    };
  },
  (e, t, i) => {
    const n = i(2);
    t.compareVersion = (e, t) => {
      if (!t) return 0;
      for (
        let i = t.toString().split("."), r = e.toString().split("."), a = 0;
        a < i.length;
        a++
      ) {
        if (n.isUndefined(r[a])) return -1;
        if (isNaN(Number(r[a]))) {
          if (r[a] !== i[a]) return -1;
        } else {
          if (Number(r[a]) < Number(i[a])) return -1;
          if (Number(r[a]) > Number(i[a])) return 1;
        }
      }
      return 0;
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(175)),
        e.registerAudienceMatcher("campaign", i(176));
    };
  },
  (e, t, i) => {
    const n = i(119);
    e.exports = {
      provides: "campaign",
      shouldTrack: !0,
      isSticky: !0,
      getter: [
        () => {
          return n.getQueryParamValue("utm_campaign");
        },
      ],
    };
  },
  (e, t, i) => {
    const n = i(20);
    e.exports = {
      fieldsNeeded: ["campaign"],
      match(e, t) {
        return n.hasMatch(t.value, t.match, e.campaign);
      },
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerAudienceMatcher("code", i(178));
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(144);
    (t.fieldsNeeded = []),
      (t.match = (e, t) => {
        if (n.isUndefined(t.value)) return !0;
        if ("function" == typeof t.value)
          try {
            return Boolean(r.apply(t.value));
          } catch (e) {
            return !1;
          }
        else
          try {
            return Boolean(r.eval(t.value));
          } catch (e) {
            return !1;
          }
        return !1;
      });
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(180)),
        e.registerAudienceMatcher("cookies", i(181));
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(75), a = i(16), o = a.get("stores/audience_data");
    e.exports = {
      provides: "cookies",
      isLazy: !0,
      getter: [
        () => {
          const e = r.getAll(), t = o.getFeaturesNeeded("cookies");
          return n.reduce(
            e,
            (e, i, r) => {
              return n.has(t, r) && (e[r] = i), e;
            },
            {}
          );
        },
      ],
    };
  },
  (e, t, i) => {
    const n = i(20);
    e.exports = {
      fieldsNeeded: ["cookies"],
      match(e, t) {
        const i = t.name, r = t.value, a = t.match, o = e.cookies[i];
        return n.hasMatch(r, a, o);
      },
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(183));
      const t = i(184);
      e.registerAudienceMatcher("custom_attribute", t),
        e.registerAudienceMatcher("custom_dimension", t);
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(25), a = i(23), o = i(16), s = o.get("stores/dimension_data");
    e.exports = {
      provides: "custom",
      attributionType: r.AttributionTypes.LAST_TOUCH,
      restorer(e) {
        return n.reduce(
          e,
          (e, t, i) => {
            let r = i;
            const o = s.getByApiName(i);
            const c = s.getById(i);
            let u = c;
            return n.isObject(t)
              ? (!t.id &&
                  o &&
                  ((u = o),
                  (r = o.id),
                  n.extend(t, { id: u.segmentId || u.id })),
                t.name || (u && u.apiName && (t.name = u.apiName)),
                t.id ||
                  u ||
                  a.warn(
                    "Unable to determine ID for custom attribute:",
                    i,
                    "; segmentation is disabled."
                  ),
                (e[r] = t),
                e)
              : (a.error(
                  'Unable to restore custom attribute "' +
                    i +
                    '" because value is not an object'
                ),
                e);
          },
          {}
        );
      },
      shouldTrack: !0,
    };
  },
  (e, t, i) => {
    const n = i(2), r = i(20);
    t.match = (e, t) => {
      let i;
      return (
        e.custom && (i = e.custom[t.name]),
        n.isObject(i) && (i = i.value),
        r.hasMatch(t.value, t.match, i)
      );
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerDependency("sources/device", i(186)),
        e.registerVisitorProfileProvider(i(187)),
        e.registerAudienceMatcher("device", i(188));
    };
  },
  (e, t, i) => {
    const n = i(166);
    t.getDevice = () => {
      const e = n.get().device;
      return "unknown" !== e.model
        ? e.model
        : "tablet" === e.type
        ? "tablet"
        : e.isMobile
        ? "mobile"
        : "desktop";
    };
  },
  (e, t) => {
    e.exports = {
      provides: "device",
      shouldTrack: !0,
      isSticky: !0,
      getter: [
        "sources/device",
        e => {
          return e.getDevice();
        },
      ],
    };
  },
  (e, t) => {
    e.exports = {
      fieldsNeeded: ["device"],
      match(e, t) {
        return e.device === t.value;
      },
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(190)),
        e.registerAudienceMatcher("device_type", i(191));
    };
  },
  (e, t, i) => {
    const n = i(166);
    e.exports = {
      provides: "device_type",
      shouldTrack: !0,
      isSticky: !0,
      getter: [
        () => {
          const e = n.get().device;
          switch (e.type) {
            case "mobile":
              return "phone";
            case "tablet":
            case "desktop_laptop":
              return e.type;
            default:
              return "other";
          }
        },
      ],
    };
  },
  (e, t) => {
    e.exports = {
      fieldsNeeded: ["device_type"],
      match(e, t) {
        return e.device_type === t.value;
      },
    };
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(193)),
        e.registerAudienceMatcher("referrer", i(194));
    };
  },
  (e, t, i) => {
    const n = i(80), r = i(99);
    e.exports = {
      provides: "referrer",
      shouldTrack: !0,
      isSticky: !0,
      getter: [
        () => {
          let e = r.getReferrer() || n.getReferrer();
          return "" === e && (e = null), e;
        },
      ],
    };
  },
  (e, t, i) => {
    const n = i(195);
    (t.fieldsNeeded = ["referrer"]),
      (t.match = (e, t) => {
        return null !== e.referrer && n(e.referrer, t);
      });
  },
  (e, t, i) => {
    function n(e) {
      let t = e.indexOf("?");
      return (
        t !== -1 && (e = e.substring(0, t)),
        (t = e.indexOf("#")),
        t !== -1 && (e = e.substring(0, t)),
        e
      );
    }
    function r(e) {
      return a(n(e));
    }
    function a(e, t) {
      (e = e.replace("/?", "?")), (e = e.toLowerCase().replace(/[\/&?]+$/, ""));
      let i = l.slice(0);
      t || (i = i.concat(c));
      for (let n = i.length, r = 0; r < n; r++) {
        const a = i[r], o = new RegExp("^" + a);
        e = e.replace(o, "");
      }
      return e;
    }
    function o(e) {
      const t = e.split("?");
      if (t[1]) {
        const i = t[1].split("#"), n = i[0], r = i[1], a = n.split("&"), o = [];
        return s.each(a, e => {
          0 !== e.indexOf(u) && o.push(e);
        }),
        (t[1] = ""),
        o.length > 0 && (t[1] = "?" + o.join("&")),
        r && (t[1] += "#" + r),
        t.join("")
      ;
      }
      return e;
    }
    var s = i(2);
    e.exports = (e, t) => {
      e = o(e);
      let i = t.value;
      switch (t.match) {
        case "exact":
          return (e = a(e)), e === a(i);
        case "regex":
          try {
            return Boolean(e.match(i));
          } catch (e) {}
          return !1;
        case "simple":
          return (e = r(e)), (i = r(i)), e === i;
        case "substring":
          return (e = a(e, !0)), (i = a(i, !0)), e.indexOf(i) !== -1;
        default:
          return !1;
      }
    };
    var c = ["www."],
      u = "optimizely_",
      l = [
        "https?://.*?.?optimizelyedit.(com|test)/",
        "https?://.*.?optimizelypreview.(com|test)/",
        "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/",
        "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/",
        "https?://",
      ];
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(197)),
        e.registerAudienceMatcher("source_type", i(199));
    };
  },
  (e, t, i) => {
    const n = i(119),
          r = i(80),
          a = i(99),
          o = i(198),
          s = [
            "google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)",
            "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)",
            "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search",
            "baidu\\.\\w{2,3}(\\.\\w{2,3})?/",
            "https://(www)?\\.google\\..*?/?$",
            "https://search\\.yahoo\\..*?/?$",
            "https://(www)?\\.bing\\..*?/?$",
          ];
    e.exports = {
      provides: "source_type",
      shouldTrack: !0,
      isSticky: !1,
      getter: [
        () => {
          return (e, t) => {
            const i = () => {
                      if (
                        n.getQueryParamValue("utm_source") ||
                        n.getQueryParamValue("gclid") ||
                        n.getQueryParamValue("otm_source")
                      )
                        return "campaign";
                      for (
                        var e = a.getReferrer() || r.getReferrer(), t = 0;
                        t < s.length;
                        t++
                      ) {
                        const i = s[t], c = e.match(i);
                        if (c) return "search";
                      }
                      return e && o.guessDomain(e) !== o.guessDomain(n.getUrl())
                        ? "referral"
                        : "direct";
                    },
                  c = (e, t) => {
                    return !e || "direct" !== t;
                  },
                  u = e(),
                  l = i();
            c(u, l) && t(l);
          };
        },
      ],
    };
  },
  (e, t) => {
    t.guessDomain = (e, t) => {
      if (!e) return "";
      try {
        return t
          ? e.match(/:\/\/(.[^\/]+)/)[1]
          : e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1];
      } catch (e) {
        return "";
      }
    };
  },
  (e, t, i) => {
    const n = i(20);
    (t.fieldsNeeded = ["source_type"]),
      (t.match = (e, t) => {
        return n.hasMatch(t.value, t.match, e.source_type);
      });
  },
  (e, t, i) => {
    e.exports = e => {
      e.registerVisitorProfileProvider(i(201)),
        e.registerVisitorProfileProvider(i(202)),
        e.registerAudienceMatcher("time_and_day", i(203));
    };
  },
  (e, t, i) => {
    const n = i(24);
    e.exports = {
      provides: "currentTimestamp",
      shouldTrack: !0,
      isLazy: !0,
      getter: [
        () => {
          return n.now();
        },
      ],
    };
  },
  (e, t) => {
    e.exports = {
      provides: "offset",
      shouldTrack: !0,
      isLazy: !0,
      getter: [
        () => {
          return new Date().getTimezoneOffset();
        },
      ],
    };
  },
  (e, t, i) => {
    const n = i(204);
    (t.fieldsNeeded = ["currentTimestamp"]),
      (t.match = (e, t) => {
        return n.test(t.value, new Date(e.currentTimestamp));
      });
  },
  (e, t, i) => {
    function n(e) {
      const t = e.split(o);
      if (3 !== t.length) throw new Error("Invalid time and day string " + e);
      const i = t[2].split(s);
      return { start_time: t[0], end_time: t[1], days: i };
    }
    function r(e) {
      const t = e.split(c);
      if (2 !== t.length)
        throw new Error(
          "optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " +
            e
        );
      return 60 * parseInt(t[0], 10) + parseInt(t[1], 10);
    }
    const a = i(2);
    var o = "_";
    var s = ",";
    var c = ":";
    t.test = (e, t) => {
      const i = [
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
              ],
            o = n(e),
            s = r(o.start_time),
            c = r(o.end_time),
            u = 60 * t.getHours() + t.getMinutes(),
            l = i[t.getDay()];
      return u >= s && u <= c && a.includes(o.days, l);
    };
  },
  (e, t, i) => {
    function n(e) {
      class t {
        constructor(e, t, i) {
          try {
            c(t), (e[i] = t);
          } catch (e) {
            N.emitError(
              new X("Bad value for eventTags[" + i + "]: " + e.message)
            );
          }
          return e;
        }

        static createDOMChangedObserver() {
          const e = n.getDocumentElement(),
                t = { type: "viewTrigger", name: "DOMChanged" },
                i = { attributes: !0, childList: !0, subtree: !0, characterData: !0 },
                o = a.create(() => {
                  r.emit(t, !0);
                });
          a.observe(o, e, i);
        }
      }

      const i = C.keys(ie);
      var n = C.omit(e, i);
      var r = C.pick(e, i);
      var a = C.reduce(n, t, {});

      const o = C.reduce(
        r,
        (e, i, n) => {
          const r = ie[n];
          r.excludeFeature || t(a, i, n);
          try {
            r.validate(i), (e[n] = r.sanitize(i)), (a[n] = e[n]);
          } catch (e) {
            N.emitError(
              new X("Bad value for eventMetrics[" + n + "]: " + e.message)
            );
          }
          return e;
        },
        {}
      );

      return (o.tags = a), o;
    }
    function r(e) {
      const t = C.extend(
        {
          entity_id: e.pageId,
          key: e.pageApiName,
          timestamp: e.timestamp,
          uuid: e.eventId,
          type: J,
        },
        n(e.eventTags)
      );
      return t;
    }
    function a(e) {
      return C.extend(
        {
          entity_id: e.eventEntityId,
          key: e.eventApiName,
          timestamp: e.timestamp,
          uuid: e.eventId,
          type: e.eventCategory,
        },
        n(e.eventTags)
      );
    }
    function o(e) {
      return C.extend(
        {
          entity_id: e.eventEntityId,
          key: e.eventApiName,
          timestamp: e.timestamp,
          uuid: e.eventId,
          type: e.eventCategory,
        },
        n(e.eventTags)
      );
    }
    function s(e) {
      return {
        entity_id: null,
        type: Q,
        uuid: e.eventId,
        timestamp: e.timestamp,
      };
    }
    function c(e) {
      if (null == e) throw new Error("Feature value is null");
      if ("object" == typeof e) {
        let t;
        try {
          t = x.stringify(e);
        } catch (e) {}
        throw new Error('Feature value is complex: "' + t || '[object]"');
      }
    }
    function u(e) {
      if (null == e) throw new Error("Metric value is null");
      if (!C.isNumber(e)) throw new Error("Metric value is not numeric");
    }
    function l(e) {
      return C.reduce(
        e,
        (e, t) => {
          try {
            c(t.value),
              e.push({
                entity_id: t.id || null,
                key: t.name,
                type: t.type,
                value: t.value,
              });
          } catch (e) {
            F.warn("Error evaluating user feature", t, e);
          }
          return e;
        },
        []
      );
    }
    function d(e, t, i) {
      Y.dispatch(V.REGISTER_TRACKER_EVENT, { event: e, decisions: i }),
        f(t),
        b();
    }
    function f(e) {
      const t = l(e);
      Y.dispatch(V.UPDATE_TRACKER_VISITOR_ATTRIBUTES, { attributes: t });
    }
    function p(e) {
      const t = l(e.userFeatures),
            i = {
              account_id: e.accountId,
              anonymize_ip: e.anonymizeIP,
              client_name: e.clientName,
              client_version: e.clientVersion,
              project_id: e.projectId,
              visitors: [
                {
                  session_id: h(e.sessionId),
                  visitor_id: e.visitorId,
                  attributes: t,
                  snapshots: [
                    {
                      decisions: [
                        {
                          campaign_id: e.layerId,
                          experiment_id: e.experimentId,
                          variation_id: e.variationId,
                          is_campaign_holdback: e.isLayerHoldback,
                        },
                      ],
                      events: [
                        {
                          uuid: e.decisionId,
                          entity_id: e.layerId,
                          timestamp: e.timestamp,
                          type: $,
                        },
                      ],
                    },
                  ],
                },
              ],
            };
      Y.dispatch(V.REGISTER_PREVIOUS_BATCH, i), b();
    }
    function g(e) {
      const t = C.isNull(q.getAnonymizeIP()) ? void 0 : q.getAnonymizeIP(),
            i = {
              account_id: e.accountId,
              anonymize_ip: t,
              client_name: e.clientName,
              client_version: e.clientVersion,
              project_id: e.projectId,
              visitors: [],
            };
      (i.revision = e.revision), Z && (i.enrich_decisions = !0);
      const n = {
                session_id: h(e.sessionId),
                visitor_id: e.visitorId,
                attributes: [],
                snapshots: [],
              },
            r = w(e.layerStates);
      Y.dispatch(V.REGISTER_TRACKER_VISITOR, {
        data: i,
        visitor: n,
        decisions: r,
      }),
        b();
    }
    function h(e) {
      return oe ? ae : e;
    }
    function _(e) {
      const t = {
        entity_id: e.layerId,
        type: $,
        uuid: e.decisionId,
        timestamp: e.timestamp,
      };
      Y.dispatch(V.REGISTER_TRACKER_DECISION, {
        decisionEvent: t,
        decisions: w(e.layerStates),
      }),
        f(e.userFeatures),
        b();
    }
    function v() {
      if (!W.canSend()) return void F.debug("Not sending events (holding)");
      const e = W.hasEventsToSend(), t = W.hasPreviousBatchesToSend();
      return e || t
        ? (t &&
            (C.each(W.getPreviousBatches(), E),
            Y.dispatch(V.RESET_TRACKER_PREVIOUS_BATCHES)),
          void (
            e &&
            (Y.dispatch(V.FINALIZE_BATCH_SNAPSHOT),
            E(W.getEventBatch()),
            Y.dispatch(V.RESET_TRACKER_EVENTS))
          ))
        : void F.debug(
            "Not sending events because there are no events to send"
          );
    }
    function E(e) {
      F.debug("Sending ticket:", e);
      const t = L.generate();
      B.retryableRequest({ url: P, method: "POST", data: m(e) }, t);
    }
    function m(e) {
      const t = C.extend(
        {},
        C.pick(e, [
          "account_id",
          "anonymize_ip",
          "client_name",
          "client_version",
          "enrich_decisions",
          "project_id",
          "revision",
        ]),
        { visitors: C.map(e.visitors, I) }
      );
      return t;
    }
    function I(e) {
      return {
        visitor_id: e.visitor_id,
        session_id: ae,
        attributes: C.map(e.attributes, y),
        snapshots: C.map(e.snapshots, S),
      };
    }
    function y(e) {
      return D(e, { entity_id: "e", key: "k", type: "t", value: "v" });
    }
    function S(e) {
      let t = e.events;
      return (
        (t = T(t)),
        {
          activationTimestamp: q.getActivationTimestamp(),
          decisions: C.map(e.decisions, A),
          events: C.map(t, R),
        }
      );
    }
    function T(e) {
      const t = C.reduce(
        e,
        (e, t) => {
          let i;

          const n =
            t.type === J &&
            C.isEmpty(t.tags) &&
            C.isEmpty(C.pick(t, C.keys(ie)));

          if (((i = n ? t.type : t.uuid), e[i])) {
            let r = e[i].timestamp;
            t.timestamp > r && (r = t.timestamp),
              (e[i] = C.extend({}, e[i], {
                key: e[i].key + "-" + (t.key || ""),
                entity_id: e[i].entity_id + "-" + t.entity_id,
                timestamp: r,
              }));
          } else e[i] = t;
          return e;
        },
        {}
      );
      return C.values(t);
    }
    function A(e) {
      return D(e, {
        campaign_id: "c",
        experiment_id: "x",
        is_campaign_holdback: "h",
        variation_id: "v",
      });
    }
    function R(e) {
      return (
        e.key === $ && ((e.type = $), delete e.key),
        D(e, {
          entity_id: "e",
          key: "k",
          quantity: "q",
          revenue: "$",
          tags: "a",
          timestamp: "t",
          uuid: "u",
          value: "v",
          type: "y",
        })
      );
    }
    function D(e, t) {
      return C.reduce(
        e,
        (e, i, n) => {
          return n in t && (e[t[n] || n] = i), e;
        },
        {}
      );
    }
    function b() {
      class e {
        constructor() {
          const t = !ne || j.isLoaded();
          t && v(), W.isPolling() && G.setTimeout(e, te);
        }

        static exports(e) {
          e.registerAnalyticsTracker("optimizely", fe),
            H.on({
              filter: { type: K.TYPES.ANALYTICS, name: "sendEvents" },
              handler() {
                Y.dispatch(V.SET_TRACKER_SEND_EVENTS, !0), W.isPolling() || v();
              },
            }),
            H.on({
              filter: { type: K.TYPES.ANALYTICS, name: "holdEvents" },
              handler() {
                Y.dispatch(V.SET_TRACKER_SEND_EVENTS, !1);
              },
            }),
            Y.dispatch(V.SET_TRACKER_SEND_EVENTS, !re);
          const t = H.on({
            filter: { type: "lifecycle", name: "activated" },
            handler() {
              W.observe(O), H.off(t);
            },
          });
        }

        static exports(e) {
          e.registerViewProvider(i(207)), e.registerViewMatcher("url", i(208));
        }

        static exports(e) {
          e.registerViewMatcher(n, r);
        }

        static exports(e) {
          n.isReady() ? u.setUpObserver() : n.addReadyHandler(u.setUpObserver),
            e.registerViewTrigger(c, u);
        }

        static exports(e) {
          const t = new a(e => {
            s.updateAllViewTags();
            const t = r.trackClickEvent(e);
            t
              ? o.log("Tracking click event:", e)
              : o.log("Not tracking click event:", e);
          });
          e.registerEventImplementation("click", {
            attach(e) {
              t.hasEvents() || t.listen(),
                t.addEvent(e),
                o.debug("Started listening for click event (" + n(e) + "):", e);
            },
            detach(e) {
              t.removeEvent(e),
                t.hasEvents() || t.unlisten(),
                o.debug("Stopped listening for click event (" + n(e) + "):", e);
            },
          });
        }

        static exports(e) {
          e.registerDecider(a, s), e.registerDecider(o, s);
        }
      }

      return W.shouldBatch()
        ? void (
            W.isPolling() ||
            (G.setTimeout(e, te),
            Y.dispatch(V.SET_TRACKER_POLLING, !0),
            G.setTimeout(() => {
              Y.dispatch(V.SET_TRACKER_BATCHING, !1),
                Y.dispatch(V.SET_TRACKER_POLLING, !1);
            }, ee))
          )
        : void v();
    }
    function w(e) {
      return C.map(e, e => {
        return {
          campaign_id: e.layerId,
          experiment_id: e.decision.experimentId,
          variation_id: e.decision.variationId,
          is_campaign_holdback: e.decision.isLayerHoldback,
        };
      });
    }
    function O() {
      const e = W.getPersistableState();
      if (e)
        try {
          F.debug("Persisting pending batch:", e),
            U.persistTrackerOptimizelyData(e),
            Y.dispatch(V.SET_TRACKER_DIRTY, !1);
        } catch (e) {
          F.debug("Failed to persist pending batch:", e);
        }
    }
    var C = i(2);
    var N = i(86);
    var L = i(5);
    var P = "https://logx.optimizely.com/v1/events";
    var V = i(7);
    const k = i(76).create;
    var x = i(26);
    var F = i(23);
    const M = i(115);
    var U = i(74);
    var G = i(40);
    var B = i(91);
    const z = i(16);
    var j = i(80);
    var H = i(87);
    var K = i(111);
    var Y = i(9);
    var q = z.get("stores/global");
    var W = z.get("stores/tracker_optimizely");
    var X = (t.Error = k("OptimizelyTrackerError"));
    var Q = "client_activation";
    var $ = "campaign_activated";
    var J = "view_activated";
    var Z = !0;
    var ee = 1e4;
    var te = 1e3;

    var ie = {
      revenue: { validate: u, sanitize: Math.floor, excludeFeature: !0 },
      quantity: { validate: u, sanitize: Math.floor, excludeFeature: !0 },
      value: { validate: u, sanitize: C.identity },
    };

    var ne = !1;
    var re = !1;
    var ae = "AUTO";
    var oe = !0;

    const se = e => {
      e.timing === M.TrackLayerDecisionTimingFlags.postRedirectPolicy
        ? p(e)
        : _(e);
    };

    const ce = [
      () => {
        return e => {
          d(r(e), e.userFeatures, w(e.layerStates));
        };
      },
    ];

    const ue = [
      () => {
        return e => {
          g(e), d(s(e), e.userFeatures, w(e.layerStates));
        };
      },
    ];

    const le = [
      () => {
        return e => {
          d(o(e), e.userFeatures, w(e.layerStates));
        };
      },
    ];

    const de = [
      () => {
        return e => {
          d(a(e), e.userFeatures, w(e.layerStates));
        };
      },
    ];

    var fe = {
      trackLayerDecision: se,
      postRedirectPolicy: M.PostRedirectPolicies.TRACK_AFTER_SYNC,
      nonRedirectPolicy: M.NonRedirectPolicies.TRACK_IMMEDIATELY,
      onPageActivated: ce,
      onClientActivation: ue,
      onClickEvent: de,
      onCustomEvent: le,
    };
  },
  (e, t, i) => {},
  (e, t, i) => {
    const n = i(119);
    e.exports = {
      provides: "url",
      getter: [
        () => {
          return n.getUrl();
        },
      ],
    };
  },
  (e, t, i) => {
    const n = i(195);
    e.exports = {
      fieldsNeeded: ["url"],
      match(e, t) {
        return n(e.url, t);
      },
    };
  },
  (e, t, i) => {
    const n = "element_present",
          r = {
            match(e, t) {
              return !!document.querySelector(t.value);
            },
          };
  },
  (e, t, i) => {
    const n = i(80),
          r = i(25),
          a = i(87),
          o = i(211),
          s = i(123),
          c = "DOMChanged",
          u = {
            token: void 0,
            setUpObserver() {
              o.createDOMChangedObserver(),
                (this.token = a.on({
                  filter: { type: "viewTrigger", name: "DOMChanged" },
                  handler() {
                    s.getViewsAndActivate(r.ViewActivationTypes.DOMChanged);
                  },
                }));
            },
            turnOffObserver() {
              a.off(this.token);
            },
          };
  },
  (e, t, i) => {
    const n = i(80), r = i(87), a = i(212);
  },
  (e, t) => {
    (t.create = e => {
      return new MutationObserver(e);
    }),
      (t.observe = (e, t, i) => {
        e.observe(t, i);
      });
  },
  (e, t, i) => {
    function n(e) {
      return "apiName: " + e.apiName + ", selector: " + e.eventFilter.selector;
    }
    const r = i(110), a = i(214), o = i(23), s = i(123);
  },
  (e, t, i) => {
    function n(e) {
      (this.handler = e),
        (this.events = []),
        (this.unlistenFn = null),
        (this.clickHandler = a.bind(function (e) {
          a.forEach(
            this.events,
            a.bind(function (t) {
              try {
                var i =
                  t.config && t.config.selector
                    ? t.config.selector
                    : t.eventFilter.selector;
                r(e, i, t) && this.handler(t);
              } catch (e) {
                o.emitError(
                  new l(
                    "Unable to handle click for selector" + i + ":" + e.message
                  )
                );
              }
            }, this)
          );
        }, this));
    }
    function r(e, t, i) {
      for (let n = e.target, r = 0; n; ) {
        let s;
        try {
          s = u(n, t);
        } catch (s) {
          const c = {
            typeofElementValue: typeof n,
            nodeName: a.result(n, ["nodeName"], null),
            nodeType: a.result(n, ["nodeType"], null),
            targetName: a.result(e, ["target", "nodeName"], null),
            targetType: a.result(e, ["target", "nodeType"], null),
            numParentsTraversed: r,
            selector: t,
            errorMessage: s.message,
            eventId: i.id,
          };
          return (
            o.emitError(new l("Unable to evaluate match for element"), c), !1
          );
        }
        if (s) return !0;
        (n = n.parentElement), r++;
      }
      return !1;
    }
    var a = i(2);
    var o = i(86);
    const s = i(76).create;
    const c = i(80);
    var u = i(215);
    var l = (t.Error = s("ClickDelegateError"));
    (n.prototype.listen = function () {
      this.unlistenFn = c.addEventListener("click", this.clickHandler, !0);
    }),
      (n.prototype.unlisten = function () {
        this.unlistenFn && (this.unlistenFn(), (this.unlistenFn = null));
      }),
      (n.prototype.hasEvents = function () {
        return this.events.length > 0;
      }),
      (n.prototype.addEvent = function (e) {
        this.events.push(e);
      }),
      (n.prototype.removeEvent = function (e) {
        this.events = a.filter(this.events, t => {
          return t.apiName !== e.apiName;
        });
      }),
      (e.exports = n);
  },
  (e, t, i) => {
    e.exports = i(216);
  },
  (e, t) => {
    "use strict";
    function i(e, t) {
      if (r) return r.call(e, t);
      for (let i = e.parentNode.querySelectorAll(t), n = 0; n < i.length; n++)
        if (i[n] == e) return !0;
      return !1;
    }
    const n = Element.prototype;

    var r =
      n.matches ||
      n.matchesSelector ||
      n.webkitMatchesSelector ||
      n.mozMatchesSelector ||
      n.msMatchesSelector ||
      n.oMatchesSelector;

    e.exports = i;
  },
  (e, t, i) => {
    function n(e, t) {
      if (
        ((this.change = e),
        (this.identifier = t.identifier),
        (this.startTime = t.startTime),
        d.shouldObserveChangesIndefinitely())
      ) {
        g.dispatch(a.INITIALIZE_CHANGE_METRICS),
          (this.rateMeter = new _(m.MOVING_WINDOW_MILLISECONDS));
        const i = r.isNull(m.MAX_MACROTASKS_IN_MOVING_WINDOW)
          ? Number.POSITIVE_INFINITY
          : m.MAX_MACROTASKS_IN_MOVING_WINDOW;
        this.rateMeter.addListener(
          i,
          r.bind(function () {
            h.warn(
              "AppendChange",
              this,
              "has overheated and will no longer apply or reapply"
            ),
              this.cancel(),
              g.dispatch(a.RECORD_CHANGE_OVERHEATED),
              o.emitError(
                new I("Change " + this.identifier + " has overheated"),
                {
                  layerId: t.action && t.action.layerId,
                  experimentId: t.action && t.action.experimentId,
                  variationId: t.action && t.action.variationId,
                  changeId: e.id,
                  changeType: e.type,
                  movingWindowMilliseconds: m.MOVING_WINDOW_MILLISECONDS,
                  maxMacroTasksInMovingWindow: i,
                }
              );
          }, this)
        );
        for (let n = Math.min(i, 50), s = 0; s <= n; s++)
          this.rateMeter.addListener(
            s,
            r.partial(e => {
              g.dispatch(a.RECORD_CHANGE_MACROTASK_RATE, {
                changeMacrotaskRate: e,
              });
            }, s)
          );
      }
    }
    var r = i(2);
    var a = i(7);
    var o = i(86);
    const s = i(137);
    const c = i(76).create;
    const u = i(218);
    const l = i(219);
    var d = i(16).get("stores/directive");
    const f = i(80);
    const p = i(220);
    var g = i(9);
    var h = i(23);
    var _ = i(221);
    const v = i(136);
    const E = i(100).create();

    var m = {
      MOVING_WINDOW_MILLISECONDS: 1e3,
      MAX_MACROTASKS_IN_MOVING_WINDOW: 10,
    };

    var I = c("ChangeOverheatError");
    (n.prototype.numberOfRootNodes = e => {
      const t = document.createElement("div");
      return (t.innerHTML = e), t.childNodes.length;
    }),
      (n.prototype.getSiblingElements = (e, t, i) => {
        for (var n = e, r = [], a = 0; a < t; a++)
          i
            ? (r.push(n.nextSibling), (n = n.nextSibling))
            : (r.push(n.previousSibling), (n = n.previousSibling));
        return r;
      }),
      (n.prototype.apply = function () {
        this.applyDeferred = l();
        try {
          var e = this.numberOfRootNodes(this.change.value);
          if (!e)
            throw new Error(
              "No DOM elements to be created for this change: " +
                this.change.value
            );

          const t = r.partial(
              this.applyDeferred.reject,
              new Error("Unable to find selector.")
            );

          let i = {};
          d.shouldObserveChangesUntilTimeout()
            ? (i = {
                timeout: r.partial(v.isTimedOut, this.startTime),
                onTimeout: t,
              })
            : d.isEditor() &&
              E.waitUntil(r.partial(v.isTimedOut, this.startTime)).then(t, t),
            (this.unobserveSelector = E.observeSelector(
              this.change.selector,
              r.bind(this.maybeApplyToElement, this),
              i
            ));
          const n = f.querySelectorAll(this.change.selector);
          r.each(n, r.bind(this.maybeApplyToElement, this));
        } catch (e) {
          this.applyDeferred.reject(e);
        }
        return this.applyDeferred;
      }),
      (n.prototype.maybeApplyToElement = function (e) {
        const t = s.CHANGE_ID_ATTRIBUTE_PREFIX + this.change.id;
        if (e.hasAttribute(t))
          return (
            h.debug(
              "Not applying AppendChange to element",
              e,
              "because it was inserted by this change"
            ),
            void this.applyDeferred.resolve()
          );
        this.rateMeter && this.rateMeter.countCurrentTick();
        const i = r.bind(this.applyOrReapplyToElement, this, e, t);
        i(), this.applyDeferred.resolve();
      }),
      (n.prototype.applyOrReapplyToElement = function (e, t) {
      let i;
      switch (this.change.operator) {
        case p.DOMInsertionType.AFTER:
          i = p.insertAdjacentHTMLType.AFTER_END;
          break;
        case p.DOMInsertionType.APPEND:
          i = p.insertAdjacentHTMLType.BEFORE_END;
          break;
        case p.DOMInsertionType.BEFORE:
          i = p.insertAdjacentHTMLType.BEFORE_BEGIN;
          break;
        case p.DOMInsertionType.PREPEND:
          i = p.insertAdjacentHTMLType.AFTER_BEGIN;
          break;
        default:
          i = p.insertAdjacentHTMLType.BEFORE_END;
      }
      e.insertAdjacentHTML(i, this.change.value),
        e.setAttribute(t, ""),
        u.setData(e, this.change.id, this.identifier, []);
      let n;
      let a;
      const o = this.numberOfRootNodes(this.change.value) - 1;
      i === p.insertAdjacentHTMLType.BEFORE_END
        ? ((n = e.lastChild), (a = this.getSiblingElements(n, o, !1)))
        : i === p.insertAdjacentHTMLType.AFTER_BEGIN
        ? ((n = e.firstChild), (a = this.getSiblingElements(n, o, !0)))
        : i === p.insertAdjacentHTMLType.BEFORE_BEGIN
        ? ((n = e.previousSibling), (a = this.getSiblingElements(n, o, !1)))
        : i === p.insertAdjacentHTMLType.AFTER_END &&
          ((n = e.nextSibling), (a = this.getSiblingElements(n, o, !0))),
        a.unshift(n),
        r.each(
          a,
          r.bind(function (e) {
            const i = e.nodeType === Node.ELEMENT_NODE ? e : f.parentElement(e);
            i.setAttribute(t, "");
            const n = u.getData(i, this.change.id, this.identifier) || [];
            n.push(e),
              u.setData(i, this.change.id, this.identifier, n),
              r.each(f.childrenOf(i), e => {
                e.setAttribute(t, "");
              });
          }, this)
        );
    }),
      (n.prototype.cancel = function () {
        this.unobserveSelector && this.unobserveSelector();
      }),
      (n.prototype.undo = function () {
        const e = s.CHANGE_ID_ATTRIBUTE_PREFIX + this.change.id, t = document.querySelectorAll("[" + e + "]");
        return r.each(
          t,
          r.bind(function (t) {
            const i = u.getData(t, this.change.id, this.identifier) || [];
            r.each(i, e => {
              e.parentNode.removeChild(e);
            }),
              t.removeAttribute(e),
              u.removeData(t, this.change.id, this.identifier),
              r.each(f.childrenOf(t), t => {
                t.removeAttribute(e);
              });
          }, this)
        ),
        l().resolve(p.changeState.UNAPPLIED);
      }),
      (e.exports = e => {
        e.registerChangeApplier(p.changeType.APPEND, n);
      });
  },
  (e, t, i) => {
    function n(e, t) {
      return [e, t].join("_");
    }
    const r = i(2), a = i(137).CHANGE_DATA_KEY;
    (t.getData = (e, t, i) => {
      const r = n(t, i);
      return e[a] && e[a][r] ? e[a][r] : null;
    }),
      (t.hasData = e => {
        return Boolean(e && e[a] && !r.isEmpty(e[a]));
      }),
      (t.removeData = (e, t, i) => {
        e[a] && delete e[a][n(t, i)];
      }),
      (t.setData = (e, t, i, r) => {
        if ("object" != typeof r) throw new Error("setData expects an object");
        e[a] || (e[a] = {}), (e[a][n(t, i)] = r);
      });
  },
  (e, t, i) => {
    const n = i(2),
          r = i(12).Promise,
          a = () => {
            let e;
            let t;

            const i = new r((i, n) => {
              (e = i), (t = n);
            });

            return (
              (i.resolve = function () {
                return e.apply(null, n.toArray(arguments)), i;
              }),
              (i.reject = function () {
                return t.apply(null, n.toArray(arguments)), i;
              }),
              i
            );
          };
    e.exports = a;
  },
  (e, t, i) => {
    const n = i(8);
    e.exports = {
      changeType: {
        CUSTOM_CODE: "custom_code",
        ATTRIBUTE: "attribute",
        APPEND: "append",
        REARRANGE: "rearrange",
        REDIRECT: "redirect",
        WIDGET: "widget",
      },
      DOMInsertionType: {
        AFTER: "after",
        APPEND: "append",
        BEFORE: "before",
        PREPEND: "prepend",
      },
      insertAdjacentHTMLType: {
        AFTER_BEGIN: "afterbegin",
        AFTER_END: "afterend",
        BEFORE_BEGIN: "beforebegin",
        BEFORE_END: "beforeend",
      },
      selectorChangeType: {
        CLASS: "class",
        HTML: "html",
        HREF: "href",
        SRC: "src",
        STYLE: "style",
        TEXT: "text",
        HIDE: "hide",
        REMOVE: "remove",
      },
      changeApplierState: n({
        APPLIED: null,
        APPLYING: null,
        UNAPPLIED: null,
        UNDOING: null,
      }),
      changeState: n({
        BLOCKED: null,
        UNAPPLIED: null,
        APPLIED: null,
        APPLYING: null,
        UNDOING: null,
        TIMED_OUT: null,
        IGNORED: null,
        ERROR: null,
      }),
    };
  },
  (e, t, i) => {
    function n(e) {
      (this.windowLength = e),
        (this.count = 0),
        (this.listeners = {}),
        (this.isIncrementingTick = !1);
    }
    const r = i(2), a = i(23), o = i(40);
    (n.prototype.countCurrentTick = function () {
      this.isIncrementingTick ||
        ((this.isIncrementingTick = !0),
        this.increment(),
        o.setTimeout(
          r.bind(function () {
            this.isIncrementingTick = !1;
          }, this),
          0
        ));
    }),
      (n.prototype.increment = function () {
        (this.count += 1),
          r.forEach(this.listeners[String(this.count)], e => {
            e();
          }),
          o.setTimeout(r.bind(this.decrement, this), this.windowLength);
      }),
      (n.prototype.decrement = function () {
        (this.count -= 1),
          this.count < 0 &&
            (a.warn("Decremented down to negative count: ", this.count),
            (this.count = 0));
      }),
      (n.prototype.addListener = function (e, t) {
        this.listeners[e] || (this.listeners[e] = []),
          this.listeners[e].push(t);
      }),
      (e.exports = n);
  },
  (e, t, i) => {
    function n(e, t) {
      if (
        ((this.change = r.cloneDeep(e)),
        (this.change = I.transformVisibilityAttributesToCSS(this.change)),
        (this.identifier = t.identifier),
        (this.startTime = t.startTime),
        (this.disconnectObserverQueue = []),
        d.shouldObserveChangesIndefinitely())
      ) {
        g.dispatch(a.INITIALIZE_CHANGE_METRICS),
          (this.rateMeter = new v(T.MOVING_WINDOW_MILLISECONDS));
        const i = r.isNull(T.MAX_MACROTASKS_IN_MOVING_WINDOW)
          ? Number.POSITIVE_INFINITY
          : T.MAX_MACROTASKS_IN_MOVING_WINDOW;
        this.rateMeter.addListener(
          i,
          r.bind(function () {
            h.warn(
              "AttributeChange",
              this,
              "has overheated and will no longer apply or reapply"
            ),
              this.cancel(),
              g.dispatch(a.RECORD_CHANGE_OVERHEATED),
              o.emitError(
                new R("Change " + this.identifier + " has overheated"),
                {
                  layerId: t.action && t.action.layerId,
                  experimentId: t.action && t.action.experimentId,
                  variationId: t.action && t.action.variationId,
                  changeId: e.id,
                  changeType: e.type,
                  movingWindowMilliseconds: T.MOVING_WINDOW_MILLISECONDS,
                  maxMacroTasksInMovingWindow: i,
                }
              );
          }, this)
        );
        for (let n = Math.min(i, 50), s = 0; s <= n; s++)
          this.rateMeter.addListener(
            s,
            r.partial(e => {
              g.dispatch(a.RECORD_CHANGE_MACROTASK_RATE, {
                changeMacrotaskRate: e,
              });
            }, s)
          );
      }
      this.cancelled = !1;
    }
    var r = i(2);
    var a = (i(12).Promise, i(7));
    var o = i(86);
    const s = i(137);
    const c = i(76).create;
    const u = i(218);
    const l = i(219);
    var d = i(16).get("stores/directive");
    const f = i(80);
    const p = i(220);
    var g = i(9);
    var h = i(23);
    const _ = i(212);
    var v = i(221);
    const E = i(136);
    const m = i(40);
    var I = i(223);
    const y = i(100).create();
    const S = { attributes: !0, childList: !0, subtree: !0, characterData: !0 };

    var T = {
      MOVING_WINDOW_MILLISECONDS: 1e3,
      MAX_MACROTASKS_IN_MOVING_WINDOW: 10,
    };

    const A = !0;
    var R = c("ChangeOverheatError");
    (n.prototype.apply = function () {
      this.applyDeferred = l();
      try {
        if (r.isEmpty(this.change.attributes) && r.isEmpty(this.change.css))
          return (
            h.debug("Not applying empty AttributeChange"),
            this.applyDeferred.resolve(),
            this.applyDeferred
          );

        var e = r.partial(
            this.applyDeferred.reject,
            new Error("Unable to find selector.")
          );

        let t = {};
        d.shouldObserveChangesUntilTimeout()
          ? (t = {
              timeout: r.partial(E.isTimedOut, this.startTime),
              onTimeout: e,
            })
          : d.isEditor() &&
            y.waitUntil(r.partial(E.isTimedOut, this.startTime)).then(e, e),
          (this.unobserveSelector = y.observeSelector(
            this.change.selector,
            r.bind(this.maybeApplyToElement, this),
            t
          ));
        const i = f.querySelectorAll(this.change.selector);
        r.each(i, r.bind(this.maybeApplyToElement, this));
      } catch (e) {
        this.applyDeferred.reject(e);
      }
      return this.applyDeferred;
    }),
      (n.prototype.maybeApplyToElement = function (e) {
        const t = s.CHANGE_ID_ATTRIBUTE_PREFIX + this.change.id;
        if (e.hasAttribute(t))
          return (
            h.debug(
              "AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. " +
                e
            ),
            void this.applyDeferred.resolve()
          );
        this.rateMeter && this.rateMeter.countCurrentTick();
        const i = r.bind(this.applyOrReapplyToElement, this, e, t);
        if ((i(), A)) {
          const n = r.bind(function () {
                    const t = r.bind(function () {
                      this.cancelled || _.observe(a, e, S);
                    }, this);
                    m.setTimeout(t);
                  }, this),
                a = _.create(
                  r.bind(function () {
                    this.rateMeter && this.rateMeter.countCurrentTick(),
                      a.disconnect(),
                      i(),
                      n();
                  }, this)
                );
          n(), this.disconnectObserverQueue.push(r.bind(a.disconnect, a));
        }
        this.applyDeferred.resolve();
      }),
      (n.prototype.applyOrReapplyToElement = function (e, t) {
        const i = {};
        r.forOwn(this.change.attributes, (n, a) => {
          switch (a) {
            case p.selectorChangeType.CLASS:
              r.isUndefined(e.className) ||
                ((i[p.selectorChangeType.CLASS] = e.className),
                (e.className = n));
              break;
            case p.selectorChangeType.HREF:
              r.isUndefined(e.href) ||
                ((i[p.selectorChangeType.HREF] = e.href), (e.href = n));
              break;
            case p.selectorChangeType.HTML:
              r.isUndefined(e.innerHTML) ||
                ((i[p.selectorChangeType.HTML] = e.innerHTML),
                (e.innerHTML = n),
                r.each(f.childrenOf(e), e => {
                  e.setAttribute(t, "");
                }));
              break;
            case p.selectorChangeType.SRC:
              r.isUndefined(e.src) ||
                ((i[p.selectorChangeType.SRC] = e.src), (e.src = n));
              break;
            case p.selectorChangeType.STYLE:
              break;
            case p.selectorChangeType.TEXT:
              r.isUndefined(e.textContent) ||
                ((i[p.selectorChangeType.TEXT] = e.textContent),
                (e.textContent = n));
              break;
            default:
              throw new Error("Unrecognized attribute: " + a);
          }
        });
        const n = I.createStylesFromChange(e.style.cssText, this.change);
        r.isString(n) &&
          ((i[p.selectorChangeType.STYLE] = e.style.cssText),
          (e.style.cssText = n)),
          e.setAttribute(t, ""),
          u.setData(e, this.change.id, this.identifier, i);
      }),
      (n.prototype.cancel = function () {
        (this.cancelled = !0),
          this.unobserveSelector && this.unobserveSelector(),
          r.each(this.disconnectObserverQueue, e => {
            try {
              e();
            } catch (e) {}
          });
      }),
      (n.prototype.undo = function () {
        const e = document.querySelectorAll(
          "[" + s.CHANGE_ID_ATTRIBUTE_PREFIX + this.change.id + "]"
        );
        return r.each(
          e,
          r.bind(function (e) {
            const t = u.getData(e, this.change.id, this.identifier);
            t &&
              r.forOwn(t, (t, i) => {
                switch (i) {
                  case p.selectorChangeType.CLASS:
                    e.className = t;
                    break;
                  case p.selectorChangeType.HREF:
                    e.href = t;
                    break;
                  case p.selectorChangeType.HTML:
                    e.innerHTML = t;
                    break;
                  case p.selectorChangeType.SRC:
                    e.src = t;
                    break;
                  case p.selectorChangeType.STYLE:
                    e.style.cssText = t;
                    break;
                  case p.selectorChangeType.TEXT:
                    e.textContent = t;
                    break;
                  case p.selectorChangeType.HIDE:
                    e.style.visibility = t;
                    break;
                  case p.selectorChangeType.REMOVE:
                    e.style.display = t;
                    break;
                  default:
                    throw new Error("Unrecognized attribute: " + i);
                }
              }),
              e.removeAttribute(
                s.CHANGE_ID_ATTRIBUTE_PREFIX + this.change.id
              ),
              u.removeData(e, this.change.id, this.identifier);
          }, this)
        ),
        l().resolve(p.changeState.UNAPPLIED);
      }),
      (e.exports = e => {
        e.registerChangeApplier(p.changeType.ATTRIBUTE, n);
      });
  },
  (e, t, i) => {
    const n = i(2), r = i(220);
    (t.transformVisibilityAttributesToCSS = e => {
      if (!e.attributes) return e;
      if (
        e.attributes[r.selectorChangeType.HIDE] ||
        e.attributes[r.selectorChangeType.REMOVE]
      ) {
        const t = n.extend({ css: {} }, n.cloneDeep(e));
        return (
          e.attributes[r.selectorChangeType.HIDE] &&
            ((t.css.visibility = "hidden"),
            delete t.attributes[r.selectorChangeType.HIDE]),
          e.attributes[r.selectorChangeType.REMOVE] &&
            ((t.css.display = "none"),
            delete t.attributes[r.selectorChangeType.REMOVE]),
          t
        );
      }
      return e;
    }),
      (t.createStylesFromChange = (e, t) => {
      if (n.isEmpty(t.css)) return t.attributes.style;
      let i = "";
      const r = t.attributes.style || "";
      return n.each(t.css, (e, t) => {
        const n = new RegExp(t + "\\s?:");
        n.test(r) || (i += t + ":" + e + ";");
      }),
      n.isUndefined(t.attributes.style) ? (e || "") + i : i + r;
    });
  },
  (e, t, i) => {
    function n(e, t) {
      (this.change = r.extend({}, e)), (this.identifier = t.identifier);
    }
    var r = i(2);
    const a = i(219);
    const o = i(220);
    const s = i(106);
    const c = "showWidget";
    const u = "hideWidget";
    (n.prototype.apply = function () {
      return (
        s.emit({ type: c, name: this.change.widget_id, data: this.change }),
        a().resolve(o.changeState.APPLIED)
      );
    }),
      (n.prototype.undo = function () {
        return (
          s.emit({ type: u, name: this.change.widget_id, data: this.change }),
          a().resolve(o.changeState.UNAPPLIED)
        );
      }),
      (e.exports = e => {
        e.registerChangeApplier(o.changeType.WIDGET, n);
      });
  },
  (e, t, i) => {
    const n = i(141),
          r = i(142).DecisionError,
          a = "single_experiment",
          o = "multivariate",
          s = {
            selectExperiment(e, t, i) {
              if (e.experiments.length < 1)
                throw new r("Unable to find experiment to bucket user into");
              const a = e.experiments[0];
              if (!n.isValidExperiment(t, a))
                throw new r(
                  'Audience conditions failed for experiment: "' + a.id + '".'
                );
              return a;
            },
          };
  },
]);
