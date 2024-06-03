import NextAuth from "next-auth";
import { options } from "./actions";
const handler = NextAuth(options);

export { handler as GET, handler as POST };
