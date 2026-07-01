import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return { title: t('privacy.title') };
}

export default function PrivacyPage() {
  const t = useTranslations('common');

  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-lumina-50/30 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('privacy.title')}</h1>
          <p className="text-slate-500 max-w-xl mx-auto">{t('privacy.updated')}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h2>1. What Information We Collect</h2>
          <p>When you submit an inquiry through our contact form, we collect the information you voluntarily provide:</p>
          <ul>
            <li><strong>Contact Information</strong>: Name, email, phone number, company name</li>
            <li><strong>Business Information</strong>: Service interest, budget range, project description</li>
          </ul>
          <p>When you subscribe to our newsletter, we only collect your email address.</p>

          <h2>2. How We Use Your Information</h2>
          <p>Your information is used solely for:</p>
          <ul>
            <li>Responding to your inquiries with proposals and quotes</li>
            <li>Sending newsletters you have actively subscribed to</li>
            <li>Improving our service quality and client experience</li>
          </ul>
          <p>We <strong>do not</strong> sell, rent, or share your information with third parties for marketing purposes.</p>

          <h2>3. Data Storage & Security</h2>
          <p>Your data is stored in Supabase (AWS infrastructure) with:</p>
          <ul>
            <li>Full HTTPS encryption in transit</li>
            <li>Row Level Security at the database level</li>
            <li>Only authenticated internal admins can view submitted data</li>
            <li>Automatic daily database backups</li>
          </ul>

          <h2>4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. Contact us at hello@lumina.tech.</p>

          <h2>5. Contact</h2>
          <p>For privacy questions: hello@lumina.tech | 400-888-9999 | Luoyang, Henan, China</p>
        </div>
      </section>
    </>
  );
}
