# Law's Ultimate Rules Website

A modern, responsive Discord-style rules website for community management.

## Features

- **Discord-inspired UI**: Familiar interface that mimics Discord's design
- **Multi-platform Support**: Separate rule sets for Discord and Twitch platforms
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive Elements**: Includes tooltips, severity indicators, and tabbed content
- **Search Functionality**: Search through rules in real-time
- **Beautiful Styling**: Modern, clean aesthetic with proper spacing and typography

## How to Use

1. Simply open the `index.html` file in any modern web browser.
2. Navigate between the Discord and Twitch rules by clicking the corresponding channels in the sidebar.
3. Use the search bar to find specific rules.
4. On the Twitch rules page, use the tabs to view subscription information, stream schedule, and channel point rewards.

## Customization

### Changing Rules Content

Edit the rules content directly in the `index.html` file:

- Discord rules are in the `discord-rules` section
- Twitch rules are in the `twitch-rules` section

### Modifying Styles

All styling is contained in the `styles.css` file, which uses CSS variables for consistent theming:

### Adding More Rules

To add additional rules, copy the existing rule-item structure and modify the content:

```html
<div class="rule-item">
    <div class="rule-title"><i class="fas fa-icon"></i>Rule Title</div>
    <div class="rule-content">Rule description goes here.</div>
    <div class="rule-severity">
        <div class="severity-meter medium">
            <span>Severity: Medium</span>
            <div class="severity-bar">
                <div class="severity-fill"></div>
            </div>
        </div>
    </div>
</div>
```

## Browser Compatibility

This website works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## License

This project is available for personal use. For commercial use, please contact the creator.

---

Created by Law, 2025
