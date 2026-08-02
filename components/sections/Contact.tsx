import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinkItem } from "@/components/ui/SocialLink";
import { socialLinks } from "@/data/site-config";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="05. Contact"
        title="Let's talk"
        description="Open to AI/ML internships, freelance builds, and automation projects. Reach out on LinkedIn or drop an email; I read both."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {socialLinks.map((link) => (
          <SocialLinkItem
            key={link.label}
            label={link.label}
            href={link.href}
            handle={link.handle}
          />
        ))}
      </div>
    </section>
  );
}
