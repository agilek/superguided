// AffiliateTracker.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Cookie helper functions
const setCookie = (name, value, days) => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
};

const getCookie = (name) => {
  const cookieMatch = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return cookieMatch ? cookieMatch[2] : null;
};

// Main affiliate tracker component
const AffiliateTracker = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('AffiliateTracker mounted/updated');
    console.log('Current location:', location.pathname);
    console.log('Current search:', location.search);
    
    const params = new URLSearchParams(location.search);
    const affiliateId = params.get('id');
    const storedAffiliateId = getCookie('affiliateId');
    
    console.log('URL affiliate ID:', affiliateId);
    console.log('Stored affiliate ID:', storedAffiliateId);

    // Always update cookie with latest affiliate ID from URL
    if (affiliateId) {
      setCookie('affiliateId', affiliateId, 30); // 30 days persistence
      console.log('Affiliate ID updated in cookie:', affiliateId);
    } 
    // If no affiliate ID in URL but one exists in cookies, immediately update URL
    else if (storedAffiliateId) {
      console.log('No affiliate ID in URL, but found in cookies:', storedAffiliateId);
      params.set('id', storedAffiliateId);
      const newSearch = params.toString();
      console.log('Updating URL with new search:', newSearch);
      
      // Update URL without causing a navigation/reload
      navigate({
        pathname: location.pathname,
        search: newSearch
      }, { replace: true });
      console.log('URL update completed');
    }
  }, [location.pathname, location.search, navigate]);

  // This component doesn't render anything
  return null;
};

// Custom Link component that automatically adds affiliate ID
const AffiliateLink = ({ to, children, ...props }) => {
  const affiliateId = getCookie('affiliateId');
  
  // If we have an affiliate ID, append it to the URL
  const href = affiliateId ? `${to}${to.includes('?') ? '&' : '?'}id=${affiliateId}` : to;

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};

export { AffiliateLink };
export default AffiliateTracker;