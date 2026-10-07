"""Optional authoring step: pip install fonttools brotli, then run this script.

The normal build uses committed WOFF2 files and needs no Python packages.
Modified font family names differ from the original reserved names (SIL OFL).
"""
import json
import os
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
template = Path(os.environ.get('PHYSICA_TEMPLATE_FONTS', root / 'font-sources'))
text = ''.join(p.read_text() for p in [*root.glob('*.html'), root/'src/content.mjs', root/'src/section-content.mjs', root/'src/section-library.mjs', root/'src/diagrams.mjs', root/'src/topic-guides.mjs', root/'assets/book-labs.mjs', root/'assets/book-motion.mjs', root/'assets/book-models.mjs', root/'assets/flash.mjs', root/'assets/flash-native.mjs', root/'assets/native-oscillators.mjs', root/'assets/native-integrators.mjs', root/'assets/native-mechanics.mjs', root/'assets/native-chain.mjs', root/'assets/native-waves.mjs', root/'assets/native-timelines.mjs', root/'assets/native-diagrams.mjs', root/'assets/native-analytic.mjs', root/'assets/native-optics.mjs', root/'assets/native-fields.mjs', root/'assets/field-specs.mjs', root/'assets/native-fundamentals.mjs', root/'assets/fundamental-specs.mjs', root/'assets/native-expansion.mjs', root/'assets/expansion-specs.mjs', root/'assets/native-aperture.mjs', root/'assets/aperture-specs.mjs', root/'assets/native-rays.mjs', root/'assets/ray-specs.mjs', root/'assets/native-beam.mjs', root/'assets/beam-specs.mjs', root/'assets/native-diffraction.mjs', root/'assets/diffraction-specs.mjs', root/'assets/native-potential.mjs',root/'assets/native-circuits.mjs', root/'assets/potential-specs.mjs',root/'assets/circuit-specs.mjs', root/'assets/native-electromagnet.mjs', root/'assets/electromagnet-specs.mjs', root/'assets/native-dynamics.mjs', root/'assets/dynamics-specs.mjs', root/'assets/native-light.mjs', root/'assets/light-specs.mjs', root/'assets/native-quantum.mjs', root/'assets/quantum-specs.mjs', root/'assets/native-refraction.mjs', root/'assets/refraction-specs.mjs', root/'assets/optics-specs.mjs', root/'assets/analytic-specs.mjs', root/'src/native-timelines.json', root/'tools/flash-build.mjs', root/'assets/app.mjs', root/'tools/build.mjs', root/'tools/navigation-build.mjs', root/'assets/navigation.mjs', root/'src/catalog.json', root/'tools/publications-build.mjs', root/'src/publications.json', root/'assets/network.mjs', root/'tools/network-build.mjs', root/'tools/about-guide.mjs'])
chars = set(map(ord, text)) | set(range(32, 127))
report = {'tool': 'fontTools 4.50.0 + Brotli 1.1.0', 'fonts': [],
          'hangulCodepoints': sorted(c for c in chars if 0xAC00 <= c <= 0xD7A3)}
for original, family in [('NotoSansKR-Variable.subset.woff2', 'PhysicaText'), ('SUITE-Variable.woff2', 'PhysicaTitle')]:
    source = template/original
    font = TTFont(source, recalcTimestamp=False)
    options = subset.Options()
    options.flavor = 'woff2'
    options.hinting = False
    options.recalc_timestamp = False
    options.name_IDs = ['*']
    options.name_languages = ['*']
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=chars)
    subsetter.subset(font)
    # Preserve copyright, attribution and license name records unchanged.
    names = {1: family, 2: 'Regular', 3: family+';2026;LessonSubset',
             4: family+' Regular', 6: family+'-Regular', 16: family, 17: 'Regular'}
    for record in font['name'].names:
        if record.nameID in names:
            record.string = names[record.nameID].encode(record.getEncoding())
    destination = root/'assets/fonts'/f'{family}.woff2'
    font.flavor = 'woff2'
    font.save(destination)
    report['fonts'].append({'source': original, 'family': family,
        'sourceBytes': source.stat().st_size, 'subsetBytes': destination.stat().st_size})
(root/'docs/font-report.json').write_text(json.dumps(report, indent=2)+'\n')
before = sum(f['sourceBytes'] for f in report['fonts'])
after = sum(f['subsetBytes'] for f in report['fonts'])
print(f'Local text fonts: {before:,} → {after:,} bytes ({1-after/before:.1%} smaller).')
