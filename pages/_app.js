import "../public/css/bootstrap.min.css";
import "animate.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Flyweis Technology</title>
        </Head>
        <ReactNotification />
        <Component {...pageProps} />

        <a
          href="https://flyweis.technology/thank_yous.php?comments=Information"
          class="btn-whatsapp-pulse"
        >
          <i class="bx bxl-whatsapp"></i>
        </a>

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        {/* <GoTop scrollStepInPx="100" delayInMs="10.50" /> */}
      </>
    );
  }
}
