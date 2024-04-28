import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-teal-500 hover:bg-teal-400 text-sm normal-case",
        },
      }}
    />
  );
}
