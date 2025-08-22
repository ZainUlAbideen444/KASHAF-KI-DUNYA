# Copilot Instructions for KASHAF-KI-DUNYA

## Project Overview
This is a simple JavaScript/HTML project, primarily consisting of:
- `mama.js`: Contains various JavaScript examples, function patterns, and learning snippets.
- `kashaf.html`: (Not analyzed, but likely the main HTML file for UI)

## Architecture & Patterns
- The codebase is a single-file JavaScript playground, focused on learning and experimenting with functions, loops, and basic JS concepts.
- No frameworks, build tools, or external dependencies are present.
- All logic is written directly in `mama.js` and is intended to be run in-browser or via Node.js for console output.

## Key Conventions
- Functions are defined in multiple styles: declarations, expressions, arrow functions, and higher-order functions.
- Examples include closures, lexical scope, pure/impure functions, and immediately invoked function expressions (IIFE).
- Comments are used extensively to explain concepts and code behavior.
- Variable and function names are simple and descriptive, often in Urdu/English mix for learning purposes.

## Developer Workflow
- No build or test scripts are present; code is run directly.
- To test code, edit `mama.js` and run in browser console or with `node mama.js`.
- No automated testing or linting is configured.

## Integration Points
- No external libraries or APIs are integrated.
- All code is self-contained within the project files.

## Examples of Patterns
- Higher-order function:
  ```js
  function coco(motu){
    return motu(a,b)
  }
  ```
- Closure:
  ```js
  function abcd(){
    let a=10;
    return function(){
      console.log(`a`, a);
    }
  }
  ```
- IIFE:
  ```js
  (function(){
    console.log("kashaf is a orange beauty");
  })();
  ```

## Recommendations for AI Agents
- Focus on clear, beginner-friendly explanations and code samples.
- When editing, preserve comments and teaching notes.
- Avoid introducing frameworks or complex patterns unless requested.
- Reference `mama.js` for all code changes and examples.

---
If any section is unclear or missing, please provide feedback so instructions can be improved.
