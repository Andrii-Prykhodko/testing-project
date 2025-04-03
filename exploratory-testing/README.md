# Overview
This report presents findings from exploratory testing of the Promotions page (/promotions) and a specific promotion page (/promotions/230301_mar23_ca_to_rfs). The testing was conducted as a visitor (logged-out user) to evaluate accessibility, usability, and overall user experience.

# Exploratory Testing Report – Promotions Section

## Testing Focus:
- Is the information accessible without logging in?
- Are promotions clearly displayed and functional?
- Are there any usability issues or bugs?

## 2. Testing Scenarios
### 2.1 Promotions Page (/promotions)
Scenario 1: Promotions List is Accessible
-  Expected Result:

1. All available promotions should be visible without requiring login.

2. Each promotion should have a title, image, short description, and a "Read More" link.

3. Clicking a "Read More" promotion should open its detailed page.

Scenario 2: Promotion Details are Clear
-  Expected Result:

1. Each promotion card should display key details (title, brief description).

2. Information should be legible and well-formatted.

## 1. Issues Found on /promotions Page

#### **Missing Promotion Images**
Some promotion images are not displayed, affecting the visual consistency of the page.

#### **Misaligned Buttons on Promotion Cards**
The buttons within the promotion cards are not properly aligned, which impacts the UI/UX and may confuse users.

#### **Inconsistent Button Labels**
The "Opt In" button does not have a standardized label. Variations include:
- "Opt In Here"
- "Opt In"
- "Play Now"
- "Optin"

This inconsistency may confuse users about the intended action and reduce clarity.

### 2.2 Specific Promotion Page (/promotions/230301_mar23_ca_to_rfs)
Scenario 1: Full Promotion Details are Visible
-  Expected Result:

1. The promotion should clearly display participation requirements.

2. Users should not be required to log in to view essential details.

Scenario 2: Call-to-Action (CTA) is Clear
-  Expected Result:

1. A clear "Optin" button should be present.

2. The CTA should indicate what will happen when clicked (e.g., "Login to Participate").

### 2. Issues Found on /promotions/230301_mar23_ca_to_rfs (Specific Promotion Page)

#### **Unreadable Text Below the Table**
The competition progress message contains placeholder variables instead of actual values:

Competition WITHOUT underscores Competition slug: *230301mar23catorfsdeposit*,
You have opted in and have progressed { 230301mar23catorfsdeposit.currentProgress } points!
The same issue occurs for other competition slugs.

#### **Incorrect Currency Symbol in Table**
In one of the rows, instead of the € symbol, an unknown character is displayed:

30,000  50 x 0.50��  Big Bad Wolf

This may indicate an encoding issue or a missing font problem.

#### **Inconsistent Text Sizes below the Table**
Some text elements are significantly larger than others, creating an inconsistent visual experience.

### Key UX Concerns:
1. Missing images and inconsistent button labels reduce clarity and trust in the promotions section.
2. Misaligned UI elements affect the visual appeal and usability.
3. Placeholder text in the progress section suggests a data-binding issue, which may confuse users.
4. Incorrect currency symbol may mislead users regarding the rewards or prizes.
5. Inconsistent font sizes create a lack of design uniformity.

### Suggested Fixes:
1. Ensure all promotion images load correctly.
2. Standardize button labels across the page to ensure consistency.
3. Fix alignment issues for a cleaner and more cohesive UI.
4. Correct text rendering issues in the competition progress section to avoid placeholder variables.
5. Resolve the incorrect currency symbol by checking encoding settings and font rendering.
6. Adjust font sizes for a uniform look and improved readability across all text elements.
