/**
 * Main JavaScript file for the site
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully');
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if (themeIcon) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            if (document.documentElement.classList.contains('dark')) {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Add copy button functionality for code blocks
    const addCopyButtons = () => {
        // Target all pre elements within the prose container
        const codeBlocks = document.querySelectorAll('.prose pre');
        
        codeBlocks.forEach(pre => {
            // Check if this pre already has a wrapper
            if (pre.parentNode.classList.contains('code-block-wrapper')) {
                return;
            }
            
            // Create the wrapper div
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            wrapper.style.position = 'relative';
            
            // Create the copy button
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = '<i class="fa fa-copy"></i>';
            copyButton.setAttribute('aria-label', 'Copy code');
            copyButton.setAttribute('title', 'Copy code');
            
            // Place pre in the DOM
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
            wrapper.appendChild(copyButton);
            
            // Add click handler
            copyButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Get code text content
                const codeEl = pre.querySelector('code');
                const textToCopy = codeEl ? codeEl.textContent : pre.textContent;
                
                // Copy to clipboard with fallback
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(textToCopy)
                        .then(() => {
                            // Success state
                            copyButton.innerHTML = '<i class="fa fa-check"></i>';
                            copyButton.classList.add('success');
                            
                            setTimeout(() => {
                                copyButton.innerHTML = '<i class="fa fa-copy"></i>';
                                copyButton.classList.remove('success');
                            }, 2000);
                        })
                        .catch(err => {
                            console.error('Failed to copy: ', err);
                            copyButton.innerHTML = '<i class="fa fa-times"></i>';
                            copyButton.classList.add('error');
                            
                            setTimeout(() => {
                                copyButton.innerHTML = '<i class="fa fa-copy"></i>';
                                copyButton.classList.remove('error');
                            }, 2000);
                        });
                } else {
                    // Fallback for older browsers
                    try {
                        const textArea = document.createElement('textarea');
                        textArea.value = textToCopy;
                        textArea.style.position = 'fixed';
                        textArea.style.left = '-999999px';
                        textArea.style.top = '-999999px';
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        
                        copyButton.innerHTML = '<i class="fa fa-check"></i>';
                        copyButton.classList.add('success');
                        
                        setTimeout(() => {
                            copyButton.innerHTML = '<i class="fa fa-copy"></i>';
                            copyButton.classList.remove('success');
                        }, 2000);
                    } catch (err) {
                        console.error('Fallback copy failed: ', err);
                        copyButton.innerHTML = '<i class="fa fa-times"></i>';
                        copyButton.classList.add('error');
                        
                        setTimeout(() => {
                            copyButton.innerHTML = '<i class="fa fa-copy"></i>';
                            copyButton.classList.remove('error');
                        }, 2000);
                    }
                }
            });
        });
    };
    
    // Run on page load
    addCopyButtons();
    
    // Re-run if content changes
    document.addEventListener('contentLoaded', addCopyButtons);
}); 