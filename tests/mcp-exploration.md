Playwright MCP Exploration Notes for EPAM Services Navigation

1) Initial page: https://www.epam.com/

2) Services menu:
- Primary locator discovered: getByRole('link', { name: /Services/i })
- Fallback: getByRole('button', { name: /Services/i })
- Hovering triggers a mega menu / dropdown with links.

3) "Explore Our Client Work" link:
- Locator used: getByRole('link', { name: /Explore our client work/i })
- Fallback: getByText(/Explore Our Client Work/i)

4) Client Work heading verification:
- Locator used: getByRole('heading', { name: /Client Work/i })

Screenshots: (captured during MCP exploration) - not available inline. Please run the tests locally to capture screenshots.

Notes:
- The test uses resilient role-based locators and fallbacks to text.
- Navigation wait uses networkidle for reliability.
- Timeouts are increased for the final assertion to accommodate page load.
