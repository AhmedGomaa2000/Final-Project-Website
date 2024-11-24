import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ITermsConditions } from '../i-terms-conditions';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent {
  terms: ITermsConditions[] = [
    {
      title:"Privacy Policy",
      para1: "This page informs visitors about our policies regarding the collection, use, and disclosure of Personal Information when using our Service. By choosing to use our Service, you agree to the collection and use of information in accordance with this policy. We collect Personal Information to improve the quality of our Service and ensure a better user experience.",
      para2: "We are dedicated to safeguarding your privacy and ensuring that any information collected is used responsibly. Your data will only be used as described in this policy and will not be shared with third parties, except as outlined here. Our goal is to maintain transparency and provide you with control over your personal data.",
      para3: "Unless specified otherwise, the terms used in this Privacy Policy have the same meanings as outlined in our Terms and Conditions, which can be accessed through our website. If you have any questions or concerns, please do not hesitate to contact us."
    },
    {
      title:"Information Collection and Use",
      para1: "We collect Personal Information to provide, improve, and enhance your experience with our Service. This includes details such as your name, contact information, and other relevant data necessary for service delivery. This information is collected with your consent and used to offer personalized experiences and respond to inquiries.",
      para2: "Your information is collected for specific purposes, such as improving our customer service, providing trip recommendations, or tailoring content to your preferences. We take your privacy seriously and only use this data in ways that directly enhance your interactions with our Service.",
      para3: "Rest assured, your Personal Information will not be sold, traded, or shared with third parties, except as outlined in this Privacy Policy. We use this data responsibly to ensure the best possible user experience while keeping your privacy in mind."
    },
    {
      title:"Log Data",
      para1: "When you visit our website, we automatically collect information sent by your browser, referred to as Log Data. This may include details such as your IP address, browser type, operating system, the pages you visit, and the time and date of your access. This data is used to analyze trends, monitor site performance, and improve the user experience.",
      para2: "Although this information is not linked to personally identifiable data, it helps us understand how users interact with our Service. We use this data to improve our site’s functionality, troubleshoot issues, and identify ways to better serve our visitors.",
      para3: "While Log Data alone does not identify individual users, we may combine it with other information to gain insights into how we can further enhance the Service. We take care to handle this data securely and only use it to improve your overall experience."
    },
    {
      title:"Cookies",
      para1: "Cookies are small files stored on your device that help us enhance your experience with our Service. They allow us to remember your preferences, track your interactions, and offer a more personalized service. By using our Service, you agree to our use of cookies in accordance with this Privacy Policy.",
      para2: "You have the option to control or delete cookies through your browser settings. While disabling cookies may limit some functionality of the Service, it will not affect your ability to browse most parts of the website. We use cookies to optimize the user experience and ensure a seamless interaction with our Service.",
      para3: "Cookies are never used to track sensitive personal information. They are a tool to improve navigation, monitor performance, and ensure that our Service operates smoothly. Any data collected through cookies is handled with care and in compliance with data privacy regulations."
    },
    {
      title:"Service Providers",
      para1: "We work with third-party service providers to facilitate our Service, perform tasks on our behalf, or provide additional support such as analytics and user experience enhancements. These service providers may have access to your Personal Information solely to carry out these tasks, and they are bound by confidentiality agreements.",
      para2: "Our partnerships with third parties are carefully managed to ensure that they comply with data protection regulations and handle your information securely. We only work with trusted providers who meet our high standards for privacy and security.",
      para3: "Rest assured, any information shared with service providers is done so in accordance with this Privacy Policy, and only for purposes directly related to improving our Service. We maintain strict oversight to ensure your data remains protected."
    },
    {
      title:"Security",
      para1: "We take the security of your Personal Information seriously and employ industry-standard practices to protect your data from unauthorized access, disclosure, or misuse. This includes encryption, secure storage, and restricted access to sensitive data.",
      para2: "While we strive to use the best available security measures, please note that no method of transmission over the Internet is entirely secure. We continuously review and update our security protocols to stay ahead of potential threats.",
      para3: "In the event of any security breach, we will promptly inform affected users and take all necessary steps to minimize any potential harm. Our priority is to ensure the safety and integrity of your Personal Information."
    },
    {
      title:"Links to Other Sites",
      para1: "Our Service may contain links to third-party websites. These external sites are not operated by us, and we have no control over their privacy policies or practices. If you click on a third-party link, you will be directed to that website, and we encourage you to review their privacy policy.",
      para2: "We provide these links for your convenience, but please note that we are not responsible for the content or data practices of these external sites. Always exercise caution when visiting unfamiliar websites.",
      para3: "Your interactions with third-party sites are governed by their respective privacy policies. We recommend reviewing those policies to ensure you are comfortable with how your data is handled before engaging with those websites."
    },
    {
      title: "Contact Us",
      para1: "If you have any questions or concerns regarding this Privacy Policy or how your Personal Information is handled, please do not hesitate to contact us. We are committed to protecting your privacy and will respond to any inquiries as promptly as possible.",
      para2: "You can reach out to us through our website’s contact form or via email. Our team is here to address any concerns you may have about your privacy or data security.",
      para3: "Your trust is important to us, and we are always available to provide more information or clarification about how we protect your Personal Information."
    }
  ];

}
