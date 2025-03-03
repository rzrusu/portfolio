import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'performance-plugin',
  setup() {
    // Add performance monitoring
    if (process.client) {
      // Measure and log core web vitals
      window.addEventListener('load', () => {
        // Use requestIdleCallback to not block the main thread
        if ('requestIdleCallback' in window) {
          // @ts-ignore
          window.requestIdleCallback(() => {
            // Log performance metrics
            if ('performance' in window) {
              const performanceEntries = performance.getEntriesByType('navigation')
              if (performanceEntries.length > 0) {
                const timing = performanceEntries[0] as PerformanceNavigationTiming
                console.log('Time to first byte:', timing.responseStart - timing.requestStart)
                console.log('DOM Content Loaded:', timing.domContentLoadedEventEnd - timing.startTime)
                console.log('Page Load:', timing.loadEventEnd - timing.startTime)
              }
            }
          })
        }
      })

      // Prefetch links in viewport
      const prefetchVisibleLinks = () => {
        const links = document.querySelectorAll('a')
        if ('IntersectionObserver' in window) {
          const linkObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const link = entry.target as HTMLAnchorElement
                if (link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
                  // Prefetch the URL
                  const prefetchLink = document.createElement('link')
                  prefetchLink.rel = 'prefetch'
                  prefetchLink.href = link.href
                  document.head.appendChild(prefetchLink)
                  // Stop observing this link
                  linkObserver.unobserve(link)
                }
              }
            })
          })
          
          links.forEach(link => linkObserver.observe(link))
        }
      }

      // Run after the page has loaded
      window.addEventListener('load', () => {
        if ('requestIdleCallback' in window) {
          // @ts-ignore
          window.requestIdleCallback(prefetchVisibleLinks)
        } else {
          setTimeout(prefetchVisibleLinks, 2000)
        }
      })
    }
  }
}) 