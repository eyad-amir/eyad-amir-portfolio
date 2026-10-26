# Validation

- Clean `npm ci` succeeded in a separate scratch directory: 136 packages installed.
- Final `npm run build` succeeded after the skill consolidation.
- Production preview rendered in the in-app browser with no new console errors or warnings after the React 18 image attribute fix.
- Desktop dark and light appearances visually inspected; manual theme selection survived reload.
- Mobile checked at a 390px viewport override: hamburger opens, section selection closes it, and document width matches viewport width without horizontal overflow.
- Project anchor navigation, active navigation highlighting and contact copy feedback checked. Clipboard returned the visible “Copied!” status.
- All skills consolidated into one Core skills collection across six categories, per the latest request; no Currently learning heading remains.
- Supplied portrait extracted successfully. Project image remains an explicitly labeled illustrative placeholder. Downloadable CV replaced with the user-supplied Eyad_Amir_CV_v4.pdf; PDF readability verified.
- Main bundle: approximately 95.22 KB gzip; CSS approximately 5.16 KB gzip. Portrait approximately 16.18 KB; dashboard placeholder approximately 44.98 KB.
- Lighthouse was not run. No 90+ score is claimed.
- Repository created and source uploaded to eyad-amir/eyad-amir-portfolio. GitHub Linux runner passed npm ci and npm run build. Pages source configured as GitHub Actions.
