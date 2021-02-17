import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import SymptomOptions from "./components/symptomOptions/SymptomOptions";
import LinkList from "./components/LinkList/LinkList";


const config = { 
  botName: "Healthy Helper",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What symptoms are you experiencing? This conversation will stay between us :-)", {
      widget: "symptomOptions",
  })],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
        widgetName: "symptomOptions",
       widgetFunc: (props) => <SymptomOptions {...props} />,
    },
    {
        widgetName: "depressionLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "Find support in workshops",
                url:
                  "https://www.wellesley.edu/counseling/groupsworkshops",
                id: 1,
              },
              {
                text: "Crisis text line",
                url:
                  "https://www.crisistextline.org/",
                id: 2,
              },
              {
                text: "Track your mood with Welltrack",
                url:
                  "https://welltrack.com/",
                id: 3,
              },
              {
                text: "Find some calm",
                url:
                  "https://www.headspace.com/",
                id: 4,
              },
              {
                text: "Schedule a therapy session",
                url:
                  "https://www.wellesley.edu/counseling/studentportal",
                id: 5,
              },
            ],
          },
        },
    {
        widgetName: "anxietyLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
                {
                    text: "Find support in workshops",
                    url:
                        "https://www.wellesley.edu/counseling/groupsworkshops",
                    id: 1,
                },
                {
                    text: "Find some calm",
                    url:
                      "https://www.headspace.com/",
                    id: 2,
                },
                {
                    text: "Schedule a therapy session",
                    url:
                      "https://www.wellesley.edu/counseling/studentportal",
                    id: 3,
                },
                {
                    text: "Listen here for help calming yourself",
                    url:
                      "https://open.spotify.com/artist/4rXABp4A7KjG9elWFNAbO4",
                    id: 4,
                },


            ],
            },
        }, 
        {
            widgetName: "sleepLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Use this app for a guided meditation",
                        url:
                          "https://www.headspace.com/",
                        id: 1,
                    },
                    {
                        text: "Medical resource",
                        url:
                          "https://www.mayoclinic.org/diseases-conditions/insomnia/diagnosis-treatment/drc-20355173",
                        id: 2,
                    },
                    {
                        text: "Use this app for relaxing sounds",
                        url:
                          "https://www.relaxmelodies.com/",
                        id: 3,
                    },
                    {
                        text: "Find support in workshops",
                        url:
                          "https://www.wellesley.edu/counseling/groupsworkshops",
                        id: 4,
                    },
                    {
                        text: "Make an appointment with Health Services",
                        url:
                          "https://www.wellesley.edu/counseling/groupsworkshops",
                        id: 5,
                    },
                ],
                },   
            },
    {
        widgetName: "crisisLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
                {
                    text: "Text line",
                    url:
                        "https://www.crisistextline.org/",
                    id: 1,
                },
                {
                    text: "Find Wellesley's crisis resources here",
                    url:
                        "https://www.wellesley.edu/counseling",
                    id: 2,
                },
                {
                    text: "Reaching out to a friend, RA, or community director.",
                    url:
                        "https://www.wellesley.edu/reslife/about-us",
                    id: 3,
                },
            ],
            },   
        },
    {
        widgetName: "eatingLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
                {
                    text: "Text line",
                    url:
                        "https://www.crisistextline.org/",
                    id: 1,
                },
                {
                    text: "Find support in group therapy",
                    url:
                      "https://www.wellesley.edu/counseling/groupsworkshops",
                    id: 2,
                },
                {
                    text: "Schedule a therapy session",
                    url:
                      "https://www.wellesley.edu/counseling/studentportal",
                    id: 3,
                },
                {
                    text: "Learn about a helpful app here",
                    url:
                      "https://www.recoverywarriors.com/8-reasons-the-rise-up-recover-app-is-the-perfect-companion-to-therapy/",
                    id: 4,
                },
                
            ],
            },   
        },
    {
        widgetName: "lonelinessLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
                {
                    text: "Text line",
                    url:
                        "https://www.crisistextline.org/",
                    id: 1,
                },
                {
                    text: "Consider going to a group exercise class",
                    url:
                        "https://www.wellesley.edu/athletics/recreation",
                    id: 2,
                },
                {
                    text: "Find others with shared interests in a club",
                    url:
                        "https://www.wellesley.edu/campuslife/community/studentorgs",
                    id: 3,
                },
                {
                    text: "Schedule a therapy session",
                    url:
                      "https://www.wellesley.edu/counseling/studentportal",
                    id: 4,
                },
            ],
            },   
        },
        ]
    };

export default config