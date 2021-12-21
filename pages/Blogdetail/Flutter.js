import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import AskQuestionForm from "../../components/ServiceDetails/AskQuestionForm";
import ServiceSidebar from "../../components/ServiceDetails/ServiceSidebar";

const Flutter = () => {
  return (
    <div>
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/PagesImage/flutter.png" alt="" />
      </div>
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h3>Flutter</h3>

                <p>
                  Flutter is an open-source framework to create high-quality,
                  high-performance mobile applications across mobile operating
                  systems – Android and iOS. It provides a simple, powerful,
                  efficient, and easy to understand SDK to write mobile
                  application in Google’s own language, Dart. In general,
                  developing a mobile application is a complex and challenging
                  task. Flutter is a hybrid app development framework that
                  flawlessly interacts with cameras, geolocation, networks, and
                  storage. It performs better than other cross- platform
                  development technologies like React Native. There are many
                  frameworks available to develop a mobile application. Android
                  provides a native framework based on Java language and iOS
                  provides a native framework based on Objective-C / Shift
                  language. However, to develop an application supporting both
                  the OSs, we need to code in two different languages using two
                  different frameworks. To help overcome this complexity, there
                  exist mobile frameworks supporting both OS. These frameworks
                  range from simple HTML based hybrid mobile application
                  framework (which uses HTML for User Interface and JavaScript
                  for application logic) to complex language specific framework
                  (which do the heavy lifting of converting code to native
                  code). Irrespective of their simplicity or complexity, these
                  frameworks always have many disadvantages, one of the main
                  drawback being their slow performance. In this scenario,
                  Flutter – a simple and high performance framework based on
                  Dart language, provides high performance by rendering the UI
                  directly in the operating system’s canvas rather than through
                  native framework. Flutter also offers many ready to use
                  widgets (UI) to create a modern application. These libraries
                  include animation and graphics, file and network input/output,
                  accessibility support, plugin architecture, and a Dart runtime
                  and compile toolchain.Most developers interact with the
                  software via the Flutter framework. that offers a reactive
                  structure and a set of platform, layout, and foundation
                  widgets these widgets are optimized for mobile environment and
                  designing the application using widgets is as simple as
                  designing HTML. To be specific, Flutter application is itself
                  a widget. The software is usable on phones, tablets,
                  wearables, laptops, desktops, televisions, and smart displays.
                  Google calls that ambient computing – services and software
                  are available wherever and whenever you need them. Flutter
                  uses widgets to deliver a fully functioning app, for
                  everything from fonts and styles to scrolling. It may take
                  time to get used to an environment where everything is a
                  widget, but there’s logic to it. Flutter widgets also supports
                  animations and gestures. The application logic is based on
                  reactive programming. Widget may optionally have a state. By
                  changing the state of the widget, Flutter will automatically
                  (reactive programming) compare the widget’s state (old and
                  new) and render the widget with only the necessary changes
                  instead of re-rendering the whole widget. Flutter needs lesser
                  testing. Because of its single code base, it is sufficient if
                  we write automated tests once for both the platforms.
                  Advantages of Flutter is Dart has a large repository of
                  software packages which lets you to extend the capabilities of
                  your application. Developers need to write just a single code
                  base for both applications (both Android and iOS platforms).
                  Flutter may to be extended to other platform as well in the
                  future.
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

export default Flutter;
