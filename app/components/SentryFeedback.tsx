"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function SentryFeedback() {
  useEffect(() => {
    const feedback = Sentry.getFeedback();

    if (!feedback) {
      const feedbackIntegration = Sentry.feedbackIntegration({
        colorScheme: "system",
        autoInject: true,
        showBranding: false,
        buttonLabel: "Report a Bug",
        submitButtonLabel: "Submit Feedback",
        formTitle: "Send your feedback",
        triggerLabel: "Report a Bug",
      });

      Sentry.getClient()?.addIntegration(feedbackIntegration);
    }

    return () => {
    };
  }, []);

  return null;
}
