import re
import json

import babel


locale_regions = {}
for locale in babel.localedata.locale_identifiers():
    locale_parts = locale.split('_')
    if len(locale_parts) > 1 and re.match(r'^[A-Z]{2}$', locale_parts[-1]):
        lang = locale_parts[0]
        region = locale_parts[-1]
        if lang not in locale_regions:
            name = babel.Locale(lang).language_name.title()
            locale_regions[lang] = { 'name': name, 'regions': [region] }
        elif region not in locale_regions[lang]['regions']:
            locale_regions[lang]['regions'].append(region)


with open('../src/data/locale_regions.json', 'w+') as f:
    json.dump(locale_regions, f)
