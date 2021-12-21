import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@material-ui/core";

const BlogSection = () => {
  const [dialogopen, setdialogopen] = useState(false);

  const cardsData = [
    {
      src: "/images/blog/Flutter.jpg",
      title: "Flutter",
      data: " Flutter is an open-source framework to create high-quality, high-performance mobile applications across mobile operating systems – Android and iOS. It provides a simple, powerful, efficient, and easy to understand SDK to write mobile application in Google’s own language, Dart. In general, developing a mobile application is a complex and challenging task. Flutter is a hybrid app development framework that flawlessly interacts with cameras, geolocation, networks, and storage. It performs better than other cross- platform development technologies like React Native. There are many frameworks available to develop a mobile application. Android provides a native framework based on Java language and iOS provides a native framework based on Objective-C / Shift language. However, to develop an application supporting both the OSs, we need to code in two different languages using two different frameworks. To help overcome this complexity, there exist mobile frameworks supporting both OS. These frameworks range from simple HTML based hybrid mobile application framework (which uses HTML for User Interface and JavaScript for application logic) to complex language specific framework (which do the heavy lifting of converting code to native code). Irrespective of their simplicity or complexity, these frameworks always have many disadvantages, one of the main drawback being their slow performance. In this scenario, Flutter – a simple and high performance framework based on Dart language, provides high performance by rendering the UI directly in the operating system’s canvas rather than through native framework. Flutter also offers many ready to use widgets (UI) to create a modern application. These libraries include animation and graphics, file and network input/output, accessibility support, plugin architecture, and a Dart runtime and compile toolchain.Most developers interact with the software via the Flutter framework. that offers a reactive structure and a set of platform, layout, and foundation widgets these widgets are optimized for mobile environment and designing the application using widgets is as simple as designing HTML. To be specific, Flutter application is itself a widget. The software is usable on phones, tablets, wearables, laptops, desktops, televisions, and smart displays. Google calls that ambient computing – services and software are available wherever and whenever you need them. Flutter uses widgets to deliver a fully functioning app, for everything from fonts and styles to scrolling. It may take time to get used to an environment where everything is a widget, but there’s logic to it. Flutter widgets also supports animations and gestures. The application logic is based on reactive programming. Widget may optionally have a state. By changing the state of the widget, Flutter will automatically (reactive programming) compare the widget’s state (old and new) and render the widget with only the necessary changes instead of re-rendering the whole widget. Flutter needs lesser testing. Because of its single code base, it is sufficient if we write automated tests once for both the platforms. Advantages of Flutter is Dart has a large repository of software packages which lets you to extend the capabilities of your application. Developers need to write just a single code base for both applications (both Android and iOS platforms). Flutter may to be extended to other platform as well in the future.",
      link: "/Blogdetail/Flutter",
    },
    {
      src: "/images/blog/react-native_large.jpeg",
      title: "React Native",
      data: "  React Native has been successfully adopted by hundreds of businesses worldwide, including Uber, Microsoft, and Facebook, and is used across a whole range of industries. React Native has been successfully adopted by hundreds of businesses worldwide, including Uber, Microsoft, and Facebook, and is used across a whole range of industries. React Native is a JavaScript framework for building native mobile apps. It uses the React framework and offers large amount of inbuilt components and APIs. React Native lets you build mobile apps using only JavaScript. With React Native, you don't build a mobile web app, an HTML5 app, or a hybrid app; you build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native - It is a framework for creating mobile applications with a native feel. ReactJs - React is a  JavaScript library for building Responsive User Interfaces for Building Web Application. React (also known as ReactJS) is a JavaScript library used for building the frontend of a website. Similarly to React Native, it was also developed by the Facebook engineering team. React Native Advantages is You can use the existing JavaScript knowledge to build native mobile apps and You can share most of your code on different platforms. The community around React and React Native is large, and you will be able to find any answer you need.  It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end user’s experience or application quality.  It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end user’s experience or application quality. React Native does not force you to work in Xcode to develop for iOS, or Android Studio for Android development. Besides the day-to-day improvements to your development experience, React Native also has the potential to positively impact your product release cycle. For instance, Apple permits JavaScript-based changes to an app’s behavior to be loaded over the air with no additional review cycle necessary. Being able to reuse code is the biggest advantage of React Native, and it indicates that apps can run effectively on multiple platforms – which is something that CEOs and Product Owners truly appreciate. Live reloading reloads or refreshes the entire app when a file changes. For example, if you were four links deep into your navigation and saved a change, live reloading would restart the app and load the app back to the initial route.They can integrate 90% of the native framework for reusing the code for both operational systems. Another great piece of news is that it’s possible to use the web application code for mobile app development if they’re both using React Native. It also speeds up development time as it includes pre-developed components, which are included in the open-source library. If the existing modules do not meet the business requirement in React Native we can also use Third Party plugins which may help to speed up the development process.",
      link: "/Blogdetail/ReactNative",
    },

    {
      src: "/images/blog/Block_Chain.jpg",
      title: "What is block chain?",
      data: " Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved. Business runs on information. The faster it’s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more. And because members share a single view of the truth, you can see all details of a transaction end to end, giving you greater confidence, as well as new efficiencies and opportunities.All network participants have access to the distributed ledger and its immutable record of transactions. With this shared ledger, transactions are recorded only once, eliminating the duplication of effort that’s typical of traditional business networks.No participant can change or tamper with a transaction after it’s been recorded to the shared ledger. If a transaction record includes an error, a new transaction must be added to reverse the error, and both transactions are then visible.Those transactions show the movement of an asset that can be tangible (a product) or intangible (intellectual). The data block can record the information of your choice: who, what, when, where, how much and even the condition — such as the temperature of a food shipment.These blocks form a chain of data as an asset moves from place to place or ownership changes hands. The blocks confirm the exact time and sequence of transactions, and the blocks link securely together to prevent any block from being altered or a block being inserted between two existing blocks.Operations often waste effort on duplicate record keeping and third-party validations. Record-keeping systems can be vulnerable to fraud and cyberattacks. Limited transparency can slow data verification. And with the arrival of IoT, transaction volumes have exploded. All of this slows business, drains the bottom line — and means we need a better way. Enter blockchain.With blockchain, we can imagine a world in which contracts are embedded in digital code and stored in transparent, shared databases, where they are protected from deletion, tampering, and revision. In this world every agreement, every process, every task, and every payment would have a digital record and signature that could be identified, validated, stored, and shared. Intermediaries like lawyers, brokers, and bankers might no longer be necessary. Individuals, organizations, machines, and algorithms would freely transact and interact with one another with little friction. This is the immense potential of blockchain.",
      link: "/Blogdetail/Whatisblock",
    }
  ];

  const [heading, setheading] = useState("");
  const [content, setcontent] = useState("");

  const readmorehandle = (item) => {
    setheading(item.title);
    setcontent(item.data);
    setdialogopen(true);
  };
  return (
    <section className="news-area ptb-100">
      <div className="container">
        <div className="section-title">
          {/* <span>Latest News</span> */}
          <h2>Our Recent Blog </h2>
          <p>
            Subscribe our Blogs to know about latest updates and new theories
            evolved by our team while experiencing new challenges.
          </p>
        </div>
        <div className="row">
          {cardsData.map((item, index) => (
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <a>
                    <img
                      src={item.src}
                      alt="Image"
                      className="blog_image_size"
                    />
                  </a>
                </div>

                <div className="mt-2">
                  <a>
                    <h3>{item.title}</h3>
                  </a>

                  <p>{item.data.substring(0, 300) + "..."} </p>
                </div>
                <Link href={`${item.link}`}>
                  <a className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </a>
                </Link>
                {/* <a className="read-more" onClick={() => readmorehandle(item)}>
                  Read More <i className="bx bx-plus"></i>
                </a> */}
              </div>
            </div>
          ))}

          {/* <Dialog
            open={dialogopen}
            onClose={() => setdialogopen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="p-3">
              <h3>{heading}</h3>
              <p>{content}</p>
            </div>
          </Dialog> */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
