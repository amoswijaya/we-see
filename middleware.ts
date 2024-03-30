// import { cle, createRouteMatcher } from "@clerk/nextjs";

// const protectedRoute = createRouteMatcher([
//   "/",
//   "/upcoming",
//   "/meeting(.*)",
//   "/previous",
//   "/recordings",
//   "/personal-room",
// ]);

// export default WithClerkMiddleware((auth, req) => {
//   if (protectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
