interface AmazonAuthorizeResponse {
  access_token?: string;
  error?: string;
  error_description?: string;
}

interface AmazonProfileResponse {
  success: boolean;
  profile?: {
    Name: string;
    PrimaryEmail: string;
    CustomerId: string;
  };
  error?: string;
}

declare namespace amazon {
  namespace Login {
    function setClientId(clientId: string): void;
    function authorize(
      options: { scope: string | string[]; response_type?: string },
      callback: (response: AmazonAuthorizeResponse) => void
    ): void;
    function retrieveProfile(
      accessToken: string,
      callback: (response: AmazonProfileResponse) => void
    ): void;
    function logout(): void;
  }
}

interface Window {
  onAmazonLoginReady?: () => void;
}
