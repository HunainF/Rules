document.addEventListener('DOMContentLoaded', () => {
    // Platform switching functionality
    const channels = document.querySelectorAll('.channel');
    const ruleSections = document.querySelectorAll('.rules-section');
    const channelInfo = document.querySelector('.channel-info');
    const messageInput = document.querySelector('.message-input input');
    
    channels.forEach(channel => {
        channel.addEventListener('click', () => {
            // Update active channel
            document.querySelector('.channel.active').classList.remove('active');
            channel.classList.add('active');
            
            // Show corresponding rules section
            const platform = channel.getAttribute('data-platform');
            document.querySelector('.rules-section.active').classList.remove('active');
            document.getElementById(`${platform}-rules`).classList.add('active');
            
            // Update header and input placeholder
            const icon = platform === 'discord' ? 'fa-discord' : 'fa-twitch';
            channelInfo.innerHTML = `<i class="fab ${icon}"></i><span>${platform}-rules</span>`;
            messageInput.placeholder = `Message #${platform}-rules`;
        });
    });
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            
            // Show corresponding tab content
            const tabId = tab.getAttribute('data-tab');
            document.querySelector('.tab-content.active').classList.remove('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const ruleItems = document.querySelectorAll('.rule-item');
        
        ruleItems.forEach(item => {
            const title = item.querySelector('.rule-title').textContent.toLowerCase();
            const content = item.querySelector('.rule-content').textContent.toLowerCase();
            
            if (title.includes(query) || content.includes(query)) {
                item.style.display = 'block';
                item.classList.add('highlight');
            } else {
                item.style.display = 'none';
                item.classList.remove('highlight');
            }
        });
    });
    
    // Tooltip functionality
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = element.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
    
    // Add toggle buttons for examples and punishment indicators
    const ruleItems = document.querySelectorAll('.rule-item');
    
    ruleItems.forEach(item => {
        const ruleContent = item.querySelector('.rule-content');
        const examples = item.querySelector('.rule-examples');
        const punishment = item.querySelector('.rule-severity');
        
        if (examples) {
            const exampleToggle = document.createElement('div');
            exampleToggle.classList.add('example-toggle');
            exampleToggle.innerHTML = '<i class="fas fa-chevron-right"></i> Show Examples';
            
            ruleContent.appendChild(exampleToggle);
            examples.style.display = 'none';
            
            exampleToggle.addEventListener('click', () => {
                if (examples.style.display === 'none') {
                    examples.style.display = 'block';
                    exampleToggle.innerHTML = '<i class="fas fa-chevron-down"></i> Hide Examples';
                } else {
                    examples.style.display = 'none';
                    exampleToggle.innerHTML = '<i class="fas fa-chevron-right"></i> Show Examples';
                }
            });
        }
        
        if (punishment) {
            const punishmentToggle = document.createElement('div');
            punishmentToggle.classList.add('punishment-toggle');
            punishmentToggle.innerHTML = '<i class="fas fa-chevron-right"></i> Show Punishment';
            
            ruleContent.appendChild(punishmentToggle);
            punishment.style.display = 'none';
            
            punishmentToggle.addEventListener('click', () => {
                if (punishment.style.display === 'none') {
                    punishment.style.display = 'block';
                    punishmentToggle.innerHTML = '<i class="fas fa-chevron-down"></i> Hide Punishment';
                } else {
                    punishment.style.display = 'none';
                    punishmentToggle.innerHTML = '<i class="fas fa-chevron-right"></i> Show Punishment';
                }
            });
        }
    });
    
    // Add hover effect for rule items
    ruleItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });
});
