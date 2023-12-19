import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "https://website.nexgeno.in/sign-in",
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
