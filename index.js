
import { createClient } from "@propelauth/javascript";

const authClient = createClient({
    // The base URL where your authentication pages are hosted. You can find this under the Frontend Integration section for your project.
    authUrl: "https://auth.yourdomain.com",
    // If true, periodically refresh the access token in the background. This helps ensure you always have a valid token ready to go. Default true.
    enableBackgroundTokenRefresh: true,
});

const authInfo = await authClient.getAuthenticationInfoOrNull()

if (authInfo) {
    const accessToken = authInfo.accessToken;
    const redirectUrl = `https://your-redirect-url.com?access_token=${accessToken}`;
    window.location.href = redirectUrl;
} else {
    document.body.innerHTML = "<h1>User is not logged in</h1>";
}
