import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import AskQuestionForm from "../../components/ServiceDetails/AskQuestionForm";
import ServiceSidebar from "../../components/ServiceDetails/ServiceSidebar";

const ReactNative = () => {
  return (
    <div>
      <Navbar />

      <div className="blog_img_banner ">
        <img src="/images/blog/react-native_large.jpeg" alt="" className="native_image_height" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h3>React Native</h3>

                <p>
                  React Native has been successfully adopted by hundreds of
                  businesses worldwide, including Uber, Microsoft, and Facebook,
                  and is used across a whole range of industries. React Native
                  has been successfully adopted by hundreds of businesses
                  worldwide, including Uber, Microsoft, and Facebook, and is
                  used across a whole range of industries. React Native is a
                  JavaScript framework for building native mobile apps. It uses
                  the React framework and offers large amount of inbuilt
                  components and APIs. React Native lets you build mobile apps
                  using only JavaScript. With React Native, you don't build a
                  mobile web app, an HTML5 app, or a hybrid app; you build a
                  real mobile app that's indistinguishable from an app built
                  using Objective-C or Java. React Native - It is a framework
                  for creating mobile applications with a native feel. ReactJs -
                  React is a JavaScript library for building Responsive User
                  Interfaces for Building Web Application. React (also known as
                  ReactJS) is a JavaScript library used for building the
                  frontend of a website. Similarly to React Native, it was also
                  developed by the Facebook engineering team. React Native
                  Advantages is You can use the existing JavaScript knowledge to
                  build native mobile apps and You can share most of your code
                  on different platforms. The community around React and React
                  Native is large, and you will be able to find any answer you
                  need. It offers faster mobile development, and more efficient
                  code sharing across iOS, Android, and the Web, without
                  sacrificing the end user’s experience or application quality.
                  It offers faster mobile development, and more efficient code
                  sharing across iOS, Android, and the Web, without sacrificing
                  the end user’s experience or application quality. React Native
                  does not force you to work in Xcode to develop for iOS, or
                  Android Studio for Android development. Besides the day-to-day
                  improvements to your development experience, React Native also
                  has the potential to positively impact your product release
                  cycle. For instance, Apple permits JavaScript-based changes to
                  an app’s behavior to be loaded over the air with no additional
                  review cycle necessary. Being able to reuse code is the
                  biggest advantage of React Native, and it indicates that apps
                  can run effectively on multiple platforms – which is something
                  that CEOs and Product Owners truly appreciate. Live reloading
                  reloads or refreshes the entire app when a file changes. For
                  example, if you were four links deep into your navigation and
                  saved a change, live reloading would restart the app and load
                  the app back to the initial route.They can integrate 90% of
                  the native framework for reusing the code for both operational
                  systems. Another great piece of news is that it’s possible to
                  use the web application code for mobile app development if
                  they’re both using React Native. It also speeds up development
                  time as it includes pre-developed components, which are
                  included in the open-source library. If the existing modules
                  do not meet the business requirement in React Native we can
                  also use Third Party plugins which may help to speed up the
                  development process.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <AskQuestionForm />
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReactNative;
