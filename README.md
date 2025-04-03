# Testing Project

## Overview
This repository contains automated tests for verifying web application functionality, along with exploratory testing reports.

---

## Bug Found During `SignUp.spec.ts` Testing
While developing the automated test `SignUp.spec.ts`, a critical issue was discovered:  
**It is theoretically possible to register a new user who is under the minimum allowed age (18 years old).**  

### **Bug Description**
- **Expected Behavior:** The system should prevent users younger than 18 from registering.
- **Actual Behavior:** When entering a birthdate indicating an age under 18, the registration still succeeds.

### **Bug Reproduction**
The GIF below demonstrates the issue:

![SignUp Bug](test-automation/media/signup_bug.gif)
