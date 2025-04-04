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
    
    // Initialize syntax highlighting if Prism is available
    // This runs after Prism finishes its highlighting
    if (typeof Prism !== 'undefined') {
        Prism.hooks.add('complete', function(env) {
            // Only run once per code block
            if (env.element.parentNode._enhancedWithLineNumbers) return;
            
            setTimeout(enhanceCodeBlocks, 100); // Small delay to ensure Prism has finished
        });
    }
    
    // Add line numbers and copy button functionality for code blocks
    const enhanceCodeBlocks = () => {
        // Target all pre elements within the prose container
        const codeBlocks = document.querySelectorAll('.prose pre');
        
        codeBlocks.forEach(pre => {
            // Mark as processed to avoid duplicate processing
            pre._enhancedWithLineNumbers = true;
            
            // Check if this pre already has a wrapper
            if (pre.parentNode.classList.contains('code-block-wrapper')) {
                return;
            }
            
            // Create the wrapper div
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            
            // Get the code element
            const codeEl = pre.querySelector('code');
            
            // Store the original lines for the copy operation
            let originalLines = [];
            
            if (codeEl) {
                // If Prism has already processed this block, we need a different approach
                if (codeEl.classList.contains('language-none') || 
                    !codeEl.className.includes('language-')) {
                    // For non-highlighted code, use our original approach
                    const codeText = codeEl.textContent;
                    originalLines = codeText.split('\n');
                    
                    // Remove the last line if it's empty (common in code blocks)
                    if (originalLines[originalLines.length - 1] === '') {
                        originalLines.pop();
                    }
                    
                    // Clear the code element first
                    codeEl.textContent = '';
                    
                    // Create each line separately with proper DOM structure
                    originalLines.forEach(line => {
                        const lineElement = document.createElement('span');
                        lineElement.className = 'line';
                        lineElement.textContent = line;
                        codeEl.appendChild(lineElement);
                        
                        // Add a line break
                        codeEl.appendChild(document.createElement('br'));
                    });
                } else {
                    // For Prism-highlighted code, we need to preserve the highlighting
                    // Get original text for copying
                    originalLines = codeEl.textContent.split('\n');
                    if (originalLines[originalLines.length - 1] === '') {
                        originalLines.pop();
                    }
                    
                    // Add line spans around the content of each line
                    const codeContent = codeEl.innerHTML;
                    const codeLines = codeContent.split('\n');
                    
                    // Remove the last line if it's empty
                    if (codeLines[codeLines.length - 1] === '') {
                        codeLines.pop();
                    }
                    
                    let wrappedContent = '';
                    codeLines.forEach(line => {
                        // Don't wrap empty lines in spans to avoid extra height
                        if (line.trim() === '') {
                            wrappedContent += '<span class="line"></span>\n';
                        } else {
                            wrappedContent += `<span class="line">${line}</span>\n`;
                        }
                    });
                    
                    codeEl.innerHTML = wrappedContent;
                }
            }
            
            // Create the copy button with SVG icon
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg><span>Copy</span>';
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
                
                // Get code content but exclude line numbers
                let textToCopy = '';
                
                if (codeEl && originalLines.length) {
                    // Get text content without line numbers using our stored originalLines
                    textToCopy = originalLines.join('\n');
                } else {
                    textToCopy = pre.textContent;
                }
                
                // Copy to clipboard with fallback
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(textToCopy)
                        .then(() => {
                            // Success state
                            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Copied!</span>';
                            copyButton.classList.add('copy-success');
                            
                            setTimeout(() => {
                                copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg><span>Copy</span>';
                                copyButton.classList.remove('copy-success');
                            }, 2000);
                        })
                        .catch(err => {
                            console.error('Failed to copy: ', err);
                            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg><span>Error!</span>';
                            copyButton.classList.add('copy-error');
                            
                            setTimeout(() => {
                                copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg><span>Copy</span>';
                                copyButton.classList.remove('copy-error');
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
                        
                        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Copied!</span>';
                        copyButton.classList.add('copy-success');
                        
                        setTimeout(() => {
                            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg><span>Copy</span>';
                            copyButton.classList.remove('copy-success');
                        }, 2000);
                    } catch (err) {
                        console.error('Fallback copy failed: ', err);
                        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg><span>Error!</span>';
                        copyButton.classList.add('copy-error');
                        
                        setTimeout(() => {
                            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg><span>Copy</span>';
                            copyButton.classList.remove('copy-error');
                        }, 2000);
                    }
                }
            });
        });
    };
    
    // Helper function to escape HTML
    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
    
    // Run on page load
    enhanceCodeBlocks();
    
    // Re-run if content changes
    document.addEventListener('contentLoaded', enhanceCodeBlocks);
}); 