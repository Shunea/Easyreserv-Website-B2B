import { useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { X, Settings, Cookie } from 'lucide-react';
import { Link } from 'wouter';

export function CookieConsent() {
  const { t, language } = useLanguage();
  const { hasConsented, acceptAll, rejectAll, setCustomPreferences } = useCookieConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [customPrefs, setCustomPrefs] = useState({
    essential: true,
    analytics: true,
  });

  if (hasConsented) {
    return null;
  }

  if (showCustomize) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/50 backdrop-blur-sm" data-testid="cookie-customize-modal">
        <Card className="max-w-2xl mx-auto shadow-2xl border-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl">{t('cookie_consent.settings_title')}</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCustomize(false)}
                data-testid="button-close-customize"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <CardDescription>{t('cookie_consent.settings_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-medium">{t('cookie_consent.essential')}</Label>
                <p className="text-sm text-muted-foreground">{t('cookie_consent.essential_desc')}</p>
              </div>
              <Switch
                checked={true}
                disabled={true}
                data-testid="switch-essential"
              />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-medium">{t('cookie_consent.analytics')}</Label>
                <p className="text-sm text-muted-foreground">{t('cookie_consent.analytics_desc')}</p>
              </div>
              <Switch
                checked={customPrefs.analytics}
                onCheckedChange={(checked) => setCustomPrefs({ ...customPrefs, analytics: checked })}
                data-testid="switch-analytics"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setShowCustomize(false)}
              className="w-full sm:w-auto"
              data-testid="button-cancel-customize"
            >
              {t('nav.menu')}
            </Button>
            <Button
              onClick={() => {
                setCustomPreferences(customPrefs);
                setShowCustomize(false);
              }}
              className="w-full sm:flex-1"
              data-testid="button-save-preferences"
            >
              {t('cookie_consent.save_preferences')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-t from-black/90 to-black/50 backdrop-blur-md border-t border-white/10" data-testid="cookie-consent-banner">
      <Card className="max-w-5xl mx-auto shadow-2xl border-2">
        <CardHeader>
          <div className="flex items-start gap-3">
            <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <CardTitle className="text-lg md:text-xl mb-2">{t('cookie_consent.title')}</CardTitle>
              <CardDescription className="text-sm md:text-base">
                {t('cookie_consent.description')}{' '}
                <Link 
                  href={language === 'ro' ? '/policies' : `/${language}/policies`} 
                  className="text-primary hover:underline"
                  data-testid="link-cookie-policy"
                >
                  {t('cookie_consent.learn_more')}
                </Link>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col sm:flex-row gap-2 pt-0">
          <Button
            variant="outline"
            onClick={rejectAll}
            className="w-full sm:w-auto"
            data-testid="button-reject-all"
          >
            {t('cookie_consent.reject_all')}
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowCustomize(true)}
            className="w-full sm:w-auto"
            data-testid="button-customize"
          >
            <Settings className="w-4 h-4 mr-2" />
            {t('cookie_consent.customize')}
          </Button>
          <Button
            onClick={acceptAll}
            className="w-full sm:flex-1"
            data-testid="button-accept-all"
          >
            {t('cookie_consent.accept_all')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
