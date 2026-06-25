import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/fancy.css';

const BookingSuccessPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!sessionId) {
        setError(t('booking_success.noSession'));
        setLoading(false);
        return;
      }

      try {
        setLoading(false);
      } catch (err) {
        console.error('Erreur récupération détails:', err);
        setError(t('booking_success.fetchError'));
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [sessionId, t]);

  if (loading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center relative overflow-hidden">
        <div className="glass-card p-8 text-center relative z-10">
          <div className="animate-spin h-10 w-10 border-2 border-[#6CDCFF] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-paragraph text-gray-300">{t('booking_success.loading')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center relative overflow-hidden">
        <div className="glass-card p-8 text-center max-w-md relative z-10">
          <div className="icon-container bg-[#2054A8] mx-auto mb-6">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-title-h2 text-white mb-4">{t('booking_success.error')}</h1>
          <p className="text-paragraph text-gray-300 mb-6">{error}</p>
          <Link to="/services/testing" className="btn-enduraw">
            {t('booking_success.backToTests')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white pt-20 relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div className="relative z-10 space-y-8">

          {/* Success Header */}
          <div className="glass-card p-8 text-center">
            <div className="icon-container bg-[#2054A8] mx-auto mb-6">
              <svg className="w-6 h-6 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-title text-white mb-4">
              {t('booking_success.title')}
            </h1>
            <p className="text-paragraph text-gray-300">
              {t('booking_success.subtitle')}
            </p>
          </div>

          {/* Success Message */}
          <div className="glass-card p-6">
            <h2 className="text-title-h2 text-[#6CDCFF] mb-2">
              {t('booking_success.congrats')}
            </h2>
            <p className="text-paragraph text-white/80">
              {t('booking_success.paymentProcessed')}
            </p>
          </div>

          {/* Session ID */}
          {sessionId && (
            <div className="glass-card p-4">
              <p className="text-body-uppercase text-gray-300 mb-1">{t('booking_success.paymentRef')}</p>
              <p className="font-mono text-[#6CDCFF] text-xs break-all">{sessionId}</p>
            </div>
          )}

          {/* Next Steps */}
          <div className="glass-card p-8">
            <h2 className="text-subtitle text-white mb-8 text-center">
              {t('booking_success.nextSteps')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="icon-container bg-[#2054A8] mx-auto mb-4">
                  <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-body-uppercase text-white mb-2">{t('booking_success.checkEmail')}</h3>
                <p className="text-paragraph text-gray-300 text-sm">
                  {t('booking_success.checkEmail_p')}
                </p>
              </div>

              <div className="text-center">
                <div className="icon-container bg-[#2054A8] mx-auto mb-4">
                  <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-body-uppercase text-white mb-2">{t('booking_success.prepare')}</h3>
                <p className="text-paragraph text-gray-300 text-sm">
                  {t('booking_success.prepare_p')}
                </p>
              </div>

              <div className="text-center">
                <div className="icon-container bg-[#2054A8] mx-auto mb-4">
                  <svg className="w-5 h-5 text-[#6CDCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-body-uppercase text-white mb-2">{t('booking_success.location')}</h3>
                <p className="text-paragraph text-gray-300 text-sm">
                  {t('booking_success.location_p')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-subtitle text-white mb-4">
              {t('booking_success.needHelp')}
            </h2>
            <p className="text-paragraph text-gray-300 mb-6">
              {t('booking_success.needHelp_p')}
            </p>
            <Link to="/contact" className="btn-enduraw">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t('booking_success.contact')}
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/services/testing" className="btn-enduraw">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {t('booking_success.bookAnother')}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase border border-white/20 rounded text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {t('booking_success.backHome')}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
