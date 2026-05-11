// Mobile navigation drawer toggle
const menuToggle = document.getElementById('menu-toggle');
const navDrawer = document.getElementById('nav-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const drawerClose = document.getElementById('drawer-close');
const siteHeader = document.querySelector('header');
const ACTIVE_NAV_KEY = 'goodwave-active-nav';

function openDrawer() {
  if (navDrawer) navDrawer.classList.remove('-translate-x-full');
  if (drawerOverlay) drawerOverlay.classList.remove('hidden');
}
function closeDrawer() {
  if (navDrawer) navDrawer.classList.add('-translate-x-full');
  if (drawerOverlay) drawerOverlay.classList.add('hidden');
}

if (menuToggle) menuToggle.addEventListener('click', openDrawer);
if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

// Maximum Robustness Active Link Highlighting
function highlightActiveLinks() {
  const currentPath = window.location.pathname.toLowerCase();
  const currentFileName = currentPath.split('/').pop() || 'index.html';
  const desktopNavLinks = document.querySelectorAll('header nav a');
  const drawerNavLinks = document.querySelectorAll('#nav-drawer nav a');
  const savedActiveHref = localStorage.getItem(ACTIVE_NAV_KEY);
  
  // Desktop Navigation
  desktopNavLinks.forEach(link => {
    const href = link.getAttribute('href').toLowerCase();
    const linkFileName = href.split('/').pop() || 'index.html';
    
    // Check for direct filename match or home page variants
    const isCurrentPage = (linkFileName === currentFileName) || 
                        (currentFileName === 'index.html' && linkFileName === '') ||
                        (currentFileName === '' && linkFileName === 'index.html');
    const isMatch = savedActiveHref ? href === savedActiveHref : isCurrentPage;

    if (isMatch) {
      link.classList.add('nav-link-active');
      link.classList.remove('text-on-surface-variant');
    } else {
      link.classList.remove('nav-link-active');
      link.classList.add('text-on-surface-variant');
    }
  });

  // Mobile Drawer Navigation
  drawerNavLinks.forEach(link => {
    const href = link.getAttribute('href').toLowerCase();
    const linkFileName = href.split('/').pop() || 'index.html';
    
    const isCurrentPage = (linkFileName === currentFileName) || 
                        (currentFileName === 'index.html' && linkFileName === '') ||
                        (currentFileName === '' && linkFileName === 'index.html');
    const isMatch = savedActiveHref ? href === savedActiveHref : isCurrentPage;

    if (isMatch) {
      link.classList.add('bg-primary-container/20', 'text-primary', 'border-l-4', 'border-primary');
      link.classList.remove('text-on-surface-variant', 'hover:bg-white/5');
    } else {
      link.classList.remove('bg-primary-container/20', 'text-primary', 'border-l-4', 'border-primary');
      link.classList.add('text-on-surface-variant', 'hover:bg-white/5');
    }
  });
}

function setDesktopActiveLink(activeLink) {
  const desktopNavLinks = document.querySelectorAll('header nav a');

  desktopNavLinks.forEach(link => {
    const isActive = link === activeLink;
    link.classList.toggle('nav-link-active', isActive);
    link.classList.toggle('text-on-surface-variant', !isActive);
  });
}

document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', () => {
    localStorage.setItem(ACTIVE_NAV_KEY, link.getAttribute('href').toLowerCase());
    setDesktopActiveLink(link);
  });
});

document.querySelectorAll('#nav-drawer nav a').forEach(link => {
  link.addEventListener('click', () => {
    localStorage.setItem(ACTIVE_NAV_KEY, link.getAttribute('href').toLowerCase());
  });
});

function setupLandingHeaderVisibility() {
  if (!siteHeader) return;

  const currentPath = window.location.pathname.toLowerCase();
  const currentFileName = currentPath.split('/').pop() || 'index.html';
  const isLandingPage = currentFileName === 'index.html' || currentFileName === '';

  if (!isLandingPage) {
    siteHeader.classList.remove('header-hidden');
    return;
  }

  const toggleHeader = () => {
    const shouldShowHeader = window.scrollY > 80;
    siteHeader.classList.toggle('header-hidden', !shouldShowHeader);
  };

  toggleHeader();
  window.addEventListener('scroll', toggleHeader, { passive: true });
}

// Ensure it runs on all possible triggers
highlightActiveLinks();
setupLandingHeaderVisibility();
window.addEventListener('load', highlightActiveLinks);
document.addEventListener('DOMContentLoaded', highlightActiveLinks);
// Extra insurance for dynamic transitions if any
window.addEventListener('popstate', highlightActiveLinks);
