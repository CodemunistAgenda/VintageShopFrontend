"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import I18nProvider from "@/i18n/I18nProvider";
import ThemeProviderWrapper from "@/app/providers/ThemeProviderWrapper";
import ReduxProvider from "@/app/providers/ReduxProvider";
import Navbar from "@/components/visitor/home/shared/Navbar";
import FooterSection from "@/components/visitor/home/shared/FooterSection";
import { fetchCurrentUser } from "@/store/user/authSlice";
import type { AppDispatch } from "@/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProviderWrapper>
        <I18nProvider>
          <InitUserLoader />
          <Navbar />
          <main>{children}</main>
          <FooterSection />
        </I18nProvider>
      </ThemeProviderWrapper>
    </ReduxProvider>
  );
}

function InitUserLoader() {
  const dispatch = useDispatch<AppDispatch>();
  const calledRef = React.useRef(false);

  useEffect(() => {
    if (!calledRef.current) {
      calledRef.current = true;
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  return null;
}

