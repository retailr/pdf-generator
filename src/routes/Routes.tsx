import React, { useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import * as serviceWorker from "../serviceWorker";
import { ToastContainer, toast, ToastContentProps } from "react-toastify";

import ScrollToTop from "./ScrollToTop";
import { history } from "../redux/store";
import { PropsFromRedux } from ".";
import Layout from "../components/Layout";
import ErrorPage from "../pages/Error/Error";
import "react-toastify/dist/ReactToastify.min.css";
import GeneratePdf from "../pages/GeneratePdf";
import Templates from "../pages/Templates";

interface RefrestToastProps extends ToastContentProps {
  action: () => void;
}

const RefreshToast = ({ closeToast, action }: RefrestToastProps) => {
  const close = () => {
    action();
    closeToast && closeToast();
  };
  return (
    <div>
      New updates available
      <button onClick={close}>Reload</button>
    </div>
  );
};

const Routes: React.FC<PropsFromRedux> = () => {
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<any>({
    postMessage: (message: any) => message,
  });

  const onServiceWorkerUpdate = (registration: ServiceWorkerRegistration) => {
    setWaitingWorker(registration?.waiting);
    if (registration) setNewVersionAvailable(true);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
    }
  }, []);

  useEffect(() => {
    const updateServiceWorker = () => {
      waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
      setNewVersionAvailable(false);
      window.location.reload();
    };

    const notify = () =>
      toast(
        ({ closeToast, toastProps }: RefrestToastProps) => (
          <RefreshToast
            closeToast={closeToast}
            toastProps={toastProps}
            action={updateServiceWorker}
          />
        ),
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
        }
      );
    if (newVersionAvailable) {
      notify();
    }
    return () => {
      toast.dismiss();
    };
  }, [newVersionAvailable, waitingWorker]);

  return (
    <Router history={history}>
      <ToastContainer />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Redirect to="/generate-pdf" />
        </Route>
        <Route exact path="/generate-pdf">
          <Layout component={<GeneratePdf />} />
        </Route>
        <Route path="/templates">
          <Layout component={<Templates />} />
        </Route>
        <Route>
          <Layout
            component={
              <ErrorPage
                error="404"
                description="The page you are looking for does not exist"
              />
            }
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
