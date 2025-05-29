import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const ResetConsentButton = () => {
  const [, , removeCookie] = useCookies(['userConsent']);

  const resetConsent = () => {
    removeCookie('userConsent', { path: '/' });
    window.location.reload();
  };

  return (
    <Link onClick={resetConsent} className="hover:underline">
      Cookie-Einwilligung zurücksetzen
    </Link>
  );
};

export default ResetConsentButton;
