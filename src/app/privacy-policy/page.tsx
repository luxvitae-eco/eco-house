import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import '@/styles/luxvitae.css';
import '@/styles/single-page.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Eco House by Lux Vitae',
  description:
    "Learn about our privacy practices and commitment to protecting your data. We value your privacy and don't store any personal user data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />

        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Privacy Policy</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Your privacy is important to us. Learn about our commitment to protecting your data and ensuring a
                secure experience.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm mb-8">
                <SinglePageCardGradient />

                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔒</span>
                    Data Protection Commitment
                  </CardTitle>
                  <CardDescription>Our fundamental approach to your privacy</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground mb-4">
                    At Eco House by Lux Vitae, we are committed to protecting your privacy and maintaining the highest
                    standards of data protection. We believe in transparency and want you to understand exactly how we
                    handle your information.
                  </p>
                  <p className="text-base leading-7 text-muted-foreground font-semibold">
                    <strong>We do not collect, store, or process any personal user data.</strong>
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle>What We Don't Collect</CardTitle>
                    <CardDescription>Personal information we explicitly avoid collecting</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 text-base leading-7 text-muted-foreground">
                      <li>• Personal identification information (names, addresses, phone numbers)</li>
                      <li>• Email addresses or contact details</li>
                      <li>• Financial or payment information</li>
                      <li>• Browsing history or tracking data</li>
                      <li>• Cookies or persistent identifiers</li>
                      <li>• Location data or device information</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                  <SinglePageCardGradient />

                  <CardHeader>
                    <CardTitle>Technical Information</CardTitle>
                    <CardDescription>Minimal technical data for site functionality</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-base leading-7 text-muted-foreground mb-4">
                      Our website operates as a static informational site and only processes minimal technical data
                      necessary for basic functionality:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-muted-foreground">
                      <li>• Anonymous server logs for performance monitoring</li>
                      <li>• Basic analytics for site improvement (no personal identification)</li>
                      <li>• Temporary session data (not stored permanently)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm mb-8">
                <SinglePageCardGradient />

                <CardHeader>
                  <CardTitle>Contact and Communication</CardTitle>
                  <CardDescription>How we handle inquiries and communications</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground mb-4">
                    If you choose to contact us through the provided contact information on our website:
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-muted-foreground mb-4">
                    <li>• We will only use your contact details to respond to your specific inquiry</li>
                    <li>• We do not store your information in any database or system</li>
                    <li>• We do not share your information with third parties</li>
                    <li>• We do not use your information for marketing purposes</li>
                  </ul>
                  <p className="text-base leading-7 text-muted-foreground">
                    Any communication records are handled according to standard business practices and are not used for
                    data collection or profiling.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator className="shrink-0 bg-border h-[1px] w-full footer-border my-16" />

            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-8">
                Your Rights and Our Commitment
              </h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Data Storage</h3>
                  <p className="text-sm text-muted-foreground">
                    Since we don't collect personal data, there's nothing to store, access, or delete. Your privacy is
                    protected by design.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe in complete transparency about our data practices. What you see here is exactly what we
                    do.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Questions Welcome</h3>
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about our privacy practices, please don't hesitate to contact us directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader>
                  <CardTitle>Updates to This Policy</CardTitle>
                  <CardDescription>How we handle changes to our privacy practices</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground mb-4">
                    This privacy policy reflects our current practices as a static informational website. Should our
                    site functionality change in the future, we will:
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-muted-foreground mb-4">
                    <li>• Update this policy to reflect any changes</li>
                    <li>• Maintain our commitment to minimal data collection</li>
                    <li>• Ensure continued transparency in our practices</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Last updated:</strong>{' '}
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto mt-16 max-w-2xl text-center">
              <h3 className="text-lg font-semibold text-foreground">Building Trust Through Privacy</h3>
              <p className="mt-4 text-base text-muted-foreground">
                Our commitment to privacy reflects our values of respect, transparency, and sustainability. Just as we
                build eco-friendly homes, we build privacy-friendly digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
