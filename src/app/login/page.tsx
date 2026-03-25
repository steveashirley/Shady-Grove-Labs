"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

interface UserProfile {
  name: string;
  email: string;
}

const clientId = process.env.NEXT_PUBLIC_AMAZON_CLIENT_ID;

export default function LoginPage() {
  const [sdkReady, setSdkReady] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.onAmazonLoginReady = () => {
      if (clientId) {
        amazon.Login.setClientId(clientId);
      }
      setSdkReady(true);
    };

    // Handle case where SDK loaded before this effect ran
    if (typeof amazon !== "undefined") {
      if (clientId) {
        amazon.Login.setClientId(clientId);
      }
      setSdkReady(true);
    }
  }, []);

  const handleLogin = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (!sdkReady) return;

      setError(null);
      setLoading(true);

      amazon.Login.authorize(
        { scope: "profile" },
        (authorizeResponse: AmazonAuthorizeResponse) => {
          if (authorizeResponse.error) {
            setError(authorizeResponse.error_description || authorizeResponse.error);
            setLoading(false);
            return;
          }

          amazon.Login.retrieveProfile(
            authorizeResponse.access_token!,
            (profileResponse: AmazonProfileResponse) => {
              setLoading(false);
              if (profileResponse.success && profileResponse.profile) {
                setUser({
                  name: profileResponse.profile.Name,
                  email: profileResponse.profile.PrimaryEmail,
                });
              } else {
                setError(profileResponse.error || "Failed to retrieve profile.");
              }
            }
          );
        }
      );
    },
    [sdkReady]
  );

  const handleLogout = useCallback(() => {
    amazon.Login.logout();
    setUser(null);
    setError(null);
  }, []);

  if (!clientId) {
    return (
      <div style={containerStyle}>
        <p style={{ color: "#b91c1c" }}>
          Missing NEXT_PUBLIC_AMAZON_CLIENT_ID environment variable.
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Script
        src="https://assets.loginwithamazon.com/sdk/vs/api.js"
        id="amazon-login-sdk"
        strategy="afterInteractive"
      />

      <h1 style={headingStyle}>Login</h1>

      {!user ? (
        <>
          <a
            href=""
            id="LoginWithAmazon"
            onClick={handleLogin}
            style={{
              opacity: sdkReady ? 1 : 0.5,
              pointerEvents: sdkReady ? "auto" : "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{ border: 0 }}
              alt="Login with Amazon"
              src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
              width="156"
              height="32"
            />
          </a>
          {loading && <p style={mutedTextStyle}>Logging in…</p>}
        </>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <p>
            Welcome, <strong>{user.name}</strong>
          </p>
          <p style={mutedTextStyle}>{user.email}</p>
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        </div>
      )}

      {error && <p style={{ color: "#b91c1c", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "2rem",
  gap: "1.5rem",
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 300,
  letterSpacing: "0.08em",
  color: "var(--color-text)",
};

const mutedTextStyle: React.CSSProperties = {
  color: "var(--color-text-muted)",
  fontSize: "0.875rem",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 1.5rem",
  border: "1px solid var(--color-text-muted)",
  borderRadius: "4px",
  background: "transparent",
  color: "var(--color-text)",
  cursor: "pointer",
  fontSize: "0.875rem",
};
