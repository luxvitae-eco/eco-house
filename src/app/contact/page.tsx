'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SinglePageGradient } from '@/components/gradients/single-page-gradient';
import { SinglePageCardGradient } from '@/components/gradients/single-page-card-gradient';
import { NavigationBar } from '@/components/home/header/navigation-bar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/single-page.css';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('EmailJS public key not found in environment variables');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Get environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check environment variables.');
      }

      // Get the selected service value from the hidden input or select
      const serviceValue = formData.get('service') || 'Not selected';

      const templateParams = {
        from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        reply_to: formData.get('email'),
        phone: formData.get('phone') || 'Not provided',
        company: formData.get('company') || 'Not provided',
        service: serviceValue,
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status === 200) {
        toast({
          title: 'Message sent successfully!',
          description: "Thank you for contacting us. We'll get back to you soon.",
        });

        form.reset();
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      toast({
        title: 'Failed to send message',
        description: `Please try again or contact us directly. Error: ${errorMessage}`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <NavigationBar />
      <div className="relative min-h-screen">
        <SinglePageGradient />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto pt-32 pb-16 px-6 lg:px-8">
            {/* contect messsage */}
            <section className="max-w-2xl text-center mx-auto mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Get in Touch</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Have questions about our eco-house solutions? We'd love to hear from you. Send us a message and we'll
                respond as soon as possible.
              </p>
            </section>

            {/* contect form */}
            <section className="mx-auto mt-16 max-w-xl">
              <Card className="relative overflow-hidden bg-background/80 backdrop-blur-sm">
                <SinglePageCardGradient />

                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>

                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" name="firstName" type="text" required className="bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input id="lastName" name="lastName" type="text" required className="bg-background/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-background/50"
                        placeholder="+34 952 76 87 60"
                      />
                    </div>
                    {/* tel field here  */}
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (optional)</Label>
                      <Input id="company" name="company" type="text" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select name="service">
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eco-house">Eco-House Plans</SelectItem>
                          <SelectItem value="design">Design Services</SelectItem>
                          <SelectItem value="development">Development & Construction</SelectItem>
                          <SelectItem value="consulting">Consulting Services</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="service" id="service-hidden" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" type="text" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Separator className="my-6" />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>

            <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-16" />

            {/* contect privacy */}
            <section className="mx-auto max-w-xl text-center">
              <div className="rounded-lg border text-card-foreground shadow-md relative overflow-hidden bg-background/80 backdrop-blur-sm mt-6 p-8 space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Your Privacy Matters
                </h3>
                <p className="text-justify text-muted-foreground">
                  We respect your privacy and are committed to protecting your personal information. The information you
                  provide will only be used to respond to your inquiry about our eco-house solutions.
                </p>
                <p className="text-justify text-muted-foreground">
                  Once we receive your contact request, our team will review it and reach out to you directly using the
                  contact details you've provided. We typically respond within 24 hours during business days.
                </p>
                <p className="text-sm text-muted-foreground">
                  Your data is secure with us and will not be shared with third parties.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* <Separator className="shrink-0 bg-border h-[1px] w-full border-light my-24" /> */}
      </div>
      <Toaster />
    </>
  );
}
