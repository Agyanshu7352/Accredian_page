import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    faqs: {
      categories: ["About the Course", "About the Delivery", "Miscellaneous"],
      items: {
        "About the Course": [
          {
            question: "What types of corporate training programs does Accredian offer?",
            answer: "Accredian offers comprehensive corporate training programs tailored to your organization's specific needs, focusing on modern skill development, technical upskilling, and leadership training."
          },
          {
            question: "What domain specializations are available?",
            answer: "We offer specializations in Product Management, Data Science, Artificial Intelligence, Software Engineering, and specialized management tracks depending on your enterprise requirements."
          }
        ],
        "About the Delivery": [
          {
            question: "How are the training programs delivered?",
            answer: "Our programs are delivered through a hybrid model, combining live instructor-led sessions, self-paced learning modules, and practical hands-on projects."
          }
        ],
        "Miscellaneous": [
          {
            question: "Do you provide completion certificates?",
            answer: "Yes, all participants who successfully complete the training program and required assessments will receive a verified certificate of completion."
          }
        ]
      }
    },
    testimonials: [
      {
        logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
        quote: "\"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.\""
      },
      {
        logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
        quote: "\"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.\""
      },
      {
        logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
        quote: "\"The comprehensive curriculum and expert faculty have significantly upgraded our team's capabilities. Accredian has been instrumental in driving our digital transformation forward.\""
      },
      {
        logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
        quote: "\"We are extremely satisfied with the training programs provided. The hands-on approach and real-world case studies have directly translated to improved performance in our projects.\""
      }
    ],
    deliverySteps: [
      {
        number: "1",
        title: "Skill Gap Analysis",
        description: "Assess team skill gaps and developmental needs.",
        icon: "BarChart"
      },
      {
        number: "2",
        title: "Customized Training Plan",
        description: "Create a tailored roadmap addressing organizational goals.",
        icon: "Monitor"
      },
      {
        number: "3",
        title: "Flexible Program Delivery",
        description: "Deliver adaptable programs aligned with industry and organizational needs.",
        icon: "MonitorPlay"
      }
    ]
  });
}
