import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

/** Privacy Policy / mentions légales (cf. §2). */
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <Placeholder>
        Mentions légales et politique de confidentialité. Texte à fournir.
      </Placeholder>
    </>
  );
}
